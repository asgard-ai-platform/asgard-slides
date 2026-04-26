import { readFile } from "node:fs/promises";
import path from "node:path";
import { glob } from "tinyglobby";

export interface ChapterInfo {
  startSlide: number;
  title: string;
  subtitle?: string;
}

export interface SiteMeta {
  lang?: string;
  durationMin?: number;
}

export interface RawDeck {
  slug: string;
  pkgDescription: string;
  chapters: ChapterInfo[];
  slideCount: number;
  siteMeta: SiteMeta | undefined;
}

export interface DeckCard {
  slug: string;
  title: string;
  subtitle: string;
  slideCount: number;
  chapterTitles: string[];
  lang: string;
  durationMin: number | undefined;
}

const CHAPTER_OBJECT_RE =
  /\{\s*startSlide\s*:\s*(\d+)\s*,\s*title\s*:\s*"([^"]+)"\s*(?:,\s*subtitle\s*:\s*"([^"]+)"\s*)?\}/g;

/**
 * Extract chapters from a `chapters.ts` source string. Uses a regex rather
 * than evaluating the file because the file imports from `deck-kit`, which
 * we don't want to load in this Node-only build context.
 */
export function parseChaptersSource(src: string): ChapterInfo[] {
  const out: ChapterInfo[] = [];
  for (const m of src.matchAll(CHAPTER_OBJECT_RE)) {
    out.push({
      startSlide: parseInt(m[1], 10),
      title: m[2],
      subtitle: m[3],
    });
  }
  return out;
}

export function deriveDeckCard(raw: RawDeck): DeckCard {
  return {
    slug: raw.slug,
    title: raw.pkgDescription,
    subtitle: raw.chapters[0]?.subtitle ?? "",
    slideCount: raw.slideCount,
    chapterTitles: raw.chapters.map((c) => c.title),
    lang: raw.siteMeta?.lang ?? "zh-TW",
    durationMin: raw.siteMeta?.durationMin,
  };
}

/**
 * Scan `decks/*` from the workspace root, returning a card per deck. Reads
 * `package.json`, `src/chapters.ts`, `src/slides/*.tsx`, and the optional
 * `src/site-meta.ts`.
 */
export async function scanDecks(workspaceRoot: string): Promise<DeckCard[]> {
  const pkgPaths = await glob("decks/*/package.json", {
    cwd: workspaceRoot,
    absolute: true,
  });
  const cards: DeckCard[] = [];
  for (const pkgPath of pkgPaths.sort()) {
    const deckDir = path.dirname(pkgPath);
    const pkg = JSON.parse(await readFile(pkgPath, "utf8"));
    const chaptersSrc = await readFile(
      path.join(deckDir, "src", "chapters.ts"),
      "utf8",
    ).catch(() => "");
    const slideFiles = await glob("src/slides/*.tsx", {
      cwd: deckDir,
      absolute: false,
    });
    const siteMeta = await loadSiteMeta(deckDir);
    cards.push(
      deriveDeckCard({
        slug: pkg.name,
        pkgDescription: pkg.description ?? pkg.name,
        chapters: parseChaptersSource(chaptersSrc),
        slideCount: slideFiles.length,
        siteMeta,
      }),
    );
  }
  return cards;
}

async function loadSiteMeta(deckDir: string): Promise<SiteMeta | undefined> {
  const metaPath = path.join(deckDir, "src", "site-meta.ts");
  const src = await readFile(metaPath, "utf8").catch(() => null);
  if (!src) return undefined;
  // Same regex strategy: parse rather than execute (no TS runtime in Node).
  const lang = /lang\s*:\s*"([^"]+)"/.exec(src)?.[1];
  const dur = /durationMin\s*:\s*(\d+)/.exec(src)?.[1];
  return {
    lang,
    durationMin: dur ? parseInt(dur, 10) : undefined,
  };
}
