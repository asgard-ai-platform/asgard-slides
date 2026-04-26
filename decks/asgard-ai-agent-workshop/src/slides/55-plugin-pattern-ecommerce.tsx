import { Card, CodeBlock, Kicker, Tag, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "明顯的做法：把一個職能場景包成 plugin，而不是讓使用者每次重新說明",
  section: "Concrete Plugin Pattern",
  theme: "light",
};

export const notes = `
### 42. 明顯的做法：把一個職能場景包成 plugin，而不是讓使用者每次重新說明
- 區段：Concrete Plugin Pattern
- 卡片重點：把 domain workflow 變成可安裝能力：安裝後，使用者可以要求「分析本週電商營運狀況」。harness 會載入電商與 GA4 skills、呼叫 GA4/Shopline MCP、必要時交給 ops-analyst subagent，最後由 hook 檢查輸出是否含資料來源與指標定義。
- 補充講法：Plugin 不是裝飾。這個範例把一個職能場景的知識、資料連線、執行工具、審核規則與預設 agent 組合起來，讓非技術使用者不用每次重新教 agent 背景。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Concrete Plugin Pattern</Kicker>
      <h2>明顯的做法：把一個職能場景包成 plugin，而不是讓使用者每次重新說明</h2>
      <TwoColumn
        left={<CodeBlock>{`asgard-ecommerce-operator/
├── .claude-plugin/plugin.json
├── skills/
│   ├── tw-ecom-analytics-ga4/SKILL.md
│   ├── tw-ecom-invoice-universalec/SKILL.md
│   └── mkt-ab-testing/SKILL.md
├── agents/
│   └── ops-analyst.md
├── hooks/
│   └── hooks.json
├── .mcp.json
└── bin/
    └── export-weekly-report`}</CodeBlock>}
        right={<Card variant="strong">
          <Tag>What it does</Tag>
          <h3 style={{ marginTop: "12px" }}>把 domain workflow 變成可安裝能力</h3>
          <p>安裝後，使用者可以要求「分析本週電商營運狀況」。harness 會載入電商與 GA4 skills、呼叫 GA4/Shopline MCP、必要時交給 ops-analyst subagent，最後由 hook 檢查輸出是否含資料來源與指標定義。</p>
        </Card>}
      />
      <Talkbox compact>
        <p>Plugin 不是裝飾。這個範例把一個職能場景的知識、資料連線、執行工具、審核規則與預設 agent 組合起來，讓非技術使用者不用每次重新教 agent 背景。</p>
      </Talkbox>
    </>
  );
}
