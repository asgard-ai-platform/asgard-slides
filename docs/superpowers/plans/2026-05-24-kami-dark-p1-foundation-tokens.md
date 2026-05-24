# kami-dark P1 — Foundation Tokens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remap `deck-kit`'s two theme files (`tokens.css`, `globals.css`) from the dark-neon / multi-color / glow look to **kami-dark** — warm-charcoal surfaces, a single ink-blue accent, a de-saturated functional palette, no glow — keeping Space Grotesk and every existing CSS variable name so the ~100 token-driven slides recolor automatically.

**Architecture:** Pure CSS. **Keep all existing variable names, change only their values** in `tokens.css`; add a few new canonical names (`--brand*`, `--good/--warn/--bad`) for later phases. In `globals.css`, strip the heading gradient-clip + cyan drop-shadow, replace the three-color radial body glow with a single faint ink-blue glow over warm charcoal, and switch the print background to `var(--bg)`. No `.tsx`, no `*.module.css`, no React, no SVG.

**Tech Stack:** CSS custom properties, Vite, pnpm workspace, deck-kit (React) consumed by `decks/asgard-ai-agent-workshop`.

**Spec:** `docs/superpowers/specs/2026-05-24-kami-dark-p1-foundation-tokens-design.md`

**Verification note (TDD adaptation):** CSS token *values* have no meaningful unit test. Each task is verified by (a) the existing `deck-kit` test suite + lint + typecheck as a regression guard, and (b) a concrete visual check in the running dev server. Treat the "Expected" lines as the assertion.

---

## File structure

| File | Responsibility | Action |
|---|---|---|
| `packages/deck-kit/src/theme/tokens.css` | The token vocabulary (`:root` dark + `light`/`paper` variants) | Rewrite values |
| `packages/deck-kit/src/theme/globals.css` | Element-level base styles (headings, body bg, links, print) | Targeted edits |

No other files are touched in P1.

---

## Task 1: Remap `tokens.css` to kami-dark

**Files:**
- Modify (full replace): `packages/deck-kit/src/theme/tokens.css`

- [ ] **Step 1: Replace the entire file contents**

Replace the whole file with exactly this:

```css
:root {
  /* color — base (warm charcoal, no cool tones) */
  --bg: #141413;
  --bg2: #1a1a17;
  --ink: #f5f4ed;
  --muted: #b8b5ab;
  --line: rgba(245, 244, 237, 0.10);

  /* color — surfaces */
  --card: #1f1f1d;
  --panel: rgba(245, 244, 237, 0.035);
  --panel2: rgba(245, 244, 237, 0.06);

  /* color — accents: single ink-blue identity + de-saturated functional */
  --green: #6f9c6e;   /* muted sage (good) */
  --cyan: #2D5A8A;    /* folded into ink-blue */
  --cyan2: #9ec1e6;   /* bright blue for dark surfaces (links / emphasis) */
  --blue: #2D5A8A;    /* ink-blue */
  --purple: #8c84a8;  /* muted violet */
  --amber: #c9a24b;   /* muted ochre (warn) */
  --rose: #c47a72;    /* muted terracotta (bad) */
  --pink: #b08aa0;    /* muted mauve */

  /* color — paper variant base (kami parchment) */
  --paper: #f5f4ed;
  --paper-ink: #141413;

  /* effects — kami whisper shadow, no hard drop / no glow */
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.28);

  /* type — keep Space Grotesk */
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, -apple-system,
               BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "PingFang TC",
               "Microsoft JhengHei", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
               "Liberation Mono", monospace;

  /* canonical kami names for P2+ components / diagrams */
  --brand: #2D5A8A;
  --brand-bright: #7ba3cf;
  --brand-on-dark: #9ec1e6;
  --brand-tint: rgba(45, 90, 138, 0.18);
  --good: var(--green);
  --warn: var(--amber);
  --bad: var(--rose);
}

[data-variant="light"] {
  --bg: #f5f4ed;
  --bg2: #faf9f5;
  --ink: #141413;
  --muted: #504e49;
  --line: #e8e6dc;
  --card: #faf9f5;
  --panel: rgba(20, 20, 19, 0.03);
  --panel2: rgba(20, 20, 19, 0.05);
  --cyan2: #1B365D;
  --brand-on-dark: #1B365D;
}

[data-variant="paper"] {
  --bg: var(--paper);
  --bg2: #faf9f5;
  --ink: var(--paper-ink);
  --muted: #504e49;
  --line: #e8e6dc;
  --card: #faf9f5;
  --panel: rgba(20, 20, 19, 0.03);
  --panel2: rgba(20, 20, 19, 0.05);
  --cyan2: #1B365D;
  --brand-on-dark: #1B365D;
}
```

- [ ] **Step 2: Run the deck-kit regression guard**

