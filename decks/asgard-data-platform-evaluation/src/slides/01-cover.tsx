import type { SlideMeta } from "deck-kit";
import styles from "./01-cover.module.css";

export const meta: SlideMeta = {
  title: "企業資料平台選型評估",
  section: "開場",
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
          <div className={styles.brandSub}>Enterprise Data Platform</div>
        </div>
      </div>

      <span className={styles.kicker}>企業資料平台選型評估</span>
      <h1>套裝軟體 vs OpenSource — 企業資料平台路線整體評估</h1>
      <p className={styles.lead}>
        以「六階段角色框架」對標三條路線，並給出一條保留性價比與擴充性的階段演進路線。
      </p>

      <div className={styles.meta}>
        <div className={styles.speaker}>適用對象：中大型製造／傳產企業</div>
        <div className={styles.event}>地端部署 · IT 具 SQL 基礎 · 尚未建立資料倉庫 · 目標 BI / AI</div>
      </div>
    </>
  );
}
