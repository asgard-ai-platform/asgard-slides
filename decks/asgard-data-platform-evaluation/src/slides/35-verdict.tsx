import { Kicker, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "建議路線三，濃縮成三句話",
  section: "三條路線深入評估",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>綜合結論</Kicker>
      <h2>建議路線三，濃縮成三句話</h2>
      <Callout variant="good" title="只有它回答了全部六個角色">
        特別是「資料的家」與「歷史累積」這兩個最核心的需求。
      </Callout>
      <Callout variant="good" title="錢花在會留下來的地方">
        授權費換成團隊能力與開放格式的資料資產。
      </Callout>
      <Callout variant="good" title="不關門">
        未來若要商用 BI，開源資料層隨時可對接；反過來轉換成本高得多。
      </Callout>
    </>
  );
}
