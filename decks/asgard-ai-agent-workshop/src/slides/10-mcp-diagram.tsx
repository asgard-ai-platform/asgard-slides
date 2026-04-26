import { FlowDiagram, Kicker, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP 是 AI 應用與外部系統之間的標準協定",
  section: "MCP Diagram",
  theme: "paper",
};

export const notes = `
### 09. MCP 是 AI 應用與外部系統之間的標準協定
- 區段：MCP Diagram
- 補充講法：MCP 定義 client-host-server 架構與 resources、tools、prompts 等 primitives；它的價值在於標準化工具發現、參數 schema、回傳格式、錯誤處理與權限邊界。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Diagram</Kicker>
      <h2>MCP 是 AI 應用與外部系統之間的標準協定</h2>
      <FlowDiagram nodes={[
        { title: "AI Agent", body: "我需要查公司、房價、訂單、庫存" },
        { title: "MCP Server", body: "把不同系統包成 AI 聽得懂的工具" },
        { title: "企業系統 / 資料源", body: "ERP、CRM、資料庫、公開資料、SaaS" },
        { title: "可追溯結果", body: "回傳資料、來源、錯誤訊息與權限判斷" },
      ]} />
      <Talkbox compact>
        <p>MCP 定義 client-host-server 架構與 resources、tools、prompts 等 primitives；它的價值在於標準化工具發現、參數 schema、回傳格式、錯誤處理與權限邊界。</p>
      </Talkbox>
    </>
  );
}
