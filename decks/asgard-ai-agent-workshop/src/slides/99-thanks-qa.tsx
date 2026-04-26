import { Kicker, type SlideMeta } from "deck-kit";
import styles from "./99-thanks-qa.module.css";

export const meta: SlideMeta = {
  title: "Q&A · Thank You",
  section: "Q&A",
  theme: "dark",
};

export const notes = `
### 99. Q&A · Thank You
- 區段：Q&A
- 講法：謝謝大家。歡迎現場提問；下一頁是相關連結，QA 期間會留在螢幕上，可以直接拍。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Q&A</Kicker>
      <div className={styles.heroBlock}>
        <div className={styles.bigQa}>Q&amp;A · Thank You</div>
        <div className={styles.subtitle}>歡迎提問。也歡迎之後私訊聊。</div>
      </div>

      <div className={styles.speakerStrip}>
        <img className={styles.avatar} src="assets/wjwang-avatar.png" alt="WJWang avatar" />
        <div className={styles.speakerInfo}>
          <div className={styles.speakerName}>Wei · WJWang</div>
          <div className={styles.speakerRole}>Asgard AI CEO · 產品與平台工程實作者</div>
        </div>
      </div>

      <div className={styles.contactList}>
        <div className={styles.contactCard}>
          <span className={styles.contactLabel}>Email</span>
          <a className={styles.contactValue} href="mailto:wei@asgard-ai.com">wei@asgard-ai.com</a>
        </div>
        <div className={styles.contactCard}>
          <span className={styles.contactLabel}>GitHub</span>
          <a
            className={styles.contactValue}
            href="https://github.com/WJWang"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/WJWang
          </a>
        </div>
        <div className={styles.contactCard}>
          <span className={styles.contactLabel}>LinkedIn</span>
          <a
            className={styles.contactValue}
            href="https://www.linkedin.com/in/wj-wang-696a0b86"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/wj-wang
          </a>
        </div>
        <div className={styles.contactCard}>
          <span className={styles.contactLabel}>X</span>
          <a
            className={styles.contactValue}
            href="https://x.com/wjwang25"
            target="_blank"
            rel="noopener noreferrer"
          >
            x.com/wjwang25
          </a>
        </div>
      </div>
    </>
  );
}
