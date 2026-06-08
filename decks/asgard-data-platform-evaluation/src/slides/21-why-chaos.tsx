import { Kicker, DashList } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "用框架重新理解「為什麼選型會混亂」",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>框架的用途</Kicker>
      <h2>用框架重新理解「為什麼選型會混亂」</h2>
      <DashList
        items={[
          "行銷詞彙高度重疊：資料中台、數據集成、Data Fabric、一站式平台",
          "有的產品只做一格（如 Denodo 專注查詢層）",
          "有的做兩三格（如 FineDataLink 做擷取 + 轉換 + API）",
          "有的「平台」其實是一個產品家族，每格各自計價（帆軟全家桶）",
          "開源路線則是每格挑一個最成熟的元件，組成完整平台",
        ]}
      />
    </>
  );
}
