# Design System Page + 9 Extended deck-kit Components Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the deck-kit design-system reference page on GitHub Pages at `/asgard-slides/design-system/` and promote the 9 "Extended" components from the handoff bundle into real deck-kit source.

**Architecture:** The handoff bundle `design_handoff_deck_kit/reference/` moves into `docs/design-system/` (self-contained static page, no build). The 9 components are CSS-Module ports of the `.dk-*` blocks in the bundle's `deck-kit.css` — strip the `dk-` prefix/BEM tail into local class names, keep all `var(--token)` references. site-builder gains one copy step + a landing-page link.

**Tech Stack:** React 19 + TypeScript + CSS Modules (deck-kit), Node + vitest (site-builder), pnpm workspace.

**Spec:** `docs/superpowers/specs/2026-06-07-design-system-page-extended-components-design.md`

---

## Context for workers with zero repo knowledge

- Repo root: `/Users/williamwang/Documents/executing/asgard-reports/asgard-slides`. Branch: `design-system-extended-kit`.
- deck-kit contract: each primitive/layout is a pair `Name.tsx` + `Name.module.css` under `packages/deck-kit/src/primitives/` or `.../layouts/`. Named exports only. Export from the folder's `index.ts` AND re-export from the root barrel `packages/deck-kit/src/index.ts` (components and their item/prop types — see how `Steps`/`Step` is exported).
- **Only existing CSS tokens** may be used: `--bg --bg2 --ink --muted --line --card --panel --panel2 --cyan --cyan2 --blue --green --amber --rose --purple --brand --brand-bright --brand-on-dark --brand-tint --shadow --good --warn --bad --font-mono --font-sans --paper --paper-ink --pink`. There are NO `--space-*`/`--text-*`/`--radius-*` variables — explicit px only. No new hex colors.
- The source CSS for every new component already exists in `design_handoff_deck_kit/reference/deck-kit.css` (after Task 1: `docs/design-system/deck-kit.css`) under the `EXTENDED COMPONENTS` comment (≈line 488). Copy the matching `.dk-<name>*` block verbatim, rename classes.
- Verify loop for deck-kit tasks: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test` (12 tests must stay green).
- Existing decks must NOT be modified.

---

### Task 1: Move the reference page into `docs/design-system/` and delete the bundle

**Files:**
- Create: `docs/design-system/index.html` (from `design_handoff_deck_kit/reference/design-system.html`)
- Create: `docs/design-system/deck-kit.css` (from `design_handoff_deck_kit/reference/deck-kit.css`)
- Create: `docs/design-system/assets/*` (9 files, from `design_handoff_deck_kit/reference/assets/`)
- Delete: `design_handoff_deck_kit/` (entire dir, including README.md + CLAUDE-CODE-PROMPT.md — absorbed by spec/plan)

- [ ] **Step 1: Move files** (bundle dir is untracked, so plain `mv`)

```bash
mkdir -p docs/design-system
mv design_handoff_deck_kit/reference/design-system.html docs/design-system/index.html
mv design_handoff_deck_kit/reference/deck-kit.css docs/design-system/deck-kit.css
mv design_handoff_deck_kit/reference/assets docs/design-system/assets
rm -rf design_handoff_deck_kit
```

- [ ] **Step 2: Verify the page is self-contained** — all refs relative, no absolute paths:

```bash
grep -nE 'src="/|href="/' docs/design-system/index.html
```
Expected: no output.

- [ ] **Step 3: Open it once in a browser to confirm it renders** (font loads, no broken images):

```bash
open docs/design-system/index.html
```
(Or skip if headless; Task 9 screenshots it anyway.)

- [ ] **Step 4: Commit**

```bash
git add docs/design-system
git commit -m "docs: add deck-kit design-system static reference page"
```

---

### Task 2: `Callout` + `Badge` primitives

**Files:**
- Create: `packages/deck-kit/src/primitives/Callout.tsx`, `Callout.module.css`
- Create: `packages/deck-kit/src/primitives/Badge.tsx`, `Badge.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `Callout.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Callout.module.css";

const DEFAULT_ICON = { info: "i", good: "✓", warn: "!", bad: "✕" } as const;

interface CalloutProps {
  variant?: "info" | "good" | "warn" | "bad";
  title?: ReactNode;
  /** Overrides the per-variant default icon (i / ✓ / ! / ✕). */
  icon?: ReactNode;
  children: ReactNode;
}

