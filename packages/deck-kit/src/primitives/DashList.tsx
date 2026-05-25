import type { ReactNode } from "react";
import styles from "./DashList.module.css";

interface DashListProps {
  items: ReactNode[];
}

export function DashList({ items }: DashListProps) {
  return (
    <ul className={styles.list}>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}
