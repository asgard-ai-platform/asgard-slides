import { Kicker, DemoShot, DashList } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./29-story1-split.module.css";

export const meta: SlideMeta = {
  title: "故事一（2/5）：把問題拆成三個可追查方向",
  section: "零售範例",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>零售範例 · 故事一 2/5</Kicker>
      <h2>把問題拆成三個可追查方向</h2>
      <div className={styles.grid}>
        <DemoShot
          src="assets/retail/agent%20analysis-2.png"
          alt="Agent 把營收問題拆成可追查的方向"
          size="compact"
          caption="Agent 把營收問題拆成可追查的方向"
        />
        <DemoShot
          src="assets/retail/agent%20analysis-3.png"
          alt="Agent 建議接下來的追查順序"
          size="compact"
          caption="Agent 建議接下來的追查順序"
        />
      </div>
      <DashList
        items={[
          <><strong>通路表現不一致</strong>：哪個通路拖慢？哪個高營收通路背後有履約壓力？</>,
          <><strong>熱賣商品可能供應不上</strong>：需求還在，但熱賣品缺貨，營收就會掉。</>,
          <><strong>履約與客服壓力累積</strong>：已付款未出貨、配送變慢、SLA 風險，銷售問題變客訴問題。</>,
        ]}
      />
      <p style={{ marginTop: "12px", color: "var(--muted)", fontSize: "14px" }}>
        <strong>Supervisor Agent</strong> 把模糊大問題拆成三條可分頭查的線、排順序分工——它不自己埋頭算，它<strong>指揮</strong>。
      </p>
    </>
  );
}
