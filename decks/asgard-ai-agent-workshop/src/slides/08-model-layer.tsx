import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Model 是推理層，不應承擔整個系統狀態",
  section: "Layer 1",
  theme: "light",
};

export const notes = `
### 08. Model 是推理層，不應承擔整個系統狀態
- 區段：Layer 1
- 主句：Model 能力的天花板，經常是外部工作系統的天花板。
- 卡片重點：
  - Stateless：不要把長期狀態都塞在一次對話裡。
  - Replaceable：不同任務可以換不同模型，不應該重做整個流程。
  - Focused：讓模型做判斷，不要讓模型自己扛流程、權限和記憶。
- 補充講法：模型負責理解、規劃與產生 tool call；長期流程、工具選擇、權限、狀態與可恢復性應由 runtime 與系統層管理，避免把不可維護的狀態藏在 prompt 裡。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Layer 1</Kicker>
      <h2>Model 是推理層，不應承擔整個系統狀態</h2>
      <CardGrid columns={3}>
        <Card><h3>Stateless</h3><p>不要把長期狀態都塞在一次對話裡。</p></Card>
        <Card><h3>Replaceable</h3><p>不同任務可以換不同模型，不應該重做整個流程。</p></Card>
        <Card><h3>Focused</h3><p>讓模型做判斷，不要讓模型自己扛流程、權限和記憶。</p></Card>
      </CardGrid>
      <Quote>Model 能力的天花板，經常是外部工作系統的天花板。</Quote>
      <Talkbox compact>
        <p>模型負責理解、規劃與產生 tool call；長期流程、工具選擇、權限、狀態與可恢復性應由 runtime 與系統層管理，避免把不可維護的狀態藏在 prompt 裡。</p>
      </Talkbox>
    </>
  );
}
