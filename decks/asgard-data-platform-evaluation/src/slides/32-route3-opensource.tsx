import { Kicker, Table, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "開源自建 + 顧問陪跑",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線三評估</Kicker>
      <h2>開源自建 + 顧問陪跑</h2>
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
            <td>六階段完整，每格皆業界主流</td>
          </tr>
          <tr>
            <td>地端部署</td>
            <td>完全地端、全開源，資料不出廠</td>
          </tr>
          <tr>
            <td>團隊自主維運</td>
            <td>以「顧問退場、團隊接手」為驗收</td>
          </tr>
          <tr>
            <td>知識移轉</td>
            <td>業界通用技能，新人可補位</td>
          </tr>
          <tr>
            <td>廠商鎖定</td>
            <td>最低（開放格式 + git 內 SQL）</td>
          </tr>
          <tr>
            <td>成本結構</td>
            <td>零授權費 + 一次性導入 + 自有硬體</td>
          </tr>
        </tbody>
      </Table>
      <Callout variant="good" title="三個傳統顧慮，各有對策">
        「元件要自己組」→ 顧問提供經實證的架構藍圖（第 5 章）；「學習曲線」→ 階段演進控制坡度（第 6 章）；「沒有單一廠商究責」→ 導入合約含保固與訓練驗收（第 8 章）。
      </Callout>
    </>
  );
}
