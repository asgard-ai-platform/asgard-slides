import { Kicker, DashList, Steps } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "評估對象與三步方法",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>範圍與方法</Kicker>
      <h2>評估對象與三步方法</h2>
      <DashList
        items={[
          "路線一：FineDataLink + FineReport/FineBI",
          "路線二：Denodo",
          "路線三：開源自建 + 顧問導入",
        ]}
      />
      <Steps
        items={[
          {
            label: "1",
            body: "建立中立的「六階段角色框架」——先有一把共同的尺",
          },
          {
            label: "2",
            body: "把每個方案放進框架對標——看清「是什麼、不是什麼」",
          },
          {
            label: "3",
            body: "以適用情境條件做多維度評估——功能、地端、自主維運、擴充性、鎖定、AI、成本",
          },
        ]}
      />
    </>
  );
}
