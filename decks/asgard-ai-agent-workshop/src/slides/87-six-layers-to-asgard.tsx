import { Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./87-six-layers-to-asgard.module.css";

export const meta: SlideMeta = {
  title: "六層架構如何對應到 Asgard / Yggdrasil",
  section: "Six Layers To Asgard",
  theme: "paper",
};

export const notes = `
### 72. 六層架構如何對應到 Asgard / Yggdrasil
- 區段：Six Layers To Asgard
- 補充講法：這頁把前面的抽象架構接回產品。Yggdrasil 偏工具與知識資產；Odin / Sindri 偏 harness 與執行；Forseti 對應企業治理；Midgard 對應地端 / 私有雲部署。Sandbox 是 Odin 內部的執行底層，不另外作為產品線。Tools 層除了 Yggdrasil 自家 MCP servers，也兼容市面上各種 MCP / A2A / CLI 工具。
`;

const left = [
  { label: "Governance", small: "身份、權限、稽核" },
  { label: "Session / Memory", small: "工作日誌、交接、恢復" },
  { label: "Sandbox / Hands", small: "安全執行環境" },
  { label: "Harness", small: "規劃、調度、錯誤恢復" },
  { label: "Tools / MCP / A2A / CLI", small: "連接真實世界工具與其他 agent" },
  { label: "Model / Brain", small: "理解與推理" },
];

const right = [
  { label: "Forseti / Enterprise Controls", small: "IAM、SSO、RBAC、管理" },
  { label: "Sindri", small: "Channels、collections、memory" },
  { label: "Odin（底層執行環境）", small: "workflow runtime 內建的 sandbox / isolation" },
  { label: "Odin + Sindri", small: "Workflow orchestration + Agent Hub" },
  { label: "Yggdrasil + 第三方", small: "Asgard 自家 MCP / skills + 市面上的 MCP / A2A / CLI" },
  { label: "Multi-model support", small: "OpenAI / Claude / Gemini 等" },
];

export default function Slide() {
  return (
    <>
      <Kicker>Six Layers To Asgard</Kicker>
      <h2>六層架構如何對應到 Asgard / Yggdrasil</h2>
      <div className={styles.map}>
        <div className={styles.stack}>
          {left.map((row) => (
            <div key={row.label} className={styles.maprow}>{row.label}<small>{row.small}</small></div>
          ))}
        </div>
        <div className={styles.bridge}>→</div>
        <div className={styles.stack}>
          {right.map((row) => (
            <div key={row.label} className={styles.maprow}>{row.label}<small>{row.small}</small></div>
          ))}
        </div>
      </div>
      <Quote compact>Model 是大腦；Harness 是神經系統；Governance 是稽核長終於睡得著的原因。</Quote>
      <Talkbox compact>
        <p>Yggdrasil 偏工具與知識資產；Odin / Sindri 偏 harness 與執行；Forseti 對應企業治理；Midgard 對應地端 / 私有雲部署。Sandbox 是 Odin 內建的執行底層，不另外作為產品線。Tools 層除了 Yggdrasil，也兼容市面上各種 MCP / A2A / CLI 工具。</p>
      </Talkbox>
    </>
  );
}
