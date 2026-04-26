# Pre-rendered slide deck site for GitHub Pages

- **Date**: 2026-04-27
- **Branch**: `asgard-slides-init` (orphan, deployed as `main`)
- **Status**: Design approved; awaiting implementation plan

## 1. Context

`asgard-slides` is a pnpm workspace where one shared `deck-kit` powers many
Vite + React decks. Today every deck builds to a SPA: `vite build` produces
a near-empty `index.html` plus a JS bundle, and the React tree only renders
in the browser. There is no landing page, no per-deck preview metadata, no
deployment target.

We want to publish the workspace to GitHub Pages so that:

1. Each deck is shareable on social platforms with a usable preview card
   (title, description, OG image rendered from the actual slide).
2. Search engines can index the deck content.
3. The dev experience is unchanged — `pnpm -F <deck> dev` still runs the
   familiar SPA carousel with HMR.

GitHub Pages is static-only; SSR is impossible. SSG (pre-rendering at
build time) is what we actually need, and the SSR-safety audit done during
the workspace extraction means deck-kit code is already safe to render
without a browser.

## 2. Goals / non-goals

**Goals**

- One static HTML per deck with correct `<title>` and OpenGraph / Twitter
  Card meta tags.
- One OG image per deck, rendered as a true 1200×630 screenshot of the
  deck's first slide via Playwright.
- A static landing page at the site root listing every deck with a rich
  per-deck intro card (title, subtitle, language, duration, slide count,
  chapter outline).
- A GitHub Actions workflow that builds and deploys the site on every push
  to `main`.
- Source code in `decks/*` and `packages/deck-kit/` stays untouched apart
  from the minimal changes listed in §7.

**Non-goals**

- Per-slide deep-link URLs (decided "B" during brainstorming — each deck
  is one URL, internal slide navigation stays hash-based).
- Per-slide OG images.
- Server-side rendering at request time. GitHub Pages cannot do this.
- A framework migration (Vike, Next.js). The deck shell is hand-written
  and we keep it that way.
- A separate "deck detail" page beyond the landing card.

## 3. Architecture overview

Three sequential build stages, all driven by a new `tools/site-builder`
package:

```
stage 1 — build deck SPA (existing per-deck `vite build`)
          → decks/<slug>/dist/  (vanilla SPA, with vite base set)

stage 2 — snapshot + OG screenshot (new, per deck)
          start `vite preview` → Playwright loads page → wait React mount
          → grab full HTML, inject correct <head> meta tags
          → screenshot 1200×630 PNG of slide #1
          → write dist-site/<slug>/index.html
          → write dist-site/og/<slug>.png

stage 3 — assemble final dist-site/
          dist-site/                   ← what GitHub Pages serves
          ├── index.html                ← landing (static, hand-rendered)
          ├── og/<slug>.png             ← OG image per deck
          ├── <slug>/                   ← deck SPA (snapshotted)
          │   ├── index.html             ← pre-rendered HTML + meta tags
          │   └── assets/...             ← JS, CSS, fonts, public/
          └── (future deck)/...
```

Dev mode is unaffected: `pnpm -F <deck> dev` still mounts a vanilla Vite
dev server with `base: "/"` and HMR.

## 4. New workspace package: `tools/site-builder`

```
tools/
└── site-builder/
    ├── package.json                     # private, depends on playwright
    ├── tsconfig.json
    ├── src/
    │   ├── snapshot-deck.ts              # Playwright snapshot + OG screenshot
    │   ├── render-landing.ts             # scan decks, render landing HTML
    │   ├── deck-metadata.ts              # read package.json + chapters.ts
    │   ├── inject-meta.ts                # rewrite <head> with OG/Twitter tags
    │   └── build-site.ts                 # orchestrator (entry script)
    └── templates/
        └── landing.html                   # placeholder-driven HTML template
```

`tools/*` is added to `pnpm-workspace.yaml`. The package is private,
not published, never imported by deck code — purely build orchestration.

