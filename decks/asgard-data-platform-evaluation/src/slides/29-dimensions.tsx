import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "八個評估維度",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>評估維度</Kicker>
      <h2>八個評估維度</h2>
      <CardGrid columns={4}>
        <Card>
          <h3>功能覆蓋</h3>
          <p>六階段角色覆蓋程度</p>
        </Card>
        <Card>
          <h3>地端部署</h3>
          <p>可否全部署在自有機房</p>
        </Card>
        <Card>
          <h3>團隊自主維運</h3>
          <p>廠商退場後能否獨立維運</p>
        </Card>
        <Card>
          <h3>知識移轉</h3>
          <p>能力是否留在企業團隊</p>
        </Card>
        <Card>
          <h3>擴充性</h3>
          <p>資料量成長時走不走得上去</p>
        </Card>
        <Card>
          <h3>廠商鎖定</h3>
          <p>格式是否開放、退場成本</p>
        </Card>
        <Card>
          <h3>AI 整合</h3>
          <p>能否自由對接 AI 應用</p>
        </Card>
        <Card>
          <h3>成本結構</h3>
          <p>錢花在授權、硬體還是人</p>
        </Card>
      </CardGrid>
    </>
  );
}
