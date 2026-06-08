import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "六維度綜合評估",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>評估結論</Kicker>
      <h2>六維度綜合評估：套裝 vs 開源</h2>
      <Table large striped>
        <thead>
          <tr>
            <th>維度</th>
            <th>套裝軟體（商用）</th>
            <th>開源自建</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>六階段角色覆蓋</td>
            <td>單一產品只覆蓋一兩格，需多套拼湊</td>
            <td><strong>完整，六階段一次到位</strong></td>
          </tr>
          <tr>
            <td>地端部署</td>
            <td>可</td>
            <td><strong>可（全開源）</strong></td>
          </tr>
          <tr>
            <td>授權成本結構</td>
            <td>授權／年訂閱，依模組與用量計價</td>
            <td><strong>零授權費，投資在人與顧問</strong></td>
          </tr>
          <tr>
            <td>團隊能力累積</td>
            <td>操作技能，綁定廠商</td>
            <td><strong>業界通用技能，留在團隊</strong></td>
          </tr>
          <tr>
            <td>擴充性／退場彈性</td>
            <td>中低（私有格式、生態綁定）</td>
            <td><strong>高（開放格式、逐件可換）</strong></td>
          </tr>
          <tr data-highlight="">
            <td>AI 整合自由度</td>
            <td>受產品藍圖限制</td>
            <td><strong>完全開放</strong></td>
          </tr>
        </tbody>
      </Table>
      <p style={{ marginTop: 14, color: "var(--muted)" }}>
        「套裝軟體」涵蓋商用 ETL、資料虛擬化與 BI 等各類產品（細部對標見第 5 章）。
      </p>
    </>
  );
}
