import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  status?: "info" | "good" | "warn" | "bad" | "neutral";
  children: ReactNode;
}

export function Badge({ status = "neutral", children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[status]}`}>{children}</span>;
}
