import { Kicker, Table, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "資料虛擬化路線（以 Denodo 為例）",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線二評估</Kicker>
      <h2>資料虛擬化路線（以 Denodo 為例）</h2>
      <Table>
        <thead>
          <tr>
            <th>維度</th>
            <th>評估</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>功能覆蓋</td>
            <td>查詢層世界級，但不持久化、不累積歷史</td>
          </tr>
          <tr>
            <td>團隊自主維運</td>
            <td>需 VQL 專屬技能，台灣人才池小</td>
          </tr>
          <tr>
            <td>知識移轉</td>
            <td>技能綁 Denodo</td>
          </tr>
          <tr>
            <td>擴充性</td>
            <td>角色單一，資產累積仍需另建倉</td>
          </tr>
          <tr>
            <td>廠商鎖定</td>
            <td>高（VQL 私有）</td>
          </tr>
          <tr>
            <td>成本結構</td>
            <td>年訂閱 NT$600–750 萬/年（公開參考）</td>
          </tr>
        </tbody>
      </Table>
      <Callout variant="warn" title="適用情境判讀">
        Denodo 解決的是「倉庫太多」，而此情境的問題是「還沒有倉庫」。聯邦查詢把分析負載壓在生產系統上，對製造現場是營運風險。多年後資料域成熟時可再評估——屆時 Trino 也能承擔同角色（零授權費）。
      </Callout>
    </>
  );
}
