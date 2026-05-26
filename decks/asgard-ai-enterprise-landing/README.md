# asgard-ai-enterprise-landing

A ~60-minute Traditional-Chinese executive talk — **「企業 AI 發展方向：生成式 AI 的落地應用」** —
delivered as a Vite + React deck on top of [`deck-kit`](../../packages/deck-kit).

- **Speaker:** 王韋仁 William Wang｜Asgard 肆佳科技 CEO
- **Venue:** Beyond South｜南向無界 2026
- **Thesis:** 95% 的企業 AI 投資沒回報，不是技術問題、是架構問題。從「會用 AI 的個人」
  走到「會用 AI 的組織」需要：覆蓋整個生產週期、左右腦（ML/RPA × GenAI）串成閉環、
  一層企業語意層、一個乾淨可治理的資料地基——並用一個完整零售範例與真實客戶數字佐證。

## Chapters (70 slides)

| # | 段落 | slides |
|---|---|---|
| 1 | 開場 — 一個早會的場景 | 01–03 |
| 2 | AI Paradox — 為什麼企業 AI 大多失敗 | 04–10 |
| 3 | 正確方向 — 從個人 AI 到組織 AI | 11–18 |
| 4 | Asgard 怎麼做 — 產品與架構 | 19–31 |
| 5 | 零售範例 — 完整導入 demo | 32–54 |
| 6 | 真實客戶 — 案例與數字 | 55–66 |
| 7 | 怎麼開始 — 流程與收尾 | 67–70 |

Screenshot-heavy sections (product UI, retail demo, Unitech) show **one large
screenshot per page** (`DemoShot size="page"`) with a concise caption.

## Run

```bash
pnpm install                                   # at repo root
pnpm -F asgard-ai-enterprise-landing dev       # http://localhost:5173
pnpm -F asgard-ai-enterprise-landing build     # production build → dist/
```

## Navigation

- `←` / `→` (or `Space` / `PageUp` / `PageDown`) — prev / next slide
- Type a digit and press `Enter` — jump to that slide (also `#13` in the URL)
- `o` — toggle overview (chapter-grouped thumbnails)
- `f` — toggle fullscreen
- `Esc` — clear goto-buffer / close overview / exit fullscreen

On touch devices: swipe horizontally between slides; vertical swipes scroll
within a slide.

## Export

```bash
pnpm -F asgard-ai-enterprise-landing export:pdf   # → exports/{date}.pdf
pnpm -F asgard-ai-enterprise-landing export:zip   # → exports/{date}.zip
```

PDF export uses Playwright. Both write into this deck's `exports/` folder (gitignored).

## Slide layout

```
src/
├── App.tsx              # mounts <DeckProvider> + <Deck>
├── chapters.ts          # 7 chapters for the overview UI
├── site-meta.ts         # lang=zh-TW, durationMin=60 (for the landing card)
├── main.tsx             # ReactDOM entry
└── slides/
    ├── 01-title.tsx
    ├── 02-cold-open.tsx
    └── ...              # NN-name.tsx, sequential 01–70, no gaps
```

Each slide exports `default` (the component) and `meta` (title + section +
theme). **This deck intentionally ships no `notes`** — the speaker-prompt
substance is folded into on-slide copy so each slide is self-explanatory. See
[`packages/deck-kit/README.md`](../../packages/deck-kit/README.md) for the contract.

## Visual approach

- **Concept diagrams** (AI Paradox, productivity leap, left/right brain, six-layer
  stack, three modules, ontology architecture, traditional-vs-AI, Unitech results,
  AI-as-muscle) are shown as the prepared illustrations in `public/assets/deck/`,
  presented **image-led**: kami-dark title chrome + the figure (via `DemoShot` or a
  framed `<img>`) + one concise takeaway. Light and dark figures alike are framed as insets.
- **Real product / dashboard screenshots** are embedded directly:
  - `public/assets/retail/` — the multi-channel retail demo (slides 28–35).
  - `public/assets/product/` — Odin / Mimir / Sindri UI (slides 23–24).
  - `public/assets/unitech/` — Unitech 售後維修 product screens (slides 41–42).

## Brand assets

`public/assets/asgard/` holds the Asgard product logos and the Space Grotesk
variable font, referenced by the deck's `@font-face` and slide content. Don't
move or rename these — slides load them via relative paths.
