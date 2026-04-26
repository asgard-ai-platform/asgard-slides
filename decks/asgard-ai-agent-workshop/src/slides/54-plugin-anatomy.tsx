import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Claude Code plugin 裡面可以包哪些東西？每個元件都接到不同 runtime hook",
  section: "Claude Code Plugin Anatomy",
  theme: "paper",
};

export const notes = `
### 41. Claude Code plugin 裡面可以包哪些東西？每個元件都接到不同 runtime hook
- 區段：Claude Code Plugin Anatomy
- 表格重點：Manifest / \`.claude-plugin/plugin.json\` / 定義 name、description、version、author、路徑覆寫與 plugin metadata；也提供 namespacing。；Skills / \`skills/<name>/SKILL.md\` / 進入 skill discovery 與 model-invoked routing；被任務觸發後載入流程、gotchas、references。；Commands / \`commands/*.md\` / 提供使用者可明確呼叫的 slash command；適合固定入口與可傳參數任務。；Agents / \`agents/*.md\` / 註冊 custom subagent：獨立 context、系統指令、工具權限、模型與 delegation description。；Hooks / \`hooks/hooks.json\` / 接進 lifecycle events，例如 PreToolUse、PostToolUse、Stop、SubagentStart，用於 policy、automation、validation。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Claude Code Plugin Anatomy</Kicker>
      <h2>Claude Code plugin 裡面可以包哪些東西？每個元件都接到不同 runtime hook</h2>
      <Matrix
        compact
        headers={["Plugin component", "預設位置", "接到 Claude Code harness 的哪一段"]}
        rows={[
          ["Manifest", <code key="m">.claude-plugin/plugin.json</code>, "定義 name、description、version、author、路徑覆寫與 plugin metadata；也提供 namespacing。"],
          ["Skills", <code key="s">{"skills/<name>/SKILL.md"}</code>, "進入 skill discovery 與 model-invoked routing；被任務觸發後載入流程、gotchas、references。"],
          ["Commands", <code key="c">commands/*.md</code>, "提供使用者可明確呼叫的 slash command；適合固定入口與可傳參數任務。"],
          ["Agents", <code key="a">agents/*.md</code>, "註冊 custom subagent：獨立 context、系統指令、工具權限、模型與 delegation description。"],
          ["Hooks", <code key="h">hooks/hooks.json</code>, "接進 lifecycle events，例如 PreToolUse、PostToolUse、Stop、SubagentStart，用於 policy、automation、validation。"],
          ["MCP servers", <code key="mcp">.mcp.json</code>, "把外部 tools/resources/prompts 註冊到 tool interface，讓 harness 在 tool routing 時可發現與呼叫。"],
          ["Settings / bin", <><code key="s2">settings.json</code> / <code key="b">bin/</code></>, "設定預設 agent 或 status line；把 plugin executable 加進 Bash PATH，支援本地執行。"],
        ]}
      />
    </>
  );
}
