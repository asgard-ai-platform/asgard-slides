import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Mimir · Gen BI", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Mimir Data Insight · 產品畫面 (2/2)</Kicker>
      <DemoShot src="assets/product/p-24.png" alt="Mimir Gen BI" size="page" caption="Gen BI — 自動生成財務／營運 Dashboard。" />
    </>
  );
}
