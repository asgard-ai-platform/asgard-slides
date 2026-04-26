import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "看什麼：不是看文筆，而是看 plan 是否可驗收",
  section: "Demo 0 · What To Watch",
  theme: "paper",
};

export const notes = `
### 52. 看什麼：不是看文筆，而是看 plan 是否可驗收
- 區段：Demo 0 · What To Watch
- 表格重點：它是否掃描正確資料夾 / context source 是否正確 / 資料源錯就立刻停，不要讓它繼續產出。；它是否重述任務與受眾 / goal / audience alignment / 如果受眾、語氣、用途錯，先修 brief。；它是否列出風險與需要確認處 / agent 是否知道自己的不確定性 / 補上限制、不要碰的範圍、可用來源。；它是否提出可追蹤步驟 / planner 是否能被 review / 要求它先列 TODO，再開始讀檔、查證、產出。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 0 · What To Watch</Kicker>
      <h2>看什麼：不是看文筆，而是看 plan 是否可驗收</h2>
      <Matrix
        headers={["畫面上看什麼", "代表什麼", "你要怎麼介入"]}
        rows={[
          ["它是否掃描正確資料夾", "context source 是否正確", "資料源錯就立刻停，不要讓它繼續產出。"],
          ["它是否重述任務與受眾", "goal / audience alignment", "如果受眾、語氣、用途錯，先修 brief。"],
          ["它是否列出風險與需要確認處", "agent 是否知道自己的不確定性", "補上限制、不要碰的範圍、可用來源。"],
          ["它是否提出可追蹤步驟", "planner 是否能被 review", "要求它先列 TODO，再開始讀檔、查證、產出。"],
        ]}
      />
    </>
  );
}
