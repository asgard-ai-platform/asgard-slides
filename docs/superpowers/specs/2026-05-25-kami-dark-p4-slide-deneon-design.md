# kami × Asgard 暗色重設計 — P4：Slide 層 de-neon

- **Date:** 2026-05-25
- **Status:** Approved (design), pending plan
- **Scope:** de-neon `decks/asgard-ai-agent-workshop/src/slides/` 裡寫死霓虹/玻璃的 12 個 `*.module.css`

> 注：階段順序在此重排——P4（slide 收斂）先做，因為它對「線上 deck 貼近 kami」價值最高（13/12 張仍發 cyan 光的 slide）。P5（shell）、P3（圖表庫）之後。

---

## Program context

整體 5 階段見 P1 spec。已併入 `main`：P1（token）、P2a（de-neon 既有元件）、P2b（12 新元件）。本階段 P4 把 slide 層寫死的霓虹收掉，讓線上 deck 完全一致。

## P4 goal

把 deck 的 slide `*.module.css` 從寫死的「深色霓虹/玻璃」收成 kami 暗色。**做法與 P2a 完全相同**：套用同一套 de-neon 對應規則，保留所有結構/尺寸/排版，只換顏色與效果。**de-neon in place，不重構成 primitive。**

### 範圍（16 檔）

**含寫死霓虹的 12 檔（~97 hits）：** `01-opening` `02-speaker` `07-six-layer-stack` `100-resources` `12-harness-diagram` `14-term-diagram` `15-system-architecture` `16-from-architecture-to-components` `51-identity-chain` `57-plugin-to-harness-diagram` `86-asgard-product-stack` `99-thanks-qa`。

**僅含冷白疊層、無強烈霓虹的 4 檔（實作中由驗收 grep 抓出補上）：** `85-asgard-ecosystem` `101-qr-codes` `87-six-layers-to-asgard` `18-mcp-packaging`。這 4 檔最初的 neon-only 盤點漏掉，但 spec 驗收 grep 含 `rgba(255,255,255)`，故一併把冷白疊層改暖白。`101-qr-codes` 的 QR 卡底 `#fff` 改 `var(--ink)`（暖白，仍可掃描）。

（皆 `.module.css`。)其餘 1 個 slide module.css 已全乾淨，不動。不改任何 `.tsx`（本盤點顯示無 inline 寫死色）。

## De-neon 對應規則（與 P2a 同）

| 舊字面值 | 新值 |
|---|---|
| `rgba(6,182,212,a)` / `#06b6d4` cyan | `rgba(45,90,138,a)` / `var(--cyan)` |
| `rgba(34,211,238,a)` / `#22d3ee` cyan2 | `rgba(158,193,230,a)` / `var(--cyan2)` |
| `rgba(59,130,246,a)` blue | `rgba(45,90,138,a)` |
| `rgba(168,85,247,a)` purple | `rgba(140,132,168,a)` |
| `rgba(16,185,129,a)` green | `rgba(111,156,110,a)`（sage） |
| `rgba(255,255,255,a)` 冷白疊層 | `rgba(245,244,237,a)` 暖白 |
| `#fff`/`#ffffff` 文字 | `var(--ink)` |
| `rgba(5,8,18,a)` / `rgba(10,15,30,a)` / `rgba(1,7,10,a)` / `#030712` 舊深底 | `var(--card)` / `rgba(20,20,19,a)` |
| `#d7f7ee` 薄荷 | `var(--brand-on-dark)` |
| cyan/blue 發光 `box-shadow: 0 0 N rgba(neon…)` | 移除（或 `var(--shadow)`） |
| `backdrop-filter: blur(...)` | 移除 |
| 藍圖網格 / 掃描線等 neon 裝飾 pseudo-element | 移除 |

**Catch-all：** 任何其他寫死的 neon hex/rgba（飽和藍綠紫）→ 對應到最接近的 kami token（墨藍系或暖灰），暖調、低飽和。保留 alpha。**結構/尺寸/排版不動。**

> 已吃 `var(--cyan)`/`var(--cyan2)`/`var(--ink)` 等 token 的宣告在 P1 已自動變色，不需處理。

## Non-goals

- 不重構 slide 成 primitive（純 de-neon）。
- 不改 deck-kit、token、globals、shell。
- 不改 slide 內容/文字/結構。
- 不碰已乾淨的 5 個 module.css。

## Verification

1. **客觀 grep（主驗收）**：
   ```bash
   grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(1, ?7, ?10|#030712|rgba\(255, ?255, ?255" decks/asgard-ai-agent-workshop/src/slides/
   ```
   預期：**0 筆**。
2. `pnpm -F asgard-ai-agent-workshop typecheck && build` → 無錯。
3. `pnpm -F deck-kit test` → 12 passed（未受影響）。
4. **視覺**：controller 截圖數張代表性 slide（01 opening、07 six-layer-stack、15 system-architecture、其一 diagram slide）確認無 cyan/玻璃殘留、暖調一致。

## Acceptance criteria

- [ ] 上述 grep 回傳 0。
- [ ] 12 檔結構/尺寸未變，只換色/效果。
- [ ] deck typecheck/build 通過、可 boot。
- [ ] 視覺確認代表性 slide 為 kami 暗色。
