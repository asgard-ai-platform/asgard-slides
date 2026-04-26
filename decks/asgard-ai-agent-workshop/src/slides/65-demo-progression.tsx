import { Card, CardGrid, Kicker, Tag, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "實作路線：從委派工作，到查資料、套方法、可審核執行",
  section: "Demo Progression",
  theme: "light",
};

export const notes = `
### 50. 實作路線：從委派工作，到查資料、套方法、可審核執行
- 區段：Demo Progression
- 卡片重點：委派工作：用 Codex / Claude Code 建立任務 brief、先規劃、再產出。；外部工具：用 MCP 查實價登錄，證明 agent 不是用模型記憶猜資料。；專業方法：用 emba-famulus 展示 plugin、workflow、skills 如何載入。；可控執行：用 sandbox trace 看事件鏈、工具執行、artifact 與 review surface。
- 補充講法：四個 demo 是同一條軸線——從「把工作說清楚」到「讓 AI 接外部資料」、「把方法包成可重用資產」，最後加上 sandbox 與 trace 才能交給組織用。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Practice · Demo Path">Demo Progression</Kicker>
      <h2>實作路線：從委派工作，到查資料、套方法、可審核執行</h2>
      <CardGrid columns={4}>
        <Card variant="strong">
          <Tag>Demo 0</Tag>
          <h3 style={{ marginTop: "14px" }}>委派工作</h3>
          <p>用 Codex / Claude Code 建立任務 brief、先規劃、再產出。</p>
        </Card>
        <Card variant="strong">
          <Tag>Demo 1</Tag>
          <h3 style={{ marginTop: "14px" }}>外部工具</h3>
          <p>用 MCP 查實價登錄，證明 agent 不是用模型記憶猜資料。</p>
        </Card>
        <Card variant="strong">
          <Tag>Demo 2</Tag>
          <h3 style={{ marginTop: "14px" }}>專業方法</h3>
          <p>用 emba-famulus 展示 plugin、workflow、skills 如何載入。</p>
        </Card>
        <Card variant="strong">
          <Tag>Demo 3</Tag>
          <h3 style={{ marginTop: "14px" }}>可控執行</h3>
          <p>用 sandbox trace 看事件鏈、工具執行、artifact 與 review surface。</p>
        </Card>
      </CardGrid>
      <Talkbox compact>
        <p>四個 demo 是同一條軸線——從「把工作說清楚」到「讓 AI 接外部資料」、「把方法包成可重用資產」，最後加上 sandbox 與 trace 才能交給組織用。</p>
      </Talkbox>
    </>
  );
}
