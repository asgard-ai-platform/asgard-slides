import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "前提：先讓資料變成大家都能看的 Dashboard",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 起點</Kicker>
      <h2>前提：讓資料變成「大家都能看的 Dashboard」</h2>
      <DemoShot
        src="assets/retail/agent_insight_sales_channel.png"
        alt="Insight Agent 整理的共用 Dashboard"
        size="page"
        caption="被授權的分析師對 Insight Agent 說人話就產出圖表——從此老闆、營運、商品、客服全部看同一份資料。一個組織的 AI 化，是從「大家看同一個事實」開始的。"
      />
    </>
  );
}
