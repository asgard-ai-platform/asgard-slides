import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "導入結束時全數移交（存於客戶自己的 git）",
  section: "Handover 與收尾",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>知識移轉產出物</Kicker>
      <h2>導入結束時全數移交（存於客戶自己的 git）</h2>
      <Table>
        <thead>
          <tr>
            <th>產出物</th>
            <th>內容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>架構文件</td>
            <td>整體架構圖、各元件配置、連線與權限清單</td>
          </tr>
          <tr>
            <td>維運手冊 Runbook</td>
            <td>排程失敗、資料延遲、磁碟告警、備份還原 SOP</td>
          </tr>
          <tr>
            <td>資料血緣文件</td>
            <td>每張表的來源、欄位、口徑、更新頻率</td>
          </tr>
          <tr>
            <td>排程模板</td>
            <td>三種可重用模式範本</td>
          </tr>
          <tr>
            <td>訓練教材</td>
            <td>六週課綱講義 + 實作演練</td>
          </tr>
          <tr>
            <td>變更管理流程</td>
            <td>git 審核流程與慣例</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
