import { Fragment, type ReactNode } from "react";
import styles from "./Swimlane.module.css";

export interface SwimLane {
  actor: ReactNode;
  steps: (ReactNode | null)[];
}

interface SwimlaneProps {
  columns: ReactNode[];
  lanes: SwimLane[];
}

export function Swimlane({ columns, lanes }: SwimlaneProps) {
  const template = `160px repeat(${columns.length}, 1fr)`;
  return (
    <div className={styles.swimlane} style={{ gridTemplateColumns: template }}>
      <div className={styles.corner} />
      {columns.map((c, i) => (
        <div className={styles.colHead} key={i}>{c}</div>
      ))}
      {lanes.map((lane, r) => (
        <Fragment key={r}>
          <div className={styles.actor}>{lane.actor}</div>
          {columns.map((_, c) => (
            <div className={styles.cell} key={c}>{lane.steps[c] ?? ""}</div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
