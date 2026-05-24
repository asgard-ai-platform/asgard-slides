# kami × Asgard 暗色重設計 — P1：地基 Token

- **Date:** 2026-05-24
- **Status:** Approved (design), pending implementation plan
- **Scope of this spec:** Phase 1 only — `deck-kit` 的 `tokens.css` + `globals.css`

---

## Program context (5-phase decomposition)

把 `asgard-slides` 從現有的「深色霓虹 / 七彩 / 漸層發光」風格，收斂成 **kami 暗色**：暖炭黑底、單一墨藍主 accent、一組去飽和功能色、零發光、細暖邊框、編輯式留白——但**保留既有的 Space Grotesk 無襯線字體**（不導入襯線）。

整個改造拆成 5 個依序、各自可獨立 review 的階段：

| 階段 | 內容 | 狀態 |
|---|---|---|
| **P1 · 地基 token** | 重寫 `tokens.css` + `globals.css` 成 kami 暗色 | ← 本 spec |
| P2 · deck-kit 元件 | 重做 Card / Tag / Kicker；補上 kami 缺的 SectionHeader、Metric、GlanceGrid、CodeCard、Quote、Callout 等並從 barrel 匯出 | 待 P1 後 |
| P3 · 圖表 primitive | 移植 kami diagram（layer-stack、flowchart、timeline、architecture、state-machine、quadrant、bar/line/donut…）成 deck-kit React/SVG 元件 | 待 P2 後 |
| P4 · slide 收斂 | 掃過 17 個 `*.module.css` + 13 張寫死 cyan/發光/玻璃卡的 slide，改吃 token 與新 primitive | 待 P2/P3 後 |
| P5 · 站台 + shell | site-builder landing page、OverviewMode / 導覽 / 進度條 套 kami 暗色 | 最後 |

### Locked decisions（brainstorm 共識，後續階段沿用）

1. **方向**：kami 暗色融合（不是純米色，也不是維持現狀）。
2. **字體**：保留 Space Grotesk，**不**導入襯線。kami 的精神改以「色彩克制 + 暖調 + 單一 accent + 去發光 + 細邊框」體現。
3. **Accent**：墨藍 `#2D5A8A` 為唯一主 accent；另保留一組**去飽和、暖調**的功能色（good/warn/bad）供 diagram 分辨語義。
4. **執行取向**：token 優先、分階段；每階段結束 deck 仍可正常 boot。

---

## P1 goal

重寫 `deck-kit` 的兩個 theme 檔，建立 kami 暗色的 token 詞彙表。**核心架構原則：保留所有既有 CSS 變數名稱，只更換值。** 這樣所有吃 `var(--…)` 的 slide（約 100 張）會自動換色，不需逐張修改。

涉及檔案，僅此兩個：

- `packages/deck-kit/src/theme/tokens.css`
- `packages/deck-kit/src/theme/globals.css`

---

## tokens.css — 詳細規格

### `:root`（暗色，預設）

保留所有既有變數名稱，值更換如下。新增變數列在最後。

