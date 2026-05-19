import type { ReactNode } from "react";
import styles from "./Stat.module.css";

interface StatProps {
  /** The big number, e.g. "28.2%" or "NT$ 8.26 億". */
  value: ReactNode;
  /** Short label below the number, e.g. "POLARIS 佔比". */
  label: ReactNode;
  /** Optional one-line caption below the label. */
  caption?: ReactNode;
  /** Visual emphasis: "default" or "alert" (red tone) or "ok" (green). */
  tone?: "default" | "alert" | "ok";
}

export function Stat({ value, label, caption, tone = "default" }: StatProps) {
  return (
    <div className={styles.stat} data-tone={tone}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  );
}
