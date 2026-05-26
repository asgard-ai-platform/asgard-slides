import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：需求還在", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 商品與倉儲 (1/4)</Kicker>
      <DemoShot src="assets/retail/dashboard_bestseller_1.png" alt="熱賣分析" size="page" caption="商品 Ivy 看熱賣分析：高單價品牌、熱門品類仍有動能——需求還在。" />
    </>
  );
}
