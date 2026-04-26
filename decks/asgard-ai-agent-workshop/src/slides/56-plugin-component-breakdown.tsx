import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "職能 plugin 的元件拆解：每個元件都對應一種 harness responsibility",
  section: "Concrete Plugin Pattern",
  theme: "light",
};

export const notes = `
### 43. 職能 plugin 的元件拆解：每個元件都對應一種 harness responsibility
- 區段：Concrete Plugin Pattern
- 表格重點：Skills / 定義分析框架、指標、gotchas、報告格式。 / 避免每次從零教 agent 怎麼分析，也讓方法論可以被版本控管。；MCP / 連接 GA4、Shopline、發票、客服或庫存系統。 / 外部資料與 credential boundary 不放進 prompt，讓工具 schema 與授權由執行層管理。；Agents / 把常見工作交給固定角色，例如 ops analyst、security reviewer、data checker。 / 把 context、tool access、model choice 與工作邊界固定下來，減少每次臨場指定。；Hooks / 在工具前後或輸出前檢查來源、格式、風險字眼、測試結果。 / 把 review gate 從人工提醒變成 lifecycle control，尤其適合 release、資料、合規與安全檢查。；bin / scripts / 提供 plugin 專用 executable、轉檔器、匯出器或驗證器。 / 把重複又容易算錯的步驟做成可執行工具，讓 agent 負責決策與整合。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Concrete Plugin Pattern</Kicker>
      <h2>職能 plugin 的元件拆解：每個元件都對應一種 harness responsibility</h2>
      <Matrix
        headers={["元件", "做什麼", "為什麼要包進 plugin"]}
        rows={[
          ["Skills", "定義分析框架、指標、gotchas、報告格式。", "避免每次從零教 agent 怎麼分析，也讓方法論可以被版本控管。"],
          ["MCP", "連接 GA4、Shopline、發票、客服或庫存系統。", "外部資料與 credential boundary 不放進 prompt，讓工具 schema 與授權由執行層管理。"],
          ["Agents", "把常見工作交給固定角色，例如 ops analyst、security reviewer、data checker。", "把 context、tool access、model choice 與工作邊界固定下來，減少每次臨場指定。"],
          ["Hooks", "在工具前後或輸出前檢查來源、格式、風險字眼、測試結果。", "把 review gate 從人工提醒變成 lifecycle control，尤其適合 release、資料、合規與安全檢查。"],
          ["bin / scripts", "提供 plugin 專用 executable、轉檔器、匯出器或驗證器。", "把重複又容易算錯的步驟做成可執行工具，讓 agent 負責決策與整合。"],
        ]}
      />
    </>
  );
}
