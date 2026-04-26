import type { ReactNode } from "react";
import styles from "./TwoColumn.module.css";

interface TwoColumnProps {
  left: ReactNode;
  right: ReactNode;
  /** "1:1" (default), "2:1", or "1:2" — column width ratio. */
  ratio?: "1:1" | "2:1" | "1:2";
}

export function TwoColumn({ left, right, ratio = "1:1" }: TwoColumnProps) {
  const ratioCls =
    ratio === "2:1" ? styles.ratioLeftHeavy :
    ratio === "1:2" ? styles.ratioRightHeavy : "";
  return (
    <div className={`${styles.twoColumn} ${ratioCls}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
