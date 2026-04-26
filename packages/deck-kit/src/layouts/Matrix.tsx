import type { ReactNode } from "react";
import styles from "./Matrix.module.css";

interface MatrixProps {
  headers: ReactNode[];
  rows: ReactNode[][];
  compact?: boolean;
}

export function Matrix({ headers, rows, compact }: MatrixProps) {
  return (
    <table className={`${styles.matrix} ${compact ? styles.compact : ""}`}>
      <thead>
        <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}
