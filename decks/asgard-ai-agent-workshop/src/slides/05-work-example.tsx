import { FlowDiagram, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "從「問 AI」到「委派 AI」差在哪裡？",
  section: "Work Example",
  theme: "paper",
};

export const notes = `
### 05. 從「問 AI」到「委派 AI」差在哪裡？
- 區段：Work Example
- 主句：Chatbot 停在回答；Agent 要能走完整段工作。
- 補充講法：把「一句需求」拆成五個工作步驟：找資料、做判斷、產出、留下紀錄。這就是 agent 和一般問答最大的差別。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Work Example</Kicker>
      <h2>從「問 AI」到「委派 AI」差在哪裡？</h2>
      <FlowDiagram nodes={[
        { title: "一句需求", body: "整理這個客戶下季續約風險" },
        { title: "找資料", body: "CRM、工單、合約、會議記錄" },
        { title: "做判斷", body: "風險原因、機會點、下一步" },
        { title: "產出交付", body: "Brief、Dashboard、追蹤任務" },
        { title: "留下紀錄", body: "資料來源、決策路徑、誰批准" },
      ]} />
      <Quote>Chatbot 停在回答；Agent 要能走完整段工作。</Quote>
      <Talkbox compact>
        <p>把「一句需求」拆成五個工作步驟：找資料、做判斷、產出、留下紀錄。這就是 agent 和一般問答最大的差別。</p>
      </Talkbox>
    </>
  );
}
