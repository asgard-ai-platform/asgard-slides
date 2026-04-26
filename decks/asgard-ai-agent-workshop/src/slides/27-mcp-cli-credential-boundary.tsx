import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "關鍵差異：模型決定要做什麼，credential 應該留在執行層",
  section: "MCP vs CLI",
  theme: "paper",
};

export const notes = `
### 25. 關鍵差異：模型決定要做什麼，credential 應該留在執行層
- 區段：MCP vs CLI
- 表格重點：Auth token / Token 由 client / server / harness 在呼叫時加上，例如 HTTP Authorization header；模型不需要看到 token 本身。 / 若 command 直接含 \`Bearer xxx\`，token 會進入模型、trace、terminal history 或 log；較安全做法是用 env / secret manager 展開。；Tool contract / 工具名稱、description、schema、錯誤格式可被標準化，agent 比較知道何時用、怎麼修正。 / CLI 輸入輸出通常是文字慣例，彈性高但需要更多 wrapper、parser 與錯誤約定。；Governance / 適合集中做 OAuth、allowlist、tool filtering、audit、remote connector 與跨 client 分發。 / 適合本機快速驗證；要團隊治理時，需要額外規範 shell scripts、env、log 與執行權限。；Context exposure / Token 不該進 LLM；但 tool result 仍可能回到模型，所以仍要做 scope、資料最小化與 redaction。 / Command、stdout、stderr、debug output 都可能被 agent 看見；安全性取決於 CLI 包裝與 sandbox policy。
- 補充講法：MCP 不是自動安全層；它提供較清楚的邊界：模型看到 schema 與業務參數，credential 由 client、server、proxy 或 vault 在執行層補上。CLI 也可安全，但需要額外設計 secret handling、log redaction 與 sandbox policy。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP vs CLI</Kicker>
      <h2>關鍵差異：模型決定要做什麼，credential 應該留在執行層</h2>
      <Matrix
        compact
        headers={["面向", "MCP 的典型邊界", "CLI 的典型風險與做法"]}
        rows={[
          [
            "Auth token",
            "Token 由 client / server / harness 在呼叫時加上，例如 HTTP Authorization header；模型不需要看到 token 本身。",
            <>若 command 直接含 <code key="b">Bearer xxx</code>，token 會進入模型、trace、terminal history 或 log；較安全做法是用 env / secret manager 展開。</>,
          ],
          [
            "Tool contract",
            "工具名稱、description、schema、錯誤格式可被標準化，agent 比較知道何時用、怎麼修正。",
            "CLI 輸入輸出通常是文字慣例，彈性高但需要更多 wrapper、parser 與錯誤約定。",
          ],
          [
            "Governance",
            "適合集中做 OAuth、allowlist、tool filtering、audit、remote connector 與跨 client 分發。",
            "適合本機快速驗證；要團隊治理時，需要額外規範 shell scripts、env、log 與執行權限。",
          ],
          [
            "Context exposure",
            "Token 不該進 LLM；但 tool result 仍可能回到模型，所以仍要做 scope、資料最小化與 redaction。",
            "Command、stdout、stderr、debug output 都可能被 agent 看見；安全性取決於 CLI 包裝與 sandbox policy。",
          ],
        ]}
      />
      <Talkbox compact>
        <p>MCP 不是自動安全層；它提供較清楚的邊界：模型看到 schema 與業務參數，credential 由 client、server、proxy 或 vault 在執行層補上。CLI 也可安全，但需要額外設計 secret handling、log redaction 與 sandbox policy。</p>
      </Talkbox>
    </>
  );
}
