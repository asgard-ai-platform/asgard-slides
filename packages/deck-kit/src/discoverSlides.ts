import type { SlideModule, SlideEntry } from "./types";

// Filename prefix is at least 2 digits (zero-padded). 100+ slides are allowed.
const SLIDE_ID_RE = /\/(\d{2,})-([\w-]+)\.tsx$/;
const PREFIX_RE = /^(\d{2,})-/;

export function assertSequentialPrefixes(ids: string[]): void {
  if (ids.length === 0) return;

  const prefixes = ids.map((id) => {
    const m = id.match(PREFIX_RE);
    if (!m) throw new Error(`Slide id "${id}" does not start with a 2+ digit prefix.`);
    return parseInt(m[1], 10);
  });

  const seen = new Set<number>();
  for (const n of prefixes) {
    if (seen.has(n)) throw new Error(`Duplicate slide prefix: ${String(n).padStart(2, "0")}`);
    seen.add(n);
  }

  const sorted = [...prefixes].sort((a, b) => a - b);
  if (sorted[0] !== 1) {
    throw new Error(`Slide prefixes must start at 01 (got ${String(sorted[0]).padStart(2, "0")})`);
  }
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] + 1) {
      throw new Error(`Missing slide prefix between ${String(sorted[i - 1]).padStart(2, "0")} and ${String(sorted[i]).padStart(2, "0")}`);
    }
  }
}

function prefixOf(path: string): number {
  const m = path.match(SLIDE_ID_RE);
  return m ? parseInt(m[1], 10) : 0;
}

export function discoverSlides(): SlideEntry[] {
  const modules = import.meta.glob<SlideModule>("/src/slides/*.tsx", { eager: true });
  // Numeric sort: lexicographic would put "100-" between "1-" and "11-".
  const entries = Object.entries(modules)
    .sort(([a], [b]) => prefixOf(a) - prefixOf(b))
    .map(([path, mod]) => {
      const m = path.match(SLIDE_ID_RE);
      if (!m) throw new Error(`Slide file "${path}" does not match NN-name.tsx`);
      const id = `${m[1]}-${m[2]}`;
      return { id, Component: mod.default, meta: mod.meta, notes: mod.notes };
    });

  assertSequentialPrefixes(entries.map((e) => e.id));
  return entries;
}
