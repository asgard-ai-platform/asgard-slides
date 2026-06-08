import { Kicker, Table, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "商用套裝路線（以 FineDataLink 為例）",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線一評估</Kicker>
      <h2>商用套裝路線（以 FineDataLink 為例）</h2>
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
            <td>擷取轉換強，儲存自建、BI 另購</td>
          </tr>
          <tr>
            <td>團隊自主維運</td>
            <td>易上手，但架構問題仍需原廠</td>
          </tr>
          <tr>
            <td>知識移轉</td>
            <td>產品操作，人才不流通</td>
          </tr>
          <tr>
            <td>擴充性</td>
            <td>生態內順，跨出受限</td>
          </tr>
          <tr>
            <td>廠商鎖定</td>
            <td>中高（私有格式）</td>
          </tr>
          <tr>
            <td>成本結構</td>
            <td>授權費（報價制）+ 每模組計價</td>
          </tr>
        </tbody>
      </Table>
      <Callout variant="warn" title="適用情境判讀">
        可快速看到第一張報表，但資料的家、口徑治理、歷史累積沒被回答；若目標含 AI 與長期擴充，與「買斷當下需求」有結構性矛盾。
      </Callout>
    </>
  );
}
