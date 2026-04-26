import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Harness 是什麼？",
  section: "Harness Definition",
  theme: "paper",
};

export const notes = `
### 11. Harness 是什麼？
- 區段：Harness Definition
- 主句：Harness 是 agent 系統中，負責管理 model 以外所有執行生命週期的架構層。
- 卡片重點：
  - 不是 prompt：Prompt 是一次要說什麼；harness 是整段流程怎麼跑。
  - 不是 tool use：Tool use 是一次呼叫；harness 管呼叫前後的判斷、重試與停止條件。
  - 不是 model：Model 做推理；harness 把推理包進可恢復的工作系統。
- 補充講法：Prompt 是單次輸入與指令；tool use 是一次外部動作；harness 是管理多步驟 agent run 的 runtime，包括狀態、工具、錯誤、權限與交付結果。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Harness Definition</Kicker>
      <h2>Harness 是什麼？</h2>
      <Quote>Harness 是 agent 系統中，負責管理 model 以外所有執行生命週期的架構層。</Quote>
      <CardGrid columns={3}>
        <Card><h3>不是 prompt</h3><p>Prompt 是一次要說什麼；harness 是整段流程怎麼跑。</p></Card>
        <Card><h3>不是 tool use</h3><p>Tool use 是一次呼叫；harness 管呼叫前後的判斷、重試與停止條件。</p></Card>
        <Card><h3>不是 model</h3><p>Model 做推理；harness 把推理包進可恢復的工作系統。</p></Card>
      </CardGrid>
      <Quote compact>Tool use 是給 AI 一支電話；Harness 是整間辦公室。</Quote>
      <Talkbox compact>
        <p>Prompt 是單次輸入與指令；tool use 是一次外部動作；harness 是管理多步驟 agent run 的 runtime，包括狀態、工具、錯誤、權限與交付結果。</p>
      </Talkbox>
    </>
  );
}
