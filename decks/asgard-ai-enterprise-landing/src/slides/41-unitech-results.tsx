import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Unitech 量化成果",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>量化成果</Kicker>
      <h2>Unitech：從切入點到橫向擴張</h2>
      <DemoShot
        src="assets/deck/p33_unitech_results.png"
        alt="Unitech 成果：響應 75%↓、訓練 67%↓、自動化 80%↑、人力 30%↓"
        size="large"
      />
      <Talkbox compact>
        <p>
          打法是 <strong>Wedge → Expand</strong>——先用一個最痛切入點做出成績，再橫向擴張；
          幾週見效，不是三年大專案。
        </p>
      </Talkbox>
    </>
  );
}
