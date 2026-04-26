import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP、CLI、A2A 是 tool use 的三個並列方向，不是上下層",
  section: "Tool Use Approaches",
  theme: "light",
};

export const notes = `
### 11. MCP、CLI、A2A 是 tool use 的三個並列方向，不是上下層
- 區段：Tool Use Approaches
- 主句：MCP / CLI / A2A 是平行選項，agent 該用哪一個，看任務本質。
- 表格重點：
  - MCP：標準化的 tool 介面，給 AI 看的 schema + 權限 + 錯誤；適合需要 governance 與多 client 共用的情境。
  - CLI / SDK：直接呼叫指令或 API；適合本機任務、快速整合、輕量場景。
  - A2A：agent 與 agent 之間的協議；適合任務委派、子 agent、跨 runtime 協作。
- 補充講法：別把這三個畫成上下層。它們是 tool use 的三個方向：對下（資料/工具）、對自己（檔案/指令）、對側（其他 agent）。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Tool Use Approaches</Kicker>
      <h2>MCP、CLI、A2A 是 tool use 的三個並列方向，不是上下層</h2>
      <Matrix
        headers={["協議方向", "連接什麼", "為什麼選它"]}
        rows={[
          [
            <><b>MCP</b><br /><small style={{ color: "#9ca3af" }}>對下:標準化工具</small></>,
            "把資料源 / 工具 / 服務包成 AI 看得懂的 schema",
            "需要 governance、多 client 共用、tool discovery、權限與錯誤格式統一時。",
          ],
          [
            <><b>CLI / SDK</b><br /><small style={{ color: "#9ca3af" }}>對自己:直接呼叫</small></>,
            "git、ffmpeg、curl、廠商 SDK、本機 script",
            "本機任務、輕量整合、原型階段；不需要對外 expose schema 時最快。",
          ],
          [
            <><b>A2A</b><br /><small style={{ color: "#9ca3af" }}>對側:agent 之間</small></>,
            "另一個 agent runtime（自家 sub-agent 或外部 agent）",
            "任務委派、長流程拆分、跨 runtime 協作；適合多 agent 編排場景。",
          ],
        ]}
      />
      <Talkbox compact>
        <p>三個方向沒有「正確答案」。同一個任務裡可能同時用 MCP（查實價登錄）+ CLI（git commit）+ A2A（把生成簡報的子任務委派給另一個 agent）。Harness 的責任就是知道何時用哪一個。</p>
      </Talkbox>
    </>
  );
}
