import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Mimir · Text-to-SQL", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Mimir Data Insight · 產品畫面 (1/2)</Kicker>
      <DemoShot src="assets/product/p-23.png" alt="Mimir Text-to-SQL" size="page" caption="Text-to-SQL — 中文問「業績最高前 5 店」→ 自動 SQL ＋ 表格 ＋ 圖表，可存成 View。這就是「資訊找人」的入口。" />
    </>
  );
}
