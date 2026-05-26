import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "個人 AI 化 ≠ 企業 AI 化",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>關鍵轉折</Kicker>
      <h2>個人 AI 化 ≠ 企業 AI 化——這正是 95% 沒回報的真正原因。</h2>
      <DemoShot
        src="assets/deck/p07_individual_pivot.png"
        alt="這些提升都發生在個人身上"
        caption="前面每個數字量的都是單一工作者的效率；但企業不是個人的加總——AI 停在個人、沒進到組織，牆一道都沒拆。"
      />
    </>
  );
}
