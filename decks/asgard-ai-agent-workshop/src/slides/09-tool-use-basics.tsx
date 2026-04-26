import { Card, CardGrid, Kicker, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Agent 用工具的方式不只一種：先看 Tool Use 的基本面",
  section: "Tool Use Basics",
  theme: "dark",
};

export const notes = `
### 09. Agent 用工具的方式不只一種：先看 Tool Use 的基本面
- 區段：Tool Use Basics
- 主句：Tool use 的本質是「呼叫外部能力」；不是每個工具都需要被包裝成 MCP。
- 卡片重點：
  - OS / FS：直接讀檔、寫檔、列目錄、搬檔。最原始的工具呼叫。
  - CLI tool：git、ffmpeg、grep、curl 等系統指令；很多時候 agent 直接 spawn process 就好。
  - HTTP / SDK：直接打 REST、GraphQL、廠商 SDK。簡單任務不必加 MCP 一層。
  - 子流程：跑 script、launch app、開啟 sandbox 內的 service。
- 補充講法：先建立通用概念，再去分 MCP / A2A / CLI 等不同協議。Tool use 是統稱；MCP 是其中一種「給 AI 看得懂的工具介面」協議，不是唯一選項。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Tool Use Basics</Kicker>
      <h2>Agent 用工具的方式不只一種：先看 Tool Use 的基本面</h2>
      <CardGrid columns={4}>
        <Card>
          <h3>OS / FS</h3>
          <p>直接讀檔、寫檔、列目錄、搬檔。最原始的工具呼叫，agent 在 sandbox 內就能做。</p>
        </Card>
        <Card>
          <h3>CLI tool</h3>
          <p>git、ffmpeg、grep、curl 等系統指令。很多時候直接 spawn process 就好。</p>
        </Card>
        <Card>
          <h3>HTTP / SDK</h3>
          <p>直接打 REST、GraphQL、廠商 SDK。簡單任務不必加 MCP 一層。</p>
        </Card>
        <Card>
          <h3>子流程</h3>
          <p>跑 script、launch app、開啟 sandbox 內的 service 並監聽輸出。</p>
        </Card>
      </CardGrid>
      <Talkbox compact>
        <p>Tool use 的本質是「呼叫外部能力」。MCP 是其中一種協議——一種「把工具的 schema、權限、錯誤格式做給 AI 看」的標準。下一頁開始拆 MCP；後面再對照 CLI 與 A2A，看它們各自的位置。</p>
      </Talkbox>
    </>
  );
}
