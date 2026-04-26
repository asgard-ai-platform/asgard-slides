import type { ReactNode } from "react";
import styles from "./Credential.module.css";

export function Credential({ children }: { children: ReactNode }) {
  return <div className={styles.credential}>{children}</div>;
}
