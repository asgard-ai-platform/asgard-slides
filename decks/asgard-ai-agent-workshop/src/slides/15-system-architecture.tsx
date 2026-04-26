import { Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./15-system-architecture.module.css";

export const meta: SlideMeta = {
  title: "一張圖看完整 agent 系統：不是一個模型，而是一組可控資產",
  section: "System Architecture",
  theme: "paper",
};

export const notes = `
### 13. 一張圖看完整 agent 系統：不是一個模型，而是一組可控資產
- 區段：System Architecture
- 主句：Harness 是中控層：它不取代工具，而是決定何時、如何、在什麼權限下使用工具。
- 補充講法：Plugin、skill、workflow、MCP、CLI 都應被視為可治理的 agent assets。Harness 將這些資產接入同一個 run lifecycle，提供 planning、execution、logging 與 review surface。
`;

export default function Slide() {
  return (
    <>
      <Kicker>System Architecture</Kicker>
      <h2>一張圖看完整 agent 系統：不是一個模型，而是一組可控資產</h2>
      <div className={styles.assetGrid}>
        <div className={styles.assetCol}>
          <div className={styles.asset}>User / Team<small>提出任務、審核結果、批准高風險動作</small></div>
          <div className={styles.asset}>Governance<small>身份、權限、稽核、版本與政策</small></div>
          <div className={styles.asset}>Session / Memory<small>進度、上下文、交接與 checkpoint</small></div>
        </div>
        <div className={styles.hub}>
          <div>
            <b>Harness</b>
            <span>讀任務、選 workflow、載入 skills、呼叫 tools、控制 sandbox、保存結果</span>
          </div>
        </div>
        <div className={styles.assetCol}>
          <div className={styles.asset}>Plugin<small>把能力打包與分發</small></div>
          <div className={styles.asset}>Skills / Workflows<small>把方法論與任務管線裝起來</small></div>
          <div className={styles.asset}>MCP / CLI / APIs<small>連接資料、系統與可執行工具</small></div>
        </div>
      </div>
      <Quote compact>Harness 是中控層：它不取代工具，而是決定何時、如何、在什麼權限下使用工具。</Quote>
      <Talkbox compact>
        <p>Plugin、skill、workflow、MCP、CLI 都應被視為可治理的 agent assets。Harness 將這些資產接入同一個 run lifecycle，提供 planning、execution、logging 與 review surface。</p>
      </Talkbox>
    </>
  );
}
