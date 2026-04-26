import { Kicker, Card, Tag, CodeBlock, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "SKILL.md 的 anatomy：frontmatter 決定是否觸發，body 決定怎麼做",
  section: "Skill Anatomy",
  theme: "paper",
};

export const notes = `
### 29. SKILL.md 的 anatomy：frontmatter 決定是否觸發，body 決定怎麼做
- 區段：Skill Anatomy
- 卡片重點：description 要寫「何時用」而不是只寫「這是什麼」：模型或 harness 通常先看到技能名稱與 description。好的 description 會包含任務場景、使用時機、常見使用者說法、不要誤觸的邊界，讓 agent 能穩定選到對的 skill。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Skill Anatomy</Kicker>
      <h2>SKILL.md 的 anatomy：frontmatter 決定是否觸發，body 決定怎麼做</h2>
      <TwoColumn
        left={<CodeBlock>{`---
name: "mkt-ab-testing"
description: "Design and execute marketing A/B tests...
Use when the user needs to test marketing variations...
even if they say 'which version performs better'..."
metadata:
  category: "WP-09 數位行銷"
  tags: ["ab-testing", "conversion"]
---

# Marketing A/B Testing
## Framework
## Test Design
## Output Format
## Gotchas
## Scripts
## References`}</CodeBlock>}
        right={<Card variant="strong">
          <Tag>Routing surface</Tag>
          <h3 style={{ marginTop: "12px" }}>description 要寫「何時用」而不是只寫「這是什麼」</h3>
          <p>模型或 harness 通常先看到技能名稱與 description。好的 description 會包含任務場景、使用時機、常見使用者說法、不要誤觸的邊界，讓 agent 能穩定選到對的 skill。</p>
        </Card>}
      />
    </>
  );
}
