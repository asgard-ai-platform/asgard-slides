import { useContext } from "react";
import { DeckContext, type DeckState } from "../shell/deckContext";

export function useDeck(): DeckState {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used inside <DeckProvider>");
  return ctx;
}
