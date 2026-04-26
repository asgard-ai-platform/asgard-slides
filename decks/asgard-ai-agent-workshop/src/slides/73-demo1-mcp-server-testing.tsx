import { CardGrid, Card, CodeBlock, Kicker, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "說明：MCP server 不是 prompt，它要像一般軟體一樣能被測試",
  section: "Demo 1 · Explanation",
  theme: "light",
};

export const notes = `
### 58. 說明：MCP server 不是 prompt，它要像一般軟體一樣能被測試
- 區段：Demo 1 · Explanation
- 卡片重點：Server startup：確認 server 能在 demo 環境啟動，不依賴講者機器上的隱性狀態。；Tool discovery：確認 \`tools/list\` 看得到預期工具，工具名稱與 schema 沒有漂移。；Tool call result：確認 \`tools/call\` 回傳可解析結果，錯誤訊息能讓 agent 修正參數。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 1 · Explanation</Kicker>
      <h2>說明：MCP server 不是 prompt，它要像一般軟體一樣能被測試</h2>
      <CardGrid columns={3}>
        <Card variant="strong">
          <h3>Server startup</h3>
          <p>確認 server 能在 demo 環境啟動，不依賴講者機器上的隱性狀態。</p>
        </Card>
        <Card variant="strong">
          <h3>Tool discovery</h3>
          <p>確認 <code>tools/list</code> 看得到預期工具，工具名稱與 schema 沒有漂移。</p>
        </Card>
        <Card variant="strong">
          <h3>Tool call result</h3>
          <p>確認 <code>tools/call</code> 回傳可解析結果，錯誤訊息能讓 agent 修正參數。</p>
        </Card>
      </CardGrid>
      <CodeBlock>{`# validation checklist
uv run pytest
claude /mcp
claude mcp get <server-name>

# 要確認：
# 1. server 起得來
# 2. tools/list 看得到工具
# 3. tools/call 回傳可解析結果`}</CodeBlock>
    </>
  );
}
