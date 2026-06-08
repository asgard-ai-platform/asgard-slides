import { Kicker, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "團隊培養",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>比選型更重要的事</Kicker>
      <h2>團隊培養</h2>
      <Callout variant="good" title="能力留在哪裡，才是長期勝負">
        無論選哪條路線，企業長期都需要一個能自主維運資料平台的小團隊。差別只在——商用方案培養出「某套產品的操作員」，開源路線培養出「帶得走的資料工程能力」。本報告的導入服務皆含種子工程師制度、on-hand training 與結業驗收（第 8 章）。
      </Callout>
    </>
  );
}
