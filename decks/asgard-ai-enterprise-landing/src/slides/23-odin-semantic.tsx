import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Odin Studio · Semantic Modeling", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Odin Studio · 產品畫面 (2/4)</Kicker>
      <DemoShot src="assets/product/p-19.png" alt="Odin Semantic Modeling" size="page" caption="Semantic Modeling — 語意層編輯介面，定義資料表與商業概念的對應。" />
    </>
  );
}
