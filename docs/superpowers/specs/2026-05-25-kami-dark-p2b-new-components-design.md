# kami × Asgard 暗色重設計 — P2b：新增 kami 元件

- **Date:** 2026-05-25
- **Status:** Approved (design), pending implementation plan
- **Scope:** P2b — 把 kami `design.md` 有、deck-kit 沒有的 12 個元件加進 deck-kit

---

## Program context

整體 5 階段見 `2026-05-24-kami-dark-p1-foundation-tokens-design.md`。P1（地基 token）、P2a（de-neon 既有元件）已併入 `main`。本階段 P2b 為純加法：新增 12 個 kami 元件，**不改任何既有檔案**（除了 index barrel 的 export 追加）。

> diagram/圖表類（architecture、flowchart、charts…）屬 **P3**，不在 P2b。

### Locked decisions（沿用前階段）

1. kami 暗色融合；保留 Space Grotesk（無襯線）。
2. 墨藍 `#2D5A8A` 唯一主 accent + 去飽和暖調功能色。
3. 全部用既有 kami-dark token，不新增顏色。
4. 元件 API/styling 比照 deck-kit 既有 primitive/layout 慣例。

---

## P2b goal

新增 12 個元件到 deck-kit，作為可重用的 kami 元件庫（供本 deck 與未來 deck 使用）。每個元件遵循既有慣例：

- 檔案：`X.tsx` + `X.module.css`，放在 `packages/deck-kit/src/primitives/` 或 `layouts/`。
- 匯出：在對應的 `primitives/index.ts` 或 `layouts/index.ts` 追加 `export`（型別用 `export type`），再到 root barrel `index.ts` 對應的群組 export 追加名稱。
- 樣式：只用既有 token（`--brand`、`--brand-on-dark`、`--brand-tint`、`--ink`、`--muted`、`--line`、`--panel`、`--panel2`、`--card`、`--cyan2`、`--good/--warn/--bad`、`--font-mono` 等）。螢幕用 px；尺寸比照既有元件的 slide scale。
- SSR-safe：純展示元件，無 `window`/`document` 存取。

**核心原則：純加法。** 不修改任何既有元件、token、slide。唯一對既有檔案的更動是三個 index 檔追加 export 行。

---

## 元件清單與 API

### Primitives（8）

放 `packages/deck-kit/src/primitives/`。

#### 1. `Metric`
單一關鍵數字 + 標籤。kami §Metric。
```tsx
interface MetricProps { value: ReactNode; label: ReactNode; }
// <Metric value="99.9%" label="uptime" />
```
樣式：value 大字（~32px）、`color: var(--brand-on-dark)`、`font-variant-numeric: tabular-nums`；label 小字 `var(--muted)`。baseline 對齊。

#### 2. `Button`
kami §Buttons。primary（墨藍實心）/ secondary（暖面）。
```tsx
interface ButtonProps {
  variant?: "primary" | "secondary";  // default "primary"
  href?: string;                       // 有 href → <a>，否則 <button>
  onClick?: () => void;
  children: ReactNode;
}
```
primary：`background: var(--brand)`、`color: var(--ink)`（暖白）；secondary：`background: var(--panel2)`、`color: var(--ink)`、`border: 1px solid var(--line)`。radius 999px（pill）或 8px——採 8px（與既有 Tag/Card radius 一致風格）。hover：primary→`var(--brand-bright)`，secondary→border 變 `var(--brand-tint)`。

#### 3. `DashList`
編輯式 en-dash 清單。kami §Lists `ul.dash`。
```tsx
interface DashListProps { items: ReactNode[]; }
// <DashList items={["第一點", "第二點"]} />
```
`list-style: none`；每項 `::before { content: "–"; color: var(--brand-on-dark); }`，padding-left 對齊。

#### 4. `ModuleBlock`
字母 + 標題 + 英文副標 + 內文。kami §Module Block。
```tsx
interface ModuleBlockProps {
  letter: string;        // e.g. "A"
  title: ReactNode;      // 中文標題
  sub?: ReactNode;       // 英文副標（mono uppercase）
  children: ReactNode;   // 內文 / 清單
}
```
letter 大字 `var(--brand-on-dark)`；title ~17px；sub mono `var(--brand-on-dark)` letter-spacing；head 與 body 以 `var(--line)` hairline 分隔。

#### 5. `ModuleNote`
群組說明小框。kami §Module Note。
```tsx
interface ModuleNoteProps { label?: ReactNode; children: ReactNode; }
// <ModuleNote label="ABOUT B+C">B 是上游，C 是下游驗證。</ModuleNote>
```
`background: var(--panel)`、radius 8px；label mono uppercase `var(--brand-on-dark)`。比 Talkbox 更輕、無左 bar。

#### 6. `PricingCard`
大價格數字塊。kami §Pricing Card。
```tsx
interface PricingCardProps {
  eyebrow?: ReactNode;
  currency?: ReactNode;  // e.g. "¥"
  amount: ReactNode;     // e.g. "XXX,XXX"
  unit?: ReactNode;      // e.g. "/ term"
  note?: ReactNode;
}
```
amount 大字（~44px）500、`tabular-nums`、`letter-spacing: 0.5px`；eyebrow mono uppercase `var(--muted)`；note `var(--muted)`。

#### 7. `ValueAnchors`
能力錨點清單，墨藍短橫 bullet。kami §Value Anchors。
```tsx
interface ValueAnchorsProps { items: { title: ReactNode; desc: ReactNode }[]; }
// <ValueAnchors items={[{title:"能力錨點 A", desc:"一句事實陳述"}]} />
```
每項 `::before` 為 8px×1.5px `var(--brand)` 短橫（取代圓 bullet）；title `color: var(--brand-on-dark)` 500；列間 `var(--line)` hairline。

