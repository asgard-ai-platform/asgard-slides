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