Run: `pnpm -F deck-kit lint && pnpm -F deck-kit typecheck && pnpm -F deck-kit test`
Expected: all pass (CSS values don't affect these, but this confirms the barrel that side-effect-imports `tokens.css` still resolves; 12 tests pass).

- [ ] **Step 3: Visual spot-check (token-driven elements only)**

Run: `pnpm -F asgard-ai-agent-workshop dev` and open the printed URL at slide 01.
Expected:
- Body `--muted` lead text reads warm gray, not cool gray.
- Cards / `--line` borders read warm on a warm-charcoal `--card`.
- NOTE: headings still show the old cyan gradient and the body still has rainbow glow — that's `globals.css`, fixed in Task 2. Not a regression.

Stop the dev server (Ctrl-C) when done.

- [ ] **Step 4: Commit**

```bash
git add packages/deck-kit/src/theme/tokens.css
git commit -m "feat(theme): remap deck-kit tokens to kami-dark palette

Keep every existing variable name, change values only: warm-charcoal
surfaces, single ink-blue accent (--cyan/--blue folded to #2D5A8A),
de-saturated warm functional colors (sage/ochre/terracotta), kami
whisper shadow. Add --brand*/--good/--warn/--bad for later phases.
Recolor light/paper variants to kami parchment with dark ink-blue
emphasis. Space Grotesk and the type stack are unchanged.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: De-glow `globals.css`

**Files:**
- Modify: `packages/deck-kit/src/theme/globals.css`

- [ ] **Step 1: Replace the heading gradient block**

Find this block:

```css
h1, h2 {
  background: linear-gradient(90deg, #fff 0%, #dbeafe 58%, #67e8f9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 26px rgba(34, 211, 238, .12));
}
```

Replace it with:

```css
h1, h2 { color: var(--ink); }
```

Leave the separate `h1`, `h2`, `h3` rules (sizes, weights 860/820/780, line-height, letter-spacing, max-width) untouched.

- [ ] **Step 2: Replace the body background**

Find this rule:

```css
body {
  background:
    radial-gradient(circle at -8% -8%, rgba(59,130,246,.16), transparent 30%),
    radial-gradient(circle at 100% 0%,  rgba(34,211,238,.12), transparent 28%),
    radial-gradient(circle at 6% 100%,  rgba(168,85,247,.12), transparent 32%),
    linear-gradient(135deg, #050812 0%, #0a0e1a 54%, #050812 100%);
}
```

Replace it with:

```css
body {
  background:
    radial-gradient(circle at 12% -10%, rgba(45,90,138,.10), transparent 36%),
    radial-gradient(circle at 100% 4%,  rgba(45,90,138,.06), transparent 30%),
    linear-gradient(140deg, #141413 0%, #1a1a17 56%, #141413 100%);
}
```

- [ ] **Step 3: Switch the print background**

Find:

```css
@media print {
  body { overflow: visible; background: white; }
}
```

Replace with:

```css
@media print {
  body { overflow: visible; background: var(--bg); }
}
```

Do not change anything else (the `@font-face`, `box-sizing`, html/body base rules, the `a` link rule, and the `@media (max-width:900px)` heading scaling all stay as-is).

- [ ] **Step 4: Run the deck-kit regression guard**

Run: `pnpm -F deck-kit lint && pnpm -F deck-kit typecheck && pnpm -F deck-kit test`
Expected: all pass.

- [ ] **Step 5: Visual verification (full kami-dark)**

Run: `pnpm -F asgard-ai-agent-workshop dev` and open slide 01.
Expected:
- Heading "從會聊天的 AI，到能交辦工作的 Agent" is solid warm-white `#f5f4ed`, **no** cyan gradient, **no** glow halo.
- Background is warm charcoal with at most a faint single ink-blue glow top-left — **no** cyan/purple rainbow.
- Links (try slide 100 / resources) render in `#9ec1e6` ink-blue, not bright cyan.

Then in DevTools set `<html data-variant="light">` (or however the deck toggles variants) and confirm: background becomes parchment `#f5f4ed`, text dark, emphasis is dark ink-blue `#1B365D` and visible.

Expected (intentional, NOT a regression): slides with hardcoded `rgba(6,182,212,…)` (e.g. the glass cards on slide 01's `.module.css`) still glow cyan. That is P4 work.

Stop the dev server when done.

- [ ] **Step 6: Commit**

```bash
git add packages/deck-kit/src/theme/globals.css
git commit -m "feat(theme): de-glow globals for kami-dark

Drop the heading gradient-clip + cyan drop-shadow (headings now solid
var(--ink)), replace the three-color radial body glow with a single
faint ink-blue glow over warm charcoal, and switch the print
background from white to var(--bg) so dark decks export consistently.
Type stack, weights, sizes, and RWD breakpoints are unchanged.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Self-review (completed by plan author)

**Spec coverage:**
- tokens.css `:root` remap → Task 1 Step 1. ✓
- New `--brand*` / `--good/--warn/--bad` → Task 1 Step 1. ✓
- light/paper kami parchment + ink-blue accent remap → Task 1 Step 1. ✓
- globals heading de-glow → Task 2 Step 1. ✓
- body de-rainbow → Task 2 Step 2. ✓
- print background → Task 2 Step 3. ✓
- "type/weights/sizes/RWD unchanged" → explicit "leave untouched" notes in Tasks 1 & 2. ✓
- Verification steps (lint/typecheck/test, dev boot, variant toggle, expected intermediate glow) → Task 1 Steps 2-3, Task 2 Steps 4-5. ✓

**Placeholder scan:** No TBD/TODO; every CSS change shows full literal content. ✓

**Type consistency:** Variable names used across both tasks (`--bg`, `--ink`, `--cyan2`, `--brand-on-dark`) match the spec table exactly; `#2D5A8A` / `#9ec1e6` / `#1B365D` used consistently. ✓
