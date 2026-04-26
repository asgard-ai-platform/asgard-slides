import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "說明：Plugin 是分發包，Workflow 是流程，Skill 是專業方法",
  section: "Demo 2 · Explanation",
  theme: "paper",
};

export const notes = `
### 63. 說明：Plugin 是分發包，Workflow 是流程，Skill 是專業方法
- 區段：Demo 2 · Explanation
- 表格重點：Plugin / 分發 skills、workflows、references、MCP config / 讓同一套 agent 能力可以安裝、版本化與分享。；Workflow / 定義任務 pipeline 與中間產物 / 同類任務不用每次重新規劃。；Skill / 補充專業判斷、框架、輸出格式與 gotchas / 讓 model 不只是泛泛回答，而是套用特定方法論。；Harness / 決定何時載入、何時呼叫工具、何時要求人 review / 把 plugin asset 接進真正的工作生命週期。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 2 · Explanation</Kicker>
      <h2>說明：Plugin 是分發包，Workflow 是流程，Skill 是專業方法</h2>
      <Matrix
        headers={["層", "作用", "為什麼重要"]}
        rows={[
          ["Plugin", "分發 skills、workflows、references、MCP config", "讓同一套 agent 能力可以安裝、版本化與分享。"],
          ["Workflow", "定義任務 pipeline 與中間產物", "同類任務不用每次重新規劃。"],
          ["Skill", "補充專業判斷、框架、輸出格式與 gotchas", "讓 model 不只是泛泛回答，而是套用特定方法論。"],
          ["Harness", "決定何時載入、何時呼叫工具、何時要求人 review", "把 plugin asset 接進真正的工作生命週期。"],
        ]}
      />
    </>
  );
}
