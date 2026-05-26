# 新 deck：asgard-ai-enterprise-landing — 設計

- **Date:** 2026-05-26
- **Status:** Approved (design), pending plan
- **Scope:** 把 `enterprise-gai-landing/talk.md`（51 張投影片的 60 分鐘 CEO 演講）重建成 `decks/asgard-ai-enterprise-landing`，跑在既有 kami-dark deck-kit 上。

## 來源與目標

- **來源**：`/Users/williamwang/Documents/executing/asgard-reports/enterprise-gai-landing/`
  - `talk.md`（1085 行）— 圖文講稿，每頁有「頁面內容」＋「🎤 講者提詞」。
  - `assets/retail/`（25 張）— 零售 demo 的真實產品/Dashboard 截圖。
  - `assets/deck/`（12 張）— 概念圖，從 Asgard 銷售 PDF 截下的 PNG。
  - `reference/asgard/Asgard AI - How To Landing.pdf`（68 頁）— 產品 UI 截圖來源。
- **題目**：企業 AI 發展方向：生成式 AI 的落地應用｜講者 王韋仁 William Wang｜Beyond South 2026｜~60 min。
- **目標 deck**：`decks/asgard-ai-enterprise-landing`，遵循 `asgard-ai-agent-workshop` 的 slide-module contract 與所有 repo 慣例。

## 三個已定案決策（使用者選擇）

1. **概念圖用 kami-dark 元件原生重畫**（不嵌入 `assets/deck/*.png`）；只有無法重畫的真實產品/Dashboard 截圖才用 `DemoShot` 放圖。
2. **全部 51 張 1:1 完整重現**（投影片 1–48 + 13A/13B/20A）。
3. **不放 `notes`（講稿題詞）**；把 🎤 講者提詞的論述重點融入投影片正文（lead 段落、`DashList`、`Talkbox`/`Quote`）。
4. 收尾頁放 **QR code（asgard-ai.com）＋ 聯絡資訊**（用 `qrcode.react`，workshop deck 已有此依賴）。
5. 執行採 **自主跑完全部 7 個段落，不逐段停**（subagent-driven，每段自我 review + 截圖驗證，最後一次回報）。

## 編號與章節

字母頁併入序列：`13A→14`、`13B→15`、`20A→23`，其餘順移。產生連續 `01-…tsx`…`51-…tsx`。

`chapters.ts`（1-indexed，沿用 workshop deck 格式）：

| startSlide | title | subtitle |
|---|---|---|
| 1  | 開場 | 一個早會的場景 |
| 5  | AI Paradox | 為什麼企業 AI 大多失敗 |
| 12 | 正確方向 | 從個人 AI 到組織 AI |
| 20 | Asgard 怎麼做 | 產品與架構 |
| 28 | 零售範例 | 完整導入 demo |
| 38 | 真實客戶 | 案例與數字 |
| 47 | 怎麼開始 | 流程與收尾 |

## 完整 slide → 檔名 → 元件對照

> 元件全部來自 `deck-kit` barrel。所有 `theme:"dark"`。`meta = { title, section, theme }`，**無 `notes`**。`section` 用對應段落英文/主題短語。截圖路徑相對 deck app root（如 `assets/retail/...`，比照 workshop deck 的 `assets/demos/...`）。

