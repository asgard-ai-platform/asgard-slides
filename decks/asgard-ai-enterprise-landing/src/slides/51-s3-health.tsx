import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事三：通路健康度", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事三 · 通路健康度 (1/3)</Kicker>
      <DemoShot src="assets/retail/agent%20-%20logistic%20performance.png" alt="通路健康度綜合觀察" size="page" caption="通路 Jason 不只看營收，請 Agent 綜合看通路健康度：營收＋物流履約＋客服風險一起看。" />
    </>
  );
}
