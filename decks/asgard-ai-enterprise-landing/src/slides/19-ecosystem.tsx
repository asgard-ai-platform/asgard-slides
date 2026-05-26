import type { SlideMeta } from "deck-kit";
import styles from "./19-ecosystem.module.css";

export const meta: SlideMeta = {
  title: "Asgard AI Ecosystem",
  section: "Asgard 產品與架構",
  theme: "dark",
};

const solutions = [
  {
    logo: "odin",
    name: "Odin｜Studio",
    role: "給 IT / MIS",
    desc: "No-Code AI 工作流設計、Multi-Agent 編排、一鍵發布——解決可控性，補 IT 人手不足。",
  },
  {
    logo: "mimir",
    name: "Mimir｜Data Insight",
    role: "給管理決策層",
    desc: "自然語言問數據、Auto SQL ＋ 商業洞察報告——解決指揮鏈太長。",
  },
  {
    logo: "sindri",
    name: "Sindri｜Agent Hub",
    role: "給營運 / 業務",
    desc: "AI Agent 部署中心，串接企業既有系統、賦予 AI 真正的執行能力。",
  },
];

export default function Slide() {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.logo} src="assets/asgard/asgard-logo-color.svg" alt="Asgard AI" />
        <div className={styles.wordmark}>Asgard AI Ecosystem</div>
        <div className={styles.tagline}>
          An Enterprise AI Total Solution —— 不是一個聊天機器人，是一套讓 AI 深入企業日常運作的<strong>總體解決方案</strong>。
        </div>
      </div>

      <div className={styles.solutions}>
        {solutions.map((s) => (
          <div className={styles.card} key={s.logo}>
            <img className={styles.solLogo} src={`assets/asgard/${s.logo}-logo-color.svg`} alt={s.name} />
            <span className={styles.role}>{s.role}</span>
            <div className={styles.solName}>{s.name}</div>
            <div className={styles.solDesc}>{s.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}
