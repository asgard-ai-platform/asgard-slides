import { Card, Credential, Kicker, type SlideMeta } from "deck-kit";
import styles from "./02-speaker.module.css";

export const meta: SlideMeta = {
  title: "講者介紹：WJWang",
  section: "Speaker",
  theme: "light",
};

export const notes = `
### 02. 講者介紹：WJWang
- 區段：Speaker
`;

export default function Slide() {
  return (
    <>
      <Kicker>Speaker</Kicker>
      <h2>講者介紹：WJWang</h2>
      <div className={styles.speakerGrid}>
        <Card variant="strong">
          <div className={styles.speakerName}>WJWang</div>
          <div className={styles.speakerRole}>Asgard AI CEO / 產品與平台工程實作者</div>
          <p>從 MIS、平台工程、LegalTech、影音串流、電商與企業數位轉型一路做到 AI agent infrastructure。今天不是只講概念，而是用真實開源 repo 與實作流程拆給大家看。</p>
          <div className={styles.logoStrip}>
            <span className={styles.miniLogo}>
              <img src="/assets/asgard/asgard-logo-color.svg" alt="Asgard logo" />Asgard AI
            </span>
            <span className={styles.miniLogo}>
              <img src="/assets/asgard/yggdrasil-logo-color.svg" alt="Yggdrasil logo" />Yggdrasil Open Source
            </span>
          </div>
        </Card>
        <div className={styles.credentialList}>
          <Credential><b>現任：</b>Asgard AI CEO、XxtechEC CTO、Rytass CINO，長期協助企業做 data / digital transformation。</Credential>
          <Credential><b>過去經驗：</b>KKBOX、KKStream / BlendVision、Gamania、Microsoft MCS 等，涵蓋平台工程、影音、內容、金融與企業系統。</Credential>
          <Credential><b>AI / 工具化實務：</b>PAMO LegalTech、AI lyrics product、patent search、內部自動化與企業平台建置。</Credential>
          <Credential><b>社群與研究：</b>Covid-19 口罩地圖早期貢獻者；曾發表 iOS app behavior scanning / mobile security 相關研究；2020 Audi Innovation Award Silver Award。</Credential>
        </div>
      </div>
    </>
  );
}
