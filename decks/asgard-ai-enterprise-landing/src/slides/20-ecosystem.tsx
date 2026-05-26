import { SectionHeader, DashList } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Asgard AI Ecosystem — An Enterprise AI Total Solution",
  section: "Asgard 產品與架構",
  theme: "dark",
};

const pillars = [
  <>覆蓋<strong>整個生產週期</strong>——研發、採購、生產、物流、銷售、客服、財務、人資，不是只有一個聊天機器人。</>,
  <>把<strong>左腦 ML/RPA ＋ 右腦 GenAI</strong> 串成閉環——會算的 AI 和會說的 AI，串在一起才是完整的 AI 員工。</>,
  <>一層<strong>企業語意層</strong>，讓 AI 聽懂你的公司——建一次共同字典，全平台通用。</>,
  <>一個乾淨、可治理的<strong>資料地基</strong>——地基不穩，上面蓋什麼都會垮。</>,
];

export default function Slide() {
  return (
    <>
      <SectionHeader
        eyebrow="段落三：Asgard 怎麼做"
        title="Asgard AI Ecosystem — An Enterprise AI Total Solution"
      />
      <p style={{ marginTop: "24px", marginBottom: "16px", fontSize: "18px" }}>
        不是一個聊天機器人，是一套讓 AI 深入企業日常運作的「<strong>總體解決方案</strong>」。
        把前面講的四件事——生產週期、左右腦、語意層、資料地基——全部做進同一個平台。
      </p>
      <DashList items={pillars} />
    </>
  );
}
