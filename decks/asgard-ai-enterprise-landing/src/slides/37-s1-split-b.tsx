import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：排追查順序", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 拆解問題 (2/2)</Kicker>
      <DemoShot src="assets/retail/agent%20analysis-3.png" alt="Agent 建議追查順序" size="page" caption="Supervisor Agent 排出追查順序、分派各主管——它不埋頭算，它指揮。" />
    </>
  );
}
