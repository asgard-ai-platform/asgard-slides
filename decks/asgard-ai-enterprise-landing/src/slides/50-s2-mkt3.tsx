import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事二：名單分三群", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事二 · 行銷分眾 (3/3)</Kicker>
      <DemoShot src="assets/retail/agent%20member%20grouping%20-%20retargeting%201.png" alt="會員行銷 Agent 分三群" size="page" caption="會員行銷 Agent 把名單分三群：① 立即推播 ② 先客服安撫 ③ 暫不推播。AI 幫我們避免把行銷做成客訴。" />
    </>
  );
}
