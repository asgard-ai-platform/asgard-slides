import styles from "./CodeCard.module.css";

interface CodeCardProps {
  children: string;
  numbered?: boolean;
}

export function CodeCard({ children, numbered }: CodeCardProps) {
  const text = children.replace(/\n+$/, "");
  if (numbered) {
    const lineCount = text.split("\n").length;
    const nums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
    return (
      <div className={`${styles.card} ${styles.numbered}`}>
        <pre className={styles.lineNums} aria-hidden="true">{nums}</pre>
        <pre className={styles.code}>{text}</pre>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <pre className={styles.code}>{text}</pre>
    </div>
  );
}
