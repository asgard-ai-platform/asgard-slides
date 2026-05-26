import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Unitech：Gen BI", section: "真實客戶", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Unitech 實際畫面 · 自動化 (3/3)</Kicker>
      <DemoShot src="assets/unitech/p-49.png" alt="語意化查詢 ＋ Gen BI" size="page" caption="語意化查詢 ＋ Gen BI：用講的問維修趨勢，自動產出圖表 Dashboard。" />
    </>
  );
}
