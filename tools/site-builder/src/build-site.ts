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
