import { Kicker, StateMachine, Quote } from "deck-kit";
import type { SlideMeta, StateNode } from "deck-kit";

export const meta: SlideMeta = {
  title: "從 Chat 到 Agent：三個成熟度",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const levels: StateNode[] = [
  {
    name: (
      <span>
        <strong>💬 Chat（聊天）</strong>
        <br />
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "normal" }}>
          單次問答，靠 prompt 跟 context 給你一段回覆。問完就結束。
        </span>
      </span>
    ),
    on: "加上工具呼叫能力",
  },
  {
    name: (
      <span>
        <strong>🔧 Tool-using Assistant（會用工具的助理）</strong>
        <br />
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "normal" }}>
          能查資料、呼叫 API、讀檔案——但通常還是短任務、做完即止。
        </span>
      </span>
    ),
    on: "加上規劃、記憶、稽核、重試",
  },
  {
    name: (
      <span>
        <strong>⚙️ Production Agent（能上線的 Agent）</strong>
        <br />
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "normal" }}>
          能規劃、執行、失敗後恢復、記憶、被稽核，在權限邊界內長時間替你完成一整段工作。
        </span>
      </span>
    ),
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>Agent 成熟度光譜</Kicker>
      <h2>從 Chat 到 Agent：三個成熟度，不是一個開關</h2>
      <p>「AI 會不會做事」不是是非題，是一條光譜，有三格。</p>
      <StateMachine states={levels} />
      <Quote compact>
        <p>
          一秒判斷標準：不是看它語氣像不像人，是看它能不能<strong>「被驗收」</strong>、
          能不能<strong>「失敗後自己爬回來」</strong>。
        </p>
        <p style={{ marginTop: "var(--space-2)" }}>
          <strong>Chat 是大腦，Agent 是員工。</strong>
        </p>
      </Quote>
    </>
  );
}
