import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./31-story1-supply.module.css";

export const meta: SlideMeta = {
  title: "故事一（4/5）：商品確認需求還在、倉儲確認缺貨",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事一 4/5</Kicker>
      <h2>商品確認需求還在、倉儲確認缺貨</h2>
      <p>
        Ivy（商品）看熱賣分析：高單價品牌、熱門品類仍有動能——<strong>需求還在，問題是供應</strong>。
        Ken（倉儲）看庫存監控：多據點出現緊急缺貨、高風險、中度預警。
      </p>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/dashboard_bestseller_1.png"
          alt="商品看熱賣分析，確認需求仍在"
          size="compact"
          caption="熱賣分析，確認需求仍在"
        />
        <DemoShot
          src="assets/retail/dashboard_bestseller_2.png"
          alt="找出高影響力品牌與商品"
          size="compact"
          caption="高影響力品牌與商品"
        />
        <DemoShot
          src="assets/retail/dashboard_inventory_monitor.png"
          alt="倉儲看庫存監控，多據點缺貨警報"
          size="compact"
          caption="多據點庫存監控，缺貨警報"
        />
        <DemoShot
          src="assets/retail/agent%20transfer.png"
          alt="庫存調度 Agent 找出可調撥來源"
          size="compact"
          caption="庫存調度 Agent：可調撥門市與數量"
        />
      </div>
      <Talkbox compact label="Action Agent">
        <p>
          不是給你一句「建議補貨」——直接告訴你「<strong>從哪調、調幾件</strong>」。
          從洞察到動作，<strong>沒有斷點</strong>。
        </p>
      </Talkbox>
    </>
  );
}
