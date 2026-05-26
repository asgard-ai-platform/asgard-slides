import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./43-unitech-screens-2.module.css";

export const meta: SlideMeta = {
  title: "Unitech 實際畫面（二）：工單 ＋ 回信 ＋ Gen BI",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · Unitech 畫面二</Kicker>
      <h2>工單、派工、回覆、報表——一條龍，大部分自動</h2>
      <div className={styles.grid}>
        <DemoShot
          src="assets/unitech/p-45.png"
          alt="自動建立工單，寫回 NetSuite ERP 工程服務單"
          size="compact"
          caption="自動建立工單，寫回 NetSuite ERP 工程服務單"
        />
        <DemoShot
          src="assets/unitech/p-46.png"
          alt="處理結果自動寄 Email 通知客戶"
          size="compact"
          caption="處理結果自動寄 Email 通知客戶"
        />
        <DemoShot
          src="assets/unitech/p-49.png"
          alt="語意化查詢 ＋ Gen BI：用講的問維修趨勢，自動產出圖表 Dashboard"
          size="compact"
          caption="語意化查詢 ＋ Gen BI：用講的問維修趨勢，自動產出圖表 Dashboard"
        />
      </div>
      <Talkbox compact>
        <p>
          從客戶問題進來到工單、派工、回覆、報表——一條龍，大部分自動。
          這就是「AI 員工」在一家 30 年傳統公司裡，每天真的在做的事。
        </p>
      </Talkbox>
    </>
  );
}
