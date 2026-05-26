import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：配送效率", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 營運追通路 (3/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_channel_2.png" alt="配送業者與履約效率" size="page" caption="再看配送業者與履約效率，鎖定『已付款未出貨』、尤其高營收通路。" />
    </>
  );
}
