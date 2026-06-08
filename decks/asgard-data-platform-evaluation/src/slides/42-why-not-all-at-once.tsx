import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "分階段的三個理由",
  section: "階段演進路線",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>為什麼不一步到位</Kicker>
      <h2>分階段的三個理由</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>性價比</h3>
          <p>起步資料量 GB 級、表數十張，一台 PostgreSQL 綽綽有餘；直接上 Lakehouse 是用大砲打蚊子。</p>
        </Card>
        <Card>
          <h3>學習坡度</h3>
          <p>先在 5 個元件的小架構學會核心觀念，再逐步接觸進階元件。</p>
        </Card>
        <Card>
          <h3>風險控制</h3>
          <p>第一條業務閉環 3–4 個月見效，用成果決定下一階段投資。</p>
        </Card>
      </CardGrid>
    </>
  );
}
