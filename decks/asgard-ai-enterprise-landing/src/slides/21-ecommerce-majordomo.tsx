import { ModuleBlock, DashList, CodeCard } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "一個你今天就能裝的 Agent：台灣電商總管",
  section: "Asgard 產品與架構",
  theme: "dark",
};

const capabilities = [
  <>💳 <strong>金流</strong>：ECPay、藍新 NewebPay、街口、TapPay、爭議處理</>,
  <>🚚 <strong>物流</strong>：超商取貨、宅配（黑貓 / 新竹 / 順豐）、冷鏈、跨境</>,
  <>🏪 <strong>開店</strong>：Shopline、91APP、Shopify / 蝦皮、momo</>,
  <>🧾 <strong>電子發票</strong>（載具 / 作廢）、⚖️ <strong>合規</strong>（消保法、PDPA）</>,
  <>🎯 <strong>檔期與定價</strong>：促銷規則自動化</>,
];

const exampleQuery = `你：「這筆 Shopline 訂單客人說付了錢但顯示未付款，
     幫我查 ECPay 授權結果、比對訂單狀態，
     告訴我哪邊掉了。」

Agent：自動挑對的 skill 與 MCP 工具去查、去比對，
       回報問題出在哪一段。`;

export default function Slide() {
  return (
    <>
      <ModuleBlock
        letter="Y"
        title="tw-ecommerce-majordomo（台灣電商總管）"
        sub="Yggdrasil 開源 plugin — 29 個台灣電商 skills ＋ 12 個 MCP servers"
      >
        <DashList items={capabilities} />
      </ModuleBlock>
      <div style={{ marginTop: "16px" }}>
        <p style={{ fontSize: "14px", marginBottom: "8px", color: "var(--muted)" }}>實際對話範例：</p>
        <CodeCard>{exampleQuery}</CodeCard>
      </div>
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--cyan)" }}>
        <strong>模型（會想）＋ MCP 工具（能查能做）＋ skills（懂台灣電商）＝ 一個能交辦的 Agent。</strong>
        開源、多 harness（Claude Code / Codex / Cursor / Gemini…），今天就能裝。
      </p>
    </>
  );
}
