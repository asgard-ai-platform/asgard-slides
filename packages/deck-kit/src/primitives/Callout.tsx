import type { ReactNode } from "react";
import styles from "./Callout.module.css";

const DEFAULT_ICON = { info: "i", good: "✓", warn: "!", bad: "✕" } as const;

interface CalloutProps {
  variant?: "info" | "good" | "warn" | "bad";
  title?: ReactNode;
  /** Overrides the per-variant default icon (i / ✓ / ! / ✕). */
  icon?: ReactNode;
  children: ReactNode;
}

export function Callout({ variant = "info", title, icon, children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles[variant]}`}>
      <div className={styles.icon}>{icon ?? DEFAULT_ICON[variant]}</div>
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    </div>
  );
}
