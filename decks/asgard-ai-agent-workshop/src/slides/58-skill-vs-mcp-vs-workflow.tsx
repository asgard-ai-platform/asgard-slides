import { Kicker, Matrix, Quote, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Skill、Workflow、MCP、Plugin 不是同一種東西，但會被同一個 harness 組合",
  section: "Skill vs MCP vs Workflow",
  theme: "dark",
};

export const notes = `
### 36. Skill、Workflow、MCP、Plugin 不是同一種東西，但會被同一個 harness 組合
- 區段：Skill vs MCP vs Workflow
- 主句：Skill 是方法；MCP 是外部能力；Workflow 是流程；Plugin 是分發包；Harness 是把它們接進工作循環的 runtime。
- 表格重點：Skill / 這類任務應該怎麼判斷與交付？ / 方法論、流程、output contract、gotchas、references、scripts。 / \`meta-structured-problem\`、\`mkt-ab-testing\`；Workflow / 這個任務要走哪些步驟？ / 任務管線、角色分工、交付順序、review gate。 / case-study、industry-analysis、executive-pitch；MCP Server / agent 要如何安全呼叫外部能力？ / tool schema、resource、prompt、auth boundary、error contract。 / 實價登錄、Shopline、內部 CRM API；Plugin / 這組能力如何被安裝、版本化、分享？ / manifest、skills、commands、agents、hooks、MCP config、settings。 / Claude Code plugin、Codex plugin、Yggdrasil solution bundle
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Asset types · Not an extra layer">Skill vs MCP vs Workflow</Kicker>
      <h2>Skill、Workflow、MCP、Plugin 不是同一種東西，但會被同一個 harness 組合</h2>
      <Matrix
        headers={["層級", "它回答的問題", "典型內容", "例子"]}
        rows={[
          [
            "Skill",
            "這類任務應該怎麼判斷與交付？",
            "方法論、流程、output contract、gotchas、references、scripts。",
            <><code>meta-structured-problem</code>、<code>mkt-ab-testing</code></>,
          ],
          [
            "Workflow",
            "這個任務要走哪些步驟？",
            "任務管線、角色分工、交付順序、review gate。",
            "case-study、industry-analysis、executive-pitch",
          ],
          [
            "MCP Server",
            "agent 要如何安全呼叫外部能力？",
            "tool schema、resource、prompt、auth boundary、error contract。",
            "實價登錄、Shopline、內部 CRM API",
          ],
          [
            "Plugin",
            "這組能力如何被安裝、版本化、分享？",
            "manifest、skills、commands、agents、hooks、MCP config、settings。",
            "Claude Code plugin、Codex plugin、Yggdrasil solution bundle",
          ],
        ]}
      />
      <Quote compact>Skill 是方法；MCP 是外部能力；Workflow 是流程；Plugin 是分發包；Harness 是把它們接進工作循環的 runtime。</Quote>
    </>
  );
}
