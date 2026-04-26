import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Trace 是單次紀錄；Observability 是跨 run 的指標 + 警報",
  section: "Observability",
  theme: "paper",
};

export const notes = `
### 91. Trace 是單次紀錄；Observability 是跨 run 的指標 + 警報
- 區段：Observability
- 主句：trace 看一次任務怎麼跑；observability 看「整體有沒有問題」。
- 卡片重點：
  - Trace：單次 run 的完整事件鏈（讀檔、tool call、結果、決策）。
  - Aggregation：跨 run 的指標彙總（success rate、latency、cost）。
  - Alerting：成本飆 / 錯誤率突增 / tool 失效 → 通知。
  - Regression：新版 agent 跑 test set，看比舊版退步多少。
- 補充講法：production agent 至少要有 aggregation 跟 alerting；不然問題永遠是事後從使用者抱怨才知道。Regression test 在每次更新 skill / model 時跑，避免改一處壞十處。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Observability</Kicker>
      <h2>Trace 是單次紀錄；Observability 是跨 run 的指標 + 警報</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>Trace</h3>
          <p>一次 run 的完整事件鏈：讀檔、tool call、結果、決策路徑。Demo 3 看到的就是 trace。</p>
        </Card>
        <Card>
          <h3>Aggregation</h3>
          <p>跨 run 的指標彙總：每天 / 每週的 success rate、latency、cost 趨勢。</p>
        </Card>
        <Card>
          <h3>Alerting</h3>
          <p>成本突然飆、錯誤率突增、某 tool 全部失效 → 自動通知。不能等使用者抱怨才知道。</p>
        </Card>
        <Card variant="strong">
          <h3>Regression test</h3>
          <p>新版 skill / 新 model 上線前，跑一組 test set，比較跟舊版的差異。避免改一處壞十處。</p>
        </Card>
      </CardGrid>
      <Quote>沒有 observability 的 agent，等於沒有 production 的 agent。</Quote>
      <Talkbox compact>
        <p>很多企業 agent 跑了半年才發現某類任務一直失敗，因為沒有 aggregation 指標。Regression test 與 alerting 是 agent 從「能跑」到「能維運」的分水嶺。</p>
      </Talkbox>
    </>
  );
}
