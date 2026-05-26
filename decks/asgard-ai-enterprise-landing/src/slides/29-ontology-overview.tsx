import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "架構全貌：Ontology Layer", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>架構全貌 (1/2)</Kicker>
      <DemoShot src="assets/deck/p25_ontology_layer.png" alt="Ontology Layer：Question/Answer ＋ Supervisor Agent ＋ 子 Agent" size="page" caption="Question → Answer：使用者問報告/搜尋/下命令，AI 回查詢結果、語意回答、真的執行動作；中間 Supervisor Agent 指揮四個專員。" />
    </>
  );
}
