import type { SlideMeta } from "deck-kit";
import styles from "./20-modules-opensource.module.css";

export const meta: SlideMeta = {
  title: "三大模組 ＋ Yggdrasil 開源層",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <h2>企業導入：三大模組 ＋ 一個開源層</h2>
      <p className={styles.lead}>
        企業端只要認識三大核心模組（前頁 <strong>Odin / Mimir / Sindri</strong>）＋ 多模型支援
        （OpenAI / Claude / Gemini…任務不同可換模型）。而<strong>工具與知識</strong>這一層，我們選擇——
      </p>

      <div className={styles.os}>
        <img className={styles.logo} src="assets/asgard/yggdrasil-logo-color.svg" alt="Yggdrasil" />
        <div className={styles.osBody}>
          <span className={styles.tag}>開源 · Open Source</span>
          <div className={styles.osTitle}>Yggdrasil — 開源的工具與知識層</div>
          <ul className={styles.points}>
            <li>把 <strong>MCP 工具、skills、solution bundles</strong> 做成可攜、可驗證的<strong>開源資產</strong>。</li>
            <li>相容市面上各種 <strong>MCP / CLI</strong> 工具，不綁單一生態。</li>
            <li>用意：<strong>不是把產品免費送掉，是把「導入摩擦」拿掉</strong>——先拿公開工具試出價值，再放進你自己的治理與部署環境。</li>
          </ul>
        </div>
      </div>
    </>
  );
}
