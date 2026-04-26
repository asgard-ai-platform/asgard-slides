import { FlowDiagram, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Skill 用三層載入降低 context cost，也降低錯誤機率",
  section: "Progressive Disclosure",
  theme: "paper",
};

export const notes = `
### 32. Skill 用三層載入降低 context cost，也降低錯誤機率
- 區段：Progressive Disclosure
- 主句：好的 skill 不是把知識寫滿，而是把「何時讀什麼」設計清楚。
- 補充講法：這就是 skills 和一般長 prompt 的差別：prompt 通常一次塞入；skill 則把知識拆成可發現、可觸發、可按需展開的資產。這對長任務、多人共用、版本治理尤其重要。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Progressive Disclosure</Kicker>
      <h2>Skill 用三層載入降低 context cost，也降低錯誤機率</h2>
      <FlowDiagram nodes={[
        { title: <>Level 0<br />Metadata</>, body: "name、description 常駐在可發現清單,用於 routing 與觸發判斷。" },
        { title: <>Level 1<br />SKILL.md body</>, body: "任務流程、檢查點、輸出格式與 gotchas；觸發後才進 context。" },
        { title: <>Level 2<br />References</>, body: "理論、模板、案例、schema、長文件；任務需要時才讀。" },
        { title: <>Level 3<br />Scripts / Assets</>, body: "計算器、轉檔器、模板、素材；能執行或套用,不一定要全部讀入模型。" },
      ]} />
      <Quote compact>好的 skill 不是把知識寫滿，而是把「何時讀什麼」設計清楚。</Quote>
      <Talkbox compact>
        <p>這就是 skills 和一般長 prompt 的差別：prompt 通常一次塞入；skill 則把知識拆成可發現、可觸發、可按需展開的資產。這對長任務、多人共用、版本治理尤其重要。</p>
      </Talkbox>
    </>
  );
}
