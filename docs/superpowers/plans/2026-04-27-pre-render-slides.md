# Pre-rendered Slide Deck Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the asgard-slides workspace to GitHub Pages with one pre-rendered HTML + OG image per deck, plus a static landing page that lists every deck.

**Architecture:** A new `tools/site-builder` workspace package orchestrates a three-stage build per push to `main`: (1) `vite build` each deck SPA with the correct base path, (2) Playwright spins up `vite preview`, snapshots the rendered HTML, injects OG/Twitter meta tags, and screenshots a 1200×630 PNG of slide #1, (3) renders a static landing HTML and assembles everything into `dist-site/`, which GitHub Actions deploys. Deck source code is virtually untouched — one `useEffect` in deck-kit, a `vite.config` base path, and 11 slide files lose a leading `/` in asset URLs.

**Tech Stack:** pnpm workspace, Vite 8, React 19, TypeScript 6, Vitest 4 (for pure-logic unit tests), Playwright 1.59 (already a deck dev dep), GitHub Actions (`actions/deploy-pages@v4`).

**Reference spec:** `docs/superpowers/specs/2026-04-27-pre-render-slides-design.md`

---

## File Structure

**New files**
- `tools/site-builder/package.json` — private pnpm package, depends on playwright + glob
- `tools/site-builder/tsconfig.json` — extends repo `tsconfig.base.json`
- `tools/site-builder/vitest.config.ts` — node env, `src/**/*.test.ts`
- `tools/site-builder/src/deck-metadata.ts` — pure: scan decks, read pkg.json + chapters + slide count + optional site-meta
- `tools/site-builder/src/deck-metadata.test.ts`
- `tools/site-builder/src/inject-meta.ts` — pure: rewrite `<head>` with OG/Twitter meta tags
- `tools/site-builder/src/inject-meta.test.ts`
- `tools/site-builder/src/render-landing.ts` — pure: produce landing HTML string from deck card data
- `tools/site-builder/src/render-landing.test.ts`
- `tools/site-builder/src/snapshot-deck.ts` — Playwright snapshot + OG screenshot per deck (no unit test; verified via end-to-end smoke)
- `tools/site-builder/src/build-site.ts` — orchestrator entry script
- `decks/asgard-ai-agent-workshop/src/site-meta.ts` — optional metadata for landing card
- `.github/workflows/deploy.yml` — Actions workflow

**Modified files**
- `pnpm-workspace.yaml` — add `tools/*`
- `package.json` (root) — add `"build:site"` script
- `.gitignore` — add `dist-site`
- `decks/asgard-ai-agent-workshop/vite.config.ts` — base path from env
- `decks/asgard-ai-agent-workshop/index.html` — strip leading `/` from `<link>` href values; rely on Vite's automatic base resolution
- 11 slide `.tsx` files — `"/assets/..."` → `"assets/..."`
- `packages/deck-kit/src/shell/Deck.tsx` — one useEffect setting `data-hydrated` on `<html>`

---

## Task 1: Workspace prep — add `tools/*` glob

**Files:**
- Modify: `pnpm-workspace.yaml`
- Create: `tools/site-builder/package.json`
- Create: `tools/site-builder/tsconfig.json`

- [ ] **Step 1: Add `tools/*` to pnpm-workspace.yaml**

Edit `pnpm-workspace.yaml`:
```yaml
packages:
  - "packages/*"
  - "decks/*"
  - "tools/*"
```

- [ ] **Step 2: Create `tools/site-builder/package.json`**

```json
{
  "name": "site-builder",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "main": "./src/build-site.ts",
  "scripts": {
    "start": "tsx src/build-site.ts",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "playwright": "^1.59.1",
    "tinyglobby": "^0.2.10"
  },
  "devDependencies": {
    "@types/node": "^24.12.2",
    "tsx": "^4.21.0",
    "typescript": "~6.0.2",
    "vitest": "^4.1.5"
  }
}
```

- [ ] **Step 3: Create `tools/site-builder/tsconfig.json`**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.tsbuildinfo",
    "lib": ["ES2023"],
    "types": ["node"],
    "moduleResolution": "bundler"
  },
  "include": ["src"]
}
```

- [ ] **Step 4: Create `tools/site-builder/vitest.config.ts`**

```ts
/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
```

- [ ] **Step 5: Run `pnpm install` to wire up the new package**

Run: `pnpm install`
Expected: pnpm picks up `tools/site-builder` (output should mention 4 workspace projects).

- [ ] **Step 6: Commit**

```bash
git add pnpm-workspace.yaml tools/site-builder/package.json tools/site-builder/tsconfig.json tools/site-builder/vitest.config.ts pnpm-lock.yaml
git commit -m "chore(workspace): add tools/* glob and site-builder skeleton"
```

---

## Task 2: Vite base path + index.html

**Files:**
- Modify: `decks/asgard-ai-agent-workshop/vite.config.ts`
- Modify: `decks/asgard-ai-agent-workshop/index.html`

- [ ] **Step 1: Add base from env to vite.config.ts**

Edit `decks/asgard-ai-agent-workshop/vite.config.ts` so the exported config object includes:

```ts
export default defineConfig({
  base: process.env.DECK_BASE ?? "/",
  plugins: [react()],
  // ... rest unchanged
});
```

- [ ] **Step 2: Strip leading slashes from `<link>` href in index.html**

Edit `decks/asgard-ai-agent-workshop/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="assets/asgard/asgard-logo-color.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preload" href="assets/asgard/SpaceGrotesk-Variable.woff2" as="font" type="font/woff2" crossorigin />
    <title>Asgard AI Workshop</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

