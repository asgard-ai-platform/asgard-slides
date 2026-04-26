import type { ReactNode } from "react";
import type { SlideTheme } from "../types";
import styles from "./SlideShell.module.css";

interface SlideShellProps {
  variant?: SlideTheme;
  /** Whether this is the currently-shown slide. Reserved for future
   *  emphasis (e.g. presenter-view highlighting); the carousel layout
   *  handles visibility via track translation, not this flag. */
  active?: boolean;
  slideNumber: number;
  total: number;
  children: ReactNode;
}

export function SlideShell({ variant = "dark", slideNumber, total, children }: SlideShellProps) {
  return (
    <section
      className={styles.slide}
      data-variant={variant}
    >
      {children}
      <span className={styles.slideNo}>
        {String(slideNumber).padStart(2, "0")} / {total}
      </span>
    </section>
  );
}
