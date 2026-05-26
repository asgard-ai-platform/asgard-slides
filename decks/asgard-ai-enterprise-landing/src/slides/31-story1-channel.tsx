import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./31-story1-channel.module.css";

export const meta: SlideMeta = {
  title: "故事一（3/5）：營運追通路與履約",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事一 3/5</Kicker>
      <h2>營運追通路與履約</h2>
      <p>
        Mia 打開通路 KPI：各通路訂單量、客單價都不同——<strong>不能只看公司總營收</strong>。
        再看通路與履約，訂單卡在已付款未出貨（pending / picking / shipped），
        營收進來了但出貨慢就是未爆的客服壓力。
      </p>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/dashboard_overview_2.png"
          alt="營運看通路 KPI，拆解不同通路表現"
          size="compact"
          caption="拆解各通路表現"
        />
        <DemoShot
          src="assets/retail/dashboard_channel_1.png"
          alt="從通路頁看到訂單履約狀態"
          size="compact"
          caption="通路訂單履約狀態"
        />
        <DemoShot
          src="assets/retail/dashboard_channel_2.png"
          alt="進一步看配送業者與履約效率"
          size="compact"
          caption="配送業者與履約效率"
        />
      </div>
      <Talkbox compact label="因果鏈">
        <p>
          <strong>缺貨 → 出貨慢 → 客訴</strong>。一般報表只告訴你「營收掉了」；
          AI 幫你把整條因果鏈拉出來。
        </p>
      </Talkbox>
    </>
  );
}
