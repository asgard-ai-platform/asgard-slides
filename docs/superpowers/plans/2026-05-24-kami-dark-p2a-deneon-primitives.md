# kami-dark P2a — De-neon Existing Components Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** De-neon deck-kit's 15 existing component `*.module.css` files (11 primitives + 8 layouts, of which 15 have neon/glass literals) into the kami-dark look — warm surfaces, ink-blue accent, hairline borders, no glow/glass/blur — without changing any `.tsx`, class name, or sizing.

**Architecture:** Pure CSS. Each task replaces a file (or small group) with kami-dark content: hardcoded neon (`rgba(6,182,212…)` cyan, blue, purple, mint) → ink-blue / warm tokens; cool-white overlays (`rgba(255,255,255…)`) → warm `var(--panel)`/`var(--line)`; old dark backgrounds → `var(--card)`; cyan glows + `backdrop-filter` blur + the SlideShell blueprint-grid/scanline decorations → dropped. Tokens (`--cyan`,`--cyan2`,`--brand-tint`,`--panel`,`--line`,`--ink`,`--muted`,`--card`,`--shadow`) were already remapped to kami-dark in P1, so referencing them is correct.

**Tech Stack:** CSS Modules, React, Vite, pnpm workspace, deck-kit.

**Spec:** `docs/superpowers/specs/2026-05-24-kami-dark-p2a-deneon-primitives-design.md`

**Verification note (TDD adaptation):** CSS values have no unit test. The objective test per task is a **grep that must return 0 neon/glass hits in the edited file(s)**, plus `pnpm -F deck-kit lint/typecheck/test` as a regression guard. Final visual confirmation is done by the controller screenshotting existing slides that already use these components (the deck has 101 slides exercising them) — no temporary demo slide is added (that would break the sequential-prefix discovery contract).

**Files already clean (NOT touched):** `layouts/CardGrid.module.css`, `layouts/SectionTitle.module.css`, `layouts/TwoColumn.module.css`, `layouts/FlowDiagram.module.css` (0 neon hits — already token-driven).

---

## Task 1: Card

**Files:** Modify `packages/deck-kit/src/primitives/Card.module.css`

- [ ] **Step 1: Replace the entire file with:**

```css
.card {
  position: relative;
  min-height: 104px;
  padding: 16px 17px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--panel);
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  opacity: 0.5;
}

.strong { background: var(--panel2); border-color: rgba(45, 90, 138, 0.35); }
.card > * { position: relative; z-index: 1; }
.card p { margin-top: 9px; color: var(--muted); font-size: 16px; line-height: 1.34; }

[data-variant="light"] .card,
[data-variant="paper"] .card {
  border-color: var(--line);
  background: var(--panel);
  box-shadow: var(--shadow);
}
```

(Dropped: `backdrop-filter: blur(12px)`, the cyan glow `box-shadow`, the white glass gradients. The `::before` accent bar keeps `var(--cyan)` — already ink-blue after P1.)

- [ ] **Step 2: Verify the file is neon-free**

Run: `grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(255, ?255, ?255|#fff|backdrop-filter" packages/deck-kit/src/primitives/Card.module.css`
Expected: no output.

- [ ] **Step 3: Lint guard**

Run: `pnpm -F deck-kit lint`
Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add packages/deck-kit/src/primitives/Card.module.css
git commit -m "style(deck-kit): de-neon Card to kami-dark

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: SlideShell

**Files:** Modify `packages/deck-kit/src/primitives/SlideShell.module.css`

The slide frame carries three cyberpunk decorations beyond color: a tri-color radial glow background, a blueprint dot-grid (`.slide::before`), and a scanline (`.slide::after`). Kami has no equivalent for the grid/scanline — **remove those two pseudo-element rules entirely**. Unify all three theme backgrounds (`.slide`, `[data-variant="light"]`, `[data-variant="paper"]`) to one warm kami surface (the reference deck is effectively dark-only; the per-theme neon glows are not worth preserving). Keep all sizing, the `@media` blocks, and the `box-shadow: var(--shadow)`.

- [ ] **Step 1: Replace the entire file with:**

