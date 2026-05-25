# kami-dark P3 — Structural Diagram Components Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Add 5 CSS-based structural-diagram layout components to deck-kit (LayerStack, Timeline, StateMachine, Tree, Swimlane), following the existing FlowDiagram pattern (CSS grid/flex + text/CSS connectors, no SVG), styled with kami-dark tokens. Pure additions.

**Architecture:** Each is a small presentational React component (`X.tsx` + `X.module.css`) in `packages/deck-kit/src/layouts/`, exported from `layouts/index.ts` and the root barrel. CSS-only layout (no SVG). Tokens from P1.

**Tech Stack:** React + TypeScript, CSS Modules, Vite, deck-kit, pnpm.

**Spec:** `docs/superpowers/specs/2026-05-26-kami-dark-p3-structural-diagrams-design.md`

**Verification (TDD adaptation):** Presentational; no unit tests. Per-task = `pnpm -F deck-kit typecheck && lint`; after wiring `pnpm -F asgard-ai-agent-workshop typecheck`. Final visual = temporary demo slide screenshotted by controller, then deleted.

**Style conventions to match (see `layouts/FlowDiagram.tsx`):** `import { ... type ReactNode } from "react"`, `import styles from "./X.module.css"`, named `export function`. Tokens only: `--ink --muted --line --panel --panel2 --brand --brand-on-dark --cyan2 --bg --font-mono`. 900px breakpoint: horizontal → vertical (like FlowDiagram/TermRow).

---

## Task 1: LayerStack + Timeline

**Files:** Create `packages/deck-kit/src/layouts/LayerStack.tsx`, `LayerStack.module.css`, `Timeline.tsx`, `Timeline.module.css`. Modify `layouts/index.ts`, `index.ts`.

- [ ] **Step 1: Create `LayerStack.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./LayerStack.module.css";

export interface StackLayer {
  label: ReactNode;
  items?: ReactNode[];
  note?: ReactNode;
}

interface LayerStackProps {
  layers: StackLayer[];
}

export function LayerStack({ layers }: LayerStackProps) {
  return (
    <div className={styles.stack}>
      {layers.map((layer, i) => (
        <div className={styles.layer} key={i}>
          <div className={styles.label}>{layer.label}</div>
          <div className={styles.content}>
            {layer.items ? (
              <div className={styles.items}>
                {layer.items.map((it, j) => (
                  <span className={styles.item} key={j}>{it}</span>
                ))}
              </div>
            ) : (
              layer.note && <span className={styles.note}>{layer.note}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `LayerStack.module.css`**

```css
.stack { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; }
.layer {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-left: 2.5px solid var(--brand);
  border-radius: 8px;
  background: var(--panel);
}
.label {
  color: var(--brand-on-dark);
  font: 700 13px var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.content { min-width: 0; }
.items { display: flex; flex-wrap: wrap; gap: 8px; }
.item {
  padding: 5px 10px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--panel2);
  color: var(--ink);
  font-size: 14px;
}
.note { color: var(--muted); font-size: 14px; line-height: 1.35; }

@media (max-width: 900px) {
  .layer { grid-template-columns: 1fr; gap: 6px; }
}
```

- [ ] **Step 3: Create `Timeline.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./Timeline.module.css";

export interface Milestone {
  label: ReactNode;
  title: ReactNode;
  note?: ReactNode;
}

