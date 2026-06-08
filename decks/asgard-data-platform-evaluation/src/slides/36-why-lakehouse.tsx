import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三個具體理由",
  section: "目標藍圖 Lakehouse",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>為什麼目標是 Lakehouse</Kicker>
      <h2>三個具體理由</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>資料資產的保險</h3>
          <p>資料以開放格式（Parquet + Iceberg）存在自己的儲存上，十年後任何引擎都讀得到。</p>
        </Card>
        <Card>
          <h3>一份資料、多引擎</h3>
          <p>報表、批次加工、AI 訓練用不同引擎讀同一份資料，不需複製。</p>
        </Card>
        <Card>
          <h3>成本曲線平緩</h3>
          <p>儲存用便宜物件儲存、計算依需擴充；資料成長十倍，成本不會成長十倍。</p>
        </Card>
      </CardGrid>
    </>
  );
}
