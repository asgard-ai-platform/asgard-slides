import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事二：分眾準備", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事二 · 行銷分眾 (2/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_marketing_2.png" alt="地區與會員等級分布" size="page" caption="看地區與會員等級分布，準備分眾——不同城市不能推一樣的內容。" />
    </>
  );
}
