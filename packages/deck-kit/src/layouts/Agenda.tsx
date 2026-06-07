import type { ReactNode } from "react";
import styles from "./Agenda.module.css";

export interface AgendaItem {
  title: ReactNode;
  sub?: ReactNode;
  time?: ReactNode;
  state?: "active" | "done";
}

interface AgendaProps {
  items: AgendaItem[];
}

export function Agenda({ items }: AgendaProps) {
  return (
    <div className={styles.agenda}>
      {items.map((item, i) => {
        const state =
          item.state === "active" ? styles.active : item.state === "done" ? styles.done : "";
        return (
          <div key={i} className={`${styles.row} ${state}`}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className={styles.title}>{item.title}</div>
              {item.sub && <div className={styles.sub}>{item.sub}</div>}
            </div>
            {item.time && <span className={styles.time}>{item.time}</span>}
          </div>
        );
      })}
    </div>
  );
}
