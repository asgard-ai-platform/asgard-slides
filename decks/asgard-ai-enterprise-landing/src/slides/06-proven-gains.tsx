import { Kicker, Table, Metric } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./06-proven-gains.module.css";

export const meta: SlideMeta = {
  title: "AI 已經被證明的生產力",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>實證數據</Kicker>
      <h2>AI 已經被證明的生產力</h2>
      <div className={styles.center}>
        <Table large striped>
          <thead>
            <tr>
              <th>領域</th>
              <th>指標</th>
              <th>來源</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>軟體工程開發時間</td>
              <td><strong>8 hrs → 2 hrs</strong></td>
              <td>Microsoft 千家企業報告</td>
            </tr>
            <tr>
              <td>客服產能（一般員工）</td>
              <td><strong>+14%</strong></td>
              <td>Stanford / MIT</td>
            </tr>
            <tr data-highlight="">
              <td>客服產能（低技能員工）</td>
              <td><strong>+34%</strong></td>
              <td>Stanford / MIT</td>
            </tr>
            <tr>
              <td>知識工作平均效能提升</td>
              <td><strong>+66%</strong></td>
              <td>Nielsen Norman 跨產業</td>
            </tr>
          </tbody>
        </Table>
        <div className={styles.bottomLine}>
          <Metric value="USD 2.6–4.4 兆" label="每年 AI 待釋放的潛在價值（McKinsey）" />
        </div>
      </div>
    </>
  );
}
