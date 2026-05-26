import { Kicker, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./54-retail-loop.module.css";

export const meta: SlideMeta = {
  title: "零售範例小結：洞察 → 決策 → 執行的閉環",
  section: "零售範例",
  theme: "dark",
};

const steps = [
  { n: "1", name: "看見", sub: "共用 Dashboard，資訊找人" },
  { n: "2", name: "拆解", sub: "Supervisor Agent 拆問題、分派" },
  { n: "3", name: "追查", sub: "各部門 Agent 撈資料、給洞察" },
  { n: "4", name: "執行", sub: "Action Agent 調貨 / 分群 / 拉急件" },
  { n: "5", name: "回饋", sub: "結果回到 Dashboard" },
];

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 小結</Kicker>
      <h2>洞察 → 決策 → 執行的閉環</h2>
      <div className={styles.loop}>
        {steps.map((s, i) => (
          <div className={styles.row} key={s.n}>
            <div className={styles.step}>
              <span className={styles.num}>{s.n}</span>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.sub}>{s.sub}</span>
            </div>
            {i < steps.length - 1 && <span className={styles.arrow}>→</span>}
          </div>
        ))}
      </div>
      <div className={styles.return}>↺ 每一圈越轉越準——結果回到 Dashboard，讓下一輪判斷更精確</div>
      <Quote>
        <p>
          這不是五個聊天機器人，是一個<strong>會協作的 AI 組織</strong>。
        </p>
      </Quote>
    </>
  );
}
