import { CodeBlock, Kicker, Matrix, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "stdio server：client 啟動本機 process",
  section: "MCP Config",
  theme: "dark",
};

export const notes = `
### 19. \`stdio\` server：client 啟動本機 process
- 區段：MCP Config
- 表格重點：\`type\` / 指定 transport。\`stdio\` 代表 server 是本機子行程，透過 stdin / stdout 溝通 JSON-RPC。；\`command\` / 要執行的 binary 或 script，例如 \`node\`、\`python\`、\`uv\`、\`npx\`。；\`args\` / 傳給 command 的參數。server 自己的 flags 放這裡，不要和 client flags 混在一起。；\`env\` / 只傳給這個 MCP server process 的環境變數；適合放 machine-specific path 或由外部注入的 secret reference。
- 補充講法：\`stdio\` 適合本機檔案、內網工具、private scripts、需要直接存取 workspace 的工具。風險是它以使用者權限執行，所以 command 來源、env、tool permission 都要被審核。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Config</Kicker>
      <h2><code>stdio</code> server：client 啟動本機 process</h2>
      <TwoColumn
        left={<CodeBlock>{`{
  "mcpServers": {
    "tw-lvr": {
      "type": "stdio",
      "command": "uv",
      "args": [
        "--directory",
        "\${PROJECT_ROOT:-.}",
        "run",
        "mcp-tw-lvr"
      ],
      "env": {
        "CACHE_DIR": "\${HOME}/.cache/mcp-tw-lvr"
      }
    }
  }
}`}</CodeBlock>}
        right={<Matrix
          compact
          headers={["欄位", "用途"]}
          rows={[
            [<code key="type">type</code>, "指定 transport。stdio 代表 server 是本機子行程，透過 stdin / stdout 溝通 JSON-RPC。"],
            [<code key="cmd">command</code>, "要執行的 binary 或 script，例如 node、python、uv、npx。"],
            [<code key="args">args</code>, "傳給 command 的參數。server 自己的 flags 放這裡，不要和 client flags 混在一起。"],
            [<code key="env">env</code>, "只傳給這個 MCP server process 的環境變數；適合放 machine-specific path 或由外部注入的 secret reference。"],
          ]}
        />}
      />
      <Talkbox compact>
        <p><code>stdio</code> 適合本機檔案、內網工具、private scripts、需要直接存取 workspace 的工具。風險是它以使用者權限執行，所以 command 來源、env、tool permission 都要被審核。</p>
      </Talkbox>
    </>
  );
}
