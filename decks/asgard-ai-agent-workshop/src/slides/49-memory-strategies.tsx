import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Memory engineering 三策略：summarization、retrieval、checkpoint",
  section: "Memory Strategies",
  theme: "dark",
};

export const notes = `
### 49. Memory engineering 三策略：summarization、retrieval、checkpoint
- 區段：Memory Strategies
- 主句：好的 memory 不是把所有歷史塞進 context；是設計「何時壓縮、何時召回、何時暫停」。
- 卡片重點：
  - Summarization：把舊互動壓縮成摘要 + 關鍵決策路徑；context 維持輕量。
  - Retrieval：把歷史與知識存到外部 (vector DB、graph、SQL)，需要時才召回。
  - Checkpoint / Resume：長任務可以暫停、保存狀態、之後接續，不需要從頭跑。
- 補充講法：Session 的生命週期是 start → checkpoint → resume → handoff → archive。每個階段都對應 storage 操作；缺一段都會在 production 出狀況。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L5">Memory Strategies</Kicker>
      <h2>Memory engineering 三策略：summarization、retrieval、checkpoint</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>Summarization</h3>
          <p>把舊互動壓縮成摘要 + 關鍵決策路徑。Context 保持輕量，但失去細節。</p>
        </Card>
        <Card>
          <h3>Retrieval</h3>
          <p>歷史與知識存到外部（vector DB、graph、SQL）。需要時才召回，不佔 context。</p>
        </Card>
        <Card variant="strong">
          <h3>Checkpoint / Resume</h3>
          <p>長任務暫停、保存狀態、之後接續。Sandbox 跟 memory 一起決定能不能 recover。</p>
        </Card>
      </CardGrid>
      <Quote compact>Session 的生命週期：start → checkpoint → resume → handoff → archive。每段都對應 storage 操作。</Quote>
      <Talkbox compact>
        <p>三種策略通常一起用：summarization 處理 context 壓力、retrieval 補回需要的事實、checkpoint 讓長任務可恢復。Production agent 系統三種都要有。</p>
      </Talkbox>
    </>
  );
}
