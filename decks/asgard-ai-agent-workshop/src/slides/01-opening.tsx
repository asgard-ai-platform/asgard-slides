import type { SlideMeta } from "deck-kit";
import styles from "./01-opening.module.css";

export const meta: SlideMeta = {
  title: "從會聊天的 AI，到能交辦工作的 Agent",
  section: "AI Agent Work Method Workshop",
  theme: "dark",
};

export const notes = `
### 01. 從會聊天的 AI，到能交辦工作的 Agent
- 區段：AI Agent Work Method Workshop
- 開場說法：一小時 workshop：先建立 AI Chat / AI Agent / 六層架構的共同語言，再拆 MCP、Skill、Sandbox、Plugin，最後用 Codex / Claude Code 與 Asgard 看如何落地。
- 卡片重點：
  - 不是學一堆術語：而是知道怎麼把 AI 從聊天工具，變成可以被委派工作的夥伴。
  - 你會帶走一套路線圖：知道什麼時候用 chat、什麼時候需要 agent、工具如何接入、能力如何被包裝與治理。
`;

export default function Slide() {
  return (
    <>
      <div className={styles.brandLockup}>
        <span className={styles.logoOrb}>
          <img src="assets/asgard/asgard-logo-color.svg" alt="Asgard AI logo" />
        </span>
        <div>
          <div className={styles.brandName}>Asgard AI Workshop</div>
          <div className={styles.brandSub}>Enterprise AI Platform · Codex / Claude Code</div>
        </div>
      </div>

      <span className={styles.kicker}>AI Agent Work Method Workshop</span>
      <h1>從會聊天的 AI，到能交辦工作的 Agent</h1>
      <p className={styles.lead}>
        一小時 workshop：先建立 AI Chat / AI Agent / 六層架構的共同語言，再拆 MCP、Skill、Sandbox、Plugin，最後用 Codex / Claude Code 與 Asgard 看如何落地。
      </p>

      <div className={styles.two}>
        <div className={`${styles.card} ${styles.cardStrong}`}>
          <span className={styles.tag}>Today</span>
          <h3>不是學一堆術語</h3>
          <p>而是知道怎麼把 AI 從聊天工具，變成可以被委派工作的夥伴。</p>
        </div>
        <div className={`${styles.card} ${styles.cardStrong}`}>
          <span className={styles.tag}>Outcome</span>
          <h3>你會帶走一套路線圖</h3>
          <p>知道什麼時候用 chat、什麼時候需要 agent、工具如何接入、能力如何被包裝與治理。</p>
        </div>
      </div>
    </>
  );
}
