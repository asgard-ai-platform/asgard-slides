import { Kicker, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./12-harness-diagram.module.css";

export const meta: SlideMeta = {
  title: "Harness 是 agent runtime 與 orchestration layer",
  section: "Harness Diagram",
  theme: "dark",
};

export const notes = `
### 10. Harness 是 agent runtime 與 orchestration layer
- 區段：Harness Diagram
- 補充講法：Harness 管理 agent loop：將模型輸出轉成 tool call，執行後把結果回填給模型，並處理 routing、approval、retry、checkpoint、trace 與 stop condition。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Harness Diagram</Kicker>
      <h2>Harness 是 agent runtime 與 orchestration layer</h2>
      <div className={styles.loop}>
        <div className={styles.center}>
          Harness<br />
          <span className={styles.centerSub}>管理整個工作循環</span>
        </div>
        <div className={`${styles.loopstep} ${styles.s1}`}><b>1. Plan</b><span>先拆任務，不急著回答</span></div>
        <div className={`${styles.loopstep} ${styles.s2}`}><b>2. Route</b><span>決定要用哪個工具或知識</span></div>
        <div className={`${styles.loopstep} ${styles.s3}`}><b>3. Execute</b><span>執行、讀寫、呼叫外部系統</span></div>
        <div className={`${styles.loopstep} ${styles.s4}`}><b>4. Recover</b><span>錯了就重試、改路線或停下來</span></div>
        <div className={`${styles.loopstep} ${styles.s5}`}><b>5. Record</b><span>保存進度、結果與決策線索</span></div>
      </div>
      <Talkbox compact>
        <p>Harness 管理 agent loop：將模型輸出轉成 tool call，執行後把結果回填給模型，並處理 routing、approval、retry、checkpoint、trace 與 stop condition。</p>
      </Talkbox>
    </>
  );
}