(Keep `src="/src/main.tsx"` with leading `/` — that's a Vite virtual path it resolves itself, not a public asset.)

- [ ] **Step 3: Verify dev still works (base = "/")**

Run: `pnpm -F asgard-ai-agent-workshop dev --port 5174 --strictPort`

In another terminal:
```bash
curl -sf -o /dev/null -w "%{http_code}\n" http://localhost:5174/
curl -sf -o /dev/null -w "%{http_code}\n" http://localhost:5174/assets/asgard/asgard-logo-color.svg
```

Expected: both `200`. Stop dev server.

- [ ] **Step 4: Verify build with base set**

Run: `DECK_BASE=/asgard-slides/asgard-ai-agent-workshop/ pnpm -F asgard-ai-agent-workshop build`

Then inspect:
```bash
grep -E 'href="|src="' decks/asgard-ai-agent-workshop/dist/index.html
```

Expected:
- Vite-generated `<script>` and `<link rel="stylesheet">` (the JS/CSS bundles): URLs prefixed with `/asgard-slides/asgard-ai-agent-workshop/`.
- The two static `<link>` hrefs we authored (`assets/asgard/...`): stay relative (no leading `/`, no prefix). Vite only rewrites absolute paths in `index.html`. Relative paths resolve against the document URL at runtime, so `/asgard-slides/asgard-ai-agent-workshop/index.html` + `href="assets/..."` correctly resolves to `/asgard-slides/asgard-ai-agent-workshop/assets/...`. This is intentional and more deploy-portable than hardcoded prefixes.

- [ ] **Step 5: Commit**

```bash
git add decks/asgard-ai-agent-workshop/vite.config.ts decks/asgard-ai-agent-workshop/index.html
git commit -m "feat(deck): add DECK_BASE env-driven vite base + base-relative index.html assets"
```

---

## Task 3: Slide asset paths — strip leading `/`

**Files:**
- Modify: 11 `.tsx` files under `decks/asgard-ai-agent-workshop/src/slides/`

- [ ] **Step 1: List affected files**

Run from repo root:
```bash
grep -rl '"/assets/' decks/asgard-ai-agent-workshop/src/
```

Expected: 11 files (snapshot of current state — re-confirm before editing).

- [ ] **Step 2: Bulk-rewrite all `"/assets/...` to `"assets/...`**

Run:
```bash
cd decks/asgard-ai-agent-workshop/src && grep -rl '"/assets/' . | xargs sed -i '' 's|"/assets/|"assets/|g'
```

Verify nothing left:
```bash
grep -rln '"/assets/' /Users/williamwang/Documents/executing/reports/pic-claude-code-implement/decks/asgard-ai-agent-workshop/src/
```
Expected: no output.

- [ ] **Step 3: Verify dev still works**

Run: `pnpm -F asgard-ai-agent-workshop dev --port 5174 --strictPort`

Manually open `http://localhost:5174/#1` (the cover) and `http://localhost:5174/#2` (speaker page with avatar) — confirm logos and avatar load. Stop dev.

- [ ] **Step 4: Verify build with base set**

Run: `DECK_BASE=/asgard-slides/asgard-ai-agent-workshop/ pnpm -F asgard-ai-agent-workshop build`

Then start preview at base:
```bash
pnpm -F asgard-ai-agent-workshop exec vite preview --port 4174 --strictPort &
sleep 2
curl -sf -o /dev/null -w "%{http_code}\n" http://localhost:4174/asgard-slides/asgard-ai-agent-workshop/assets/asgard/asgard-logo-color.svg
kill %1
```

Expected: `200`.

- [ ] **Step 5: Commit**

```bash
git add decks/asgard-ai-agent-workshop/src/slides
git commit -m "fix(deck): make slide asset paths base-relative"
```

---

## Task 4: deck-kit hydration signal

**Files:**
- Modify: `packages/deck-kit/src/shell/Deck.tsx`

- [ ] **Step 1: Add hydration-signal useEffect to `<Deck>`**

Inside the `Deck` component body (after the existing `useKeyboardNav` call, before the touch `useEffect`), add:

```tsx
useEffect(() => {
  document.documentElement.setAttribute("data-hydrated", "true");
}, []);
```

(`useEffect` is already imported.)

- [ ] **Step 2: Verify deck-kit unit tests still pass**

Run: `pnpm -F deck-kit test`
Expected: 12 tests pass.

- [ ] **Step 3: Verify the attribute appears in dev**

Run: `pnpm -F asgard-ai-agent-workshop dev --port 5174 --strictPort`

In another terminal:
```bash
sleep 2
curl -s http://localhost:5174/ | grep -o 'data-hydrated' || echo "not in initial HTML — expected (set by client useEffect)"
```

(The attribute is client-set, so `curl` won't see it — that's fine. The Playwright check in Task 9 will assert it appears post-mount.) Stop dev.

- [ ] **Step 4: Commit**

```bash
git add packages/deck-kit/src/shell/Deck.tsx
git commit -m "feat(deck-kit): set html[data-hydrated] after Deck mounts"
```

---

## Task 5: Optional `site-meta.ts` for landing card

**Files:**
- Create: `decks/asgard-ai-agent-workshop/src/site-meta.ts`

- [ ] **Step 1: Create the file**

Create `decks/asgard-ai-agent-workshop/src/site-meta.ts`:

```ts
/**
 * Optional landing-page metadata. The site-builder reads this via dynamic
 * import; if absent, sensible defaults are used (lang="zh-TW", no duration).
 *
 * This file is NOT imported by the deck app itself — it exists only so the
 * landing card can show language and duration alongside the title.
 */
export const siteMeta = {
  lang: "zh-TW",
  durationMin: 60,
} as const;
```

- [ ] **Step 2: Verify deck typecheck still passes**

Run: `pnpm -F asgard-ai-agent-workshop typecheck`
Expected: pass (no errors — the file isn't imported anywhere yet, but `tsc -b` includes all `.ts` in `src/`).

- [ ] **Step 3: Commit**

```bash
git add decks/asgard-ai-agent-workshop/src/site-meta.ts
git commit -m "feat(deck): add optional site-meta.ts for landing card"
```

---

## Task 6: `deck-metadata` module (pure, TDD)

**Files:**
- Create: `tools/site-builder/src/deck-metadata.ts`
- Test: `tools/site-builder/src/deck-metadata.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `tools/site-builder/src/deck-metadata.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { parseChaptersSource, deriveDeckCard, type RawDeck } from "./deck-metadata";

describe("parseChaptersSource", () => {
  it("extracts startSlide/title/subtitle from a Chapter[] export", () => {
    const src = `
      import type { Chapter } from "deck-kit";
      export const chapters: Chapter[] = [
        { startSlide: 1, title: "開場", subtitle: "為什麼從 Chat 走到 Agent" },
        { startSlide: 6, title: "基礎", subtitle: "六層架構" },
      ];
    `;
    const out = parseChaptersSource(src);
    expect(out).toEqual([
      { startSlide: 1, title: "開場", subtitle: "為什麼從 Chat 走到 Agent" },
      { startSlide: 6, title: "基礎", subtitle: "六層架構" },
    ]);
  });

  it("returns [] when no chapters export is present", () => {
    expect(parseChaptersSource("export const foo = 1;")).toEqual([]);
  });
});

describe("deriveDeckCard", () => {
  const raw: RawDeck = {
    slug: "asgard-ai-agent-workshop",
    pkgDescription: "Sandboxed Agent 實戰 — 60-min deck.",
    chapters: [
      { startSlide: 1, title: "開場", subtitle: "為什麼從 Chat 走到 Agent" },
      { startSlide: 6, title: "基礎", subtitle: "六層架構" },
    ],
    slideCount: 101,
    siteMeta: { lang: "zh-TW", durationMin: 60 },
  };

  it("composes a card from raw deck data", () => {
    const card = deriveDeckCard(raw);
    expect(card).toEqual({
      slug: "asgard-ai-agent-workshop",
      title: "Sandboxed Agent 實戰 — 60-min deck.",
      subtitle: "為什麼從 Chat 走到 Agent",
      slideCount: 101,
      chapterTitles: ["開場", "基礎"],
      lang: "zh-TW",
      durationMin: 60,
    });
  });

  it("falls back to defaults when siteMeta is undefined", () => {
    const card = deriveDeckCard({ ...raw, siteMeta: undefined });
    expect(card.lang).toBe("zh-TW");
    expect(card.durationMin).toBeUndefined();
  });

  it("uses an empty subtitle when chapters is empty", () => {
    const card = deriveDeckCard({ ...raw, chapters: [] });
    expect(card.subtitle).toBe("");
    expect(card.chapterTitles).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the tests — verify they fail (module missing)**

Run: `pnpm -F site-builder test`
Expected: FAIL with "cannot find module './deck-metadata'".

- [ ] **Step 3: Implement `deck-metadata.ts`**

Create `tools/site-builder/src/deck-metadata.ts`:

```ts
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
```

- [ ] **Step 4: Run the tests — verify they pass**

Run: `pnpm -F site-builder test`
Expected: 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add tools/site-builder/src/deck-metadata.ts tools/site-builder/src/deck-metadata.test.ts
git commit -m "feat(site-builder): deck-metadata module"
```

---

## Task 7: `inject-meta` module (pure, TDD)

**Files:**
- Create: `tools/site-builder/src/inject-meta.ts`
- Test: `tools/site-builder/src/inject-meta.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `tools/site-builder/src/inject-meta.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { injectMetaTags } from "./inject-meta";

const SAMPLE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Old Title</title>
  </head>
  <body><div id="root"></div></body>
</html>`;

const META = {
  title: "Sandboxed Agent 實戰",
  description: "為什麼從 Chat 走到 Agent",
  ogImage: "/asgard-slides/og/asgard-ai-agent-workshop.png",
  canonicalUrl:
    "https://asgard-ai-platform.github.io/asgard-slides/asgard-ai-agent-workshop/",
  lang: "zh-TW",
};

describe("injectMetaTags", () => {
  it("replaces the existing <title>", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(/<title>Sandboxed Agent 實戰<\/title>/);
    expect(out).not.toMatch(/<title>Old Title<\/title>/);
  });

  it("adds OpenGraph + Twitter meta tags", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(/property="og:title"\s+content="Sandboxed Agent 實戰"/);
    expect(out).toMatch(
      /property="og:description"\s+content="為什麼從 Chat 走到 Agent"/,
    );
    expect(out).toMatch(/property="og:image"\s+content="\/asgard-slides\/og\//);
    expect(out).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
  });

  it("adds <link rel=\"canonical\">", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(
      /<link rel="canonical" href="https:\/\/asgard-ai-platform\.github\.io\/asgard-slides\/asgard-ai-agent-workshop\/">/,
    );
  });

  it("sets the html lang attribute", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(/<html\s+lang="zh-TW"/);
    expect(out).not.toMatch(/<html\s+lang="en"/);
  });

  it("escapes HTML-special chars in title and description", () => {
    const out = injectMetaTags(SAMPLE_HTML, {
      ...META,
      title: 'A & B <c> "d"',
      description: "x > y",
    });
    expect(out).toContain("<title>A &amp; B &lt;c&gt; &quot;d&quot;</title>");
    expect(out).toContain('content="x &gt; y"');
  });
});
```

- [ ] **Step 2: Run the tests — verify they fail**

Run: `pnpm -F site-builder test`
Expected: FAIL with "cannot find module './inject-meta'".

- [ ] **Step 3: Implement `inject-meta.ts`**

Create `tools/site-builder/src/inject-meta.ts`:

```ts
export interface MetaInput {
  title: string;
  description: string;
  ogImage: string;
  canonicalUrl: string;
  lang: string;
}

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ESCAPE_MAP[c]);
}

/**
 * Rewrite the <head> of an HTML string with title + OpenGraph + Twitter Card
 * + canonical link, and update the <html> lang attribute. The input HTML
 * comes from a Playwright snapshot — we don't own its exact whitespace, so
 * everything works with regex anchors rather than a full HTML parser.
 */
export function injectMetaTags(html: string, meta: MetaInput): string {
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const url = escapeHtml(meta.canonicalUrl);
  const img = escapeHtml(meta.ogImage);

  // Replace existing <title>, or insert one if missing.
  let out = html.match(/<title>[^<]*<\/title>/i)
    ? html.replace(/<title>[^<]*<\/title>/i, `<title>${t}</title>`)
    : html.replace(/<\/head>/i, `  <title>${t}</title>\n</head>`);

  const tags = [
    `<meta name="description" content="${d}">`,
    `<meta property="og:type" content="article">`,
    `<meta property="og:title" content="${t}">`,
    `<meta property="og:description" content="${d}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${t}">`,
    `<meta name="twitter:description" content="${d}">`,
    `<meta name="twitter:image" content="${img}">`,
    `<link rel="canonical" href="${url}">`,
  ].join("\n    ");

  out = out.replace(/<\/head>/i, `    ${tags}\n  </head>`);

  // Update <html lang="...">. If the attribute is missing, add it.
  out = out.match(/<html\s+[^>]*lang="[^"]*"/i)
    ? out.replace(/(<html\s+[^>]*)lang="[^"]*"/i, `$1lang="${meta.lang}"`)
    : out.replace(/<html(\s|>)/i, `<html lang="${meta.lang}"$1`);

  return out;
}
```

- [ ] **Step 4: Run the tests — verify they pass**

Run: `pnpm -F site-builder test`
Expected: 10 tests pass (5 from Task 6 + 5 here).

- [ ] **Step 5: Commit**

```bash
git add tools/site-builder/src/inject-meta.ts tools/site-builder/src/inject-meta.test.ts
git commit -m "feat(site-builder): inject-meta module"
```

---

## Task 8: `render-landing` module (pure, TDD)

**Files:**
- Create: `tools/site-builder/src/render-landing.ts`
- Test: `tools/site-builder/src/render-landing.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `tools/site-builder/src/render-landing.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { renderLandingHtml } from "./render-landing";
import type { DeckCard } from "./deck-metadata";

const CARD: DeckCard = {
  slug: "asgard-ai-agent-workshop",
  title: "Sandboxed Agent 實戰",
  subtitle: "為什麼從 Chat 走到 Agent",
  slideCount: 101,
  chapterTitles: ["開場", "基礎", "Tools/MCP/A2A"],
  lang: "zh-TW",
  durationMin: 60,
};

describe("renderLandingHtml", () => {
  it("renders a complete HTML doc", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toMatch(/<!doctype html>/i);
    expect(html).toMatch(/<title>asgard-slides<\/title>/);
    expect(html).toMatch(/<\/html>/);
  });

  it("includes one card per deck with title, subtitle, count, lang, duration", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toContain("Sandboxed Agent 實戰");
    expect(html).toContain("為什麼從 Chat 走到 Agent");
    expect(html).toContain("101 slides");
    expect(html).toContain("60 min");
    expect(html).toContain("zh-TW");
  });

  it("renders the chapter list comma-separated", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toContain("開場 · 基礎 · Tools/MCP/A2A");
  });

  it("links each card to /<slug>/", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toMatch(/href="asgard-ai-agent-workshop\/"/);
  });

  it("hides the duration row when durationMin is undefined", () => {
    const html = renderLandingHtml([{ ...CARD, durationMin: undefined }]);
    expect(html).not.toContain("60 min");
    expect(html).not.toContain("undefined min");
  });

  it("escapes HTML in card content", () => {
    const html = renderLandingHtml([{ ...CARD, title: "A & <b>" }]);
    expect(html).toContain("A &amp; &lt;b&gt;");
    expect(html).not.toContain("A & <b>");
  });

  it("renders an empty-state when no decks are present", () => {
    const html = renderLandingHtml([]);
    expect(html).toContain("No decks yet");
  });
});
```

- [ ] **Step 2: Run tests — verify they fail**

Run: `pnpm -F site-builder test`
Expected: FAIL with "cannot find module './render-landing'".

- [ ] **Step 3: Implement `render-landing.ts`**

Create `tools/site-builder/src/render-landing.ts`:

```ts
import type { DeckCard } from "./deck-metadata";

const ESCAPE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ESCAPE[c]);
}

function renderCard(card: DeckCard): string {
  const meta = [
    card.durationMin ? `${card.durationMin} min` : null,
    esc(card.lang),
    `${card.slideCount} slides`,
  ]
    .filter(Boolean)
    .join(" · ");

  const chapters = card.chapterTitles.map(esc).join(" · ");

  return `      <a class="card" href="${esc(card.slug)}/">
        <h2 class="card-title">${esc(card.title)}</h2>
        ${card.subtitle ? `<p class="card-subtitle">${esc(card.subtitle)}</p>` : ""}
        <p class="card-meta">${meta}</p>
        ${chapters ? `<p class="card-chapters">Chapters: ${chapters}</p>` : ""}
        <span class="card-cta">Open deck →</span>
      </a>`;
}

const CSS = `
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 48px 24px 80px;
    background: #050812;
    color: #ffffff;
    font: 16px/1.5 -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", sans-serif;
  }
  .wrap { max-width: 720px; margin: 0 auto; }
  .header { margin-bottom: 32px; }
  .header h1 {
    margin: 0 0 6px;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 0.01em;
    color: #06b6d4;
  }
  .header p {
    margin: 0;
    color: #9ca3af;
    font-size: 14px;
  }
  .grid { display: grid; gap: 14px; }
  .card {
    display: block;
    padding: 20px 22px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 14px;
    background: #0a0f1e;
    color: inherit;
    text-decoration: none;
    transition: border-color 120ms ease, transform 120ms ease;
  }
  .card:hover { border-color: #06b6d4; transform: translateY(-2px); }
  .card-title { margin: 0 0 4px; font-size: 18px; font-weight: 800; color: #ffffff; }
  .card-subtitle { margin: 0 0 10px; color: rgba(255, 255, 255, 0.72); font-size: 14px; }
  .card-meta {
    margin: 0 0 10px;
    color: #9ca3af;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .card-chapters {
    margin: 0 0 14px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    line-height: 1.45;
  }
  .card-cta { color: #06b6d4; font-size: 13px; font-weight: 700; }
  .empty {
    padding: 40px 22px;
    border: 1px dashed rgba(255, 255, 255, 0.18);
    border-radius: 14px;
    color: #9ca3af;
    text-align: center;
  }
  .footer {
    margin-top: 40px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
  }
  .footer a { color: rgba(255, 255, 255, 0.6); text-decoration: none; }
  .footer a:hover { color: #06b6d4; }
`;

export function renderLandingHtml(cards: DeckCard[]): string {
  const body = cards.length
    ? `<div class="grid">\n${cards.map(renderCard).join("\n")}\n      </div>`
    : `<div class="empty">No decks yet — add one under <code>decks/</code> to get started.</div>`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>asgard-slides</title>
    <meta name="description" content="Open-source slide decks on the agent stack. MIT.">
    <style>${CSS}</style>
  </head>
  <body>
    <div class="wrap">
      <header class="header">
        <h1>asgard-slides</h1>
        <p>Open-source talks on the agent stack. MIT licensed.</p>
      </header>
      ${body}
      <footer class="footer">
        <a href="https://github.com/asgard-ai-platform/asgard-slides">GitHub</a> ·
        <a href="https://github.com/asgard-ai-platform/asgard-slides/blob/main/LICENSE">License</a>
      </footer>
    </div>
  </body>
</html>
`;
}
```

- [ ] **Step 4: Run tests — verify they pass**

Run: `pnpm -F site-builder test`
Expected: 17 tests pass (5 + 5 + 7).

- [ ] **Step 5: Commit**

```bash
git add tools/site-builder/src/render-landing.ts tools/site-builder/src/render-landing.test.ts
git commit -m "feat(site-builder): render-landing module"
```

---

## Task 9: `snapshot-deck` module (Playwright, integration)

**Files:**
- Create: `tools/site-builder/src/snapshot-deck.ts`

- [ ] **Step 1: Implement `snapshot-deck.ts`**

Create `tools/site-builder/src/snapshot-deck.ts`:

```ts
import { chromium } from "playwright";
import { spawn, type ChildProcess } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { setTimeout as wait } from "node:timers/promises";
import { injectMetaTags } from "./inject-meta";
import type { DeckCard } from "./deck-metadata";

const PREVIEW_PORT = 4180;
const SITE_BASE_URL = "https://asgard-ai-platform.github.io/asgard-slides";

export interface SnapshotInput {
  card: DeckCard;
  /** Absolute path to the deck dir, e.g. /…/decks/asgard-ai-agent-workshop */
  deckDir: string;
  /** Where to write dist-site/<slug>/index.html and dist-site/og/<slug>.png */
  distSiteDir: string;
}

/**
 * Build-time snapshot: spin up vite preview at the deck's production base
 * path, render with Playwright, write index.html with proper meta tags +
 * a 1200×630 OG screenshot of slide #1.
 *
 * Caller is responsible for `vite build` + copying dist/ → dist-site/<slug>/
 * BEFORE calling this. We then overwrite index.html in that target dir.
 */
export async function snapshotDeck({
  card,
  deckDir,
  distSiteDir,
}: SnapshotInput): Promise<void> {
  const deckBase = `/asgard-slides/${card.slug}/`;
  const preview = await startVitePreview(deckDir, deckBase);

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
    });
    const url = `http://localhost:${PREVIEW_PORT}${deckBase}#1`;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForSelector("html[data-hydrated]", { timeout: 10_000 });
    await page.evaluate(() => document.fonts.ready);

    const ogPath = path.join(distSiteDir, "og", `${card.slug}.png`);
    await mkdir(path.dirname(ogPath), { recursive: true });
    await page.screenshot({ path: ogPath, type: "png" });

    let html = await page.content();
    html = injectMetaTags(html, {
      title: card.title,
      description: card.subtitle || card.title,
      ogImage: `/asgard-slides/og/${card.slug}.png`,
      canonicalUrl: `${SITE_BASE_URL}/${card.slug}/`,
      lang: card.lang,
    });

    await writeFile(path.join(distSiteDir, card.slug, "index.html"), html);

    await browser.close();
  } finally {
    await stopVitePreview(preview);
  }
}

