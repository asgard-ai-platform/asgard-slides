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
      <h2>低代碼資料整合（ETL）工具</h2>
      <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 15, lineHeight: 1.5 }}>
        市面同類（商用低代碼資料整合）：Informatica、Talend、Microsoft SSIS、Fivetran 等。本報告以{" "}
        <strong style={{ color: "var(--ink)" }}>FineDataLink</strong> 為代表——中文生態完整、台灣有在地支援。
      </p>
      <DemoShot
        src="assets/research/fdl-introduce.jpg"
        alt="FineDataLink 官方產品架構"
        caption="FineDataLink 官方產品架構：四個功能模組（覆蓋 Ingestion + 部分 Transform + Data API；Storage 需自備、BI 另購）。資料來源：finedatalink.com"
      />
    </>
  );
}