```css
.slide {
  /* Always rendered (carousel layout shows one slot at a time via translate). */
  position: relative;
  width: min(1280px, calc(100vw - 48px));
  aspect-ratio: 16 / 9;
  max-height: calc(100vh - 48px);
  overflow: hidden;
  padding: 42px 58px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background:
    radial-gradient(circle at 15% 8%, rgba(45, 90, 138, .10), transparent 30%),
    linear-gradient(135deg, var(--bg2), var(--bg));
  box-shadow: var(--shadow);
}

.slide > * { position: relative; z-index: 1; }

.slide[data-variant="light"],
.slide[data-variant="paper"] {
  background:
    radial-gradient(circle at 15% 8%, rgba(45, 90, 138, .10), transparent 30%),
    linear-gradient(135deg, var(--bg2), var(--bg));
  color: var(--ink);
  border-color: var(--line);
}

.slideNo {
  position: absolute;
  right: 34px;
  bottom: 24px;
  color: rgba(245, 244, 237, .42);
  font: 13px var(--font-mono);
}

/* Mobile / portrait: drop the 16:9 aspect-ratio, let the slot own scroll. */
@media (max-width: 900px) {
  .slide {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    max-height: none;
    aspect-ratio: auto;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
    padding: 28px 18px 80px;
    /* IMPORTANT: do NOT set overflow-y here. The carousel slot owns
       the vertical scroll on mobile. Two nested scroll containers
       (slide + slot) make iOS Safari take two finger gestures to
       decide which one scrolls — visible as "scroll only works on
       the second touch". */
  }
  .slideNo {
    right: 16px;
    bottom: 12px;
    font-size: 11px;
  }
}

@media print {
  .slide {
    display: block !important;
    width: 1280px;
    height: 720px;
    max-height: none;
    aspect-ratio: auto;
    page-break-after: always;
    border-radius: 0;
    box-shadow: none;
  }
}
```

(Removed: `.slide::before` blueprint grid, `.slide::after` scanline, all blue/cyan/purple/green radial glows. `data-variant="light"/"paper"` now use `var(--ink)` for text — safe because their background is the dark warm surface, and these per-slide theme backgrounds are unified to kami-dark.)

- [ ] **Step 2: Verify neon-free**

Run: `grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|rgba\(255, ?255, ?255|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|#fff|backdrop-filter" packages/deck-kit/src/primitives/SlideShell.module.css`
Expected: no output.

- [ ] **Step 3: Lint guard**

Run: `pnpm -F deck-kit lint`
Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add packages/deck-kit/src/primitives/SlideShell.module.css
git commit -m "style(deck-kit): de-neon SlideShell, drop blueprint grid + scanline

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Quote + Talkbox

**Files:** Modify `packages/deck-kit/src/primitives/Quote.module.css`, `packages/deck-kit/src/primitives/Talkbox.module.css`

- [ ] **Step 1: Replace `Quote.module.css` with:**

```css
.quote {
  margin-top: 20px;
  padding: 17px 21px;
  border: 1px solid var(--line);
  border-left: 5px solid var(--cyan);
  border-radius: 16px;
  background: var(--panel);
  font-size: 25px;
  line-height: 1.24;
  font-weight: 760;
}

.compact { margin-top: 14px; padding: 13px 18px; font-size: 23px; line-height: 1.18; }

[data-variant="light"] .quote, [data-variant="paper"] .quote {
  background: var(--panel);
  color: var(--ink);
}
```

- [ ] **Step 2: Replace `Talkbox.module.css` with:**

```css
.talkbox {
  margin-top: 14px;
  padding: 12px 15px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

.talkbox b {
  display: block;
  margin-bottom: 6px;
  color: var(--cyan2);
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.talkbox p {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.34;
}

.talkbox ul {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.32;
}

.talkbox li { margin: 4px 0; }

.compact { margin-top: 10px; padding: 10px 12px; }
.compact p, .compact ul { font-size: 15px; line-height: 1.25; }
```

- [ ] **Step 3: Verify both neon-free**

Run: `grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(255, ?255, ?255|#fff|backdrop-filter" packages/deck-kit/src/primitives/Quote.module.css packages/deck-kit/src/primitives/Talkbox.module.css`
Expected: no output.

