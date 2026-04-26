import { Kicker, Matrix, Quote, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "說明：三個 demo 合起來，就是 production agent 的最小閉環",
  section: "Demo 3 · Explanation",
  theme: "paper",
};

export const notes = `
### 68. 說明：三個 demo 合起來，就是 production agent 的最小閉環
- 區段：Demo 3 · Explanation
- 主句：下一段進入 Asgard：如果這些是技術層，企業真正需要的是把它們產品化成工作流、洞察、執行與治理。
- 表格重點：Demo 0：委派工作 / 把模糊需求轉成可執行 plan / task understanding、planning、human review。；Demo 1：MCP 工具 / 把外部資料源包成可呼叫、可驗證的工具 / tool routing、schema、credential boundary、result handling。；Demo 2：Plugin / Skill / 把專業方法與 workflow 做成可重用資產 / knowledge routing、workflow selection、output contract。；Demo 3：Sandbox trace / 讓 agent 執行過程可限制、可追溯、可驗收 / sandbox、permission、artifact、trace、recovery。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 3 · Explanation</Kicker>
      <h2>說明：三個 demo 合起來，就是 production agent 的最小閉環</h2>
      <Matrix
        headers={["Demo", "證明的能力", "對應的 harness responsibility"]}
        rows={[
          ["Demo 0：委派工作", "把模糊需求轉成可執行 plan", "task understanding、planning、human review。"],
          ["Demo 1：MCP 工具", "把外部資料源包成可呼叫、可驗證的工具", "tool routing、schema、credential boundary、result handling。"],
          ["Demo 2：Plugin / Skill", "把專業方法與 workflow 做成可重用資產", "knowledge routing、workflow selection、output contract。"],
          ["Demo 3：Sandbox trace", "讓 agent 執行過程可限制、可追溯、可驗收", "sandbox、permission、artifact、trace、recovery。"],
        ]}
      />
      <Quote compact>下一段進入 Asgard：如果這些是技術層，企業真正需要的是把它們產品化成工作流、洞察、執行與治理。</Quote>
    </>
  );
}
