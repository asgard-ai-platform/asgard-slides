# kami-dark P5 — Shell UI De-neon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** De-neon the 3 shell `*.module.css` files (Deck nav/progress, OverviewMode, SwipeHint) to kami-dark, completing the repo-wide conversion.

**Architecture:** Pure CSS, full-file replacements. Same de-neon discipline as P2a/P4 plus shell-specific decisions (single-hue progress bar, drop glassmorphism blur on floating chrome, keep native `<select>` popup light-but-warm, ink-blue active-thumb ring, keep muted per-theme thumb accents). Structure/animations/sizing unchanged. No `.tsx` changes.

**Tech Stack:** CSS Modules, deck-kit, Vite, pnpm.

**Spec:** `docs/superpowers/specs/2026-05-26-kami-dark-p5-shell-design.md`

**Verification (TDD adaptation):** grep returns 0 neon + `pnpm -F deck-kit lint/typecheck/test` + controller visual check.

---

## Task 1: Deck.module.css

**Files:** Modify `packages/deck-kit/src/shell/Deck.module.css`

- [ ] **Step 1: Replace the entire file with:**

```css
.deck {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Carousel track: all slides live in a horizontal strip. The active slide is
   shown by translating the strip by -index * 100vw (+ drag offset during a
   touch swipe). transition is on by default so keyboard / click nav and
   snap-back also animate; .dragging disables it so the track follows the
   finger 1:1 during an active touch drag. */
.track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.track.dragging { transition: none; }

.slot {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  /* Browser handles vertical pan; JS handles horizontal swipe.
     This stops the touch listener from interfering with page scroll. */
  touch-action: pan-y;
  /* Skip layout / paint for off-screen slots while still keeping them
     mounted (needed for fast prev/next without a remount). */
  content-visibility: auto;
  contain-intrinsic-size: 100vw 100vh;
}

.progress {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 0;
  background: linear-gradient(90deg, var(--cyan), var(--cyan2));
  z-index: 60;
  transition: width 220ms ease;
}

.nav {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(20, 20, 19, 0.92);
  color: var(--muted);
  font: 13px var(--font-mono);
  z-index: 50;
}

.nav button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--panel2);
  color: var(--ink);
  font: 700 16px var(--font-mono);
  cursor: pointer;
}

.overviewBtn {
  margin-left: 6px;
  font-size: 14px !important;
}

.gotoSelect {
  /* 16px+ on the focused element prevents iOS Safari auto-zoom. */
  appearance: none;
  -webkit-appearance: none;
  max-width: 180px;
  padding: 4px 22px 4px 10px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background-color: var(--panel2);
  color: var(--ink);
  font: 16px var(--font-mono);
  cursor: pointer;
  text-overflow: ellipsis;
  /* small dropdown chevron */
  background-image: linear-gradient(45deg, transparent 50%, rgba(245, 244, 237, .6) 50%),
                    linear-gradient(135deg, rgba(245, 244, 237, .6) 50%, transparent 50%);
  background-position: calc(100% - 12px) center, calc(100% - 7px) center;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
}

.gotoSelect:hover { border-color: var(--cyan); }
.gotoSelect:focus { outline: none; border-color: var(--cyan); background-color: var(--brand-tint); }

.gotoSelect option {
  /* options inherit color from <select>; force readable colors against
     OS native popup background which on macOS/iOS is light. */
  background: #faf9f5;
  color: #141413;
  font: 14px var(--font-mono);
}

.gotoBuffer {
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid var(--amber);
  border-radius: 6px;
  background: rgba(201, 162, 75, 0.12);
  color: var(--amber);
  font: 700 13px var(--font-mono);
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .slot {
    padding: 0;
    /* Slide content can exceed 100vh on mobile (long-form text);
       slot owns the vertical scroll so the deck's overflow:hidden
       doesn't clip it. */
    overflow-y: auto;
    overflow-x: hidden;
    align-items: start;
  }
  .nav {
    bottom: 10px;
    padding: 6px 10px;
    font-size: 11px;
  }
  .nav button {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}

@media print {
  .deck { width: auto; height: auto; overflow: visible; }
  .track { display: block; transform: none !important; transition: none; }
  .slot {
    display: block;
    width: auto;
    height: auto;
    padding: 0;
    page-break-after: always;
    content-visibility: visible;
  }
  .nav, .progress { display: none !important; }
}
```

