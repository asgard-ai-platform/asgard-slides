import { Kicker, DemoShot, Talkbox } from "deck-kit";
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
      <DemoShot src="assets/deck/p25_ontology_layer.png" alt="Ontology Layer：Question/Answer ＋ Supervisor Agent ＋ 子 Agent" size="large" />
      <DemoShot src="assets/deck/p26_ontology_detail.png" alt="架構細節：Data Processing ＋ Workflow Toolset ＋ Data Sources" size="medium" caption="底層串接你已有的系統——ERP、CRM、WMS、POS……長出大腦，不換系統。" />
      <Talkbox compact>
        <p>Ontology Layer 是連接所有企業知識、營運、動作的數位大腦——Supervisor Agent 指揮四個專員，長在你已有的系統之上。</p>
      </Talkbox>
    </>
  );
}
