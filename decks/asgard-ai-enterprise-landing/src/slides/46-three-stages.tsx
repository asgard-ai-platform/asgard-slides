import { Kicker, Timeline, Talkbox } from "deck-kit";
import type { SlideMeta, Milestone } from "deck-kit";

export const meta: SlideMeta = {
  title: "落地的三個階段",
  section: "怎麼開始",
  theme: "dark",
};

const stages: Milestone[] = [
  {
    label: "🧭 探路",
    title: "Pathfinder",
    note: "找痛點、盤點機會、規劃通往智慧地基的路。先從最痛的切入點證明價值，再橫向擴散。",
  },
  {
    label: "🏗️ 打地基",
    title: "Foundry",
    note: "跨系統串接、清理企業資料，餵養 Data Insight 與知識庫。把散落各處的資料串起來、洗乾淨。",
  },
  {
    label: "⚙️ 執行",
    title: "Operator",
    note: "部署 Workflow 與 Multi-Agent，把 AI 嵌進日常營運、產出可衡量的成效。Wedge → Expand。",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>怎麼開始</Kicker>
      <h2>落地的三個階段：從現場洞察到 AI 執行</h2>
      <p>
        做了這麼多案子，歸納出落地幾乎都會走過的三個階段。先探路、再打地基、最後執行——順序不能跳。
      </p>
      <Timeline items={stages} />
      <Talkbox>
        <p>
          這是以「週」為單位、分階段見效的事，不是以「年」為單位賭一把的大專案。
          能踏出第一步，比規劃完美重要太多。
        </p>
      </Talkbox>
    </>
  );
}
