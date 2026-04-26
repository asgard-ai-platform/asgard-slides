import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三個實際 skill 範例：它們不是知識百科，而是任務執行規格",
  section: "Asgard Skill Examples",
  theme: "light",
};

export const notes = `
### 34. 三個實際 skill 範例：它們不是知識百科，而是任務執行規格
- 區段：Asgard Skill Examples
- 表格重點：\`mkt-ab-testing\` / hypothesis、primary metric、guardrail metrics、sample size、duration、decision table、A/B test script。 / 讓 agent 不會只比較兩版文案，而是先設計實驗、定義勝負標準、提醒不要偷看結果提早停止。；\`algo-price-elasticity\` / point / arc elasticity、log-log regression、input validation、revenue impact JSON、sanity-check script。 / 讓 agent 把「漲價會不會傷銷量」轉成可計算的需求敏感度，並要求控制 seasonality、promotion、competitor price。；\`meta-structured-problem\` / MECE issue tree、hypothesis-driven analysis、Pyramid Principle、output format、常見結構錯誤。 / 讓 agent 面對模糊商業問題時先拆問題、定假設、找證據，再形成 answer-first 的建議。
- 補充講法：這也是 Asgard skills 的產品價值：不是替代 MCP，也不是替代模型，而是把「應該怎麼思考與交付」標準化，讓不同 agent 在不同任務中保持一致的工作方法。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Asgard Skill Examples</Kicker>
      <h2>三個實際 skill 範例：它們不是知識百科，而是任務執行規格</h2>
      <Matrix
        headers={["Skill", "包進去的能力", "對 agent 的實際幫助"]}
        rows={[
          [
            <code>mkt-ab-testing</code>,
            "hypothesis、primary metric、guardrail metrics、sample size、duration、decision table、A/B test script。",
            "讓 agent 不會只比較兩版文案，而是先設計實驗、定義勝負標準、提醒不要偷看結果提早停止。",
          ],
          [
            <code>algo-price-elasticity</code>,
            "point / arc elasticity、log-log regression、input validation、revenue impact JSON、sanity-check script。",
            "讓 agent 把「漲價會不會傷銷量」轉成可計算的需求敏感度，並要求控制 seasonality、promotion、competitor price。",
          ],
          [
            <code>meta-structured-problem</code>,
            "MECE issue tree、hypothesis-driven analysis、Pyramid Principle、output format、常見結構錯誤。",
            "讓 agent 面對模糊商業問題時先拆問題、定假設、找證據，再形成 answer-first 的建議。",
          ],
        ]}
      />
      <Talkbox compact>
        <p>這也是 Asgard skills 的產品價值：不是替代 MCP，也不是替代模型，而是把「應該怎麼思考與交付」標準化，讓不同 agent 在不同任務中保持一致的工作方法。</p>
      </Talkbox>
    </>
  );
}
