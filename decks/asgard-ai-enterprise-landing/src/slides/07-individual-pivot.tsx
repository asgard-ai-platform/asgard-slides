import { Kicker, DemoShot, Talkbox } from "deck-kit";
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
      <DemoShot src="assets/deck/p07_individual_pivot.png" alt="這些提升都發生在個人身上" size="large" />
      <Talkbox compact>
        <p>前面每一個數字，量的都是<strong>單一工作者</strong>用 AI 後的效率。但企業不是一堆個人的加總——AI 停在個人、沒進到組織，牆一道都沒拆。</p>
      </Talkbox>
    </>
  );
}
