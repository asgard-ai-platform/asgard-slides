import type { ReactNode } from "react";
import styles from "./TermRow.module.css";

export interface Term {
  term: ReactNode;
  definition: ReactNode;
  example?: ReactNode;
}

export function TermRow({ items }: { items: Term[] }) {
  return (
    <div className={styles.termStack}>
      {items.map((t, i) => (
        <div key={i} className={styles.termRow}>
          <b>{t.term}</b>
          <p>{t.definition}</p>
          <small>{t.example}</small>
        </div>
      ))}
    </div>
  );
}
