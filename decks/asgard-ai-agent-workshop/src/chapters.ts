import type { Chapter } from "deck-kit";

/**
 * Chapter / section grouping for the deck.
 *
 * Each entry's `startSlide` is 1-indexed; the chapter applies to all
 * slides from that number until the next chapter's startSlide - 1.
 *
 * Used by Overview to group slide cards under chapter headers so a
 * 100+ slide deck stays navigable.
 */
export const chapters: Chapter[] = [
  { startSlide: 1,  title: "開場",                  subtitle: "為什麼從 Chat 走到 Agent" },
  { startSlide: 6,  title: "基礎",                  subtitle: "六層架構 + Model 推理層" },
  { startSlide: 9,  title: "Tools / MCP / A2A",     subtitle: "Agent 怎麼呼叫外部能力" },
  { startSlide: 32, title: "Multi-Agent",           subtitle: "什麼時候真的需要多個 agent" },
  { startSlide: 33, title: "Skill",                 subtitle: "把方法論變成可重用 asset" },
  { startSlide: 42, title: "Sandbox",               subtitle: "讓 agent 動手的執行環境" },
  { startSlide: 47, title: "Memory",                subtitle: "Layer 5 — 跨 turn 跨 session 的狀態" },
  { startSlide: 50, title: "Governance",            subtitle: "Layer 6 — Identity / Policy / Audit" },
  { startSlide: 53, title: "Plugin",                subtitle: "把上述全部打包成可分發單位" },
  { startSlide: 59, title: "Frameworks · Selection", subtitle: "Claude Code / Codex / OpenClaw / RPA 比較" },
  { startSlide: 65, title: "Demos",                 subtitle: "四個 demo 把元件串起來" },
  { startSlide: 84, title: "Asgard",                subtitle: "把架構接到產品落地" },
  { startSlide: 89, title: "Production",            subtitle: "成本、評估、失敗、上線" },
  { startSlide: 96, title: "Outlook",               subtitle: "12-24 個月的演進" },
  { startSlide: 97, title: "收束 · Q&A",            subtitle: "Take-home + Resources + QR" },
];
