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
