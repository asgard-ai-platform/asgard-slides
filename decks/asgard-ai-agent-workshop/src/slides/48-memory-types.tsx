import { Kicker, Talkbox, TermRow, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Memory 的三種類型：episodic、semantic、procedural",
  section: "Memory Types",
  theme: "light",
};

export const notes = `
### 48. Memory 的三種類型：episodic、semantic、procedural
- 區段：Memory Types
- 主句：不同類型的記憶要用不同方式存與用。
- 表格重點：
  - Episodic：事件時序，例如「上週這個客戶說了 X」「昨天的 PR 是因為 Y 被退回」。
  - Semantic：累積的知識與事實，例如「這家公司的退貨政策是 30 天」「我們的命名 convention 是 kebab-case」。
  - Procedural：學會的方法、流程、套路；常被包裝成 skill 或 workflow。
- 補充講法：這三種記憶在腦科學裡是不同系統，在 agent 系統裡也應該分開設計。Procedural 已經被 skill / workflow 解決；episodic 與 semantic 需要明確的 storage layer。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L5">Memory Types</Kicker>
      <h2>Memory 的三種類型：episodic、semantic、procedural</h2>
      <TermRow items={[
        {
          term: "Episodic",
          definition: "事件、互動、決策的時序紀錄。回答「上次發生什麼」「為什麼當時做了那個決定」。",
          example: "客戶上週的對話、上次部署的 incident 紀錄、PR review 的歷史。",
        },
        {
          term: "Semantic",
          definition: "累積的知識、事實、領域常識。回答「這件事是什麼」「規則是什麼」。",
          example: "公司退貨政策、命名 convention、API 規格、合約條款。",
        },
        {
          term: "Procedural",
          definition: "學會的方法、流程、套路。回答「怎麼做」「步驟是什麼」。",
          example: "「分析個案」的標準流程、「寫 PR description」的格式、「處理客訴」的腳本。",
        },
      ]} />
      <Talkbox compact>
        <p>Procedural memory 已經由前面講的 skill / workflow 解決。Episodic 跟 semantic 還需要明確的 storage layer——下一頁看實務做法。</p>
      </Talkbox>
    </>
  );
}
