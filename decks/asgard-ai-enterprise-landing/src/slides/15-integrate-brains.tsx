import { Kicker, GlanceGrid, Talkbox } from "deck-kit";
import type { SlideMeta, GlanceCell } from "deck-kit";

export const meta: SlideMeta = {
  title: "架構整合：讓左右腦串成「可執行的動作」",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const actions: GlanceCell[] = [
  {
    label: "🔍 打通分析與執行",
    value: "洞察 → 行動",
    note: "把「左腦」的分析結果，自動交給「右腦」或流程機制去執行，確保洞察能真正轉化為行動——而不是停在報告裡。",
  },
  {
    label: "🔗 從洞察到執行",
    value: "中樞協調，閉環",
    note: "一個中樞（Supervisor Agent）來協調：接收 ML 洞察、觸發 GenAI 或 RPA 動作，形成完整閉環。分析算出「該補貨」，自動接到「真的去下單」。",
  },
  {
    label: "📊 消除資訊孤島",
    value: "十幾個系統互相聽得懂",
    note: "讓分析部門和執行部門透過 AI 架構緊密相連，避免「有洞察但執行跟不上」。大部分公司的問題不是沒有資料，是資料散在各系統裡互相不講話。",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>架構整合</Kicker>
      <h2>架構整合：讓左右腦串成「可執行的動作」</h2>
      <GlanceGrid items={actions} />
      <Talkbox compact>
        <p>
          怎麼讓十幾個系統「互相聽得懂」？答案在下一頁——
          先要有一層讓 AI 真正理解企業語言的基礎。
        </p>
      </Talkbox>
    </>
  );
}
