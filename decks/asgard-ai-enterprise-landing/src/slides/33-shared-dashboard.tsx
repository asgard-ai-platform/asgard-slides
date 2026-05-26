import { Kicker, DemoShot, Quote } from "deck-kit";
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
      <p>
        被授權的資料分析師對 <strong>Insight Agent</strong> 說人話：
        「幫我把各分類、各品牌、各通路的銷售，整理成主管能看的 Dashboard。」
        AI 產出圖表——從此老闆、營運、商品、客服，<strong>全部看同一份資料</strong>。
        沒有人需要自己去撈資料庫，沒有人需要排隊等 IT 做報表。
      </p>
      <DemoShot
        src="assets/retail/agent_insight_sales_channel.png"
        alt="Insight Agent 整理的共用 Dashboard"
        size="page"
        caption="Insight Agent 整理的共用 Dashboard"
      />
      <Quote compact>
        <p>
          一個組織的 AI 化，是從<strong>「大家看同一個事實」</strong>開始的。
        </p>
      </Quote>
    </>
  );
}
