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
