import { Kicker, Callout, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "AI 問答的品質，取決於資料層的品質",
  section: "Consumption",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>關鍵前提</Kicker>
      <h2>AI 問答的品質，取決於資料層的品質</h2>
      <Callout variant="info">
        AI 之所以能答對，是因為它查的是「口徑已對齊、命名已標準化」的 marts 層成品表。這就是為什麼本報告堅持「先把資料的家蓋好」——沒有治理過的資料層，任何 AI 工具都只能猜。
      </Callout>
      <DemoShot
        src="assets/research/metabase-dashboard.png"
        alt="Metabase 自助分析"
        caption="Metabase 自助分析：業務人員拖拉即可建立圖表"
      />
    </>
  );
}
