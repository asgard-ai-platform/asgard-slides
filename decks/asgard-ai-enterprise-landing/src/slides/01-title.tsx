import type { SlideMeta } from "deck-kit";
import styles from "./01-title.module.css";

export const meta: SlideMeta = {
  title: "企業 AI 發展方向：生成式 AI 的落地應用",
  section: "Beyond South 2026",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <div className={styles.brandLockup}>
        <span className={styles.logoOrb}>
          <img src="assets/asgard/asgard-logo-color.svg" alt="Asgard AI logo" />
        </span>
        <div>
          <div className={styles.brandName}>Asgard 肆佳科技</div>
          <div className={styles.brandSub}>Enterprise AI Platform · Beyond South 2026</div>
        </div>
      </div>

      <span className={styles.kicker}>生成式 AI 落地應用</span>
      <h1>企業 AI 發展方向：生成式 AI 的落地應用</h1>
      <p className={styles.lead}>
        從「會用 AI 的人」到「會用 AI 的組織」——關鍵字是<strong>落地</strong>。
        今天我們不問「AI 能不能用」，而是問一個更難、但更值錢的問題：
        <strong>AI 為什麼在你的公司用不起來？</strong>
      </p>

      <div className={styles.meta}>
        <div className={styles.speaker}>王韋仁 William Wang｜Asgard 肆佳科技 CEO</div>
        <div className={styles.event}>Beyond South｜南向無界 2026</div>
      </div>
    </>
  );
}
