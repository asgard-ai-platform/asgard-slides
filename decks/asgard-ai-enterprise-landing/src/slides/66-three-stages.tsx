import { Kicker, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./66-three-stages.module.css";

export const meta: SlideMeta = {
  title: "落地的三個階段",
  section: "怎麼開始",
  theme: "dark",
};

const stages = [
  { icon: "🧭", en: "Pathfinder", label: "探路", desc: "找痛點、盤點機會，規劃通往智慧地基的路。先從最痛的切入點證明價值。" },
  { icon: "🏗️", en: "Foundry", label: "打地基", desc: "跨系統串接、清理企業資料，餵養 Data Insight 與知識庫——把散落各處的資料串起來、洗乾淨。" },
  { icon: "⚙️", en: "Operator", label: "執行", desc: "部署 Workflow 與 Multi-Agent，把 AI 嵌進日常營運、產出可衡量的成效。Wedge → Expand。" },
];

export default function Slide() {
  return (
    <>
      <Kicker>怎麼開始</Kicker>
      <h2>落地的三個階段：從現場洞察到 AI 執行</h2>
      <div className={styles.stages}>
        {stages.map((s, i) => (
          <div className={styles.row} key={s.en}>
            <div className={styles.stage}>
              <span className={styles.icon}>{s.icon}</span>
              <span className={styles.en}>{s.en}</span>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.desc}>{s.desc}</span>
            </div>
            {i < stages.length - 1 && <span className={styles.arrow}>→</span>}
          </div>
        ))}
      </div>
      <Talkbox compact>
        <p>
          這是以「<strong>週</strong>」為單位、分階段見效的事，不是以「年」為單位賭一把的大專案。能踏出第一步，比規劃完美重要太多。
        </p>
      </Talkbox>
    </>
  );
}
