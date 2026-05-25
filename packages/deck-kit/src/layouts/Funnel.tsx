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
