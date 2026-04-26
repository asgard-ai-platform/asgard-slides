import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "先定義 agent 系統的六個技術角色",
  section: "Plain-Language Glossary",
  theme: "light",
};

export const notes = `
### 06. 先定義 agent 系統的六個技術角色
- 區段：Plain-Language Glossary
- 表格重點：
  - Model / 推理與生成層 / 理解輸入、規劃下一步、產生文字或 tool call
  - Tools / MCP / 外部能力介面 / 查資料、呼叫 API、取得真實系統狀態
  - Harness / runtime / orchestration layer / 管理 agent loop、tool routing、approval、retry、stop condition
  - Sandbox / 隔離執行環境 / 讓模型產生的程式與指令在受控環境中執行
  - Session / Memory / 狀態與事件儲存 / 保存進度、checkpoint、上下文摘要與可恢復紀錄
  - Governance / 政策與稽核控制 / 定義誰可以讓 agent 使用什麼工具、資料與權限
- 補充講法：完整 agent 應用不是單一模型呼叫，而是 model、tool interface、runtime orchestration、execution isolation、state management、governance control 的組合。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Plain-Language Glossary</Kicker>
      <h2>先定義 agent 系統的六個技術角色</h2>
      <Matrix
        headers={["技術詞", "系統角色", "它解決的工程問題"]}
        rows={[
          ["Model", "推理與生成層", "理解輸入、規劃下一步、產生文字或 tool call"],
          ["Tools / MCP", "外部能力介面", "查資料、呼叫 API、取得真實系統狀態"],
          ["Harness", "runtime / orchestration layer", "管理 agent loop、tool routing、approval、retry、stop condition"],
          ["Sandbox", "隔離執行環境", "讓模型產生的程式與指令在受控環境中執行"],
          ["Session / Memory", "狀態與事件儲存", "保存進度、checkpoint、上下文摘要與可恢復紀錄"],
          ["Governance", "政策與稽核控制", "定義誰可以讓 agent 使用什麼工具、資料與權限"],
        ]}
      />
      <Talkbox compact>
        <p>完整 agent 應用不是單一模型呼叫，而是 model、tool interface、runtime orchestration、execution isolation、state management、governance control 的組合。</p>
      </Talkbox>
    </>
  );
}
