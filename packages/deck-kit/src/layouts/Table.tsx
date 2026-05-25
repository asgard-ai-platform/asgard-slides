import type { ReactNode } from "react";
import styles from "./Table.module.css";

/**
 * kami-styled table. Consumers write native <thead>/<tbody>/<tr>/<td>.
 * Mark special rows with attributes:
 *   <tr data-total>     — totals row (bold, brand top border)
 *   <tr data-highlight> — emphasis row (panel2 bg + brand-on-dark text)
 */
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
