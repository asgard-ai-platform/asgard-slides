import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "FineDataLink：低代碼資料整合（ETL）工具",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線一</Kicker>
      <h2>FineDataLink：低代碼資料整合（ETL）工具</h2>
      <DemoShot
        src="assets/research/fdl-introduce.jpg"
        alt="FineDataLink 官方產品架構"
        caption="FineDataLink 官方產品架構：四個功能模組（覆蓋：Ingestion 批次 + CDC、部分 Transform、Data API；不覆蓋：Storage 需自備；Query / Consumption 由 FineReport / FineBI 另購）（資料來源：finedatalink.com）"
      />
    </>
  );
}
