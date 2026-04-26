import { CardGrid, Kicker, ProductCard, Quote, Tag, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./85-asgard-ecosystem.module.css";

export const meta: SlideMeta = {
  title: "Asgard 的產品生態系：企業 AI 閉環平台加開源資產層",
  section: "Asgard Ecosystem",
  theme: "dark",
};

export const notes = `
### 70. Asgard 的產品生態系：企業 AI 閉環平台加開源資產層
- 區段：Asgard Ecosystem
- 主句：Asgard 解決企業 AI 落地；Yggdrasil 解決知識、工具與 solution bundle 的分發。
- 卡片重點：Asgard；Yggdrasil
- 補充講法：產品定位：Asgard 承接 enterprise deployment、workflow、insight、execution 與治理；Yggdrasil 承接開源 MCP、skills、solution bundles 的分發與驗證。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Asgard Ecosystem</Kicker>
      <h2>Asgard 的產品生態系：企業 AI 閉環平台加開源資產層</h2>
      <CardGrid columns={2}>
        <ProductCard
          product="asgard"
          iconSrc="/assets/asgard/asgard-logo-color.svg"
          iconAlt="Asgard logo"
          title={<><Tag>Enterprise Platform</Tag><h3 style={{ marginTop: 10 }}>Asgard</h3></>}
        >
          <p>Enterprise AI Enablement Platform。從資料洞察到自動化執行，協助企業把 AI 嵌入真實流程。</p>
        </ProductCard>
        <ProductCard
          product="yggdrasil"
          iconSrc="/assets/asgard/yggdrasil-logo-color.svg"
          iconAlt="Yggdrasil logo"
          title={<><Tag>Open Source Layer</Tag><h3 style={{ marginTop: 10 }}>Yggdrasil</h3></>}
        >
          <p>以 MIT open-source 模式，把 MCP Servers、Skills、Solution Bundles 做成可攜資產，降低 adoption friction。</p>
        </ProductCard>
      </CardGrid>
      <div className={styles.statRow}>
        <div className={styles.stat}><b>63+</b><span>MCP Servers</span></div>
        <div className={styles.stat}><b>277+</b><span>Skills</span></div>
        <div className={styles.stat}><b>10+</b><span>Solution Bundles</span></div>
      </div>
      <Quote compact>Asgard 解決企業 AI 落地；Yggdrasil 解決知識、工具與 solution bundle 的分發。</Quote>
      <Talkbox compact>
        <p>產品定位：Asgard 承接 enterprise deployment、workflow、insight、execution 與治理；Yggdrasil 承接開源 MCP、skills、solution bundles 的分發與驗證。</p>
      </Talkbox>
    </>
  );
}
