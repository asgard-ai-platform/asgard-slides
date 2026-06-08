import { Kicker, DashList } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "沒有統一資料層的四個徵狀",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>常見徵狀</Kicker>
      <h2>沒有統一資料層的四個徵狀</h2>
      <DashList
        items={[
          "點對點串接蔓延：每條需求一支客製 Job，沒人畫得出全貌",
          "欄位定義各說各話：同一個「數量」「日期」各系統口徑不同",
          "報表需求壓在 IT 身上：每個新報表都是一次客製開發",
          "AI 無從談起：資料散落各處，任何 AI 專案都卡在第一步",
        ]}
      />
    </>
  );
}
