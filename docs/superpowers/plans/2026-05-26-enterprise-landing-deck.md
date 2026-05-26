# asgard-ai-enterprise-landing Deck Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `enterprise-gai-landing/talk.md` (51-slide, ~60-min Traditional-Chinese CEO talk) as a new deck `decks/asgard-ai-enterprise-landing` on the existing kami-dark deck-kit.

**Architecture:** A sibling deck to `asgard-ai-agent-workshop`. Concept diagrams are recreated with native kami-dark deck-kit components (no PNG); only real product/dashboard screenshots are embedded via `DemoShot`. No `notes` export — the speaker-prompt substance is folded into on-slide copy. Slides are discovered by convention (`NN-name.tsx`, contiguous 01–51).

**Tech Stack:** React 19 + TypeScript + Vite, deck-kit barrel (`deck-kit`), CSS Modules, `qrcode.react`, `pdftoppm` (poppler) for PDF screenshot extraction.

**Spec:** `docs/superpowers/specs/2026-05-26-enterprise-landing-deck-design.md` — read it; the full slide→component table lives there.

---

## Shared conventions (every slide task MUST follow)

**Source of truth for copy:** `/Users/williamwang/Documents/executing/asgard-reports/enterprise-gai-landing/talk.md`. Each slide cites a `投影片 N` heading — use that section's **頁面內容** as the on-slide text, and fold the **🎤 講者提詞** substance into lead paragraphs / `Talkbox` / `Quote` so the slide is text-rich. Do **not** copy the 提詞 verbatim as notes.

**Slide module contract** (see `decks/asgard-ai-agent-workshop/src/slides/01-opening.tsx` and `07-six-layer-stack.tsx` for live examples):
```tsx
import { /* components */ type SlideMeta } from "deck-kit";
import styles from "./NN-name.module.css"; // ONLY if custom CSS needed

export const meta: SlideMeta = {
  title: "…",            // the slide's headline (zh-TW)
  section: "…",          // short section label, e.g. "AI Paradox"
  theme: "dark",         // ALWAYS dark
};

// NO `notes` export.

export default function Slide() {
  return ( <> {/* content */} </> );
}
```

**Rules:**
- Import components **only** from `"deck-kit"` (barrel). Never deep-import.
- Available: `SlideShell, Kicker, Card, Quote, Tag, CodeBlock, Talkbox, Node, ProductCard, Credential, DemoShot, Metric, Button, DashList, ModuleBlock, ModuleNote, PricingCard, ValueAnchors, CodeCard` and layouts `Matrix, CardGrid, Steps, Diagram, TermRow, SectionTitle, TwoColumn, FlowDiagram, GlanceGrid, Table, SectionHeader, Funnel, LayerStack, Timeline, StateMachine, Tree, Swimlane`.
- Use the top-level `<h1>`/`<h2>`/`<h3>`, `<p>`, `<Kicker>` like the reference deck. `<h1>` only on the title slide; section slides use `<h2>`.
- **No SVG, no inline neon colors.** Use deck-kit tokens only. If a component needs a custom wrapper, add a `NN-name.module.css` using only `var(--…)` tokens (see the de-neon mapping already applied repo-wide).
- Screenshot `src` is relative to deck root: `assets/retail/<file>.png`, `assets/product/<file>.png`, `assets/unitech/<file>.png`. **URL-encode spaces** in retail filenames (e.g. `assets/retail/agent%20analysis-1.png`).
- Prefer no per-slide CSS; reach for a `.module.css` only when a layout truly needs it. Match the kami-dark look of existing slides.
- If a component prop shape is unclear, read that component's source under `packages/deck-kit/src/primitives/` or `layouts/`.

**Per-task verification (run from repo root):**
```bash
pnpm -F asgard-ai-enterprise-landing typecheck
pnpm -F asgard-ai-enterprise-landing lint
pnpm -F asgard-ai-enterprise-landing build
```
All three must pass. Then commit.

---

## File structure