- [ ] **Step 4: Lint guard** — Run: `pnpm -F deck-kit lint` → pass.

- [ ] **Step 5: Commit**

```bash
git add packages/deck-kit/src/primitives/Quote.module.css packages/deck-kit/src/primitives/Talkbox.module.css
git commit -m "style(deck-kit): de-neon Quote + Talkbox to kami-dark

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Kicker + Tag

**Files:** Modify `packages/deck-kit/src/primitives/Kicker.module.css`, `packages/deck-kit/src/primitives/Tag.module.css`

- [ ] **Step 1: Replace `Kicker.module.css` with:**

```css
.kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 30px;
  padding: 6px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--cyan2);
  background: var(--brand-tint);
  font-size: 14px;
  font-weight: 760;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.kicker[data-layer]::after {
  content: attr(data-layer);
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  padding: 4px 9px;
  border-left: 1px solid var(--line);
  color: var(--brand-on-dark);
  background: var(--panel);
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0;
  text-transform: none;
  white-space: nowrap;
}
```

(Dropped `backdrop-filter: blur(10px)`; mint `#d7f7ee` → `var(--brand-on-dark)`.)

- [ ] **Step 2: Replace `Tag.module.css` with:**

```css
.tag {
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--brand-tint);
  color: var(--cyan2);
  font: 760 13px var(--font-mono);
}
```

- [ ] **Step 3: Verify both neon-free**

Run: `grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(255, ?255, ?255|#d7f7ee|#fff|backdrop-filter" packages/deck-kit/src/primitives/Kicker.module.css packages/deck-kit/src/primitives/Tag.module.css`
Expected: no output.

- [ ] **Step 4: Lint guard** — Run: `pnpm -F deck-kit lint` → pass.

- [ ] **Step 5: Commit**

```bash
git add packages/deck-kit/src/primitives/Kicker.module.css packages/deck-kit/src/primitives/Tag.module.css
git commit -m "style(deck-kit): de-neon Kicker + Tag to kami-dark

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: CodeBlock + Node + Credential + DemoShot + ProductCard

**Files:** Modify the five `packages/deck-kit/src/primitives/{CodeBlock,Node,Credential,DemoShot,ProductCard}.module.css`

- [ ] **Step 1: Replace `CodeBlock.module.css` with:**

```css
.code {
  margin-top: 18px;
  padding: 15px 17px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--card);
  color: var(--ink);
  font: 14px/1.32 var(--font-mono);
  white-space: pre-wrap;
}
```

(border `rgba(102,217,239,.24)` → `var(--line)`; bg `rgba(1,7,10,.64)` → `var(--card)`; dropped cyan glow; text `#d7f7ee` → `var(--ink)`.)

- [ ] **Step 2: Replace `Node.module.css` with:**

```css
.node {
  min-height: 94px;
  display: grid;
  align-content: center;
  gap: 7px;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--panel);
}

.node b { color: var(--cyan2); font-size: 18px; line-height: 1.12; }
.node span { color: var(--muted); font-size: 14px; line-height: 1.25; }
```

- [ ] **Step 3: Replace `Credential.module.css` with:**

```css
.credential {
  padding: 13px 15px;
  border-left: 3px solid var(--cyan);
  background: var(--panel);
  border-radius: 10px;
  color: var(--ink);
  font-size: 17px;
  line-height: 1.36;
}
```

- [ ] **Step 4: Replace `DemoShot.module.css` with:**

```css
.demoShot {
  display: block;
  width: 100%;
  max-height: 405px;
  margin-top: 16px;
  object-fit: contain;
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
  background: var(--card);
}

.compact { width: auto; height: 300px; max-width: 100%; max-height: none; margin-left: auto; margin-right: auto; }
.large   { width: auto; height: 470px; max-width: 100%; max-height: none; margin: 14px auto 0; }
.medium  { width: auto; height: 420px; max-width: 100%; max-height: none; margin: 14px auto 0; }

.caption { margin-top: 8px; color: var(--muted); font-size: 14px; line-height: 1.25; }
```

- [ ] **Step 5: Replace `ProductCard.module.css` with:**

