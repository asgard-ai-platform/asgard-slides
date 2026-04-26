import type { ReactNode } from "react";
import styles from "./Kicker.module.css";

interface KickerProps {
  children: ReactNode;
  /** Optional architecture-layer suffix shown after a separator, e.g. "L2 · Tools / MCP". */
  layer?: string;
}

export function Kicker({ children, layer }: KickerProps) {
  return <span className={styles.kicker} data-layer={layer}>{children}</span>;
}
