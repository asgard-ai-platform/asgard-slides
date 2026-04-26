import type { ReactNode } from "react";
import styles from "./Quote.module.css";

interface QuoteProps { children: ReactNode; compact?: boolean; }

export function Quote({ children, compact }: QuoteProps) {
  return <div className={`${styles.quote} ${compact ? styles.compact : ""}`}>{children}</div>;
}
