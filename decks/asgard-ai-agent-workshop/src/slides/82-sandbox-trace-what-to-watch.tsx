import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "看什麼：不是只看最後答案，而是看每個動作是否可審核",
  section: "Demo 3 · What To Watch",
  theme: "light",
};

export const notes = `
### 67. 看什麼：不是只看最後答案，而是看每個動作是否可審核
- 區段：Demo 3 · What To Watch
- 表格重點：File reads / agent 讀了哪些資料與素材 / 是否讀到正確資料源？是否碰到不該讀的檔案？；Commands / tests / agent 跑了哪些 shell、測試、轉檔或瀏覽器自動化 / 指令是否可重現？是否有 timeout / permission policy？；Diff / artifacts / agent 改了哪些檔、產出哪些圖片、報告、簡報或 log / 交付物是否能 review？中間產物是否可追溯？；Failures / recovery / 錯誤、重試、替代方案與人工介入點 / 失敗後是否有恢復策略，還是只能重新開始？
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 3 · What To Watch</Kicker>
      <h2>看什麼：不是只看最後答案，而是看每個動作是否可審核</h2>
      <Matrix
        headers={["Trace 元素", "代表什麼", "企業驗收問題"]}
        rows={[
          ["File reads", "agent 讀了哪些資料與素材", "是否讀到正確資料源？是否碰到不該讀的檔案？"],
          ["Commands / tests", "agent 跑了哪些 shell、測試、轉檔或瀏覽器自動化", "指令是否可重現？是否有 timeout / permission policy？"],
          ["Diff / artifacts", "agent 改了哪些檔、產出哪些圖片、報告、簡報或 log", "交付物是否能 review？中間產物是否可追溯？"],
          ["Failures / recovery", "錯誤、重試、替代方案與人工介入點", "失敗後是否有恢復策略，還是只能重新開始？"],
        ]}
      />
    </>
  );
}
