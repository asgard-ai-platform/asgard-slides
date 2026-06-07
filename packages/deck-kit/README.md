# deck-kit

React building blocks for slide decks. Used by every deck under `decks/` in this
workspace.

A live component reference is published at
<https://asgard-ai-platform.github.io/asgard-slides/design-system/> — see
`docs/design-system/` in the repo root.

## What's in the box

- **Primitives** — `SlideShell`, `Kicker`, `Card`, `Quote`, `Tag`, `CodeBlock`,
  `Talkbox`, `Node`, `ProductCard`, `Credential`, `DemoShot`, `Callout`,
  `Badge`, `Avatar`, `Persona`, `Facepile`, `BigStat`, `ProgressRing`,
  `Checklist`, `Legend`.
- **Layouts** — `Matrix`, `CardGrid`, `Steps`, `Diagram`, `FlowDiagram`,
  `TermRow`, `SectionTitle`, `TwoColumn`, `Agenda`, `Compare`.
- **Shell** — `Deck`, `DeckProvider`, `OverviewMode`, `SwipeHint`, with
  carousel + touch + keyboard navigation, hash deep-linking, and chapter
  grouping.
- **Slide discovery** — `discoverSlides()` walks `/src/slides/*.tsx` via
  Vite's `import.meta.glob`, asserting sequential `NN-name.tsx` prefixes.
- **Theme** — `tokens.css` + `globals.css` are loaded as side-effects of the
  barrel import; consumers never deep-import CSS.

## Usage

```tsx
import { Deck, DeckProvider, discoverSlides } from "deck-kit";

const slides = discoverSlides();

export default function App() {
  return (
    <DeckProvider slides={slides}>
      <Deck />
    </DeckProvider>
  );
}
```

A slide module looks like:

```tsx
// src/slides/01-cover.tsx
import { SlideShell, Kicker } from "deck-kit";

export const meta = { title: "Cover", section: "Intro", theme: "dark" } as const;
export const notes = "Speaker notes here.";

export default function Cover() {
  return (
    <SlideShell variant="dark">
      <Kicker>Sandboxed Agent 實戰</Kicker>
      <h1>Cover slide</h1>
    </SlideShell>
  );
}
```

## New primitives

### `Callout`

Highlighted callout box with a variant-keyed icon.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `"info" \| "good" \| "warn" \| "bad"` | `"info"` | Controls color + default icon |
| `title` | `ReactNode` | — | Optional bold heading inside the box |
| `icon` | `ReactNode` | per-variant | Overrides the default icon (`i` / `✓` / `!` / `✕`) |
| `children` | `ReactNode` | **required** | Body content |

### `Badge`

Inline status pill.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `status` | `"info" \| "good" \| "warn" \| "bad" \| "neutral"` | `"neutral"` | Color variant |
| `children` | `ReactNode` | **required** | Label text |

### `Avatar` / `Persona` / `Facepile`

**`Avatar`** — circular image with initials fallback.

| Prop | Type | Notes |
| --- | --- | --- |
| `src` | `string` | Image URL; when provided, renders `<img>` |
| `initials` | `string` | 1–2 chars on a brand-tint disc when no `src` |
| `alt` | `string` | Accessible label |

**`Persona`** — avatar + name + role row.

| Prop | Type | Notes |
| --- | --- | --- |
| `src` | `string` | Forwarded to `Avatar` |
| `initials` | `string` | Forwarded to `Avatar` |
| `name` | `ReactNode` | **required** |
| `role` | `ReactNode` | **required** |

**`Facepile`** — overlapping row of avatars.

| Prop | Type | Notes |
| --- | --- | --- |
| `people` | `{ src?: string; initials?: string }[]` | **required** |

### `BigStat`

Large single metric with optional trend arrow.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `value` | `ReactNode` | **required** | Wrap digits in `<em>` for brand accent |
| `label` | `ReactNode` | — | Secondary descriptor below the value |
| `delta` | `ReactNode` | — | Change amount; shown with a ▲/▼ prefix |
| `trend` | `"up" \| "down"` | `"up"` | Arrow direction and color for `delta` |

### `ProgressRing`

SVG-free CSS conic-gradient ring.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `pct` | `number` | **required** | 0–100 |
| `tone` | `"brand" \| "good" \| "warn" \| "bad"` | `"brand"` | Ring color |
| `label` | `ReactNode` | `"<pct>%"` | Center text |

### `Checklist`

Bulleted list with per-item pass/fail icon (✓ green / ✕ red).

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `{ text: ReactNode; ok?: boolean }[]` | **required**; `ok` defaults to `true` |

### `Legend`

Horizontal row of color-swatch + label pairs — use alongside charts or diagrams.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `{ label: ReactNode; color: string }[]` | **required**; `color` is any CSS color, e.g. `"var(--good)"` |

## New layouts

### `Agenda`

Auto-numbered agenda list with optional sub-text, time badge, and active/done state.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `AgendaItem[]` | **required** |

`AgendaItem`:

| Field | Type | Notes |
| --- | --- | --- |
| `title` | `ReactNode` | **required** |
| `sub` | `ReactNode` | Secondary line below the title |
| `time` | `ReactNode` | Right-aligned time badge |
| `state` | `"active" \| "done"` | Visual highlight; omit for neutral |

### `Compare`

Two-column pros/cons table.

| Prop | Type | Notes |
| --- | --- | --- |
| `pros` | `CompareColumn` | **required** — green "pros" column |
| `cons` | `CompareColumn` | **required** — red "cons" column |

`CompareColumn`: `{ head: ReactNode; items: ReactNode[] }`.

## Updated primitives

### `Quote` — new `cite` prop

`cite?: ReactNode` — attribution rendered below the quote (typically a `<Persona>`).

```tsx
<Quote cite={<Persona initials="WW" name="Will" role="CTO" />}>
  Ship fast, learn faster.
</Quote>
```

## Conventions

- Slide files: `NN-name.tsx`, prefixes start at `01`, must be sequential, no gaps.
- Always import from the barrel `deck-kit`, never deep paths.
- Theme tokens are CSS variables in `:root` — override per-deck by loading a
  CSS file after the barrel import.

## Vite dependency

`discoverSlides()` uses `import.meta.glob("/src/slides/*.tsx", { eager: true })`,
which is a Vite-only transform. The path is absolute, so it resolves against the
**consuming app's** project root — slides must live at `<deck>/src/slides/`.

## SSR

deck-kit is written so it can run under SSR-aware frameworks (Vite SSR, Vike,
etc.):

- All `window` / `document` access lives inside `useEffect` callbacks, event
  handlers, or `useState` lazy initializers guarded by
  `typeof window === "undefined"`.
- `parseHash` and `discoverSlides` are pure, deterministic functions.
- The barrel imports `tokens.css` and `globals.css` as side-effects. This is
  fine under Vite SSR (CSS is extracted, not executed). If you adopt a
  framework that disallows CSS imports inside `node_modules` (e.g. Next.js
  out-of-the-box), allow-list `deck-kit` in that framework's CSS config.