| # | 檔名 | 原講稿 | 主要元件 | 截圖 |
|---|---|---|---|---|
| 01 | `01-title.tsx` | 1 標題 | 品牌 lockup + `h1` + 副標 + section 提示 | logo |
| 02 | `02-cold-open.tsx` | 2 早會場景 | 大字 `Quote` + 小字註腳 | — |
| 03 | `03-founders.tsx` | 3 為什麼是我們 | `Credential` ×2 + 一句定位 | — |
| 04 | `04-three-questions.tsx` | 4 三個問題 | `GlanceGrid`/編號卡 ×3 | — |
| 05 | `05-ai-paradox.tsx` | 5 AI Paradox | `Metric` ×2（1.5兆/95%）+ `Quote` 結論 | — |
| 06 | `06-productivity-leap.tsx` | 6 生產力革命 | `Timeline`（蒸汽機→電腦→AI 1x→10x→100x→???） | — |
| 07 | `07-proven-gains.tsx` | 7 已被證明的生產力 | `Table`/`GlanceGrid` + `Metric`（McKinsey 底線） | — |
| 08 | `08-individual-pivot.tsx` | 8 轉折：個人身上 | `SectionHeader` 大字陳述 + `Quote` 收束句 | — |
| 09 | `09-three-adoptions.tsx` | 9 三種導入 | `Table`（個人/工具型/組織型 × 4 列，highlight 組織型欄） | — |
| 10 | `10-production-cycle.tsx` | 10 覆蓋生產週期 | `StateMachine` loop（研發→…→人資→loop） | — |
| 11 | `11-digital-employee.tsx` | 11 數位員工三階段 | `Timeline`/`Steps`（人工→智能自動化→AI 員工） | — |
| 12 | `12-ml-genai.tsx` | 12 ML×GenAI | `Table`（領域 × ML × GenAI，8 列） | — |
| 13 | `13-left-right-brain.tsx` | 13 左右腦 | `TwoColumn` + `Card`（左腦 ML/RPA/System｜右腦 GenAI）+ 結論 | — |
| 14 | `14-chat-to-agent.tsx` | 13A 三成熟度 | `StateMachine`（Chat→Tool-using→Production Agent）+ 判斷金句 `Quote` | — |
| 15 | `15-six-layer-stack.tsx` | 13B 六層架構 | `LayerStack`（6 層，強調 Model 只佔 1/6） | — |
| 16 | `16-integrate-brains.tsx` | 14 架構整合三件事 | `GlanceGrid`/`Steps` ×3 | — |
| 17 | `17-ontology-layer.tsx` | 15 企業語意層 | 大字陳述 + `DashList`（共同字典理由） | — |
| 18 | `18-data-foundation.tsx` | 16 資料地基 | `DashList`（3 要求）+ `Talkbox`（Git 類比） | — |
| 19 | `19-direction-recap.tsx` | 17 階段小結 | `DashList`/`Steps`（4 件事疊起來） | — |
| 20 | `20-ecosystem.tsx` | 18 Asgard Ecosystem | `SectionHeader` + 定位陳述 | — |
| 21 | `21-three-modules.tsx` | 19 三大模組 | `ProductCard` ×3（Odin/Mimir/Sindri）+ 中央語意層 note | — |
| 22 | `22-modules-opensource.tsx` | 20 三模組+開源層 | `ModuleBlock`/`GlanceGrid` + Yggdrasil 開源說明 | — |
| 23 | `23-ecommerce-majordomo.tsx` | 20A 電商總管 | `ModuleBlock` + `DashList`（能力清單）+ `CodeCard`（範例問句） | — |
| 24 | `24-odin-studio.tsx` | 21 Odin 畫面 | `DemoShot` ×4 + caption | PDF p.18–21 |
| 25 | `25-mimir-sindri.tsx` | 22 Mimir+Sindri 畫面 | `DemoShot` ×3 + caption | PDF p.22–24 |
| 26 | `26-ontology-architecture.tsx` | 23 架構全貌 | `Tree`（Supervisor→4 子 Agent）+ `Node` rows（Data Sources）+ 三重點 `DashList` | — |
| 27 | `27-cross-industry.tsx` | 24 同產業套用 | `Table`/`GlanceGrid`（製造/零售/金融 × 問句→動作） | — |
| 28 | `28-retail-cast.tsx` | 25 場景設定 | 公司輪廓 + `GlanceGrid`/`DashList`（6 角色） | — |
| 29 | `29-shared-dashboard.tsx` | 26 共用 Dashboard | `DemoShot` + 文字 | retail: agent_insight_sales_channel |
| 30 | `30-story1-redflag.tsx` | 27 故事一 1/5 | `DemoShot` ×2 + `Talkbox` | retail: dashboard_overview_1, agent analysis-1 |
| 31 | `31-story1-split.tsx` | 28 故事一 2/5 | `DemoShot` ×2 + `DashList`（三條線） | retail: agent analysis-2, agent analysis-3 |
| 32 | `32-story1-channel.tsx` | 29 故事一 3/5 | `DemoShot` ×3 + 因果鏈文字 | retail: dashboard_overview_2, dashboard_channel_1, dashboard_channel_2 |
| 33 | `33-story1-supply.tsx` | 30 故事一 4/5 | `DemoShot` ×4 + `Talkbox`（Action Agent） | retail: dashboard_bestseller_1/2, dashboard_inventory_monitor, agent transfer |
| 34 | `34-story1-cs-actions.tsx` | 31 故事一 5/5 | `DemoShot` ×3 + `DashList`（老闆四動作） | retail: dashboard_cs_1, agent high risk, dashboard_cs_2 |
| 35 | `35-story2-marketing.tsx` | 32 故事二 行銷 | `DemoShot` ×3 + `Table`/`DashList`（三群分眾） | retail: dashboard_marketing_1/2, agent member grouping - retargeting 1 |
| 36 | `36-story3-channel-health.tsx` | 33 故事三 通路健康度 | `DemoShot` ×3 + 決策反轉文字 | retail: agent - logistic performance / paid but not delivered / risk |
| 37 | `37-retail-loop.tsx` | 34 零售小結 | `StateMachine` loop（看見→拆解→追查→執行→回饋）+ 金句 | — |
| 38 | `38-unitech-intro.tsx` | 35 Unitech 登場 | 公司輪廓 + `GlanceGrid`（30 年/180 人/7 據點/~10k 店） | — |
| 39 | `39-unitech-pains.tsx` | 36 三痛點 | `DashList`/`GlanceGrid` ×3 | — |
| 40 | `40-traditional-vs-ai.tsx` | 37 Traditional vs AI | `TwoColumn`/`Table`（傳統流程｜AI 賦能） | — |
| 41 | `41-unitech-results.tsx` | 38 量化成果 | `Metric` ×4（75%↓/67%↓/80%↑/30%↓）+ Wedge→Expand note | — |
| 42 | `42-unitech-screens-1.tsx` | 39 畫面一 | `DemoShot` ×2 + caption | PDF p.42–43 |
| 43 | `43-unitech-screens-2.tsx` | 40 畫面二 | `DemoShot` ×N + caption | PDF p.44–49 |
| 44 | `44-cases-manufacturing.tsx` | 41 製造業案例 | `GlanceGrid`/卡片（Xxentria/QST/東陽） | — |
| 45 | `45-cases-retail-service.tsx` | 42 零售服務娛樂 | `GlanceGrid`（秀泰/東台/PayEasy/生活市集/遊戲橘子/財經/Asgard） | — |
| 46 | `46-partners.tsx` | 43 合作夥伴客戶 | `Tag` 群 + `GlanceGrid`（產業 + SI 夥伴） | — |
| 47 | `47-adoption-flow.tsx` | 44 導入流程 | `Steps`/`FlowDiagram`（2 步，步驟 2 三條並行） | — |
| 48 | `48-three-stages.tsx` | 45 三階段落地 | `Timeline`/`Steps`（探路→打地基→執行） | — |
| 49 | `49-ai-as-muscle.tsx` | 46 AI 肌肉 | `GlanceGrid`/`DashList`（4 點） | — |
| 50 | `50-back-to-meeting.tsx` | 47 收束 回到早會 | `TwoColumn`（沒有組織 AI｜有組織 AI）+ 金句 | — |
| 51 | `51-thanks-qr.tsx` | 48 Thanks/Q&A | 品牌 + `qrcode.react` QR（asgard-ai.com）+ 聯絡資訊 | — |

