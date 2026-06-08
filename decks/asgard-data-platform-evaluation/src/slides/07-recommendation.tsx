import { Kicker, Timeline } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "開源自建 + 三階段演進",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>建議</Kicker>
      <h2>開源自建 + 三階段演進</h2>
      <Timeline
        items={[
          {
            label: "Phase 1",
            title: "PostgreSQL 中台起步",
            note: "Airflow + PG + dbt + Grafana + Asgard Data Insight，3–4 個月跑通第一條業務閉環",
          },
          {
            label: "Phase 2",
            title: "治理強化",
            note: "+ Airbyte（介接 UI 化）+ OpenMetadata（資料目錄）",
          },
          {
            label: "Phase 3",
            title: "Lakehouse 升級",
            note: "+ MinIO + Iceberg + Trino，與大型企業同級、全程零授權費",
          },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        每階段都有可觀察的觸發條件，且前一階段資產全數延續，不走回頭路。
      </p>
    </>
  );
}
