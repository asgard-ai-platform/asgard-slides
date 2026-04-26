import { Kicker, CardGrid, Card, Tag, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "要寫好一個 Skill，先檢查六件事",
  section: "Skill Design Checklist",
  theme: "paper",
};

export const notes = `
### 35. 要寫好一個 Skill，先檢查六件事
- 區段：Skill Design Checklist
- 卡片重點：Trigger precision：description 是否清楚說明何時用、同義說法、任務邊界與不適用情境？；Workflow gates：是否有階段、輸入檢查、必要資料、停下來問人的條件？；Output contract：是否定義最後要交付 markdown、JSON、表格、簡報、程式碼還是報告？；Gotchas：是否把最容易犯錯的地方寫出來，讓 agent 在執行時能自我檢查？；References：長文件是否拆到 references，並在 SKILL.md 說明何時讀哪一份？；Deterministic scripts：容易算錯、格式固定、重複執行的工作，是否有 script 或 template 支援？
- 補充講法：Skill 的品質不在字數，而在它是否能讓 agent 更穩定地做出正確決策：何時觸發、怎麼做、怎麼檢查、怎麼交付、遇到風險怎麼停。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Skill Design Checklist</Kicker>
      <h2>要寫好一個 Skill，先檢查六件事</h2>
      <CardGrid columns={3}>
        <Card>
          <Tag>1</Tag>
          <h3 style={{ marginTop: "12px" }}>Trigger precision</h3>
          <p>description 是否清楚說明何時用、同義說法、任務邊界與不適用情境？</p>
        </Card>
        <Card>
          <Tag>2</Tag>
          <h3 style={{ marginTop: "12px" }}>Workflow gates</h3>
          <p>是否有階段、輸入檢查、必要資料、停下來問人的條件？</p>
        </Card>
        <Card>
          <Tag>3</Tag>
          <h3 style={{ marginTop: "12px" }}>Output contract</h3>
          <p>是否定義最後要交付 markdown、JSON、表格、簡報、程式碼還是報告？</p>
        </Card>
        <Card>
          <Tag>4</Tag>
          <h3 style={{ marginTop: "12px" }}>Gotchas</h3>
          <p>是否把最容易犯錯的地方寫出來，讓 agent 在執行時能自我檢查？</p>
        </Card>
        <Card>
          <Tag>5</Tag>
          <h3 style={{ marginTop: "12px" }}>References</h3>
          <p>長文件是否拆到 references，並在 SKILL.md 說明何時讀哪一份？</p>
        </Card>
        <Card variant="strong">
          <Tag>6</Tag>
          <h3 style={{ marginTop: "12px" }}>Deterministic scripts</h3>
          <p>容易算錯、格式固定、重複執行的工作，是否有 script 或 template 支援？</p>
        </Card>
      </CardGrid>
      <Talkbox compact>
        <p>Skill 的品質不在字數，而在它是否能讓 agent 更穩定地做出正確決策：何時觸發、怎麼做、怎麼檢查、怎麼交付、遇到風險怎麼停。</p>
      </Talkbox>
    </>
  );
}
