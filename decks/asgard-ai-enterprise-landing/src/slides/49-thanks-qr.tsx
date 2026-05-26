import { QRCodeSVG } from "qrcode.react";
import type { SlideMeta } from "deck-kit";
import styles from "./49-thanks-qr.module.css";

export const meta: SlideMeta = {
  title: "謝謝 · Thanks",
  section: "Thanks",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <div className={styles.thanks}>
        <h1 className={styles.thanksHeading}>謝謝</h1>
        <p className={styles.speaker}>王韋仁 William Wang｜Asgard Inc.</p>
        <p className={styles.org}>肆佳科技股份有限公司</p>
      </div>

      <div className={styles.qrSection}>
        <div className={styles.qrHolder}>
          <QRCodeSVG
            value="https://asgard-ai.com"
            size={180}
            bgColor="#ffffff"
            fgColor="#050812"
            level="M"
          />
        </div>
        <div className={styles.qrUrl}>asgard-ai.com</div>
        <div className={styles.qrCaption}>官網 asgard-ai.com · 歡迎交流</div>
      </div>
    </>
  );
}
