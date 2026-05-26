import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./30-story1-redflag.module.css";

export const meta: SlideMeta = {
  title: "故事一（1/5）：老闆早會，營收亮紅燈",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事一 1/5</Kicker>
      <h2>老闆早會，營收亮紅燈</h2>
      <p>
        林老闆打開經營總覽，看到月銷售績效趨勢變差，直接問 Agent：
        「最近營收怎麼掉了？不要只給我總數字，幫我先找出可能是哪幾個方向卡住。」
      </p>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/dashboard_overview_1.png"
          alt="老闆看經營總覽，發現營收趨勢變差"
          size="compact"
          caption="老闆看經營總覽，發現營收趨勢變差"
        />
        <DemoShot
          src="assets/retail/agent%20analysis-1.png"
          alt="Agent 先整理營收下滑的可能原因"
          size="compact"
          caption="Agent 先整理營收下滑的可能原因"
        />
      </div>
      <Talkbox compact label="關鍵洞察">
        <p>
          營收掉了，但<strong>毛利沒有一起崩</strong>——東西賣得動、客人願意付原價。
          問題很可能不在「賣不掉」，而在「供不出去」。
          AI 幫老闆<strong>校正直覺</strong>，避免直接喊「加廣告」。
        </p>
      </Talkbox>
    </>
  );
}
