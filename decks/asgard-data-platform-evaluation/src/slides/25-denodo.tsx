import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Denodo：資料虛擬化（資料不落地）平台",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線二</Kicker>
      <h2>資料虛擬化（資料不落地）平台</h2>
      <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 15, lineHeight: 1.5 }}>
        市面同類（資料虛擬化）：TIBCO Data Virtualization、IBM Cloud Pak for Data、SAP HANA、Dremio 等。本報告以{" "}
        <strong style={{ color: "var(--ink)" }}>Denodo</strong> 為代表——資料虛擬化的市場領導者。
      </p>
      <DemoShot
        src="assets/research/denodo-unified-layer.png"
        alt="Denodo 官方架構"
        caption="Denodo 官方架構：來源 → 資料虛擬化層 → 應用（覆蓋 Query 跨源聯邦查詢 + 語意層；不持久化、不做歷史累積）。資料來源：community.denodo.com"
      />
    </>
  );
}
