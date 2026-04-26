import { Card, CardGrid, Kicker, Quote, Tag, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "「MCP 已死，CLI 就好」是真的嗎？階段不同，屬性也不同",
  section: "MCP vs CLI",
  theme: "paper",
};

export const notes = `
### 24. 「MCP 已死，CLI 就好」是真的嗎？階段不同，屬性也不同
- 區段：MCP vs CLI
- 主句：MCP 沒死；CLI 也不是低階替代。成熟做法是把兩者放在 harness 之下，各用在適合的位置。
- 卡片重點：本機、短任務、可讀輸出：例如跑測試、grep log、產生檔案、呼叫一段穩定 script。這時 CLI 便宜、透明、好 debug。；共享、權限、schema、遠端：當工具要跨 client、多人共享、需要型別參數、OAuth、resources / prompts、可發現性，就值得包 MCP。；先 CLI，後 MCP：先用 CLI 驗證流程；當它變成團隊會重複使用、要治理、要分發的能力，再升級成 MCP Server。
- 補充講法：CLI 適合快速驗證、本機任務與透明除錯；MCP 適合跨 client 分發、schema contract、remote service、OAuth、tool filtering 與 audit。兩者差異包含成熟度、credential boundary、context exposure 與治理模型。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP vs CLI</Kicker>
      <h2>「MCP 已死，CLI 就好」是真的嗎？階段不同，屬性也不同</h2>
      <CardGrid columns={3}>
        <Card>
          <Tag>CLI is enough</Tag>
          <h3 style={{ marginTop: "12px" }}>本機、短任務、可讀輸出</h3>
          <p>例如跑測試、grep log、產生檔案、呼叫一段穩定 script。這時 CLI 便宜、透明、好 debug。</p>
        </Card>
        <Card variant="strong">
          <Tag>MCP matters</Tag>
          <h3 style={{ marginTop: "12px" }}>共享、權限、schema、遠端</h3>
          <p>當工具要跨 client、多人共享、需要型別參數、OAuth、resources / prompts、可發現性，就值得包 MCP。</p>
        </Card>
        <Card>
          <Tag>Practical verdict</Tag>
          <h3 style={{ marginTop: "12px" }}>先 CLI，後 MCP</h3>
          <p>先用 CLI 驗證流程；當它變成團隊會重複使用、要治理、要分發的能力，再升級成 MCP Server。</p>
        </Card>
      </CardGrid>
      <Quote compact>MCP 沒死；CLI 也不是低階替代。成熟做法是把兩者放在 harness 之下，各用在適合的位置。</Quote>
      <Talkbox compact>
        <p>CLI 適合快速驗證、本機任務與透明除錯；MCP 適合跨 client 分發、schema contract、remote service、OAuth、tool filtering 與 audit。兩者差異包含成熟度、credential boundary、context exposure 與治理模型。</p>
      </Talkbox>
    </>
  );
}
