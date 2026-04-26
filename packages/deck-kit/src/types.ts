import type { ComponentType } from "react";

export type SlideTheme = "dark" | "light" | "paper";

export interface SlideMeta {
  /** Required — used for navigation, ToC, presenter view. */
  title: string;
  /** Optional section label, e.g. "第 3 層：Harness". */
  section?: string;
  /** Background variant. Defaults to "dark". */
  theme?: SlideTheme;
  /** Estimated time on this slide (seconds) — for future presenter timer. */
  estimatedSeconds?: number;
}

export interface SlideModule {
  default: ComponentType;
  meta: SlideMeta;
  notes?: string;
}

export interface SlideEntry {
  id: string;
  Component: ComponentType;
  meta: SlideMeta;
  notes?: string;
}

/**
 * Optional chapter / section grouping for the deck. Each chapter applies
 * from `startSlide` (1-indexed) to the next chapter's `startSlide - 1`
 * (or the end of the deck). Used by the overview UI to group slide cards
 * under chapter headers.
 */
export interface Chapter {
  startSlide: number;
  title: string;
  /** Optional one-line subtitle / summary shown next to the title. */
  subtitle?: string;
}
