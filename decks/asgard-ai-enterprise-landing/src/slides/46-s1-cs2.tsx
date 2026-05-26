import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：SLA 急件", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 客服止血 (2/3)</Kicker>
      <DemoShot src="assets/retail/agent%20high%20risk.png" alt="客服工單 Agent SLA 風險案件" size="page" caption="客服工單 Agent 拉出高優先、快超過 SLA 的急件，今天先處理。" />
    </>
  );
}
