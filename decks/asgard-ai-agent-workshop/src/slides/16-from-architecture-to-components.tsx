import { Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./16-from-architecture-to-components.module.css";

export const meta: SlideMeta = {
  title: "六層架構是地圖；接下來拆實作時會看到四種常見元件",
  section: "From Architecture To Components",
  theme: "paper",
};

export const notes = `
### 14. 六層架構是地圖；接下來拆實作時會看到四種常見元件
- 區段：From Architecture To Components
- 主句：Skill 與 Plugin 不是新的架構層：它們是被 harness 載入與管理的可重用資產與分發格式。
- 圖意：把 Harness 畫在中間，四個元件（Tools/MCP、Skill、Sandbox、Plugin）從它分支出去。順序：MCP 對應 L2 外部工具；Skill 是方法與知識資產；Sandbox 對應 L4 執行隔離；Plugin 是把上述打包分發的格式。
- 補充講法：後半段的閱讀方式是：MCP 對應 L2 外部工具介面；Sandbox 對應 L4 執行隔離；Skill 是方法與知識資產；Plugin 是把 skills、commands、agents、hooks、MCP config 打包分發的格式。它們會被 L3 harness 接進同一個任務生命週期。
`;

const branches = [
  { tag: "L2", name: "Tools / MCP", desc: "外部能力如何被呼叫" },
  { tag: "Asset", name: "Skill", desc: "專業方法如何被載入" },
  { tag: "L4", name: "Sandbox", desc: "如何安全動手執行" },
  { tag: "Package", name: "Plugin", desc: "能力如何安裝與分享" },
];

export default function Slide() {
  return (
    <>
      <Kicker layer="Transition">From Architecture To Components</Kicker>
      <h2>六層架構是地圖；接下來拆實作時會看到四種常見元件</h2>
      <div className={styles.tree}>
        <div className={styles.center}>
          <div>
            <span className={styles.centerName}>Harness</span>
            <span className={styles.centerSub}>L3 · runtime / orchestration<br />載入、調度、權限、恢復</span>
          </div>
        </div>
        <div className={styles.connectors}>
          <div className={styles.spine} />
        </div>
        <div className={styles.branches}>
          {branches.map((b) => (
            <div key={b.name} className={styles.branch}>
              <span className={styles.branchTag}>{b.tag}</span>
              <span className={styles.branchName}>{b.name}</span>
              <span className={styles.branchDesc}>{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <Quote compact>Skill 與 Plugin 不是新的架構層：它們是被 harness 載入與管理的可重用資產與分發格式。</Quote>
      <Talkbox compact>
        <p>後半段的閱讀方式是：MCP 對應 L2 外部工具介面；Sandbox 對應 L4 執行隔離；Skill 是方法與知識資產；Plugin 是把 skills、commands、agents、hooks、MCP config 打包分發的格式。它們會被 L3 harness 接進同一個任務生命週期。</p>
      </Talkbox>
    </>
  );
}
