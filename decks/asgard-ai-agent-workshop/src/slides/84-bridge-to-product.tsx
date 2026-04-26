import { FlowDiagram, Kicker, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "如果六層是架構，企業需要的是可使用的平台",
  section: "Bridge To Product",
  theme: "light",
};

export const notes = `
### 69. 如果六層是架構，企業需要的是可使用的平台
- 區段：Bridge To Product
- 補充講法：這頁是從技術架構轉到產品價值：部門要效率，IT 要可控，管理層要看得到責任與成效。平台要同時回答三方問題。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Bridge To Product</Kicker>
      <h2>如果六層是架構，企業需要的是可使用的平台</h2>
      <FlowDiagram nodes={[
        { title: "部門想要", body: "我想讓 AI 處理實際工作" },
        { title: "IT 擔心", body: "資料、權限、整合、維運" },
        { title: "管理層要求", body: "看得到效果，也追得到責任" },
        { title: "平台要承接", body: "工作流、洞察、執行、治理" },
      ]} />
      <Talkbox compact>
        <p>這頁是從技術架構轉到產品價值：部門要效率，IT 要可控，管理層要看得到責任與成效。平台要同時回答三方問題。</p>
      </Talkbox>
    </>
  );
}
