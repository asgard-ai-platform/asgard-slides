import { FlowDiagram, Kicker, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Sandbox trace：把 agent 的工作過程變成可限制、可審核、可交接的事件鏈",
  section: "Demo 3 · Content",
  theme: "dark",
};

export const notes = `
### 65. Sandbox trace：把 agent 的工作過程變成可限制、可審核、可交接的事件鏈
- 區段：Demo 3 · Content
- 補充講法：Demo 3 不是新增一個案例，而是把前面所有案例放回 production requirement：agent 只要能動手，就需要 sandbox、permission、trace 與 recovery。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 3 · Content</Kicker>
      <h2>Sandbox trace：把 agent 的工作過程變成可限制、可審核、可交接的事件鏈</h2>
      <FlowDiagram nodes={[
        { title: "讀任務", body: "理解目標、限制、資料來源" },
        { title: "讀檔 / 查資料", body: "file read、MCP、browser、CLI" },
        { title: "執行", body: "shell、tests、scripts、generation" },
        { title: "產物", body: "diff、報告、簡報、截圖、logs" },
        { title: "Review", body: "人看 trace 與 artifact 再驗收" },
      ]} />
      <Talkbox compact>
        <p>Demo 3 不是新增一個案例，而是把前面所有案例放回 production requirement：agent 只要能動手，就需要 sandbox、permission、trace 與 recovery。</p>
      </Talkbox>
    </>
  );
}
