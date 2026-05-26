import { Kicker, GlanceGrid, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "主案例登場：台新餐飲設備 Unitech",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · 主案例</Kicker>
      <h2>台新餐飲設備 Unitech</h2>
      <p>全台最大餐飲設備代理與維修服務商——售後維修型服務，最難 AI 化的那種。</p>
      <GlanceGrid
        items={[
          { label: "成立年份", value: "1995", note: "迄今 30 年" },
          { label: "員工人數", value: "180+", note: "全台專業技術人員" },
          { label: "服務據點", value: "7 處", note: "台北總公司 ＋ 六個分公司/辦事處" },
          { label: "服務品牌", value: "100+", note: "連鎖餐飲品牌" },
          { label: "服務門市", value: "近 10,000", note: "餐飲場域與門市" },
        ]}
      />
      <Talkbox compact>
        <p>
          挑這個案例，因為它是<strong>最難 AI 化的那種公司</strong>——
          靠老師傅的經驗、靠人去現場、靠人填單。如果這種公司都能落地，
          它就不是「科技業專屬」的故事。
        </p>
      </Talkbox>
    </>
  );
}
