import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "AI 要成為營運的肌肉，而不是裝飾",
  section: "怎麼開始",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>一個原則</Kicker>
      <DemoShot
        src="assets/deck/p67_ai_as_muscle.png"
        alt="AI 要成為營運的肌肉而非裝飾"
        size="page"
        caption="肌肉的意思是它真的在出力、而且越練越強——持續餵回饋、調資料與流程，它就越來越壯。"
      />
    </>
  );
}
