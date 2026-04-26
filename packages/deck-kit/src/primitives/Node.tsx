import type { ReactNode } from "react";
import styles from "./Node.module.css";

interface NodeProps {
  title: ReactNode;
  children?: ReactNode;
}

export function Node({ title, children }: NodeProps) {
  return (
    <div className={styles.node}>
      <b>{title}</b>
      {children && <span>{children}</span>}
    </div>
  );
}
