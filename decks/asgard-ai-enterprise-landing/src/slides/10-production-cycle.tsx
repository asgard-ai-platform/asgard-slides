import { Kicker, StateMachine, Talkbox } from "deck-kit";
import type { SlideMeta, StateNode } from "deck-kit";

export const meta: SlideMeta = {
  title: "AI 應該覆蓋整個企業生產週期",
  section: "The AI Paradox",
  theme: "dark",
};

const states: StateNode[] = [
  { name: "研發", on: "需求訊號" },
  { name: "採購", on: "庫存狀態" },
  { name: "生產", on: "排程指令" },
  { name: "倉儲", on: "出貨觸發" },
  { name: "銷售 / 行銷", on: "客戶反饋" },
  { name: "客服 / 售後", on: "品質訊號" },
  { name: "財務 / 會計", on: "成本分析" },
  { name: "人資" },
];

export default function Slide() {
  return (
    <>
      <Kicker>企業營運架構</Kicker>
      <h2>AI 應該覆蓋整個企業生產週期</h2>
      <p>
        一家公司怎麼運轉？這是一個<strong>循環</strong>，不是一條直線。
        每個環節都有它的系統：ERP、MES、CRM、WMS、POS……
        個人版 AI 的問題，是它只站在循環裡的一個點。
      </p>
      <StateMachine states={states} loop="回到研發" />
      <Talkbox compact>
        <p>
          企業 AI 的目標，是讓 AI<strong>覆蓋整個循環</strong>，
          而且能在環節跟環節「之間」傳遞訊號。
          營收的紅燈亮了，它要能自己往庫存、往履約、往客服一路追下去——
          這正是開場那個早會場景的伏筆。
        </p>
      </Talkbox>
    </>
  );
}
