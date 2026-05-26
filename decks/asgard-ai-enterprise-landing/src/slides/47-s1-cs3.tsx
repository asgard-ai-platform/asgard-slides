import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：老闆下四個動作", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 客服止血 (3/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_cs_2.png" alt="各通路 SLA 風險" size="page" caption="各通路 SLA 風險一覽。老闆下四動作：營運追通路+履約／商品標缺貨／倉儲先調熱賣 SKU／客服先處理 SLA 風險。" />
    </>
  );
}
