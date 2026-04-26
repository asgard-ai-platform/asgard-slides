# asgard-slides

Open-source mono-repo for slide decks built on a shared React `deck-kit`.

Each deck is a Vite + React + TypeScript app that imports primitives, layouts,
and the carousel shell from `deck-kit`, and provides its own slide files.

## Layout

```
asgard-slides/
├── packages/
│   └── deck-kit/                  # Shared React kit (primitives, layouts, shell, theme)
└── decks/
    └── asgard-ai-agent-workshop/  # First deck — "Sandboxed Agent 實戰" (60-min talk)
```

- `packages/*` — reusable libraries.
- `decks/*` — individual presentations. Each has its own `package.json`,
  `vite.config.ts`, `src/slides/NN-name.tsx`, and per-deck assets in `public/`.

## Getting started

Requires Node ≥ 20 and pnpm ≥ 9.

```bash
pnpm install
pnpm -F asgard-ai-agent-workshop dev      # run a deck
pnpm -F asgard-ai-agent-workshop build    # build for production
pnpm -r build                             # build everything
pnpm -r lint
pnpm -r test
```

## Adding a new deck

1. Copy `decks/asgard-ai-agent-workshop` to `decks/<your-deck>`.
2. Update `name` in its `package.json` and clear out `src/slides/` and
   `public/`.
3. Add slide files as `src/slides/NN-name.tsx` (zero-padded, sequential
   starting at `01`). Each slide exports `default`, `meta`, and optional
   `notes`.
4. (Optional) Provide `src/chapters.ts` and pass it to `<DeckProvider>` for
   chapter grouping in the overview UI.

See `packages/deck-kit/README.md` for the slide module contract and the kit's
public API.

## Deploy

Push to `main` and GitHub Actions builds + deploys to
`https://asgard-ai-platform.github.io/asgard-slides/`. Each deck becomes a
pre-rendered HTML at `<slug>/` with its own OG image at `og/<slug>.png`,
and the root is a static landing listing every deck.

To build locally: `pnpm exec playwright install chromium && pnpm build:site`.
Output lands in `dist-site/`.

## Conventions

- Slide filenames: `NN-name.tsx`, sequential, no gaps. `discoverSlides()`
  asserts this at boot.
- Always import from the `deck-kit` barrel — never deep paths.
- Theme tokens are CSS variables in `:root`. Override per-deck by importing
  a CSS file after the deck-kit barrel side-effects.

## License

MIT — see [LICENSE](./LICENSE).
