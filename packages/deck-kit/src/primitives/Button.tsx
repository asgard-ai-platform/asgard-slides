import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function Button({ variant = "primary", href, onClick, children }: ButtonProps) {
  const cls = `${styles.btn} ${variant === "secondary" ? styles.secondary : styles.primary}`;
  if (href) {
    return <a className={cls} href={href}>{children}</a>;
  }
  return <button type="button" className={cls} onClick={onClick}>{children}</button>;
}
