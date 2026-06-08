import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Denodo：資料虛擬化（資料不落地）平台",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線二</Kicker>
      <h2>Denodo：資料虛擬化（資料不落地）平台</h2>
      <DemoShot
        src="assets/research/denodo-unified-layer.png"
        alt="Denodo 官方架構"
        caption="Denodo 官方架構：來源 → 資料虛擬化層 → 應用（覆蓋：Query 跨來源聯邦查詢 + 語意層 / 資料目錄，200+ 連接器；不覆蓋：不持久化資料、不做排程 ETL 的歷史累積）（資料來源：community.denodo.com）"
      />
    </>
  );
}
