import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "為什麼 Handover 是選型的一部分",
  section: "Handover 與收尾",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Handover</Kicker>
      <h2>為什麼 Handover 是選型的一部分</h2>
      <Table large>
        <thead>
          <tr>
            <th></th>
            <th>商用套裝</th>
            <th>Denodo</th>
            <th>開源自建</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>日常維運靠誰</td>
            <td>自己（產品操作）</td>
            <td>原廠/代理為主</td>
            <td>自己（訓練後）</td>
          </tr>
          <tr>
            <td>新需求擴充靠誰</td>
            <td>原廠模組 + 加購</td>
            <td>原廠/代理</td>
            <td>自己（顧問備援）</td>
          </tr>
          <tr>
            <td>能力沉澱在哪</td>
            <td>廠商生態</td>
            <td>廠商生態</td>
            <td>企業自己的團隊</td>
          </tr>
          <tr data-highlight="">
            <td>人員流動風險</td>
            <td>重招重訓（技能不流通）</td>
            <td>人才池小</td>
            <td>技能業界通用，市場可補人</td>
          </tr>
        </tbody>
      </Table>
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        開源路線把「培養團隊」當成交付物的一部分——不是附贈的教育訓練，而是有驗收標準的工程交付。
      </p>
    </>
  );
}
