import { Deck, DeckProvider, discoverSlides } from "deck-kit";
import { chapters } from "@/chapters";

const slides = discoverSlides();

export default function App() {
  return (
    <DeckProvider slides={slides} chapters={chapters}>
      <Deck />
    </DeckProvider>
  );
}
