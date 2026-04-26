import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Claude Code 怎麼做 sandbox：approval、scope、trace、checkpoint",
  section: "Claude Code Sandbox",
  theme: "dark",
};

export const notes = `
### 43. Claude Code 怎麼做 sandbox：approval、scope、trace、checkpoint
- 區段：Claude Code Sandbox
- 主句：Claude Code 不是先給 AI 全部權限再限制，而是預設受限、按需求被使用者授權。
- 卡片重點：
  - Approval flow：每個會動到檔案系統 / shell / network 的工具呼叫前，agent 先描述意圖，等使用者按 yes/no/always。
  - Scoped permission：權限可以限定到某個目錄、某個 binary、某個網域；不是全有全無。
  - Trace：每一個 read / write / exec 都記在事件鏈裡，事後可看 agent 動了什麼。
  - Checkpoint / resume：sandbox 可以暫停、保存狀態、之後從 checkpoint 接續。
- 補充講法：這只是「一家怎麼做」。Codex、其他 framework、自家平台都會有不同的做法——重點是這四個能力的存在與否，而不是 implementation 細節。後面 plugin 段就會看到各家用不同方式包裝這些能力。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Claude Code Sandbox</Kicker>
      <h2>Claude Code 怎麼做 sandbox：approval、scope、trace、checkpoint</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>Approval flow</h3>
          <p>每個會動 fs / shell / network 的工具呼叫前，agent 先描述意圖；使用者按 yes / no / always-for-this-tool。</p>
        </Card>
        <Card>
          <h3>Scoped permission</h3>
          <p>權限不是全有全無：可以限到某個目錄、某個 binary、某個網域、某個 MCP server。</p>
        </Card>
        <Card>
          <h3>Trace</h3>
          <p>每一個 read / write / exec 都記在事件鏈裡，agent 動了什麼事後可審。</p>
        </Card>
        <Card variant="strong">
          <h3>Checkpoint / resume</h3>
          <p>Sandbox 可以暫停、保存狀態、之後從 checkpoint 接續，不需要從頭跑。</p>
        </Card>
      </CardGrid>
      <Quote compact>「預設受限、按需求授權、全程留痕」是 production sandbox 的三個基本動作。</Quote>
      <Talkbox compact>
        <p>這是「一家怎麼做」。Codex、其他 framework、自家平台都有自己的版本——重點是這四個能力存在與否，不是 implementation 細節。下一段看各家 plugin 怎麼把這些能力打包成可分發的 asset。</p>
      </Talkbox>
    </>
  );
}
