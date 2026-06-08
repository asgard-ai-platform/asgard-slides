import { Kicker, Timeline } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "每階段都是可運作的完整平台",
  section: "階段演進路線",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>三階段總覽</Kicker>
      <h2>每階段都是可運作的完整平台</h2>
      <Timeline
        items={[
          {
            label: "Phase 1",
            title: "PostgreSQL 中台起步",
            note: "Airflow + PG + dbt + Grafana + ADI，第一條業務閉環上線",
          },
          {
            label: "Phase 2",
            title: "治理強化",
            note: "+ Airbyte（介接 UI 化）+ OpenMetadata（資料目錄）",
          },
          {
            label: "Phase 3",
            title: "Lakehouse 升級",
            note: "+ MinIO + Iceberg + Trino，與大型企業同級架構",
          },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        階段之間以「觸發條件達成」推進，不是半成品。
      </p>
    </>
  );
}
