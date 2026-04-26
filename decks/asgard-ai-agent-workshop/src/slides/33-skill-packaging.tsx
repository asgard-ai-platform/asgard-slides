import { Kicker, Card, Tag, CodeBlock, Matrix, TwoColumn, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "SKILL 怎麼包裝？它裝的是 procedural knowledge，不是外部系統",
  section: "Skill Packaging",
  theme: "dark",
};

export const notes = `
### 27. SKILL 怎麼包裝？它裝的是 procedural knowledge，不是外部系統
- 區段：Skill Packaging
- 卡片重點：Skill = 可觸發、可載入、可版本化的任務知識包：frontmatter 的 description 是 routing surface；body 是任務流程與決策規則；references / scripts 是按需載入或執行的支援資源。
- 表格重點：Skill / 判斷準則、流程、輸出格式、常見陷阱 / MECE 問題拆解、家族企業接班、說故事技巧；MCP Server / 可呼叫的外部能力與資料源 / 實價登錄、司法判決、發票、Shopline、內部 API；Workflow / 某類任務的執行管線 / case-study、industry-analysis、executive-pitch
`;

export default function Slide() {
  return (
    <>
      <Kicker>Skill Packaging</Kicker>
      <h2>SKILL 怎麼包裝？它裝的是 procedural knowledge，不是外部系統</h2>
      <TwoColumn
        left={<CodeBlock>{`skills/meta-structured-problem/
├── SKILL.md        # frontmatter + workflow
├── references/     # 詳細理論、模板、案例
├── examples/       # 好壞範例
└── scripts/        # 可執行輔助工具`}</CodeBlock>}
        right={<Card variant="strong">
          <Tag>Technical definition</Tag>
          <h3 style={{ marginTop: "12px" }}>Skill = 可觸發、可載入、可版本化的任務知識包</h3>
          <p>frontmatter 的 description 是 routing surface；body 是任務流程與決策規則；references / scripts 是按需載入或執行的支援資源。</p>
        </Card>}
      />
      <Matrix
        headers={["資產", "包的是什麼", "例子"]}
        rows={[
          ["Skill", "判斷準則、流程、輸出格式、常見陷阱", "MECE 問題拆解、家族企業接班、說故事技巧"],
          ["MCP Server", "可呼叫的外部能力與資料源", "實價登錄、司法判決、發票、Shopline、內部 API"],
          ["Workflow", "某類任務的執行管線", "case-study、industry-analysis、executive-pitch"],
        ]}
      />
    </>
  );
}
