import { Kicker, GlanceGrid, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "場景設定：一家多通路零售企業",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 場景設定</Kicker>
      <h2>場景設定：一家多通路零售企業</h2>
      <p>
        多通路並行：<strong>SHOPLINE</strong>、<strong>Shopify</strong>、<strong>門市 POS</strong>、
        <strong>蝦皮商城</strong>、<strong>企業團購</strong>。
      </p>
      <GlanceGrid
        items={[
          { label: "林老闆", value: "看經營總覽", note: "只想知道「哪裡出問題」" },
          { label: "Mia", value: "營運主管", note: "追通路 KPI 與履約狀態" },
          { label: "Ivy", value: "商品企劃", note: "盯熱賣品與供應動能" },
          { label: "Ken", value: "倉儲主管", note: "管多據點庫存與調撥" },
          { label: "Amy", value: "客服主管", note: "追工單 SLA 風險" },
          { label: "Sandy", value: "行銷主管", note: "規劃分眾與活動投放" },
          { label: "Jason", value: "通路主管", note: "綜合看通路健康度" },
        ]}
      />
      <Quote compact>
        <p>
          這不是 demo data，是<strong>一家公司一週的真實運作</strong>。
        </p>
      </Quote>
    </>
  );
}
