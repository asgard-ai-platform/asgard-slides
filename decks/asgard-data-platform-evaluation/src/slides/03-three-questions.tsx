import { Kicker, Steps } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "本報告要回答的三個問題",
  section: "Executive Summary",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Executive Summary</Kicker>
      <h2>本報告要回答的三個問題</h2>
      <Steps
        items={[
          {
            label: "1",
            body: "為什麼這個選型題不容易比？——這些方案本來就不是同一類東西，行銷詞彙卻高度重疊。",
          },
          {
            label: "2",
            body: "三條路線各自是什麼、適合誰？——放進同一張角色框架，逐項攤開優勢與限制。",
          },
          {
            label: "3",
            body: "此類企業應該怎麼走？——一條保留性價比與擴充性的階段演進路線，加上團隊培養計畫。",
          },
        ]}
      />
    </>
  );
}
