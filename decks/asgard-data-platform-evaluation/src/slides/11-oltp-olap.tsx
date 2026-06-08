import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "OLTP vs OLAP：兩種設計目標",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>必備觀念</Kicker>
      <h2>OLTP vs OLAP：兩種設計目標</h2>
      <Table large>
        <thead>
          <tr>
            <th></th>
            <th>OLTP 交易處理</th>
            <th>OLAP 分析處理</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>誰在用</td>
            <td>ERP、生管、現場系統</td>
            <td>報表、看板、趨勢分析、AI</td>
          </tr>
          <tr>
            <td>典型操作</td>
            <td>大量小筆讀寫</td>
            <td>少量大範圍掃描彙總</td>
          </tr>
          <tr>
            <td>設計重點</td>
            <td>單筆即時、正確、不能停</td>
            <td>大量掃描快、彙總快</td>
          </tr>
          <tr>
            <td>資料保留</td>
            <td>通常只留近期</td>
            <td>長年累積，歷史就是價值</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
