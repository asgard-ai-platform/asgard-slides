import { FlowDiagram, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "為什麼企業不能只把帳密交給 AI？",
  section: "Safety Diagram",
  theme: "paper",
};

export const notes = `
### 39. 為什麼企業不能只把帳密交給 AI？
- 區段：Safety Diagram
- 主句：重點不是讓 AI 不能做事，而是讓它只在可控範圍內做事。
- 補充講法：權限不要交給模型自己判斷。比較穩的做法是：人設定允許範圍，governance 決定可不可以，harness 只派必要動作，sandbox 執行，vault / proxy 在最後一刻使用 credential。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Safety Diagram</Kicker>
      <h2>為什麼企業不能只把帳密交給 AI？</h2>
      <FlowDiagram nodes={[
        { title: "使用者", body: "提出任務與允許範圍" },
        { title: "Governance", body: "確認身份、角色、批准規則" },
        { title: "Harness", body: "只把必要動作派出去" },
        { title: "Sandbox", body: "在隔離工作台執行" },
        { title: "Vault / Proxy", body: "需要時才代為使用憑證" },
      ]} />
      <Quote>重點不是讓 AI 不能做事，而是讓它只在可控範圍內做事。</Quote>
      <Talkbox compact>
        <p>權限不要交給模型自己判斷。比較穩的做法是：人設定允許範圍，governance 決定可不可以，harness 只派必要動作，sandbox 執行，vault / proxy 在最後一刻使用 credential。</p>
      </Talkbox>
    </>
  );
}
