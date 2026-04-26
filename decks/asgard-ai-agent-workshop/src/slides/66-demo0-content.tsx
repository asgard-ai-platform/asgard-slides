import { Card, CodeBlock, Kicker, Tag, Talkbox, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Demo 0：Codex / Claude Code 起手式，先讓 agent 理解工作現場",
  section: "Demo 0 · Content",
  theme: "dark",
};

export const notes = `
### 51. Demo 0：Codex / Claude Code 起手式，先讓 agent 理解工作現場
- 區段：Demo 0 · Content
- 卡片重點：這段不是看答案，而是看它有沒有建立正確工作模型：成功標準是 agent 能說清楚目標、素材、限制、輸出格式、風險與下一步。它如果一開始就產出，很可能只是把任務當一般問答。
- 補充講法：Demo 0 對應的是 task delegation。先要求 agent 建立 task understanding 與 execution plan，再允許產出，可以降低錯誤方向的 sunk cost。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 0 · Content</Kicker>
      <h2>Demo 0：Codex / Claude Code 起手式，先讓 agent 理解工作現場</h2>
      <TwoColumn
        left={<CodeBlock>{`請先不要產出最終答案。

請你先做三件事：
1. 掃描目前資料夾，理解有哪些素材
2. 用 5 句話說明你理解的任務
3. 提出你會怎麼完成，包含風險與需要我確認的地方

等我說「開始」後，再進入產出。`}</CodeBlock>}
        right={<Card variant="strong">
          <Tag>Success criteria</Tag>
          <h3 style={{ marginTop: "12px" }}>這段不是看答案，而是看它有沒有建立正確工作模型</h3>
          <p>成功標準是 agent 能說清楚目標、素材、限制、輸出格式、風險與下一步。它如果一開始就產出，很可能只是把任務當一般問答。</p>
        </Card>}
      />
      <Talkbox compact>
        <p>Demo 0 對應的是 task delegation。先要求 agent 建立 task understanding 與 execution plan，再允許產出，可以降低錯誤方向的 sunk cost。</p>
      </Talkbox>
    </>
  );
}
