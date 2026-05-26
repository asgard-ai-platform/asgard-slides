import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：調貨 Action Agent", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 商品與倉儲 (4/4)</Kicker>
      <DemoShot src="assets/retail/agent%20transfer.png" alt="庫存調度 Agent 找出可調撥來源" size="page" caption="庫存調度 Agent（Action Agent）直接列出可調貨門市與可調數量——從洞察到動作沒有斷點。" />
    </>
  );
}
