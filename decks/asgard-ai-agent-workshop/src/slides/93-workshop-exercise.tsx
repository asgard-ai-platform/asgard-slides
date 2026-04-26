import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "現場練習：把自己的工作改寫成 agent 任務",
  section: "Workshop Exercise",
  theme: "light",
};

export const notes = `
### 74. 現場練習：把自己的工作改寫成 agent 任務
- 區段：Workshop Exercise
- 表格重點：1 / 一個常重複、可驗收的工作 / 整理客戶週報、產業摘要、會議 follow-up；2 / 需要哪些資料 / 文件、表格、CRM、網站、聊天紀錄；3 / 成功長什麼樣 / 一頁摘要、10 張投影片、風險清單、待辦清單；4 / 不能做什麼 / 不能寄信、不能改資料、不能使用未核准資訊；5 / 如何留下紀錄 / 列來源、列假設、列決策與待確認事項
- 補充講法：適合改寫成 agent task 的工作具備三個特徵：重複發生、資料來源相對固定、成果可驗收。範圍越小，越容易建立可重複的 workflow 與 skill。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Workshop Exercise</Kicker>
      <h2>現場練習：把自己的工作改寫成 agent 任務</h2>
      <Matrix
        headers={["步驟", "你要填什麼", "例子"]}
        rows={[
          ["1", "一個常重複、可驗收的工作", "整理客戶週報、產業摘要、會議 follow-up"],
          ["2", "需要哪些資料", "文件、表格、CRM、網站、聊天紀錄"],
          ["3", "成功長什麼樣", "一頁摘要、10 張投影片、風險清單、待辦清單"],
          ["4", "不能做什麼", "不能寄信、不能改資料、不能使用未核准資訊"],
          ["5", "如何留下紀錄", "列來源、列假設、列決策與待確認事項"],
        ]}
      />
      <Talkbox compact>
        <p>適合改寫成 agent task 的工作具備三個特徵：重複發生、資料來源相對固定、成果可驗收。範圍越小，越容易建立可重複的 workflow 與 skill。</p>
      </Talkbox>
    </>
  );
}
