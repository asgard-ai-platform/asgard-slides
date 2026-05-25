import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  eyebrow: ReactNode;
  title: ReactNode;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.rule} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
