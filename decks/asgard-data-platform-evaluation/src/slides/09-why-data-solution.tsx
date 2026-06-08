import { Kicker, FlowDiagram } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "從點對點串接到統一資料層",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>為什麼需要 Data Solution</Kicker>
      <h2>從點對點串接到統一資料層</h2>
      <FlowDiagram
        nodes={[
          { title: "現況", body: "每條跨系統需求都靠客製 SQL Job、人工匯出" },
          { title: "蔓延", body: "串接路徑越來越多，沒人畫得出全貌" },
          { title: "轉折", body: "導入 Data Solution" },
          { title: "目標", body: "各系統 → 統一資料平台" },
          { title: "產出", body: "BI 看板 / AI 查詢" },
        ]}
      />
    </>
  );
}
