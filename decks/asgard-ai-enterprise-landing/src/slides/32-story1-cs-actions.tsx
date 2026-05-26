import { Kicker, DemoShot, DashList, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./32-story1-cs-actions.module.css";

export const meta: SlideMeta = {
  title: "故事一（5/5）：客服止血 ＋ 老闆下四個動作",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事一 5/5</Kicker>
      <h2>客服止血 ＋ 老闆下四個動作</h2>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/dashboard_cs_1.png"
          alt="客服 Dashboard：高優先工單與處理壓力"
          size="compact"
          caption="客服 Dashboard：高優先工單"
        />
        <DemoShot
          src="assets/retail/agent%20high%20risk.png"
          alt="客服工單 Agent 找出 SLA 風險案件"
          size="compact"
          caption="工單 Agent：SLA 風險急件"
        />
        <DemoShot
          src="assets/retail/dashboard_cs_2.png"
          alt="各通路 SLA 風險，找出要優先處理的通路"
          size="compact"
          caption="各通路 SLA 風險"
        />
      </div>
      <DashList
        items={[
          <><strong>營運</strong>：每天追通路＋履約，不只看營收</>,
          <><strong>商品</strong>：盯熱賣品牌/品類，先標最影響營收的缺貨品</>,
          <><strong>倉儲</strong>：先處理熱賣缺貨 SKU，能調今天就調</>,
          <><strong>客服</strong>：先處理高優先＋SLA 風險工單，避免客訴擴大</>,
        ]}
      />
      <Quote compact>
        <p>
          這就是<strong>組織型 AI</strong>——給你一個會自己協作的部門。
        </p>
      </Quote>
    </>
  );
}