```
decks/asgard-ai-enterprise-landing/
  package.json index.html eslint.config.js vite.config.ts
  tsconfig.json tsconfig.app.json tsconfig.node.json README.md
  scripts/export-pdf.ts scripts/export-zip.ts
  public/assets/asgard/   (logos + SpaceGrotesk woff2 — copied)
  public/assets/retail/   (25 PNG — copied)
  public/assets/product/  (Odin/Mimir/Sindri PNG — extracted from PDF)
  public/assets/unitech/  (Unitech PNG — extracted from PDF)
  src/App.tsx src/main.tsx src/chapters.ts src/site-meta.ts
  src/slides/01-title.tsx … 51-thanks-qr.tsx  (+ optional NN-name.module.css)
```

---

### Task 0: Scaffold the deck + assets (boots with one placeholder slide)

**Files:**
- Create the whole `decks/asgard-ai-enterprise-landing/` tree (copy from `asgard-ai-agent-workshop`, then adjust).

- [ ] **Step 1: Copy the reference deck as a starting skeleton**
```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
cp -R decks/asgard-ai-agent-workshop decks/asgard-ai-enterprise-landing
rm -rf decks/asgard-ai-enterprise-landing/src/slides/* \
       decks/asgard-ai-enterprise-landing/public/assets/demos \
       decks/asgard-ai-enterprise-landing/public/assets/wjwang-avatar.png \
       decks/asgard-ai-enterprise-landing/exports \
       decks/asgard-ai-enterprise-landing/dist \
       decks/asgard-ai-enterprise-landing/node_modules 2>/dev/null; true
```

- [ ] **Step 2: Rename package + title**
Edit `decks/asgard-ai-enterprise-landing/package.json`: set `"name": "asgard-ai-enterprise-landing"` and `"description": "企業 AI 發展方向：生成式 AI 的落地應用"`. Keep `qrcode.react`, all scripts/deps.
Edit `index.html` `<title>` → `企業 AI 發展方向：生成式 AI 的落地應用`.

- [ ] **Step 3: chapters.ts + site-meta.ts**
Overwrite `src/chapters.ts`:
```ts
import type { Chapter } from "deck-kit";

export const chapters: Chapter[] = [
  { startSlide: 1,  title: "開場",        subtitle: "一個早會的場景" },
  { startSlide: 5,  title: "AI Paradox",  subtitle: "為什麼企業 AI 大多失敗" },
  { startSlide: 12, title: "正確方向",    subtitle: "從個人 AI 到組織 AI" },
  { startSlide: 20, title: "Asgard 怎麼做", subtitle: "產品與架構" },
  { startSlide: 28, title: "零售範例",    subtitle: "完整導入 demo" },
  { startSlide: 38, title: "真實客戶",    subtitle: "案例與數字" },
  { startSlide: 47, title: "怎麼開始",    subtitle: "流程與收尾" },
];
```
Overwrite `src/site-meta.ts` to `{ lang: "zh-TW", durationMin: 60 }` (keep the existing comment header).

- [ ] **Step 4: Copy brand assets + retail screenshots**
```bash
SRC=/Users/williamwang/Documents/executing/asgard-reports/enterprise-gai-landing
DECK=/Users/williamwang/Documents/executing/asgard-reports/asgard-slides/decks/asgard-ai-enterprise-landing
# brand (logos + font) already came with the cp -R of public/assets/asgard — verify it exists:
ls "$DECK/public/assets/asgard"
mkdir -p "$DECK/public/assets/retail"
cp "$SRC"/assets/retail/*.png "$DECK/public/assets/retail/"
ls "$DECK/public/assets/retail" | wc -l   # expect 25
```

- [ ] **Step 5: Extract product/Unitech UI screenshots from the PDF**
```bash
SRC=/Users/williamwang/Documents/executing/asgard-reports/enterprise-gai-landing
DECK=/Users/williamwang/Documents/executing/asgard-reports/asgard-slides/decks/asgard-ai-enterprise-landing
PDF="$SRC/reference/asgard/Asgard AI - How To Landing.pdf"
mkdir -p "$DECK/public/assets/product" "$DECK/public/assets/unitech"
pdftoppm -png -r 150 -f 18 -l 24 "$PDF" "$DECK/public/assets/product/p"
pdftoppm -png -r 150 -f 42 -l 49 "$PDF" "$DECK/public/assets/unitech/p"
ls "$DECK/public/assets/product" "$DECK/public/assets/unitech"
```
This yields `product/p-18.png`…`p-24.png` and `unitech/p-42.png`…`p-49.png`. Leave the `p-NN.png` names; slide tasks 24/25/42/43 reference them by page number. (If any page is visually wrong/blank, the slide task falls back to a captioned framed card.)

