import { Kicker, Table, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "同一套架構，套進不同產業",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>跨產業應用</Kicker>
      <h2>同一套架構，套進不同產業</h2>
      <Table striped compact>
        <thead>
          <tr>
            <th>產業</th>
            <th>問句（使用者說）</th>
            <th>動作（Agent 做）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>製造業</strong></td>
            <td>「近期訂單增加，原料 AI 還夠嗎？要補多少？」</td>
            <td>查 ERP / WMS / SRM → 需求預測 → 自動建立採購單</td>
          </tr>
          <tr>
            <td><strong>零售業</strong></td>
            <td>「A 店商品 X 庫存剩多少？北區促銷活動成效如何？」</td>
            <td>查 POS / ERP → 需求預測 → 自動觸發調貨 / 補貨 → 生成報表</td>
          </tr>
          <tr data-highlight>
            <td><strong>金融業</strong></td>
            <td>「生成 Q3 財務報告」</td>
            <td>查財務系統 → 算財務比率 → 自動產出 PDF 並寄送</td>
          </tr>
        </tbody>
      </Table>
      <Quote compact>
        <p>
          架構不變，變的只是<strong>語意層的字典</strong>和<strong>接的系統</strong>。
          這就是為什麼我們敢說它是「總體解決方案」，而不是每個客戶都重做一套。
        </p>
      </Quote>
    </>
  );
}
