import { Kicker, Timeline } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "團隊能力與平台架構同步演進",
  section: "Handover 與收尾",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>長期能力路線圖</Kicker>
      <h2>團隊能力與平台架構同步演進</h2>
      <Timeline
        items={[
          {
            label: "Phase 1 結業",
            title: "獨立新增資料表",
            note: "SQL / dbt 建模 / 排程 / 版控",
          },
          {
            label: "Phase 2 進階",
            title: "介接與目錄",
            note: "Airbyte 介接管理 / 資料目錄維護",
          },
          {
            label: "Phase 3 進階",
            title: "Lakehouse 維運",
            note: "分散式查詢調校",
          },
          {
            label: "長期",
            title: "自主規劃新情境",
            note: "企業資料團隊獨立運作",
          },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        顧問角色從「主導」逐階段轉為「備援」。
      </p>
    </>
  );
}
