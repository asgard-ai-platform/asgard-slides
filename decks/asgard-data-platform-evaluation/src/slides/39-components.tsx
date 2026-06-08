import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "各元件是誰：一句話介紹",
  section: "目標藍圖 Lakehouse",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>元件名冊</Kicker>
      <h2>各元件是誰：一句話介紹</h2>
      <Table large>
        <thead>
          <tr>
            <th>元件</th>
            <th>角色</th>
            <th>一句話</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apache Airflow</td>
            <td>排程（橫切面）</td>
            <td>業界排程標準，以 Python 定義 DAG。Airbnb 開源</td>
          </tr>
          <tr>
            <td>Airbyte</td>
            <td>Ingestion</td>
            <td>300+ 連接器，UI 設定同步，內建 CDC</td>
          </tr>
          <tr>
            <td>MinIO</td>
            <td>Storage L1</td>
            <td>地端 S3 相容物件儲存標準解</td>
          </tr>
          <tr>
            <td>Apache Iceberg</td>
            <td>Storage L3</td>
            <td>開放表格式，Netflix 開源；ACID、時間旅行、欄位演進</td>
          </tr>
          <tr>
            <td>dbt</td>
            <td>Transform</td>
            <td>SQL 轉換模型化：依賴解析、測試、血緣</td>
          </tr>
          <tr>
            <td>Trino</td>
            <td>Query</td>
            <td>分散式 SQL，跨源聯邦查詢（對應 Denodo 核心能力，零授權費）</td>
          </tr>
          <tr>
            <td>Metabase / Grafana</td>
            <td>Consumption</td>
            <td>自助分析 / KPI 看板 + 監控</td>
          </tr>
          <tr>
            <td>Asgard Data Insight</td>
            <td>Consumption（AI）</td>
            <td>自然語言查詢與 AI 分析入口</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
