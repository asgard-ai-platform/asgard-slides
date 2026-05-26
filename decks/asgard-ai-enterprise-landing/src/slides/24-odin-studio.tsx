import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./24-odin-studio.module.css";

export const meta: SlideMeta = {
  title: "產品實際畫面（一）：Odin Studio",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>產品實際畫面（一）</Kicker>
      <h2>Odin Studio</h2>
      <div className={styles.grid}>
        <div className={styles.cell}>
          <DemoShot
            src="assets/product/p-18.png"
            alt="Odin Knowledge Base RAG"
            size="compact"
            caption="Knowledge Base RAG — 把 PDF/Excel/CSV 餵進去，變成 AI 可查的知識庫"
          />
        </div>
        <div className={styles.cell}>
          <DemoShot
            src="assets/product/p-19.png"
            alt="Odin Semantic Modeling"
            size="compact"
            caption="Semantic Modeling — 語意層編輯介面，定義資料表與商業概念的對應"
          />
        </div>
        <div className={styles.cell}>
          <DemoShot
            src="assets/product/p-20.png"
            alt="Odin Agent Skills / Tool Setting"
            size="compact"
            caption="Agent Skills / Tool Setting — 設定每個 Agent 能用哪些工具"
          />
        </div>
        <div className={styles.cell}>
          <DemoShot
            src="assets/product/p-21.png"
            alt="Odin Agentic Workflow"
            size="compact"
            caption="Agentic Workflow — 拖拉式多 Agent 工作流編排，可即時 Tracing"
          />
        </div>
      </div>
    </>
  );
}
