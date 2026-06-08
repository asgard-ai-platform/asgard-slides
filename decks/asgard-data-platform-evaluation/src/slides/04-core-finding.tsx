import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "其實只有兩條路：買套裝，還是自建開源",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>核心發現</Kicker>
      <h2>其實只有兩條路：買套裝，還是自建開源</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>套裝軟體（買現成的）</h3>
          <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.5, marginTop: 6 }}>
            市面產品眾多，多按模組／年計價、能力綁廠商：
          </p>
          <ul style={{ marginTop: 8, lineHeight: 1.7 }}>
            <li>資料整合（ETL）：Informatica、Talend、SSIS、Fivetran、FineDataLink</li>
            <li>資料虛擬化：Denodo、TIBCO、IBM、SAP HANA</li>
            <li>BI／報表：FineBI、Power BI、Tableau</li>
          </ul>
        </Card>
        <Card variant="strong">
          <h3>開源自建（自己組）</h3>
          <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.5, marginTop: 6 }}>
            一套完整平台、零授權費、能力與資料都留在團隊：
          </p>
          <ul style={{ marginTop: 8, lineHeight: 1.7 }}>
            <li>Airflow · PostgreSQL · dbt · Iceberg · Trino · Grafana</li>
            <li>六階段一次覆蓋，任一元件可單獨替換</li>
            <li>資料以開放格式存放，永不被鎖定</li>
          </ul>
        </Card>
      </CardGrid>
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        差別不在「哪個產品功能多」，而在「買斷當下需求」還是「累積帶得走的資產」。
      </p>
    </>
  );
}
