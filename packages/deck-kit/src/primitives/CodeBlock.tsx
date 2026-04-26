import type { ReactNode } from "react";
import styles from "./CodeBlock.module.css";

export function CodeBlock({ children }: { children: ReactNode }) {
  return <pre className={styles.code}>{children}</pre>;
}
