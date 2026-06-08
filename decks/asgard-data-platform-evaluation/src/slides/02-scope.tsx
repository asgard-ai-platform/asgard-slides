import { Kicker, Checklist } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "這份評估為誰而寫",
  section: "開場",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>本報告適用情境</Kicker>
      <h2>這份評估為誰而寫</h2>
      <Checklist
        items={[
          { text: "中大型製造／傳產企業" },
          { text: "有地端部署需求、資料以內部系統（ERP、生管、現場）為主" },
          { text: "IT 團隊具應用系統開發與 SQL 基礎" },
          { text: "尚未建立資料倉庫、過往以採購套裝軟體為主" },
          { text: "長期目標是 BI 與 AI 應用" },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        若多數條件符合，本報告結論可直接適用；條件不同（如已有成熟倉庫），各章標示了判讀會如何改變。
      </p>
    </>
  );
}
