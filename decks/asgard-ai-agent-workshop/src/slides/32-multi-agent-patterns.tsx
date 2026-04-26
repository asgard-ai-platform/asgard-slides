import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Multi-agent 不只是「多個 agent」；它是有 topology 的",
  section: "Multi-Agent Patterns",
  theme: "dark",
};

export const notes = `
### 32. Multi-agent 不只是「多個 agent」；它是有 topology 的
- 區段：Multi-Agent Patterns
- 主句：大部分企業任務「單 agent + tools」就夠；multi-agent 只在分工清楚或需要交叉驗證時才用。
- 卡片重點：
  - Planner-executor：一個拆任務，一個執行；最簡單的兩 agent 分工。
  - Hierarchical：上層 agent 分配子任務給專業 agent，再聚合結果。
  - Swarm / consensus：多 agent 並行同一題，結果投票或合併。
- 補充講法：multi-agent 帶來的成本是 coordination overhead 與 failure mode 變多（loop、deadlock、cost explosion）。除非任務真的有清楚分工或需要 cross-validation，否則 single agent + tools 通常 ROI 更好。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Multi-Agent Patterns</Kicker>
      <h2>Multi-agent 不只是「多個 agent」；它是有 topology 的</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>Planner ↔ Executor</h3>
          <p>一個 agent 負責拆任務、規劃；另一個負責執行 tool call。最簡單也最常用。</p>
        </Card>
        <Card>
          <h3>Hierarchical</h3>
          <p>主 agent 分配子任務給領域專業 agent（法務、設計、研究），再把結果聚合。</p>
        </Card>
        <Card>
          <h3>Swarm / Consensus</h3>
          <p>多個 agent 並行做同一題，結果用投票或加權合併。適合需要交叉驗證的判斷。</p>
        </Card>
      </CardGrid>
      <Quote compact>大部分企業任務，single agent + tools 就夠。Multi-agent 是有清楚分工或需要 cross-validation 才用。</Quote>
      <Talkbox compact>
        <p>Multi-agent 帶來 coordination overhead 與更多 failure mode（loop、deadlock、cost explosion）。架構上的代價要跟分工帶來的價值評估後再做。</p>
      </Talkbox>
    </>
  );
}
