import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：客服壓力", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 客服止血 (1/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_cs_1.png" alt="客服 Dashboard" size="page" caption="客服 Amy 看 Dashboard：urgent / high 工單、各類型平均處理時間。" />
    </>
  );
}
