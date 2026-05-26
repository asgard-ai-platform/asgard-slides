import { Kicker, Table, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "每個領域，AI 都有兩種武器：ML 與 GenAI",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>兩種武器</Kicker>
      <h2>每個領域，AI 都有兩種武器：ML 與 GenAI</h2>
      <Table>
        <thead>
          <tr>
            <th>領域</th>
            <th>ML 技術（預測 / 最佳化）</th>
            <th>GenAI 技術（生成 / 對話）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>研發</strong></td>
            <td>需求預測、數值模擬、參數最佳化</td>
            <td>設計草圖、技術文件、研發報告生成</td>
          </tr>
          <tr>
            <td><strong>採購</strong></td>
            <td>價格預測、供應風險、供應商信用評分</td>
            <td>合約草稿、談判提案、供應商溝通模板</td>
          </tr>
          <tr>
            <td><strong>生產</strong></td>
            <td>排程最佳化、設備異常偵測、品質檢測</td>
            <td>SOP / 維修手冊生成、產線異常報告</td>
          </tr>
          <tr>
            <td><strong>倉儲物流</strong></td>
            <td>路線最佳化、庫存預測、需求補貨</td>
            <td>運輸報表、客服對話、文件自動化</td>
          </tr>
          <tr>
            <td><strong>行銷銷售</strong></td>
            <td>受眾建模、流失預測、即時推薦</td>
            <td>廣告素材、社群貼文 / EDM、客製銷售提案</td>
          </tr>
          <tr>
            <td><strong>客服售後</strong></td>
            <td>工單自動分派、情緒分析、需求分類</td>
            <td>Chatbot、知識庫 QA、維修方案生成</td>
          </tr>
          <tr>
            <td><strong>財務會計</strong></td>
            <td>異常偵測、現金流預測、信用風險模型</td>
            <td>財報摘要、合約條款生成、稅務報告</td>
          </tr>
          <tr>
            <td><strong>人資招募</strong></td>
            <td>人才匹配、離職率預測、薪資模型</td>
            <td>JD / 面試題生成、培訓教材生成</td>
          </tr>
        </tbody>
      </Table>
      <Talkbox compact>
        <p>
          每個部門都同時需要<strong>「會算的 AI」</strong>和<strong>「會說的 AI」</strong>——
          這兩種武器缺一不可。
        </p>
      </Talkbox>
    </>
  );
}