```css
:root {
  /* color — base (warm charcoal, no cool tones) */
  --bg: #141413;                        /* was #050812 — kami deep-dark */
  --bg2: #1a1a17;                       /* was #0a0e1a */
  --ink: #f5f4ed;                       /* was #ffffff — warm parchment-white */
  --muted: #b8b5ab;                     /* was #9ca3af — warm gray */
  --line: rgba(245, 244, 237, 0.10);    /* was rgba(255,255,255,.10) — warm hairline */

  /* color — surfaces */
  --card: #1f1f1d;                      /* was #0a0f1e — warm surface */
  --panel: rgba(245, 244, 237, 0.035);  /* was rgba(255,255,255,.025) */
  --panel2: rgba(245, 244, 237, 0.06);  /* was rgba(255,255,255,.045) */

  /* color — accents: single ink-blue identity + de-saturated functional */
  --green:  #6f9c6e;   /* was #10B981 — muted sage  (good) */
  --cyan:   #2D5A8A;   /* was #06b6d4 — folded into ink-blue */
  --cyan2:  #9ec1e6;   /* was #22d3ee — bright blue for dark surfaces (links/emphasis) */
  --blue:   #2D5A8A;   /* was #3B82F6 — ink-blue */
  --purple: #8c84a8;   /* was #A855F7 — muted violet */
  --amber:  #c9a24b;   /* was #F59E0B — muted ochre (warn) */
  --rose:   #c47a72;   /* was #EF4444 — muted terracotta (bad) */
  --pink:   #b08aa0;   /* was #EC4899 — muted mauve */

  /* color — paper variant base (kami parchment) */
  --paper: #f5f4ed;                     /* was #07111f */
  --paper-ink: #141413;                 /* was #ffffff */

  /* effects — kami whisper shadow, no hard drop / no glow */
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.28);   /* was 0 30px 90px rgba(0,0,0,.48) */

  /* type — UNCHANGED (keep Space Grotesk) */
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, -apple-system,
               BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "PingFang TC",
               "Microsoft JhengHei", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
               "Liberation Mono", monospace;

  /* --- NEW: canonical kami names for P2+ components / diagrams --- */
  --brand: #2D5A8A;                     /* the single chromatic accent */
  --brand-bright: #7ba3cf;
  --brand-on-dark: #9ec1e6;             /* accent text on charcoal */
  --brand-tint: rgba(45, 90, 138, 0.18);
  --good: var(--green);
  --warn: var(--amber);
  --bad:  var(--rose);
}
```

**Rationale 註記：**
- `--cyan` 與 `--blue` 都指向 `#2D5A8A`：把現有 slide 的 cyan 身分整批併入單一墨藍，達成 kami 的「單一 accent」。`--cyan2` 保留為較亮的 `#9ec1e6`，給暗底上的連結與強調用（對比足夠）。
- 功能色（green/amber/rose/purple/pink）全部換成**暖調、低飽和**版本，落在暖炭黑上不刺眼、不搶編輯調性，但仍可分辨 good/warn/bad。
- 新增的 `--brand*` 與 `--good/--warn/--bad` 是給後續階段的新元件用的語義別名；P1 先定義好，現階段不一定有人用。

### `light` / `paper` variant（kami 米紙，bonus）

現有檔案有 `[data-variant="light"]` 與 `[data-variant="paper"]` 兩個 block。改成 kami 米紙亮色。亮底上必須把「暗底專用的亮藍」改回深墨藍 `#1B365D`，否則 `#9ec1e6` 在米紙上幾乎看不見。

```css
[data-variant="light"] {
  --bg: #f5f4ed;
  --bg2: #faf9f5;
  --ink: #141413;
  --muted: #504e49;
  --line: #e8e6dc;
  --card: #faf9f5;
  --panel: rgba(20, 20, 19, 0.03);
  --panel2: rgba(20, 20, 19, 0.05);
  --cyan2: #1B365D;          /* on parchment, emphasis = dark ink-blue */
  --brand-on-dark: #1B365D;
}

[data-variant="paper"] {
  /* parchment page using the same kami light surfaces */
  --bg: var(--paper);        /* #f5f4ed */
  --bg2: #faf9f5;
  --ink: var(--paper-ink);   /* #141413 */
  --muted: #504e49;
  --line: #e8e6dc;
  --card: #faf9f5;
  --panel: rgba(20, 20, 19, 0.03);
  --panel2: rgba(20, 20, 19, 0.05);
  --cyan2: #1B365D;
  --brand-on-dark: #1B365D;
}
```

> 註：亮色 variant 為 bonus，主要交付物是暗色 `:root`。但因為新的亮藍 accent 在亮底會失效，這幾行 remap 一併做，避免 variant 壞掉。

---

## globals.css — 詳細規格

### 1. 標題去發光（最關鍵的視覺改動）

現有 `h1, h2` 套了漸層 clip 文字 + cyan drop-shadow 光暈：

```css
/* REMOVE this block */
h1, h2 {
  background: linear-gradient(90deg, #fff 0%, #dbeafe 58%, #67e8f9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 26px rgba(34, 211, 238, .12));
}
```

改為純色：

```css
h1, h2 { color: var(--ink); }
```

