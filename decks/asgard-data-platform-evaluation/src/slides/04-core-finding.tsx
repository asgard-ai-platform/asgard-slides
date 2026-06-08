import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三個方案是三種不同類型",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>核心發現</Kicker>
      <h2>三個方案是三種不同類型</h2>
      <Table large>
        <thead>
          <tr>
            <th>方案</th>
            <th>它其實是什麼</th>
            <th>覆蓋的角色</th>
            <th>沒覆蓋的角色</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FineDataLink</td>
            <td>低代碼資料整合（ETL）工具</td>
            <td>擷取、部分轉換、Data API</td>
            <td>儲存要自備；查詢／BI 需另購</td>
          </tr>
          <tr>
            <td>Denodo</td>
            <td>資料虛擬化平台（資料不落地）</td>
            <td>查詢（聯邦查詢）、語意層</td>
            <td>不持久化、不做排程 ETL、不解決歷史累積</td>
          </tr>
          <tr data-highlight="">
            <td>開源自建</td>
            <td>多元件組成的完整平台</td>
            <td>六階段全覆蓋</td>
            <td>—（代價是學習曲線）</td>
          </tr>
        </tbody>
      </Table>
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        三者解決的問題不同——先放回同一張框架，比較才有意義。
      </p>
    </>
  );
}
