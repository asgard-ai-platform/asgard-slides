import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Context window 是金魚記憶；長任務需要外部 memory",
  section: "Memory · Layer 5",
  theme: "paper",
};

export const notes = `
### 47. Context window 是金魚記憶；長任務需要外部 memory
- 區段：Memory · Layer 5
- 主句：你不能用 prompt 假裝有記憶。
- 卡片重點：
  - Goldfish problem：context window 滿了就忘；超過 100K token 的任務要靠別的方式。
  - Long task continuity：跨天、跨 session、跨打斷點的任務需要 checkpoint。
  - Multi-user / multi-task：同一 agent 服務多人，狀態不能混。
- 補充講法：六層架構的第五層在實務上經常被忽略，但長任務、多人共用、需要審計的場景缺不了。Memory 不是「記住所有東西」，是「設計記得什麼、忘記什麼、何時召回」。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L5">Memory · Why</Kicker>
      <h2>Context window 是金魚記憶；長任務需要外部 memory</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>Goldfish problem</h3>
          <p>Context window 滿了就忘。超過模型能力上限的長任務不能只靠塞 prompt。</p>
        </Card>
        <Card>
          <h3>Long task continuity</h3>
          <p>跨天、跨 session、跨打斷點的工作需要 checkpoint 與恢復機制。</p>
        </Card>
        <Card variant="strong">
          <h3>Multi-user / multi-task</h3>
          <p>同一 agent 服務多人或多任務時，狀態不能混；需要 session 邊界。</p>
        </Card>
      </CardGrid>
      <Quote>你不能用 prompt 假裝有記憶。Memory 是 agent 系統的第五層。</Quote>
      <Talkbox compact>
        <p>Memory engineering 的核心問題不是「記住所有東西」，是「設計記得什麼、忘記什麼、何時召回」。下一頁拆三種 memory 類型。</p>
      </Talkbox>
    </>
  );
}
