import type { CSSProperties, ReactNode } from "react";
import styles from "./Legend.module.css";

export interface LegendItem {
  label: ReactNode;
  /** Any CSS color — typically a token, e.g. "var(--good)". */
  color: string;
}

interface LegendProps {
  items: LegendItem[];
}

export function Legend({ items }: LegendProps) {
  return (
    <div className={styles.legend}>
      {items.map((item, i) => (
        <span key={i} className={styles.item} style={{ "--accent": item.color } as CSSProperties}>
          <span className={styles.swatch} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
