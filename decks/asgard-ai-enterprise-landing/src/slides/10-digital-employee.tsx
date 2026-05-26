import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./10-digital-employee.module.css";

export const meta: SlideMeta = {
  title: "從「數位」員工 到「數位員工」",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>演進路徑</Kicker>
      <h2 className={styles.title}>從「數位」員工 到「數位員工」</h2>
      <img
        className={styles.hero}
        src="assets/deck/p09_digital_employee.png"
        alt="三階段演進：人工作業 → 智能自動化 → 人機協作 AI 員工"
      />
      <p className={styles.cap}>
        差一個位置，意思完全不同——運作模式從「<strong>人找資訊</strong>」轉變為「<strong>資訊找人</strong>」。
      </p>
    </>
  );
}
