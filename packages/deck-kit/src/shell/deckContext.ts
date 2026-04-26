import { createContext } from "react";
import type { Chapter, SlideEntry } from "../types";

export interface DeckState {
  slides: SlideEntry[];
  chapters: Chapter[];
  index: number;
  total: number;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
}

export const DeckContext = createContext<DeckState | null>(null);
