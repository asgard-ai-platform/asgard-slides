import { Kicker, Steps, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "從 .mcp.json 到 tool call：實際生命週期",
  section: "MCP Config",
  theme: "dark",
};

export const notes = `
### 22. 從 \`.mcp.json\` 到 tool call：實際生命週期
- 區段：MCP Config
- 流程：1載入設定 / \`mcpServers\` -> 2確認 scope / local / project / user -> 3啟動或連線 / stdio process / http endpoint -> 4能力發現 / \`tools/list\` / resources / prompts -> 5權限檢查 / approval / allowlist -> 6呼叫工具 / \`tools/call\` / 回填 result
- 補充講法：這個生命週期說明了為什麼 MCP 不是單純「把 API 包起來」。它還包含設定載入、transport、capability discovery、permission boundary、tool result 管理與 context 回填。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Config</Kicker>
      <h2>從 <code>.mcp.json</code> 到 tool call：實際生命週期</h2>
      <Steps items={[
        { label: "1", body: <>載入設定<br /><code>mcpServers</code></> },
        { label: "2", body: <>確認 scope<br />local / project / user</> },
        { label: "3", body: <>啟動或連線<br />stdio process / http endpoint</> },
        { label: "4", body: <>能力發現<br /><code>tools/list</code><br />resources / prompts</> },
        { label: "5", body: <>權限檢查<br />approval / allowlist</> },
        { label: "6", body: <>呼叫工具<br /><code>tools/call</code><br />回填 result</> },
      ]} />
      <Talkbox compact>
        <p>這個生命週期說明了為什麼 MCP 不是單純「把 API 包起來」。它還包含設定載入、transport、capability discovery、permission boundary、tool result 管理與 context 回填。</p>
      </Talkbox>
    </>
  );
}
