import { Kicker, Matrix, Quote, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: ".mcp.json 不等於 tool schema：它只定義 client 怎麼連線",
  section: "MCP Config",
  theme: "paper",
};

export const notes = `
### 18. \`.mcp.json\` 不等於 tool schema：它只定義 client 怎麼連線
- 區段：MCP Config
- 主句：簡單判斷：\`.mcp.json\` 管「怎麼連到 server」；MCP server 管「提供哪些能力」；harness 管「何時、誰、用什麼權限呼叫」。
- 表格重點：\`.mcp.json\` / server 名稱、transport、啟動 command、遠端 URL、env、headers、OAuth 參數 / 把敏感值直接 commit、command 路徑寫死、scope 放錯、HTTP token 寫進 repo；MCP server code / 工具實作、tool schema、resources、prompts、錯誤格式、權限檢查 / 工具描述太模糊、錯誤不可修正、server 端沒做 permission boundary；Harness / Client / 讀取設定、啟動 server、列出 tools、處理 approval、限制輸出大小、將 result 回填 context / 讓過大的 tool output 直接進 context，或沒有工具使用審核
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Config</Kicker>
      <h2><code>.mcp.json</code> 不等於 tool schema：它只定義 client 怎麼連線</h2>
      <Matrix
        headers={["設定層", "負責內容", "常見錯誤"]}
        rows={[
          [
            <code key="k1">.mcp.json</code>,
            "server 名稱、transport、啟動 command、遠端 URL、env、headers、OAuth 參數",
            "把敏感值直接 commit、command 路徑寫死、scope 放錯、HTTP token 寫進 repo",
          ],
          [
            "MCP server code",
            "工具實作、tool schema、resources、prompts、錯誤格式、權限檢查",
            "工具描述太模糊、錯誤不可修正、server 端沒做 permission boundary",
          ],
          [
            "Harness / Client",
            "讀取設定、啟動 server、列出 tools、處理 approval、限制輸出大小、將 result 回填 context",
            "讓過大的 tool output 直接進 context，或沒有工具使用審核",
          ],
        ]}
      />
      <Quote compact>簡單判斷：<code>.mcp.json</code> 管「怎麼連到 server」；MCP server 管「提供哪些能力」；harness 管「何時、誰、用什麼權限呼叫」。</Quote>
    </>
  );
}
