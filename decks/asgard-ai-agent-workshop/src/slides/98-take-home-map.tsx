import { Card, CardGrid, Kicker, Quote, Steps, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "帶一個工作回去，把它包成 agent asset",
  section: "Take-Home Map",
  theme: "light",
};

export const notes = `
### 77. 帶一個工作回去，把它包成 agent asset
- 區段：Take-Home Map
- 主句：今天的目標不是一次做完平台，而是讓大家明天就能開始用 agent 工作法。
- 流程：1選工作 / 重複、耗時、可驗收 -> 2寫 brief / 目標、資料、限制 -> 3跑一次 / Codex / Claude Code -> 4沉澱 / workflow / skill -> 5接工具 / CLI 先行，MCP 升級 -> 6治理 / sandbox / log / review
- 卡片重點：個人：用 Codex / Claude Code 做研究、整理、寫作、簡報、程式與自動化。；團隊：把做得好的流程變成 skill / workflow，讓同事可以重複使用。；企業：用 Asgard / Yggdrasil 把資產、工具、權限與治理接起來。
- 補充講法：落地順序：先選一個重複工作，寫 task brief，跑一次 agent loop，review 結果，再沉澱 workflow / skill；當任務需要共享、權限或 audit 時，再接 MCP 與治理層。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Take-Home Map</Kicker>
      <h2>帶一個工作回去，把它包成 agent asset</h2>
      <Steps items={[
        { label: "1", body: <>選工作<br />重複、耗時、可驗收</> },
        { label: "2", body: <>寫 brief<br />目標、資料、限制</> },
        { label: "3", body: <>跑一次<br />Codex / Claude Code</> },
        { label: "4", body: <>沉澱<br />workflow / skill</> },
        { label: "5", body: <>接工具<br />CLI 先行，MCP 升級</> },
        { label: "6", body: <>治理<br />sandbox / log / review</> },
      ]} />
      <Quote>今天的目標不是一次做完平台，而是讓大家明天就能開始用 agent 工作法。</Quote>
      <CardGrid columns={3}>
        <Card><h3>個人</h3><p>用 Codex / Claude Code 做研究、整理、寫作、簡報、程式與自動化。</p></Card>
        <Card><h3>團隊</h3><p>把做得好的流程變成 skill / workflow，讓同事可以重複使用。</p></Card>
        <Card><h3>企業</h3><p>用 Asgard / Yggdrasil 把資產、工具、權限與治理接起來。</p></Card>
      </CardGrid>
      <Talkbox compact>
        <p>落地順序：先選一個重複工作，寫 task brief，跑一次 agent loop，review 結果，再沉澱 workflow / skill；當任務需要共享、權限或 audit 時，再接 MCP 與治理層。</p>
      </Talkbox>
    </>
  );
}
