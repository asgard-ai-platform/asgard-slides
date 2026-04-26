import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "什麼時候真的要用 A2A？三個典型場景",
  section: "A2A In Practice",
  theme: "paper",
};

export const notes = `
### 31. 什麼時候真的要用 A2A？三個典型場景
- 區段：A2A In Practice
- 主句：A2A 不是萬用解；它解決「對方是另一個 agent」這個特定問題。
- 卡片重點：
  - 跨組織協作：你的 agent 跟另一家公司的 agent 對話，對方的工具與資料對你不可見。
  - 長時程子任務：把整段「做投影片」「跑分析」委派出去，過程不需要回到你的 agent loop。
  - Specialised sub-agent：你想保留主 agent 的乾淨 context，把專業任務丟給領域 agent。
- 補充講法：如果只是「我想用一個工具」就走 MCP；如果只是「我想跑一個本機 script」就走 CLI。要走 A2A 的訊號是：對方有自己的判斷、自己的記憶、自己的 tool inventory，你不需要也不應該知道細節。
`;

export default function Slide() {
  return (
    <>
      <Kicker>A2A In Practice</Kicker>
      <h2>什麼時候真的要用 A2A？三個典型場景</h2>
      <CardGrid columns={3}>
        <Card variant="strong">
          <h3>跨組織協作</h3>
          <p>你的 agent 跟另一家公司或部門的 agent 講話。對方的工具與資料對你不可見也不該可見，只交換 task + artifact。</p>
        </Card>
        <Card>
          <h3>長時程子任務</h3>
          <p>「做這份簡報」「跑這份分析」「整理這個季度報告」——把整段委派出去，狀態與進度由對方追蹤。</p>
        </Card>
        <Card>
          <h3>Specialised sub-agent</h3>
          <p>主 agent 想保留乾淨的 context；專業任務丟給領域 agent (法務、設計、研究等)，回傳結果即可。</p>
        </Card>
      </CardGrid>
      <Quote compact>「我想用一個工具」走 MCP；「我想跑一個本機 script」走 CLI；「我想叫另一個 agent 做事」才走 A2A。</Quote>
      <Talkbox compact>
        <p>選擇 A2A 的訊號是：對方有自己的規劃能力、自己的記憶、自己的 tool inventory，你不需要也不應該知道細節。如果你只是想「用工具的標準介面」，那 MCP 就夠了。</p>
      </Talkbox>
    </>
  );
}
