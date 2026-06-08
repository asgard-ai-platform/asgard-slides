import { Kicker, Timeline } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "資料儲存架構的四個世代",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>必備觀念二</Kicker>
      <h2>資料儲存架構的四個世代</h2>
      <Timeline
        items={[
          {
            label: "世代 1",
            title: "資料倉庫 DW",
            note: "結構化、查詢快但貴、綁廠商（1980s–）",
          },
          {
            label: "世代 2",
            title: "資料湖 Lake",
            note: "什麼都能丟、便宜但難治理，易成「資料沼澤」（2010s–）",
          },
          {
            label: "世代 3",
            title: "倉 + 湖雙軌",
            note: "兩者優點兼得，但資料兩份、搬運成本高（2015–）",
          },
          {
            label: "世代 4",
            title: "Lakehouse",
            note: "一份資料、多引擎、便宜 + 有治理（2020–）",
          },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        Lakehouse = 在便宜儲存上加一層「表格式」（如 Apache Iceberg）。這是第 5 章目標藍圖的依據。
      </p>
    </>
  );
}