async function startVitePreview(
  deckDir: string,
  base: string,
): Promise<ChildProcess> {
  // `vite preview` doesn't accept a `--base` CLI flag — it reads `base`
  // from vite.config.ts. Our deck's config does
  //   `base: process.env.DECK_BASE ?? "/"`,
  // so we set DECK_BASE in the spawned process env.
  const proc = spawn(
    "pnpm",
    ["exec", "vite", "preview", "--port", String(PREVIEW_PORT), "--strictPort"],
    {
      cwd: deckDir,
      env: { ...process.env, DECK_BASE: base },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  // Wait for server to be reachable.
  for (let attempt = 0; attempt < 60; attempt++) {
    await wait(200);
    try {
      const r = await fetch(`http://localhost:${PREVIEW_PORT}${base}`);
      if (r.ok || r.status === 304) return proc;
    } catch {
      // not yet
    }
  }
  proc.kill("SIGTERM");
  throw new Error(`vite preview did not become reachable on port ${PREVIEW_PORT}`);
}

async function stopVitePreview(proc: ChildProcess): Promise<void> {
  proc.kill("SIGTERM");
  await new Promise<void>((resolve) => {
    if (proc.exitCode !== null) resolve();
    else proc.once("exit", () => resolve());
  });
}
```

- [ ] **Step 2: Verify it typechecks**

Run: `pnpm -F site-builder typecheck`
Expected: no errors.

- [ ] **Step 3: Commit (integration test happens via build-site in Task 10)**

```bash
git add tools/site-builder/src/snapshot-deck.ts
git commit -m "feat(site-builder): snapshot-deck module (Playwright + OG screenshot)"
```

---

## Task 10: `build-site` orchestrator + root script + smoke test

**Files:**
- Create: `tools/site-builder/src/build-site.ts`
- Modify: `package.json` (root)
- Modify: `.gitignore`

- [ ] **Step 1: Implement `build-site.ts`**

Create `tools/site-builder/src/build-site.ts`:

```ts
#!/usr/bin/env node
import { rm, mkdir, cp, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { scanDecks } from "./deck-metadata";
import { snapshotDeck } from "./snapshot-deck";
import { renderLandingHtml } from "./render-landing";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = path.resolve(__dirname, "../../..");
const DIST_SITE = path.join(WORKSPACE_ROOT, "dist-site");

async function run(cmd: string, args: string[], opts: { cwd?: string; env?: Record<string, string> } = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, {
      cwd: opts.cwd ?? WORKSPACE_ROOT,
      env: { ...process.env, ...(opts.env ?? {}) },
      stdio: "inherit",
    });
    p.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(" ")} exited ${code}`))));
  });
}

async function main() {
  console.log(`▸ clean ${DIST_SITE}`);
  await rm(DIST_SITE, { recursive: true, force: true });
  await mkdir(DIST_SITE, { recursive: true });

  const cards = await scanDecks(WORKSPACE_ROOT);
  console.log(`▸ found ${cards.length} deck(s): ${cards.map((c) => c.slug).join(", ")}`);

  for (const card of cards) {
    const deckDir = path.join(WORKSPACE_ROOT, "decks", card.slug);
    const deckBase = `/asgard-slides/${card.slug}/`;

    console.log(`▸ build ${card.slug}`);
    await run("pnpm", ["-F", card.slug, "build"], { env: { DECK_BASE: deckBase } });

    console.log(`▸ copy dist → dist-site/${card.slug}`);
    await cp(path.join(deckDir, "dist"), path.join(DIST_SITE, card.slug), { recursive: true });

    console.log(`▸ snapshot + OG ${card.slug}`);
    await snapshotDeck({ card, deckDir, distSiteDir: DIST_SITE });
  }

  console.log(`▸ render landing`);
  await writeFile(path.join(DIST_SITE, "index.html"), renderLandingHtml(cards));

  console.log(`✓ built ${cards.length} deck(s) → ${path.relative(WORKSPACE_ROOT, DIST_SITE)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Step 2: Add `build:site` script to root package.json**

Edit `package.json` (root) — add to `scripts`:

```json
{
  "scripts": {
    "build": "pnpm -r run build",
    "build:site": "pnpm -F site-builder run start",
    "lint": "pnpm -r run lint",
    "test": "pnpm -r run test",
    "typecheck": "pnpm -r run typecheck"
  }
}
```

- [ ] **Step 3: Add `dist-site` to .gitignore**

Edit `.gitignore` — append `dist-site` to the build artifacts block:

```
node_modules
dist
dist-site
dist-ssr
exports
.vite
.turbo
.tsbuildinfo
```

- [ ] **Step 4: Install Playwright Chromium browser locally**

Run: `pnpm exec playwright install chromium`
Expected: downloads Chromium (~150 MB; one-time).

- [ ] **Step 5: Smoke-test the full build locally**

Run: `pnpm build:site`

Expected end-to-end:
- `▸ clean dist-site`
- `▸ found 1 deck(s): asgard-ai-agent-workshop`
- `▸ build asgard-ai-agent-workshop` (vite build runs)
- `▸ copy dist → dist-site/asgard-ai-agent-workshop`
- `▸ snapshot + OG asgard-ai-agent-workshop`
- `▸ render landing`
- `✓ built 1 deck(s) → dist-site/`

- [ ] **Step 6: Verify dist-site/ structure**

Run:
```bash
find dist-site -maxdepth 2 -type f | sort
```
Expected to include:
- `dist-site/index.html`
- `dist-site/og/asgard-ai-agent-workshop.png`
- `dist-site/asgard-ai-agent-workshop/index.html`
- `dist-site/asgard-ai-agent-workshop/assets/...` (multiple)

- [ ] **Step 7: Verify OG screenshot looks right**

Run:
```bash
file dist-site/og/asgard-ai-agent-workshop.png
```
Expected: `PNG image data, 1200 x 630, ...`

Open the file in your image viewer and confirm it shows the cover slide.

- [ ] **Step 8: Verify per-deck index.html has injected meta tags**

Run:
```bash
grep -E 'og:title|og:image|twitter:card|<title>' dist-site/asgard-ai-agent-workshop/index.html
```
Expected: at least one match for each of `<title>`, `og:title`, `og:image`, `twitter:card`.

- [ ] **Step 9: Verify file structure and landing content**

Production URLs are absolute (`/asgard-slides/...`), so a plain local
static server can't fully exercise routing. Production-URL verification
happens via Task 11 step 4 (curl the deployed URLs). For now, verify
the build output:

```bash
test -s dist-site/index.html && echo "landing: OK"
test -s dist-site/asgard-ai-agent-workshop/index.html && echo "deck index: OK"
test -s dist-site/og/asgard-ai-agent-workshop.png && echo "og: OK"
grep -q "Sandboxed Agent" dist-site/index.html && echo "landing has deck title: OK"
grep -q "Asgard AI" dist-site/asgard-ai-agent-workshop/index.html && echo "deck index has title: OK"
```

Expected: five `OK` lines.

- [ ] **Step 10: Commit**

```bash
git add tools/site-builder/src/build-site.ts package.json .gitignore
git commit -m "feat(site-builder): build-site orchestrator + root build:site script"
```

---

## Task 11: GitHub Actions deploy workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create workflow file**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Cache Playwright browsers
        uses: actions/cache@v4
        with:
          path: ~/.cache/ms-playwright
          key: playwright-${{ runner.os }}-${{ hashFiles('pnpm-lock.yaml') }}

      - name: Install Playwright Chromium
        run: pnpm exec playwright install --with-deps chromium

      - name: Build site
        run: pnpm build:site

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist-site

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit and push**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: deploy site to GitHub Pages on push to main"
git push origin asgard-slides-init:main
```

- [ ] **Step 3: One-time GitHub repo setup**

In the GitHub UI for `asgard-ai-platform/asgard-slides`:

1. Settings → Pages → Source → **GitHub Actions**
2. Watch the workflow run at the Actions tab.
3. Once green, the site is live at `https://asgard-ai-platform.github.io/asgard-slides/`.

(The first run also requires the repo's default branch — `main` — to be the trigger; everything is wired correctly here.)

- [ ] **Step 4: Verify the deployed site**

After the deploy succeeds:

```bash
curl -sf -o /dev/null -w "landing: %{http_code}\n" https://asgard-ai-platform.github.io/asgard-slides/
curl -sf -o /dev/null -w "deck:    %{http_code}\n" https://asgard-ai-platform.github.io/asgard-slides/asgard-ai-agent-workshop/
curl -sf -o /dev/null -w "og:      %{http_code}\n" https://asgard-ai-platform.github.io/asgard-slides/og/asgard-ai-agent-workshop.png
```

Expected: three `200`s.

Also drop the deck URL into a Slack/Twitter/Discord message and confirm the unfurled preview shows the OG image with the deck title.

---

## Task 12: Update CLAUDE.md and README with the new build:site flow

**Files:**
- Modify: `CLAUDE.md`
- Modify: `README.md`

- [ ] **Step 1: Add `build:site` + deploy notes to CLAUDE.md**

In `CLAUDE.md`, in the **Commands** section, after the `pnpm -r build / lint / test / typecheck` line, add:

```markdown
### Site build (GitHub Pages)

`pnpm build:site` runs `tools/site-builder` end-to-end:

1. Builds each deck SPA with `DECK_BASE=/asgard-slides/<slug>/`.
2. Spins up `vite preview`, snapshots HTML via Playwright, and screenshots a 1200×630 OG image of slide #1.
3. Renders the static landing page from each deck's `package.json` description, `chapters.ts` first chapter, and optional `src/site-meta.ts`.
4. Writes everything to `dist-site/` (gitignored).

`.github/workflows/deploy.yml` runs this on every push to `main` and deploys to GitHub Pages.

Local prerequisite: `pnpm exec playwright install chromium` (one-time).
```

- [ ] **Step 2: Add a Deploy section to root README.md**

In `README.md`, after the "Adding a new deck" section, add:

```markdown
## Deploy

Push to `main` and GitHub Actions builds + deploys to
`https://asgard-ai-platform.github.io/asgard-slides/`. Each deck becomes a
pre-rendered HTML at `<slug>/` with its own OG image at `og/<slug>.png`,
and the root is a static landing listing every deck.

To build locally: `pnpm exec playwright install chromium && pnpm build:site`.
Output lands in `dist-site/`.
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md README.md
git commit -m "docs: document pnpm build:site + GitHub Pages deploy"
```

---

## Done — what you should see at the end

- `https://asgard-ai-platform.github.io/asgard-slides/` shows the landing with one deck card.
- Clicking through opens the deck SPA at `/asgard-ai-agent-workshop/`, with normal carousel navigation, hash routing, and all visuals intact.
- Pasting either URL into Slack / Twitter / Discord shows a rich preview with the OG image rendered from the actual deck cover.
- `pnpm -F asgard-ai-agent-workshop dev` continues to work exactly as before — base `/`, HMR, no Playwright involvement.
- `pnpm -r test` passes (deck-kit's 12 tests + site-builder's 17 tests).
