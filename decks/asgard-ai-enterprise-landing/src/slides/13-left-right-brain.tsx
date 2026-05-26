import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "左腦 × 右腦：串起來才有威力",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>架構思維</Kicker>
      <h2>左腦 × 右腦：分開都沒用，串起來才有威力</h2>
      <DemoShot src="assets/deck/p13_left_right_brain.png" alt="左腦 ML/RPA/System × 右腦 GenAI" size="large" />
      <Talkbox compact>
        <p>只有 GenAI 會說不會做；只有 ML/RPA 會算會做不懂人話。接起來，才是完整的 AI 員工。</p>
      </Talkbox>
    </>
  );
}
