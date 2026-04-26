import { Kicker, Card, Tag, CodeBlock, Matrix, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Asgard open-source skills 把方法論、判斷準則與 gotchas 做成可重用資產",
  section: "Asgard Open Source Skills",
  theme: "dark",
};

export const notes = `
### 33. Asgard open-source skills 把方法論、判斷準則與 gotchas 做成可重用資產
- 區段：Asgard Open Source Skills
- 卡片重點：263 skills / 21 categories：Asgard open-source skill 目前以 category prefix 分類，例如 \`grad-\`、\`algo-\`、\`biz-\`、\`tw-\`、\`ecom-\`、\`mkt-\`、\`ops-\`、\`law-\`、\`ux-\` 等。
- 表格重點：方法論可攜 / 把顧問、分析、產業與法規知識從個人腦袋變成 repo asset。 / 可被不同 plugin、workflow、persona 重新組合。；錯誤模式顯性化 / gotchas 讓 agent 避免常見誤判，例如 early stopping、omitted variable bias、非 MECE 拆解。 / 提升 domain agent 的穩定度，而不是只靠模型泛化。；計算交給 script / 統計、定價、排序等可驗算邏輯不應每次靠模型重寫。 / 把 deterministic calculation 放進 scripts，讓 agent 負責判斷與整合。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Asgard Open Source Skills</Kicker>
      <h2>Asgard open-source skills 把方法論、判斷準則與 gotchas 做成可重用資產</h2>
      <TwoColumn
        left={<Card variant="strong">
          <Tag>Current library</Tag>
          <h3 style={{ marginTop: "12px" }}>263 skills / 21 categories</h3>
          <p>Asgard open-source skill 目前以 category prefix 分類，例如 <code>grad-</code>、<code>algo-</code>、<code>biz-</code>、<code>tw-</code>、<code>ecom-</code>、<code>mkt-</code>、<code>ops-</code>、<code>law-</code>、<code>ux-</code> 等。</p>
        </Card>}
        right={<CodeBlock>{`{category}-{skill-name}/
├── SKILL.md
├── examples/
├── references/
└── scripts/`}</CodeBlock>}
      />
      <Matrix
        compact
        headers={["設計原則", "為什麼重要", "在 Asgard/Yggdrasil 的角色"]}
        rows={[
          ["方法論可攜", "把顧問、分析、產業與法規知識從個人腦袋變成 repo asset。", "可被不同 plugin、workflow、persona 重新組合。"],
          ["錯誤模式顯性化", "gotchas 讓 agent 避免常見誤判，例如 early stopping、omitted variable bias、非 MECE 拆解。", "提升 domain agent 的穩定度，而不是只靠模型泛化。"],
          ["計算交給 script", "統計、定價、排序等可驗算邏輯不應每次靠模型重寫。", "把 deterministic calculation 放進 scripts，讓 agent 負責判斷與整合。"],
        ]}
      />
    </>
  );
}
