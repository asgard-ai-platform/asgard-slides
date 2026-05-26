import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Unitech：WMS AI 助理（對內）", section: "真實客戶", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Unitech 實際畫面 (2/2)</Kicker>
      <DemoShot src="assets/unitech/p-43.png" alt="WMS AI 助理" size="page" caption="WMS AI 助理（對內）：講人話問『排水零件還有貨嗎』→ 跨倉庫列出各據點庫存。" />
    </>
  );
}
