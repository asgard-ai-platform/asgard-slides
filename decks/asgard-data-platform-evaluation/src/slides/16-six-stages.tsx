import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "六階段角色（用工廠比喻）",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>框架</Kicker>
      <h2>六階段角色（用工廠比喻）</h2>
      <Table large>
        <thead>
          <tr>
            <th>階段</th>
            <th>工廠比喻</th>
            <th>白話</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 Sources 來源</td>
            <td>上游供應商</td>
            <td>資料的產地：ERP、生管、現場、檔案、感測器（只盤點不選型）</td>
          </tr>
          <tr>
            <td>2 Ingestion 擷取</td>
            <td>進貨物流</td>
            <td>定時/即時把資料搬進平台，重點是穩定、自動、不漏</td>
          </tr>
          <tr>
            <td>3 Storage 儲存</td>
            <td>中央倉庫</td>
            <td>資料集中的家，決定容量、成本、格式是否開放</td>
          </tr>
          <tr>
            <td>4 Transform 轉換</td>
            <td>加工產線</td>
            <td>清洗、對齊口徑、彙總成可用的成品表</td>
          </tr>
          <tr>
            <td>5 Query 查詢</td>
            <td>出貨窗口</td>
            <td>讓人與系統用 SQL 取數的引擎</td>
          </tr>
          <tr>
            <td>6 Consumption 應用</td>
            <td>客戶端</td>
            <td>BI 看板、報表、自然語言問答、AI 模型</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