```css
.productCard {
  --accent: var(--cyan);
}

.productCard::before {
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.72;
}

.productHead {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}

.productIcon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  flex: 0 0 auto;
  border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
  border-radius: 16px;
  background: var(--panel2);
}

.productIcon img { width: 36px; height: 36px; object-fit: contain; }

.odin       { --accent: var(--green); }
.mimir      { --accent: var(--rose); }
.sindri     { --accent: var(--purple); }
.heimdall   { --accent: var(--amber); }
.yggdrasil  { --accent: var(--green); }
.asgard     { --accent: var(--blue); }
```

(bg `rgba(255,255,255,.055)` → `var(--panel2)`; dropped the `box-shadow` accent glow on `.productIcon` per kami "no glow". The per-product `--accent` mappings already resolve to the muted P1 functional palette.)

- [ ] **Step 6: Verify all five neon-free**

Run: `grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(102, ?217, ?239|rgba\(1, ?7, ?10|rgba\(255, ?255, ?255|#030712|#d7f7ee|#fff|backdrop-filter" packages/deck-kit/src/primitives/CodeBlock.module.css packages/deck-kit/src/primitives/Node.module.css packages/deck-kit/src/primitives/Credential.module.css packages/deck-kit/src/primitives/DemoShot.module.css packages/deck-kit/src/primitives/ProductCard.module.css`
Expected: no output.

- [ ] **Step 7: Lint guard** — Run: `pnpm -F deck-kit lint` → pass.

- [ ] **Step 8: Commit**

```bash
git add packages/deck-kit/src/primitives/CodeBlock.module.css packages/deck-kit/src/primitives/Node.module.css packages/deck-kit/src/primitives/Credential.module.css packages/deck-kit/src/primitives/DemoShot.module.css packages/deck-kit/src/primitives/ProductCard.module.css
git commit -m "style(deck-kit): de-neon CodeBlock/Node/Credential/DemoShot/ProductCard

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Layouts — Matrix + Steps + Diagram + TermRow

**Files:** Modify `packages/deck-kit/src/layouts/{Matrix,Steps,Diagram,TermRow}.module.css`

- [ ] **Step 1: Replace `Matrix.module.css` with:**

```css
.matrix {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
}

.matrix th, .matrix td {
  padding: 10px 12px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

.matrix th {
  color: var(--cyan2);
  background: var(--brand-tint);
  font-size: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.matrix td {
  color: var(--muted);
  background: var(--panel);
}

.matrix tr:last-child td { border-bottom: 0; }
.matrix th:last-child, .matrix td:last-child { border-right: 0; }

.compact { margin-top: 18px; font-size: 14px; }
.compact th, .compact td { padding: 8px 10px; }

@media (max-width: 900px) {
  /* Tables don't shrink gracefully on narrow viewports;
     wrap with horizontal scroll instead of compressing cells. */
  .matrix {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 13px;
  }
  .matrix th, .matrix td { padding: 7px 8px; }
}
```

- [ ] **Step 2: Replace `Steps.module.css` with:**

```css
.steps { display: grid; grid-template-columns: repeat(6, 1fr); gap: 9px; margin-top: 24px; }

@media (max-width: 900px) {
  .steps { grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px; }
}

.step {
  min-height: 88px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel2);
}

.step b { display: block; color: var(--amber); font: 850 19px var(--font-mono); }
.step span { display: block; margin-top: 7px; font-size: 14px; line-height: 1.22; font-weight: 680; }
```

- [ ] **Step 3: Replace `Diagram.module.css` with:**

```css
.diagram {
  position: relative;
  margin-top: 20px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--panel);
  overflow: hidden;
}

.diagram::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan2), transparent);
  opacity: 0.45;
}
```

(Dropped `backdrop-filter: blur(12px)` and the blue glow `box-shadow`; glass gradient → `var(--panel)`.)

- [ ] **Step 4: Replace `TermRow.module.css` with:**

```css
.termStack {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 20px;
}

