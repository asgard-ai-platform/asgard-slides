import { Kicker, Timeline, Talkbox } from "deck-kit";
import type { SlideMeta, Milestone } from "deck-kit";

export const meta: SlideMeta = {
  title: "AI 生產力革命：第三次躍遷",
  section: "The AI Paradox",
  theme: "dark",
};

const milestones: Milestone[] = [
  {
    label: "工業革命",
    title: "蒸汽機 — 1x → 10x",
    note: "把人力放大十倍。贏家不是「買了蒸汽機的人」，是「先建工廠這個新架構」的人。",
  },
  {
    label: "數位革命",
    title: "電腦 — 10x → 100x",
    note: "再放大十倍。數位化重組了整個商業流程，不只是讓算盤變快。",
  },
  {
    label: "智慧革命",
    title: "AI — 100x → ???",
    note: "倍數是個問號，但方向確定。前兩次的教訓很清楚：重組流程的人贏，只買工具的人輸。",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>歷史視角</Kicker>
      <h2>AI 生產力革命：第三次躍遷</h2>
      <p>
        每一次生產力革命，都是一個放大器。前兩次我們知道倍數；這次的問號，
        不代表不確定性，而是代表<strong>上限還沒被測到</strong>。
      </p>
      <Timeline items={milestones} />
      <Talkbox compact>
        <p>
          蒸汽機剛出來，把它綁在原本的手工作坊裡，是沒用的——
          要先有「工廠」這個新架構，蒸汽機才放得出威力。
          <strong>AI 一模一樣。買工具不夠，要重組架構。</strong>
        </p>
      </Talkbox>
    </>
  );
}