> 元件選擇是預設方向；實作時若某頁更適合相鄰元件（如 `GlanceGrid`↔`Table`、`Timeline`↔`Steps`），可在不偏離「概念圖原生重畫、文字加厚、無 notes」原則下調整。若某版面需要的 pattern 不存在，先做 slide-local helper（遵守 deck-kit 的 third-use threshold，不急著升級進 kit）。

## 資產處理

- **複製到 `public/assets/retail/`**：`enterprise-gai-landing/assets/retail/*.png`（25 張）。檔名含空格（如 `agent analysis-1.png`），於 `src` 用 URL-encode（`agent%20analysis-1.png`），比照 workshop deck `101-qr-codes` 對 `assets/...` 的引用慣例。
- **從 PDF 抽取產品 UI 截圖**：用 `pdftoppm`（已確認可用）把 `reference/asgard/Asgard AI - How To Landing.pdf` 的指定頁渲染成 PNG → `public/assets/product/`（Odin/Mimir/Sindri，p.18–24）與 `public/assets/unitech/`（p.42–49）。輸出 150 DPI、檔名語意化（如 `odin-knowledge-base.png`）。若某頁抽出品質不佳，fallback 為帶 caption 的 framed 卡片（不阻塞建置）。
- **品牌資產**：從 `decks/asgard-ai-agent-workshop/public/assets/asgard/` 複製 logos + `SpaceGrotesk-Variable.woff2` 到新 deck `public/assets/asgard/`。
- **不複製** `assets/deck/*.png`（概念圖全部 CSS 重畫）。

