import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "架構全貌：Ontology Layer 是數位大腦",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>架構全貌</Kicker>
      <h2>架構全貌：Ontology Layer 是數位大腦</h2>
      <DemoShot
        src="assets/deck/p25_ontology_layer.png"
        alt="Ontology Layer：Question/Answer ＋ Supervisor Agent ＋ 子 Agent"
        caption="Ontology Layer 是連接所有企業知識、營運、動作的數位大腦——Supervisor Agent 指揮四個專員，長在你已有的系統之上。"
      />
    </>
  );
}
