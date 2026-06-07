import type { ReactNode } from "react";
import styles from "./Checklist.module.css";

export interface ChecklistItem {
  text: ReactNode;
  /** Defaults to true (✓ green); pass false for ✕ red. */
  ok?: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <ul className={styles.checklist}>
      {items.map((item, i) => (
        <li key={i} className={item.ok !== false ? styles.yes : styles.no}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
