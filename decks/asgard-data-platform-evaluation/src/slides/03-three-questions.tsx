import { Kicker, Callout } from "deck-kit";
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
      <Callout variant="info" title="一、為什麼這個選型題不容易比？">
        這些方案本來就不是同一類東西，行銷詞彙卻高度重疊，放在同一張表上自然難有結論。
      </Callout>
      <Callout variant="info" title="二、各條路線各自是什麼、適合誰？">
        放進同一張「角色框架」，逐項攤開各自的優勢與限制。
      </Callout>
      <Callout variant="info" title="三、此類企業應該怎麼走？">
        一條保留性價比與擴充性的階段演進路線，加上配套的團隊培養計畫。
      </Callout>
    </>
  );
}
