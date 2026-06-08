import { Kicker, Table, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "架構的已知取捨與限制",
  section: "目標藍圖 Lakehouse",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>誠實的取捨</Kicker>
      <h2>架構的已知取捨與限制</h2>
      <Table>
        <thead>
          <tr>
            <th>取捨</th>
            <th>因應</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>元件數量多（8–10 個）</td>
            <td>分階段導入，Phase 1 只有 5 個，每階段擴充有觸發條件</td>
          </tr>
          <tr>
            <td>沒有 24×7 原廠支援</td>
            <td>導入期顧問承擔，訓練以「團隊能自行排障」驗收，各元件有商業支援可加購</td>
          </tr>
          <tr>
            <td>即時性為分鐘級</td>
            <td>製造 KPI 分鐘級已足；未來秒級需求可外掛 Kafka，不動主架構</td>
          </tr>
          <tr>
            <td>MinIO 採 AGPL v3</td>
            <td>企業內部使用無虞，導入時由顧問完成授權盤點，必要時可換物件儲存</td>
          </tr>
        </tbody>
      </Table>
      <Callout variant="info">
        這是「目標藍圖」，不是 Day 1 要全部建起來的東西——下一章說明如何分三階段走到這裡。
      </Callout>
    </>
  );
}
