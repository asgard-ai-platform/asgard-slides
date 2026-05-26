import { ProductCard, ModuleNote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三大核心模組",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <h2>三大核心模組</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginTop: "16px" }}>
        <ProductCard
          product="odin"
          iconSrc="assets/asgard/odin-logo-color.svg"
          iconAlt="Odin logo"
          title={<><strong>Odin</strong> ｜ Studio</>}
        >
          <p style={{ fontSize: "13px", marginTop: "8px", color: "var(--muted)" }}>給 IT / MIS</p>
          <ul style={{ fontSize: "14px", paddingLeft: "16px", marginTop: "8px" }}>
            <li>No-Code AI 工作流設計</li>
            <li>Multi-Agent 編排</li>
            <li>一鍵發布</li>
          </ul>
          <p style={{ fontSize: "13px", marginTop: "8px", color: "var(--cyan)" }}>
            → 解決「可控性」，補 IT 人手不足
          </p>
        </ProductCard>

        <ProductCard
          product="mimir"
          iconSrc="assets/asgard/mimir-logo-color.svg"
          iconAlt="Mimir logo"
          title={<><strong>Mimir</strong> ｜ Data Insight</>}
        >
          <p style={{ fontSize: "13px", marginTop: "8px", color: "var(--muted)" }}>給管理決策層</p>
          <ul style={{ fontSize: "14px", paddingLeft: "16px", marginTop: "8px" }}>
            <li>自然語言問數據</li>
            <li>Auto SQL ＋ 洞察報告</li>
          </ul>
          <p style={{ fontSize: "13px", marginTop: "8px", color: "var(--cyan)" }}>
            → 解決「指揮鏈太長」
          </p>
        </ProductCard>

        <ProductCard
          product="sindri"
          iconSrc="assets/asgard/sindri-logo-color.svg"
          iconAlt="Sindri logo"
          title={<><strong>Sindri</strong> ｜ Agent Hub</>}
        >
          <p style={{ fontSize: "13px", marginTop: "8px", color: "var(--muted)" }}>給營運／業務</p>
          <ul style={{ fontSize: "14px", paddingLeft: "16px", marginTop: "8px" }}>
            <li>AI Agent 部署中心</li>
            <li>串接企業系統</li>
            <li>賦予 AI 執行能力</li>
          </ul>
          <p style={{ fontSize: "13px", marginTop: "8px", color: "var(--cyan)" }}>
            → 串接既有系統，提升實質生產力
          </p>
        </ProductCard>
      </div>
      <ModuleNote label="共享核心">
        三個模組共享 <strong>Enterprise Ontology Layer（企業語意層）</strong>——建一次知識模型，全平台通用。
      </ModuleNote>
    </>
  );
}
