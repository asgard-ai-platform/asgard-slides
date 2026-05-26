import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：高影響力品牌", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 商品與倉儲 (2/4)</Kicker>
      <DemoShot src="assets/retail/dashboard_bestseller_2.png" alt="高影響力品牌與商品" size="page" caption="找出高影響力品牌與商品，優先盯它們的庫存。" />
    </>
  );
}
