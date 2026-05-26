import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "故事一：履約狀態", section: "零售範例", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>故事一 · 營運追通路 (2/3)</Kicker>
      <DemoShot src="assets/retail/dashboard_channel_1.png" alt="通路訂單履約狀態" size="page" caption="訂單卡在 pending / picking / shipped——營收進來了，但出貨慢就是未爆的客服壓力。" />
    </>
  );
}
