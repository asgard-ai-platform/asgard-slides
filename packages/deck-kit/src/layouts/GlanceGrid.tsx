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
