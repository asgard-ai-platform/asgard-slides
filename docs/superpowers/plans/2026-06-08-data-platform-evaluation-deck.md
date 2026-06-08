# 企業資料平台選型評估 deck — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `decks/asgard-data-platform-evaluation` — a 58-slide, Traditional-Chinese, component-led technical-evaluation deck on the kami-dark deck-kit, with NO speaker notes.

**Architecture:** Copy the existing `asgard-ai-enterprise-landing` deck as the scaffold (same Vite/React/TS/deck-kit setup), then author 58 slides as `NN-name.tsx` modules. The report's mermaid diagrams and tables are rebuilt with deck-kit components (FlowDiagram / LayerStack / Timeline / Table / Compare / CardGrid / Steps / Checklist / Callout / BigStat); product screenshots are shown via DemoShot.

**Tech Stack:** Vite 8 + React 19 + TypeScript, deck-kit (workspace), qrcode.react. Slide discovery via `import.meta.glob` (contiguous `NN-` prefixes, start at 01).

**Spec:** `docs/superpowers/specs/2026-06-08-data-platform-evaluation-deck-design.md`

---

## Context for workers with zero repo knowledge

- Repo root: `/Users/williamwang/Documents/executing/asgard-reports/asgard-slides`. Branch: `data-platform-evaluation-deck` (already checked out).
- A **deck** is a Vite app under `decks/<slug>/`. Slides live in `decks/<slug>/src/slides/` named `NN-name.tsx` with zero-padded, **contiguous** prefixes starting at `01`. A gap or duplicate prefix breaks boot (`discoverSlides()` asserts this).
- Each slide module exports: `export const meta: SlideMeta = { title, section, theme: "dark" }` and `export default function Slide()`. THIS deck ships **no `notes`**.
- A slide returns a **bare fragment** `<>...</>` — do NOT wrap in `SlideShell`; the Deck shell wraps each slide and adds the page number automatically. Title pattern inside: `<Kicker>章名</Kicker>` then `<h2>標題</h2>` then content. (The cover slide 01 is the exception — it uses a custom layout, see Task 3.)
- Import everything from the `"deck-kit"` barrel only — never deep paths. CSS: only existing tokens; there are NO `--space-*`/`--text-*`/`--radius-*` vars — use explicit px in any per-slide `.module.css`. No SVG inside slides; use deck-kit components or DemoShot.
- Slides render in a fixed 16:9 frame that **clips overflow**. Dense tables → `<Table large>` and keep row counts modest; split into two slides if a table would overflow.
- Per-slide layout helpers go in an optional sibling `NN-name.module.css` (e.g. a `.center` wrapper). Keep them tiny.
- Verify loop for the deck: `pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build`.
- Source report (content reference, READ-ONLY): `/Users/williamwang/Documents/executing/asgard-reports/lackhouse-related/data-lakehouse-general/report/parts/*.html`.

---

## Component cheat-sheet (real APIs + canonical usage)

All of these are imported from `"deck-kit"`. Signatures are verified against source. Use these patterns verbatim; only the data changes.

**Kicker + heading (every content slide starts like this):**
```tsx
import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";
export const meta: SlideMeta = { title: "…", section: "六階段角色框架", theme: "dark" };
export default function Slide() {
  return (
    <>
      <Kicker>章名或層級</Kicker>
      <h2>頁標題</h2>
      {/* content */}
    </>
  );
}
```

**Table** — native `thead/tbody/tr/th/td` inside `<Table>`. Props: `{ compact?, large?, financial?, striped?, children }`. Row attrs: `data-highlight` (emphasis), `data-total` (totals). Use `large` for focus tables.
```tsx
<Table large striped>
  <thead><tr><th>欄位</th><th>值</th></tr></thead>
  <tbody>
    <tr><td>一般列</td><td>x</td></tr>
    <tr data-highlight=""><td>強調列</td><td>y</td></tr>
  </tbody>
</Table>
```

**Compare** — `{ pros: { head, items[] }, cons: { head, items[] } }`. Green `+` vs red `−` columns. (Not limited to pros/cons — use for any two-sided contrast; label `head` accordingly.)
```tsx
<Compare
  pros={{ head: "優勢", items: ["低代碼上手快", "中文生態完整", "CDC 即時同步成熟"] }}
  cons={{ head: "限制", items: ["是工具不是平台", "邏輯鎖在產品內", "授權費不公開"] }}
/>
```

**CardGrid + Card** — `<CardGrid columns={2|3|4}>` wrapping `<Card>` (variant `"default"|"strong"`). Put your own `<h3>`/`<p>` inside each Card.
```tsx
<CardGrid columns={3}>
  <Card><h3>FineDataLink</h3><p>搬運與加工的工具</p></Card>
  <Card><h3>Denodo</h3><p>不搬資料的查詢層</p></Card>
  <Card variant="strong"><h3>開源自建</h3><p>整座倉庫加工廠</p></Card>
</CardGrid>
```

**Steps** — `{ items: { label, body }[] }` (numbered/labelled steps).
```tsx
<Steps items={[
  { label: "1", body: "為什麼這個選型題不容易比？" },
  { label: "2", body: "三條路線各自是什麼、適合誰？" },
  { label: "3", body: "此類企業應該怎麼走？" },
]} />
```

**Timeline** — `{ items: { label, title, note? }[] }` (horizontal milestones).
```tsx
<Timeline items={[
  { label: "Phase 1", title: "PostgreSQL 中台", note: "Airflow + PG + dbt + Grafana + ADI" },
  { label: "Phase 2", title: "治理強化", note: "+ Airbyte + OpenMetadata" },
  { label: "Phase 3", title: "Lakehouse 升級", note: "+ MinIO + Iceberg + Trino" },
]} />
```

**LayerStack** — `{ layers: { label, items?[], note? }[] }`. Renders stacked layers (first item = top row). For the Lakehouse 5-layer, list L5→L1 top-to-bottom OR L1→L5; pick L5 at top (engine on top) to match figure 5-2 reading "計算在最上、儲存在最下".
```tsx
<LayerStack layers={[
  { label: "L5 計算引擎", items: ["Trino", "dbt"], note: "實際讀寫資料的人" },
  { label: "L4 目錄", items: ["Lakekeeper"], note: "所有表的中央註冊處 + 權限" },
  { label: "L3 表格式", items: ["Apache Iceberg"], note: "把檔案組織成『一張表』：交易/版本/欄位演進" },
  { label: "L2 檔案格式", items: ["Parquet"], note: "業界標準欄式格式" },
  { label: "L1 物件儲存", items: ["MinIO"], note: "等於自己機房裡的 S3" },
]} />
```

**FlowDiagram** — `{ nodes: { title, body? }[], framed? }`. Horizontal flow with arrows between nodes. Linear only (no branching) — represent the report's branching diagrams as a linear pipeline.
```tsx
<FlowDiagram nodes={[
  { title: "來源", body: "ERP / 報工" },
  { title: "擷取", body: "每天自動抓" },
  { title: "儲存", body: "倉庫集中" },
  { title: "轉換", body: "清洗彙總" },
  { title: "查詢", body: "SQL 取數" },
  { title: "應用", body: "看板 / AI" },
]} />
```

**DashList** — `{ items: ReactNode[] }` (dash bullet list).
```tsx
<DashList items={["點對點串接蔓延", "欄位定義各說各話", "報表需求壓在 IT 身上", "AI 無從談起"]} />
```

**Callout** — `{ variant?: "info"|"good"|"warn"|"bad", title?, icon?, children }`.
```tsx
<Callout variant="good" title="比選型更重要的事">
  商用方案培養的是「某套產品的操作員」；開源路線培養的是「帶得走的資料工程能力」。
</Callout>
```

