import { Card, CodeBlock, Kicker, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: ".mcp.json：把工具連線方式變成專案設定",
  section: "MCP Config",
  theme: "paper",
};

export const notes = `
### 17. \`.mcp.json\`：把工具連線方式變成專案設定
- 區段：MCP Config
- 卡片重點：它不是 tool schema 本身：\`.mcp.json\` 管的是 MCP client 如何啟動或連接 server。真正的 tool name、description、input schema、output result，是 server 啟動後透過 MCP protocol 的 \`tools/list\` / \`tools/call\` 交換。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Config</Kicker>
      <h2><code>.mcp.json</code>：把工具連線方式變成專案設定</h2>
      <TwoColumn
        left={<CodeBlock>{`{
  "mcpServers": {
    "server-name": {
      "type": "stdio | http | sse",
      "command": "...",
      "args": [],
      "env": {},
      "url": "...",
      "headers": {},
      "oauth": {}
    }
  }
}`}</CodeBlock>}
        right={<Card variant="strong">
          <h3>它不是 tool schema 本身</h3>
          <p><code>.mcp.json</code> 管的是 MCP client 如何啟動或連接 server。真正的 tool name、description、input schema、output result，是 server 啟動後透過 MCP protocol 的 <code>tools/list</code> / <code>tools/call</code> 交換。</p>
        </Card>}
      />
    </>
  );
}
