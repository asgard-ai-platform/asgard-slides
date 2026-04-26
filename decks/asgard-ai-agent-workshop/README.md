# asgard-ai-agent-workshop

A 60-minute Traditional-Chinese technical talk — **"Sandboxed Agent 實戰"** —
delivered as a Vite + React deck on top of [`deck-kit`](../../packages/deck-kit).

Topics: the six-layer agent stack (Model · Tools · Harness · Sandbox · Session ·
Governance), how Harness becomes product behavior (planning, memory, permission,
recovery, tool routing), and where Asgard / Yggdrasil fit.

## Run

```bash
pnpm install                              # at repo root
pnpm -F asgard-ai-agent-workshop dev      # http://localhost:5173
pnpm -F asgard-ai-agent-workshop build    # production build → dist/
```

## Navigation

- `←` / `→` (or `Space` / `PageUp` / `PageDown`) — prev / next slide
- Type a digit and press `Enter` — jump to that slide (also `#13` in the URL)
- `o` — toggle overview (chapter-grouped thumbnails)
- `f` — toggle fullscreen
- `Esc` — clear goto-buffer / close overview / exit fullscreen

On touch devices: swipe horizontally between slides; vertical swipes scroll
within a slide. A one-time hint chip appears on the first visit.

## Export

```bash
pnpm -F asgard-ai-agent-workshop export:pdf   # → exports/{date}.pdf
pnpm -F asgard-ai-agent-workshop export:zip   # → exports/{date}.zip
```

PDF export uses Playwright. Both write into this deck's `exports/` folder
(gitignored).

## Slide layout

```
src/
├── App.tsx              # mounts <DeckProvider> + <Deck>
├── chapters.ts          # chapter / section grouping for the overview UI
├── main.tsx             # ReactDOM entry
└── slides/
    ├── 01-opening.tsx
    ├── 02-speaker.tsx
    └── ...              # NN-name.tsx, sequential, no gaps
```

Each slide file exports `default` (the component), `meta` (title + section +
theme), and optional `notes` (speaker notes). See
[`packages/deck-kit/README.md`](../../packages/deck-kit/README.md) for the
contract.

## Brand assets

`public/assets/asgard/` holds the Asgard product logos and the Space Grotesk
variable font, referenced by the deck's `@font-face` and slide content. Don't
move or rename these — slides load them via relative paths.