**Checklist** — `{ items: { text, ok? }[] }` (`ok` defaults true → ✓; false → ✕).
```tsx
<Checklist items={[
  { text: "中大型製造／傳產企業" },
  { text: "有地端部署需求" },
  { text: "IT 團隊具 SQL 開發基礎" },
]} />
```

**BigStat** — `{ value, label?, delta?, trend? }`. Wrap digits in `<em>` for accent.
```tsx
<BigStat value={<><em>600</em> 萬+/年</>} label="Denodo 公開參考授權量級" />
```

**DemoShot** — `{ src, alt, size?, caption? }`. Use `size="page"` for one screenshot filling a slide; default (capped) otherwise. `src` is relative to the deck's `public/`, e.g. `assets/research/dbt-dag.png`.

---

### Task 1: Scaffold the deck (copy enterprise-landing, rename, boot with one slide)

**Files:**
- Create dir `decks/asgard-data-platform-evaluation/` (copied)
- Modify `decks/asgard-data-platform-evaluation/package.json`
- Modify `decks/asgard-data-platform-evaluation/index.html`
- Replace `src/chapters.ts`, `src/site-meta.ts`
- Delete copied `src/slides/*`, `public/*`, `exports/*`, `dist/`, `node_modules/`
- Create one placeholder slide `src/slides/01-cover.tsx`

- [ ] **Step 1: Copy the deck (excluding build artifacts + symlinked node_modules), drop old content**

