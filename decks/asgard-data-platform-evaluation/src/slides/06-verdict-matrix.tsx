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
      <h2>六維度綜合評估</h2>
      <Table large striped>
        <thead>
          <tr>
            <th>維度</th>
            <th>商用套裝（FDL 系）</th>
            <th>資料虛擬化（Denodo）</th>
            <th>開源自建</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>六階段角色覆蓋</td>
            <td>部分（需自備儲存、另購 BI）</td>
            <td>單點（僅查詢層）</td>
            <td><strong>完整</strong></td>
          </tr>
          <tr>
            <td>地端部署</td>
            <td>可</td>
            <td>可</td>
            <td><strong>可（全開源）</strong></td>
          </tr>
          <tr>
            <td>授權成本結構</td>
            <td>授權費，不公開</td>
            <td>年訂閱，數百萬/年起</td>
            <td><strong>零授權費，投資在人與顧問</strong></td>
          </tr>
          <tr>
            <td>團隊能力累積</td>
            <td>操作技能（綁廠商）</td>
            <td>操作技能（綁廠商）</td>
            <td><strong>業界通用技能，留在團隊</strong></td>
          </tr>
          <tr>
            <td>擴充性／退場彈性</td>
            <td>中</td>
            <td>低</td>
            <td><strong>高（開放格式）</strong></td>
          </tr>
          <tr data-highlight="">
            <td>AI 整合自由度</td>
            <td>受產品藍圖限制</td>
            <td>受產品藍圖限制</td>
            <td><strong>完全開放</strong></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
