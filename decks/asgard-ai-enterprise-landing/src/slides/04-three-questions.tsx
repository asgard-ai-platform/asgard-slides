import { Kicker, GlanceGrid } from "deck-kit";
import type { SlideMeta, GlanceCell } from "deck-kit";

export const meta: SlideMeta = {
  title: "今天要回答的三個問題",
  section: "Cold Open",
  theme: "dark",
};

const questions: GlanceCell[] = [
  {
    label: "問題一",
    value: "為什麼企業砸了大錢，AI 還是沒產生回報？",
    note: "錢花出去了，但那 95% 的企業在哪裡失手——我們會從架構層次拆解。",
  },
  {
    label: "問題二",
    value: "「個人會用 AI」和「企業導入 AI」差在哪？",
    note: "這是最多人搞混的地方，也是 AI 導入最常卡關的根本原因。",
  },
  {
    label: "問題三",
    value: "落地長什麼樣子？——一個完整範例 ＋ 真實客戶數字",
    note: "帶你走一個完整的零售範例，再給你真實客戶的投資回報數字。",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>今天的議程</Kicker>
      <h2>今天要回答的三個問題</h2>
      <GlanceGrid items={questions} />
    </>
  );
}