## Scaffold

從 workshop deck 複製並調整：
- `package.json`：`name: "asgard-ai-enterprise-landing"`，`description: "企業 AI 發展方向：生成式 AI 的落地應用"`，保留 `qrcode.react`、export scripts。
- `index.html`（改 `<title>`）、`tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`、`vite.config.ts`、`eslint.config.js`、`src/App.tsx`、`src/main.tsx`、`scripts/`（export-pdf/zip）。
- `src/chapters.ts`（上表）、`src/site-meta.ts`（`lang:"zh-TW"`, `durationMin:60`）。
- `README.md`：deck 簡介（標題、講者、場合、段落地圖）。
- `src/slides/` 清空後放 51 個 `NN-name.tsx`(+ 需要的 `NN-name.module.css`)。
- workspace `pnpm install` 自動納入新 package。

## Non-goals

- 不改 deck-kit 元件/token/既有 workshop deck/已 publish 的 landing page。
- 不嵌入 `assets/deck/*.png` 概念圖。
- 不寫 `notes`。
- 不在零售 Dashboard 上造假資料（真實截圖才放圖；概念圖才重畫）。
- 不做 talk.md 沒有的新內容。

## Verification（每段落 + 全體）

1. `pnpm -F asgard-ai-enterprise-landing typecheck` 通過。
2. `pnpm -F asgard-ai-enterprise-landing lint` 通過。
3. `pnpm -F asgard-ai-enterprise-landing build` 成功（slide discovery 01–51 連續、無缺號）。
4. Playwright：dev/preview 起站，逐段截圖確認 kami-dark 一致、版面正確、截圖載入、無 console error。
5. 全 deck boot：overview 顯示 51 張、7 章節分組正確。

## Acceptance criteria

- [ ] `decks/asgard-ai-enterprise-landing` 可 `dev`/`build`，slides 連續 01–51。
- [ ] 51 張全部對應 talk.md 內容，文字加厚、無 `notes`。
- [ ] 概念圖以 kami-dark 元件重畫；retail 25 張 + 抽取的產品/Unitech 截圖以 `DemoShot` 呈現且能載入。
- [ ] `chapters.ts` 7 章節、`site-meta.ts`、`README.md`、品牌資產到位。
- [ ] typecheck/lint/build 通過；視覺截圖確認暗色一致。
- [ ] 收尾頁有可掃描 QR（asgard-ai.com）+ 聯絡資訊。
- [ ] 不動 deck-kit / workshop deck / 已 publish landing page。
