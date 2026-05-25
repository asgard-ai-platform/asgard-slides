# kami-dark P4 — Slide-layer De-neon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** De-neon the 12 slide `*.module.css` files in `decks/asgard-ai-agent-workshop/src/slides/` that still hardcode neon/glass, into the kami-dark look — so the live deck has zero cyan glow. Same proven transformation as P2a, applied to the slide layer.

**Architecture:** Pure CSS. For each file, apply the canonical de-neon mapping below: hardcoded neon (cyan/blue/purple/green/mint) → ink-blue / muted-functional / warm tokens; cool-white overlays → warm; old dark backgrounds → `var(--card)`; cyan/blue glows + `backdrop-filter` blur + neon decoration pseudo-elements (blueprint grids, scanlines) → dropped. Structure/sizing/layout unchanged. Tokens were defined in P1.

**Tech Stack:** CSS Modules, Vite, deck-kit, pnpm.

**Spec:** `docs/superpowers/specs/2026-05-25-kami-dark-p4-slide-deneon-design.md`

**Verification (TDD adaptation):** No unit test for CSS values. Per-task test = a grep that must return **0 neon hits** in the edited files, plus `pnpm -F asgard-ai-agent-workshop typecheck`. Final visual check by the controller.

## Canonical de-neon mapping (apply to every file)

For each file: read it, then replace per this table, **preserving alpha and all structure/sizing**. This is the same mapping proven in P2a.

| Old literal (pattern) | New value |
|---|---|
| `rgba(6, 182, 212, a)` / `#06b6d4` (cyan) | `rgba(45, 90, 138, a)` ; solid → `var(--cyan)` |
| `rgba(34, 211, 238, a)` / `#22d3ee` (cyan2) | `rgba(158, 193, 230, a)` ; solid → `var(--cyan2)` |
| `rgba(59, 130, 246, a)` (blue) | `rgba(45, 90, 138, a)` |
| `rgba(168, 85, 247, a)` (purple) | `rgba(140, 132, 168, a)` |
| `rgba(16, 185, 129, a)` (green) | `rgba(111, 156, 110, a)` |
| `rgba(245, 158, 11, a)` / amber | `rgba(201, 162, 75, a)` |
| `rgba(255, 255, 255, a)` (cool-white overlay/border) | `rgba(245, 244, 237, a)` (warm) |
| `#fff` / `#ffffff` (text) | `var(--ink)` |
| `rgba(5,8,18,a)` / `rgba(10,15,30,a)` / `rgba(1,7,10,a)` / `#030712` (old dark bg) | solid container → `var(--card)` ; translucent → `rgba(20,20,19,a)` |
| `#d7f7ee` (mint) | `var(--brand-on-dark)` |
| `box-shadow: 0 0 Npx rgba(<neon>, …)` (cyan/blue glow) | remove (or `var(--shadow)` if depth needed) |
| `backdrop-filter` / `-webkit-backdrop-filter: blur(...)` | remove |
| neon decoration pseudo-element (blueprint dot-grid, scanline, neon top-bar using a hardcoded neon literal) | remove the rule; a top-bar using `var(--cyan)`/`var(--cyan2)` may stay (already ink-blue) |
| **Catch-all:** any other hardcoded saturated neon hex/rgba | map to nearest kami token (ink-blue family or warm gray), warm/low-saturation, preserve alpha |

**Effect rules:** no neon glow, no glassmorphism blur; depth via hairline borders + `var(--shadow)` + surface contrast only. Glass gradients like `linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.01))` → `var(--panel)`.

**Do not change:** padding, margin, border-radius, font-size, line-height, grid/flex layout, dimensions, `@media` blocks, SVG geometry. Only color / background / border-color / box-shadow / backdrop-filter / gradient color-stops / decorative pseudo-elements.

---

## Task 1: Cover & text slides (4 files)

**Files (modify):**
- `decks/asgard-ai-agent-workshop/src/slides/01-opening.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/02-speaker.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/99-thanks-qa.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/100-resources.module.css`

- [ ] **Step 1: De-neon each file.** Read each file; apply the canonical mapping + effect rules above. Preserve all structure/sizing.

- [ ] **Step 2: Verify these 4 files neon-free.**