#### 8. `CodeCard`
結構化程式碼卡，可選行號。kami §Code Card。
```tsx
interface CodeCardProps { children: string; numbered?: boolean; }
// <CodeCard numbered>{`def analyze(data):\n    return transform(data)`}</CodeCard>
```
`background: var(--card)`、`border: 1px solid var(--line)`、radius 8px；`pre` mono `var(--ink)`。`numbered` 時左側行號欄 `var(--muted)` + `var(--line)` 右分隔。**不做** `.k`/`.c` 語法上色（需 build-time highlighter，列為後續）。

### Layouts（4）

放 `packages/deck-kit/src/layouts/`。

#### 9. `GlanceGrid`
四格關鍵數字。kami §Glance Grid。
```tsx
interface GlanceCell { label: ReactNode; value: ReactNode; note?: ReactNode; }
interface GlanceGridProps { items: GlanceCell[]; }  // 建議 2–4 格
```
`display: grid; grid-template-columns: 1fr 1fr`；每格左 `2px solid var(--brand)` bar；label mono uppercase `var(--brand-on-dark)`；value 大字 `tabular-nums` `var(--ink)`；note `var(--muted)`。匯出 `GlanceCell` 型別。

#### 10. `Table`
kami-table + 變體。kami §Table / Position Table。
```tsx
interface TableProps {
  compact?: boolean;
  financial?: boolean;   // 第一欄外右對齊 + tabular-nums
  striped?: boolean;     // 偶數列 var(--panel) 背景
  children: ReactNode;   // 消費端寫 <thead>/<tbody>/<tr>/<td>
}
// 列標記：<tr data-total> 粗體總結列（上方 1px brand 邊）；<tr data-highlight> 強調列（ivory/panel 填充 + brand 文字）
```
base：`width:100%; border-collapse:collapse`；th `var(--muted)` + `var(--line)` 底線；td `var(--line)` 細列線。CSS 用 `tr[data-total]` / `tr[data-highlight]` 屬性選擇器處理特殊列（React-friendly，消費端寫原生 `<tr data-total>`）。

#### 11. `SectionHeader`
dot-eyebrow + 橫線 + h1。kami §Section Header（與既有 `SectionTitle` 不同調性：SectionTitle 是 pill kicker + h1 + lead；SectionHeader 是 dot-eyebrow + rule）。
```tsx
interface SectionHeaderProps { eyebrow: ReactNode; title: ReactNode; }
// <SectionHeader eyebrow="01 · INTRODUCTION" title="標題" />
```
eyebrow：flex + 6px 墨藍圓點 + mono uppercase `var(--muted)`；其下 `var(--line)` 橫線；h1 大字 `var(--ink)`。間距：eyebrow→rule 14px，rule→h1 ≥36px（kami 規則）。

#### 12. `Funnel`
三欄 grid 漏斗/進度條。kami §9。
```tsx
interface FunnelRow { label: ReactNode; pct: number; count?: ReactNode; }
interface FunnelProps { rows: FunnelRow[]; }
// <Funnel rows={[{label:"Stage A", pct:77.8, count:"1,240"}]} />
```
每列 `grid-template-columns: 120px 1fr 48px`（label | track | 外部 %）；track `var(--panel2)` 底、`var(--brand)` 填充（`width: {pct}%`）；% 欄 `tabular-nums` 右對齊 `var(--muted)`；可選 count 絕對定位於 track 內。匯出 `FunnelRow` 型別。

---

## 匯出接線

- `primitives/index.ts` 追加 8 行 export（Metric、Button、DashList、ModuleBlock、ModuleNote、PricingCard、ValueAnchors、CodeCard）。
- `layouts/index.ts` 追加 4 個 export + 2 個 `export type`（`GlanceCell`、`FunnelRow`；Table/SectionHeader 無對外型別則免）。
- root `index.ts`：在既有 primitives 群組 export 追加 8 個名稱；layouts 群組追加 4 個名稱 + `export type { GlanceCell, FunnelRow }`。

---

## Non-goals

- 不改任何既有元件、token、globals、slide（除三個 index 追加 export）。
- 不做 CodeCard 語法上色（`.k`/`.c`）。
- 不做 diagram/圖表（P3）。
- 不在真實 slide 套用這些新元件（那是內容工作，非本階段）。

---

## Verification

1. `pnpm -F deck-kit lint && pnpm -F deck-kit typecheck && pnpm -F deck-kit test` → 全通過。
2. `pnpm -F asgard-ai-agent-workshop typecheck && build` → 無錯（確認 barrel export 正確、型別可被 deck app 解析）。
3. **視覺**：暫時新增 `decks/asgard-ai-agent-workshop/src/slides/102-kami-kitchen-sink.tsx`（序號接 101 之後、保持連續），import 並排出全部 12 個元件，`dev` 啟動由 controller 截圖確認暗色一致、無破版。**驗證後刪除該 demo slide**，deck 回到 101 結尾。
4. 確認 `discoverSlides` 在 demo 加入/移除後皆能正常 boot（序號連續性）。

## Acceptance criteria

- [ ] 12 個元件各有 `X.tsx` + `X.module.css`，只用既有 token。
- [ ] 三個 index 檔正確追加 export；可從 `"deck-kit"` barrel import 全部 12 個。
- [ ] `GlanceCell`、`FunnelRow` 型別有匯出。
- [ ] deck-kit typecheck/lint/test 通過；deck app typecheck/build 通過。
- [ ] kitchen-sink demo 截圖確認後已刪除；deck 仍可 boot（序號 01–101 連續）。
- [ ] 無既有元件/token/slide 被修改（git diff 僅新增檔 + 三個 index 追加行）。
