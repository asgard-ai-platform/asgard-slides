import { CodeBlock, Kicker, Matrix, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "http server：連到遠端 MCP endpoint，auth 在連線層處理",
  section: "MCP Config",
  theme: "light",
};

export const notes = `
### 20. \`http\` server：連到遠端 MCP endpoint，auth 在連線層處理
- 區段：MCP Config
- 表格重點：\`url\` / 遠端 MCP endpoint。適合 SaaS connector、企業 API gateway 或集中管理的 shared server。；\`headers\` / 靜態 HTTP headers。能用，但不建議把長期 token 直接寫進版本控管。；\`headersHelper\` / 連線時執行 helper 產生 headers，適合短效 token、內部 SSO、Kerberos 或自家 vault。；\`oauth\` / OAuth client metadata、callback port、scope pinning、metadata discovery override。
- 補充講法：遠端 MCP 的核心價值是把 auth、audit、rate limit、tool filtering 與多使用者治理集中化。模型仍只需要看 tool schema 與業務參數，credential 應留在 client / connector / proxy 層。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Config</Kicker>
      <h2><code>http</code> server：連到遠端 MCP endpoint，auth 在連線層處理</h2>
      <TwoColumn
        left={<CodeBlock>{`{
  "mcpServers": {
    "internal-api": {
      "type": "http",
      "url": "https://mcp.internal.example.com/mcp",
      "headersHelper": "/opt/bin/get-mcp-auth-headers.sh",
      "oauth": {
        "scopes": "read:orders write:tickets",
        "callbackPort": 8080
      }
    }
  }
}`}</CodeBlock>}
        right={<Matrix
          compact
          headers={["欄位", "用途"]}
          rows={[
            [<code key="url">url</code>, "遠端 MCP endpoint。適合 SaaS connector、企業 API gateway 或集中管理的 shared server。"],
            [<code key="headers">headers</code>, "靜態 HTTP headers。能用，但不建議把長期 token 直接寫進版本控管。"],
            [<code key="hh">headersHelper</code>, "連線時執行 helper 產生 headers，適合短效 token、內部 SSO、Kerberos 或自家 vault。"],
            [<code key="oauth">oauth</code>, "OAuth client metadata、callback port、scope pinning、metadata discovery override。"],
          ]}
        />}
      />
      <Talkbox compact>
        <p>遠端 MCP 的核心價值是把 auth、audit、rate limit、tool filtering 與多使用者治理集中化。模型仍只需要看 tool schema 與業務參數，credential 應留在 client / connector / proxy 層。</p>
      </Talkbox>
    </>
  );
}
