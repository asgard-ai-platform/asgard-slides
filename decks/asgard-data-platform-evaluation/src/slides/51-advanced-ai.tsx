import { Kicker, Table, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "資料平台上的進階 AI 應用",
  section: "Consumption",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>再往後</Kicker>
      <h2>資料平台上的進階 AI 應用</h2>
      <Table large>
        <thead>
          <tr>
            <th>AI 應用</th>
            <th>回答的問題</th>
            <th>需要的資料基礎</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>品質追溯分析</td>
            <td>這批不良品與哪些機台/班別/物料批號相關？</td>
            <td>報工 + 品檢 + 批號關聯（1 年+）</td>
          </tr>
          <tr>
            <td>產能/交期預測</td>
            <td>這張工單實際會何時完成？</td>
            <td>工單 + 報工 + 換線歷史（1–2 年）</td>
          </tr>
          <tr>
            <td>設備預測維護</td>
            <td>哪台設備可能要出狀況？</td>
            <td>稼動 + 維修 + 感測器（Lakehouse 階段）</td>
          </tr>
          <tr>
            <td>排程最佳化</td>
            <td>怎麼排換線最少、交期最穩？</td>
            <td>以上全部 + 換線規則</td>
          </tr>
        </tbody>
      </Table>
      <Callout variant="good">
        「資料基礎」欄正是階段演進的隱性時間表——今天開始累積，一年後第一批 AI 應用原料就緒；晚一年建平台，所有 AI 應用整體延後一年。
      </Callout>
    </>
  );
}
