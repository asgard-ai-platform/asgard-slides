# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`asgard-slides` is an open-source pnpm mono-repo. One shared React kit
(`packages/deck-kit`) powers many slide decks (`decks/*`). The first deck —
`decks/asgard-ai-agent-workshop` — is a 60-min Traditional-Chinese technical
talk; treat it as the reference implementation when adding a new deck.

Read `README.md` for repo overview, `packages/deck-kit/README.md` for the
public kit API + slide-module contract, and the per-deck README before
editing slides.

## Commands

Always run from the repo root unless noted. Requires Node ≥ 20 + pnpm ≥ 9.

```bash
pnpm install                                     # install once after clone
pnpm -F asgard-ai-agent-workshop dev             # dev server (default :5173)
pnpm -F asgard-ai-agent-workshop build           # production build → dist/
pnpm -F asgard-ai-agent-workshop typecheck       # tsc -b --noEmit
pnpm -F asgard-ai-agent-workshop lint            # eslint
pnpm -F asgard-ai-agent-workshop test            # vitest run

pnpm -F deck-kit test                            # 12 tests; covers discovery + parseHash
pnpm -F deck-kit lint
pnpm -F deck-kit typecheck

pnpm -r build / lint / test / typecheck          # workspace-wide
```

### Site build (GitHub Pages)

`pnpm build:site` runs `tools/site-builder` end-to-end:

1. Builds each deck SPA with `DECK_BASE=/asgard-slides/<slug>/`.
2. Spins up `vite preview`, snapshots HTML via Playwright, and screenshots a 1200×630 OG image of slide #1.
3. Renders the static landing page from each deck's `package.json` description, `chapters.ts` first chapter, and optional `src/site-meta.ts`.
4. Writes everything to `dist-site/` (gitignored).

`.github/workflows/deploy.yml` runs this on every push to `main` and deploys to GitHub Pages.

Local prerequisite: `pnpm exec playwright install chromium` (one-time).

Run a single test file with: `pnpm -F deck-kit exec vitest run src/path/to/file.test.ts`

PDF / ZIP export of a deck (Playwright-driven):
```bash
pnpm -F asgard-ai-agent-workshop export:pdf      # writes to <deck>/exports/{date}.pdf
pnpm -F asgard-ai-agent-workshop export:zip
```

## Architecture

**Slide discovery is convention-driven, not configured.** `discoverSlides()`
in `packages/deck-kit/src/discoverSlides.ts` calls
`import.meta.glob("/src/slides/*.tsx", { eager: true })`. The path is
absolute and resolved against the **consuming deck app's** project root, so
slides MUST live at `<deck>/src/slides/`. Filenames are `NN-name.tsx` with a
zero-padded prefix; the function asserts the prefixes are unique, sequential,
and start at `01`. `100-` is allowed (the regex is `\d{2,}`). Adding a slide
out of sequence breaks boot; renumber instead of leaving gaps.

**Each slide module exports three things**: a default React component, a
`meta` object (`{ title, section?, theme?, estimatedSeconds? }`), and an
optional `notes` string. ESLint disables `react-refresh/only-export-components`
under `src/slides/**` because of this contract — don't try to "fix" the
warning.

**deck-kit is consumed via the barrel only.** Imports must be
`from "deck-kit"`, never `from "deck-kit/..."`. ESLint enforces this in the
deck app. Inside deck-kit, the barrel `packages/deck-kit/src/index.ts` also
side-effect-imports `theme/tokens.css` and `theme/globals.css` — consumers
never deep-import CSS, but a new framework wrapping deck-kit (e.g. Next.js)
may need to allow-list deck-kit in its CSS-from-`node_modules` policy.

**Carousel + touch behavior lives in `shell/Deck.tsx`.** All slides render
side-by-side under a `translateX` track; vertical scroll is owned by the
`.slot` container, never the `.slide` element (do not add `overflow-y: auto`
to slides — it breaks mobile scroll). Touch handling uses a direction state
machine with an 8 px dead zone: until the gesture commits to horizontal,
no drag state is touched, so vertical scrolls never trigger a snap-back.

**OverviewMode is intentionally text-only.** `shell/OverviewMode.tsx`
renders lightweight cards (number + section + title + theme accent),
not actual slide content. Rendering 100+ real slides at scaled size
crashes mobile Safari on fast scroll — this is a deliberate design
constraint, not a TODO.

**SSR-safe by construction.** All `window` / `document` access lives in
`useEffect` callbacks, event handlers, or `useState` lazy initializers
guarded by `typeof window === "undefined"`. `parseHash()` and
`discoverSlides()` are pure. Preserve this when adding shell features.

## Conventions worth following

- **Path alias**: `@/*` → `<package>/src/*` in every package's
  `tsconfig.app.json` / `tsconfig.json`.
- **Theme**: tokens are CSS variables in `:root`. Override per-deck by
  importing a CSS file *after* the deck-kit barrel side-effects fire.
- **Chapters** (optional): provide `chapters: Chapter[]` to `<DeckProvider>`
  to group the overview UI. Each `startSlide` is 1-indexed and applies
  through the next chapter's `startSlide - 1`.
- **Adding a layout/primitive to deck-kit**: export it from the relevant
  `index.ts` AND re-export from the root barrel. The "third-use threshold"
  is the rule for promoting a slide-internal helper into deck-kit; see
  the FlowDiagram refactor commit history if you need a precedent.

## Adding a new deck

Copy `decks/asgard-ai-agent-workshop` → `decks/<your-deck>`, change `name`
in its `package.json`, clear `src/slides/` and `public/`, add slides as
`NN-name.tsx`. The workspace `pnpm install` picks it up automatically.
