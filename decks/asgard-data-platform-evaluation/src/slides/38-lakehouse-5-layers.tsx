import { Kicker, LayerStack } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Lakehouse 的內部：五層解剖",
  section: "目標藍圖 Lakehouse",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Storage 拆開看</Kicker>
      <h2>Lakehouse 的內部：五層解剖</h2>
      <LayerStack
        layers={[
          { label: "L5 計算引擎", items: ["Trino", "dbt"], note: "實際讀寫資料的人" },
          { label: "L4 目錄", items: ["Lakekeeper"], note: "所有表的中央註冊處 + 權限" },
          { label: "L3 表格式", items: ["Apache Iceberg"], note: "把檔案組織成『一張表』：交易/版本/欄位演進" },
          { label: "L2 檔案格式", items: ["Parquet"], note: "業界標準欄式格式" },
          { label: "L1 物件儲存", items: ["MinIO"], note: "等於自己機房裡的 S3" },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        儲存與計算徹底解耦——換引擎時，資料一個位元組都不用搬。
      </p>
    </>
  );
}
