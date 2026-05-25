import type { ReactNode } from "react";
import styles from "./ModuleNote.module.css";

interface ModuleNoteProps {
  label?: ReactNode;
  children: ReactNode;
}

export function ModuleNote({ label, children }: ModuleNoteProps) {
  return (
    <div className={styles.note}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
