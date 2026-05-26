import { Kicker, StateMachine, Quote } from "deck-kit";
import type { SlideMeta, StateNode } from "deck-kit";

export const meta: SlideMeta = {
  title: "零售範例小結：洞察 → 決策 → 執行的閉環",
  section: "零售範例",
  theme: "dark",
};

const states: StateNode[] = [
  {
    name: "看見",
    on: "共用 Dashboard，資訊找人",
  },
  {
    name: "拆解",
    on: "Supervisor Agent 拆問題、分派",
  },
  {
    name: "追查",
    on: "各部門 Agent 撈資料、給洞察",
  },
  {
    name: "執行",
    on: "Action Agent 調貨 / 分群 / 拉急件",
  },
  {
    name: "回饋",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 小結</Kicker>
      <h2>洞察 → 決策 → 執行的閉環</h2>
      <p>
        把三個故事收成一張圖：每一圈越轉越準，結果回到 Dashboard 讓下一輪判斷更精確。
      </p>
      <StateMachine
        states={states}
        loop="結果回到 Dashboard，下一輪更準"
      />
      <Quote>
        <p>
          這不是七個聊天機器人，是一個<strong>會協作的 AI 組織</strong>。
        </p>
      </Quote>
    </>
  );
}
