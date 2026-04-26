import { Card, CardGrid, Kicker, Tag, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "下一個例子：agent 開始動手後，企業要看的不是答案，而是事件鏈",
  section: "Demo 2 · Next",
  theme: "light",
};

export const notes = `
### 64. 下一個例子：agent 開始動手後，企業要看的不是答案，而是事件鏈
- 區段：Demo 2 · Next
- 卡片重點：知識可重用：Plugin / workflow / skill 讓專業方法成為資產，不再只存在一次對話中。；執行可治理：當 agent 會讀檔、跑指令、改檔、產出 artifact，企業需要知道它做了什麼。；Sandbox trace：看 file reads、commands、diff、artifacts、failure / recovery。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 2 · Next</Kicker>
      <h2>下一個例子：agent 開始動手後，企業要看的不是答案，而是事件鏈</h2>
      <CardGrid columns={3}>
        <Card>
          <Tag>Demo 2 learned</Tag>
          <h3 style={{ marginTop: "12px" }}>知識可重用</h3>
          <p>Plugin / workflow / skill 讓專業方法成為資產，不再只存在一次對話中。</p>
        </Card>
        <Card variant="strong">
          <Tag>Remaining gap</Tag>
          <h3 style={{ marginTop: "12px" }}>執行可治理</h3>
          <p>當 agent 會讀檔、跑指令、改檔、產出 artifact，企業需要知道它做了什麼。</p>
        </Card>
        <Card>
          <Tag>Demo 3</Tag>
          <h3 style={{ marginTop: "12px" }}>Sandbox trace</h3>
          <p>看 file reads、commands、diff、artifacts、failure / recovery。</p>
        </Card>
      </CardGrid>
    </>
  );
}
