import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: ".mcp.json 可以設定什麼？重點是 transport、scope、env、auth",
  section: "MCP Config",
  theme: "paper",
};

export const notes = `
### 21. \`.mcp.json\` 可以設定什麼？重點是 transport、scope、env、auth
- 區段：MCP Config
- 表格重點：Transport / \`stdio\`、\`http\`、舊版 \`sse\` / 本機工具用 stdio；雲端與多人共用服務優先用 http；SSE 只在既有服務需要時使用。；Scope / local、project、user、plugin-provided / project scope 會寫進 repo root \`.mcp.json\`，適合團隊共享；local / user 較適合個人與敏感設定。；Env expansion / \`\${VAR}\`、\`\${VAR:-default}\` 可用在 command、args、env、url、headers / 讓設定可版本控管，但每台機器用自己的環境變數與 secret store。；Auth / \`headers\`、\`headersHelper\`、\`oauth.clientId\`、\`oauth.callbackPort\`、\`oauth.scopes\` / 正式環境優先 OAuth 或動態 headers；避免把長期 token 寫進 repo。；Operational limits / \`MCP_TIMEOUT\`、\`MAX_MCP_OUTPUT_TOKENS\`、server-side max result metadata / 避免 server 啟動太慢、tool result 過大、context 被大量輸出淹沒。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Config</Kicker>
      <h2><code>.mcp.json</code> 可以設定什麼？重點是 transport、scope、env、auth</h2>
      <Matrix
        headers={["設定面向", "可設定內容", "實務判斷"]}
        rows={[
          [
            "Transport",
            <><code key="t1">stdio</code>、<code key="t2">http</code>、舊版 <code key="t3">sse</code></>,
            "本機工具用 stdio；雲端與多人共用服務優先用 http；SSE 只在既有服務需要時使用。",
          ],
          [
            "Scope",
            "local、project、user、plugin-provided",
            <>project scope 會寫進 repo root <code key="s1">.mcp.json</code>，適合團隊共享；local / user 較適合個人與敏感設定。</>,
          ],
          [
            "Env expansion",
            <><code key="e1">{"${VAR}"}</code>、<code key="e2">{"${VAR:-default}"}</code> 可用在 command、args、env、url、headers</>,
            "讓設定可版本控管，但每台機器用自己的環境變數與 secret store。",
          ],
          [
            "Auth",
            <><code key="a1">headers</code>、<code key="a2">headersHelper</code>、<code key="a3">oauth.clientId</code>、<code key="a4">oauth.callbackPort</code>、<code key="a5">oauth.scopes</code></>,
            "正式環境優先 OAuth 或動態 headers；避免把長期 token 寫進 repo。",
          ],
          [
            "Operational limits",
            <><code key="o1">MCP_TIMEOUT</code>、<code key="o2">MAX_MCP_OUTPUT_TOKENS</code>、server-side max result metadata</>,
            "避免 server 啟動太慢、tool result 過大、context 被大量輸出淹沒。",
          ],
        ]}
      />
    </>
  );
}
