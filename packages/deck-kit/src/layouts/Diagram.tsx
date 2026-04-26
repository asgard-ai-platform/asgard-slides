import type { ReactNode } from "react";
import styles from "./Diagram.module.css";

export function Diagram({ children }: { children: ReactNode }) {
  return <div className={styles.diagram}>{children}</div>;
}
