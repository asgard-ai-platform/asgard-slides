import { Kicker, Quote, SectionHeader } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "轉折：這些提升，都發生在「個人」身上",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>關鍵轉折</Kicker>
      <SectionHeader
        eyebrow="今天整場最重要的一頁"
        title="但這些提升，都發生在「個人」身上"
      />
      <p>
        上面每一個數字，量的都是<strong>單一工作者</strong>用 AI 之後的效率。
        一個工程師、一個客服、一個分析師——他自己那一段做快了。
      </p>
      <p>
        所以現在很多公司的「AI 導入」，其實只是「<strong>買了一批會用 AI 的個人</strong>」。
        每個人自己開 ChatGPT、自己貼資料、自己問答案。但企業不是個人的加總。
      </p>
      <p>
        你的營收掉了，不是某一個人的問題，是通路、商品、庫存、履約、客服
        <strong>「之間」</strong>出了問題。而個人版的 AI，看不到「之間」。
        它幫每個員工把自己那一段做快了，但部門跟部門之間的牆，一道都沒拆。
      </p>
      <Quote>
        <p>個人 AI 化 ≠ 企業 AI 化。這正是 95% 沒回報的真正原因。</p>
      </Quote>
    </>
  );
}
