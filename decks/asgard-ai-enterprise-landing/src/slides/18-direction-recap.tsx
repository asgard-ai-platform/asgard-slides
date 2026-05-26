import { Kicker, DashList, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "階段小結：正確方向長這樣",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const pillars = [
  <>
    <strong>覆蓋整個生產週期（不是單點）</strong>——從研發、採購、生產、物流、銷售、客服、財務、人資，
    每個環節都有 AI 在跑，而不是只有一個聊天機器人。
  </>,
  <>
    <strong>左腦 ML/RPA ＋ 右腦 GenAI 串成閉環</strong>——分析算出洞察，自動接到執行；
    會算的 AI 和會說的 AI，串在一起才是完整的 AI 員工。
  </>,
  <>
    <strong>一層企業語意層，讓 AI 聽懂你的公司</strong>——建一次共同字典，全平台通用，
    消除各系統雞同鴨講的問題。
  </>,
  <>
    <strong>一個乾淨、可治理的資料地基</strong>——一份資料多種用途、可追溯、不被廠商綁死，
    地基不穩，上面蓋什麼都會垮。
  </>,
];

export default function Slide() {
  return (
    <>
      <Kicker>階段小結</Kicker>
      <h2>階段小結：正確方向長這樣</h2>
      <p>
        從「個人會用 AI」→「組織會用 AI」，需要四件事<strong>疊起來</strong>：
      </p>
      <DashList items={pillars} />
      <Talkbox compact>
        <p>
          接下來：<strong>Asgard 怎麼把這四件事變成產品</strong>——
          分階段、幾週就見效，不是三年的大專案。
        </p>
      </Talkbox>
    </>
  );
}
