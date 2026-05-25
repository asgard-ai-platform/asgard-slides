import type { ReactNode } from "react";
import styles from "./ModuleBlock.module.css";

interface ModuleBlockProps {
  letter: string;
  title: ReactNode;
  sub?: ReactNode;
  children: ReactNode;
}

export function ModuleBlock({ letter, title, sub, children }: ModuleBlockProps) {
  return (
    <div className={styles.module}>
      <div className={styles.head}>
        <span className={styles.letter}>{letter}</span>
        <div>
          <div className={styles.title}>{title}</div>
          {sub && <div className={styles.sub}>{sub}</div>}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
