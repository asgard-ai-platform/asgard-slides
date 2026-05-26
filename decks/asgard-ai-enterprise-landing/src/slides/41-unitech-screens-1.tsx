import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./41-unitech-screens-1.module.css";

export const meta: SlideMeta = {
  title: "Unitech 實際畫面（一）：AI 小幫手 ＋ WMS 庫存查詢",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · Unitech 畫面一</Kicker>
      <h2>AI 小幫手（對客）＋ WMS AI 助理（對內）</h2>
      <p>給你看真的螢幕——同一套架構，分別面向客戶與內部員工。</p>
      <div className={styles.grid}>
        <DemoShot
          src="assets/unitech/p-42.png"
          alt="台新 AI 小幫手（對客）：問題排除 / 客訴單建立"
          size="medium"
          caption="台新 AI 小幫手（對客）：問題排除 / 客訴單建立"
        />
        <DemoShot
          src="assets/unitech/p-43.png"
          alt="WMS AI 助理（對內）：跨倉庫料件庫存查詢 & 派遣維修人員"
          size="medium"
          caption="WMS AI 助理（對內）：跨倉庫料件庫存查詢 & 派遣維修人員"
        />
      </div>
    </>
  );
}
