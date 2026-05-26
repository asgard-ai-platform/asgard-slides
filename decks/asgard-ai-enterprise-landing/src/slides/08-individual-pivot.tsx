import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "轉折：這些提升，都發生在「個人」身上",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>關鍵轉折</Kicker>
      <h2>轉折：這些提升，都發生在「個人」身上</h2>
      <DemoShot src="assets/deck/p07_individual_pivot.png" alt="這些提升都發生在個人身上" size="large" />
      <Talkbox compact>
        <p>個人 AI 化 ≠ 企業 AI 化——這正是 95% 沒回報的真正原因。</p>
      </Talkbox>
    </>
  );
}
