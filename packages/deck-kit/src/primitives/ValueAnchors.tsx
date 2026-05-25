import type { ReactNode } from "react";
import styles from "./ValueAnchors.module.css";

interface ValueAnchorItem {
  title: ReactNode;
  desc: ReactNode;
}

interface ValueAnchorsProps {
  items: ValueAnchorItem[];
}

export function ValueAnchors({ items }: ValueAnchorsProps) {
  return (
    <ul className={styles.list}>
      {items.map((it, i) => (
        <li key={i}>
          <b className={styles.title}>{it.title}</b>
          <span className={styles.desc}>{it.desc}</span>
        </li>
      ))}
    </ul>
  );
}
