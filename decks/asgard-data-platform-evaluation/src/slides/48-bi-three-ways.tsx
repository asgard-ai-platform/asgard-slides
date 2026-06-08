import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三種互補的看數據方式",
  section: "Consumption",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>BI</Kicker>
      <h2>三種互補的看數據方式</h2>
      <Table large>
        <thead>
          <tr>
            <th>工具</th>
            <th>適合誰</th>
            <th>說明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grafana</td>
            <td>管理層 KPI 看板、產線即時戰情</td>
            <td>Phase 1 即上線，固定版面、自動更新、支援告警</td>
          </tr>
          <tr>
            <td>Metabase</td>
            <td>業務／生管自助探索</td>
            <td>Phase 2/3 加入，拖拉式，不寫 SQL 也能自己拉圖表</td>
          </tr>
          <tr>
            <td>商用 BI（選配）</td>
            <td>特定部門偏好 FineBI／Power BI</td>
            <td>開源資料層以標準 SQL 對外，任何商用 BI 都能連</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
