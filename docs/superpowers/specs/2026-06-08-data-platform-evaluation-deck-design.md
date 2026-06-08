# 企業資料平台選型評估 deck — 設計文件

**日期:** 2026-06-08
**狀態:** 已與使用者確認
**來源內容:** `/Users/williamwang/Documents/executing/asgard-reports/lackhouse-related/data-lakehouse-general`（通用版評估報告，8 章 + 附錄，HTML/PDF）

## 目標

把現有的「企業資料平台選型評估報告(通用版)」做成一份 deck，放進 `asgard-slides` mono-repo，定位為**完整技術評估導覽**（8 章全走一遍），以 kami-dark 主題、**元件為主**的視覺策略呈現，**無講者 notes**。

## 已確認決策

1. **範圍:** 骨架 + 完整投影片（一次做完，~58 張）。
2. **定位:** 完整技術評估導覽（不是決策者簡報濃縮版）。
3. **視覺策略:** 元件為主——用 deck-kit 元件重畫報告的 mermaid 圖與表格；產品截圖只在秀真實 UI 時當輔助。
4. **slug:** `asgard-data-platform-evaluation`（網址 `/asgard-slides/asgard-data-platform-evaluation/`）。
5. **notes:** 不加。文字重點直接放 slide 上。
6. 保留 Asgard（肆佳科技）品牌、FineDataLink / Denodo 具名對比；封面「適用對象：中大型製造／傳產企業」（與原報告去化策略一致）。

## 專案骨架

複製現有 deck（`decks/asgard-ai-enterprise-landing` 為範本，結構最新）→ 改 `package.json` name → 清空 `src/slides/`、`public/` → 重建。

```
decks/asgard-data-platform-evaluation/
├── package.json            # "name": "asgard-data-platform-evaluation"
├── vite.config.ts, tsconfig*.json, index.html, eslint.config.js, .gitignore  （照搬）
├── src/
│   ├── main.tsx, App.tsx, vite-env.d.ts （照搬，App 標題字串改掉）
│   ├── chapters.ts         # 10 章（見下）
│   ├── site-meta.ts        # { lang: "zh-TW", durationMin: 60 }
│   └── slides/             # NN-name.tsx，01 起連續無 gap，無 notes
└── public/assets/
    ├── research/           # 8 張產品 UI 截圖（見「資產」）
    └── asgard/             # logo（自 enterprise-landing deck 複製）
```

App.tsx / index.html 的 `<title>` 與 deck 標題改為「企業資料平台選型評估」。

## chapters.ts（10 章）

```ts
export const chapters: Chapter[] = [
  { startSlide: 1,  title: "開場",            subtitle: "適用情境與定位" },
  { startSlide: 3,  title: "Executive Summary", subtitle: "給決策者的十分鐘版本" },
  { startSlide: 9,  title: "背景與評估目標",  subtitle: "為什麼需要 Data Solution" },
  { startSlide: 15, title: "六階段角色框架",  subtitle: "一把共同的尺" },
  { startSlide: 22, title: "方案放進框架",    subtitle: "FineDataLink · Denodo · 開源自建" },
  { startSlide: 29, title: "三條路線深入評估", subtitle: "八維度對標" },
  { startSlide: 36, title: "目標藍圖 Lakehouse", subtitle: "地端全開源完整架構" },
  { startSlide: 42, title: "階段演進路線",    subtitle: "PostgreSQL 中台 → Lakehouse" },
  { startSlide: 48, title: "Consumption",     subtitle: "BI 與 AI 的可能性" },
  { startSlide: 52, title: "Handover 與收尾", subtitle: "團隊培養 + 下一步" },
];
```

## 視覺策略：mermaid / 表格 → deck-kit 元件對應

| 報告原素 | deck-kit 元件 |
|---|---|
| 六階段框架、資料旅程、Phase 1 架構、Lakehouse 架構總圖、NL 查詢流程 | `FlowDiagram` |
| Lakehouse 五層解剖 | `LayerStack` |
| 四個世代、三階段演進、長期能力路線圖 | `Timeline` |
| 角色覆蓋矩陣（●◐○）、評估結論八維度、成本量級、資產延續、六週課綱 | `Table`（`large`） |
| ETL vs ELT、FDL 優勢/限制、Denodo 優勢/限制、開源資安疑慮 | `Compare`（新元件） |
| 三方案定位、三橫切面、Lakehouse 三理由、BI 三方式 | `CardGrid` |
| 章節三問、評估方法三步、下一步 | `Steps` |
| 適用情境條件、知識移轉產出物 | `Checklist`（新元件） |
| 結論三句話、關鍵警語 | `Callout`（新元件） |
| 關鍵數字（NT$600 萬/年、3–4 個月、零授權費） | `BigStat`（新元件） |

