import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Agent 不是更會聊天的 chatbot，而是可以被委派工作的系統",
  section: "The Shift",
  theme: "dark",
};

export const notes = `
### 04. Agent 不是更會聊天的 chatbot，而是可以被委派工作的系統
- 區段：The Shift
- 主句：工作場景的問題不是「AI 會不會回答」，而是「它能不能負責一段可驗收的流程」。
- 卡片重點：
  - Chat：單次問答，靠 prompt 和 context 產生回覆。
  - Tool-using Assistant：能查資料、呼叫 API、讀檔案，但通常仍是短任務。
  - Production Agent：能規劃、執行、恢復、記憶、稽核，並在權限邊界內長時間工作。
- 補充講法：Chatbot 停在回答；production agent 要能接任一段工作。判斷標準不是語氣像不像人，而是能不能被驗收、能不能失敗後回來。
`;

export default function Slide() {
  return (
    <>
      <Kicker>The Shift</Kicker>
      <h2>Agent 不是更會聊天的 chatbot，而是可以被委派工作的系統</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>Chat</h3>
          <p>單次問答，靠 prompt 和 context 產生回覆。</p>
        </Card>
        <Card>
          <h3>Tool-using Assistant</h3>
          <p>能查資料、呼叫 API、讀檔案，但通常仍是短任務。</p>
        </Card>
        <Card variant="strong">
          <h3>Production Agent</h3>
          <p>能規劃、執行、恢復、記憶、稽核，並在權限邊界內長時間工作。</p>
        </Card>
      </CardGrid>
      <Quote>工作場景的問題不是「AI 會不會回答」，而是「它能不能負責一段可驗收的流程」。</Quote>
      <Quote compact>這不是 prompt 寫不好，這是辦公室沒蓋好。</Quote>
      <Talkbox compact>
        <p>Chatbot 停在回答；production agent 要能接任一段工作。判斷標準不是語氣像不像人，而是能不能被驗收、能不能失敗後回來。</p>
      </Talkbox>
    </>
  );
}
