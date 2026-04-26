import { Card, Kicker, Tag, Talkbox, CardGrid, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Production harness 至少要管六件事",
  section: "Production Harness",
  theme: "dark",
};

export const notes = `
### 38. Production harness 至少要管六件事
- 區段：Production Harness
- 卡片重點：拆任務：把模糊目標變成可執行步驟。；執行：調工具、讀寫檔案、產出 artifact。；調度工具：選 MCP、shell、file、browser 或專用 API。；管理 context：決定什麼進來、什麼壓縮、什麼丟掉。；錯誤恢復：失敗時能重試、回報、換工具或停止。；可恢復狀態：任務中斷後能從最近狀態繼續。
- 補充講法：這六件事是 production agent 的最低檢查表。缺 planner 會亂做；缺 recovery 會卡住；缺 checkpoint，長任務一中斷就只能重來。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Production Harness</Kicker>
      <h2>Production harness 至少要管六件事</h2>
      <CardGrid columns={3}>
        <Card><Tag>Planner</Tag><h3 style={{ marginTop: "12px" }}>拆任務</h3><p>把模糊目標變成可執行步驟。</p></Card>
        <Card><Tag>Executor</Tag><h3 style={{ marginTop: "12px" }}>執行</h3><p>調工具、讀寫檔案、產出 artifact。</p></Card>
        <Card><Tag>Router</Tag><h3 style={{ marginTop: "12px" }}>調度工具</h3><p>選 MCP、shell、file、browser 或專用 API。</p></Card>
        <Card><Tag>Memory</Tag><h3 style={{ marginTop: "12px" }}>管理 context</h3><p>決定什麼進來、什麼壓縮、什麼丟掉。</p></Card>
        <Card><Tag>Recovery</Tag><h3 style={{ marginTop: "12px" }}>錯誤恢復</h3><p>失敗時能重試、回報、換工具或停止。</p></Card>
        <Card><Tag>Checkpoint</Tag><h3 style={{ marginTop: "12px" }}>可恢復狀態</h3><p>任務中斷後能從最近狀態繼續。</p></Card>
      </CardGrid>
      <Talkbox compact>
        <p>這六件事是 production agent 的最低檢查表。缺 planner 會亂做；缺 recovery 會卡住；缺 checkpoint，長任務一中斷就只能重來。</p>
      </Talkbox>
    </>
  );
}
