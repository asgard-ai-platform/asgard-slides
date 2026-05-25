# kami-dark P2b — New kami Components Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 12 new kami components to deck-kit (8 primitives + 4 layouts) as a reusable kami-dark component library, wired into the public barrel, without modifying any existing component/token/slide.

**Architecture:** Each component is a small presentational React component (`X.tsx` + `X.module.css`) following the existing deck-kit pattern, styled only with the kami-dark tokens from P1. Components are exported from `primitives/index.ts` or `layouts/index.ts` and re-exported from the root barrel `index.ts`. Pure additions — the only edits to existing files are appended `export` lines in the three index files.

**Tech Stack:** React + TypeScript, CSS Modules, Vite, pnpm workspace, deck-kit.

**Spec:** `docs/superpowers/specs/2026-05-25-kami-dark-p2b-new-components-design.md`

**Verification note (TDD adaptation):** These are presentational components with no logic to unit-test. Per-task verification is `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint` (compiles + barrel resolves) plus, after wiring, `pnpm -F asgard-ai-agent-workshop typecheck` (the deck app can import the new names from `"deck-kit"`). Final visual confirmation is a temporary kitchen-sink demo slide that the controller screenshots, then deletes (Task 7).

**Tokens available (from P1, do not invent new ones):** `--bg --bg2 --ink --muted --line --card --panel --panel2 --brand --brand-bright --brand-on-dark --brand-tint --cyan --cyan2 --good --warn --bad --shadow --font-sans --font-mono`.

**Existing code style to match:** `import type { ReactNode } from "react";` + `import styles from "./X.module.css";`. Components are named exports (`export function X(...)`). See `primitives/Card.tsx` / `layouts/SectionTitle.tsx` for reference.

---

## Task 1: Metric (primitive) + GlanceGrid (layout)

**Files:**
- Create: `packages/deck-kit/src/primitives/Metric.tsx`, `packages/deck-kit/src/primitives/Metric.module.css`
- Create: `packages/deck-kit/src/layouts/GlanceGrid.tsx`, `packages/deck-kit/src/layouts/GlanceGrid.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/layouts/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `Metric.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Metric.module.css";

interface MetricProps {
  value: ReactNode;
  label: ReactNode;
}

export function Metric({ value, label }: MetricProps) {
  return (
    <span className={styles.metric}>
      <b className={styles.value}>{value}</b>
      <span className={styles.label}>{label}</span>
    </span>
  );
}
```

- [ ] **Step 2: Create `Metric.module.css`**

```css
.metric { display: inline-flex; align-items: baseline; gap: 8px; }
.value {
  font-size: 32px;
  font-weight: 820;
  color: var(--brand-on-dark);
  font-variant-numeric: tabular-nums;
  line-height: 1.05;
}
.label { font-size: 14px; color: var(--muted); }
```

- [ ] **Step 3: Create `GlanceGrid.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./GlanceGrid.module.css";

export interface GlanceCell {
  label: ReactNode;
  value: ReactNode;
  note?: ReactNode;
}

interface GlanceGridProps {
  items: GlanceCell[];
}

