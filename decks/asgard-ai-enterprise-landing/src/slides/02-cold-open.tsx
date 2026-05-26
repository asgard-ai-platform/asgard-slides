import type { SlideMeta } from "deck-kit";
import styles from "./02-cold-open.module.css";

export const meta: SlideMeta = {
  title: "星期一早會",
  section: "Cold Open",
  theme: "dark",
};

const bars = [82, 74, 78, 66, 50, 38, 27];

export default function Slide() {
  return (
    <div className={styles.scene}>
      <div className={styles.screen}>
        <div className={styles.titleBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.winTitle}>經營總覽 · 週一 09:00</span>
        </div>
        <div className={styles.body}>
          <div className={styles.chart}>
            {bars.map((h, i) => (
              <span
                key={i}
                className={i >= 4 ? styles.colDown : styles.col}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className={styles.metric}>
            <span className={styles.mLabel}>本月營收</span>
            <span className={styles.mVal}>▼ 往下掉</span>
          </div>
        </div>
      </div>

      <div className={styles.react}>
        <span className={styles.boss}>🧑‍💼 老闆的第一個反應</span>
        <span className={styles.bubble}>「是不是行銷不夠力？」</span>
      </div>
    </div>
  );
}
