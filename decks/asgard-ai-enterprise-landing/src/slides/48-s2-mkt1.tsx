import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事二：活動成效", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事二 · 行銷分眾 (1/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_marketing_1.png" alt="活動預算與營收" size="page" caption="行銷 Sandy 看活動預算與營收：有些花大錢回收普通、有些花得少回收好——別再憑感覺加碼。" />
    </>
  );
}
