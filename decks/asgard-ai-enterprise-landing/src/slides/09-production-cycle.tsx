import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "AI 應該覆蓋整個企業生產週期",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>企業營運架構</Kicker>
      <h2>AI 應該覆蓋整個企業生產週期</h2>
      <DemoShot
        src="assets/deck/p10_production_cycle.png"
        alt="企業營運循環：研發→採購→生產→倉儲→銷售/行銷→客服/售後→財務→人資，串接 Data / BI / RPA"
        size="large"
      />
      <Talkbox compact>
        <p>
          研發、採購、生產、倉儲、銷售、客服、財務、人資——這是一個<strong>循環</strong>，不是一條直線。
          個人版 AI 只站在循環裡的一個點；企業 AI 的目標，是覆蓋整個循環、並在環節之間傳遞訊號。
        </p>
      </Talkbox>
    </>
  );
}
