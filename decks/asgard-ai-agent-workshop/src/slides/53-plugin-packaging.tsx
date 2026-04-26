import { Card, CodeBlock, Kicker, Quote, Tag, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Claude Code Plugin 是什麼？把 agent 能力做成可安裝、可版本化的套件",
  section: "Plugin Packaging",
  theme: "light",
};

export const notes = `
### 40. Claude Code Plugin 是什麼？把 agent 能力做成可安裝、可版本化的套件
- 區段：Plugin Packaging
- 主句：Plugin 解決「如何分發能力」；Harness 解決「如何在任務生命週期中使用能力」。
- 卡片重點：Plugin 是 Claude Code 的能力分發格式：它不是單一 prompt，也不是完整 agent runtime；它把 skills、commands、agents、hooks、MCP servers、LSP、settings、bin tools 包成一個可安裝的 extension。
- 補充講法：Claude Code plugin 的重點是把原本散在 \`.claude/\`、\`.mcp.json\`、hooks、agents、skills、commands 的設定包成可分享版本。安裝後，Claude Code harness 才會把這些資產註冊到實際執行循環。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Plugin Packaging</Kicker>
      <h2>Claude Code Plugin 是什麼？把 agent 能力做成可安裝、可版本化的套件</h2>
      <TwoColumn
        left={<CodeBlock>{`emba-famulus/
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
├── skills/
│   └── biz-sme-management/SKILL.md
├── workflows/
│   └── case-study.md
└── references/`}</CodeBlock>}
        right={<Card variant="strong">
          <Tag>Distribution format</Tag>
          <h3 style={{ marginTop: "12px" }}>Plugin 是 Claude Code 的能力分發格式</h3>
          <p>它不是單一 prompt，也不是完整 agent runtime；它把 skills、commands、agents、hooks、MCP servers、LSP、settings、bin tools 包成一個可安裝的 extension。</p>
        </Card>}
      />
      <Quote compact>Plugin 解決「如何分發能力」；Harness 解決「如何在任務生命週期中使用能力」。</Quote>
      <Talkbox compact>
        <p>Claude Code plugin 的重點是把原本散在 <code>.claude/</code>、<code>.mcp.json</code>、hooks、agents、skills、commands 的設定包成可分享版本。安裝後，Claude Code harness 才會把這些資產註冊到實際執行循環。</p>
      </Talkbox>
    </>
  );
}
