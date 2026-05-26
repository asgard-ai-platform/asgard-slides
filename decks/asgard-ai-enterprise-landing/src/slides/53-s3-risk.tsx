import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事三：決策反轉", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事三 · 通路健康度 (3/3)</Kicker>
      <DemoShot src="assets/retail/agent%20-%20logistic%20risk.png" alt="通路高風險案件" size="page" caption="通路高風險案件一覽。決策反轉：先修履約＋客服，等通路健康了再加碼廣告。" />
    </>
  );
}