```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
rsync -a --exclude node_modules --exclude dist --exclude exports --exclude .preview.pid \
  decks/asgard-ai-enterprise-landing/ decks/asgard-data-platform-evaluation/
rm -rf decks/asgard-data-platform-evaluation/src/slides/* decks/asgard-data-platform-evaluation/public/*
mkdir -p decks/asgard-data-platform-evaluation/public/assets/research \
         decks/asgard-data-platform-evaluation/public/assets/asgard \
         decks/asgard-data-platform-evaluation/src/slides
```
(rsync avoids copying pnpm's symlinked `node_modules`; `pnpm install` in Step 8 relinks it.)

- [ ] **Step 2: Copy asgard brand assets (logo + font) from the source deck**

```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
cp decks/asgard-ai-enterprise-landing/public/assets/asgard/asgard-logo-color.svg \
   decks/asgard-ai-enterprise-landing/public/assets/asgard/SpaceGrotesk-Variable.woff2 \
   decks/asgard-data-platform-evaluation/public/assets/asgard/
```

- [ ] **Step 3: Edit `package.json`** — change only the `name` and `description` fields:

```
"name": "asgard-data-platform-evaluation",
"description": "企業資料平台選型評估：FineDataLink · Denodo · 開源自建 三條路線整體評估",
```
(Leave every script and dependency exactly as-is — it already has `deck-kit`, `qrcode.react`, vitest, playwright, tsx.)

- [ ] **Step 4: Edit `index.html`** — change the `<title>` to:

```html
<title>企業資料平台選型評估</title>
```
(Keep the favicon + font preload lines pointing at `assets/asgard/…` — those files now exist.)

- [ ] **Step 5: Replace `src/site-meta.ts`** with:

```ts
export const siteMeta = {
  lang: "zh-TW",
  durationMin: 60,
} as const;
```

- [ ] **Step 6: Replace `src/chapters.ts`** with:

```ts
import type { Chapter } from "deck-kit";

export const chapters: Chapter[] = [
  { startSlide: 1,  title: "開場",              subtitle: "適用情境與定位" },
  { startSlide: 3,  title: "Executive Summary", subtitle: "給決策者的十分鐘版本" },
  { startSlide: 9,  title: "背景與評估目標",    subtitle: "為什麼需要 Data Solution" },
  { startSlide: 15, title: "六階段角色框架",    subtitle: "一把共同的尺" },
  { startSlide: 22, title: "方案放進框架",      subtitle: "FineDataLink · Denodo · 開源自建" },
  { startSlide: 29, title: "三條路線深入評估",  subtitle: "八維度對標" },
  { startSlide: 36, title: "目標藍圖 Lakehouse", subtitle: "地端全開源完整架構" },
  { startSlide: 42, title: "階段演進路線",      subtitle: "PostgreSQL 中台 → Lakehouse" },
  { startSlide: 48, title: "Consumption",       subtitle: "BI 與 AI 的可能性" },
  { startSlide: 52, title: "Handover 與收尾",   subtitle: "團隊培養 + 下一步" },
];
```

- [ ] **Step 7: Create a placeholder `src/slides/01-cover.tsx`** so the app boots (replaced by the real cover in Task 3):

```tsx
import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "企業資料平台選型評估", section: "開場", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>開場</Kicker>
      <h2>企業資料平台選型評估</h2>
    </>
  );
}
```

- [ ] **Step 8: Install workspace deps and verify it builds**

```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
pnpm install
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
```
Expected: install links the new workspace package; typecheck/lint clean; build emits `dist/`.

- [ ] **Step 9: Commit**

```bash
git add decks/asgard-data-platform-evaluation pnpm-lock.yaml
git commit -m "feat(deck): scaffold asgard-data-platform-evaluation (boots with 1 slide)"
```

---

### Task 2: Copy product screenshots into public/assets/research

**Files:**
- Create `decks/asgard-data-platform-evaluation/public/assets/research/*.{png,jpg}`

- [ ] **Step 1: Copy the 8 screenshots** (flatten into one folder; rename to simple names)

```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
SRC=/Users/williamwang/Documents/executing/asgard-reports/lackhouse-related/data-lakehouse-general/assets/research
DST=decks/asgard-data-platform-evaluation/public/assets/research
cp "$SRC/finedatalink/fdl-introduce.jpg"        "$DST/fdl-introduce.jpg"
cp "$SRC/denodo/denodo-unified-layer.png"       "$DST/denodo-unified-layer.png"
cp "$SRC/oss/databricks-lakehouse-evolution.png" "$DST/databricks-lakehouse-evolution.png"
cp "$SRC/oss/dbt-dag.png"                        "$DST/dbt-dag.png"
cp "$SRC/oss/airflow-dags-ui.png"               "$DST/airflow-dags-ui.png"
cp "$SRC/oss/grafana-dashboard.png"             "$DST/grafana-dashboard.png"
cp "$SRC/oss/metabase-dashboard.png"            "$DST/metabase-dashboard.png"
cp "$SRC/oss/airbyte-connections-ui.png"        "$DST/airbyte-connections-ui.png"
ls "$DST"
```
Expected: 8 files listed.

- [ ] **Step 2: Commit**

```bash
git add decks/asgard-data-platform-evaluation/public/assets/research
git commit -m "assets(deck): add product screenshots for evaluation deck"
```

---

## Slide-authoring tasks (3–12): one task per chapter

**Shared rules for every slide task below:**
- File: `decks/asgard-data-platform-evaluation/src/slides/NN-name.tsx`.
- Every slide: `import { … } from "deck-kit"; import type { SlideMeta } from "deck-kit";`, `export const meta: SlideMeta = { title, section, theme: "dark" }`, `export default function Slide() { return (<>…</>); }`. No `notes`.
- `section` = the chapter title shown (given per task).
- Start content with `<Kicker>…</Kicker>` + `<h2>…</h2>` unless stated otherwise.
- Use the cheat-sheet patterns. Keep tables modest; if content would overflow the 16:9 frame, trim wording (don't shrink below readable).
- After creating all slides in the task, run the deck verify loop, then commit with the given message. Renumbering is NOT needed — each task owns a contiguous prefix block.

---

### Task 3: Ch1 開場 + Ch2 Executive Summary (slides 01–08)

**section for 01–02:** `"開場"`. **section for 03–08:** `"Executive Summary"`.

- [ ] **Step 1: `01-cover.tsx`** (replace placeholder). Custom cover layout — adapt the enterprise-landing cover. Create sibling `01-cover.module.css`. Content:
  - Brand lockup: `assets/asgard/asgard-logo-color.svg` + "Asgard 肆佳科技" + "Enterprise Data Platform".
  - Kicker: `企業資料平台選型評估`
  - `<h1>`: `FineDataLink · Denodo · 開源自建 — 三條路線整體評估`
  - lead `<p>`: `以「六階段角色框架」對標三條路線，並給出一條保留性價比與擴充性的階段演進路線。`
  - meta line: `適用對象：中大型製造／傳產企業（地端部署、IT 具 SQL 基礎、尚未建立資料倉庫、目標 BI/AI）`

  Reference layout (copy `decks/asgard-ai-enterprise-landing/src/slides/01-title.tsx` + its `.module.css`, swap text + remove speaker line). Use `<h1>` (not h2) and no Kicker-on-top requirement here.

- [ ] **Step 2: `02-scope.tsx`** — Kicker `本報告適用情境`, h2 `這份評估為誰而寫`. Use `Checklist`:
  ```
  中大型製造／傳產企業
  有地端部署需求、資料以內部系統（ERP、生管、現場）為主
  IT 團隊具應用系統開發與 SQL 基礎
  尚未建立資料倉庫、過往以採購套裝軟體為主
  長期目標是 BI 與 AI 應用
  ```
  Add a trailing `<p>` (muted): `若多數條件符合，本報告結論可直接適用；條件不同（如已有成熟倉庫），各章標示了判讀會如何改變。`

- [ ] **Step 3: `03-three-questions.tsx`** — Kicker `Executive Summary`, h2 `本報告要回答的三個問題`. `Steps` items:
  ```
  1 / 為什麼這個選型題不容易比？——這些方案本來就不是同一類東西，行銷詞彙卻高度重疊。
  2 / 三條路線各自是什麼、適合誰？——放進同一張角色框架，逐項攤開優勢與限制。
  3 / 此類企業應該怎麼走？——一條保留性價比與擴充性的階段演進路線，加上團隊培養計畫。
  ```

- [ ] **Step 4: `04-core-finding.tsx`** — Kicker `核心發現`, h2 `三個方案是三種不同類型`. `Table large`:
  | 方案 | 它其實是什麼 | 覆蓋的角色 | 沒覆蓋的角色 |
  - FineDataLink｜低代碼資料整合（ETL）工具｜擷取、部分轉換、Data API｜儲存要自備；查詢/BI 需另購
  - Denodo｜資料虛擬化平台（資料不落地）｜查詢（聯邦查詢）、語意層｜不持久化、不做排程 ETL、不解決歷史累積
  - 開源自建（`data-highlight=""`）｜多元件組成的完整平台｜六階段全覆蓋｜—（代價是學習曲線）

  Trailing `<p>`: `三者解決的問題不同——先放回同一張框架，比較才有意義。`

- [ ] **Step 5: `05-positioning.tsx`** — Kicker `一句話定位`, h2 `三個方案，三種角色`. `CardGrid columns={3}`:
  - Card: `<h3>FineDataLink</h3><p>搬運與加工的工具</p>`
  - Card: `<h3>Denodo</h3><p>不搬資料的查詢層</p>`
  - Card variant strong: `<h3>開源自建</h3><p>整座倉庫加工廠</p>`

- [ ] **Step 6: `06-verdict-matrix.tsx`** — Kicker `評估結論`, h2 `六維度綜合評估`. `Table large striped`. Columns: 維度 / 商用套裝（FDL 系）/ 資料虛擬化（Denodo）/ 開源自建. Rows:
  - 六階段角色覆蓋｜部分（需自備儲存、另購 BI）｜單點（僅查詢層）｜完整
  - 地端部署｜可｜可｜可（全開源）
  - 授權成本結構｜授權費，不公開｜年訂閱，數百萬/年起｜零授權費，投資在人與顧問
  - 團隊能力累積｜操作技能（綁廠商）｜操作技能（綁廠商）｜業界通用技能，留在團隊
  - 擴充性／退場彈性｜中｜低｜高（開放格式）
  - AI 整合自由度｜受產品藍圖限制｜受產品藍圖限制｜完全開放
  - mark the 開源自建 column emphasis via `data-highlight=""` on the last row, and bold the 開源 cells with `<strong>`.

- [ ] **Step 7: `07-recommendation.tsx`** — Kicker `建議`, h2 `開源自建 + 三階段演進`. `Timeline`:
  ```
  Phase 1 / PostgreSQL 中台起步 / Airflow + PG + dbt + Grafana + Asgard Data Insight，3–4 個月跑通第一條業務閉環
  Phase 2 / 治理強化 / + Airbyte（介接 UI 化）+ OpenMetadata（資料目錄）
  Phase 3 / Lakehouse 升級 / + MinIO + Iceberg + Trino，與大型企業同級、全程零授權費
  ```
  Trailing `<p>`: `每階段都有可觀察的觸發條件，且前一階段資產全數延續，不走回頭路。`

- [ ] **Step 8: `08-beyond-selection.tsx`** — Kicker `比選型更重要的事`, h2 `團隊培養`. `Callout variant="good" title="能力留在哪裡，才是長期勝負"`:
  `無論選哪條路線，企業長期都需要一個能自主維運資料平台的小團隊。差別只在——商用方案培養出「某套產品的操作員」，開源路線培養出「帶得走的資料工程能力」。本報告的導入服務皆含種子工程師制度、on-hand training 與結業驗收（第 8 章）。`

- [ ] **Step 9: Verify + commit**
```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch1-2 開場 + Executive Summary (slides 01-08)"
```

---

### Task 4: Ch3 背景與評估目標 (slides 09–14)

**section:** `"背景與評估目標"`.

- [ ] **Step 1: `09-why-data-solution.tsx`** — Kicker `為什麼需要 Data Solution`, h2 `從點對點串接到統一資料層`. `FlowDiagram` (linear, contrast in body text):
  ```
  { title: "現況", body: "每條跨系統需求都靠客製 SQL Job、人工匯出" }
  { title: "蔓延", body: "串接路徑越來越多，沒人畫得出全貌" }
  { title: "轉折", body: "導入 Data Solution" }
  { title: "目標", body: "各系統 → 統一資料平台" }
  { title: "產出", body: "BI 看板 / AI 查詢" }
  ```

- [ ] **Step 2: `10-symptoms.tsx`** — Kicker `常見徵狀`, h2 `沒有統一資料層的四個徵狀`. `DashList`:
  ```
  點對點串接蔓延：每條需求一支客製 Job，沒人畫得出全貌
  欄位定義各說各話：同一個「數量」「日期」各系統口徑不同
  報表需求壓在 IT 身上：每個新報表都是一次客製開發
  AI 無從談起：資料散落各處，任何 AI 專案都卡在第一步
  ```

- [ ] **Step 3: `11-oltp-olap.tsx`** — Kicker `必備觀念`, h2 `OLTP vs OLAP：兩種設計目標`. `Table large`. Columns: （空）/ OLTP 交易處理 / OLAP 分析處理. Rows:
  - 誰在用｜ERP、生管、現場系統｜報表、看板、趨勢分析、AI
  - 典型操作｜大量小筆讀寫｜少量大範圍掃描彙總
  - 設計重點｜單筆即時、正確、不能停｜大量掃描快、彙總快
  - 資料保留｜通常只留近期｜長年累積，歷史就是價值

- [ ] **Step 4: `12-oltp-consequences.tsx`** — Kicker `為什麼不能直接在來源查`, h2 `在 OLTP 上跑分析的三個後果`. Three `Callout variant="warn"` stacked (each with title):
  - title `拖慢生產系統`：`一句掃半年的報表查詢，會和現場下單、報工搶資源。`
  - title `表結構不適合分析`：`OLTP 表為交易正確性設計，分析常要跨數十張表 JOIN。`
  - title `歷史查不到`：`來源系統會清舊資料，趨勢與 AI 需要的長期歷史不在裡面。`

- [ ] **Step 5: `13-package-fails.tsx`** — Kicker `採購習慣的失靈`, h2 `為什麼「買套裝軟體」在資料這件事上失靈`. `Compare`:
  ```
  pros head "套裝軟體的邏輯（對 ERP 有效）" items:
    需求明確 → 選一套功能符合的
    廠商導入 → 上線使用
    流程固定的系統行之有年
  cons head "資料平台的兩個本質差異" items:
    資料需求是長出來的，不是定義出來的——每次成長都是一次加購
    價值在累積：十年生產資料是資產，鎖進私有格式換廠商成本複利成長
  ```
  (Here the "pros/cons" are repurposed as「舊邏輯 vs 新現實」; that's fine.)

- [ ] **Step 6: `14-scope-method.tsx`** — Kicker `範圍與方法`, h2 `評估對象與三步方法`. `Table` (三路線代表方案):
  - 路線一：商用套裝｜FineDataLink（帆軟）+ FineReport / FineBI
  - 路線二：資料虛擬化｜Denodo Platform
  - 路線三：開源自建｜Airflow / PostgreSQL / dbt / Iceberg / Trino + 顧問導入

  Then `Steps` (方法三步):
  ```
  1 / 建立中立的「六階段角色框架」——先有一把共同的尺
  2 / 把每個方案放進框架對標——看清「是什麼、不是什麼」
  3 / 以適用情境條件做多維度評估——功能、地端、自主維運、擴充性、鎖定、AI、成本
  ```
  (If both don't fit, put the method Steps only and fold the 三路線 into a short `DashList`. Verify via Playwright.)

- [ ] **Step 7: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch3 背景與評估目標 (slides 09-14)"
```

---

### Task 5: Ch4 六階段角色框架 (slides 15–21)

**section:** `"六階段角色框架"`.

- [ ] **Step 1: `15-data-journey.tsx`** — Kicker `一筆資料的旅程`, h2 `每日各課別產出看板，資料怎麼來`. `FlowDiagram` 6 nodes:
  ```
  來源 / ERP 工單 + 現場報工
  擷取 / 每天自動抓出來
  儲存 / 倉庫集中存放
  轉換 / 清洗、對齊口徑、彙總
  查詢 / SQL 取數
  應用 / 看板 / 報表 / AI 問答
  ```

- [ ] **Step 2: `16-six-stages.tsx`** — Kicker `框架`, h2 `六階段角色（用工廠比喻）`. `Table large`:
  | 階段 | 工廠比喻 | 白話 |
  - 1 Sources 來源｜上游供應商｜資料的產地：ERP、生管、現場、檔案、感測器（只盤點不選型）
  - 2 Ingestion 擷取｜進貨物流｜定時/即時把資料搬進平台，重點是穩定、自動、不漏
  - 3 Storage 儲存｜中央倉庫｜資料集中的家，決定容量、成本、格式是否開放
  - 4 Transform 轉換｜加工產線｜清洗、對齊口徑、彙總成可用的成品表
  - 5 Query 查詢｜出貨窗口｜讓人與系統用 SQL 取數的引擎
  - 6 Consumption 應用｜客戶端｜BI 看板、報表、自然語言問答、AI 模型

- [ ] **Step 3: `17-cross-cutting.tsx`** — Kicker `三橫切面`, h2 `貫穿所有階段的支撐角色`. `CardGrid columns={3}`:
  - `<h3>Orchestration 排程</h3><p>生管排程：誰先誰後、失敗怎麼辦。代表：Apache Airflow。</p>`
  - `<h3>Governance 治理</h3><p>品保 + 文管：口徑一致、權限、血緣、變更紀錄（git 版控為基礎）。</p>`
  - `<h3>Observability 監控</h3><p>戰情室：排程有沒有失敗、資料量異常、磁碟夠不夠。</p>`

- [ ] **Step 4: `18-framework-overview.tsx`** — Kicker `完整框架總圖`, h2 `資料平台六階段角色框架`. `FlowDiagram` 6 nodes (titles only, no body or short body):
  `Sources` `Ingestion` `Storage` `Transform` `Query` `Consumption`. Trailing `<p>` (muted): `另有 Orchestration / Governance / Observability 三橫切面貫穿全部。這張框架是後面所有比較的尺。`

- [ ] **Step 5: `19-etl-elt.tsx`** — Kicker `必備觀念一`, h2 `ETL vs ELT：先加工再進倉，或先進倉再加工`. `Compare`:
  ```
  pros head "ETL（傳統）" items:
    先轉換、再載入
    原始資料不保留（只留成品）
    轉換邏輯在 ETL 工具裡（常為圖形化）
    代表：Informatica、SSIS、FineDataLink
  cons head "ELT（現代主流）" items:
    先載入、再轉換
    原始資料完整保留，隨時可回頭重算
    轉換邏輯是倉庫裡的 SQL 檔（可版控、可審核）
    代表：dbt + 任一倉庫，Lakehouse 標準做法
  ```
  (Use pros=ETL, cons=ELT? The +/− colours imply good/bad. Instead use neutral framing: put ELT as `pros` (green, 推薦) and ETL as `cons`. Reorder so `pros.head="ELT（現代主流，本報告採用）"`, `cons.head="ETL（傳統）"`.) Implement with ELT in pros, ETL in cons.

- [ ] **Step 6: `20-four-generations.tsx`** — Kicker `必備觀念二`, h2 `資料儲存架構的四個世代`. `Timeline`:
  ```
  世代 1 / 資料倉庫 DW / 結構化、查詢快但貴、綁廠商（1980s–）
  世代 2 / 資料湖 Lake / 什麼都能丟、便宜但難治理，易成「資料沼澤」（2010s–）
  世代 3 / 倉 + 湖雙軌 / 兩者優點兼得，但資料兩份、搬運成本高（2015–）
  世代 4 / Lakehouse / 一份資料、多引擎、便宜 + 有治理（2020–）
  ```
  Trailing `<p>`: `Lakehouse = 在便宜儲存上加一層「表格式」（如 Apache Iceberg）。這是第 5 章目標藍圖的依據。`

- [ ] **Step 7: `21-why-chaos.tsx`** — Kicker `框架的用途`, h2 `用框架重新理解「為什麼選型會混亂」`. `DashList`:
  ```
  行銷詞彙高度重疊：資料中台、數據集成、Data Fabric、一站式平台
  有的產品只做一格（如 Denodo 專注查詢層）
  有的做兩三格（如 FineDataLink 做擷取 + 轉換 + API）
  有的「平台」其實是一個產品家族，每格各自計價（帆軟全家桶）
  開源路線則是每格挑一個最成熟的元件，組成完整平台
  ```

- [ ] **Step 8: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch4 六階段角色框架 (slides 15-21)"
```

---

### Task 6: Ch5 方案放進框架 (slides 22–28)

**section:** `"方案放進框架"`.

- [ ] **Step 1: `22-hard-to-compare.tsx`** — Kicker `先放回正確位置`, h2 `為什麼 FineDataLink 與 Denodo 難直接比`. `Callout variant="info" title="進貨物流 vs 出貨窗口"`:
  `FineDataLink 解決「怎麼把資料搬進來、加工」；Denodo 解決「怎麼不搬資料就查到」。比較它們就像比較「進貨物流」與「出貨窗口」——都重要，但不是同一個職位。` Then a `<p>`: `更關鍵的是，兩者都沒回答「資料的家在哪裡」（Storage）——而對尚未建倉的企業，這正是首要目的。`

- [ ] **Step 2: `23-finedatalink.tsx`** — Kicker `路線一`, h2 `FineDataLink：低代碼資料整合（ETL）工具`. `DemoShot src="assets/research/fdl-introduce.jpg"` `caption="FineDataLink 官方產品架構：四個功能模組（資料來源：finedatalink.com）"`. Add a compact `DashList` below OR a short two-line text:
  `覆蓋：Ingestion（批次 + CDC）、部分 Transform、Data API。`
  `不覆蓋：Storage 需自備；Query / Consumption 由 FineReport / FineBI 另購。`
  (If image + two lines overflow, drop to image + caption only and move the 覆蓋/不覆蓋 into the caption.)

- [ ] **Step 3: `24-fdl-tradeoff.tsx`** — Kicker `路線一`, h2 `FineDataLink：優勢與限制`. `Compare`:
  ```
  pros head "優勢" items:
    低代碼上手快，對沒有資料工程背景的團隊友善
    中文生態最完整，台灣有帆軟分公司
    CDC 即時同步成熟
    與帆軟全家桶（FineReport / FineBI）整合順
  cons head "限制" items:
    是工具不是平台：儲存、查詢、治理仍是空的
    轉換邏輯存在產品內（圖形化），換工具需重建
    授權費不公開，全家桶各自計價
    團隊學到的是 FDL 操作，非業界通用技能
  ```

- [ ] **Step 4: `25-denodo.tsx`** — Kicker `路線二`, h2 `Denodo：資料虛擬化（資料不落地）平台`. `DemoShot src="assets/research/denodo-unified-layer.png"` `caption="Denodo 官方架構：來源 → 資料虛擬化層 → 應用（資料來源：community.denodo.com）"`. Two lines:
  `覆蓋：Query（跨來源聯邦查詢）+ 語意層 / 資料目錄，200+ 連接器。`
  `不覆蓋：不持久化資料、不做排程 ETL 的歷史累積。`

- [ ] **Step 5: `26-denodo-tradeoff.tsx`** — Kicker `路線二`, h2 `Denodo：優勢與限制`. `Compare`:
  ```
  pros head "優勢" items:
    資料不搬動——法規禁止資料外移或已有多座倉庫時的業界標準答案
    見效快（在對的場景）：接上來源就能查
    企業級治理完整：語意層、權限、目錄、GenAI 助手
  cons head "限制" items:
    前提不成立：價值在整合「已存在的多座倉庫」，此情境還沒有倉庫
    查詢壓力落在來源系統，與生產交易搶資源
    歷史累積無解：查不到來源已清掉的歷史
    年訂閱成本高（公開參考 NT$600–750 萬/年）；專屬 VQL 人才池小
  ```

- [ ] **Step 6: `27-open-source-stack.tsx`** — Kicker `路線三`, h2 `開源自建：每階段選一個最成熟的元件`. `Table large`:
  | 角色 | 起步元件（Phase 1） | 目標元件（Phase 3） |
  - Ingestion 擷取｜Airflow Python 任務｜Airbyte（UI、300+ 連接器）
  - Storage 儲存｜PostgreSQL｜MinIO + Parquet + Iceberg
  - Transform 轉換｜dbt（SQL 模型化）｜dbt（同一套，改跑 Trino）
  - Query 查詢｜PostgreSQL 本身｜Trino（分散式、可跨源）
  - Consumption 應用｜Grafana + Asgard Data Insight｜+ Metabase（自助分析）
  - Orchestration 排程｜Apache Airflow（全程不變）｜（同左）
  - Governance 治理｜git + SQL 版控｜+ OpenMetadata

- [ ] **Step 7: `28-coverage-matrix.tsx`** — Kicker `本章關鍵頁`, h2 `角色覆蓋矩陣：三條路線一張圖看完`. `Table large`. Columns: 階段角色 / FineDataLink（+FineReport/FineBI 另購）/ Denodo / 開源自建. Use ● ◐ ○ glyphs. Rows:
  - 1 Sources｜盤點｜—｜—
  - 2 Ingestion｜● 核心強項｜○ 不搬資料｜● Airflow / Airbyte
  - 3 Storage｜○ 需自備｜○ 刻意不做｜● PG → Iceberg
  - 4 Transform｜◐ 低代碼（鎖產品內）｜◐ 虛擬視圖｜● SQL / dbt（可版控）
  - 5 Query｜○｜● 核心強項｜● PG → Trino
  - 6 Consumption｜◐ 需另購｜◐ 對外供數｜● Grafana / Metabase / ADI
  - Orchestration｜◐ 產品內｜◐ 快取排程｜● Airflow
  - Governance｜◐ 產品內權限｜● 語意層/目錄｜● git → OpenMetadata
  - Observability｜◐ 任務運維｜◐ 平台監控｜● Grafana / Prometheus
  - mark the 開源自建 column with `<strong>` on the ● cells. Trailing `<p>` (legend): `● 完整覆蓋　◐ 部分覆蓋　○ 不覆蓋`. (9 rows — use `large` not `striped`; verify it fits, if tight switch to default Table size.)

- [ ] **Step 8: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch5 方案放進框架 (slides 22-28)"
```

---

### Task 7: Ch6 三條路線深入評估 (slides 29–35)

**section:** `"三條路線深入評估"`.

- [ ] **Step 1: `29-dimensions.tsx`** — Kicker `評估維度`, h2 `八個評估維度`. `CardGrid columns={4}` with 8 small Cards (each `<h3>` + one-line `<p>`):
  - 功能覆蓋 / 六階段角色覆蓋程度
  - 地端部署 / 可否全部署在自有機房
  - 團隊自主維運 / 廠商退場後能否獨立維運
  - 知識移轉 / 能力是否留在企業團隊
  - 擴充性 / 資料量成長時走不走得上去
  - 廠商鎖定 / 格式是否開放、退場成本
  - AI 整合 / 能否自由對接 AI 應用
  - 成本結構 / 錢花在授權、硬體還是人

- [ ] **Step 2: `30-route1-package.tsx`** — Kicker `路線一評估`, h2 `商用套裝（FineDataLink 系）`. `Table` (維度/評估, ~6 key rows): 功能覆蓋｜擷取轉換強，儲存自建、BI 另購 / 團隊自主維運｜易上手，但架構問題仍需原廠 / 知識移轉｜產品操作，人才不流通 / 擴充性｜生態內順，跨出受限 / 廠商鎖定｜中高（私有格式）/ 成本結構｜授權費（報價制）+ 每模組計價. Then `Callout variant="warn" title="適用情境判讀"`: `可快速看到第一張報表，但資料的家、口徑治理、歷史累積沒被回答；若目標含 AI 與長期擴充，與「買斷當下需求」有結構性矛盾。`

- [ ] **Step 3: `31-route2-denodo.tsx`** — Kicker `路線二評估`, h2 `資料虛擬化（Denodo）`. `Table` (~6 rows): 功能覆蓋｜查詢層世界級，但不持久化、不累積歷史 / 團隊自主維運｜需 VQL 專屬技能，台灣人才池小 / 知識移轉｜技能綁 Denodo / 擴充性｜角色單一，資產累積仍需另建倉 / 廠商鎖定｜高（VQL 私有）/ 成本結構｜年訂閱 NT$600–750 萬/年（公開參考）. Then `Callout variant="warn" title="適用情境判讀"`: `Denodo 解決的是「倉庫太多」，而此情境的問題是「還沒有倉庫」。聯邦查詢把分析負載壓在生產系統上，對製造現場是營運風險。多年後資料域成熟時可再評估——屆時 Trino 也能承擔同角色（零授權費）。`

- [ ] **Step 4: `32-route3-opensource.tsx`** — Kicker `路線三評估`, h2 `開源自建 + 顧問陪跑`. `Table` (~6 rows): 功能覆蓋｜六階段完整，每格皆業界主流 / 地端部署｜完全地端、全開源，資料不出廠 / 團隊自主維運｜以「顧問退場、團隊接手」為驗收 / 知識移轉｜業界通用技能，新人可補位 / 廠商鎖定｜最低（開放格式 + git 內 SQL）/ 成本結構｜零授權費 + 一次性導入 + 自有硬體. Then `Callout variant="good" title="三個傳統顧慮，各有對策"`: `「元件要自己組」→ 顧問提供經實證的架構藍圖（第 5 章）；「學習曲線」→ 階段演進控制坡度（第 6 章）；「沒有單一廠商究責」→ 導入合約含保固與訓練驗收（第 8 章）。`

- [ ] **Step 5: `33-oss-security.tsx`** — Kicker `常見疑慮`, h2 `開源軟體的資安與漏洞風險`. `Table large` (疑慮 / 實際情況, 4 rows):
  - 程式碼公開 = 容易被入侵？｜公開讓全球持續檢視；主流專案有正式 CVE 通報與修補，常快於商用版本週期
  - 沒有廠商，漏洞誰修？｜元件皆有專職組織（Apache、各母公司），且都有付費商業支援可加購
  - 有大企業在用嗎？｜PostgreSQL/Airflow/Iceberg/dbt 誕生並運行於 Netflix、Airbnb 等生產環境
  - 授權有法律風險嗎？｜多為 Apache 2.0 / MIT；少數例外（MinIO AGPL v3）導入時由顧問盤點

- [ ] **Step 6: `34-cost-structure.tsx`** — Kicker `成本結構（非報價）`, h2 `五年期成本結構量級比較`. `Table large` columns 成本項 / 商用套裝 / Denodo / 開源自建:
  - 軟體授權/訂閱｜報價制、逐模組加購｜NT$600 萬+/年，五年累計數千萬｜0
  - 導入/顧問｜原廠導入（另計）｜原廠/代理（另計）｜一次性導入（依範圍議價）
  - 硬體｜自備｜自備｜自備（Phase 1 一台 VM 起）
  - 團隊人力｜操作為主｜仰賴外部專家｜1–3 名種子工程師（訓練後自主）
  - 五年後的處境（`data-highlight=""`）｜持續付授權、能力在廠商｜持續付訂閱、能力在廠商｜不再付授權、能力在自己團隊
  - Add a `BigStat` below or beside: `value={<><em>600</em> 萬+/年</>}` `label="Denodo 公開參考授權量級（五年累計數千萬）"`. (If both don't fit, keep Table only.)

- [ ] **Step 7: `35-verdict.tsx`** — Kicker `綜合結論`, h2 `建議路線三，濃縮成三句話`. Three `Callout variant="good"` (titles 1/2/3):
  - title `只有它回答了全部六個角色`：`特別是「資料的家」與「歷史累積」這兩個最核心的需求。`
  - title `錢花在會留下來的地方`：`授權費換成團隊能力與開放格式的資料資產。`
  - title `不關門`：`未來若要商用 BI，開源資料層隨時可對接；反過來轉換成本高得多。`

- [ ] **Step 8: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch6 三條路線深入評估 (slides 29-35)"
```

---

### Task 8: Ch7 目標藍圖 Lakehouse (slides 36–41)

**section:** `"目標藍圖 Lakehouse"`.

- [ ] **Step 1: `36-why-lakehouse.tsx`** — Kicker `為什麼目標是 Lakehouse`, h2 `三個具體理由`. `CardGrid columns={3}`:
  - `<h3>資料資產的保險</h3><p>資料以開放格式（Parquet + Iceberg）存在自己的儲存上，十年後任何引擎都讀得到。</p>`
  - `<h3>一份資料、多引擎</h3><p>報表、批次加工、AI 訓練用不同引擎讀同一份資料，不需複製。</p>`
  - `<h3>成本曲線平緩</h3><p>儲存用便宜物件儲存、計算依需擴充；資料成長十倍，成本不會成長十倍。</p>`

- [ ] **Step 2: `37-target-architecture.tsx`** — Kicker `完整架構總圖`, h2 `地端全開源 Lakehouse 架構`. `FlowDiagram` 6 nodes with element names in body:
  ```
  Sources / ERP / 生管 / 檔案 / API
  Ingestion / Airbyte（批次 + CDC）
  Storage / MinIO + Iceberg + Lakekeeper
  Transform / dbt（SQL 模型 + 測試 + 血緣）
  Query / Trino（分散式 SQL）
  Consumption / Grafana / Metabase / ADI
  ```
  Trailing `<p>` (muted): `Airflow 排程、git 治理、Prometheus + Grafana 監控橫向貫穿全部元件。`

- [ ] **Step 3: `38-lakehouse-5-layers.tsx`** — Kicker `Storage 拆開看`, h2 `Lakehouse 的內部：五層解剖`. `LayerStack` (L5 top → L1 bottom) exactly as the cheat-sheet LayerStack example. Trailing `<p>`: `儲存與計算徹底解耦——換引擎時，資料一個位元組都不用搬。`

- [ ] **Step 4: `39-components.tsx`** — Kicker `元件名冊`, h2 `各元件是誰：一句話介紹`. `Table large` (元件 / 角色 / 一句話), ~8 rows (trim to fit):
  - Apache Airflow｜排程（橫切面）｜業界排程標準，以 Python 定義 DAG。Airbnb 開源
  - Airbyte｜Ingestion｜300+ 連接器，UI 設定同步，內建 CDC
  - MinIO｜Storage L1｜地端 S3 相容物件儲存標準解
  - Apache Iceberg｜Storage L3｜開放表格式，Netflix 開源；ACID、時間旅行、欄位演進
  - dbt｜Transform｜SQL 轉換模型化：依賴解析、測試、血緣
  - Trino｜Query｜分散式 SQL，跨源聯邦查詢（對應 Denodo 核心能力，零授權費）
  - Metabase / Grafana｜Consumption｜自助分析 / KPI 看板 + 監控
  - Asgard Data Insight｜Consumption（AI）｜自然語言查詢與 AI 分析入口

- [ ] **Step 5: `40-key-components.tsx`** — Kicker `重點元件放大`, h2 `dbt 與 Airflow：日常維運的兩個介面`. Two `DemoShot` (default size, stacked) or split: `assets/research/dbt-dag.png` (caption `dbt 自動產生的模型依賴（血緣）圖`) and `assets/research/airflow-dags-ui.png` (caption `Airflow 排程介面：看狀態、重跑、回補歷史`). If two images overflow, keep dbt-dag (with its caption) here and drop the airflow image (slide 54 stays table-only).

- [ ] **Step 6: `41-tradeoffs.tsx`** — Kicker `誠實的取捨`, h2 `架構的已知取捨與限制`. `Table` (取捨 / 因應, 4 rows):
  - 元件數量多（8–10 個）｜分階段導入，Phase 1 只有 5 個，每階段擴充有觸發條件
  - 沒有 24×7 原廠支援｜導入期顧問承擔，訓練以「團隊能自行排障」驗收，各元件有商業支援可加購
  - 即時性為分鐘級｜製造 KPI 分鐘級已足；未來秒級需求可外掛 Kafka，不動主架構
  - MinIO 採 AGPL v3｜企業內部使用無虞，導入時由顧問完成授權盤點，必要時可換物件儲存
  - Then `Callout variant="info"`: `這是「目標藍圖」，不是 Day 1 要全部建起來的東西——下一章說明如何分三階段走到這裡。`

- [ ] **Step 7: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch7 目標藍圖 Lakehouse (slides 36-41)"
```

---

### Task 9: Ch8 階段演進路線 (slides 42–47)

**section:** `"階段演進路線"`.

- [ ] **Step 1: `42-why-not-all-at-once.tsx`** — Kicker `為什麼不一步到位`, h2 `分階段的三個理由`. `CardGrid columns={3}`:
  - `<h3>性價比</h3><p>起步資料量 GB 級、表數十張，一台 PostgreSQL 綽綽有餘；直接上 Lakehouse 是用大砲打蚊子。</p>`
  - `<h3>學習坡度</h3><p>先在 5 個元件的小架構學會核心觀念，再逐步接觸進階元件。</p>`
  - `<h3>風險控制</h3><p>第一條業務閉環 3–4 個月見效，用成果決定下一階段投資。</p>`

- [ ] **Step 2: `43-three-phases.tsx`** — Kicker `三階段總覽`, h2 `每階段都是可運作的完整平台`. `Timeline` (same as slide 07 but with triggers):
  ```
  Phase 1 / PostgreSQL 中台起步 / Airflow + PG + dbt + Grafana + ADI，第一條業務閉環上線
  Phase 2 / 治理強化 / + Airbyte（介接 UI 化）+ OpenMetadata（資料目錄）
  Phase 3 / Lakehouse 升級 / + MinIO + Iceberg + Trino，與大型企業同級架構
  ```
  Trailing `<p>`: `階段之間以「觸發條件達成」推進，不是半成品。`

- [ ] **Step 3: `44-phase1.tsx`** — Kicker `Phase 1`, h2 `PostgreSQL 資料中台`. `FlowDiagram` linear: `來源（ERP/生管/檔案）` → `Airflow 排程 + 介接` → `PostgreSQL（staging/core/marts）` → `dbt SQL 轉換` → `Grafana + Asgard Data Insight`. Then a short `DashList`:
  ```
  五個核心元件，一台 VM 即可起步，以 git 版控貫穿
  挑一條真實業務閉環（如 MES 報工 → 生管決策）跑通，但架構從第一天就通用
  日常維運在 Airflow / Grafana / ADI 三個網頁介面完成
  約 3–4 個月，含種子工程師訓練與結業驗收
  ```

- [ ] **Step 4: `45-phase2-3-triggers.tsx`** — Kicker `Phase 2 / 3`, h2 `每次升級都有可觀察的觸發條件`. `Table large` (導入項 / 觸發條件 / 帶來什麼):
  - Airbyte（介接 UI 化）｜資料來源 > 5 種，或出現 SaaS/雲端來源｜新來源從「寫程式」變「UI 點幾下」，CDC 內建
  - OpenMetadata（資料目錄）｜非 IT 開始用中台，或表數 > 20｜全公司可搜尋的資料目錄、欄位級血緣、變更審核
  - MinIO + Iceberg｜資料近 TB 級、PG 掃描變慢、需長年歷史｜成本大降、容量近乎無上限、時間旅行、開放格式
  - Trino｜跨庫查詢、併發成長、報表變慢｜單一 SQL 入口、水平擴充、跨源聯邦查詢（對應 Denodo，零授權費）

- [ ] **Step 5: `46-asset-continuity.tsx`** — Kicker `演進，而非重做`, h2 `資產延續對照表`. `Table large` (資產 / Phase 1 / Phase 2 / Phase 3):
  - 三層資料模型｜建立｜沿用｜沿用（搬到 Iceberg）
  - 轉換 SQL（dbt）｜建立｜持續擴充｜改跑 Trino，邏輯不重寫
  - Airflow 排程｜建立｜沿用｜沿用
  - git 版控流程｜建立｜沿用｜沿用
  - 看板 / AI 查詢｜建立｜沿用｜換連線目標即可
  - 團隊能力（`data-highlight=""`）｜排程/建模/版控｜+ 介接/資料目錄｜+ Lakehouse/分散式查詢

- [ ] **Step 6: `47-phase-summary.tsx`** — Kicker `本章結論`, h2 `簡易版起步 = 完整藍圖的第一階段`. `Callout variant="good"`: `「簡易版起步」與「完整架構」不是二選一——Phase 1 的 PostgreSQL 中台就是完整藍圖的第一階段形態。投資節奏由觸發條件控制，每一塊錢都花在已被驗證的需求上。`

- [ ] **Step 7: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch8 階段演進路線 (slides 42-47)"
```

---

### Task 10: Ch9 Consumption BI/AI (slides 48–51)

**section:** `"Consumption"`.

- [ ] **Step 1: `48-bi-three-ways.tsx`** — Kicker `BI`, h2 `三種互補的看數據方式`. `Table large` (工具 / 適合誰 / 說明):
  - Grafana｜管理層 KPI 看板、產線即時戰情｜Phase 1 即上線，固定版面、自動更新、支援告警
  - Metabase｜業務/生管自助探索｜Phase 2/3 加入，拖拉式，不寫 SQL 也能自己拉圖表
  - 商用 BI（選配）｜特定部門偏好 FineBI/Power BI｜開源資料層以標準 SQL 對外，任何商用 BI 都能連
  - Then one `DemoShot src="assets/research/grafana-dashboard.png"` `caption="Grafana 看板：KPI、趨勢、告警集中一頁"`. (If table + image overflow, drop the image — keep Metabase image for nothing; or split. Verify.)

- [ ] **Step 2: `49-data-insight.tsx`** — Kicker `AI 入口`, h2 `Asgard Data Insight：自然語言查詢`. `FlowDiagram`:
  ```
  使用者 / 「上月各課別達成率排名？」
  ADI / 語意理解 → 生成 SQL → 驗證 → 執行
  marts 層 / 治理過的乾淨彙總表
  回傳 / 答案 + 圖表 + 引用的數據口徑
  ```

- [ ] **Step 3: `50-ai-quality-premise.tsx`** — Kicker `關鍵前提`, h2 `AI 問答的品質，取決於資料層的品質`. `Callout variant="info"`: `AI 之所以能答對，是因為它查的是「口徑已對齊、命名已標準化」的 marts 層成品表。這就是為什麼本報告堅持「先把資料的家蓋好」——沒有治理過的資料層，任何 AI 工具都只能猜。` Optionally add a `DemoShot src="assets/research/metabase-dashboard.png"` `caption="Metabase 自助分析：業務人員拖拉即可建立圖表"` if space allows.

- [ ] **Step 4: `51-advanced-ai.tsx`** — Kicker `再往後`, h2 `資料平台上的進階 AI 應用`. `Table large` (AI 應用 / 回答的問題 / 需要的資料基礎):
  - 品質追溯分析｜這批不良品與哪些機台/班別/物料批號相關？｜報工 + 品檢 + 批號關聯（1 年+）
  - 產能/交期預測｜這張工單實際會何時完成？｜工單 + 報工 + 換線歷史（1–2 年）
  - 設備預測維護｜哪台設備可能要出狀況？｜稼動 + 維修 + 感測器（Lakehouse 階段）
  - 排程最佳化｜怎麼排換線最少、交期最穩？｜以上全部 + 換線規則
  - Then `Callout variant="good"`: `「資料基礎」欄正是階段演進的隱性時間表——今天開始累積，一年後第一批 AI 應用原料就緒；晚一年建平台，所有 AI 應用整體延後一年。`

- [ ] **Step 5: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch9 Consumption BI/AI (slides 48-51)"
```

---

### Task 11: Ch10 Handover 與收尾 (slides 52–58)

**section for 52–57:** `"Handover 與收尾"`. Slide 58 is the closing.

- [ ] **Step 1: `52-why-handover.tsx`** — Kicker `Handover`, h2 `為什麼 Handover 是選型的一部分`. `Table large` (（空）/ 商用套裝 / Denodo / 開源自建):
  - 日常維運靠誰｜自己（產品操作）｜原廠/代理為主｜自己（訓練後）
  - 新需求擴充靠誰｜原廠模組 + 加購｜原廠/代理｜自己（顧問備援）
  - 能力沉澱在哪｜廠商生態｜廠商生態｜企業自己的團隊
  - 人員流動風險（`data-highlight=""`）｜重招重訓（技能不流通）｜人才池小｜技能業界通用，市場可補人
  - Then `<p>`: `開源路線把「培養團隊」當成交付物的一部分——不是附贈的教育訓練，而是有驗收標準的工程交付。`

- [ ] **Step 2: `53-seed-engineers.tsx`** — Kicker `種子工程師制度`, h2 `指派 2 名種子工程師，全程參與導入`. `CardGrid columns={3}`:
  - `<h3>不是旁聽，是動手</h3><p>在顧問引導下實際建立部分資料表與排程——平台有一部分是「自己蓋的」。</p>`
  - `<h3>訓練即工作</h3><p>課綱與專案里程碑同步，學的東西當週就用在正式環境。</p>`
  - `<h3>雙人制</h3><p>避免單點依賴，互為備援與 code review 對象。</p>`
  - Trailing `<p>` (muted): `具基本 SQL / 程式經驗即可（.NET、Java 等應用開發背景完全適用）。`

- [ ] **Step 3: `54-six-week-training.tsx`** — Kicker `On-hand Training`, h2 `六週核心課綱：跟著做 → 自己做`. `Table large` (週次 / 主題 / 結業能力):
  - 1｜中台架構 + git 版控 + PG 三層模型｜理解三層設計、能完成版控提交與審核
  - 2｜Airflow 入門 + 第一個排程 DAG｜能讀懂與手動操作既有排程
  - 3｜排程撰寫模式（冪等/增量/回補）｜能選對可重用模板
  - 4｜dbt 模型 + schema 變更 + 資料測試｜能新增模型、走完變更流程
  - 5｜Grafana 看板 + ADI + 故障 SOP｜能配看板、設告警、處理常見故障
  - 6（`data-highlight=""`）｜結業實作：獨立新增一張中台資料表｜整合前五週能力，顧問僅在旁提示

- [ ] **Step 4: `55-deliverables.tsx`** — Kicker `知識移轉產出物`, h2 `導入結束時全數移交（存於客戶自己的 git）`. `Table` (產出物 / 內容):
  - 架構文件｜整體架構圖、各元件配置、連線與權限清單
  - 維運手冊 Runbook｜排程失敗、資料延遲、磁碟告警、備份還原 SOP
  - 資料血緣文件｜每張表的來源、欄位、口徑、更新頻率
  - 排程模板｜三種可重用模式範本
  - 訓練教材｜六週課綱講義 + 實作演練
  - 變更管理流程｜git 審核流程與慣例

- [ ] **Step 5: `56-capability-roadmap.tsx`** — Kicker `長期能力路線圖`, h2 `團隊能力與平台架構同步演進`. `Timeline`:
  ```
  Phase 1 結業 / SQL / dbt 建模 / 排程 / 版控 / 能獨立新增資料表
  Phase 2 進階 / Airbyte 介接管理 / 資料目錄維護
  Phase 3 進階 / Lakehouse 維運 / 分散式查詢調校
  長期 / 企業資料團隊自主規劃新情境
  ```
  Trailing `<p>`: `顧問角色從「主導」逐階段轉為「備援」。`

- [ ] **Step 6: `57-next-steps.tsx`** — Kicker `建議的下一步`, h2 `三個具體動作`. `Steps`:
  ```
  1 / 內部對齊本報告的評估結論
  2 / 若同意開源演進路線，進入需求訪談與 Phase 1 範圍規劃
  3 / 指派 2 名種子工程師人選，於 Phase 1 啟動時到位
  ```

- [ ] **Step 7: `58-thanks-qr.tsx`** — closing slide, section `"Handover 與收尾"`. Adapt `decks/asgard-ai-enterprise-landing/src/slides/69-thanks-qr.tsx` (read it for the exact QRCodeSVG usage + module.css). Centered: large `謝謝`, sub line `Asgard 肆佳科技 · 企業資料平台選型評估`, and `<QRCodeSVG value="https://asgard-ai.com" />` with a caption `asgard-ai.com`. Copy the sibling `.module.css` too (rename to `58-thanks-qr.module.css`).

- [ ] **Step 8: Verify + commit**
```bash
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "feat(deck): ch10 Handover 與收尾 (slides 52-58)"
```

---

### Task 12: Visual verification pass (Playwright)

**Files:** none (verification only; fixes go into the relevant slide files).

- [ ] **Step 1: Start the dev server (background)**
```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
pnpm -F asgard-data-platform-evaluation dev
```
(Default port 5173.)

- [ ] **Step 2: Screenshot every slide at 1280×800 via Playwright MCP.** For each N in 1..58: resize 1280×800, navigate `http://localhost:5173/#N`, screenshot, Read the PNG. Focus especially on the dense pages: **6, 16, 27, 28, 34, 39, 45, 46, 48, 52, 54** (large tables) and **20, 43, 56** (timelines). Check: no content clipped at the bottom edge, tables fit, headings not wrapping awkwardly.

- [ ] **Step 3: Fix overflow/cutoff** in any offending slide — trim wording, drop an optional trailing `<p>`, or split a table across two slides (renumber the rest of the block + re-verify boot). Re-screenshot the fixed slide.

- [ ] **Step 4: Commit any fixes**
```bash
git add decks/asgard-data-platform-evaluation/src/slides
git commit -m "fix(deck): resolve slide overflow from visual pass"
```
(Skip the commit if no fixes were needed.)

---

### Task 13: Full verification + site build

- [ ] **Step 1: Deck-level + workspace checks**
```bash
cd /Users/williamwang/Documents/executing/asgard-reports/asgard-slides
pnpm -F asgard-data-platform-evaluation typecheck && pnpm -F asgard-data-platform-evaluation lint && pnpm -F asgard-data-platform-evaluation build
pnpm -r typecheck && pnpm -r lint
```
Expected: all green. (Existing decks + deck-kit untouched, so this should pass trivially.)

- [ ] **Step 2: Site build smoke test** (confirms the new deck is discovered and the landing lists it)
```bash
pnpm build:site
ls dist-site/asgard-data-platform-evaluation/index.html
grep -c 'asgard-data-platform-evaluation' dist-site/index.html
```
Expected: file exists; grep ≥ 1.

- [ ] **Step 3: Confirm slide count + contiguous numbering**
```bash
ls decks/asgard-data-platform-evaluation/src/slides/*.tsx | wc -l
```
Expected: 58 (plus any `.module.css` siblings are separate; count only `.tsx`).

- [ ] **Step 4: Done.** Hand off via superpowers:finishing-a-development-branch (merge to `main` triggers the Pages deploy automatically).

---

## Notes on the README

The scaffold copies `asgard-ai-enterprise-landing/README.md`. As part of Task 1 (or a trailing edit in Task 13), replace its content with a short deck-specific README (title, what it is, `pnpm -F asgard-data-platform-evaluation dev`, source-report provenance). Keep it brief — one screen. This is optional polish; do not block the deck on it.
