import { Kicker, Metric, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./05-ai-paradox.module.css";

export const meta: SlideMeta = {
  title: "The AI Paradox",
  section: "The AI Paradox",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>段落一</Kicker>
      <h2>The AI Paradox</h2>
      <p>
        全球企業每年砸 <strong>1.5 兆美元</strong>在 AI 上（Gartner）。但 Deloitte 與 MIT 的報告同步指出：
        大約 <strong>95%</strong> 的投資，沒有產生可以衡量的回報。
        注意，這不是說 AI 不好用——價值明明就在那裡，問題是<strong>企業吃不到</strong>。
      </p>
      <div className={styles.metrics}>
        <Metric value="USD 1.5 兆" label="全球企業 AI 年度支出（Gartner）" />
        <Metric value="95%" label="投資沒有產生可衡量回報（Deloitte / MIT）" />
      </div>
      <Quote>
        <p>這不是技術問題，而是架構問題。</p>
      </Quote>
      <p>
        工具沒錯，錯的是你把工具裝在哪、怎麼接、誰在用。
        今天整場都在拆這句話。
      </p>
    </>
  );
}
