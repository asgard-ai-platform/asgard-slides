import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Agent 進入企業，會被三個問題拷問：誰、什麼、做了什麼",
  section: "Governance · Layer 6",
  theme: "paper",
};

export const notes = `
### 50. Agent 進入企業，會被三個問題拷問：誰、什麼、做了什麼
- 區段：Governance · Layer 6
- 主句：六層架構的最後一層；不過關，agent 進不了 production。
- 卡片重點：
  - Identity：agent 代表誰行動 (on behalf of which user / team)。
  - Policy：能用哪些工具、讀哪些資料 (allowlist / denylist / scope)。
  - Audit：做了什麼、為什麼、誰看過 (event chain + sign-off)。
- 補充講法：governance 不只是 IT 部門的需求。它決定 agent 能不能被法務、合規、稽核、管理層信任，是 agent 從 pilot 走進營運的關鍵閘門。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L6">Governance · Three Questions</Kicker>
      <h2>Agent 進入企業，會被三個問題拷問：誰、什麼、做了什麼</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>Identity</h3>
          <p>Agent 代表誰行動？on behalf of which user、which team、which service account。每個 action 都要追得回主體。</p>
        </Card>
        <Card>
          <h3>Policy</h3>
          <p>能用哪些工具、讀哪些資料？allowlist / denylist / scope；不只是「能不能」，是「能到什麼程度」。</p>
        </Card>
        <Card variant="strong">
          <h3>Audit</h3>
          <p>做了什麼、為什麼做、誰看過？事件鏈 + sign-off；事後可被 review、必要時可被回放。</p>
        </Card>
      </CardGrid>
      <Quote>沒有 governance 的 agent，永遠只能是 pilot；過不了 IT、法務、稽核這三道門。</Quote>
      <Talkbox compact>
        <p>Governance 不只是合規的需求。它決定 agent 能不能被法務、合規、稽核、管理層信任——這是 agent 從 pilot 走進 production 的真正閘門。</p>
      </Talkbox>
    </>
  );
}
