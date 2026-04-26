import type { ReactNode } from "react";
import styles from "./Talkbox.module.css";

interface TalkboxProps {
  /** Optional uppercase label rendered as <b>. */
  label?: ReactNode;
  children: ReactNode;
  compact?: boolean;
}

export function Talkbox({ label, children, compact }: TalkboxProps) {
  return (
    <div className={`${styles.talkbox} ${compact ? styles.compact : ""}`}>
      {label && <b>{label}</b>}
      {children}
    </div>
  );
}
