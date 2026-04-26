import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "RPA 還是 Agent？不是取代，是分工",
  section: "RPA vs Agent",
  theme: "paper",
};

export const notes = `
### 63. RPA 還是 Agent？不是取代，是分工
- 區段：RPA vs Agent
- 主句：RPA 處理高頻、固定流程；agent 處理低頻、需判斷的任務。
- 表格重點：
  - 適合任務：RPA = 結構化、規則明確；Agent = 半結構化、需要語意理解。
  - 變更成本：RPA = UI 改一點就壞；Agent = 用語意理解，較有彈性。
  - 上線速度：RPA = 流程錄製可週級；Agent = 寫 brief 可日級到時級。
  - 治理：RPA = 流程白紙黑字；Agent = 需要 trace + human review。
- 補充講法：很多企業已經有 RPA 投資；agent 不是取代它，是補上它做不到的場景（需要判斷、處理半結構化、跨系統推理）。混合架構是常態。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Landscape · Comparison">RPA vs Agent</Kicker>
      <h2>RPA 還是 Agent？不是取代，是分工</h2>
      <Matrix
        headers={["維度", "RPA", "Agent"]}
        rows={[
          ["適合任務", "結構化、規則明確、可錄製成腳本的高頻流程", "半結構化、需要語意理解、跨系統推理的任務"],
          ["變更成本", "UI 改一點就壞；維護成本隨著系統迭代上升", "用語意理解輸入，較有彈性；prompt / skill 可調"],
          ["上線速度", "流程錄製 + 測試，週級", "寫 task brief，可日級到時級"],
          ["治理面", "流程是白紙黑字；錯了可單步追", "需要 trace、approval、human review；governance 較複雜"],
          ["失敗模式", "資料格式異常、UI 變動就斷", "判斷錯誤、context 不足、tool selection 錯"],
          ["搭配方式", "前置：高頻、規則明確的部分照舊跑", "後置：用 agent 處理需要判斷的尾段；agent 的結果回饋給 RPA"],
        ]}
      />
      <Talkbox compact>
        <p>RPA 不會被 agent 取代；它擅長的高頻穩態工作仍會繼續跑。Agent 補上 RPA 做不到的地方——需要判斷、跨系統推理、處理意外輸入。混合架構（RPA + agent）會是大多數企業的下一步。</p>
      </Talkbox>
    </>
  );
}
