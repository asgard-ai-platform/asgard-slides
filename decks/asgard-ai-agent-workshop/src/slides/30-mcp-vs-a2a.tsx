import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP 跟 A2A 都「把外部包起來」，但包的層次不同",
  section: "MCP vs A2A",
  theme: "light",
};

export const notes = `
### 30. MCP 跟 A2A 都「把外部包起來」，但包的層次不同
- 區段：MCP vs A2A
- 主句：MCP 包的是「工具」；A2A 包的是「agent」。
- 表格重點：
  - 包什麼：MCP 包 tool / data；A2A 包整個 agent runtime。
  - 訊息結構：MCP 是 tool call + JSON result；A2A 是 task lifecycle + status + artifact。
  - 典型用例：MCP 適合查資料 / 呼叫 API；A2A 適合委派完整子任務。
  - Credential：MCP 在 server 側；A2A 在 peer agent 自己管，呼叫方只看到 result。
- 補充講法：實務上很多場景兩者都會出現。例如：你有一個 research agent，它用 A2A 委派「資料查詢」給 search agent；search agent 自己再透過 MCP 呼叫各種資料源。Layer 的位置不一樣。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP vs A2A</Kicker>
      <h2>MCP 跟 A2A 都「把外部包起來」，但包的層次不同</h2>
      <Matrix
        headers={["維度", "MCP", "A2A"]}
        rows={[
          ["包什麼", "資料源 / 工具 / 服務 (被動)", "另一個有規劃能力的 agent runtime (主動)"],
          ["訊息結構", "tool call + JSON result，單次或少數輪", "task / status / artifact，可能是長時程多輪"],
          ["典型用例", "查資料、呼叫 API、讀寫系統", "委派子任務、跨組織協作、specialised sub-agent"],
          ["Credential 邊界", "由 MCP server 在 server 側強制", "由 peer agent 自己管理，呼叫方只看到 result"],
          ["失敗模式", "tool call 錯誤、schema 不對、timeout", "agent 卡住、產出不對、需要對方人為介入"],
        ]}
      />
      <Talkbox compact>
        <p>實務上常常兩個都用：你的 research agent 透過 A2A 委派「資料查詢」給 search agent，search agent 自己再透過 MCP 呼叫各種資料源。MCP 跟 A2A 不是二選一，是兩個不同層次的工具。</p>
      </Talkbox>
    </>
  );
}
