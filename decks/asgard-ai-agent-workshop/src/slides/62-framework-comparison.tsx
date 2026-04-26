import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Claude Code、Codex、OpenClaw、Hermes：定位可以用四個維度看",
  section: "Framework Comparison",
  theme: "light",
};

export const notes = `
### 48. Claude Code、Codex、OpenClaw、Hermes：定位可以用四個維度看
- 區段：Framework Comparison
- 表格重點：Claude Code / coding agent runtime / workbench / CLAUDE.md、skills、commands、agents、hooks、plugins、MCP / 本機 terminal / IDE / web；與 repo、git、tool use 深度整合 / 軟體專案、repo 理解、修 bug、寫測試、PR / release workflow；Codex / OpenAI coding agent 與多工作 app / AGENTS.md、skills、plugins、MCP、app integrations、automations / 本機 CLI、desktop app、cloud sandbox、browser / computer use / 多人/多 agent 任務、程式與文件工作、跨工具資料整理與長任務；OpenClaw / open-source autonomous agent framework / 任務、工具、記憶、常駐 agent 能力 / 以自架或本機 autonomous agent 執行為主 / 想研究或自建長時間自主 agent loop、工具調度與常駐任務的人；Hermes Agent / open-source autonomous agent with persistent memory / skills system、auto-created skills、gateway、browser / code execution / local terminal、Docker、SSH remote、cloud / HPC backends / 自託管、跨訊息平台、持久記憶、多模型與可攜 skill 的 agent 實驗
- 補充講法：這張表的目的不是選冠軍，而是先定位——「產品工作台、extension package、autonomous framework、enterprise platform」是不同層級。先把分類清楚，後面比較才不會混淆。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Landscape · Frameworks">Framework Comparison</Kicker>
      <h2>Claude Code、Codex、OpenClaw、Hermes：定位可以用四個維度看</h2>
      <Matrix
        compact
        headers={["工具 / 框架", "主要定位", "能力包裝", "執行環境", "適合場景"]}
        rows={[
          [
            "Claude Code",
            "coding agent runtime / workbench",
            "CLAUDE.md、skills、commands、agents、hooks、plugins、MCP",
            "本機 terminal / IDE / web；與 repo、git、tool use 深度整合",
            "軟體專案、repo 理解、修 bug、寫測試、PR / release workflow",
          ],
          [
            "Codex",
            "OpenAI coding agent 與多工作 app",
            "AGENTS.md、skills、plugins、MCP、app integrations、automations",
            "本機 CLI、desktop app、cloud sandbox、browser / computer use",
            "多人/多 agent 任務、程式與文件工作、跨工具資料整理與長任務",
          ],
          [
            "OpenClaw",
            "open-source autonomous agent framework",
            "任務、工具、記憶、常駐 agent 能力",
            "以自架或本機 autonomous agent 執行為主",
            "想研究或自建長時間自主 agent loop、工具調度與常駐任務的人",
          ],
          [
            "Hermes Agent",
            "open-source autonomous agent with persistent memory",
            "skills system、auto-created skills、gateway、browser / code execution",
            "local terminal、Docker、SSH remote、cloud / HPC backends",
            "自託管、跨訊息平台、持久記憶、多模型與可攜 skill 的 agent 實驗",
          ],
        ]}
      />
      <Talkbox compact>
        <p>這張表的目的不是選冠軍，而是先定位——「產品工作台、extension package、autonomous framework、enterprise platform」是不同層級。先把分類清楚，後面比較才不會混淆。</p>
      </Talkbox>
    </>
  );
}