- [ ] **Step 2: Verify neon-free** — Run:
```bash
grep -nE "rgba\(255, ?255, ?255|rgba\(5, ?12, ?14|rgba\(6, ?182, ?212|rgba\(245, ?158, ?11|#050812|backdrop-filter|#fff" packages/deck-kit/src/shell/Deck.module.css
```
Expected: no output. (The `#faf9f5`/`#141413` in `.gotoSelect option` are the intentional light native-popup colors and are not in this pattern.)

- [ ] **Step 3: Lint** — `pnpm -F deck-kit lint` → pass.

- [ ] **Step 4: Commit**
```bash
git add packages/deck-kit/src/shell/Deck.module.css
git commit -m "style(deck-kit): de-neon Deck shell — single-hue progress, warm nav

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: OverviewMode.module.css

**Files:** Modify `packages/deck-kit/src/shell/OverviewMode.module.css`

- [ ] **Step 1: Replace the entire file with:**

```css
.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(20, 20, 19, 0.97);
  overflow-y: auto;
  padding: 24px 24px 80px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  color: var(--ink);
}

.title {
  font-size: 18px;
  font-weight: 800;
}

.hint {
  font: 13px var(--font-mono);
  color: var(--muted);
}

.closeBtn {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel2);
  color: var(--ink);
  font: 700 14px var(--font-mono);
  padding: 6px 12px;
  cursor: pointer;
}

