import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "一句話定位：買工具，還是建平台",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>一句話定位</Kicker>
      <h2>一句話定位：買工具，還是建平台</h2>
      <CardGrid columns={2}>
        <Card>
          <h3>套裝軟體：一件件買的工具</h3>
          <p style={{ marginTop: 8, lineHeight: 1.6 }}>
            搬運工具、查詢窗口、報表機——各自獨立產品、各自計價。買到的是單點功能，不是一座平台；
            要拼成完整資料平台，得買好幾套、再自己接起來。
          </p>
        </Card>
        <Card variant="strong">
          <h3>開源自建：一座完整的資料工廠</h3>
          <p style={{ marginTop: 8, lineHeight: 1.6 }}>
            從進料到出貨，六個工站一次到位。零授權費，能力與資料都留在自己手上，
            任一工站不合用都能單獨替換。
          </p>
        </Card>
      </CardGrid>
    </>
  );
}
