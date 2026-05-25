# kami × Asgard 暗色重設計 — P2a：De-neon 既有元件

- **Date:** 2026-05-24
- **Status:** Approved (design), pending implementation plan
- **Scope of this spec:** P2a only — de-neon deck-kit 既有的 11 primitives + 8 layouts 的 `*.module.css`

---

## Program context

整體改造（5 階段）見 `2026-05-24-kami-dark-p1-foundation-tokens-design.md`。P1（地基 token）已併入 `main`。P2 因量大拆成兩個子循環：

- **P2a（本 spec）** — de-neon 既有元件：把 deck-kit 19 個元件的 `*.module.css` 從霓虹/玻璃改成 kami 暗色。
- **P2b（後續）** — 新增 kami 缺的 12 個元件（Metric、GlanceGrid、Table、SectionHeader、Button、DashList、ModuleBlock、ModuleNote、PricingCard、ValueAnchors、Funnel、CodeCard）。

> diagram/圖表類（architecture、flowchart、charts…）屬 **P3**，不在 P2。

### Locked decisions（沿用 P1）

1. 方向：kami 暗色融合。
2. 字體：保留 Space Grotesk，不導入襯線。
3. Accent：墨藍 `#2D5A8A` 唯一主色 + 去飽和暖調功能色。
4. 已 publish 的 landing page 維持原樣不改。deck 隨 push 到 main 增量部署。

---

## P2a goal

把 deck-kit 既有元件的 `*.module.css` 從「深色霓虹 / 玻璃擬態」收斂成 kami 暗色。

**核心原則：保留所有元件的 React API、class 名稱、尺寸與排版不變，只更換顏色與效果。** 這是 P1「只換值不換名」原則在元件層的延伸。

> P1 已把 `var(--cyan)`/`var(--cyan2)` 等 token remap 成墨藍系，所以**任何已經吃 token 的宣告在 P1 就自動變色了**（例如 Card 的頂部 accent bar 用 `var(--cyan)`，現已是墨藍）。P2a 只處理**寫死的字面值**與**玻璃/發光效果**。

---

## 實作中修正（2026-05-25）：light / paper 主題改為 kami 暗色

**背景**：code review 期間發現，這個 deck 有 31 dark / 34 light / 36 paper 三種 `meta.theme`，共 ~70 張用 light/paper。但**原始設計裡 light/paper 從來不是亮底**——SlideShell 一律畫深色底 + 白字，theme 只決定 radial glow 的顏色（dark=cyan/purple、light=blue、paper=green）。P1 誤把 `[data-variant="light"]/"paper"` 的 token remap 成米紙亮色，導致這 70 張 slide 會變成米紙底但殘留寫死白字（不可見），slideNo 也在米紙上消失。

**修正（忠於原本「全深色」、且符合 kami 單一 accent 的克制）**：light / paper 主題一律 render 成 **kami 暗色**，與 dark 一致。具體：

- `theme/tokens.css`：移除 `[data-variant="light"]` 與 `[data-variant="paper"]` 兩個 parchment 區塊，讓它們繼承暗色 `:root`。（`--paper`/`--paper-ink` token 保留備用；本 deck 為純暗色，這兩個 theme 值只是 accent 鉤子，非亮色模式。）
- 移除已變冗餘的 `[data-variant="light"]/"paper"` selector：`SlideShell`、`Card`、`Quote` 內各一個（與預設深色完全相同）。
- `shell/OverviewMode` 的 `[data-variant]` thumb accent 留待 **P5**（不在 P2a 動 shell）。

> 此修正取代 P1 spec 中「light/paper variant → kami 米紙」的敘述。deck 維持全暗色；若未來要真正的米紙亮色模式，應由 deck 層級的開關觸發，而非 per-slide theme。

---

## De-neon 對應規則（canonical 轉換）

實作時對每個檔套用下表。保留 alpha 值；只換色相。

