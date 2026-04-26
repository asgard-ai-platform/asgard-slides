import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Token 不是免費的：每個任務跑一次要多少錢？",
  section: "Cost Economics",
  theme: "dark",
};

export const notes = `
### 89. Token 不是免費的：每個任務跑一次要多少錢？
- 區段：Cost Economics
- 主句：production agent 跑一次任務的成本應該可預估、可監控、可設上限。
- 卡片重點：
  - Token 經濟學：input × $X + output × $Y + tool call × $Z；長任務 + 多次 retry 容易爆。
  - Prompt caching：把 system prompt + skill body 快取，可省 50-80% input cost。
  - Model tiering：cheap router + expensive worker，比全用旗艦省 60-80%。
  - Cost monitoring：超過上限自動停；任何 task 都該有 budget。
- 補充講法：成本失控是 production agent 最常見的「發布後三個月才發現」問題。設計階段就該有 cost 模型，不是等帳單來才補救。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Cost Economics</Kicker>
      <h2>Token 不是免費的：每個任務跑一次要多少錢？</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>Token 經濟學</h3>
          <p>每個任務 = input × $X + output × $Y + tool call × $Z。長任務 + retry + 多輪 dialogue 容易把成本帶到單筆數十美元。</p>
        </Card>
        <Card>
          <h3>Prompt caching</h3>
          <p>System prompt、skill body、reference docs 不會每次變動 → cache 起來。Anthropic / OpenAI 都支援，可省 50-80% input cost。</p>
        </Card>
        <Card>
          <h3>Model tiering</h3>
          <p>Cheap model 做 routing / 簡單判斷，expensive model 只跑核心 reasoning。比全用旗艦模型省 60-80%。</p>
        </Card>
        <Card variant="strong">
          <h3>Cost monitoring</h3>
          <p>每個任務 → budget upper bound；超過自動停。Cost per successful task 應該是常駐 dashboard 指標。</p>
        </Card>
      </CardGrid>
      <Quote compact>Production agent 的成本應該可預估、可監控、可設上限——不是「等帳單來才知道」。</Quote>
      <Talkbox compact>
        <p>成本失控是「發布後三個月才發現」最常見的問題。設計階段就要有 cost 模型，把它跟 quality metrics 一起看。</p>
      </Talkbox>
    </>
  );
}
