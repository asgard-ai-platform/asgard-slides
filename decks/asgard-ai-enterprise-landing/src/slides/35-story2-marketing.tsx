import { Kicker, DemoShot, DashList, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./35-story2-marketing.module.css";

export const meta: SlideMeta = {
  title: "故事二：行銷想衝業績，AI 幫她避開「不該推的人」",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事二</Kicker>
      <h2>行銷想衝業績，AI 幫她避開「不該推的人」</h2>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/dashboard_marketing_1.png"
          alt="行銷看活動預算與營收，找出值得加碼的活動"
          size="compact"
          caption="活動預算與營收效益分析"
        />
        <DemoShot
          src="assets/retail/dashboard_marketing_2.png"
          alt="看地區與會員等級分布，準備分眾"
          size="compact"
          caption="地區與會員等級分布"
        />
        <DemoShot
          src="assets/retail/agent%20member%20grouping%20-%20retargeting%201.png"
          alt="會員行銷 Agent 把再行銷名單分成三群"
          size="compact"
          caption="會員行銷 Agent：名單分三群"
        />
      </div>
      <DashList
        items={[
          <><strong>① 立即推播</strong>：可以馬上接收優惠的高價值會員</>,
          <><strong>② 先客服安撫</strong>：正在等出貨/辦退貨/客服未結，推促銷只會更火大</>,
          <><strong>③ 暫不推播</strong>：目前不適合接觸，等狀況穩定後再觸及</>,
        ]}
      />
      <Talkbox compact label="跨部門的核心">
        <p>
          <strong>行銷的決策，需要客服的資料。</strong>
          AI 幫我們避免把行銷做成客訴。
        </p>
      </Talkbox>
    </>
  );
}
