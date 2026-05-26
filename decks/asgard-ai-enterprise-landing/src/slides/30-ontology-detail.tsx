import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "架構全貌：底層串接", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>架構全貌 (2/2)</Kicker>
      <DemoShot src="assets/deck/p26_ontology_detail.png" alt="架構細節：Data Processing ＋ Workflow Toolset ＋ Data Sources" size="page" caption="底層串接你已有的系統——ERP / CRM / WMS / POS……在 Data Processing ＋ Workflow Toolset 之上長出數位大腦，不換系統。" />
    </>
  );
}
