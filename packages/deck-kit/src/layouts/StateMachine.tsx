import { Fragment, type ReactNode } from "react";
import styles from "./StateMachine.module.css";

export interface StateNode {
  name: ReactNode;
  on?: ReactNode;
}

interface StateMachineProps {
  states: StateNode[];
  loop?: boolean;
}

export function StateMachine({ states, loop }: StateMachineProps) {
  return (
    <div className={styles.machine}>
      {states.map((s, i) => (
        <Fragment key={i}>
          <div className={styles.state}>{s.name}</div>
          {i < states.length - 1 && (
            <div className={styles.transition}>
              <span className={styles.arrow}>→</span>
              {s.on && <span className={styles.on}>{s.on}</span>}
            </div>
          )}
        </Fragment>
      ))}
      {loop && <div className={styles.loop}>↺ back to start</div>}
    </div>
  );
}
