import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Odin Studio · Tool Setting", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Odin Studio · 產品畫面 (3/4)</Kicker>
      <DemoShot src="assets/product/p-20.png" alt="Odin Agent Skills / Tool Setting" size="page" caption="Agent Skills / Tool Setting — 設定每個 Agent 能用哪些工具。" />
    </>
  );
}
