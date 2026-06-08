import { Kicker, Compare } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "為什麼「買套裝軟體」在資料這件事上失靈",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>採購習慣的失靈</Kicker>
      <h2>為什麼「買套裝軟體」在資料這件事上失靈</h2>
      <Compare
        pros={{
          head: "套裝軟體的邏輯（對 ERP 有效）",
          items: [
            "需求明確 → 選一套功能符合的",
            "廠商導入 → 上線使用",
            "流程固定的系統行之有年",
          ],
        }}
        cons={{
          head: "資料平台的兩個本質差異",
          items: [
            "資料需求是長出來的，不是定義出來的——每次成長都是一次加購",
            "價值在累積：十年生產資料是資產，鎖進私有格式換廠商成本複利成長",
          ],
        }}
      />
    </>
  );
}