interface TimelineProps {
  items: Milestone[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {items.map((m, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.dot} />
          <div className={styles.label}>{m.label}</div>
          <div className={styles.title}>{m.title}</div>
          {m.note && <div className={styles.note}>{m.note}</div>}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `Timeline.module.css`**

```css
.timeline { display: flex; gap: 12px; margin-top: 24px; }
.item { flex: 1; position: relative; padding-top: 22px; }
.item::before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--line);
}
.dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--brand);
  border: 2px solid var(--bg);
}
.label { color: var(--brand-on-dark); font: 700 12px var(--font-mono); letter-spacing: 0.04em; }
.title { margin-top: 5px; color: var(--ink); font-size: 16px; font-weight: 700; line-height: 1.2; }
.note { margin-top: 4px; color: var(--muted); font-size: 13px; line-height: 1.35; }

@media (max-width: 900px) {
  .timeline { flex-direction: column; gap: 0; }
  .item { padding-top: 0; padding-left: 22px; padding-bottom: 16px; }
  .item::before { top: 0; bottom: 0; left: 6px; right: auto; width: 2px; height: auto; }
}
```

- [ ] **Step 5: Wire exports.** In `layouts/index.ts` append:
```ts
export { LayerStack } from "./LayerStack";
export type { StackLayer } from "./LayerStack";
export { Timeline } from "./Timeline";
export type { Milestone } from "./Timeline";
```
In root `index.ts`: add `LayerStack, Timeline` to the `export { ... } from "./layouts";` block, and add `StackLayer, Milestone` to the `export type { ... } from "./layouts";` line.

- [ ] **Step 6: Verify.** `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test` → clean, 12 tests.

- [ ] **Step 7: Commit.**
```bash
git add packages/deck-kit/src/layouts/LayerStack.tsx packages/deck-kit/src/layouts/LayerStack.module.css packages/deck-kit/src/layouts/Timeline.tsx packages/deck-kit/src/layouts/Timeline.module.css packages/deck-kit/src/layouts/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add LayerStack + Timeline diagrams

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: StateMachine + Tree

**Files:** Create `packages/deck-kit/src/layouts/StateMachine.tsx`, `StateMachine.module.css`, `Tree.tsx`, `Tree.module.css`. Modify `layouts/index.ts`, `index.ts`.

- [ ] **Step 1: Create `StateMachine.tsx`**

```tsx
import { Fragment, type ReactNode } from "react";
import styles from "./StateMachine.module.css";

export interface StateNode {
  name: ReactNode;
  on?: ReactNode;
}

interface StateMachineProps {
  states: StateNode[];
  loop?: boolean;
}

export function StateMachine({ states, loop }: StateMachineProps) {
  return (
    <div className={styles.machine}>
      {states.map((s, i) => (
        <Fragment key={i}>
          <div className={styles.state}>{s.name}</div>
          {i < states.length - 1 && (
            <div className={styles.transition}>
              <span className={styles.arrow}>→</span>
              {s.on && <span className={styles.on}>{s.on}</span>}
            </div>
          )}
        </Fragment>
      ))}
      {loop && <div className={styles.loop}>↺ back to start</div>}
    </div>
  );
}
```

- [ ] **Step 2: Create `StateMachine.module.css`**

```css
.machine { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 20px; }
.state {
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel2);
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
}
.transition { display: inline-flex; flex-direction: column; align-items: center; min-width: 36px; }
.arrow { color: var(--cyan2); font: 700 22px var(--font-mono); line-height: 1; }
.on { color: var(--muted); font: 11px var(--font-mono); }
.loop {
  margin-left: 8px;
  padding: 6px 12px;
  border: 1px dashed var(--line);
  border-radius: 999px;
  color: var(--brand-on-dark);
  font: 700 12px var(--font-mono);
}

@media (max-width: 900px) {
  .machine { flex-direction: column; align-items: stretch; }
  .state { text-align: center; }
  .transition { flex-direction: row; gap: 6px; justify-content: center; }
  .arrow { transform: rotate(90deg); }
}
```

- [ ] **Step 3: Create `Tree.tsx`** (recursive, indented hierarchy)

```tsx
import type { ReactNode } from "react";
import styles from "./Tree.module.css";

export interface TreeNode {
  label: ReactNode;
  children?: TreeNode[];
}

interface TreeProps {
  root: TreeNode;
}

function TreeItem({ node }: { node: TreeNode }) {
  return (
    <li className={styles.node}>
      <span className={styles.label}>{node.label}</span>
      {node.children && node.children.length > 0 && (
        <ul className={styles.children}>
          {node.children.map((child, i) => <TreeItem node={child} key={i} />)}
        </ul>
      )}
    </li>
  );
}

export function Tree({ root }: TreeProps) {
  return (
    <ul className={styles.tree}>
      <TreeItem node={root} />
    </ul>
  );
}
```

- [ ] **Step 4: Create `Tree.module.css`**

```css
.tree, .children { list-style: none; margin: 0; padding: 0; }
.tree { margin-top: 20px; }
.children { margin-left: 22px; border-left: 1px solid var(--line); padding-left: 16px; margin-top: 8px; }
.node { position: relative; margin: 8px 0; }
.children > .node::before {
  content: "";
  position: absolute;
  top: 16px;
  left: -16px;
  width: 12px;
  height: 1px;
  background: var(--line);
}
.label {
  display: inline-block;
  padding: 7px 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  color: var(--ink);
  font-size: 15px;
}
```

- [ ] **Step 5: Wire exports.** In `layouts/index.ts` append:
```ts
export { StateMachine } from "./StateMachine";
export type { StateNode } from "./StateMachine";
export { Tree } from "./Tree";
export type { TreeNode } from "./Tree";
```
In root `index.ts`: add `StateMachine, Tree` to the layouts `export { ... }` block, and `StateNode, TreeNode` to the layouts `export type { ... }` line.

- [ ] **Step 6: Verify.** `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint` → clean.

- [ ] **Step 7: Commit.**
```bash
git add packages/deck-kit/src/layouts/StateMachine.tsx packages/deck-kit/src/layouts/StateMachine.module.css packages/deck-kit/src/layouts/Tree.tsx packages/deck-kit/src/layouts/Tree.module.css packages/deck-kit/src/layouts/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add StateMachine + Tree diagrams

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Swimlane

**Files:** Create `packages/deck-kit/src/layouts/Swimlane.tsx`, `Swimlane.module.css`. Modify `layouts/index.ts`, `index.ts`.

- [ ] **Step 1: Create `Swimlane.tsx`**

```tsx
import { Fragment, type ReactNode } from "react";
import styles from "./Swimlane.module.css";

export interface SwimLane {
  actor: ReactNode;
  steps: (ReactNode | null)[];
}

interface SwimlaneProps {
  columns: ReactNode[];
  lanes: SwimLane[];
}

export function Swimlane({ columns, lanes }: SwimlaneProps) {
  const template = `160px repeat(${columns.length}, 1fr)`;
  return (
    <div className={styles.swimlane} style={{ gridTemplateColumns: template }}>
      <div className={styles.corner} />
      {columns.map((c, i) => (
        <div className={styles.colHead} key={i}>{c}</div>
      ))}
      {lanes.map((lane, r) => (
        <Fragment key={r}>
          <div className={styles.actor}>{lane.actor}</div>
          {columns.map((_, c) => (
            <div className={styles.cell} key={c}>{lane.steps[c] ?? ""}</div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `Swimlane.module.css`**

```css
.swimlane { display: grid; gap: 6px; margin-top: 20px; }
.corner { }
.colHead {
  color: var(--brand-on-dark);
  font: 700 12px var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
  padding: 4px;
}
.actor {
  display: flex;
  align-items: center;
  color: var(--brand-on-dark);
  font: 700 13px var(--font-mono);
  padding-right: 8px;
}
.cell {
  min-height: 48px;
  padding: 8px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  color: var(--ink);
  font-size: 14px;
  line-height: 1.3;
}

@media (max-width: 900px) {
  .swimlane { display: block; }
  .colHead, .corner { display: none; }
  .actor { margin-top: 12px; padding: 0 0 4px; }
  .cell { margin: 4px 0; }
}
```

- [ ] **Step 3: Wire exports.** In `layouts/index.ts` append:
```ts
export { Swimlane } from "./Swimlane";
export type { SwimLane } from "./Swimlane";
```
In root `index.ts`: add `Swimlane` to the layouts `export { ... }` block, and `SwimLane` to the layouts `export type { ... }` line.

- [ ] **Step 4: Verify.** `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test` → clean, 12 tests.

- [ ] **Step 5: Commit.**
```bash
git add packages/deck-kit/src/layouts/Swimlane.tsx packages/deck-kit/src/layouts/Swimlane.module.css packages/deck-kit/src/layouts/index.ts packages/deck-kit/src/index.ts
git commit -m "feat(deck-kit): add Swimlane diagram

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Kitchen-sink demo, visual verify, cleanup

**Files:** Create (temporary) `decks/asgard-ai-agent-workshop/src/slides/102-kami-diagrams.tsx`; then delete.

- [ ] **Step 1: Confirm deck-app barrel resolves all 5.** `pnpm -F asgard-ai-agent-workshop typecheck` → clean.

- [ ] **Step 2: Create the temporary demo slide** (`102` keeps prefixes sequential after `101`):

```tsx
import {
  LayerStack, Timeline, StateMachine, Tree, Swimlane,
  type SlideMeta,
} from "deck-kit";

export const meta: SlideMeta = {
  title: "Kami Diagrams (temp)",
  theme: "dark",
};

export default function Slide() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, overflow: "auto", maxHeight: "100%", fontSize: 13 }}>
      <div>
        <LayerStack layers={[
          { label: "Governance", items: ["Identity", "Approval", "Trace"] },
          { label: "Harness", items: ["Plan", "Route", "Retry"] },
          { label: "Model", note: "推理與生成" },
        ]} />
        <Timeline items={[
          { label: "Q1", title: "Prototype", note: "first MCP" },
          { label: "Q2", title: "Pilot" },
          { label: "Q3", title: "Production" },
        ]} />
        <StateMachine states={[
          { name: "Idle", on: "start" },
          { name: "Running", on: "done" },
          { name: "Review" },
        ]} loop />
      </div>
      <div>
        <Tree root={{
          label: "Agent",
          children: [
            { label: "Tools", children: [{ label: "MCP" }, { label: "CLI" }] },
            { label: "Memory", children: [{ label: "Session" }] },
          ],
        }} />
        <Swimlane
          columns={["Request", "Process", "Respond"]}
          lanes={[
            { actor: "User", steps: ["問問題", null, "看結果"] },
            { actor: "Agent", steps: [null, "呼叫工具", "彙整回答"] },
          ]}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Confirm it compiles.** `pnpm -F asgard-ai-agent-workshop typecheck && pnpm -F asgard-ai-agent-workshop build` → clean.

- [ ] **Step 4: Report DONE for controller visual check.** Controller runs dev, screenshots slide `#102`, confirms all 5 diagrams render in kami-dark with correct layout.

- [ ] **Step 5: Delete the demo (after controller confirms).**
```bash
rm decks/asgard-ai-agent-workshop/src/slides/102-kami-diagrams.tsx
```
Then `pnpm -F asgard-ai-agent-workshop typecheck && pnpm -F asgard-ai-agent-workshop build` → clean; discovery back to 01–101.

- [ ] **Step 6:** `git status --short` — the demo was never committed, so the tree is clean after `rm`. Nothing to commit.

---

## Self-review (plan author)

**Spec coverage:** All 5 components created with full tsx+css (LayerStack+Timeline T1, StateMachine+Tree T2, Swimlane T3). All 5 value exports + 5 type exports (StackLayer, Milestone, StateNode, TreeNode, SwimLane) wired into layouts/index.ts + root barrel. Demo+verify+cleanup T4. CSS-only, no SVG, tokens only. ✓

**Placeholder scan:** No TBD/TODO; full code for every file. ✓

**Type/name consistency:** Exported value names (LayerStack, Timeline, StateMachine, Tree, Swimlane) + type names (StackLayer, Milestone, StateNode, TreeNode, SwimLane) consistent across component files, index files, and demo import. StateMachine + Swimlane import `Fragment`. Tree uses an internal recursive `TreeItem`. ✓
