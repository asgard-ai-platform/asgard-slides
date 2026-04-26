import { Kicker, type SlideMeta } from "deck-kit";
import styles from "./100-resources.module.css";

export const meta: SlideMeta = {
  title: "Resources：Asgard 官網、開源組織、聯絡方式",
  section: "Resources",
  theme: "light",
};

export const notes = `
### 100. Resources：Asgard 官網、開源組織、聯絡方式
- 區段：Resources
- 講法：QA 期間這頁會留在螢幕上，方便大家直接拍。
- 官網：asgard-ai.com
- Vault：vault.asgard-ai.com（公開資產 / 文件 / skill 入口）
- GitHub：github.com/asgard-ai-platform（所有開源工具、MCP servers、skills、plugins 都在這裡）
- 聯絡：wei@asgard-ai.com / linkedin.com/in/wj-wang / x.com/wjwang25
`;

export default function Slide() {
  return (
    <>
      <Kicker>Resources</Kicker>
      <h2>Asgard 官網、開源組織、聯絡方式</h2>

      <div className={styles.resourceGrid}>
        <a
          className={styles.resourceCard}
          href="https://asgard-ai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.iconBox}>
            <img src="assets/asgard/asgard-logo-color.svg" alt="Asgard logo" />
          </span>
          <span className={styles.resourceBody}>
            <span className={styles.resourceLabel}>Official</span>
            <span className={styles.resourceTitle}>Asgard AI</span>
            <span className={styles.resourceUrl}>asgard-ai.com</span>
            <span className={styles.resourceDesc}>產品、客戶案例、聯絡銷售</span>
          </span>
        </a>

        <a
          className={styles.resourceCard}
          href="https://vault.asgard-ai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.iconBox}>
            <img src="assets/asgard/yggdrasil-logo-color.svg" alt="Yggdrasil logo" />
          </span>
          <span className={styles.resourceBody}>
            <span className={styles.resourceLabel}>Asset Vault</span>
            <span className={styles.resourceTitle}>Asgard Vault</span>
            <span className={styles.resourceUrl}>vault.asgard-ai.com</span>
            <span className={styles.resourceDesc}>公開資產、文件、skill / MCP 入口</span>
          </span>
        </a>

        <a
          className={styles.resourceCard}
          href="https://github.com/asgard-ai-platform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.iconBox}>
            <span className={styles.iconText}>GH</span>
          </span>
          <span className={styles.resourceBody}>
            <span className={styles.resourceLabel}>Open Source</span>
            <span className={styles.resourceTitle}>github.com/asgard-ai-platform</span>
            <span className={styles.resourceUrl}>github.com/asgard-ai-platform</span>
            <span className={styles.resourceDesc}>所有開源工具、MCP servers、skills、plugins、emba-famulus 都在這裡</span>
          </span>
        </a>

        <a
          className={styles.resourceCard}
          href="https://github.com/WJWang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.iconBox}>
            <img className={styles.avatar} src="assets/wjwang-avatar.png" alt="WJWang avatar" />
          </span>
          <span className={styles.resourceBody}>
            <span className={styles.resourceLabel}>Contact Speaker</span>
            <span className={styles.resourceTitle}>Wei · @WJWang</span>
            <span className={styles.resourceUrl}>github.com/WJWang</span>
            <span className={styles.resourceDesc}>Email: wei@asgard-ai.com · LinkedIn: linkedin.com/in/wj-wang · X: x.com/wjwang25</span>
          </span>
        </a>
      </div>

      <div className={styles.footHint}>歡迎拍照存檔。會後也歡迎私訊。</div>
    </>
  );
}
