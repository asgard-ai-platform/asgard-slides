import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：拆成三條線", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 拆解問題 (1/2)</Kicker>
      <DemoShot src="assets/retail/agent%20analysis-2.png" alt="Agent 把營收問題拆成三方向" size="page" caption="把營收問題拆成三條可追查的線：通路、熱賣品供應、履約與客服壓力。" />
    </>
  );
}