## 5. Per-deck SSG pipeline

`snapshot-deck.ts` per deck:

```ts
async function snapshotDeck(deck: DeckInfo) {
  const deckBase = `/asgard-slides/${deck.slug}/`;
  const server = await startVitePreview(deck.path, deckBase);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(`${server.url}#1`, { waitUntil: "networkidle" });

  // Wait for hydration signal (set by deck-kit shell once Deck mounts)
  await page.waitForSelector("html[data-hydrated]");
  await page.evaluate(() => document.fonts.ready);

  // OG image — viewport already 1200×630
  await page.screenshot({
    path: `dist-site/og/${deck.slug}.png`,
    type: "png",
    omitBackground: false,
  });

  // Snapshot HTML, then inject meta tags (overrides Vite default <title>)
  let html = await page.content();
  html = injectMetaTags(html, {
    title: deck.title,
    description: deck.subtitle,
    ogImage: `/asgard-slides/og/${deck.slug}.png`,
    canonicalUrl: `https://asgard-ai-platform.github.io/asgard-slides/${deck.slug}/`,
    lang: deck.lang,
  });
  await writeFile(`dist-site/${deck.slug}/index.html`, html);

  await browser.close();
  await server.close();
}
```

### Hydration signal

The only deck-kit source change in this whole spec: `<Deck>` runs
`useEffect(() => { document.documentElement.setAttribute("data-hydrated", "true"); }, []);`
once after mount. Playwright waits on the resulting `html[data-hydrated]`
selector. Without this, `networkidle` fires too early and we'd snapshot
a half-rendered tree.

### Meta tags injected

`<title>`, `<meta name="description">`, `og:title` / `og:description` /
`og:image` / `og:url` / `og:type=article`, `twitter:card=summary_large_image`
/ `twitter:title` / `twitter:description` / `twitter:image`, plus
`<link rel="canonical">`.

### Crawler payload

By the time Playwright snapshots, the carousel has rendered all 101 slides
into the DOM (translated off-screen but present in HTML). Crawlers and OG
fetchers see the full slide content + correct meta tags in one request.

## 6. Landing page

`render-landing.ts` scans `decks/*/package.json`, reads each deck's
metadata, and writes `dist-site/index.html`.

Per-deck card data:

| Field | Source |
|---|---|
| `slug` | `package.json#name` |
| `title` | `package.json#description` (mandatory) |
| `subtitle` | first chapter's `subtitle` from `src/chapters.ts` |
| `slideCount` | `glob("src/slides/*.tsx").length` |
| `chapters` | chapter `title`s from `src/chapters.ts` |
| `lang` | optional `src/site-meta.ts` (default `"zh-TW"`) |
| `durationMin` | optional `src/site-meta.ts` |

If a deck wants to enrich its landing card, it adds `src/site-meta.ts`:

```ts
export const siteMeta = {
  lang: "zh-TW",
  durationMin: 60,
} as const;
```

The landing template is a single hand-written HTML file with inline `<style>`,
hardcoded color hex from deck-kit tokens, dark theme, system sans-serif
stack (`-apple-system, BlinkMacSystemFont, "Inter", sans-serif`). Landing
deliberately does not load Space Grotesk — it would mean either coupling
to a specific deck's asset path or shipping a duplicate font file from
site-builder. System fonts keep the landing minimal and zero-network. No
React, no Vite, no JS — landing is pure markup. Estimated ~150 lines total.

Landing structure (visual):

```
asgard-slides
─────────────────────────────────────────────
Open-source talks on the agent stack. MIT.

╔══════════════════════════════════════════╗
║  Sandboxed Agent 實戰                     ║
║  Asgard AI Agent Workshop                 ║
║  60 min · zh-TW · 101 slides              ║
║                                            ║
║  Chapters: 開場 · 基礎 · Tools/MCP/A2A …   ║
║                                            ║
║                              Open deck →   ║
╚══════════════════════════════════════════╝

GitHub · License · MIT
```

## 7. Build orchestrator + deploy

### `build-site.ts` (entry — invoked via `pnpm build:site`)

```ts
async function buildSite() {
  await rm("dist-site", { recursive: true, force: true });
  const decks = await scanDecks();

  for (const deck of decks) {
    await exec("pnpm", ["-F", deck.slug, "build"], {
      env: { DECK_BASE: `/asgard-slides/${deck.slug}/` },
    });
    await cp(`decks/${deck.slug}/dist`, `dist-site/${deck.slug}`, { recursive: true });
    await snapshotDeck(deck);
  }

  await renderLanding();
}
```

### `.github/workflows/deploy.yml`

```yaml
on:
  push: { branches: [main] }
  workflow_dispatch:

permissions:
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm exec playwright install chromium
      - run: pnpm build:site
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist-site }
      - uses: actions/deploy-pages@v4
```

Repo Settings → Pages → Source must be set to **GitHub Actions** once,
manually. After that, every push to `main` rebuilds and deploys.

## 8. Files changed

**New**
- `tools/site-builder/` (package: 5 .ts + 1 HTML template + package.json + tsconfig)
- `.github/workflows/deploy.yml`
- `decks/asgard-ai-agent-workshop/src/site-meta.ts` (optional metadata)

**Modified**
- root `package.json`: add `"build:site"` script
- `pnpm-workspace.yaml`: add `tools/*` glob
- `decks/asgard-ai-agent-workshop/vite.config.ts`: `base: process.env.DECK_BASE ?? "/"`
- `decks/asgard-ai-agent-workshop/index.html`: add `<base href="...">` (Vite injects), strip leading `/` from `<link>` href values
- 11 slide `.tsx` files in `decks/asgard-ai-agent-workshop/src/slides/`: `"/assets/..."` → `"assets/..."`
- `packages/deck-kit/src/shell/Deck.tsx`: one `useEffect` setting `data-hydrated`
- `.gitignore`: add `dist-site` (and confirm `decks/*/dist` covered by existing `dist`)

**Dev experience**
- Zero impact. `pnpm -F asgard-ai-agent-workshop dev` runs as before with
  `base: "/"` and HMR.

## 9. Risks / open questions

- **Hydration repaint flicker**: snapshot HTML matches the SPA's first
  render; React re-renders identically on hydrate. If we ever introduce
  client-only state that affects initial render (e.g., reading
  `localStorage` synchronously), the snapshot will mismatch and the
  user sees a flash. Current `SwipeHint` uses a lazy initializer guarded
  by `typeof window` — safe today.
- **`networkidle` reliability**: Playwright's `networkidle` is a heuristic
  (500ms with no in-flight requests). Combined with `data-hydrated` and
  `document.fonts.ready`, this is robust for the current deck. If we add
  lazy-loaded media, revisit.
- **GitHub Pages 1 GB / 100 GB limits**: 1 deck × 101 slides + JS bundle
  is ~500 KB. Headroom for hundreds of decks before this matters.
- **Font loading in OG screenshot**: Space Grotesk is preloaded via the
  deck's `index.html`. If `document.fonts.ready` doesn't fire in time we
  may need to add an explicit `await page.waitForFunction(() => document.fonts.check("16px 'Space Grotesk'"))`.
- **`<base>` tag interaction with hash routing**: `#1` hash links should
  still work because hash navigation is base-relative-by-design in browsers.
  Verify in implementation.

## 10. Out of scope (intentionally)

- Per-slide URLs and per-slide OG images
- Custom domain / DNS setup (user can add `CNAME` later)
- Sitemap / robots.txt (decks aren't really crawlable content; landing is
  one page; not worth automating yet)
- Analytics, error tracking
- A separate "deck detail" page (chapters list, PDF download, QR code) —
  the deck itself owns these inside the deck experience
