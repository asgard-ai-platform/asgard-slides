import { Kicker, Compare } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Denodo：優勢與限制",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線二</Kicker>
      <h2>Denodo：優勢與限制</h2>
      <Compare
        pros={{
          head: "優勢",
          items: [
            "資料不搬動——法規禁止資料外移或已有多座倉庫時的業界標準答案",
            "見效快（在對的場景）：接上來源就能查",
            "企業級治理完整：語意層、權限、目錄、GenAI 助手",
          ],
        }}
        cons={{
          head: "限制",
          items: [
            "前提不成立：價值在整合「已存在的多座倉庫」，此情境還沒有倉庫",
            "查詢壓力落在來源系統，與生產交易搶資源",
            "歷史累積無解：查不到來源已清掉的歷史",
            "年訂閱成本高（公開參考 NT$600–750 萬/年）；專屬 VQL 人才池小",
          ],
        }}
      />
    </>
  );
}
