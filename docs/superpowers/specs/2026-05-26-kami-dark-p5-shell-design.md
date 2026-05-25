# kami × Asgard 暗色重設計 — P5：Shell UI de-neon

- **Date:** 2026-05-26
- **Status:** Approved (design), pending plan
- **Scope:** de-neon `packages/deck-kit/src/shell/` 的 3 個 `*.module.css`（Deck、OverviewMode、SwipeHint）

## Program context
最後一個 de-neon 階段。已併入 `main`：P1（token）、P2a（既有元件）、P2b（12 新元件）、P4（slide 層）。本階段把 shell chrome（carousel 導覽列、進度條、overview 總覽、swipe 提示）收成 kami 暗色。完成後整個 repo（token + 元件 + slide + shell）全為 kami 暗色。

> 剩下的 P3（完整圖表庫）是最後、最投機的階段，視需要再做。

## P5 goal
de-neon 3 個 shell CSS，保留所有結構/尺寸/動畫，只換顏色與效果。沿用 P2a 的對應規則，外加以下 shell 專屬決定：

1. **進度條**（`.progress`）：三色彩虹漸層 `green→cyan→amber` → 單一墨藍漸層 `var(--cyan)→var(--cyan2)`（kami 單一 accent）。
2. **導覽列 `.nav` 與 `.hint`（SwipeHint）**：移除 `backdrop-filter: blur`（kami 反玻璃擬態），改實心暖深底 + 墨藍邊。SwipeHint 的 cyan 發光 box-shadow 移除，改 `var(--shadow)`。
3. **原生 `<select>` 下拉選項 `.gotoSelect option`**：OS 原生彈出視窗在 macOS/iOS 為亮底，需深字亮底——保留亮色但改暖（`background: #faf9f5; color: #141413` 米紙/墨黑），不可用暗色（會看不見）。
4. **Overview active thumb**：綠色發光 → 墨藍 ring（`box-shadow: 0 0 0 1px var(--cyan2)`），去發光。
5. **per-theme thumb accent**（`.thumb[data-variant=...] .thumbAccent`）：保留 dark→ink-blue / light→sage / paper→muted-slate 的區分（token 已是去飽和暖調，作為 overview 導覽的視覺輔助）。此處理掉 P2a 延後的 OverviewMode `data-variant` 項目。

其餘比照 P2a 對應表：cyan/blue/green/purple 字面值 → 墨藍/sage/slate；冷白 `rgba(255,255,255,a)` → 暖白 `rgba(245,244,237,a)`；`#fff` 文字 → `var(--ink)`；舊深底 `rgba(5,*)` → `rgba(20,20,19,a)`；amber → ochre `rgba(201,162,75,a)`。結構/動畫/尺寸不動。

## Non-goals
- 不改 shell 的 `.tsx`（行為不變）、不改 token/globals/元件/slide。
- 不做 P3 圖表。

## Verification
1. grep（主驗收）：
   ```bash
   grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#67e8f9|#6ee7b7|#ddfaff|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(5, ?12, ?14|rgba\(10, ?15, ?30|rgba\(255, ?255, ?255|rgba\(245, ?158, ?11" packages/deck-kit/src/shell
   ```
   預期：0（注：`.gotoSelect option` 的 `#faf9f5`/`#141413` 為刻意亮色功能性彈窗，不在 neon 清單）。
2. `pnpm -F deck-kit lint && typecheck && test`（12）；`pnpm -F asgard-ai-agent-workshop build`。
3. 視覺：controller 截圖 overview 總覽（按 overview 鈕）+ 導覽列 + 一張 slide 的進度條，確認暖調墨藍、無 cyan/發光/玻璃。

## Acceptance criteria
- [ ] 上述 grep 回傳 0。
- [ ] 進度條單一墨藍；nav/SwipeHint 無 backdrop-filter、無 cyan 發光。
- [ ] `<select>` option 彈窗為米紙亮底深字（可讀）。
- [ ] overview active thumb 為墨藍 ring；per-theme accent 保留（muted）。
- [ ] 結構/動畫/尺寸未變；lint/typecheck/test/build 通過。
