import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三個方案，三種角色",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>一句話定位</Kicker>
      <h2>三個方案，三種角色</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>FineDataLink</h3>
          <p>搬運與加工的工具</p>
        </Card>
        <Card>
          <h3>Denodo</h3>
          <p>不搬資料的查詢層</p>
        </Card>
        <Card variant="strong">
          <h3>開源自建</h3>
          <p>整座倉庫加工廠</p>
        </Card>
      </CardGrid>
    </>
  );
}