export function Callout({ variant = "info", title, icon, children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles[variant]}`}>
      <div className={styles.icon}>{icon ?? DEFAULT_ICON[variant]}</div>
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `Callout.module.css`** (port of `.dk-callout*`)

```css
.callout {
  --accent: var(--brand-on-dark);
  display: flex; gap: 13px; margin-top: 16px; padding: 14px 16px;
  border: 1px solid var(--line); border-left: 3px solid var(--accent); border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 7%, var(--panel));
}
.icon {
  flex: 0 0 auto; display: grid; place-items: center; width: 26px; height: 26px;
  border-radius: 8px; background: color-mix(in srgb, var(--accent) 16%, transparent);
  color: var(--accent); font: 800 14px var(--font-mono); line-height: 1;
}
.body { min-width: 0; }
.title { font-size: 15px; font-weight: 780; color: var(--ink); margin-bottom: 3px; }
.body p { color: var(--muted); font-size: 14.5px; line-height: 1.4; }
.info { --accent: var(--brand-on-dark); }
.good { --accent: var(--good); }
.warn { --accent: var(--warn); }
.bad  { --accent: var(--bad); }
```

- [ ] **Step 3: Create `Badge.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  status?: "info" | "good" | "warn" | "bad" | "neutral";
  children: ReactNode;
}