.chapter {
  margin-bottom: 28px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

.chapterActive {
  border-color: rgba(45, 90, 138, 0.4);
  background: rgba(45, 90, 138, 0.06);
}

.chapterHeader {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}

.chapterNum {
  color: var(--cyan2);
  font: 800 12px var(--font-mono);
  letter-spacing: 0.10em;
  text-transform: uppercase;
}

.chapterTitle {
  color: var(--ink);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.2;
}

.chapterSubtitle {
  flex: 1 1 auto;
  color: rgba(245, 244, 237, 0.62);
  font-size: 14px;
  line-height: 1.36;
}

.chapterCount {
  flex: 0 0 auto;
  color: var(--muted);
  font: 700 11px var(--font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}

/* Lightweight cards — no actual slide rendering. Browser can paint these
   in tens of microseconds each, so fast scrolling 98 of them is fine. */
.thumb {
  position: relative;
  display: block;
  text-align: left;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
  cursor: pointer;
  overflow: hidden;
  transition: border-color 120ms ease, transform 120ms ease;
  /* Skip layout / paint for off-screen items as additional protection. */
  content-visibility: auto;
  contain-intrinsic-size: 180px 110px;
}

.thumb:hover { border-color: var(--cyan); transform: translateY(-2px); }

.thumb.active {
  border-color: var(--cyan2);
  box-shadow: 0 0 0 1px var(--cyan2);
}

/* Top accent bar coloured by the slide's theme — gives a quick visual
   sense of which "kind" of slide it is without rendering content.
   Tokens are the muted kami functional palette. */
.thumbAccent {
  height: 4px;
  background: var(--cyan);
}
.thumb[data-variant="light"] .thumbAccent { background: var(--green); }
.thumb[data-variant="paper"] .thumbAccent { background: var(--purple); }

.thumbBody {
  padding: 12px 14px;
  display: grid;
  gap: 6px;
}

.thumbNo {
  color: rgba(245, 244, 237, 0.45);
  font: 800 12px var(--font-mono);
  letter-spacing: 0.06em;
}

.thumbSection {
  color: var(--cyan2);
  font: 700 11px var(--font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.thumbTitle {
  color: rgba(245, 244, 237, 0.92);
  font-size: 14px;
  line-height: 1.32;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 900px) {
  .overlay { padding: 16px 12px 80px; }
  .chapter { margin-bottom: 18px; padding: 10px 12px; }
  .chapterHeader { gap: 8px; margin-bottom: 8px; padding-bottom: 6px; }
  .chapterTitle { font-size: 17px; }
  .chapterSubtitle { font-size: 12px; flex-basis: 100%; }
  .grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
  .thumbBody { padding: 10px 12px; }
  .thumbTitle { font-size: 13px; }
}
```

- [ ] **Step 2: Verify neon-free** — Run:
```bash
grep -nE "rgba\(255, ?255, ?255|rgba\(5, ?8, ?18|rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(16, ?185, ?129|#fff" packages/deck-kit/src/shell/OverviewMode.module.css
```
Expected: no output.

- [ ] **Step 3: Lint** — `pnpm -F deck-kit lint` → pass.

- [ ] **Step 4: Commit**
```bash
git add packages/deck-kit/src/shell/OverviewMode.module.css
git commit -m "style(deck-kit): de-neon OverviewMode — warm thumbs, ink-blue active ring

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: SwipeHint.module.css

**Files:** Modify `packages/deck-kit/src/shell/SwipeHint.module.css`

- [ ] **Step 1: Replace the entire file with:**

```css
.hint {
  position: fixed;
  left: 50%;
  bottom: 78px;
  transform: translateX(-50%);
  z-index: 70;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 10px 18px;
  border: 1px solid rgba(45, 90, 138, 0.5);
  border-radius: 999px;
  background: rgba(45, 90, 138, 0.22);
  color: var(--brand-on-dark);
  font: 700 13px var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: var(--shadow);
  cursor: pointer;
  animation: swipeHintIn 320ms ease-out 200ms both, swipeHintOut 320ms ease-in 4500ms both;
}

.arrow {
  display: inline-block;
  font-size: 16px;
  animation: swipePulse 1500ms ease-in-out infinite;
}

.arrowLeft { animation-delay: 0ms; }
.arrowRight { animation-delay: 750ms; }

@keyframes swipeHintIn {
  from { opacity: 0; transform: translate(-50%, 14px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}

@keyframes swipeHintOut {
  to { opacity: 0; transform: translate(-50%, 14px); }
}

@keyframes swipePulse {
  0%, 100% { transform: translateX(0); opacity: 0.55; }
  50%      { transform: translateX(4px); opacity: 1; }
}

.arrowLeft {
  animation-name: swipePulseLeft;
}

@keyframes swipePulseLeft {
  0%, 100% { transform: translateX(0); opacity: 0.55; }
  50%      { transform: translateX(-4px); opacity: 1; }
}
```

(Dropped `backdrop-filter` blur and the cyan glow `box-shadow` → `var(--shadow)`; cyan border/bg → ink-blue; `#ddfaff` text → `var(--brand-on-dark)`. Animations unchanged.)

- [ ] **Step 2: Verify neon-free** — Run:
```bash
grep -nE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|#ddfaff|backdrop-filter" packages/deck-kit/src/shell/SwipeHint.module.css
```
Expected: no output.

- [ ] **Step 3: Lint** — `pnpm -F deck-kit lint` → pass.

- [ ] **Step 4: Commit**
```bash
git add packages/deck-kit/src/shell/SwipeHint.module.css
git commit -m "style(deck-kit): de-neon SwipeHint — ink-blue chip, no glow/blur

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Whole-shell verification

**Files:** none.

- [ ] **Step 1: Repo-wide shell neon grep** — Run:
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#67e8f9|#6ee7b7|#ddfaff|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(5, ?12, ?14|rgba\(10, ?15, ?30|rgba\(255, ?255, ?255|rgba\(245, ?158, ?11" packages/deck-kit/src/shell
```
Expected: **no output**.

- [ ] **Step 2: Full guard** — Run: `pnpm -F deck-kit lint && pnpm -F deck-kit typecheck && pnpm -F deck-kit test && pnpm -F asgard-ai-agent-workshop build`
Expected: lint/typecheck clean, 12 tests pass, build succeeds.

- [ ] **Step 3: Report DONE for controller visual check.** Controller opens the deck, presses the overview button, and screenshots the overview grid + the nav bar + a slide's progress bar to confirm kami-dark (warm, ink-blue, no cyan/glow/glass). No code change.

---

## Self-review (plan author)

**Spec coverage:** Progress single-hue (T1), nav/select warm + drop blur (T1), select option light-warm (T1), gotoBuffer ochre (T1), overlay/chapter/thumb warm (T2), active-thumb ink-blue ring + drop green glow (T2), per-theme thumb accents kept muted (T2), SwipeHint ink-blue + drop blur/glow (T3), grep + guards (T4). ✓

**Placeholder scan:** No TBD/TODO; full file content for all 3 files. ✓

**Consistency:** All `var(--x)` used (`--cyan --cyan2 --line --panel2 --panel --ink --muted --amber --brand-tint --brand-on-dark --green --purple --shadow --font-mono`) exist in tokens.css. Class names unchanged from originals. The intentional light `#faf9f5`/`#141413` is confined to `.gotoSelect option` (native popup) and documented. ✓
