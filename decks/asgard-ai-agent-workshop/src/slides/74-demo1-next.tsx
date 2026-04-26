import { Card, CardGrid, Kicker, Tag, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "下一個例子：工具能查資料，但專業判斷要靠 workflow 與 skill 包裝",
  section: "Demo 1 · Next",
  theme: "paper",
};

export const notes = `
### 59. 下一個例子：工具能查資料，但專業判斷要靠 workflow 與 skill 包裝
- 區段：Demo 1 · Next
- 卡片重點：外部資料：MCP 解決 agent 如何安全、結構化、可追溯地呼叫資料源或服務。；專業方法：知道資料還不夠。agent 還需要知道用什麼分析框架、怎麼下判斷、交付格式是什麼。；Plugin / Skill：用 emba-famulus 看 workflow 偵測、skill 載入與 output contract。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 1 · Next</Kicker>
      <h2>下一個例子：工具能查資料，但專業判斷要靠 workflow 與 skill 包裝</h2>
      <CardGrid columns={3}>
        <Card>
          <Tag>Demo 1 learned</Tag>
          <h3 style={{ marginTop: "12px" }}>外部資料</h3>
          <p>MCP 解決 agent 如何安全、結構化、可追溯地呼叫資料源或服務。</p>
        </Card>
        <Card variant="strong">
          <Tag>Remaining gap</Tag>
          <h3 style={{ marginTop: "12px" }}>專業方法</h3>
          <p>知道資料還不夠。agent 還需要知道用什麼分析框架、怎麼下判斷、交付格式是什麼。</p>
        </Card>
        <Card>
          <Tag>Demo 2</Tag>
          <h3 style={{ marginTop: "12px" }}>Plugin / Skill</h3>
          <p>用 emba-famulus 看 workflow 偵測、skill 載入與 output contract。</p>
        </Card>
      </CardGrid>
    </>
  );
}