所有 slide 用 `SlideShell` + `Kicker`（章名/層級）標題框；元件只用 `from "deck-kit"` barrel。

## 完整 slide 清單（58 張）

> 每張 = `meta = { title, section, theme: "dark" }` + default 元件，無 notes。`section` 用章名。

**Ch1 開場**
1. `01-cover` — 封面：標題「企業資料平台選型評估」、副標「FineDataLink · Denodo · 開源自建 三條路線整體評估」、適用對象、Asgard logo。
2. `02-scope` — 本報告適用情境：`Checklist`（中大型製造/傳產、地端部署、IT 具 SQL 基礎、尚未建資料倉庫、目標 BI/AI）。

**Ch2 Executive Summary**
3. `03-three-questions` — 本報告回答的三個問題：`Steps`（為什麼難比 / 三路線是什麼適合誰 / 此類企業怎麼走）。
4. `04-core-finding` — 核心發現：三方案是三種類型，需先對標再比較（`Table`：方案/其實是什麼/覆蓋/不覆蓋）。
5. `05-positioning` — 三方案一句話定位：`CardGrid`（FDL=搬運加工工具 / Denodo=不搬資料的查詢層 / 開源=整座倉庫加工廠）。
6. `06-verdict-matrix` — 評估結論矩陣：`Table large`（六階段覆蓋/地端/授權成本/團隊能力/擴充性/AI 整合 × 三路線）。
7. `07-recommendation` — 建議：開源 + 三階段演進 `Timeline`（Phase 1 PG 中台 / Phase 2 治理 / Phase 3 Lakehouse）。
8. `08-beyond-selection` — 比選型更重要：團隊培養（`Callout` good：商用培養操作員 vs 開源培養帶得走的能力）。

**Ch3 背景與評估目標**
9. `09-why-data-solution` — 為什麼需要 Data Solution：`FlowDiagram`（點對點串接 → 統一資料層）。
10. `10-symptoms` — 常見徵狀：`DashList`（點對點蔓延 / 欄位各說各話 / 報表壓 IT / AI 無從談起）。
11. `11-oltp-olap` — OLTP vs OLAP：`Table`（誰在用/典型操作/設計重點/資料保留）。
12. `12-oltp-consequences` — 直接在 OLTP 分析的三個後果：`Callout warn` ×3 或 `DashList`（拖慢生產/表結構不適合/歷史查不到）。
13. `13-package-fails` — 採購套裝為何在資料上失靈：`Compare`（資料需求是長出來的 vs 買斷當下；價值在累積 vs 鎖死私有格式）。
14. `14-scope-method` — 評估範圍與方法：`Table`（三路線代表方案）+ `Steps`（建框架→對標→多維評估）。

**Ch4 六階段角色框架**
15. `15-data-journey` — 一筆資料的旅程：`FlowDiagram`（ERP/報工 → 搬運 → 倉庫 → 加工 → 查詢 → 應用）。
16. `16-six-stages` — 六階段角色：`Table`（階段/工廠比喻/白話）。
17. `17-cross-cutting` — 三橫切面：`CardGrid`（Orchestration 生管排程 / Governance 品保文管 / Observability 戰情室）。
18. `18-framework-overview` — 完整框架總圖：`FlowDiagram`（六階段橫向 + 三橫切面註）。
19. `19-etl-elt` — ETL vs ELT：`Compare`（先加工再進倉 vs 先進倉再加工；原始資料/轉換邏輯/重算/代表）。
20. `20-four-generations` — 四個世代：`Timeline`（DW → Lake → 雙軌 → Lakehouse，含強項/痛點）。
21. `21-why-chaos` — 為什麼選型會混亂：`DashList`（行銷詞重疊、覆蓋格子差異大、全家桶 vs 開源組合）。