- [ ] **Step 6: Placeholder slide so the deck boots**
Create `src/slides/01-title.tsx` as a minimal valid module (real version built in Task 1):
```tsx
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "企業 AI 發展方向：生成式 AI 的落地應用",
  section: "Beyond South 2026",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <h1>企業 AI 發展方向：生成式 AI 的落地應用</h1>
      <p>placeholder — built in Task 1</p>
    </>
  );
}
```

- [ ] **Step 7: Install + verify boot**
```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
pnpm install
pnpm -F asgard-ai-enterprise-landing typecheck
pnpm -F asgard-ai-enterprise-landing build
```
Expected: install picks up the new workspace package; typecheck + build pass (1 slide). If `discoverSlides` complains about sequence, that's expected to clear once Task 1 adds 02+ — but with only `01-` present it must still boot.

- [ ] **Step 8: Commit**
```bash
git add decks/asgard-ai-enterprise-landing
git commit -m "feat(enterprise-landing): scaffold deck + assets"
```

---

### Task 1: 段落 0 + 1 — slides 01–11 (opening + AI Paradox)

**Files (create each `.tsx`, add `.module.css` only if needed):** `src/slides/01-title.tsx` (replace placeholder) … `11-digital-employee.tsx`.

Build these from `talk.md`. For each: read the cited `投影片`, use its 頁面內容 as on-slide text, fold 提詞 into copy. Component per spec table:

- [ ] `01-title.tsx` — 投影片 1. Title slide. Brand lockup (reuse `01-opening.tsx` pattern with `assets/asgard/asgard-logo-color.svg`), `<h1>` 企業 AI 發展方向：生成式 AI 的落地應用, 副標「從會用 AI 的人，到會用 AI 的組織」, 講者 王韋仁 William Wang｜Asgard CEO, Beyond South 2026. May reuse a small `.module.css` adapted from `01-opening.module.css`.
- [ ] `02-cold-open.tsx` — 投影片 2. Big `Quote`: 「星期一早上九點…營收往下掉…是不是行銷不夠力？」 + 小字註腳「這個故事等一下會完整演給你看」.
- [ ] `03-founders.tsx` — 投影片 3. `Credential` ×2 (William Wang / John Lin, titles from 頁面內容) + 定位句「我們在企業 IT 的戰場待了 12 年…」.
- [ ] `04-three-questions.tsx` — 投影片 4. `GlanceGrid` or numbered `Card` ×3 (the three questions).
- [ ] `05-ai-paradox.tsx` — 投影片 5. `Metric` ×2 (`USD 1.5 兆` / `95%`) + `Quote` 結論「這不是技術問題，而是架構問題。」
- [ ] `06-productivity-leap.tsx` — 投影片 6. `Timeline` 3 milestones: 蒸汽機 1x→10x / 電腦 10x→100x / AI 100x→???，note「贏家是重組流程的人」.
- [ ] `07-proven-gains.tsx` — 投影片 7. `Table` or `GlanceGrid` (4 數據列) + `Metric`/底線 McKinsey 2.6–4.4 兆.
- [ ] `08-individual-pivot.tsx` — 投影片 8. Large statement (`SectionHeader` or `<h2>` + lead) 「但這些提升，都發生在個人身上」 + `Quote`「個人 AI 化 ≠ 企業 AI 化」.
- [ ] `09-three-adoptions.tsx` — 投影片 9. `Table`: columns 個人用 AI / 工具型 / 組織型(highlight), rows 範圍/資料/結果/風險 (verbatim from the talk's table).
- [ ] `10-production-cycle.tsx` — 投影片 10. `StateMachine` with `loop` over 研發→採購→生產→倉儲→銷售/行銷→客服/售後→財務→人資.
- [ ] `11-digital-employee.tsx` — 投影片 11. `Timeline`/`Steps` 3 stages 人工作業→智能自動化→AI 員工，金句「人找資訊 → 資訊找人」.

- [ ] **Verify** typecheck + lint + build (all pass).
- [ ] **Commit:** `git commit -am "feat(enterprise-landing): slides 01-11 (opening + AI Paradox)"`

---

### Task 2: 段落 2 — slides 12–19 (個人 AI → 組織 AI)

**Files:** `12-ml-genai.tsx` … `19-direction-recap.tsx`.

- [ ] `12-ml-genai.tsx` — 投影片 12. `Table` 8 rows (領域 × ML × GenAI), verbatim domains.
- [ ] `13-left-right-brain.tsx` — 投影片 13. `TwoColumn` + `Card`: 左腦 ML/RPA/System Services｜右腦 GenAI + 結論「接起來才是完整的 AI 員工」.
- [ ] `14-chat-to-agent.tsx` — 投影片 13A. `StateMachine` Chat→Tool-using Assistant→Production Agent + 判斷金句 `Quote`「能不能被驗收、失敗後爬回來」/「Chat 是大腦，Agent 是員工」.
- [ ] `15-six-layer-stack.tsx` — 投影片 13B. `LayerStack` 6 layers (Model/Tools-MCP/Harness/Sandbox/Session-Memory/Governance) each with the「負責什麼」note; 強調金句「Model 只佔六分之一，其餘全是工程與治理」(`Quote`/`Talkbox`).
- [ ] `16-integrate-brains.tsx` — 投影片 14. `GlanceGrid`/`Steps` ×3 (打通分析與執行 / 從洞察到執行中樞 / 消除資訊孤島).
- [ ] `17-ontology-layer.tsx` — 投影片 15. `<h2>` 企業語意層 + 核心句 + `DashList` (為什麼重要的三點/共同字典).
- [ ] `18-data-foundation.tsx` — 投影片 16. `DashList` 3 要求 (一份資料多用途 / 可治理可追溯 / 不被綁死) + `Talkbox` Git 類比 + BYOA 一句.
- [ ] `19-direction-recap.tsx` — 投影片 17. `DashList`/`Steps` 4 件事疊起來 + 過場句.

- [ ] **Verify** + **Commit:** `feat(enterprise-landing): slides 12-19 (個人 AI → 組織 AI)`

---

### Task 3: 段落 3 — slides 20–27 (Asgard 產品與架構)

**Files:** `20-ecosystem.tsx` … `27-cross-industry.tsx`.

- [ ] `20-ecosystem.tsx` — 投影片 18. `SectionHeader` + 定位陳述 (Total Solution，把四件事做進一個平台).
- [ ] `21-three-modules.tsx` — 投影片 19. `ProductCard` ×3 (Odin/Mimir/Sindri，含對象 + 一句解決什麼) + 中央 `ModuleNote` 共享語意層. Brand logos available at `assets/asgard/odin-logo-color.svg` / `mimir-logo-color.svg` / `sindri-logo-color.svg`.
- [ ] `22-modules-opensource.tsx` — 投影片 20. `ModuleBlock`/`GlanceGrid` 三模組對應六層 + Yggdrasil 開源層說明 (`Card`/`Talkbox`).
- [ ] `23-ecommerce-majordomo.tsx` — 投影片 20A. `ModuleBlock` 標題 + `DashList` 能力清單 (金流/物流/開店/發票/合規…29 skills + 12 MCP) + `CodeCard` 範例問句 (the Shopline/ECPay query). 結論句「模型＋MCP＋skills＝能交辦的 Agent」.
- [ ] `24-odin-studio.tsx` — 投影片 21. `Kicker` + `<h2>` + 4× `DemoShot` (`assets/product/p-18.png`…`p-21.png`) each with caption (Knowledge Base / Semantic Modeling / Tool Setting / Agentic Workflow). Use a small grid `.module.css` if 4-up layout needed; else stack with `size="medium"`.
- [ ] `25-mimir-sindri.tsx` — 投影片 22. 3× `DemoShot` (`p-23.png` Text-to-SQL, `p-24.png` Gen BI, `p-22.png` Agent Hub) + captions.
- [ ] `26-ontology-architecture.tsx` — 投影片 23. `Tree` root Supervisor Agent → children [Structured Data / Unstructured Data / Analytics / Action] Agent; `Node` row of Data Sources tags (ERP/MES/CRM/WMS/POS…); `DashList` 三重點 (Question→Answer / Supervisor 指揮 / 長在既有系統之上). Center line: Ontology Layer = digital brain.
- [ ] `27-cross-industry.tsx` — 投影片 24. `Table`/`GlanceGrid` 製造/零售/金融 × (問句 → 動作) + 一句「架構不變，變的是字典與接的系統」.

- [ ] **Verify** + **Commit:** `feat(enterprise-landing): slides 20-27 (Asgard 產品與架構)`

---

### Task 4: 段落 4 — slides 28–37 (零售範例 demo，截圖密集)

**Files:** `28-retail-cast.tsx` … `37-retail-loop.tsx`. Screenshot files in `assets/retail/` (URL-encode spaces).

- [ ] `28-retail-cast.tsx` — 投影片 25. 公司輪廓 + `GlanceGrid`/`DashList` 6 角色 (林老闆/Mia/Ivy/Ken/Amy/Sandy/Jason) + 一句「一家公司一週的真實運作」.
- [ ] `29-shared-dashboard.tsx` — 投影片 26. `DemoShot` `agent_insight_sales_channel.png` + 文字「大家看同一份資料」.
- [ ] `30-story1-redflag.tsx` — 投影片 27. `DemoShot` ×2 `dashboard_overview_1.png`, `agent%20analysis-1.png` + `Talkbox`「營收掉但毛利沒崩 → 供不上不是賣不掉」.
- [ ] `31-story1-split.tsx` — 投影片 28. `DemoShot` ×2 `agent%20analysis-2.png`, `agent%20analysis-3.png` + `DashList` 三條線 (通路/熱賣品供應/履約客服).
- [ ] `32-story1-channel.tsx` — 投影片 29. `DemoShot` ×3 `dashboard_overview_2.png`, `dashboard_channel_1.png`, `dashboard_channel_2.png` + 因果鏈「缺貨→出貨慢→客訴」.
- [ ] `33-story1-supply.tsx` — 投影片 30. `DemoShot` ×4 `dashboard_bestseller_1.png`, `dashboard_bestseller_2.png`, `dashboard_inventory_monitor.png`, `agent%20transfer.png` + `Talkbox` Action Agent「直接列出從哪調、調幾件」.
- [ ] `34-story1-cs-actions.tsx` — 投影片 31. `DemoShot` ×3 `dashboard_cs_1.png`, `agent%20high%20risk.png`, `dashboard_cs_2.png` + `DashList` 老闆四個動作.
- [ ] `35-story2-marketing.tsx` — 投影片 32. `DemoShot` ×3 `dashboard_marketing_1.png`, `dashboard_marketing_2.png`, `agent%20member%20grouping%20-%20retargeting%201.png` + `Table`/`DashList` 三群分眾 (立即推/先安撫/暫不推) + 金句「避免把行銷做成客訴」.
- [ ] `36-story3-channel-health.tsx` — 投影片 33. `DemoShot` ×3 `agent%20-%20logistic%20performance.png`, `agent%20-%20logistic%20paid%20but%20not%20delivered.png`, `agent%20-%20logistic%20risk.png` + 決策反轉文字.
- [ ] `37-retail-loop.tsx` — 投影片 34. `StateMachine` `loop` 看見→拆解→追查→執行→回饋 + 金句「不是七個聊天機器人，是一個會協作的 AI 組織」.

- [ ] **Verify** + **Commit:** `feat(enterprise-landing): slides 28-37 (零售範例 demo)`

---

### Task 5: 段落 5 — slides 38–46 (真實客戶案例)

**Files:** `38-unitech-intro.tsx` … `46-partners.tsx`.

- [ ] `38-unitech-intro.tsx` — 投影片 35. 公司輪廓 + `GlanceGrid` (1995/30 年/180 人/7 據點/100+ 品牌/~10k 店) + 一句「最難 AI 化的售後維修型」.
- [ ] `39-unitech-pains.tsx` — 投影片 36. `DashList`/`GlanceGrid` 三痛點 (培訓>6 月 / 人工填單 / 資料分散).
- [ ] `40-traditional-vs-ai.tsx` — 投影片 37. `TwoColumn`/`Table` 傳統流程｜AI 賦能後 + 對應 Asgard 能力.
- [ ] `41-unitech-results.tsx` — 投影片 38. `Metric` ×4 (響應 ↓75% / 訓練 ↓67% / 自動化 ↑80% / 人力 ↓30%) + Wedge→Expand `Talkbox`.
- [ ] `42-unitech-screens-1.tsx` — 投影片 39. `DemoShot` ×2 (`assets/unitech/p-42.png` AI 小幫手, `p-43.png` WMS 助理) + captions.
- [ ] `43-unitech-screens-2.tsx` — 投影片 40. `DemoShot` ×N from `assets/unitech/p-44.png`…`p-49.png` (自動建工單/自動回信/Gen BI). Pick the clearest 3–4; caption each. Grid `.module.css` if needed.
- [ ] `44-cases-manufacturing.tsx` — 投影片 41. `GlanceGrid`/`Card` ×3 (Xxentria / QST-Boltun / 東陽) with one-line each.
- [ ] `45-cases-retail-service.tsx` — 投影片 42. `GlanceGrid` 7 (秀泰/東台/PayEasy/生活市集/遊戲橘子/財經節目/Asgard 自家).
- [ ] `46-partners.tsx` — 投影片 43. `Tag` 群 (已落地產業) + `GlanceGrid`/`Tag` (SI 夥伴) + 一句總結.

- [ ] **Verify** + **Commit:** `feat(enterprise-landing): slides 38-46 (真實客戶案例)`

---

### Task 6: 段落 6 — slides 47–51 (怎麼開始 + 收尾)

**Files:** `47-adoption-flow.tsx` … `51-thanks-qr.tsx`.

- [ ] `47-adoption-flow.tsx` — 投影片 44. `Steps`/`FlowDiagram` 2 步 (釐清問題 → 導入，步驟 2 三條並行：現況分析 / 資料架構 / AI 應用呈現).
- [ ] `48-three-stages.tsx` — 投影片 45. `Timeline`/`Steps` 探路 Pathfinder → 打地基 Foundry → 執行 Operator + 心法「以週為單位、分階段見效」.
- [ ] `49-ai-as-muscle.tsx` — 投影片 46. `GlanceGrid`/`DashList` 4 點 (肌肉/從裝飾到核心/人機協作/持續精進) + 金句「AI 要成為營運的肌肉，不是裝飾」.
- [ ] `50-back-to-meeting.tsx` — 投影片 47. `TwoColumn` 兩種公司 (沒有組織 AI｜有組織 AI) + 金句「差別不在有沒有 AI，在 AI 有沒有變成你組織的一部分」.
- [ ] `51-thanks-qr.tsx` — 投影片 48. Thanks + 講者/公司 + `qrcode.react` QR to `https://asgard-ai.com` + 聯絡資訊. Read `decks/asgard-ai-agent-workshop/src/slides/101-qr-codes.tsx` for the `qrcode.react` usage + kami-dark QR holder pattern (`background: var(--ink)` for scannability).

- [ ] **Verify** + **Commit:** `feat(enterprise-landing): slides 47-51 (怎麼開始 + 收尾)`

---

### Task 7: Full-deck verification + README

**Files:** `decks/asgard-ai-enterprise-landing/README.md` (rewrite from the workshop README, new title/speaker/段落 map).

- [ ] **Step 1: Rewrite README** — title, 講者 王韋仁, 場合 Beyond South 2026, 60 min, 7-段落 map, commands.
- [ ] **Step 2: Full verify**
```bash
pnpm -F asgard-ai-enterprise-landing typecheck
pnpm -F asgard-ai-enterprise-landing lint
pnpm -F asgard-ai-enterprise-landing build
```
All pass; build reports 51 discovered slides, contiguous 01–51.
- [ ] **Step 3: Visual check (controller does this — subagents can't see).** Start `pnpm -F asgard-ai-enterprise-landing dev`, Playwright-navigate a sample from each chapter (e.g. #5, #15, #26, #33, #41, #51), screenshot, confirm kami-dark consistency, screenshots load, no console errors, QR scannable.
- [ ] **Step 4: Commit** `git commit -am "docs(enterprise-landing): README + full-deck verification"`

---

## Self-review notes
- **Spec coverage:** all 51 slides have a task line; scaffold/assets/chapters/site-meta/README/QR each covered (Tasks 0,6,7). Concept-vs-screenshot split and no-notes rule encoded in Shared conventions + per-slide component column.
- **Asset risk:** PDF extraction (Task 0 Step 5) is the one external dependency; fallback (captioned framed card) stated for slides 24/25/42/43 if a page renders poorly.
- **Sequencing:** deck must boot after every task — Task 0 leaves exactly `01-`; Tasks 1–6 add contiguous ranges, so prefixes stay sequential at each commit.
