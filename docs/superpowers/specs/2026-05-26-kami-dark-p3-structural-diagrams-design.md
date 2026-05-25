# kami × Asgard 暗色重設計 — P3：結構圖 primitive

- **Date:** 2026-05-26
- **Status:** Approved (design), pending plan
- **Scope:** 新增 5 個 CSS-based 結構圖元件到 deck-kit layouts

## Program context
最終階段。P1/P2a/P2b/P4/P5 已併入 `main`——整個 repo 已是 kami 暗色。P3 補上 kami 結構圖類別中、對技術 deck 有用的可重用圖表元件（使用者已 scope：只做技術相關結構圖，跳過金融圖與一般資料圖表）。

## P3 goal
新增 5 個結構圖元件，**遵循 deck-kit 既有 diagram 慣例：純 CSS grid/flex + Node-like cells + token 樣式，不用 SVG**（FlowDiagram 即此模式）。連接線用文字箭頭（→）或 CSS pseudo-element。皆放 `packages/deck-kit/src/layouts/`，從 `layouts/index.ts` + root barrel 匯出。只用既有 kami-dark token。

> flowchart 已由現有 `FlowDiagram` 覆蓋；architecture/tiers 由 `LayerStack`（每層可多 item）覆蓋——不另做以免重複。金融圖（candlestick/waterfall）與資料圖表（bar/line/donut/venn）不在範圍（YAGNI）。

### 元件與 API

#### 1. `LayerStack`（分層堆疊，也涵蓋分層架構/tiers）
```tsx
export interface StackLayer { label: ReactNode; items?: ReactNode[]; note?: ReactNode; }
interface LayerStackProps { layers: StackLayer[]; }
```
垂直堆疊的水平層；每層左側 label（墨藍）+ 右側 items（一排 cell）或 note。CSS flex column。對應 deck 的 six-layer-stack。

#### 2. `Timeline`（時間線/里程碑）
```tsx
export interface Milestone { label: ReactNode; title: ReactNode; note?: ReactNode; }
interface TimelineProps { items: Milestone[]; }
```
水平序列 + 連接線 + 圓點；每點 label（mono 小字）+ title + note。CSS flex + pseudo-element 線。900px 以下轉直式。

#### 3. `StateMachine`（狀態機/生命週期）
```tsx
export interface StateNode { name: ReactNode; on?: ReactNode; }
interface StateMachineProps { states: StateNode[]; loop?: boolean; }
```
狀態節點橫排，節點間 `→` 箭頭 + 可選 `on` 轉移標籤；`loop` 時於末端標示「↺ 回到起始」。CSS grid（仿 FlowDiagram）。涵蓋線性與循環生命週期。

#### 4. `Tree`（階層/組織）
```tsx
export interface TreeNode { label: ReactNode; children?: TreeNode[]; }
interface TreeProps { root: TreeNode; }
```
遞迴 CSS 樹：父節點 + 子層用 CSS pseudo-element 連接線。支援 2–3 層。節點為 token 樣式的 box。

#### 5. `Swimlane`（泳道/跨角色流程）
```tsx
export interface SwimLane { actor: ReactNode; steps: (ReactNode | null)[]; }
interface SwimlaneProps { columns: ReactNode[]; lanes: SwimLane[]; }
```
CSS grid：表頭列 = columns（步驟）；每 lane 一列，左 actor label + 各步 cell（null = 空格）。

### 樣式
- 節點/cell：`var(--panel)` 底 + `var(--line)` 細邊 + radius；label/標題 `var(--ink)`/`var(--brand-on-dark)`；連接線/箭頭 `var(--cyan2)` 或 `var(--muted)`；mono 小標 `var(--font-mono)`。
- 無發光、無玻璃、無 SVG。深度只用細邊 + 表面差。
- RWD：900px 以下橫式轉直式（比照 FlowDiagram/TermRow）。

### 匯出
`layouts/index.ts` 追加 5 個 `export` + 5 個 `export type`（StackLayer、Milestone、StateNode、TreeNode、SwimLane）；root `index.ts` 對應追加。

## Non-goals
- 不用 SVG。不做金融圖/資料圖表。不做 flowchart（已有）、不另做 architecture（LayerStack 涵蓋）。
- 不改既有元件/token/slide。不在真實 slide 套用（kit 投資）。

## Verification
1. `pnpm -F deck-kit lint && typecheck && test`（12）。
2. `pnpm -F asgard-ai-agent-workshop typecheck && build`（barrel 解析全部 5 個）。
3. 視覺：暫時 `102-kami-diagrams.tsx` demo slide 排出 5 個圖，controller 截圖確認暗色一致、版面正確，**驗證後刪除**（deck 回 101）。

## Acceptance criteria
- [ ] 5 個元件各 `X.tsx` + `X.module.css`，純 CSS、只用既有 token、無 SVG。
- [ ] layouts/index.ts + root index.ts 正確匯出 5 元件 + 5 型別；可從 `"deck-kit"` import。
- [ ] deck-kit lint/typecheck/test 通過；deck app typecheck/build 通過。
- [ ] demo 截圖確認後刪除；deck 仍 boot（01–101）。
- [ ] 無既有檔被改（除 2 個 index 追加 export）。
