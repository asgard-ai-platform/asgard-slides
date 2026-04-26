import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Agent 不該負責的事：高風險決策、real-time SLA、對抗輸入",
  section: "Where Agents Fail",
  theme: "dark",
};

export const notes = `
### 92. Agent 不該負責的事：高風險決策、real-time SLA、對抗輸入
- 區段：Where Agents Fail
- 主句：知道哪裡不該用 agent，跟知道哪裡該用一樣重要。
- 卡片重點：
  - 高風險單次決策（醫療、財務、人事）→ 必須 human-in-the-loop，agent 只能做 recommendation。
  - Sub-second SLA 場景 → agent loop 的延遲太高；用 deterministic system + agent 做後台分析。
  - 對抗性輸入（fraud detection、anti-spam）→ prompt injection 風險高，限縮權限與 sandbox。
  - 強合規場景 → 需要可解釋性，agent 黑盒問題暴露決策不透明。
- 補充講法：列這個不是要勸退使用 agent；是建立「該用」跟「不該用」的清楚界線。誤把 agent 用在錯場景，比沒用 agent 還慘。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Where Agents Fail</Kicker>
      <h2>Agent 不該負責的事：高風險決策、real-time SLA、對抗輸入</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>高風險單次決策</h3>
          <p>醫療診斷、財務交易、人事決定——必須 human-in-the-loop。Agent 可以做 recommendation 與資料整理，但拍板要回到人。</p>
        </Card>
        <Card>
          <h3>Sub-second SLA</h3>
          <p>需要毫秒級回應的場景（廣告競價、即時風控）— agent loop 的延遲太高。用 deterministic 系統，agent 跑後台分析。</p>
        </Card>
        <Card>
          <h3>對抗性輸入</h3>
          <p>Fraud detection、anti-spam、安全攻防——對手會 prompt injection。權限要極小化、sandbox 要嚴、output 要驗。</p>
        </Card>
        <Card variant="strong">
          <h3>強合規 / 可解釋性場景</h3>
          <p>金融、醫療、法律部分流程要求決策可追溯、可解釋。Agent 黑盒問題在這裡會暴露。</p>
        </Card>
      </CardGrid>
      <Quote compact>知道哪裡不該用 agent，跟知道哪裡該用一樣重要。</Quote>
      <Talkbox compact>
        <p>列這個不是要勸退；是建立清楚界線。誤把 agent 用在錯的場景，比沒用 agent 還慘——錯誤被自動化放大、責任歸屬不清、合規踩雷。</p>
      </Talkbox>
    </>
  );
}
