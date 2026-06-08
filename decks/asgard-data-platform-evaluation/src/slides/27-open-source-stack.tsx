import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "開源自建：每階段選一個最成熟的元件",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線三</Kicker>
      <h2>開源自建：每階段選一個最成熟的元件</h2>
      <Table large>
        <thead>
          <tr>
            <th>角色</th>
            <th>起步元件（Phase 1）</th>
            <th>目標元件（Phase 3）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ingestion 擷取</td>
            <td>Airflow Python 任務</td>
            <td>Airbyte（UI、300+ 連接器）</td>
          </tr>
          <tr>
            <td>Storage 儲存</td>
            <td>PostgreSQL</td>
            <td>MinIO + Parquet + Iceberg</td>
          </tr>
          <tr>
            <td>Transform 轉換</td>
            <td>dbt（SQL 模型化）</td>
            <td>dbt（同一套，改跑 Trino）</td>
          </tr>
          <tr>
            <td>Query 查詢</td>
            <td>PostgreSQL 本身</td>
            <td>Trino（分散式、可跨源）</td>
          </tr>
          <tr>
            <td>Consumption 應用</td>
            <td>Grafana + Asgard Data Insight</td>
            <td>+ Metabase（自助分析）</td>
          </tr>
          <tr>
            <td>Orchestration 排程</td>
            <td>Apache Airflow（全程不變）</td>
            <td>（同左）</td>
          </tr>
          <tr>
            <td>Governance 治理</td>
            <td>git + SQL 版控</td>
            <td>+ OpenMetadata</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
