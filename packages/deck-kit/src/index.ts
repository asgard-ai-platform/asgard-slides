// deck-kit public surface. Slides import from "@/deck-kit", never deep paths.
// When this folder lifts to a separate package (Approach B in the spec),
// this file becomes the package's public entry point unchanged.

// Side-effect: deck-kit owns its global stylesheets. Importing the barrel
// loads tokens + globals; consumers never deep-import CSS themselves.
import "./theme/tokens.css";
import "./theme/globals.css";

export { discoverSlides, assertSequentialPrefixes } from "./discoverSlides";
export type { SlideMeta, SlideTheme, SlideModule, SlideEntry, Chapter } from "./types";

export {
  SlideShell, Kicker, Card, Quote, Tag, CodeBlock, Talkbox, Node, ProductCard, Credential, DemoShot,
} from "./primitives";
export { DeckProvider } from "./shell/DeckProvider";
export { useDeck } from "./hooks/useDeck";
export { useKeyboardNav } from "./hooks/useKeyboardNav";
export { Deck } from "./shell/Deck";
export {
  Matrix, CardGrid, Steps, Diagram, TermRow, SectionTitle, TwoColumn, FlowDiagram,
} from "./layouts";
export type { Step, Term, FlowDiagramNode } from "./layouts";
