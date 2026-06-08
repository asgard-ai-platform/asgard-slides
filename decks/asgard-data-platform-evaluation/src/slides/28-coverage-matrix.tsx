import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "角色覆蓋矩陣：三條路線一張圖看完",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>本章關鍵頁</Kicker>
      <h2>角色覆蓋矩陣：三條路線一張圖看完</h2>
      <Table>
        <thead>
          <tr>
            <th>階段角色</th>
            <th>FineDataLink（+FineReport/FineBI 另購）</th>
            <th>Denodo</th>
            <th>開源自建</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 Sources</td>
            <td>盤點</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>2 Ingestion</td>
            <td>● 核心強項</td>
            <td>○ 不搬資料</td>
            <td><strong>● Airflow / Airbyte</strong></td>
          </tr>
          <tr>
            <td>3 Storage</td>
            <td>○ 需自備</td>
            <td>○ 刻意不做</td>
            <td><strong>● PG → Iceberg</strong></td>
          </tr>
          <tr>
            <td>4 Transform</td>
            <td>◐ 低代碼（鎖產品內）</td>
            <td>◐ 虛擬視圖</td>
            <td><strong>● SQL / dbt（可版控）</strong></td>
          </tr>
          <tr>
            <td>5 Query</td>
            <td>○</td>
            <td>● 核心強項</td>
            <td><strong>● PG → Trino</strong></td>
          </tr>
          <tr>
            <td>6 Consumption</td>
            <td>◐ 需另購</td>
            <td>◐ 對外供數</td>
            <td><strong>● Grafana / Metabase / ADI</strong></td>
          </tr>
          <tr>
            <td>Orchestration</td>
            <td>◐ 產品內</td>
            <td>◐ 快取排程</td>
            <td><strong>● Airflow</strong></td>
          </tr>
          <tr>
            <td>Governance</td>
            <td>◐ 產品內權限</td>
            <td>● 語意層/目錄</td>
            <td><strong>● git → OpenMetadata</strong></td>
          </tr>
          <tr>
            <td>Observability</td>
            <td>◐ 任務運維</td>
            <td>◐ 平台監控</td>
            <td><strong>● Grafana / Prometheus</strong></td>
          </tr>
        </tbody>
      </Table>
      <p style={{ marginTop: 14, color: "var(--muted)" }}>
        ● 完整覆蓋 &nbsp;&nbsp; ◐ 部分覆蓋 &nbsp;&nbsp; ○ 不覆蓋
      </p>
    </>
  );
}
