import { Kicker, FlowDiagram, DashList } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "PostgreSQL 資料中台",
  section: "階段演進路線",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Phase 1</Kicker>
      <h2>PostgreSQL 資料中台</h2>
      <FlowDiagram
        nodes={[
          { title: "來源", body: "ERP / 生管 / 檔案" },
          { title: "排程介接", body: "Airflow" },
          { title: "中台倉庫", body: "PostgreSQL（staging / core / marts）" },
          { title: "轉換", body: "dbt SQL 模型" },
          { title: "應用", body: "Grafana + Asgard Data Insight" },
        ]}
      />
      <DashList
        items={[
          "五個核心元件，一台 VM 即可起步，以 git 版控貫穿",
          "挑一條真實業務閉環（如 MES 報工 → 生管決策）跑通，但架構從第一天就通用",
          "日常維運在 Airflow / Grafana / ADI 三個網頁介面完成",
          "約 3–4 個月，含種子工程師訓練與結業驗收",
        ]}
      />
    </>
  );
}
