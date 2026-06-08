import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "每次升級都有可觀察的觸發條件",
  section: "階段演進路線",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Phase 2 / 3</Kicker>
      <h2>每次升級都有可觀察的觸發條件</h2>
      <Table large>
        <thead>
          <tr>
            <th>導入項</th>
            <th>觸發條件</th>
            <th>帶來什麼</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Airbyte（介接 UI 化）</td>
            <td>資料來源 &gt; 5 種，或出現 SaaS/雲端來源</td>
            <td>新來源從「寫程式」變「UI 點幾下」，CDC 內建</td>
          </tr>
          <tr>
            <td>OpenMetadata（資料目錄）</td>
            <td>非 IT 開始用中台，或表數 &gt; 20</td>
            <td>全公司可搜尋的資料目錄、欄位級血緣、變更審核</td>
          </tr>
          <tr>
            <td>MinIO + Iceberg</td>
            <td>資料近 TB 級、PG 掃描變慢、需長年歷史</td>
            <td>成本大降、容量近乎無上限、時間旅行、開放格式</td>
          </tr>
          <tr>
            <td>Trino</td>
            <td>跨庫查詢、併發成長、報表變慢</td>
            <td>單一 SQL 入口、水平擴充、跨源聯邦查詢（對應 Denodo，零授權費）</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