**Ch5 方案放進框架**
22. `22-hard-to-compare` — 為什麼兩方案難直接比：進貨物流 vs 出貨窗口（`Callout` + 短說明）。
23. `23-finedatalink` — FineDataLink 是什麼 + 框架位置：截圖 `fdl-introduce.jpg`（`DemoShot`）+ 覆蓋/不覆蓋說明。
24. `24-fdl-tradeoff` — FDL 優勢 vs 限制：`Compare`（低代碼快/中文生態/CDC vs 是工具不是平台/邏輯鎖產品內/授權不公開/能力綁產品）。
25. `25-denodo` — Denodo 是什麼 + 位置：截圖 `denodo-unified-layer.png`（`DemoShot`）+ 覆蓋/不覆蓋。
26. `26-denodo-tradeoff` — Denodo 優勢 vs 限制：`Compare`（資料不搬/見效快/治理完整 vs 前提不成立/壓力打生產系統/歷史無解/年訂閱貴）。
27. `27-open-source-stack` — 開源自建：每階段選一元件：`Table`（角色/起步元件/目標元件/說明）。
28. `28-coverage-matrix` — **角色覆蓋矩陣**：`Table large`（九列角色 × 三路線，●◐○ 圖例）。本章關鍵頁。

**Ch6 三條路線深入評估**
29. `29-dimensions` — 八個評估維度：`Table` 或 `CardGrid`（功能覆蓋/地端/自主維運/知識移轉/擴充性/廠商鎖定/AI 整合/成本結構）。
30. `30-route1-package` — 路線一商用套裝評估：`Table`（維度/評估）+ `Callout`（適合誰 / 情境判讀）。
31. `31-route2-denodo` — 路線二 Denodo 評估：`Table` + `Callout`（解決倉庫太多，但此情境還沒有倉庫）。
32. `32-route3-opensource` — 路線三開源自建評估：`Table` + `Callout good`（三顧慮分別由第 5/6/8 章解決）。
33. `33-oss-security` — 開源資安/漏洞疑慮 Q&A：`Compare` 或 `Table`（疑慮 vs 實際情況）。
34. `34-cost-structure` — 成本結構量級比較：`Table large`（軟體授權/導入顧問/硬體/人力/五年後處境 × 三路線）+ `BigStat`（Denodo NT$600 萬+/年）。
35. `35-verdict` — 綜合結論三句話：`Callout` ×3（只有它回答六角色 / 錢花在會留下的地方 / 不關門）。

**Ch7 目標藍圖 Lakehouse**
36. `36-why-lakehouse` — 為什麼目標是 Lakehouse：`CardGrid`（資料資產保險 / 一份資料多引擎 / 成本曲線平緩）。
37. `37-target-architecture` — 完整架構總圖：`FlowDiagram`（六階段 + 具名元件 MinIO/Iceberg/dbt/Trino/Grafana…）。
38. `38-lakehouse-5-layers` — **Lakehouse 五層解剖**：`LayerStack`（L1 MinIO / L2 Parquet / L3 Iceberg / L4 Lakekeeper / L5 Trino+dbt）。
39. `39-components` — 各元件是誰：`Table`（元件/角色/一句話介紹）。
40. `40-key-components` — 重點元件放大：Airflow / dbt / Iceberg / Trino，截圖 `dbt-dag.png` + `airflow-dags-ui.png`（`DemoShot` 兩張或拆兩頁）。
41. `41-tradeoffs` — 架構取捨與已知限制：`Table` + `Callout warn`（元件數量多/無 24×7 原廠/分鐘級/MinIO AGPL）。

**Ch8 階段演進路線**
42. `42-why-not-all-at-once` — 為什麼不一步到位：`CardGrid`（性價比 / 學習坡度 / 風險控制）。
43. `43-three-phases` — 三階段總覽：`Timeline`（Phase 1 PG 中台 / Phase 2 治理強化 / Phase 3 Lakehouse），含觸發條件。
44. `44-phase1` — Phase 1 PostgreSQL 中台：`FlowDiagram`（來源 → 中台 Airflow+PG+dbt → 應用 Grafana+ADI）+ 要點。
45. `45-phase2-3-triggers` — Phase 2/3 觸發條件：`Table`（導入項/觸發條件/帶來什麼）。
46. `46-asset-continuity` — 資產延續對照表：`Table large`（資產 × Phase 1/2/3）。
47. `47-phase-summary` — 本章結論：簡易版起步 = 完整藍圖第一階段形態（`Callout good`）。

