import {
  useCallback, useEffect, useMemo, useState, type ReactNode,
} from "react";
import type { Chapter, SlideEntry } from "../types";
import { DeckContext, type DeckState } from "./deckContext";
import { parseHash } from "./parseHash";

interface DeckProviderProps {
  slides: SlideEntry[];
  /** Optional chapter grouping for the overview UI. Each chapter applies
   *  from its `startSlide` to the next chapter's `startSlide - 1`. */
  chapters?: Chapter[];
  children: ReactNode;
}

export function DeckProvider({ slides, chapters = [], children }: DeckProviderProps) {
  const total = slides.length;
  const [index, setIndex] = useState(() =>
    typeof window === "undefined" ? 0 : parseHash(window.location.hash, total),
  );

  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(i, total - 1))),
    [total],
  );
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  // Mirror state → URL hash (replaceState so back/forward leaves the deck
  // rather than walking through slide history).
  useEffect(() => {
    if (total === 0) return;
    history.replaceState(null, "", `#${index + 1}`);
  }, [index, total]);

  // Listen for external hash changes (deep link, manual edit).
  useEffect(() => {
    const onHash = () => setIndex(parseHash(window.location.hash, total));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [total]);

  const value = useMemo<DeckState>(
    () => ({ slides, chapters, index, total, next, prev, goTo }),
    [slides, chapters, index, total, next, prev, goTo],
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}
