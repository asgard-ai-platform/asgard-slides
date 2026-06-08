import { Kicker, FlowDiagram } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "地端全開源 Lakehouse 架構",
  section: "目標藍圖 Lakehouse",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>完整架構總圖</Kicker>
      <h2>地端全開源 Lakehouse 架構</h2>
      <FlowDiagram
        nodes={[
          { title: "Sources", body: "ERP / 生管 / 檔案 / API" },
          { title: "Ingestion", body: "Airbyte（批次 + CDC）" },
          { title: "Storage", body: "MinIO + Iceberg + Lakekeeper" },
          { title: "Transform", body: "dbt（SQL 模型 + 測試 + 血緣）" },
          { title: "Query", body: "Trino（分散式 SQL）" },
          { title: "Consumption", body: "Grafana / Metabase / ADI" },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        Airflow 排程、git 治理、Prometheus + Grafana 監控橫向貫穿全部元件。
      </p>
    </>
  );
}
