import { Card, CardGrid, Kicker, Quote, Tag, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "實務選型：先看你要解決哪一層問題",
  section: "How To Choose",
  theme: "paper",
};

export const notes = `
### 49. 實務選型：先看你要解決哪一層問題
- 區段：How To Choose
- 主句：先用 workbench 學會交辦，再把可重複的工作包成資產；最後才談平台化與治理。
- 卡片重點：個人與團隊要立刻開始交辦工作：從 Claude Code 或 Codex 這種 workbench 開始，因為它們已經把 repo context、tools、sandbox、approval、artifact review 做成可用介面。；要研究或自建 autonomous agent runtime：OpenClaw、Hermes 這類 framework 更適合看 agent loop、memory、tool orchestration、常駐服務、gateway 與 execution backend。；要把方法論和工具分享給團隊：用 Skill / Plugin / MCP / workflow，把工作方法、工具連線、審核規則與輸出格式做成可安裝、可版本化資產。；要進企業流程、權限與治理：需要平台層處理身份、資料權限、審核、部署、觀測、成本、流程整合與跨部門 adoption，這就是後面 Asgard 要回答的問題。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Landscape · Decision">How To Choose</Kicker>
      <h2>實務選型：先看你要解決哪一層問題</h2>
      <CardGrid columns={2}>
        <Card variant="strong">
          <Tag>Start working now</Tag>
          <h3 style={{ marginTop: "12px" }}>個人與團隊要立刻開始交辦工作</h3>
          <p>從 Claude Code 或 Codex 這種 workbench 開始，因為它們已經把 repo context、tools、sandbox、approval、artifact review 做成可用介面。</p>
        </Card>
        <Card variant="strong">
          <Tag>Build / self-host</Tag>
          <h3 style={{ marginTop: "12px" }}>要研究或自建 autonomous agent runtime</h3>
          <p>OpenClaw、Hermes 這類 framework 更適合看 agent loop、memory、tool orchestration、常駐服務、gateway 與 execution backend。</p>
        </Card>
        <Card>
          <Tag>Package knowledge</Tag>
          <h3 style={{ marginTop: "12px" }}>要把方法論和工具分享給團隊</h3>
          <p>用 Skill / Plugin / MCP / workflow，把工作方法、工具連線、審核規則與輸出格式做成可安裝、可版本化資產。</p>
        </Card>
        <Card>
          <Tag>Enterprise scale</Tag>
          <h3 style={{ marginTop: "12px" }}>要進企業流程、權限與治理</h3>
          <p>需要平台層處理身份、資料權限、審核、部署、觀測、成本、流程整合與跨部門 adoption，這就是後面 Asgard 要回答的問題。</p>
        </Card>
      </CardGrid>
      <Quote compact>先用 workbench 學會交辦，再把可重複的工作包成資產；最後才談平台化與治理。</Quote>
    </>
  );
}