Run:
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(1, ?7, ?10|#030712|rgba\(255, ?255, ?255" decks/asgard-ai-agent-workshop/src/slides/01-opening.module.css decks/asgard-ai-agent-workshop/src/slides/02-speaker.module.css decks/asgard-ai-agent-workshop/src/slides/99-thanks-qa.module.css decks/asgard-ai-agent-workshop/src/slides/100-resources.module.css
```
Expected: no output.

- [ ] **Step 3: Typecheck guard.** Run: `pnpm -F asgard-ai-agent-workshop typecheck` → clean.

- [ ] **Step 4: Commit.**
```bash
git add decks/asgard-ai-agent-workshop/src/slides/01-opening.module.css decks/asgard-ai-agent-workshop/src/slides/02-speaker.module.css decks/asgard-ai-agent-workshop/src/slides/99-thanks-qa.module.css decks/asgard-ai-agent-workshop/src/slides/100-resources.module.css
git commit -m "style(slides): de-neon cover + text slides to kami-dark

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Diagram slides A (3 files)

**Files (modify):**
- `decks/asgard-ai-agent-workshop/src/slides/07-six-layer-stack.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/12-harness-diagram.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/14-term-diagram.module.css`

- [ ] **Step 1: De-neon each file** per the canonical mapping + effect rules. These are diagram slides — also drop any neon glow/blueprint-grid/scanline decorations; keep the SVG/box geometry intact.

- [ ] **Step 2: Verify neon-free.**
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(1, ?7, ?10|#030712|rgba\(255, ?255, ?255" decks/asgard-ai-agent-workshop/src/slides/07-six-layer-stack.module.css decks/asgard-ai-agent-workshop/src/slides/12-harness-diagram.module.css decks/asgard-ai-agent-workshop/src/slides/14-term-diagram.module.css
```
Expected: no output.

- [ ] **Step 3: Typecheck guard.** `pnpm -F asgard-ai-agent-workshop typecheck` → clean.

- [ ] **Step 4: Commit.**
```bash
git add decks/asgard-ai-agent-workshop/src/slides/07-six-layer-stack.module.css decks/asgard-ai-agent-workshop/src/slides/12-harness-diagram.module.css decks/asgard-ai-agent-workshop/src/slides/14-term-diagram.module.css
git commit -m "style(slides): de-neon six-layer-stack/harness/term diagrams

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Diagram slides B (3 files)

**Files (modify):**
- `decks/asgard-ai-agent-workshop/src/slides/15-system-architecture.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/16-from-architecture-to-components.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/57-plugin-to-harness-diagram.module.css`

- [ ] **Step 1: De-neon each file** per the canonical mapping + effect rules (drop glow/grid/blur; keep geometry).

- [ ] **Step 2: Verify neon-free.**
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(1, ?7, ?10|#030712|rgba\(255, ?255, ?255" decks/asgard-ai-agent-workshop/src/slides/15-system-architecture.module.css decks/asgard-ai-agent-workshop/src/slides/16-from-architecture-to-components.module.css decks/asgard-ai-agent-workshop/src/slides/57-plugin-to-harness-diagram.module.css
```
Expected: no output.

- [ ] **Step 3: Typecheck guard.** `pnpm -F asgard-ai-agent-workshop typecheck` → clean.

- [ ] **Step 4: Commit.**
```bash
git add decks/asgard-ai-agent-workshop/src/slides/15-system-architecture.module.css decks/asgard-ai-agent-workshop/src/slides/16-from-architecture-to-components.module.css decks/asgard-ai-agent-workshop/src/slides/57-plugin-to-harness-diagram.module.css
git commit -m "style(slides): de-neon system-architecture/components/plugin diagrams

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Remaining slides (2 files)

**Files (modify):**
- `decks/asgard-ai-agent-workshop/src/slides/51-identity-chain.module.css`
- `decks/asgard-ai-agent-workshop/src/slides/86-asgard-product-stack.module.css`

- [ ] **Step 1: De-neon each file** per the canonical mapping + effect rules.

- [ ] **Step 2: Verify neon-free.**
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(1, ?7, ?10|#030712|rgba\(255, ?255, ?255" decks/asgard-ai-agent-workshop/src/slides/51-identity-chain.module.css decks/asgard-ai-agent-workshop/src/slides/86-asgard-product-stack.module.css
```
Expected: no output.

- [ ] **Step 3: Typecheck guard.** `pnpm -F asgard-ai-agent-workshop typecheck` → clean.

- [ ] **Step 4: Commit.**
```bash
git add decks/asgard-ai-agent-workshop/src/slides/51-identity-chain.module.css decks/asgard-ai-agent-workshop/src/slides/86-asgard-product-stack.module.css
git commit -m "style(slides): de-neon identity-chain + product-stack slides

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Whole-deck verification

**Files:** none (verification).

- [ ] **Step 1: Repo-wide neon grep across the whole slides dir.**
```bash
grep -rnE "rgba\(6, ?182, ?212|rgba\(34, ?211, ?238|rgba\(59, ?130, ?246|rgba\(168, ?85, ?247|rgba\(16, ?185, ?129|#06b6d4|#22d3ee|#d7f7ee|backdrop-filter|rgba\(5, ?8, ?18|rgba\(10, ?15, ?30|rgba\(1, ?7, ?10|#030712|rgba\(255, ?255, ?255" decks/asgard-ai-agent-workshop/src/slides/
```
Expected: **no output** (zero neon/glass/cool-white literals remain in any slide).

- [ ] **Step 2: Full guard.** Run: `pnpm -F asgard-ai-agent-workshop typecheck && pnpm -F asgard-ai-agent-workshop build && pnpm -F deck-kit test`
Expected: typecheck clean, build succeeds, 12 deck-kit tests pass.

- [ ] **Step 3: Report DONE for controller visual check.** Controller screenshots slides 01 (opening), 07 (six-layer-stack), 15 (system-architecture), and one more diagram slide to confirm kami-dark with no cyan/glass residue. No code change.

---

## Self-review (plan author)

**Spec coverage:** All 12 in-scope files assigned across Tasks 1-4 (4+3+3+2). Canonical mapping + effect rules + catch-all reproduced in the header. Objective grep acceptance per task + whole-dir in Task 5. typecheck/build/test guard in Task 5. Visual check Task 5 Step 3. ✓

**Placeholder scan:** No TBD/TODO. The transformation is specified by the canonical mapping (the algorithm) + objective grep test, the same proven approach from P2a — not a hand-wave. ✓

**Consistency:** The 12 file paths match the spec's scope list exactly; the grep pattern is identical across tasks and matches the spec's verification grep. ✓
