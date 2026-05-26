import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./14-six-layer-stack.module.css";

export const meta: SlideMeta = {
  title: "要變成「能上線的 Agent」，需要六層架構",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Agent 系統架構</Kicker>
      <h2 className={styles.title}>能上線的 Agent，需要一整套架構（不只是模型）</h2>
      <img
        className={styles.hero}
        src="assets/deck/workshop_six_layer.png"
        alt="Agent 六層技術架構：Model→Tools→Harness→Sandbox→Memory→Governance"
      />
      <p className={styles.cap}>
        真正的「AI 模型」只佔六分之一，其餘五個全是扎實的<strong>工程與治理</strong>。
      </p>
    </>
  );
}
