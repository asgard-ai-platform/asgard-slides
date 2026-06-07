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
