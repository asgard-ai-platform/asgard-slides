import { FlowDiagram, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "說明：一次任務完成後，要把方法沉澱成 reusable workflow",
  section: "Demo 0 · Explanation",
  theme: "light",
};

export const notes = `
### 53. 說明：一次任務完成後，要把方法沉澱成 reusable workflow
- 區段：Demo 0 · Explanation
- 主句：真正的生產力不是一次讓 AI 幫忙，而是讓下一次同類工作變更容易。
- 補充講法：接下來的 Demo 1 會往下一層走：當任務需要真實外部資料時，不能只靠 prompt；需要 MCP 或其他 tool interface。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 0 · Explanation</Kicker>
      <h2>說明：一次任務完成後，要把方法沉澱成 reusable workflow</h2>
      <FlowDiagram nodes={[
        { title: "一次任務", body: "幫我做這份報告 / 簡報 / 分析" },
        { title: "沉澱提示", body: "哪些背景、格式、標準是固定的？" },
        { title: "變成 workflow", body: "下次同類任務直接套流程" },
        { title: "變成 skill", body: "把專業判斷與常見陷阱封裝起來" },
      ]} />
      <Quote compact>真正的生產力不是一次讓 AI 幫忙，而是讓下一次同類工作變更容易。</Quote>
      <Talkbox compact>
        <p>接下來的 Demo 1 會往下一層走：當任務需要真實外部資料時，不能只靠 prompt；需要 MCP 或其他 tool interface。</p>
      </Talkbox>
    </>
  );
}
