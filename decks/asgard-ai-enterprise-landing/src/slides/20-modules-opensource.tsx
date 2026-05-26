import { GlanceGrid, Talkbox } from "deck-kit";
import type { SlideMeta, GlanceCell } from "deck-kit";

export const meta: SlideMeta = {
  title: "三大模組 ＋ Yggdrasil 開源層",
  section: "Asgard 產品與架構",
  theme: "dark",
};

const modules: GlanceCell[] = [
  {
    label: "🌲 Odin｜Studio",
    value: "Harness 流程引擎 ＋ Sandbox 沙箱",
    note: "IT / MIS 可管理的執行環境，AI 不是黑箱",
  },
  {
    label: "🔴 Mimir｜Data Insight",
    value: "管理決策層 Gen BI",
    note: "自然語言問數據，自動 SQL ＋ 洞察報告",
  },
  {
    label: "🔵 Sindri｜Agent Hub",
    value: "執行層 ＋ Session / Memory",
    note: "Agent 部署中心，賦予 AI 真正執行的能力",
  },
  {
    label: "🤖 模型層",
    value: "多模型支援",
    note: "OpenAI / Claude / Gemini…任務不同可換模型，不用重做流程",
  },
];

export default function Slide() {
  return (
    <>
      <h2>企業導入：三大模組 ＋ 一個開源層</h2>
      <GlanceGrid items={modules} />
      <Talkbox compact>
        <p>
          工具與知識層——我們選擇<strong>開源</strong>：
        </p>
        <p style={{ marginTop: "8px" }}>
          <strong>Yggdrasil</strong> 把 MCP 工具、skills、solution bundles 做成
          <strong>可攜、可驗證的開源資產</strong>，相容市面各種 MCP / CLI 工具。
          開源的用意：<strong>不是把產品免費送掉，是把「導入摩擦」拿掉</strong>——
          先拿公開工具試出價值，再放進你的治理與部署環境。
        </p>
      </Talkbox>
    </>
  );
}
