import { QRCodeSVG } from "qrcode.react";
import type { SlideMeta } from "deck-kit";
import styles from "./58-thanks-qr.module.css";

export const meta: SlideMeta = { title: "謝謝 · Thanks", section: "Handover 與收尾", theme: "dark" };

export default function Slide() {
  return (
    <div className={styles.wrap}>
      <div className={styles.thanks}>
        <h1 className={styles.thanksHeading}>謝謝</h1>
        <p className={styles.speaker}>Asgard 肆佳科技 · 企業資料平台選型評估</p>
        <p className={styles.org}>肆佳科技股份有限公司</p>
      </div>
      <div className={styles.qrSection}>
        <div className={styles.qrHolder}>
          <QRCodeSVG value="https://asgard-ai.com" size={180} bgColor="#ffffff" fgColor="#050812" level="M" />
        </div>
        <div className={styles.qrUrl}>asgard-ai.com</div>
        <div className={styles.qrCaption}>官網 asgard-ai.com · 歡迎交流</div>
      </div>
    </div>
  );
}