.termRow {
  display: grid;
  grid-template-columns: 190px 1fr 1.15fr;
  gap: 12px;
  align-items: stretch;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

.termRow b { display: flex; align-items: center; color: var(--cyan2); font-size: 20px; }
.termRow p { color: var(--ink); font-size: 15px; line-height: 1.28; }
.termRow small { display: block; color: var(--muted); font-size: 13px; line-height: 1.26; }

@media (max-width: 900px) {
  .termRow {
    grid-template-columns: 1fr;
    gap: 6px;
  }
  .termRow b { font-size: 18px; }
  .termRow p { font-size: 14px; }
  .termRow small { font-size: 12px; }
}
```

- [ ] **Step 5: Verify all four neon-free**

Run: `grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(255, ?255, ?255|#fff|backdrop-filter" packages/deck-kit/src/layouts/Matrix.module.css packages/deck-kit/src/layouts/Steps.module.css packages/deck-kit/src/layouts/Diagram.module.css packages/deck-kit/src/layouts/TermRow.module.css`
Expected: no output.

- [ ] **Step 6: Lint guard** — Run: `pnpm -F deck-kit lint` → pass.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/layouts/Matrix.module.css packages/deck-kit/src/layouts/Steps.module.css packages/deck-kit/src/layouts/Diagram.module.css packages/deck-kit/src/layouts/TermRow.module.css
git commit -m "style(deck-kit): de-neon Matrix/Steps/Diagram/TermRow layouts

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Whole-package verification

**Files:** none (verification + final guard)

- [ ] **Step 1: Repo-wide neon grep across primitives + layouts**

Run:
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|rgba\(102, ?217, ?239|rgba\(1, ?7, ?10|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(255, ?255, ?255|#030712|#d7f7ee|#fff|backdrop-filter" packages/deck-kit/src/primitives packages/deck-kit/src/layouts
```
Expected: **no output** (zero neon/glass/cool-white literals remain).

- [ ] **Step 2: Full regression guard + build**

Run: `pnpm -F deck-kit lint && pnpm -F deck-kit typecheck && pnpm -F deck-kit test && pnpm -F asgard-ai-agent-workshop build`
Expected: lint clean, typecheck clean, 12 tests pass, build succeeds.

- [ ] **Step 3: Report DONE for controller visual check**

Report status DONE. The controller will run the dev server and screenshot a few existing slides that exercise these components (e.g. slide 06 glossary uses TermRow, a Matrix slide, a Quote slide) to confirm the kami-dark look with no cyan/glass residue. No code change in this step.

(No commit — Step 1/2 produced no file changes; the per-task commits in Tasks 1-6 are the deliverable.)

---

## Self-review (completed by plan author)

**Spec coverage:**
- De-neon mapping (cyan/blue/purple/cyan2/cool-white/old-dark/mint/glow/blur) → applied across Tasks 1-6 with full file content. ✓
- 19-file scope; 4 already-clean files explicitly excluded; 15 edited across Tasks 1-6. ✓
- "API/class/sizing unchanged, only color/effect" → every replacement preserves selectors, padding, radius, font-size, grid, media queries. ✓
- light/paper variant blocks handled (Card, Quote, SlideShell). ✓
- Objective grep acceptance → per-task greps + Task 7 repo-wide grep. ✓
- lint/typecheck/test/build guard → Task 7. ✓
- Visual confirmation via existing slides (replaces spec's temp-demo idea; equivalent intent, avoids breaking sequential-prefix discovery) → Task 7 Step 3. ✓

**Placeholder scan:** No TBD/TODO; every CSS change is full file content. ✓

**Type/name consistency:** Tokens referenced (`--line`, `--panel`, `--panel2`, `--brand-tint`, `--brand-on-dark`, `--cyan`, `--cyan2`, `--ink`, `--muted`, `--card`, `--shadow`, `--bg`, `--bg2`) all exist in `tokens.css` after P1. Class names (`.card`, `.strong`, `.slide`, `.slideNo`, `.quote`, `.compact`, `.talkbox`, `.kicker`, `.tag`, `.code`, `.node`, `.credential`, `.demoShot`, `.caption`, `.productCard`, `.productIcon`, `.matrix`, `.step`, `.diagram`, `.termRow`, `.termStack`) are unchanged from the originals. ✓
