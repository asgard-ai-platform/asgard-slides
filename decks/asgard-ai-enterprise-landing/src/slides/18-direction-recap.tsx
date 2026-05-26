import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./18-direction-recap.module.css";

export const meta: SlideMeta = {
  title: "階段小結：正確方向長這樣",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const pillars = [
  { n: "1", t: "覆蓋整個生產週期", d: "從研發、採購、生產、物流、銷售、客服、財務到人資，每個環節都有 AI 在跑——不是只有一個聊天機器人。" },
  { n: "2", t: "左腦 ML/RPA ＋ 右腦 GenAI 串成閉環", d: "分析算出洞察、自動接到執行；會算的 AI 和會說的 AI 串在一起，才是完整的 AI 員工。" },
  { n: "3", t: "一層企業語意層", d: "建一次共同字典、全平台通用，讓 AI 真正聽懂你的公司，消除各系統雞同鴨講。" },
  { n: "4", t: "乾淨、可治理的資料地基", d: "一份資料多種用途、可追溯、不被廠商綁死——地基不穩，上面蓋什麼都會垮。" },
];

export default function Slide() {
  return (
    <>
      <Kicker>階段小結</Kicker>
      <h2>正確方向長這樣——四件事疊起來</h2>
      <div className={styles.grid}>
        {pillars.map((p) => (
          <div className={styles.card} key={p.n}>
            <span className={styles.num}>{p.n}</span>
            <div>
              <div className={styles.t}>{p.t}</div>
              <div className={styles.d}>{p.d}</div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.foot}>
        接下來：<strong>Asgard 怎麼把這四件事變成產品</strong>——分階段、幾週就見效，不是三年的大專案。
      </p>
    </>
  );
}
