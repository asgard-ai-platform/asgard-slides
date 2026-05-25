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
