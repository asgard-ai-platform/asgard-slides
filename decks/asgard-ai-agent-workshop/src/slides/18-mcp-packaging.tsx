import { CodeBlock, Kicker, Talkbox, type SlideMeta } from "deck-kit";
import styles from "./18-mcp-packaging.module.css";

export const meta: SlideMeta = {
  title: "MCP Server 怎麼包裝？把外部系統變成 AI 可呼叫的工具",
  section: "MCP Packaging",
  theme: "dark",
};

export const notes = `
### 16. MCP Server 怎麼包裝？把外部系統變成 AI 可呼叫的工具
- 區段：MCP Packaging
- 補充講法：MCP server 將外部 capability 封裝成可 discovery、可 schema validation、可 invocation 的 tool interface。設計重點是 tool description、input / output schema、error semantics 與 server-side permission boundary。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L2 · Tools / MCP">MCP Packaging</Kicker>
      <h2>MCP Server 怎麼包裝？把外部系統變成 AI 可呼叫的工具</h2>
      <div className={styles.stackDiagram}>
        <div className={styles.stackCard}>
          <b>.mcp.json</b>
          <p>告訴 client 怎麼啟動 server：command、args、cwd、env。團隊可放在專案，個人可放在 user scope。</p>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={styles.stackCard}>
          <b>FastMCP / server entry</b>
          <p>例如 <code>mcp_server.py</code> 載入 tool modules，<code>app.py</code> 建立 FastMCP singleton。</p>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={styles.stackCard}>
          <b>@mcp.tool()</b>
          <p>每個 function 都有參數、描述、回傳格式與錯誤策略，讓 agent 知道何時使用。</p>
        </div>
      </div>
      <CodeBlock>{`mcp-tw-judgment/
├── .mcp.json        # uv run mcp-tw-judgment
├── mcp_server.py    # mcp.run()；預設 stdio transport
├── app.py           # FastMCP("mcp-tw-judgment")
└── tools/
    └── judgment_tools.py   # search_judgments / get_judgment / get_judgment_pdf`}</CodeBlock>
      <Talkbox compact>
        <p>MCP server 將外部 capability 封裝成可 discovery、可 schema validation、可 invocation 的 tool interface。設計重點是 tool description、input / output schema、error semantics 與 server-side permission boundary。</p>
      </Talkbox>
    </>
  );
}
