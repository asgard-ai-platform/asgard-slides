import { Kicker, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./57-plugin-to-harness-diagram.module.css";

export const meta: SlideMeta = {
  title: "Claude Code 如何把 plugin 組合成 harness 可用的能力？",
  section: "Plugin To Harness Diagram",
  theme: "dark",
};

export const notes = `
### 44. Claude Code 如何把 plugin 組合成 harness 可用的能力？
- 區段：Plugin To Harness Diagram
- 補充講法：因此「做 plugin」不是只放一堆 prompt，而是在定義 Claude Code harness 可以載入哪些能力、什麼時候觸發、哪些工具可用、哪些事件要自動檢查，以及成果如何被人 review。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Plugin To Harness Diagram</Kicker>
      <h2>Claude Code 如何把 plugin 組合成 harness 可用的能力？</h2>
      <div className={styles.assetGrid}>
        <div className={styles.assetCol}>
          <div className={styles.asset}>plugin.json<small>identity、version、component paths</small></div>
          <div className={styles.asset}>skills/<small>model-invoked task knowledge</small></div>
          <div className={styles.asset}>agents/<small>subagent definitions</small></div>
          <div className={styles.asset}>hooks/<small>lifecycle automation</small></div>
          <div className={styles.asset}>.mcp.json<small>external tool servers</small></div>
        </div>
        <div className={styles.hub}>
          <div>
            <b>Claude Code Harness</b>
            <span>load plugin → validate structure → register components → expose commands/skills/tools → run agent loop with approval, context, hooks, tool calls, trace</span>
          </div>
        </div>
        <div className={styles.assetCol}>
          <div className={styles.asset}>Skill routing<small>用 description 決定是否載入 SKILL.md</small></div>
          <div className={styles.asset}>Tool routing<small>選 MCP、shell、file、browser、LSP</small></div>
          <div className={styles.asset}>Delegation<small>把任務交給 subagent / background work</small></div>
          <div className={styles.asset}>Lifecycle hooks<small>工具前後、停止、壓縮、權限事件</small></div>
          <div className={styles.asset}>Artifacts / logs<small>輸出檔案、diff、terminal output、session state</small></div>
        </div>
      </div>
      <Talkbox compact>
        <p>因此「做 plugin」不是只放一堆 prompt，而是在定義 Claude Code harness 可以載入哪些能力、什麼時候觸發、哪些工具可用、哪些事件要自動檢查，以及成果如何被人 review。</p>
      </Talkbox>
    </>
  );
}
