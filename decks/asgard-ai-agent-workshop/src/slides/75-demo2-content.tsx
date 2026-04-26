import { CodeBlock, Kicker, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "emba-famulus：用開源 plugin 組出 EMBA 商管 agent",
  section: "Demo 2 · Content",
  theme: "dark",
};

export const notes = `
### 60. emba-famulus：用開源 plugin 組出 EMBA 商管 agent
- 區段：Demo 2 · Content
- 補充講法：這裡不是從零寫 agent，而是把既有 harness、plugin、skills、workflow 組合起來。商管框架、案例分析流程與輸出格式不必每次重寫。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 2 · Content</Kicker>
      <h2>emba-famulus：用開源 plugin 組出 EMBA 商管 agent</h2>
      <TwoColumn
        left={<CodeBlock>{`emba-famulus/
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
├── skills/
│   ├── biz-sme-management/
│   ├── biz-corporate-governance/
│   └── fin-m-and-a/
└── workflows/
    ├── case-study.md
    ├── industry-analysis.md
    └── executive-pitch.md`}</CodeBlock>}
        right={<CodeBlock>{`任務：
我要寫一份家族企業接班的個案分析作業。
主題：一家台灣中型製造業，二代準備接班，
一代想做治理結構調整，也可能引入外部資金。
請產出結構化報告。`}</CodeBlock>}
      />
      <Talkbox compact>
        <p>這裡不是從零寫 agent，而是把既有 harness、plugin、skills、workflow 組合起來。商管框架、案例分析流程與輸出格式不必每次重寫。</p>
      </Talkbox>
    </>
  );
}
