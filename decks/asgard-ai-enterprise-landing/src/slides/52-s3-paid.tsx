import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事三：已付款未出貨", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事三 · 通路健康度 (2/3)</Kicker>
      <DemoShot src="assets/retail/agent%20-%20logistic%20paid%20but%20not%20delivered.png" alt="已付款未出貨訂單" size="page" caption="物流履約 Agent 拉出已付款未出貨訂單——某些高營收通路其實全卡著。" />
    </>
  );
}
