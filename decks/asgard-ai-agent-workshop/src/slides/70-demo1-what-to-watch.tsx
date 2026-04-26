import { Kicker, Matrix, Quote, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "看什麼：MCP demo 要看工具選擇、參數映射、回傳結果與資料限制",
  section: "Demo 1 · What To Watch",
  theme: "paper",
};

export const notes = `
### 55. 看什麼：MCP demo 要看工具選擇、參數映射、回傳結果與資料限制
- 區段：Demo 1 · What To Watch
- 主句：MCP 的價值是工具可發現、參數可結構化、結果可追溯。
- 表格重點：Tool selection / \`query_real_price_tool\` 被呼叫 / agent 透過 MCP client 呼叫 server，不是自行生成資料。；Input mapping / 縣市、行政區、交易類型被帶入 / 自然語言需求被轉成 typed parameters。；Live result / 回傳資料筆數與摘要 / tool result 可能很大，harness 要決定摘要、取樣、保存 artifact 或限制 context。；Interpretation / agent 說明資料範圍與限制 / model 負責解釋資料，不負責捏造資料來源。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 1 · What To Watch</Kicker>
      <h2>看什麼：MCP demo 要看工具選擇、參數映射、回傳結果與資料限制</h2>
      <Matrix
        headers={["觀察點", "畫面上看到", "技術含義"]}
        rows={[
          ["Tool selection", "query_real_price_tool 被呼叫", "agent 透過 MCP client 呼叫 server，不是自行生成資料。"],
          ["Input mapping", "縣市、行政區、交易類型被帶入", "自然語言需求被轉成 typed parameters。"],
          ["Live result", "回傳資料筆數與摘要", "tool result 可能很大，harness 要決定摘要、取樣、保存 artifact 或限制 context。"],
          ["Interpretation", "agent 說明資料範圍與限制", "model 負責解釋資料，不負責捏造資料來源。"],
        ]}
      />
      <Quote compact>MCP 的價值是工具可發現、參數可結構化、結果可追溯。</Quote>
    </>
  );
}