| 舊字面值（pattern） | 新值 |
|---|---|
| `rgba(6, 182, 212, a)`（cyan，任意 a） | `rgba(45, 90, 138, a)`（墨藍，保留 a） |
| 實心 cyan / `#06b6d4` | `var(--cyan)`（= `#2D5A8A`） |
| `rgba(34, 211, 238, a)`（cyan2） | `rgba(158, 193, 230, a)`（亮藍 `#9ec1e6`） |
| 實心 cyan2 / `#22d3ee` | `var(--cyan2)`（= `#9ec1e6`） |
| `rgba(59, 130, 246, a)`（blue） | `rgba(45, 90, 138, a)` |
| `rgba(168, 85, 247, a)`（purple，若有） | `rgba(140, 132, 168, a)`（去飽和紫 `#8c84a8`） |
| `rgba(255, 255, 255, a)`（冷白疊層/邊框） | `rgba(245, 244, 237, a)`（暖白，保留 a） |
| `#fff` / `#ffffff`（文字） | `var(--ink)` |
| `rgba(5, 8, 18, a)` / `rgba(10, 15, 30, a)`（舊深底） | 實心容器 → `var(--card)`；半透明 → `rgba(20, 20, 19, a)` |
| `#d7f7ee` / 其他薄荷綠強調 | `var(--brand-on-dark)`（`#9ec1e6`） |
| `box-shadow: 0 0 Npx rgba(6,182,212,…)`（cyan 發光） | 移除；若需要景深改 `var(--shadow)`（kami whisper） |
| `backdrop-filter: blur(...)` / `-webkit-backdrop-filter` | 移除（kami 是平面紙感，無玻璃擬態） |

**效果層規則：**

- 卡片/容器採 P1 已核准調性：**平面暖表面 + 1px 細暖邊框 + 可選墨藍 accent**，無 cyan 發光、無 backdrop-blur。
- 玻璃漸層底 `linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.014))` → 改 `var(--panel)` 或暖白低透明平面填充。
- 深度只用三種：細邊框、kami whisper shadow（`var(--shadow)`）、表面明暗差。不得新增 hard drop shadow 或 neon glow。

**結構/尺寸：** padding、border-radius、min-height、font-size、line-height、grid/flex 佈局、media queries — **全部不動**。只改 color / background / border-color / box-shadow / backdrop-filter / 漸層色停。

---

## 範圍（19 檔）

僅修改以下 `*.module.css`。**不**改任何 `.tsx`（API 不變）、不改 `theme/`、不改 `shell/`（Deck/OverviewMode/SwipeHint 屬 P5）、不改任何 slide。

**Primitives（11）：** `Card` `Quote` `Talkbox` `Kicker` `CodeBlock` `Node` `ProductCard` `Credential` `DemoShot` `Tag` `SlideShell`

**Layouts（8）：** `Matrix` `CardGrid` `Steps` `Diagram` `TermRow` `SectionTitle` `TwoColumn` `FlowDiagram`

> 註：`SlideShell`（~21 字面值）與 `Card`（~10）是最重的兩個；其餘多為小改。`CardGrid` / `TwoColumn` 目前無色字面值，可能無需改（確認後略過）。

各檔內若已有 `[data-variant="light"]` / `[data-variant="paper"]` 區塊，一併套用對應規則（亮底用深墨藍 accent，與 P1 的 variant 一致）。

---

## Non-goals

- 不新增任何元件（P2b）。
- 不改任何 `.tsx`（行為/結構/API 不變）。
- 不碰 `shell/`（Deck、OverviewMode、SwipeHint、DeckProvider）→ P5。
- 不碰 slide `*.module.css` 或 slide `.tsx` → P4。
- 不碰 diagram/圖表 → P3。
- 不改 `theme/globals.css`（P1 已完成）。`theme/tokens.css` 僅做上方「實作中修正」所述的 light/paper variant 更正，不做其他改動。

---

## Verification

1. **客觀 grep（主要驗收）**：在 `packages/deck-kit/src/primitives` + `packages/deck-kit/src/layouts` 搜尋殘留霓虹/玻璃：
   ```bash
   grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30" packages/deck-kit/src/primitives packages/deck-kit/src/layouts
   ```
   預期：**無輸出**（0 筆）。冷白 `rgba(255,255,255` 亦應改為暖白；可另跑一次確認剩餘量為 0 或僅存合理白（理想 0）。
2. `pnpm -F deck-kit lint && pnpm -F deck-kit typecheck && pnpm -F deck-kit test` → 全通過（12 tests）。
3. `pnpm -F asgard-ai-agent-workshop build` → 無錯。
4. **視覺**：建一個臨時 kitchen-sink demo（暫時的 slide 或 story），把每個 primitive/layout 用 kami 暗色排出來，截圖確認無 cyan/玻璃殘留、暖調一致。驗證後移除該 demo（不留在 deck）。

## Acceptance criteria

- [ ] 上述 grep 回傳 0 筆（霓虹/玻璃字面值與 backdrop-filter 全清）。
- [ ] 冷白疊層 `rgba(255,255,255,…)` 已改暖白 `rgba(245,244,237,…)`。
- [ ] 所有元件的 `.tsx`、class 名稱、padding/radius/尺寸/media query 未動。
- [ ] light/paper variant 區塊（若有）已套對應暖調規則。
- [ ] typecheck / lint / test 通過；deck 可正常 boot。
- [ ] kitchen-sink demo 截圖確認後已移除。
