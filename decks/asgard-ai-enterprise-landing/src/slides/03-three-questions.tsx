import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./03-three-questions.module.css";

export const meta: SlideMeta = {
  title: "今天要回答的三個問題",
  section: "Cold Open",
  theme: "dark",
};

const questions = [
  {
    n: "1",
    q: "為什麼企業砸了大錢，AI 還是沒產生回報？",
    note: "那 95% 的企業在哪裡失手——我們會從架構層次拆解。",
  },
  {
    n: "2",
    q: "「個人會用 AI」和「企業導入 AI」差在哪？",
    note: "最多人搞混的地方，也是 AI 導入最常卡關的根本原因。",
  },
  {
    n: "3",
    q: "落地長什麼樣子？",
    note: "一個完整的零售範例 ＋ 真實客戶的投資回報數字。",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>今天的議程</Kicker>
      <h2>今天要回答的三個問題</h2>
      <div className={styles.list}>
        {questions.map((x) => (
          <div className={styles.item} key={x.n}>
            <span className={styles.num}>{x.n}</span>
            <div className={styles.body}>
              <div className={styles.q}>{x.q}</div>
              <div className={styles.note}>{x.note}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
