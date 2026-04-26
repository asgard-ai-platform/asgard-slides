import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  variant?: "default" | "strong";
  children: ReactNode;
  className?: string;
}

export function Card({ variant = "default", children, className }: CardProps) {
  const cls = [styles.card, variant === "strong" ? styles.strong : "", className ?? ""]
    .filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}
