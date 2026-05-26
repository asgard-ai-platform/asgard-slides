import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "The AI Paradox",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>段落一</Kicker>
      <h2>The AI Paradox</h2>
      <DemoShot
        src="assets/deck/p04_ai_paradox.png"
        alt="The AI Paradox：1.5 兆投入、95% 沒回報"
        caption="這不是技術問題，而是架構問題。"
      />
    </>
  );
}
