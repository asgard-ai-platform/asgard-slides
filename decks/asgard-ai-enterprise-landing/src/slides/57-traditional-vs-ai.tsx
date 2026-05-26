import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Traditional vs AI Empowered：售後維修一站式自動化",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Traditional vs AI Empowered</Kicker>
      <DemoShot
        src="assets/deck/p35_traditional_vs_ai.png"
        alt="Traditional vs AI Empowered：售後維修一站式自動化"
        size="page"
        caption="傳統每一棒都靠人接、斷點多；AI 賦能後自動建工單→查庫存扣料→派工→回覆，人退到監督與例外處理。"
      />
    </>
  );
}
