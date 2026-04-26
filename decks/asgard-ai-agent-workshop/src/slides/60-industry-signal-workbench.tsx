import { Card, Kicker, Tag, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Claude Code / Codex 都在把 agent 變成可工作的工作台",
  section: "Industry Signal",
  theme: "light",
};

export const notes = `
### 46. Claude Code / Codex 都在把 agent 變成可工作的工作台
- 區段：Industry Signal
- 卡片重點：從 terminal / IDE / web 進入 repo 與工作流程：它把 repo context、MCP、CLAUDE.md、skills、hooks、plugins、git 與審核流程接成 coding agent runtime。；從 CLI、cloud task、desktop app 延伸到一般工作：它把本機讀寫執行、雲端 sandbox、browser、plugins、skills、MCP、memory 與 automation 放進同一個工作台。
- 補充講法：這不是單一廠商的行銷詞，而是產品形態正在收斂：agent 不只是模型，而是包含 repo / app context、tool interface、sandbox、approval、trace、memory、plugin / skill 的工作環境。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Industry Signal</Kicker>
      <h2>Claude Code / Codex 都在把 agent 變成可工作的工作台</h2>
      <TwoColumn
        left={<Card variant="strong">
          <Tag>Claude Code</Tag>
          <h3 style={{ marginTop: "14px" }}>從 terminal / IDE / web 進入 repo 與工作流程</h3>
          <p>它把 repo context、MCP、CLAUDE.md、skills、hooks、plugins、git 與審核流程接成 coding agent runtime。</p>
        </Card>}
        right={<Card variant="strong">
          <Tag>Codex</Tag>
          <h3 style={{ marginTop: "14px" }}>從 CLI、cloud task、desktop app 延伸到一般工作</h3>
          <p>它把本機讀寫執行、雲端 sandbox、browser、plugins、skills、MCP、memory 與 automation 放進同一個工作台。</p>
        </Card>}
      />
      <Talkbox compact>
        <p>這不是單一廠商的行銷詞，而是產品形態正在收斂：agent 不只是模型，而是包含 repo / app context、tool interface、sandbox、approval、trace、memory、plugin / skill 的工作環境。</p>
      </Talkbox>
    </>
  );
}
