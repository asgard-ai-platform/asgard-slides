import { Kicker, DashList, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "評估對象與三步方法",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>範圍與方法</Kicker>
      <h2>評估對象與三步方法</h2>
      <DashList
        items={[
          "路線一｜商用套裝（低代碼資料整合）：Informatica、Talend、Microsoft SSIS、Fivetran、FineDataLink 等——本報告以 FineDataLink 為代表",
          "路線二｜資料虛擬化：TIBCO Data Virtualization、IBM Cloud Pak for Data、SAP HANA、Dremio、Denodo 等——本報告以 Denodo 為代表",
          "路線三｜開源自建：Airflow / PostgreSQL / dbt / Iceberg / Trino + 顧問導入",
        ]}
      />
      <Callout variant="info" title="三步評估方法">
        <strong style={{ color: "var(--ink)" }}>一</strong> 建立中立的「六階段角色框架」——先有一把共同的尺；
        <strong style={{ color: "var(--ink)" }}>二</strong> 把每個方案放進框架對標——看清「是什麼、不是什麼」；
        <strong style={{ color: "var(--ink)" }}>三</strong> 以適用情境條件做多維度評估——功能、地端、自主維運、擴充性、鎖定、AI、成本。
      </Callout>
    </>
  );
}
