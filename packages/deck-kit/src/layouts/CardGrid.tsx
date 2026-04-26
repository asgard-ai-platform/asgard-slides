import type { ReactNode } from "react";
import styles from "./CardGrid.module.css";

interface CardGridProps {
  columns: 2 | 3 | 4;
  children: ReactNode;
}

export function CardGrid({ columns, children }: CardGridProps) {
  const cls = columns === 2 ? styles.cols2 : columns === 3 ? styles.cols3 : styles.cols4;
  return <div className={cls}>{children}</div>;
}
