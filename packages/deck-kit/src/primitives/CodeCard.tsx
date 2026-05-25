import styles from "./CodeCard.module.css";

interface CodeCardProps {
  children: string;
  numbered?: boolean;
}

export function CodeCard({ children, numbered }: CodeCardProps) {
  if (numbered) {
    const lineCount = children.split("\n").length;
    const nums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
    return (
      <div className={`${styles.card} ${styles.numbered}`}>
        <pre className={styles.lineNums} aria-hidden="true">{nums}</pre>
        <pre className={styles.code}>{children}</pre>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <pre className={styles.code}>{children}</pre>
    </div>
  );
}
