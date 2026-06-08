import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "開源軟體的資安與漏洞風險",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>常見疑慮</Kicker>
      <h2>開源軟體的資安與漏洞風險</h2>
      <Table large>
        <thead>
          <tr>
            <th>疑慮</th>
            <th>實際情況</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>程式碼公開 = 容易被入侵？</td>
            <td>公開讓全球持續檢視；主流專案有正式 CVE 通報與修補，常快於商用版本週期</td>
          </tr>
          <tr>
            <td>沒有廠商，漏洞誰修？</td>
            <td>元件皆有專職組織（Apache、各母公司），且都有付費商業支援可加購</td>
          </tr>
          <tr>
            <td>有大企業在用嗎？</td>
            <td>PostgreSQL／Airflow／Iceberg／dbt 誕生並運行於 Netflix、Airbnb 等生產環境</td>
          </tr>
          <tr>
            <td>授權有法律風險嗎？</td>
            <td>多為 Apache 2.0 / MIT；少數例外（MinIO AGPL v3）導入時由顧問盤點</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
