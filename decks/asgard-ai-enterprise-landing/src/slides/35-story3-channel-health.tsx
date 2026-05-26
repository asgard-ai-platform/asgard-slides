import { Kicker, DemoShot, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./35-story3-channel-health.module.css";

export const meta: SlideMeta = {
  title: "故事三：高營收 ≠ 健康，AI 揪出拖後腿的通路",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事三</Kicker>
      <h2>高營收 ≠ 健康，AI 揪出拖後腿的通路</h2>
      <p>
        Jason（通路）不只看「哪個通路營收最高」，而是請 Agent <strong>綜合</strong>看通路健康度：
        營收＋物流履約＋客服風險一起看。
        發現某些高營收通路訂單卡在 pending/picking，部分卡單正是缺貨造成。
      </p>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/agent%20-%20logistic%20performance.png"
          alt="Agent 綜合觀察通路、物流與客服風險"
          size="compact"
          caption="通路健康度：營收＋物流＋客服"
        />
        <DemoShot
          src="assets/retail/agent%20-%20logistic%20paid%20but%20not%20delivered.png"
          alt="物流履約 Agent 拉出已付款未出貨訂單"
          size="compact"
          caption="已付款未出貨訂單清單"
        />
        <DemoShot
          src="assets/retail/agent%20-%20logistic%20risk.png"
          alt="查通路高風險案件，找出最需要先修的通路"
          size="compact"
          caption="通路高風險案件"
        />
      </div>
      <Quote compact>
        <p>
          決策<strong>反轉</strong>：本來要加碼廣告，改成「先修履約跟客服，等通路健康了再加碼」。
          AI 幫我們避免把預算砸到一個<strong>已經塞車的通路</strong>。
        </p>
      </Quote>
    </>
  );
}
