import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Odin Studio · Knowledge Base", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Odin Studio · 產品畫面 (1/4)</Kicker>
      <DemoShot src="assets/product/p-18.png" alt="Odin Knowledge Base RAG" size="page" caption="Knowledge Base RAG — 把 PDF / Excel / CSV 餵進去，變成 AI 可查的知識庫。" />
    </>
  );
}
