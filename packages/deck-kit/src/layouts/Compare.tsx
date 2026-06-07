import type { ReactNode } from "react";
import styles from "./Compare.module.css";

export interface CompareColumn {
  head: ReactNode;
  items: ReactNode[];
}

interface CompareProps {
  pros: CompareColumn;
  cons: CompareColumn;
}

export function Compare({ pros, cons }: CompareProps) {
  return (
    <div className={styles.compare}>
      <div className={`${styles.col} ${styles.pros}`}>
        <div className={styles.head}>{pros.head}</div>
        <ul>
          {pros.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.col} ${styles.cons}`}>
        <div className={styles.head}>{cons.head}</div>
        <ul>
          {cons.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
