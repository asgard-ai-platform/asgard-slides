import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：庫存缺貨", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 商品與倉儲 (3/4)</Kicker>
      <DemoShot src="assets/retail/dashboard_inventory_monitor.png" alt="庫存監控缺貨警報" size="page" caption="倉儲 Ken 看庫存監控：多據點緊急缺貨、高風險、中度預警。" />
    </>
  );
}