export function GlanceGrid({ items }: GlanceGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((it, i) => (
        <div className={styles.cell} key={i}>
          <div className={styles.label}>{it.label}</div>
          <div className={styles.value}>{it.value}</div>
          {it.note && <div className={styles.note}>{it.note}</div>}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `GlanceGrid.module.css`**

```css
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
.cell { padding: 12px 0 10px 16px; border-left: 2px solid var(--brand); }
.label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--brand-on-dark);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}
.value {
  margin-top: 6px;
  font-size: 28px;
  font-weight: 820;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
}
.note { margin-top: 4px; font-size: 13px; color: var(--muted); line-height: 1.35; }
```

- [ ] **Step 5: Wire exports**

In `packages/deck-kit/src/primitives/index.ts`, append:
```ts
export { Metric } from "./Metric";
```
In `packages/deck-kit/src/layouts/index.ts`, append:
```ts
export { GlanceGrid } from "./GlanceGrid";
export type { GlanceCell } from "./GlanceGrid";
```
In `packages/deck-kit/src/index.ts`, add `Metric` to the names in the `export { ... } from "./primitives";` block, add `GlanceGrid` to the `export { ... } from "./layouts";` block, and add `GlanceCell` to the `export type { ... } from "./layouts";` line.

- [ ] **Step 6: Verify**

Run: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test`
Expected: typecheck clean, lint clean, 12 tests pass.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/primitives/Metric.tsx packages/deck-kit/src/primitives/Metric.module.css packages/deck-kit/src/layouts/GlanceGrid.tsx packages/deck-kit/src/layouts/GlanceGrid.module.css packages/deck-kit/src/primitives/index.ts packages/deck-kit/src/layouts/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add Metric + GlanceGrid kami components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Button + DashList (primitives)

**Files:**
- Create: `packages/deck-kit/src/primitives/Button.tsx`, `Button.module.css`, `DashList.tsx`, `DashList.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `Button.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function Button({ variant = "primary", href, onClick, children }: ButtonProps) {
  const cls = `${styles.btn} ${variant === "secondary" ? styles.secondary : styles.primary}`;
  if (href) {
    return <a className={cls} href={href}>{children}</a>;
  }
  return <button type="button" className={cls} onClick={onClick}>{children}</button>;
}
```

- [ ] **Step 2: Create `Button.module.css`**

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  border-radius: 8px;
  font: 760 15px var(--font-sans);
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s, border-color 0.15s;
}
.primary { background: var(--brand); color: var(--ink); }
.primary:hover { background: var(--brand-bright); }
.secondary { background: var(--panel2); color: var(--ink); border-color: var(--line); }
.secondary:hover { border-color: var(--brand); }
```

- [ ] **Step 3: Create `DashList.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./DashList.module.css";

interface DashListProps {
  items: ReactNode[];
}

export function DashList({ items }: DashListProps) {
  return (
    <ul className={styles.list}>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}
```

- [ ] **Step 4: Create `DashList.module.css`**

```css
.list { list-style: none; padding: 0; margin: 16px 0 0; }
.list li {
  position: relative;
  padding-left: 18px;
  margin: 7px 0;
  font-size: 16px;
  line-height: 1.4;
  color: var(--ink);
}
.list li::before {
  content: "\2013";
  position: absolute;
  left: 0;
  color: var(--brand-on-dark);
}
```

- [ ] **Step 5: Wire exports**

In `primitives/index.ts`, append:
```ts
export { Button } from "./Button";
export { DashList } from "./DashList";
```
In root `index.ts`, add `Button, DashList` to the `export { ... } from "./primitives";` block.

- [ ] **Step 6: Verify** — Run: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint` → clean.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/primitives/Button.tsx packages/deck-kit/src/primitives/Button.module.css packages/deck-kit/src/primitives/DashList.tsx packages/deck-kit/src/primitives/DashList.module.css packages/deck-kit/src/primitives/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add Button + DashList kami components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: ModuleBlock + ModuleNote (primitives)

**Files:**
- Create: `packages/deck-kit/src/primitives/ModuleBlock.tsx`, `ModuleBlock.module.css`, `ModuleNote.tsx`, `ModuleNote.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `ModuleBlock.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./ModuleBlock.module.css";

interface ModuleBlockProps {
  letter: string;
  title: ReactNode;
  sub?: ReactNode;
  children: ReactNode;
}

export function ModuleBlock({ letter, title, sub, children }: ModuleBlockProps) {
  return (
    <div className={styles.module}>
      <div className={styles.head}>
        <span className={styles.letter}>{letter}</span>
        <div>
          <div className={styles.title}>{title}</div>
          {sub && <div className={styles.sub}>{sub}</div>}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
```

- [ ] **Step 2: Create `ModuleBlock.module.css`**

```css
.module { margin-top: 18px; }
.head {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}
.letter { font-size: 30px; font-weight: 820; color: var(--brand-on-dark); line-height: 1; }
.title { font-size: 18px; font-weight: 760; color: var(--ink); line-height: 1.15; }
.sub {
  margin-top: 3px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-on-dark);
}
.body { margin-top: 10px; color: var(--muted); font-size: 16px; line-height: 1.4; }
```

- [ ] **Step 3: Create `ModuleNote.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./ModuleNote.module.css";

interface ModuleNoteProps {
  label?: ReactNode;
  children: ReactNode;
}

export function ModuleNote({ label, children }: ModuleNoteProps) {
  return (
    <div className={styles.note}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
```

- [ ] **Step 4: Create `ModuleNote.module.css`**

```css
.note { margin-top: 14px; padding: 12px 15px; background: var(--panel); border-radius: 8px; }
.label {
  margin-bottom: 5px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand-on-dark);
}
.body { color: var(--muted); font-size: 15px; line-height: 1.4; }
```

- [ ] **Step 5: Wire exports**

In `primitives/index.ts`, append:
```ts
export { ModuleBlock } from "./ModuleBlock";
export { ModuleNote } from "./ModuleNote";
```
In root `index.ts`, add `ModuleBlock, ModuleNote` to the `export { ... } from "./primitives";` block.

- [ ] **Step 6: Verify** — Run: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint` → clean.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/primitives/ModuleBlock.tsx packages/deck-kit/src/primitives/ModuleBlock.module.css packages/deck-kit/src/primitives/ModuleNote.tsx packages/deck-kit/src/primitives/ModuleNote.module.css packages/deck-kit/src/primitives/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add ModuleBlock + ModuleNote kami components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: PricingCard + ValueAnchors (primitives)

**Files:**
- Create: `packages/deck-kit/src/primitives/PricingCard.tsx`, `PricingCard.module.css`, `ValueAnchors.tsx`, `ValueAnchors.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `PricingCard.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./PricingCard.module.css";

interface PricingCardProps {
  eyebrow?: ReactNode;
  currency?: ReactNode;
  amount: ReactNode;
  unit?: ReactNode;
  note?: ReactNode;
}

export function PricingCard({ eyebrow, currency, amount, unit, note }: PricingCardProps) {
  return (
    <div className={styles.card}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <div className={styles.price}>
        {currency && <span className={styles.currency}>{currency}</span>}
        <span className={styles.amount}>{amount}</span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      {note && <div className={styles.note}>{note}</div>}
    </div>
  );
}
```

- [ ] **Step 2: Create `PricingCard.module.css`**

```css
.card { margin-top: 16px; }
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}
.price { display: flex; align-items: baseline; gap: 6px; }
.currency { font-size: 24px; font-weight: 760; color: var(--brand-on-dark); }
.amount {
  font-size: 44px;
  font-weight: 820;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  line-height: 1;
}
.unit { font-size: 16px; color: var(--muted); }
.note { margin-top: 8px; font-size: 14px; color: var(--muted); }
```

- [ ] **Step 3: Create `ValueAnchors.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./ValueAnchors.module.css";

interface ValueAnchorItem {
  title: ReactNode;
  desc: ReactNode;
}

interface ValueAnchorsProps {
  items: ValueAnchorItem[];
}

export function ValueAnchors({ items }: ValueAnchorsProps) {
  return (
    <ul className={styles.list}>
      {items.map((it, i) => (
        <li key={i}>
          <b className={styles.title}>{it.title}</b>
          <span className={styles.desc}>{it.desc}</span>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 4: Create `ValueAnchors.module.css`**

```css
.list { list-style: none; padding: 0; margin: 16px 0; }
.list li {
  position: relative;
  padding: 9px 0 9px 18px;
  border-bottom: 1px solid var(--line);
  line-height: 1.45;
  font-size: 16px;
}
.list li:last-child { border-bottom: none; }
.list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 18px;
  width: 8px;
  height: 1.5px;
  background: var(--brand);
}
.title { color: var(--brand-on-dark); font-weight: 760; margin-right: 8px; }
.desc { color: var(--muted); }
```

- [ ] **Step 5: Wire exports**

In `primitives/index.ts`, append:
```ts
export { PricingCard } from "./PricingCard";
export { ValueAnchors } from "./ValueAnchors";
```
In root `index.ts`, add `PricingCard, ValueAnchors` to the `export { ... } from "./primitives";` block.

- [ ] **Step 6: Verify** — Run: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint` → clean.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/primitives/PricingCard.tsx packages/deck-kit/src/primitives/PricingCard.module.css packages/deck-kit/src/primitives/ValueAnchors.tsx packages/deck-kit/src/primitives/ValueAnchors.module.css packages/deck-kit/src/primitives/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add PricingCard + ValueAnchors kami components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: CodeCard (primitive) + Table (layout)

**Files:**
- Create: `packages/deck-kit/src/primitives/CodeCard.tsx`, `CodeCard.module.css`, `packages/deck-kit/src/layouts/Table.tsx`, `Table.module.css`
- Modify: `packages/deck-kit/src/primitives/index.ts`, `packages/deck-kit/src/layouts/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `CodeCard.tsx`**

```tsx
import styles from "./CodeCard.module.css";

interface CodeCardProps {
  children: string;
  numbered?: boolean;
}

export function CodeCard({ children, numbered }: CodeCardProps) {
  if (numbered) {
    const lineCount = children.split("\n").length;
    const nums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
    return (
      <div className={`${styles.card} ${styles.numbered}`}>
        <pre className={styles.lineNums} aria-hidden="true">{nums}</pre>
        <pre className={styles.code}>{children}</pre>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <pre className={styles.code}>{children}</pre>
    </div>
  );
}
```

- [ ] **Step 2: Create `CodeCard.module.css`**

```css
.card {
  margin-top: 16px;
  padding: 18px 20px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}
.code {
  margin: 0;
  font: 14px/1.55 var(--font-mono);
  color: var(--ink);
  white-space: pre;
}
.numbered { display: grid; grid-template-columns: auto 1fr; gap: 0 16px; }
.lineNums {
  margin: 0;
  font: 14px/1.55 var(--font-mono);
  color: var(--muted);
  text-align: right;
  border-right: 1px solid var(--line);
  padding-right: 12px;
  user-select: none;
}
```

- [ ] **Step 3: Create `Table.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Table.module.css";

interface TableProps {
  compact?: boolean;
  financial?: boolean;
  striped?: boolean;
  children: ReactNode;
}

export function Table({ compact, financial, striped, children }: TableProps) {
  const cls = [
    styles.table,
    compact ? styles.compact : "",
    financial ? styles.financial : "",
    striped ? styles.striped : "",
  ].filter(Boolean).join(" ");
  return <table className={cls}>{children}</table>;
}
```

- [ ] **Step 4: Create `Table.module.css`**

Consumers write native `<thead>/<tbody>/<tr>/<td>`, and mark special rows with `<tr data-total>` / `<tr data-highlight>`. The `:global(...)` wrapper lets the scoped table style those attribute-flagged rows.

```css
.table { width: 100%; border-collapse: collapse; font-size: 16px; margin-top: 20px; }
.table th {
  text-align: left;
  font-weight: 600;
  color: var(--muted);
  padding: 8px 10px;
  border-bottom: 1px solid var(--line);
}
.table td {
  padding: 7px 10px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
  color: var(--ink);
}
.compact { font-size: 14px; }
.compact th, .compact td { padding: 6px 8px; }
.financial th:not(:first-child),
.financial td:not(:first-child) { text-align: right; font-variant-numeric: tabular-nums; }
.striped tbody tr:nth-child(even) td { background: var(--panel); }
.table :global(tr[data-total]) td {
  font-weight: 760;
  color: var(--ink);
  border-top: 1px solid var(--brand);
}
.table :global(tr[data-highlight]) td {
  background: var(--panel2);
  color: var(--brand-on-dark);
}
```

- [ ] **Step 5: Wire exports**

In `primitives/index.ts`, append:
```ts
export { CodeCard } from "./CodeCard";
```
In `layouts/index.ts`, append:
```ts
export { Table } from "./Table";
```
In root `index.ts`, add `CodeCard` to the primitives block and `Table` to the layouts block.

- [ ] **Step 6: Verify** — Run: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint` → clean.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/primitives/CodeCard.tsx packages/deck-kit/src/primitives/CodeCard.module.css packages/deck-kit/src/layouts/Table.tsx packages/deck-kit/src/layouts/Table.module.css packages/deck-kit/src/primitives/index.ts packages/deck-kit/src/layouts/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add CodeCard + Table kami components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: SectionHeader + Funnel (layouts)

**Files:**
- Create: `packages/deck-kit/src/layouts/SectionHeader.tsx`, `SectionHeader.module.css`, `Funnel.tsx`, `Funnel.module.css`
- Modify: `packages/deck-kit/src/layouts/index.ts`, `packages/deck-kit/src/index.ts`

- [ ] **Step 1: Create `SectionHeader.tsx`**

Note: render the title as a `<div>`, NOT `<h1>` — the global `h1` rule in `globals.css` has a large `clamp()` size that would override this component's intended 38px.

```tsx
import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  eyebrow: ReactNode;
  title: ReactNode;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.rule} />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
```

- [ ] **Step 2: Create `SectionHeader.module.css`**

```css
.header { margin-bottom: 36px; }
.eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 14px;
}
.eyebrow::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand);
  flex-shrink: 0;
}
.rule { height: 1px; background: var(--line); margin-bottom: 36px; }
.title { font-size: 38px; font-weight: 820; line-height: 1.1; color: var(--ink); }
```

- [ ] **Step 3: Create `Funnel.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Funnel.module.css";

export interface FunnelRow {
  label: ReactNode;
  pct: number;
  count?: ReactNode;
}

interface FunnelProps {
  rows: FunnelRow[];
}

export function Funnel({ rows }: FunnelProps) {
  return (
    <div className={styles.funnel}>
      {rows.map((row, i) => (
        <div className={styles.row} key={i}>
          <span className={styles.label}>{row.label}</span>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${row.pct}%` }} />
            {row.count != null && <span className={styles.count}>{row.count}</span>}
          </div>
          <span className={styles.pct}>{row.pct}%</span>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `Funnel.module.css`**

```css
.funnel { margin-top: 20px; }
.row {
  display: grid;
  grid-template-columns: 120px 1fr 48px;
  align-items: center;
  gap: 10px;
  margin: 6px 0;
}
.label { font-size: 14px; color: var(--muted); }
.track {
  position: relative;
  height: 20px;
  background: var(--panel2);
  border-radius: 3px;
  overflow: hidden;
}
.fill { position: absolute; inset: 0 auto 0 0; background: var(--brand); border-radius: 3px; }
.count {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font: 12px var(--font-mono);
  color: var(--ink);
}
.pct { font-variant-numeric: tabular-nums; text-align: right; color: var(--muted); font-size: 13px; }
```

- [ ] **Step 5: Wire exports**

In `layouts/index.ts`, append:
```ts
export { SectionHeader } from "./SectionHeader";
export { Funnel } from "./Funnel";
export type { FunnelRow } from "./Funnel";
```
In root `index.ts`, add `SectionHeader, Funnel` to the layouts block and add `FunnelRow` to the `export type { ... } from "./layouts";` line.

- [ ] **Step 6: Verify** — Run: `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test` → clean, 12 tests pass.

- [ ] **Step 7: Commit**

```bash
git add packages/deck-kit/src/layouts/SectionHeader.tsx packages/deck-kit/src/layouts/SectionHeader.module.css packages/deck-kit/src/layouts/Funnel.tsx packages/deck-kit/src/layouts/Funnel.module.css packages/deck-kit/src/layouts/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add SectionHeader + Funnel kami components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Kitchen-sink demo, visual verify, cleanup

**Files:**
- Create (temporary): `decks/asgard-ai-agent-workshop/src/slides/102-kami-kitchen-sink.tsx`
- Then delete it before finishing.

- [ ] **Step 1: Confirm the deck-app barrel resolves all 12 names**

Run: `pnpm -F asgard-ai-agent-workshop typecheck`
Expected: clean (proves the deck app can see the new exports from `"deck-kit"`).

- [ ] **Step 2: Create the temporary demo slide**

`102` keeps the slide prefixes sequential (current max is `101`). Create `decks/asgard-ai-agent-workshop/src/slides/102-kami-kitchen-sink.tsx`:

```tsx
import {
  Metric, Button, DashList, ModuleBlock, ModuleNote, PricingCard, ValueAnchors, CodeCard,
  GlanceGrid, Table, SectionHeader, Funnel,
  type SlideMeta,
} from "deck-kit";

export const meta: SlideMeta = {
  title: "Kami Kitchen Sink (temp)",
  theme: "dark",
};

export default function Slide() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, overflow: "auto", maxHeight: "100%" }}>
      <div>
        <SectionHeader eyebrow="01 · COMPONENTS" title="Kami 元件總覽" />
        <div style={{ display: "flex", gap: 24 }}>
          <Metric value="99.9%" label="uptime" />
          <Metric value="1,240" label="runs" />
        </div>
        <GlanceGrid items={[
          { label: "Period", value: "Q1 2026", note: "three themes" },
          { label: "Slides", value: "101" },
          { label: "Tokens", value: "23" },
          { label: "Components", value: "12" },
        ]} />
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary" href="#1">Secondary</Button>
        </div>
        <DashList items={["第一個重點", "第二個重點", "第三個重點"]} />
        <Funnel rows={[
          { label: "Visited", pct: 100, count: "1,240" },
          { label: "Engaged", pct: 64, count: "794" },
          { label: "Converted", pct: 22, count: "273" },
        ]} />
      </div>
      <div>
        <ModuleBlock letter="A" title="模組標題" sub="MODULE SUBTITLE">
          一句模組說明文字，描述這個模組的職責。
        </ModuleBlock>
        <ModuleNote label="ABOUT A">這是群組說明，解釋模組之間的關係。</ModuleNote>
        <ValueAnchors items={[
          { title: "能力錨點 A", desc: "一句具體說明能力來源的事實陳述。" },
          { title: "能力錨點 B", desc: "一句具體說明稀缺性的事實陳述。" },
        ]} />
        <PricingCard eyebrow="PROJECT TERM" currency="¥" amount="XXX,XXX" unit="/ term" note="Paid by milestone" />
        <CodeCard numbered>{`def analyze(data):\n    # transform raw input\n    return transform(data)`}</CodeCard>
        <Table financial striped>
          <thead><tr><th>Category</th><th>Q1</th><th>Q2</th></tr></thead>
          <tbody>
            <tr><td>Revenue</td><td>$12.4M</td><td>$14.1M</td></tr>
            <tr data-highlight><td>Core</td><td>$8.0M</td><td>$9.2M</td></tr>
            <tr data-total><td>Total</td><td>$20.4M</td><td>$23.3M</td></tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Build to confirm the demo compiles**

Run: `pnpm -F asgard-ai-agent-workshop typecheck && pnpm -F asgard-ai-agent-workshop build`
Expected: clean (proves all 12 components render-compile and discovery accepts the `102` prefix).

- [ ] **Step 4: Report DONE for controller visual check**

Report status DONE and note the demo slide is in place at `#102`. The controller will run `pnpm -F asgard-ai-agent-workshop dev`, screenshot slide `#102`, and confirm all 12 components render in kami-dark with no broken layout.

- [ ] **Step 5: Delete the demo slide (after controller confirms)**

The controller will instruct when to proceed. Delete the temporary file:
```bash
rm decks/asgard-ai-agent-workshop/src/slides/102-kami-kitchen-sink.tsx
```
Run: `pnpm -F asgard-ai-agent-workshop typecheck && pnpm -F asgard-ai-agent-workshop build`
Expected: clean; discovery is back to `01`–`101`.

- [ ] **Step 6: Commit the cleanup** (only the deletion; the demo was never committed, so there may be nothing to commit — confirm with `git status`)

```bash
git status --short
# If 102 was never committed, there is nothing to commit — the working tree is clean after rm.
```

---

## Self-review (completed by plan author)

**Spec coverage:** All 12 components have a creation task with full tsx+css (Metric, GlanceGrid → T1; Button, DashList → T2; ModuleBlock, ModuleNote → T3; PricingCard, ValueAnchors → T4; CodeCard, Table → T5; SectionHeader, Funnel → T6). Export wiring (3 index files) included per task. `GlanceCell`/`FunnelRow` types exported (T1/T6). Demo + visual verify + cleanup → T7. CodeCard syntax-coloring correctly omitted (spec non-goal). ✓

**Placeholder scan:** No TBD/TODO; every component shows full tsx + css. ✓

**Type/name consistency:** Exported names match between component files, index files, and the root barrel. `GlanceCell` (T1) and `FunnelRow` (T6) are declared `export interface` in their component files and re-exported via `export type`. Demo slide (T7) imports exactly the 12 names + `SlideMeta`. SectionHeader uses `<div>` not `<h1>` (documented why). Table uses `:global(tr[data-total])` for consumer-written attribute rows. ✓
