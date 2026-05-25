import type { ReactNode } from "react";
import styles from "./Table.module.css";

interface TableProps {
  compact?: boolean;
  financial?: boolean;
  striped?: boolean;
  children: ReactNode;
}

export function Table({ compact, financial, striped, children }: TableProps) {
  const cls = [
    styles.table,
    compact ? styles.compact : "",
    financial ? styles.financial : "",
    striped ? styles.striped : "",
  ].filter(Boolean).join(" ");
  return <table className={cls}>{children}</table>;
}
