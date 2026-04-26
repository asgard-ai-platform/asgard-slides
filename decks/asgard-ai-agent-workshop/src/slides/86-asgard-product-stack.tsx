import { CardGrid, Kicker, ProductCard, Tag, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./86-asgard-product-stack.module.css";

export const meta: SlideMeta = {
  title: "Asgard 三大核心模組：Workflow、Insight、Execution",
  section: "Asgard Product Stack",
  theme: "light",
};

export const notes = `
### 71. Asgard 三大核心模組：Workflow、Insight、Execution
- 區段：Asgard Product Stack
- 卡片重點：Asgard Studio；Data Insight；Agent Hub
- 補充講法：Odin 負責把流程做出來，Mimir 負責讓管理者問數據與看洞察，Sindri 負責讓 agent 在業務與營運場景中執行。三者加起來，才是企業 AI 閉環。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Asgard Product Stack</Kicker>
      <h2>Asgard 三大核心模組：Workflow、Insight、Execution</h2>
      <CardGrid columns={3}>
        <ProductCard
          product="odin"
          iconSrc="assets/asgard/odin-logo-color.svg"
          iconAlt="Odin logo"
          title={<><Tag>Odin</Tag><h3 style={{ marginTop: 10 }}>Asgard Studio</h3></>}
        >
          <p>IT / MIS 導向的 no-code AI 工作流編排。支援多種處理節點、multi-agent、一鍵發布。</p>
        </ProductCard>
        <ProductCard
          product="mimir"
          iconSrc="assets/asgard/mimir-logo-color.svg"
          iconAlt="Mimir logo"
          title={<><Tag>Mimir</Tag><h3 style={{ marginTop: 10 }}>Data Insight</h3></>}
        >
          <p>管理層 / 策略單位導向的 AI 決策核心。自然語言問數據、自動 SQL、Dashboard 與 Semantic Layer。</p>
        </ProductCard>
        <ProductCard
          product="sindri"
          iconSrc="assets/asgard/sindri-logo-color.svg"
          iconAlt="Sindri logo"
          title={<><Tag>Sindri</Tag><h3 style={{ marginTop: 10 }}>Agent Hub</h3></>}
        >
          <p>營運 / 業務單位導向的 AI 執行引擎。支援 channels、collections、memory 與企業系統串接。</p>
        </ProductCard>
      </CardGrid>
      <div className={styles.logoStrip}>
        <span className={styles.miniLogo}>
          <img src="assets/asgard/heimdall-logo-color.svg" alt="Heimdall logo" />Domain AI：Heimdall Media & PR AI
        </span>
        <span className={styles.miniLogo}>
          <img src="assets/asgard/yggdrasil-logo-color.svg" alt="Yggdrasil logo" />Open Source：Yggdrasil
        </span>
      </div>
      <Talkbox compact>
        <p>Odin 負責把流程做出來，Mimir 負責讓管理者問數據與看洞察，Sindri 負責讓 agent 在業務與營運場景中執行。三者加起來，才是企業 AI 閉環。</p>
      </Talkbox>
    </>
  );
}
