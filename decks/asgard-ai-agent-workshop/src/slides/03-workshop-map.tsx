import { Kicker, Quote, Steps, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "今天的主線：先有地圖，再看零件，最後看怎麼上手",
  section: "Workshop Map",
  theme: "light",
};

export const notes = `
### 03. 今天的主線：先有地圖，再看零件，最後看怎麼上手
- 區段：Workshop Map
- 主句：怎麼從 AI Chat 走到可以交辦、可治理、可重用的 AI Agent 工作法？
- 流程：1AI Chat vs Agent / 為什麼不是同一件事 -> 2六層模型 / Model 到 Governance -> 3細部元件 / MCP / Skill / Sandbox / Plugin -> 4Claude Code / 如何把元件組成工作循環 -> 5框架定位 / Claude Code / Codex / OpenClaw / Hermes -> 6Demo + Asgard / 從實作回到平台化
- 補充講法：順序刻意從大到小：先分清 chat 與 agent，再建立六層模型；接著才拆 MCP、Skill、Sandbox、Plugin；最後比較不同工具與框架，並用 demo 和 Asgard 產品生態系收束。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Workshop Map</Kicker>
      <h2>今天的主線：先有地圖，再看零件，最後看怎麼上手</h2>
      <Quote>怎麼從 AI Chat 走到可以交辦、可治理、可重用的 AI Agent 工作法？</Quote>
      <Steps items={[
        { label: "1", body: <>AI Chat vs Agent<br />為什麼不是同一件事</> },
        { label: "2", body: <>六層模型<br />Model 到 Governance</> },
        { label: "3", body: <>細部元件<br />MCP / Skill / Sandbox / Plugin</> },
        { label: "4", body: <>Claude Code<br />如何把元件組成工作循環</> },
        { label: "5", body: <>框架定位<br />Claude Code / Codex / OpenClaw / Hermes</> },
        { label: "6", body: <>Demo + Asgard<br />從實作回到平台化</> },
      ]} />
      <Talkbox compact>
        <p>順序刻意從大到小：先分清 chat 與 agent，再建立六層模型；接著才拆 MCP、Skill、Sandbox、Plugin；最後比較不同工具與框架，並用 demo 和 Asgard 產品生態系收束。</p>
      </Talkbox>
    </>
  );
}
