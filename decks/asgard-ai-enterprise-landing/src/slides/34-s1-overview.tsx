import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：營收亮紅燈", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 老闆早會 (1/2)</Kicker>
      <DemoShot src="assets/retail/dashboard_overview_1.png" alt="經營總覽營收趨勢變差" size="page" caption="老闆打開經營總覽，月銷售趨勢變差。" />
    </>
  );
}
