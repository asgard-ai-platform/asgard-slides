import { Kicker, Table, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三種「導入 AI」，只有一種有用",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>導入層次比較</Kicker>
      <h2>三種「導入 AI」，只有一種有用</h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>個人用 AI</th>
            <th>工具型導入</th>
            <th>組織型導入（目標）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>範圍</strong></td>
            <td>單一員工</td>
            <td>單一流程 / 部門</td>
            <td>跨部門生產週期</td>
          </tr>
          <tr>
            <td><strong>資料</strong></td>
            <td>各自貼上去</td>
            <td>局部串接</td>
            <td>全企業語意層共用</td>
          </tr>
          <tr>
            <td><strong>結果</strong></td>
            <td>個人變快</td>
            <td>局部變快</td>
            <td>整體成本結構改變</td>
          </tr>
          <tr data-highlight="">
            <td><strong>風險</strong></td>
            <td>知識留不住、不可控</td>
            <td>形成新孤島</td>
            <td>—</td>
          </tr>
        </tbody>
      </Table>
      <Talkbox compact>
        <p>
          率先完成「組織型」AI 整合的企業，會在人力效率、服務品質、決策速度上，
          建立<strong>難以逾越的競爭優勢</strong>。今天剩下的時間，就是在講第三層怎麼做到。
        </p>
      </Talkbox>
    </>
  );
}
