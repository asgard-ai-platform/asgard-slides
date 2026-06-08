import { Kicker, Steps } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三個具體動作",
  section: "Handover 與收尾",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>建議的下一步</Kicker>
      <h2>三個具體動作</h2>
      <Steps
        items={[
          {
            label: "1",
            body: "內部對齊本報告的評估結論",
          },
          {
            label: "2",
            body: "若同意開源演進路線，進入需求訪談與 Phase 1 範圍規劃",
          },
          {
            label: "3",
            body: "指派 2 名種子工程師人選，於 Phase 1 啟動時到位",
          },
        ]}
      />
    </>
  );
}
