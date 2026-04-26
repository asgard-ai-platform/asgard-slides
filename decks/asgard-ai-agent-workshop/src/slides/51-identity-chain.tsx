import { Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./51-identity-chain.module.css";

export const meta: SlideMeta = {
  title: "從「員工」到「他派的 agent」到「agent 用的工具」，權限要層層收斂",
  section: "Identity Chain",
  theme: "dark",
};

export const notes = `
### 51. 從「員工」到「他派的 agent」到「agent 用的工具」，權限要層層收斂
- 區段：Identity Chain
- 主句：Agent 不該繼承使用者的全部權限；它只能拿「執行該任務需要的最小集合」。
- 補充講法：這是企業 IAM 模型套到 agent 的核心設計。否則任何 prompt injection 都可能讓 agent 用使用者的全權做事——這是 production agent 最大的安全風險之一。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L6">Identity Chain</Kicker>
      <h2>從「員工」到「他派的 agent」到「agent 用的工具」，權限要層層收斂</h2>
      <div className={styles.chain}>
        <div className={styles.node}>
          <span className={styles.nodeLabel}>User</span>
          <span className={styles.nodeName}>某員工</span>
          <span className={styles.nodeScope}>他在公司的全部權限：信箱、CRM、文件、財務系統…</span>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={`${styles.node} ${styles.nodeStrong}`}>
          <span className={styles.nodeLabel}>Agent</span>
          <span className={styles.nodeName}>派出的 agent</span>
          <span className={styles.nodeScope}>只代表該任務需要的子集：「整理這個客戶 brief」≠ 全 CRM 寫入權。</span>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={styles.node}>
          <span className={styles.nodeLabel}>Tool</span>
          <span className={styles.nodeName}>agent 用的工具</span>
          <span className={styles.nodeScope}>每個 MCP / CLI / API 再被 scope 一次：能讀某 table、不能 drop。</span>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={styles.node}>
          <span className={styles.nodeLabel}>Action</span>
          <span className={styles.nodeName}>實際動作</span>
          <span className={styles.nodeScope}>每筆動作都帶著三層 identity context 寫進 audit log。</span>
        </div>
      </div>
      <Quote compact>Agent 不繼承全部權限，只繼承這次任務必要的最小集合。</Quote>
      <Talkbox compact>
        <p>這是企業 IAM 模型套到 agent 的核心設計。否則任何 prompt injection 都可能讓 agent 用使用者的全權做事——這是 production agent 最大的安全風險之一。</p>
      </Talkbox>
    </>
  );
}