export function Badge({ status = "neutral", children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[status]}`}>{children}</span>;
}
```

- [ ] **Step 4: Create `Badge.module.css`** (port of `.dk-badge*`)

```css
.badge {
  display: inline-flex; align-items: center; gap: 7px; padding: 4px 11px;
  border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
  border-radius: 999px; background: color-mix(in srgb, currentColor 12%, transparent);
  font: 700 12px var(--font-mono); letter-spacing: 0.04em; color: var(--muted);
}
.badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.info { color: var(--brand-on-dark); }
.good { color: var(--good); }
.warn { color: var(--warn); }
.bad  { color: var(--bad); }
.neutral { color: var(--muted); }
```

- [ ] **Step 5: Export from barrels**

In `packages/deck-kit/src/primitives/index.ts`, append:
```ts
export { Callout } from "./Callout";
export { Badge } from "./Badge";
```
In `packages/deck-kit/src/index.ts`, add `Callout, Badge` to the existing `export { ... } from "./primitives";` list.

- [ ] **Step 6: Verify**

```bash
pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test
```
Expected: clean, 12 tests pass.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src
git commit -m "feat(deck-kit): add Callout and Badge primitives"
```

---

### Task 3: `Avatar`/`Persona`/`Facepile` + `BigStat` primitives

**Files:**
- Create: `packages/deck-kit/src/primitives/Avatar.tsx`, `Avatar.module.css`
- Create: `packages/deck-kit/src/primitives/BigStat.tsx`, `BigStat.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `Avatar.tsx`** (one file exports all three, mirroring how the CSS groups them)

```tsx
import type { ReactNode } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src?: string;
  /** Fallback when no src: 1–2 chars rendered on a brand-tint disc. */
  initials?: string;
  alt?: string;
}

export function Avatar({ src, initials, alt }: AvatarProps) {
  if (src) return <img className={styles.avatar} src={src} alt={alt ?? ""} />;
  return (
    <div className={`${styles.avatar} ${styles.initials}`} role="img" aria-label={alt}>
      {initials}
    </div>
  );
}

interface PersonaProps {
  src?: string;
  initials?: string;
  name: ReactNode;
  role: ReactNode;
}

export function Persona({ src, initials, name, role }: PersonaProps) {
  return (
    <div className={styles.persona}>
      <Avatar src={src} initials={initials} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
}

interface FacepileProps {
  people: { src?: string; initials?: string }[];
}

export function Facepile({ people }: FacepileProps) {
  return (
    <div className={styles.facepile}>
      {people.map((p, i) => (
        <Avatar key={i} src={p.src} initials={p.initials} />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `Avatar.module.css`** (port of `.dk-avatar*` / `.dk-persona*` / `.dk-facepile*`)

```css
.avatar {
  width: 46px; height: 46px; border-radius: 50%; object-fit: cover; flex: 0 0 auto;
  border: 1px solid var(--line); background: var(--panel2);
}
.initials {
  display: grid; place-items: center; color: var(--brand-on-dark);
  font: 800 17px var(--font-sans); background: var(--brand-tint);
}
.persona { display: flex; align-items: center; gap: 12px; }
.name { font-size: 16px; font-weight: 760; color: var(--ink); line-height: 1.15; }
.role { margin-top: 2px; font: 12px var(--font-mono); color: var(--muted); }
.facepile { display: flex; }
.facepile .avatar { width: 38px; height: 38px; margin-left: -12px; border: 2px solid var(--bg2); }
.facepile .avatar:first-child { margin-left: 0; }
.facepile .initials { font-size: 13px; }
```

- [ ] **Step 3: Create `BigStat.tsx`** (reference specimen renders `▲ 6.4% vs. baseline` — the arrow is part of the rendered output, derived from `trend`)

```tsx
import type { ReactNode } from "react";
import styles from "./BigStat.module.css";

interface BigStatProps {
  /** Wrap digits in <em> for the brand-on-dark accent, e.g. <em>99.2</em>%. */
  value: ReactNode;
  label?: ReactNode;
  delta?: ReactNode;
  trend?: "up" | "down";
}

export function BigStat({ value, label, delta, trend = "up" }: BigStatProps) {
  return (
    <div>
      <div className={styles.value}>{value}</div>
      {label && <div className={styles.label}>{label}</div>}
      {delta && (
        <div className={`${styles.delta} ${trend === "down" ? styles.down : styles.up}`}>
          {trend === "down" ? "▼" : "▲"} {delta}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Create `BigStat.module.css`** (port of `.dk-bigstat*`)

```css
.value {
  font-size: 64px; font-weight: 820; line-height: 1; letter-spacing: -0.02em;
  color: var(--ink); font-variant-numeric: tabular-nums;
}
.value em { color: var(--brand-on-dark); font-style: normal; }
.label {
  margin-top: 9px; font: 12px var(--font-mono); letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted);
}
.delta { display: inline-flex; align-items: center; gap: 5px; margin-top: 11px; font-size: 14px; font-weight: 700; }
.up { color: var(--good); }
.down { color: var(--bad); }
```

- [ ] **Step 5: Export from barrels**

`primitives/index.ts`:
```ts
export { Avatar, Persona, Facepile } from "./Avatar";
export { BigStat } from "./BigStat";
```
Root barrel: add `Avatar, Persona, Facepile, BigStat` to the primitives export list.

- [ ] **Step 6: Verify**

```bash
pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test
```
Expected: clean, 12 tests pass.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src
git commit -m "feat(deck-kit): add Avatar/Persona/Facepile and BigStat primitives"
```

---

### Task 4: `ProgressRing` + `Checklist` + `Legend` primitives

**Files:**
- Create: `packages/deck-kit/src/primitives/ProgressRing.tsx`, `ProgressRing.module.css`
- Create: `packages/deck-kit/src/primitives/Checklist.tsx`, `Checklist.module.css`
- Create: `packages/deck-kit/src/primitives/Legend.tsx`, `Legend.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `ProgressRing.tsx`**

```tsx
import type { CSSProperties, ReactNode } from "react";
import styles from "./ProgressRing.module.css";

interface ProgressRingProps {
  /** 0–100. */
  pct: number;
  tone?: "brand" | "good" | "warn" | "bad";
  /** Defaults to "<pct>%". */
  label?: ReactNode;
}

export function ProgressRing({ pct, tone = "brand", label }: ProgressRingProps) {
  return (
    <div
      className={`${styles.ring} ${tone === "brand" ? "" : styles[tone]}`}
      style={{ "--pct": pct } as CSSProperties}
    >
      <div className={styles.track} />
      <div className={styles.label}>{label ?? `${pct}%`}</div>
    </div>
  );
}
```

- [ ] **Step 2: Create `ProgressRing.module.css`** (port of `.dk-ring*`)

```css
.ring { --pct: 0; --accent: var(--brand); position: relative; width: 104px; height: 104px; }
.track {
  width: 100%; height: 100%; border-radius: 50%;
  background: conic-gradient(var(--accent) calc(var(--pct) * 1%), var(--panel2) 0);
  -webkit-mask: radial-gradient(closest-side, transparent 70%, #000 71%);
          mask: radial-gradient(closest-side, transparent 70%, #000 71%);
}
.label {
  position: absolute; inset: 0; display: grid; place-items: center;
  font-size: 25px; font-weight: 820; color: var(--ink); font-variant-numeric: tabular-nums;
}
.good { --accent: var(--good); }
.warn { --accent: var(--warn); }
.bad  { --accent: var(--bad); }
```
(The `#000` here is a mask alpha channel, not a color — allowed.)

- [ ] **Step 3: Create `Checklist.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Checklist.module.css";

export interface ChecklistItem {
  text: ReactNode;
  /** Defaults to true (✓ green); pass false for ✕ red. */
  ok?: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <ul className={styles.checklist}>
      {items.map((item, i) => (
        <li key={i} className={item.ok !== false ? styles.yes : styles.no}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 4: Create `Checklist.module.css`** (port of `.dk-checklist*`; `is-yes`/`is-no` become `.yes`/`.no`)

```css
.checklist { list-style: none; margin: 16px 0 0; padding: 0; }
.checklist li {
  position: relative; padding-left: 30px; margin: 9px 0; font-size: 16px; line-height: 1.4; color: var(--ink);
}
.checklist li::before {
  position: absolute; left: 0; top: 1px; width: 20px; height: 20px;
  display: grid; place-items: center; border-radius: 6px; font: 800 12px var(--font-mono);
}
.checklist li.yes::before { content: "\2713"; color: var(--good); background: color-mix(in srgb, var(--good) 16%, transparent); }
.checklist li.no::before  { content: "\2715"; color: var(--bad);  background: color-mix(in srgb, var(--bad) 16%, transparent); }
```

- [ ] **Step 5: Create `Legend.tsx`**

```tsx
import type { CSSProperties, ReactNode } from "react";
import styles from "./Legend.module.css";

export interface LegendItem {
  label: ReactNode;
  /** Any CSS color — typically a token, e.g. "var(--good)". */
  color: string;
}

interface LegendProps {
  items: LegendItem[];
}

export function Legend({ items }: LegendProps) {
  return (
    <div className={styles.legend}>
      {items.map((item, i) => (
        <span key={i} className={styles.item} style={{ "--accent": item.color } as CSSProperties}>
          <span className={styles.swatch} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Create `Legend.module.css`** (port of `.dk-legend*`)

```css
.legend { display: flex; flex-wrap: wrap; gap: 10px 18px; margin-top: 16px; }
.item { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: var(--muted); }
.swatch { width: 12px; height: 12px; border-radius: 4px; background: var(--accent, var(--brand)); flex: 0 0 auto; }
```

- [ ] **Step 7: Export from barrels**

`primitives/index.ts`:
```ts
export { ProgressRing } from "./ProgressRing";
export { Checklist } from "./Checklist";
export type { ChecklistItem } from "./Checklist";
export { Legend } from "./Legend";
export type { LegendItem } from "./Legend";
```
Root barrel: add `ProgressRing, Checklist, Legend` to the primitives export list, and add a type re-export line:
```ts
export type { ChecklistItem, LegendItem } from "./primitives";
```

- [ ] **Step 8: Verify**

```bash
pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test
```
Expected: clean, 12 tests pass.

- [ ] **Step 9: Commit**

```bash
git add packages/deck-kit/src
git commit -m "feat(deck-kit): add ProgressRing, Checklist, Legend primitives"
```

---

### Task 5: Extend `Quote` with optional `cite`

**Files:**
- Modify: `packages/deck-kit/src/primitives/Quote.tsx`
- Modify: `packages/deck-kit/src/primitives/Quote.module.css`

The reference specimen ("Quote · attributed") renders a `Persona` 16px below the quote box. `cite` is a sibling wrapper below the quote, not inside it. Backward-compatible: no `cite` → exact previous markup.

- [ ] **Step 1: Replace `Quote.tsx` with**

```tsx
import type { ReactNode } from "react";
import styles from "./Quote.module.css";

interface QuoteProps {
  children: ReactNode;
  compact?: boolean;
  /** Attribution rendered below the quote — typically a <Persona>. */
  cite?: ReactNode;
}

export function Quote({ children, compact, cite }: QuoteProps) {
  const quote = <div className={`${styles.quote} ${compact ? styles.compact : ""}`}>{children}</div>;
  if (!cite) return quote;
  return (
    <>
      {quote}
      <div className={styles.cite}>{cite}</div>
    </>
  );
}
```

- [ ] **Step 2: Append to `Quote.module.css`**

```css
.cite { margin-top: 16px; }
```

- [ ] **Step 3: Verify** (both decks use Quote — typecheck the workspace to prove backward compat)

```bash
pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test && pnpm -r typecheck
```
Expected: all clean.

- [ ] **Step 4: Commit**

```bash
git add packages/deck-kit/src/primitives/Quote.tsx packages/deck-kit/src/primitives/Quote.module.css
git commit -m "feat(deck-kit): Quote accepts optional cite attribution slot"
```

---

### Task 6: `Agenda` + `Compare` layouts

**Files:**
- Create: `packages/deck-kit/src/layouts/Agenda.tsx`, `Agenda.module.css`
- Create: `packages/deck-kit/src/layouts/Compare.tsx`, `Compare.module.css`
- Modify: `packages/deck-kit/src/layouts/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `Agenda.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Agenda.module.css";

export interface AgendaItem {
  title: ReactNode;
  sub?: ReactNode;
  time?: ReactNode;
  state?: "active" | "done";
}

interface AgendaProps {
  items: AgendaItem[];
}

export function Agenda({ items }: AgendaProps) {
  return (
    <div className={styles.agenda}>
      {items.map((item, i) => {
        const state =
          item.state === "active" ? styles.active : item.state === "done" ? styles.done : "";
        return (
          <div key={i} className={`${styles.row} ${state}`}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className={styles.title}>{item.title}</div>
              {item.sub && <div className={styles.sub}>{item.sub}</div>}
            </div>
            {item.time && <span className={styles.time}>{item.time}</span>}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Create `Agenda.module.css`** (port of `.dk-agenda*`; `is-active`/`is-done` become `.active`/`.done` on the row)

```css
.agenda { display: grid; gap: 8px; margin-top: 20px; }
.row {
  display: grid; grid-template-columns: 52px 1fr auto; align-items: center; gap: 16px;
  padding: 13px 16px; border: 1px solid var(--line); border-radius: 12px; background: var(--panel);
}
.num { font: 820 22px var(--font-mono); color: var(--brand-on-dark); line-height: 1; }
.title { font-size: 18px; font-weight: 760; color: var(--ink); line-height: 1.18; }
.sub { margin-top: 2px; font-size: 13px; color: var(--muted); }
.time { font: 12px var(--font-mono); color: var(--muted); white-space: nowrap; }
.row.active { background: var(--panel2); border-color: color-mix(in srgb, var(--brand) 35%, transparent); }
.row.done .num { color: var(--muted); }
.row.done .title { color: var(--muted); }
```

- [ ] **Step 3: Create `Compare.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Compare.module.css";

export interface CompareColumn {
  head: ReactNode;
  items: ReactNode[];
}

interface CompareProps {
  pros: CompareColumn;
  cons: CompareColumn;
}

export function Compare({ pros, cons }: CompareProps) {
  return (
    <div className={styles.compare}>
      <div className={`${styles.col} ${styles.pros}`}>
        <div className={styles.head}>{pros.head}</div>
        <ul>
          {pros.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.col} ${styles.cons}`}>
        <div className={styles.head}>{cons.head}</div>
        <ul>
          {cons.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create `Compare.module.css`** (port of `.dk-compare*`; the bundle's `.dk-compare__head .dk-badge { font-size: 11px }` cross-component rule is intentionally dropped — a Badge in `head` renders at its own size)

```css
.compare { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
.col {
  --accent: var(--muted); padding: 18px; border: 1px solid var(--line);
  border-top: 2px solid var(--accent); border-radius: 16px; background: var(--panel);
}
.pros { --accent: var(--good); }
.cons { --accent: var(--bad); }
.head { display: flex; align-items: center; gap: 9px; margin-bottom: 12px; font-size: 16px; font-weight: 780; color: var(--ink); }
.col ul { list-style: none; margin: 0; padding: 0; }
.col li { position: relative; padding-left: 22px; margin: 9px 0; font-size: 15px; line-height: 1.4; color: var(--muted); }
.col li::before { position: absolute; left: 0; top: 0; font: 800 15px var(--font-mono); color: var(--accent); }
.pros li::before { content: "+"; }
.cons li::before { content: "\2212"; }
```

- [ ] **Step 5: Export from barrels**

`layouts/index.ts`:
```ts
export { Agenda } from "./Agenda";
export type { AgendaItem } from "./Agenda";
export { Compare } from "./Compare";
export type { CompareColumn } from "./Compare";
```
Root barrel: add `Agenda, Compare` to the layouts export list and `AgendaItem, CompareColumn` to the layouts `export type` line.

- [ ] **Step 6: Verify**

```bash
pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test
```
Expected: clean, 12 tests pass.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src
git commit -m "feat(deck-kit): add Agenda and Compare layouts"
```

---

### Task 7: site-builder — publish `docs/design-system/` + landing link

**Files:**
- Modify: `tools/site-builder/src/render-landing.ts`
- Modify: `tools/site-builder/src/render-landing.test.ts`
- Modify: `tools/site-builder/src/build-site.ts`

- [ ] **Step 1: Write the failing test** — append to the `describe` block in `render-landing.test.ts`:

```ts
  it("links to the design-system page", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toMatch(/href="design-system\/"/);
    expect(html).toContain("Design System");
  });
```

- [ ] **Step 2: Run it to verify it fails**

```bash
pnpm -F site-builder exec vitest run src/render-landing.test.ts
```
Expected: 1 FAIL (`links to the design-system page`), others pass.

- [ ] **Step 3: Implement the landing link** in `render-landing.ts`:

In `renderLandingHtml`, after the deck grid / empty-state `body`, insert a resources card. Change the body template (inside the returned HTML) from:

```html
      ${body}
      <footer class="footer">
```
to:
```html
      ${body}
      <a class="card card--aux" href="design-system/">
        <h2 class="card-title">deck-kit Design System</h2>
        <p class="card-subtitle">Tokens, primitives, layouts — the full component reference for this repo's slide kit.</p>
        <span class="card-cta">Open reference →</span>
      </a>
      <footer class="footer">
```

And append to the `CSS` constant:

```css
  .card--aux { margin-top: 26px; border-style: dashed; }
  .card--aux:hover { border-style: solid; }
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
pnpm -F site-builder exec vitest run src/render-landing.test.ts
```
Expected: all pass (8 tests).

- [ ] **Step 5: Add the copy step to `build-site.ts`** — after the deck loop, before `render landing`:

```ts
  const designSystemDir = path.join(WORKSPACE_ROOT, "docs", "design-system");
  console.log(`▸ copy design-system → dist-site/design-system`);
  await cp(designSystemDir, path.join(DIST_SITE, "design-system"), { recursive: true });
```

- [ ] **Step 6: Verify the full site build locally** (requires `pnpm exec playwright install chromium` done once)

```bash
pnpm build:site
ls dist-site/design-system/index.html dist-site/design-system/deck-kit.css dist-site/design-system/assets
grep -c 'href="design-system/"' dist-site/index.html
```
Expected: files exist; grep prints `1`.

- [ ] **Step 7: Run all site-builder tests + lint**

```bash
pnpm -F site-builder test 2>/dev/null || pnpm -F site-builder exec vitest run
```
Expected: all pass.

- [ ] **Step 8: Commit**

```bash
git add tools/site-builder/src
git commit -m "feat(site): publish docs/design-system on Pages + landing link"
```

---

### Task 8: Documentation sync

**Files:**
- Modify: `README.md` (repo root)
- Modify: `CLAUDE.md` (repo root)
- Modify: `packages/deck-kit/README.md`

- [ ] **Step 1: Root `README.md`** — in the "🌐 Live site" table, add a row after the deck rows:

```markdown
| deck-kit Design System（元件參考） | <https://asgard-ai-platform.github.io/asgard-slides/design-system/> |
```

In the Layout tree, add under the repo root listing (after `decks/`):

```
└── docs/
    └── design-system/             # Static design-system reference (published at /design-system/)
```

In the "Deploy" section, after the sentence about the root landing page, append:

```markdown
`docs/design-system/` is copied verbatim to `design-system/` — a static
reference page for every deck-kit token and component.
```

- [ ] **Step 2: `CLAUDE.md`** — in the "Architecture" section, append a bullet:

```markdown
**The design-system reference is a static port, not generated.**
`docs/design-system/` (published at `/asgard-slides/design-system/`) mirrors
deck-kit's tokens and component CSS as plain HTML/CSS. When you add or change
a deck-kit component, manually sync the reference page (add a specimen +
matching `.dk-*` CSS block) — it drifts otherwise.
```

- [ ] **Step 3: `packages/deck-kit/README.md`** — read the file first; extend its public-API component listing with the 9 new components, in the same format the file already uses. Primitives: `Callout`, `Badge`, `Avatar` / `Persona` / `Facepile`, `BigStat`, `ProgressRing`, `Checklist`, `Legend`; layouts: `Agenda`, `Compare`; plus note `Quote` now accepts `cite?: ReactNode`. One line each, prop signatures as in the source.

- [ ] **Step 4: Commit**

```bash
git add README.md CLAUDE.md packages/deck-kit/README.md
git commit -m "docs: document design-system page + 9 new deck-kit components"
```

---

### Task 9: Visual verification against the reference page

**Files:**
- Create (temporary, deleted in this task): `decks/asgard-ai-agent-workshop/src/slides/102-kit-scratch.tsx`

The workshop deck has slides 01–101, so the scratch slide must be `102-` to keep prefixes sequential (discovery asserts contiguous prefixes at boot).

- [ ] **Step 1: Create the scratch slide** at `decks/asgard-ai-agent-workshop/src/slides/102-kit-scratch.tsx`:

```tsx
import {
  SlideShell, Kicker, Quote, Callout, Badge, Persona, Facepile, BigStat,
  ProgressRing, Checklist, Legend, Agenda, Compare,
} from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Kit scratch", section: "scratch", theme: "dark" };

export default function KitScratch() {
  return (
    <SlideShell>
      <Kicker>SCRATCH · extended components</Kicker>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <Callout variant="warn" title="標題">
            <p>Callout 內文。</p>
          </Callout>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <Badge status="info">INFO</Badge>
            <Badge status="good">GOOD</Badge>
            <Badge status="bad">BAD</Badge>
            <Badge>NEUTRAL</Badge>
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 12 }}>
            <BigStat value={<><em>99.2</em>%</>} label="Task Success Rate" delta="6.4% vs. baseline" trend="up" />
            <ProgressRing pct={72} />
            <ProgressRing pct={99} tone="good" />
          </div>
          <Checklist items={[{ text: "支援 ✓" }, { text: "不支援", ok: false }]} />
          <Legend items={[{ label: "Model", color: "var(--brand)" }, { label: "Tools", color: "var(--good)" }]} />
        </div>
        <div>
          <Quote compact cite={<Persona initials="WW" name="WJ Wang" role="Platform Architect · Asgard AI" />}>
            引言與署名。
          </Quote>
          <Agenda
            items={[
              { title: "建立共同語言", sub: "Chat / Agent", time: "10 min", state: "done" },
              { title: "拆解 MCP", time: "15 min", state: "active" },
              { title: "治理與落地", time: "20 min" },
            ]}
          />
          <Compare
            pros={{ head: "採用", items: ["上手快", "可治理"] }}
            cons={{ head: "不採用", items: ["黑盒", "難稽核"] }}
          />
          <div style={{ marginTop: 12 }}>
            <Facepile people={[{ initials: "WW" }, { initials: "AI" }, { initials: "DK" }]} />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
```

- [ ] **Step 2: Start the dev server in the background**

```bash
pnpm -F asgard-ai-agent-workshop dev
```
(Background; default port 5173.)

- [ ] **Step 3: Screenshot the scratch slide and reference page via Playwright MCP**

- Resize browser to 1280×800; navigate to `http://localhost:5173/#102`; take screenshot; Read the PNG.
- Navigate to `http://localhost:5173` is not needed for the reference — open `docs/design-system/index.html` via `file://` URL; screenshot the Extended-components sections (scroll to the `Callout` specimen anchor); Read the PNG.
- Compare each component visually: accent colors, border radii, icon shapes, spacing rhythm. Cosmetic deviation = fix the module CSS against the `.dk-*` source block.

- [ ] **Step 4: Delete the scratch slide and stop the dev server**

```bash
rm decks/asgard-ai-agent-workshop/src/slides/102-kit-scratch.tsx
```

- [ ] **Step 5: Confirm nothing leaked into the working tree**

```bash
git status --porcelain
```
Expected: empty (or only files already committed in prior tasks).

No commit in this task unless a CSS fix was made — then:
```bash
git add packages/deck-kit/src
git commit -m "fix(deck-kit): align extended components with reference page"
```

---

### Task 10: Full workspace verification

- [ ] **Step 1: Workspace-wide checks** (deck-kit was touched — both decks must still build)

```bash
pnpm -r typecheck && pnpm -r lint && pnpm -r test && pnpm -r build
```
Expected: all green; both decks build.

- [ ] **Step 2: Site build smoke test**

```bash
pnpm build:site
ls dist-site/design-system/index.html
```
Expected: builds; file exists.

- [ ] **Step 3: Done** — hand off via superpowers:finishing-a-development-branch (merge to `main` pushes Pages deploy automatically).
