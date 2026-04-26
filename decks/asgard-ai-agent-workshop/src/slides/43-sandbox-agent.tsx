import { Card, Kicker, Talkbox, CardGrid, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Sandbox agent 是什麼？讓 AI 可以動手，但不讓它亂動",
  section: "Sandbox Agent",
  theme: "dark",
};

export const notes = `
### 37. Sandbox agent 是什麼？讓 AI 可以動手，但不讓它亂動
- 區段：Sandbox Agent
- 卡片重點：Workspace：有自己的工作資料夾，可以讀寫檔案、整理中間產物、輸出報告或簡報。；Execution：能跑 shell、測試、套件安裝、瀏覽器、自動化工具，但受到權限與 timeout 控制。；Isolation：避免直接碰主機敏感檔、憑證、未批准的網路或破壞性指令。；Approval：高風險動作可以要求人批准；企業可用 allow / deny rules 固化政策。；Traceability：保留指令、輸出、diff、截圖與 artifact，方便 review 與事後追溯。；Why it matters：沒有 sandbox，AI 越會做事風險越高；有 sandbox，才有條件把它放進流程。
- 補充講法：Sandbox 不是限制 AI，而是讓 AI 可以放心動手。企業真正需要的是可控執行、可審核紀錄、可回復狀態，而不是把整台電腦交給模型。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Sandbox Agent</Kicker>
      <h2>Sandbox agent 是什麼？讓 AI 可以動手，但不讓它亂動</h2>
      <CardGrid columns={3}>
        <Card><h3>Workspace</h3><p>有自己的工作資料夾，可以讀寫檔案、整理中間產物、輸出報告或簡報。</p></Card>
        <Card><h3>Execution</h3><p>能跑 shell、測試、套件安裝、瀏覽器、自動化工具，但受到權限與 timeout 控制。</p></Card>
        <Card><h3>Isolation</h3><p>避免直接碰主機敏感檔、憑證、未批准的網路或破壞性指令。</p></Card>
        <Card><h3>Approval</h3><p>高風險動作可以要求人批准；企業可用 allow / deny rules 固化政策。</p></Card>
        <Card><h3>Traceability</h3><p>保留指令、輸出、diff、截圖與 artifact，方便 review 與事後追溯。</p></Card>
        <Card variant="strong"><h3>Why it matters</h3><p>沒有 sandbox，AI 越會做事風險越高；有 sandbox，才有條件把它放進流程。</p></Card>
      </CardGrid>
      <Talkbox compact>
        <p>Sandbox 不是限制 AI，而是讓 AI 可以放心動手。企業真正需要的是可控執行、可審核紀錄、可回復狀態，而不是把整台電腦交給模型。</p>
      </Talkbox>
    </>
  );
}
