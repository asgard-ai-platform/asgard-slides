import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "資產延續對照表",
  section: "階段演進路線",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>演進，而非重做</Kicker>
      <h2>資產延續對照表</h2>
      <Table large>
        <thead>
          <tr>
            <th>資產</th>
            <th>Phase 1</th>
            <th>Phase 2</th>
            <th>Phase 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>三層資料模型</td>
            <td>建立</td>
            <td>沿用</td>
            <td>沿用（搬到 Iceberg）</td>
          </tr>
          <tr>
            <td>轉換 SQL（dbt）</td>
            <td>建立</td>
            <td>持續擴充</td>
            <td>改跑 Trino，邏輯不重寫</td>
          </tr>
          <tr>
            <td>Airflow 排程</td>
            <td>建立</td>
            <td>沿用</td>
            <td>沿用</td>
          </tr>
          <tr>
            <td>git 版控流程</td>
            <td>建立</td>
            <td>沿用</td>
            <td>沿用</td>
          </tr>
          <tr>
            <td>看板 / AI 查詢</td>
            <td>建立</td>
            <td>沿用</td>
            <td>換連線目標即可</td>
          </tr>
          <tr data-highlight="">
            <td>團隊能力</td>
            <td>排程/建模/版控</td>
            <td>+ 介接/資料目錄</td>
            <td>+ Lakehouse/分散式查詢</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
