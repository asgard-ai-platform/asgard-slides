import { Kicker, DemoShot, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "產品實際畫面（二）：Mimir ＋ Sindri",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>產品實際畫面（二）</Kicker>
      <h2>Mimir ＋ Sindri</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "12px" }}>
        <DemoShot
          src="assets/product/p-23.png"
          alt="Mimir Text-to-SQL"
          size="compact"
          caption="Mimir Text-to-SQL — 中文問「業績最高前 5 店」→ 自動 SQL ＋ 表格 ＋ 圖表，可存成 View"
        />
        <DemoShot
          src="assets/product/p-24.png"
          alt="Mimir Gen BI"
          size="compact"
          caption="Mimir Gen BI — 自動生成財務／營運 Dashboard"
        />
        <DemoShot
          src="assets/product/p-22.png"
          alt="Sindri Agent Hub"
          size="compact"
          caption="Sindri Agent Hub — 上線的 AI Agent 集中管理，員工像用線上客服一樣使用"
        />
      </div>
      <Quote compact>
        <p>
          <strong>資訊找人的入口</strong>——不會 SQL 的主管，也能自己問數據。
        </p>
      </Quote>
    </>
  );
}
