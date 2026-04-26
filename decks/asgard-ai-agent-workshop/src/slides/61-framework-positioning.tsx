import { Card, CardGrid, Kicker, Quote, Tag, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "比較之前先分層：不要把 runtime、plugin、framework 放在同一排",
  section: "Framework Positioning",
  theme: "paper",
};

export const notes = `
### 47. 比較之前先分層：不要把 runtime、plugin、framework 放在同一排
- 區段：Framework Positioning
- 主句：所以正確問題不是「誰跟誰同層」，而是：它負責六層模型裡的哪些責任？
- 卡片重點：Claude Code / Codex：使用者直接拿來工作的 agent runtime / workbench，負責 repo context、tools、sandbox、approval、trace 與交付。；Claude Code Plugin：不是完整 runtime，而是把 skills、commands、agents、hooks、MCP servers、settings、bin tools 包進既有 runtime。；OpenClaw / Hermes：更接近自架 autonomous agent framework：強調常駐、記憶、多工具、多平台或可自託管 execution。；Asgard：不是只提供單一 agent，而是把 workflow、insight、execution、open-source assets 與 governance 產品化。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Landscape · Frameworks">Framework Positioning</Kicker>
      <h2>比較之前先分層：不要把 runtime、plugin、framework 放在同一排</h2>
      <CardGrid columns={4}>
        <Card variant="strong">
          <Tag>Product / Runtime</Tag>
          <h3 style={{ marginTop: "14px" }}>Claude Code / Codex</h3>
          <p>使用者直接拿來工作的 agent runtime / workbench，負責 repo context、tools、sandbox、approval、trace 與交付。</p>
        </Card>
        <Card>
          <Tag>Extension Package</Tag>
          <h3 style={{ marginTop: "14px" }}>Claude Code Plugin</h3>
          <p>不是完整 runtime，而是把 skills、commands、agents、hooks、MCP servers、settings、bin tools 包進既有 runtime。</p>
        </Card>
        <Card>
          <Tag>Autonomous Framework</Tag>
          <h3 style={{ marginTop: "14px" }}>OpenClaw / Hermes</h3>
          <p>更接近自架 autonomous agent framework：強調常駐、記憶、多工具、多平台或可自託管 execution。</p>
        </Card>
        <Card>
          <Tag>Enterprise Platform</Tag>
          <h3 style={{ marginTop: "14px" }}>Asgard</h3>
          <p>不是只提供單一 agent，而是把 workflow、insight、execution、open-source assets 與 governance 產品化。</p>
        </Card>
      </CardGrid>
      <Quote compact>所以正確問題不是「誰跟誰同層」，而是：它負責六層模型裡的哪些責任？</Quote>
    </>
  );
}
