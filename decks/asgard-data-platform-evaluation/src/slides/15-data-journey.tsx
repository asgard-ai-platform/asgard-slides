import { Kicker, FlowDiagram } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "每日各課別產出看板，資料怎麼來",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>一筆資料的旅程</Kicker>
      <h2>每日各課別產出看板，資料怎麼來</h2>
      <FlowDiagram
        nodes={[
          { title: "來源", body: "ERP 工單 + 現場報工" },
          { title: "擷取", body: "每天自動抓出來" },
          { title: "儲存", body: "倉庫集中存放" },
          { title: "轉換", body: "清洗、對齊口徑、彙總" },
          { title: "查詢", body: "SQL 取數" },
          { title: "應用", body: "看板 / 報表 / AI 問答" },
        ]}
      />
    </>
  );
}
