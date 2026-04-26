import type { ReactNode } from "react";
import styles from "./Steps.module.css";

export interface Step {
  label: ReactNode;
  body: ReactNode;
}

export function Steps({ items }: { items: Step[] }) {
  return (
    <div className={styles.steps}>
      {items.map((step, i) => (
        <div key={i} className={styles.step}>
          <b>{step.label}</b>
          <span>{step.body}</span>
        </div>
      ))}
    </div>
  );
}
