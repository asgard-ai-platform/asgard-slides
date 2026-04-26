import { Card, CodeBlock, Kicker, Tag, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP 實戰：台灣不動產實價登錄，讓 agent 用工具查真實資料",
  section: "Demo 1 · Content",
  theme: "dark",
};

export const notes = `
### 54. MCP 實戰：台灣不動產實價登錄，讓 agent 用工具查真實資料
- 區段：Demo 1 · Content
- 卡片重點：AI 不猜市場資料，而是呼叫受控的在地資料工具：Demo 1 的重點不是房價，而是工具使用流程：自然語言需求要被轉成 structured parameters，tool result 要能追溯，最後再由模型整理成人可讀分析。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 1 · Content</Kicker>
      <h2>MCP 實戰：台灣不動產實價登錄，讓 agent 用工具查真實資料</h2>
      <TwoColumn
        left={<CodeBlock>{`任務：
幫我查台北市信義區租賃資料，
確認 agent 是透過 MCP 工具取得資料。

執行路徑：
1. 啟動 mcp-tw-lvr server
2. 檢查 MCP tools 是否註冊
3. 呼叫 query_real_price_tool
4. 帶入 city / district / transaction_type
5. 觀察 records returned
6. 把 tool result 摘要成人可讀結論`}</CodeBlock>}
        right={<Card variant="strong">
          <Tag>Success criteria</Tag>
          <h3 style={{ marginTop: "12px" }}>AI 不猜市場資料，而是呼叫受控的在地資料工具</h3>
          <p>Demo 1 的重點不是房價，而是工具使用流程：自然語言需求要被轉成 structured parameters，tool result 要能追溯，最後再由模型整理成人可讀分析。</p>
        </Card>}
      />
    </>
  );
}
