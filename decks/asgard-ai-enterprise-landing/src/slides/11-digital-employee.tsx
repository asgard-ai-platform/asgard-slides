import { Kicker, Steps, Quote } from "deck-kit";
import type { SlideMeta, Step } from "deck-kit";

export const meta: SlideMeta = {
  title: "從「數位」員工到「數位員工」",
  section: "The AI Paradox",
  theme: "dark",
};

const stages: Step[] = [
  {
    label: "第一階段：人工作業",
    body: "資訊分散、各部門各自為政。出問題往往事後才補救。人追著報表跑，問題發現都已經慢一拍。",
  },
  {
    label: "第二階段：智能自動化",
    body: "資料實時串聯，系統自動協調各部門行動。企業從被動變主動——異常出現，系統已在協調回應。",
  },
  {
    label: "第三階段：人機協作 AI 員工",
    body: "AI 主動推動流程、提前預判風險，人退到「監督、優化、引導與審核」的角色。運作模式從「人找資訊」轉變為「資訊找人」。",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>演進路徑</Kicker>
      <h2>從「數位」員工 到「數位員工」</h2>
      <p>
        差一個位置，意思完全不同。「<strong>數位</strong>的員工」還是人在操作數位工具；
        「<strong>數位員工</strong>」是 AI 本身作為一個會主動工作的成員。
      </p>
      <Steps items={stages} />
      <Quote compact>
        <p>
          以前是主管追著報表跑；以後是異常自己浮出來找你。
          從「人找資訊」轉變為「資訊找人」——這就是我們追求的第三階段。
        </p>
      </Quote>
    </>
  );
}