**Ch9 Consumption BI/AI**
48. `48-bi-three-ways` — 三種互補看數據方式：`Table`（Grafana/Metabase/商用 BI 適合誰）+ 截圖 `grafana-dashboard.png`、`metabase-dashboard.png`（`DemoShot`）。
49. `49-data-insight` — Asgard Data Insight 自然語言查詢：`FlowDiagram`（使用者問句 → ADI 語意理解生成 SQL → marts 層 → 答案+圖表）。
50. `50-ai-quality-premise` — AI 品質取決於資料層品質（`Callout`：查的是治理過的 marts 層）。
51. `51-advanced-ai` — 進階 AI 應用：`Table`（品質追溯/產能預測/設備預測維護/排程最佳化 × 回答問題 × 資料基礎）。

**Ch10 Handover 與收尾**
52. `52-why-handover` — 為什麼 Handover 是選型的一部分：`Table`（日常維運/新需求/能力沉澱/人員流動 × 三路線）。
53. `53-seed-engineers` — 種子工程師制度：`CardGrid` 或 `DashList`（不是旁聽是動手 / 訓練即工作 / 雙人制）。
54. `54-six-week-training` — On-hand Training 六週課綱：`Table large`（週次/主題/結業能力）+ 截圖 `airflow-dags-ui.png`（若 40 已用則僅 Table）。
55. `55-deliverables` — 知識移轉產出物：`Checklist` 或 `Table`（架構文件/Runbook/血緣/排程模板/教材/變更流程）。
56. `56-capability-roadmap` — 長期能力路線圖：`Timeline`（Phase 1 結業 → Phase 2 進階 → Phase 3 進階 → 長期自主）。
57. `57-next-steps` — 建議的下一步：`Steps`（內部對齊結論 / 進入需求訪談與 Phase 1 規劃 / 指派 2 名種子工程師）。
58. `58-thanks-qr` — 結尾：謝謝 + Asgard 品牌 + QR（`https://asgard-ai.com`，用 `qrcode.react`，與 enterprise-landing 結尾頁一致）。

## 資產

從 `…/data-lakehouse-general/assets/research/` 複製到 `public/assets/research/`：
- `finedatalink/fdl-introduce.jpg`
- `denodo/denodo-unified-layer.png`
- `oss/databricks-lakehouse-evolution.png`（四世代頁可選用）
- `oss/dbt-dag.png`, `oss/airflow-dags-ui.png`, `oss/grafana-dashboard.png`, `oss/metabase-dashboard.png`, `oss/airbyte-connections-ui.png`

logo / 字型自 `decks/asgard-ai-enterprise-landing/public/assets/asgard/` 複製。

## 主題與相依

- kami-dark，沿用 deck-kit barrel；`site-meta.ts` 設 zh-TW / 60 min。
- 結尾 QR 需要 `qrcode.react`（確認 enterprise-landing 的 `package.json` 已有此相依；新 deck 沿用同版本）。
- 只用既有 CSS tokens（無 `--space-*`/`--text-*`）；slide 內不放 SVG，圖表一律走 deck-kit 元件或截圖。
- 固定 16:9 frame、內容溢出會被裁切——表格列數多的頁（覆蓋矩陣、成本、六週課綱、資產延續）用 `Table large` 並控制列數，必要時拆兩頁。

## 驗收標準

1. `pnpm -F asgard-data-platform-evaluation typecheck && lint && build` 全綠。
2. `pnpm -r build` 全 workspace 綠（未動 deck-kit，但確認新 deck 不破壞 site-builder 掃描）。
3. `pnpm build:site` 後 `dist-site/asgard-data-platform-evaluation/index.html` 存在、landing 出現第三張 deck 卡片。
4. slides 連續編號 01–58、boot 不報 discovery 錯誤；dev server 可逐頁瀏覽。
5. Playwright 抽查關鍵頁（封面、覆蓋矩陣 28、五層 38、三階段 43、六週課綱 54）排版不溢出。
6. 保留 Asgard 品牌、FDL/Denodo 具名對比、第 8 章培養計畫。

## 風險

- 表格密集頁可能溢出 16:9 frame → 用 `large` 變體 + 控列數 + 必要時拆頁（實作時逐頁 Playwright 驗）。
- 截圖長寬比不一 → 統一用 `DemoShot`（capped max-height、object-fit:contain）。
- 內容量大（58 張）→ 用 subagent-driven development 分批（每章一批）實作，每批 build + 視覺抽查。
