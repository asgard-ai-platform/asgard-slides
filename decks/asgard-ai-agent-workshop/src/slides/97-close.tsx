import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./97-close.module.css";

export const meta: SlideMeta = {
  title: "一句話總結",
  section: "Close",
  theme: "dark",
};

export const notes = `
### 76. 一句話總結
- 區段：Close
- 主句：AI Agent 的成熟度，不是看它會不會回答，而是看它能不能在可控流程中完成工作。
- 卡片重點：今天開始：用 Codex / Claude Code，把一個重複工作改寫成任務。；下一步：把成功做法沉澱成 workflow 或 skill。；企業放大：用 Asgard / Yggdrasil，把工具、知識、權限和治理接起來。
- 補充講法：工具名稱會改變，但成熟度判準不變：能否在可控流程中規劃、執行、恢復、紀錄與交付可驗收成果。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Close</Kicker>
      <h2>一句話總結</h2>
      <div className={styles.bigQuote}>
        <Quote>AI Agent 的成熟度，不是看它會不會回答，而是看它能不能在可控流程中完成工作。</Quote>
      </div>
      <CardGrid columns={3}>
        <Card><h3>今天開始</h3><p>用 Codex / Claude Code，把一個重複工作改寫成任務。</p></Card>
        <Card><h3>下一步</h3><p>把成功做法沉澱成 workflow 或 skill。</p></Card>
        <Card><h3>企業放大</h3><p>用 Asgard / Yggdrasil，把工具、知識、權限和治理接起來。</p></Card>
      </CardGrid>
      <Talkbox compact>
        <p>工具名稱會改變，但成熟度判準不變：能否在可控流程中規劃、執行、恢復、紀錄與交付可驗收成果。</p>
      </Talkbox>
    </>
  );
}
