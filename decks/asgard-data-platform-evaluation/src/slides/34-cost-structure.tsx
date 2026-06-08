import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "五年期成本結構量級比較",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>成本結構（非報價）</Kicker>
      <h2>五年期成本結構量級比較</h2>
      <Table large>
        <thead>
          <tr>
            <th>成本項</th>
            <th>商用套裝</th>
            <th>Denodo</th>
            <th>開源自建</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>軟體授權／訂閱</td>
            <td>報價制、逐模組加購</td>
            <td>NT$600 萬+/年，五年累計數千萬</td>
            <td>0</td>
          </tr>
          <tr>
            <td>導入／顧問</td>
            <td>原廠導入（另計）</td>
            <td>原廠/代理（另計）</td>
            <td>一次性導入（依範圍議價）</td>
          </tr>
          <tr>
            <td>硬體</td>
            <td>自備</td>
            <td>自備</td>
            <td>自備（Phase 1 一台 VM 起）</td>
          </tr>
          <tr>
            <td>團隊人力</td>
            <td>操作為主</td>
            <td>仰賴外部專家</td>
            <td>1–3 名種子工程師（訓練後自主）</td>
          </tr>
          <tr data-highlight="">
            <td>五年後的處境</td>
            <td>持續付授權、能力在廠商</td>
            <td>持續付訂閱、能力在廠商</td>
            <td>不再付授權、能力在自己團隊</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
