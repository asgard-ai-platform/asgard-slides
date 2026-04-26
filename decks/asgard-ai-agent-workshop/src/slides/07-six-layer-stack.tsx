import { Kicker, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./07-six-layer-stack.module.css";

export const meta: SlideMeta = {
  title: "Agent 系統的六層技術架構",
  section: "Six-Layer Stack",
  theme: "dark",
};

export const notes = `
### 07. Agent 系統的六層技術架構
- 區段：Six-Layer Stack
- 補充講法：六層分離讓模型、工具、runtime、執行環境、狀態儲存與治理政策可以各自演進；這也是 agent 從 demo 走向 production 的基本拆分。
`;

const layers: { label: React.ReactNode; pills: string[] }[] = [
  { label: <>Governance<br />Policy / Audit</>, pills: ["Identity", "Approval", "Trace"] },
  { label: <>Session / Memory<br />State</>, pills: ["Events", "Checkpoint", "Recovery"] },
  { label: <>Sandbox<br />Execution</>, pills: ["Filesystem", "Commands", "Isolation"] },
  { label: <>Harness<br />Runtime</>, pills: ["Plan", "Route", "Retry"] },
  { label: <>Tools / MCP<br />Interfaces</>, pills: ["CRM", "ERP", "DB / API"] },
  { label: <>Model<br />Reasoning</>, pills: ["Understand", "Infer", "Generate"] },
];

export default function Slide() {
  return (
    <>
      <Kicker>Six-Layer Stack</Kicker>
      <h2>Agent 系統的六層技術架構</h2>
      <div className={styles.swim}>
        {layers.flatMap((row, i) => [
          <div key={`label-${i}`} className={styles.label}>{row.label}</div>,
          <div key={`lane-${i}`} className={styles.lane}>
            {row.pills.map((p) => <div key={p} className={styles.pill}>{p}</div>)}
          </div>,
        ])}
      </div>
      <Talkbox compact>
        <p>六層分離讓模型、工具、runtime、執行環境、狀態儲存與治理政策可以各自演進；這也是 agent 從 demo 走向 production 的基本拆分。</p>
      </Talkbox>
    </>
  );
}
