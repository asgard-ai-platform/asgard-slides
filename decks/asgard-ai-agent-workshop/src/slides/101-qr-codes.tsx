import { QRCodeSVG } from "qrcode.react";
import { Kicker, type SlideMeta } from "deck-kit";
import styles from "./101-qr-codes.module.css";

export const meta: SlideMeta = {
  title: "掃 QR code 把連結帶走",
  section: "Scan & Go",
  theme: "dark",
};

export const notes = `
### 101. 掃 QR code 把連結帶走
- 區段：Scan & Go
- 講法：QA 期間這頁可以直接掃。六個 QR：Asgard 官網、Vault、開源組織、講者 GitHub / LinkedIn / X。
`;

interface QrEntry {
  label: string;
  url: string;
  display: string;
}

const entries: QrEntry[] = [
  { label: "Asgard", url: "https://asgard-ai.com/", display: "asgard-ai.com" },
  { label: "Asgard Vault", url: "https://vault.asgard-ai.com/", display: "vault.asgard-ai.com" },
  { label: "Open Source", url: "https://github.com/asgard-ai-platform", display: "github.com/asgard-ai-platform" },
  { label: "Speaker · GitHub", url: "https://github.com/WJWang", display: "github.com/WJWang" },
  { label: "Speaker · LinkedIn", url: "https://www.linkedin.com/in/wj-wang-696a0b86", display: "linkedin.com/in/wj-wang" },
  { label: "Speaker · X", url: "https://x.com/wjwang25", display: "x.com/wjwang25" },
];

export default function Slide() {
  return (
    <>
      <Kicker>Scan & Go</Kicker>
      <h2>掃 QR code 把連結帶走</h2>
      <div className={styles.qrGrid}>
        {entries.map((e) => (
          <div key={e.url} className={styles.qrCard}>
            <div className={styles.qrFrame}>
              <QRCodeSVG
                value={e.url}
                size={160}
                bgColor="#ffffff"
                fgColor="#050812"
                level="M"
              />
            </div>
            <div className={styles.qrLabel}>{e.label}</div>
            <div className={styles.qrUrl}>{e.display}</div>
          </div>
        ))}
      </div>
      <div className={styles.footHint}>有疑問歡迎現場提問，或會後 Email / DM 私訊。</div>
    </>
  );
}
