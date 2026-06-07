import type { ReactNode } from "react";
import styles from "./Quote.module.css";

interface QuoteProps {
  children: ReactNode;
  compact?: boolean;
  /** Attribution rendered below the quote — typically a <Persona>. */
  cite?: ReactNode;
}

export function Quote({ children, compact, cite }: QuoteProps) {
  const quote = <div className={`${styles.quote} ${compact ? styles.compact : ""}`}>{children}</div>;
  if (!cite) return quote;
  return (
    <>
      {quote}
      <div className={styles.cite}>{cite}</div>
    </>
  );
}
