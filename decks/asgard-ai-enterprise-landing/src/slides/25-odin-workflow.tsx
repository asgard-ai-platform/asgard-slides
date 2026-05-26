import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Odin Studio · Agentic Workflow", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Odin Studio · 產品畫面 (4/4)</Kicker>
      <DemoShot src="assets/product/p-21.png" alt="Odin Agentic Workflow" size="page" caption="Agentic Workflow — 拖拉式多 Agent 工作流編排，每一步可即時 Tracing。" />
    </>
  );
}
