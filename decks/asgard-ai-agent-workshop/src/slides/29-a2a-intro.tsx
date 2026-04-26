import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "A2A：當 agent 需要跟另一個 agent 對話的協議",
  section: "A2A Intro",
  theme: "dark",
};

export const notes = `
### 29. A2A：當 agent 需要跟另一個 agent 對話的協議
- 區段：A2A Intro
- 主句：MCP 是給 agent 用「工具」的協議；A2A 是給 agent 用「另一個 agent」的協議。
- 卡片重點：
  - 角色不同：MCP server 是被動工具；A2A peer 是另一個有狀態、有規劃能力的 agent。
  - 訊息不同：MCP 傳 tool call + result；A2A 傳 task、status、artifact、與多輪互動。
  - 治理不同：A2A 還要管「對方 agent 是誰、權限多少、能不能用人家的工具」。
- 補充講法：Google 在 2025 年推 A2A protocol 時定位很清楚——它不是要取代 MCP，而是補上「agent 互相委派」的那塊。市面上其他做法（ACP、agent mesh、custom RPC）也指向同一個方向。
`;

export default function Slide() {
  return (
    <>
      <Kicker>A2A Intro</Kicker>
      <h2>A2A：當 agent 需要跟另一個 agent 對話的協議</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>對方是 agent，不是工具</h3>
          <p>MCP server 是被動的：等 agent 呼叫，回傳結果。A2A peer 是主動的：有自己的規劃、記憶、子任務。</p>
        </Card>
        <Card>
          <h3>訊息更豐富</h3>
          <p>不只 tool call + result，還有 task、status、artifact、多輪 dialogue 與長時程任務追蹤。</p>
        </Card>
        <Card variant="strong">
          <h3>治理面更複雜</h3>
          <p>除了「能不能用工具」，還要管「對方是誰、它能用什麼工具、artifact 能不能信」。</p>
        </Card>
      </CardGrid>
      <Quote compact>MCP 是 AI 的「HTTP for tools」；A2A 是 AI 的「HTTP for agents」。</Quote>
      <Talkbox compact>
        <p>Google 的 A2A protocol（2025）是目前能見度最高的提案。市面上其他做法——ACP、agent mesh、各家自家 RPC——都在指同一個方向：agent 不只跟工具講話，也要跟其他 agent 講話。</p>
      </Talkbox>
    </>
  );
}