- **字重維持不變**：h1 `860`、h2 `820`、h3 `780`（保留 Asgard 氣勢；字重微調非本階段範圍）。
- h1/h2/h3 其餘屬性（size clamp、line-height、letter-spacing、max-width）**不變**。

### 2. body 背景去七彩

現有 body 背景是三道彩色 radial glow（cyan / blue / purple）+ 冷色漸層：

```css
/* REPLACE */
body {
  background:
    radial-gradient(circle at -8% -8%, rgba(59,130,246,.16), transparent 30%),
    radial-gradient(circle at 100% 0%,  rgba(34,211,238,.12), transparent 28%),
    radial-gradient(circle at 6% 100%,  rgba(168,85,247,.12), transparent 32%),
    linear-gradient(135deg, #050812 0%, #0a0e1a 54%, #050812 100%);
}
```

改為單一墨藍極淡光暈 + 暖炭黑漸層（保留一點舞台景深，但收斂為單色）：

```css
body {
  background:
    radial-gradient(circle at 12% -10%, rgba(45,90,138,.10), transparent 36%),
    radial-gradient(circle at 100% 4%,  rgba(45,90,138,.06), transparent 30%),
    linear-gradient(140deg, #141413 0%, #1a1a17 56%, #141413 100%);
}
```

### 3. 連結

`a { color: var(--cyan2); }` **不需改**——`--cyan2` 已 remap 成 `#9ec1e6`，在暗底對比足夠。hover 底線行為保留。

### 4. Print 背景

```css
/* was: @media print { body { overflow: visible; background: white; } } */
@media print { body { overflow: visible; background: var(--bg); } }
```

讓 PDF / 投影匯出維持暗色一致（避免暗色 deck 印成白底）。

### 5. 其餘

`@font-face`（Space Grotesk）、box-sizing、html/body 基本屬性、`@media (max-width:900px)` 的標題縮放——**全部不變**。

---

## Non-goals（明確排除，留給後續階段）

- **不**動任何 `*.module.css`（17 個）或 slide 內寫死的色票 / 玻璃卡 / 發光（`rgba(6,182,212,…)` 等共數十處）→ P4。
- **不**新增或改寫任何 React 元件 / primitive → P2。
- **不**做任何 SVG / 圖表 → P3。
- **不**動 `tools/site-builder`（landing page 有自己的 `:root`）→ P5。
- **不**改字體、不調標題字重。

---

## 預期的中間狀態（不是 bug）

P1 完成後：

- 吃 `var(--…)` 的部分（標題、連結、`--muted` 文字、用到 token 的 primitive 如 ProductCard 的 `--accent`）→ **立刻**變 kami 暗色。
- 13 張寫死 `rgba(6,182,212,…)` cyan / 發光 / 玻璃卡的 slide → **仍會發 cyan 光、與新底色不一致**。這是預期的，會在 P4 收斂。

---

## Verification

實作完成後依序確認：

1. `pnpm -F deck-kit typecheck` 與 `pnpm -F deck-kit lint` 通過（CSS 改動不應影響，但確認 barrel 仍正常）。
2. `pnpm -F asgard-ai-agent-workshop dev` 能正常啟動、deck 可 boot、可左右切 slide（SSR-safe 不受影響）。
3. 目視開場 slide（01）：標題為純暖白無發光、底色為暖炭黑、kicker/卡片色調為墨藍系。
4. 切 `data-variant` 到 light/paper：底變米紙、文字變深、強調色為深墨藍且可見。
5. 確認 13 張寫死 cyan 的 slide 仍會發光（符合預期中間狀態，非迴歸）。

## Acceptance criteria

- [ ] `tokens.css` 所有既有變數名稱保留、值依上表更新；新增 `--brand*`、`--good/--warn/--bad`。
- [ ] `light`/`paper` variant 改為 kami 米紙且亮藍 accent 已 remap 為深墨藍。
- [ ] `globals.css` 標題去漸層/去 drop-shadow、body 去七彩 glow、print 背景改 `var(--bg)`。
- [ ] 字體、字重、heading 尺寸、RWD 斷點全部未動。
- [ ] deck 可正常 boot；typecheck / lint 通過。
