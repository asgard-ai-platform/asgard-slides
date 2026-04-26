import { Card, CardGrid, Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "會用 MCP 不等於會設計 MCP Server",
  section: "MCP Design",
  theme: "dark",
};

export const notes = `
### 15. 會用 MCP 不等於會設計 MCP Server
- 區段：MCP Design
- 主句：設計 MCP Server 不是寫 API，是寫 AI 能照著演出的劇本。
- 卡片重點：
  - Tool description：不是 API 文件，而是告訴 AI 什麼時候用、怎麼用、什麼時候不要用。
  - Permission boundary：權限必須在 server 端強制，不靠 AI 自律。
  - Error as prompt：好的錯誤訊息會讓 AI 自我修正，壞錯誤會讓它卡住。
- 補充講法：工具描述要寫給 agent 看：什麼時候用、不要什麼時候用、失敗後怎麼修正。權限要在 server 端強制，不靠模型自律。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP Design</Kicker>
      <h2>會用 MCP 不等於會設計 MCP Server</h2>
      <CardGrid columns={3}>
        <Card><h3>Tool description</h3><p>不是 API 文件，而是告訴 AI 什麼時候用、怎麼用、什麼時候不要用。</p></Card>
        <Card><h3>Permission boundary</h3><p>權限必須在 server 端強制，不靠 AI 自律。</p></Card>
        <Card><h3>Error as prompt</h3><p>好的錯誤訊息會讓 AI 自我修正，壞錯誤會讓它卡住。</p></Card>
      </CardGrid>
      <Quote>設計 MCP Server 不是寫 API，是寫 AI 能照著演出的劇本。</Quote>
      <Talkbox compact>
        <p>工具描述要寫給 agent 看：什麼時候用、不要什麼時候用、失敗後怎麼修正。權限要在 server 端強制，不靠模型自律。</p>
      </Talkbox>
    </>
  );
}
