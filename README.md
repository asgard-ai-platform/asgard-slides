# asgard-slides

Open-source mono-repo for slide decks built on a shared React `deck-kit`.

Each deck is a Vite + React + TypeScript app that imports primitives, layouts,
and the carousel shell from `deck-kit`, and provides its own slide files.

## 🌐 Live site

**<https://asgard-ai-platform.github.io/asgard-slides/>**

| Deck | Open |
| --- | --- |
| 從 Chat 到 Agent · 六層架構實戰 | <https://asgard-ai-platform.github.io/asgard-slides/asgard-ai-agent-workshop/> |
| 企業 AI 發展方向：生成式 AI 的落地應用 | <https://asgard-ai-platform.github.io/asgard-slides/asgard-ai-enterprise-landing/> |
| deck-kit Design System（元件參考） | <https://asgard-ai-platform.github.io/asgard-slides/design-system/> |

## Layout

```
asgard-slides/
├── packages/
│   └── deck-kit/                  # Shared React kit (primitives, layouts, shell, theme)
├── decks/
│   ├── asgard-ai-agent-workshop/   # "從 Chat 到 Agent · 六層架構實戰" (60-min talk)
│   └── asgard-ai-enterprise-landing/  # "企業 AI 發展方向：生成式 AI 的落地應用" (69 slides)
└── docs/
    └── design-system/             # Static design-system reference (published at /design-system/)
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

`docs/design-system/` is copied verbatim to `design-system/` — a static
reference page for every deck-kit token and component.

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
