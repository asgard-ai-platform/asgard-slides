import { Kicker, CardGrid, Card } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "指派 2 名種子工程師，全程參與導入",
  section: "Handover 與收尾",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>種子工程師制度</Kicker>
      <h2>指派 2 名種子工程師，全程參與導入</h2>
      <CardGrid columns={3}>
        <Card>
          <h3>不是旁聽，是動手</h3>
          <p>在顧問引導下實際建立部分資料表與排程——平台有一部分是「自己蓋的」。</p>
        </Card>
        <Card>
          <h3>訓練即工作</h3>
          <p>課綱與專案里程碑同步，學的東西當週就用在正式環境。</p>
        </Card>
        <Card>
          <h3>雙人制</h3>
          <p>避免單點依賴，互為備援與 code review 對象。</p>
        </Card>
      </CardGrid>
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        具基本 SQL / 程式經驗即可（.NET、Java 等應用開發背景完全適用）。
      </p>
    </>
  );
}
