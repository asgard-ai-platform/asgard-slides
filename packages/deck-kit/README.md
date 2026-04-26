# deck-kit

React building blocks for slide decks. Used by every deck under `decks/` in this
workspace.

## What's in the box

- **Primitives** — `SlideShell`, `Kicker`, `Card`, `Quote`, `Tag`, `CodeBlock`,
  `Talkbox`, `Node`, `ProductCard`, `Credential`, `DemoShot`.
- **Layouts** — `Matrix`, `CardGrid`, `Steps`, `Diagram`, `FlowDiagram`,
  `TermRow`, `SectionTitle`, `TwoColumn`.
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
