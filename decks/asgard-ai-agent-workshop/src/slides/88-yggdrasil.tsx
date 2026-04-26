import { CardGrid, Kicker, ProductCard, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Yggdrasil：把工具、知識、solution bundles 做成可攜資產",
  section: "Open Source Model",
  theme: "dark",
};

export const notes = `
### 73. Yggdrasil：把工具、知識、solution bundles 做成可攜資產
- 區段：Open Source Model
- 主句：把業務邏輯從 code 解放到 markdown，是 agent 應用開發的關鍵趨勢。
- 卡片重點：MCP Servers；Skills：封裝方法論、判斷準則、常見陷阱。；Solution Bundles：把特定任務的 MCP、skills、workflow 打包成可使用方案。；Workflows：用 markdown 描述任務類型的 pipeline。
- 補充講法：開源模式不是把產品免費送掉，而是把 adoption friction 拿掉。企業可以先從公開工具與方法開始試，再逐步放到自己的治理與部署環境。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Open Source Model</Kicker>
      <h2>Yggdrasil：把工具、知識、solution bundles 做成可攜資產</h2>
      <CardGrid columns={4}>
        <ProductCard
          product="yggdrasil"
          iconSrc="assets/asgard/yggdrasil-logo-color.svg"
          iconAlt="Yggdrasil logo"
          title={<h3>MCP Servers</h3>}
        >
          <p>連接資料源、API、內外部系統。</p>
        </ProductCard>
        <ProductCard
          product="yggdrasil"
          iconSrc="assets/asgard/yggdrasil-logo-color.svg"
          iconAlt="Yggdrasil logo"
          title={<h3>Skills</h3>}
        >
          <p>封裝方法論、判斷準則、常見陷阱。</p>
        </ProductCard>
        <ProductCard
          product="yggdrasil"
          iconSrc="assets/asgard/yggdrasil-logo-color.svg"
          iconAlt="Yggdrasil logo"
          title={<h3>Solution Bundles</h3>}
        >
          <p>把特定任務的 MCP、skills、workflow 打包成可使用方案。</p>
        </ProductCard>
        <ProductCard
          product="yggdrasil"
          iconSrc="assets/asgard/yggdrasil-logo-color.svg"
          iconAlt="Yggdrasil logo"
          title={<h3>Workflows</h3>}
        >
          <p>用 markdown 描述任務類型的 pipeline。</p>
        </ProductCard>
      </CardGrid>
      <Quote>把業務邏輯從 code 解放到 markdown，是 agent 應用開發的關鍵趨勢。</Quote>
      <Talkbox compact>
        <p>開源模式不是把產品免費送掉，而是把 adoption friction 拿掉。企業可以先從公開工具與方法開始試，再逐步放到自己的治理與部署環境。</p>
      </Talkbox>
    </>
  );
}
