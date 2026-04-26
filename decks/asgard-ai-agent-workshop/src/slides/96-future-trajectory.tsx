import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "12-24 個月內，agent 架構會往哪走？",
  section: "Outlook",
  theme: "paper",
};

export const notes = `
### 96. 12-24 個月內，agent 架構會往哪走？
- 區段：Outlook
- 主句：工具會變、模型會升級，但六層架構與 production 判準會持續適用。
- 卡片重點：
  - Model-native harness：模型廠商把更多 harness 能力做進模型本身（已經在發生）。
  - Persistent agents：agent 從「跑一次」變「常駐」；可被找到、有記憶、可被 schedule。
  - Agent marketplaces：類似 App Store 的 plugin / skill / agent 流通市場逐漸成型。
  - Agent governance standards：類似 PCI-DSS、SOC2 的 agent 合規標準會出現。
- 補充講法：別賭單一工具能贏到底，但可以賭「production agent 需要 6 層」這個架構不會變。把組織能力建立在 6 層各層的判準上，工具換了不會白做。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Outlook · 12-24mo">Outlook</Kicker>
      <h2>12-24 個月內，agent 架構會往哪走？</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>Model-native harness</h3>
          <p>模型廠商把更多 harness 能力做進模型本身（OpenAI Managed Agents、Anthropic Claude Code 都在這條線上）。Application 層 harness 會更薄，但仍存在。</p>
        </Card>
        <Card>
          <h3>Persistent agents</h3>
          <p>Agent 從「跑一次任務」變「常駐角色」：可被 @-mention、可 schedule、有自己的 memory 與 inbox。不再是 chat，是同事。</p>
        </Card>
        <Card>
          <h3>Agent marketplaces</h3>
          <p>類似 App Store 的 plugin / skill / agent 流通市場逐漸成型。可信賴度、版本治理、付費模型都會跟上。</p>
        </Card>
        <Card variant="strong">
          <h3>Governance standards</h3>
          <p>類似 PCI-DSS、SOC2 的 agent 合規標準會出現；保險與法規會跟著要求。早期投資治理的組織會有 compliance 優勢。</p>
        </Card>
      </CardGrid>
      <Quote>工具會變、模型會升級，但六層架構與 production 判準會持續適用。</Quote>
      <Talkbox compact>
        <p>別賭單一工具能贏到底；可以賭「production agent 需要 6 層」這個架構不會變。把組織能力建立在 6 層各層的判準上，工具換了不會白做。</p>
      </Talkbox>
    </>
  );
}
