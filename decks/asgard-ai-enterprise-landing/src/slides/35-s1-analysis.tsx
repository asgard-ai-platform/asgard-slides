import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：先校正直覺", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 老闆早會 (2/2)</Kicker>
      <DemoShot src="assets/retail/agent%20analysis-1.png" alt="Agent 整理營收下滑可能原因" size="page" caption="Agent 先找線索：營收掉了、但毛利沒一起崩——不是賣不動，是供不出去。" />
    </>
  );
}
