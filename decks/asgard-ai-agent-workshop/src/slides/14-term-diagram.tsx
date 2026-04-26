import { Kicker, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./14-term-diagram.module.css";

export const meta: SlideMeta = {
  title: "Prompt、Context、RAG、Harness 不是平行關係",
  section: "Term Diagram",
  theme: "light",
};

export const notes = `
### 12. Prompt、Context、RAG、Harness 不是平行關係
- 區段：Term Diagram
- 主句：Prompt ⊂ Context；RAG / Memory 是 context supply mechanisms；Harness 包住整個 lifecycle。
- 圖意：外框是 Harness（管 lifecycle），中層是 Context（每次取樣可見的所有 token），最內層是 Prompt（這次對話的指令）。RAG / Memory 是從外部把資料補進 Context 的供應機制，所以畫成從旁邊接進 Context 的虛線箭頭。
- 補充講法：技術關係：prompt ⊂ context；RAG / memory 是 context supply mechanisms；harness 是管理 context、tools、state、policy 的 agent runtime。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Term Diagram</Kicker>
      <h2>Prompt、Context、RAG、Harness 不是平行關係</h2>
      <div className={styles.nest}>
        <span className={styles.nestLabel}>Harness · runtime</span>

        <div className={styles.contextBox}>
          <div className={styles.contextLabel}>Context · 取樣可見的所有 token</div>
          <div className={styles.contextDesc}>
            系統指令、歷史訊息、工具描述、retrieved data、memory summary、tool result。
            <br />
            Context engineering 的問題是：選擇、排序、壓縮、丟棄。
          </div>

          <div className={styles.promptBox}>
            <div className={styles.promptLabel}>Prompt · 這一輪的指令</div>
            <div className={styles.promptDesc}>明確的任務、限制與輸出格式；它只是 Context 的一部分。</div>
          </div>
        </div>

        <div className={styles.ragArrow}>→</div>
        <div className={styles.ragSupply}>
          <span className={styles.ragLabel}>RAG / Memory</span>
          <span className={styles.ragDesc}>
            把外部知識與過去狀態餵進 Context 的供應機制。<br />
            RAG ≈ 檢索；Memory ≈ session/user/task 狀態。
          </span>
        </div>
      </div>
      <Talkbox compact>
        <p>技術關係：prompt ⊂ context；RAG / memory 是 context supply mechanisms；harness 是管理 context、tools、state、policy 的 agent runtime。</p>
      </Talkbox>
    </>
  );
}
