import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "description 是 skill 的 routing surface：寫得模糊，agent 就會選錯工具",
  section: "Skill Routing",
  theme: "light",
};

export const notes = `
### 31. description 是 skill 的 routing surface：寫得模糊，agent 就會選錯工具
- 區段：Skill Routing
- 表格重點：只寫「A/B testing skill」 / 模型知道主題，但不知道何時觸發、是否適用 landing page、email、pricing 或 campaign。 / 寫明「設計與分析 landing page、email、ad creative、pricing 的 A/B test」，並列出使用者可能說的自然語句。；只寫「price elasticity」 / 可能和 pricing strategy、conjoint、Van Westendorp 混在一起。 / 寫明「用價格與銷量資料估需求敏感度、價格變動對 revenue 的影響」，並說明不適合 willingness-to-pay 分布時使用。；只寫「structured thinking」 / 太泛，容易被所有商業分析任務誤觸。 / 寫明「複雜、模糊問題需要 MECE issue tree、hypothesis-driven analysis、Pyramid Principle 時使用」。
- 補充講法：Skill routing 的目標不是「讓技能看起來完整」，而是讓 agent 在任務進來時能判斷：這個 skill 是否應該進 context、是否要搭配其他 skill、是否需要讀 references 或跑 scripts。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Skill Routing</Kicker>
      <h2>description 是 skill 的 routing surface：寫得模糊，agent 就會選錯工具</h2>
      <Matrix
        compact
        headers={["寫法", "會發生什麼", "比較穩的寫法"]}
        rows={[
          [
            "只寫「A/B testing skill」",
            "模型知道主題，但不知道何時觸發、是否適用 landing page、email、pricing 或 campaign。",
            "寫明「設計與分析 landing page、email、ad creative、pricing 的 A/B test」，並列出使用者可能說的自然語句。",
          ],
          [
            "只寫「price elasticity」",
            "可能和 pricing strategy、conjoint、Van Westendorp 混在一起。",
            "寫明「用價格與銷量資料估需求敏感度、價格變動對 revenue 的影響」，並說明不適合 willingness-to-pay 分布時使用。",
          ],
          [
            "只寫「structured thinking」",
            "太泛，容易被所有商業分析任務誤觸。",
            "寫明「複雜、模糊問題需要 MECE issue tree、hypothesis-driven analysis、Pyramid Principle 時使用」。",
          ],
        ]}
      />
      <Talkbox compact>
        <p>Skill routing 的目標不是「讓技能看起來完整」，而是讓 agent 在任務進來時能判斷：這個 skill 是否應該進 context、是否要搭配其他 skill、是否需要讀 references 或跑 scripts。</p>
      </Talkbox>
    </>
  );
}
