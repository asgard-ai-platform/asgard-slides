import { Kicker, Compare } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "ETL vs ELT：先加工再進倉，或先進倉再加工",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>必備觀念一</Kicker>
      <h2>ETL vs ELT：先加工再進倉，或先進倉再加工</h2>
      <Compare
        pros={{
          head: "ELT（現代主流，本報告採用）",
          items: [
            "先載入、再轉換",
            "原始資料完整保留，隨時可回頭重算",
            "轉換邏輯是倉庫裡的 SQL 檔（可版控、可審核）",
            "代表：dbt + 任一倉庫，Lakehouse 標準做法",
          ],
        }}
        cons={{
          head: "ETL（傳統）",
          items: [
            "先轉換、再載入",
            "原始資料不保留（只留成品）",
            "轉換邏輯在 ETL 工具裡（常為圖形化）",
            "代表：Informatica、SSIS、FineDataLink",
          ],
        }}
      />
    </>
  );
}
