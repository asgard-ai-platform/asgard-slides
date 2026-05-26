import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "AI 生產力革命：第三次躍遷",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>歷史視角</Kicker>
      <h2>AI 生產力革命：第三次躍遷</h2>
      <DemoShot
        src="assets/deck/p05_productivity_revolution.png"
        alt="生產力革命：蒸汽機→電腦→AI"
        caption="前兩次革命，贏家不是買了機器的人，是重組流程去用機器的人——AI 一模一樣。"
      />
    </>
  );
}
