import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "貫穿所有階段的支撐角色",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>三橫切面</Kicker>
      <h2>貫穿所有階段的支撐角色</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>Orchestration 排程</h3>
          <p>生管排程：誰先誰後、失敗怎麼辦。代表：Apache Airflow。</p>
        </Card>
        <Card>
          <h3>Governance 治理</h3>
          <p>品保 + 文管：口徑一致、權限、血緣、變更紀錄（git 版控為基礎）。</p>
        </Card>
        <Card>
          <h3>Observability 監控</h3>
          <p>戰情室：排程有沒有失敗、資料量異常、磁碟夠不夠。</p>
        </Card>
      </CardGrid>
    </>
  );
}
