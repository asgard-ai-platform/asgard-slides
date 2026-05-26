import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：通路 KPI", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 營運追通路 (1/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_overview_2.png" alt="通路 KPI 拆解" size="page" caption="營運 Mia 看通路 KPI：各通路訂單量、客單價都不同，不能只看公司總營收。" />
    </>
  );
}
