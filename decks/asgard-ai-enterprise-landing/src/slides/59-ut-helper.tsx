import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Unitech：AI 小幫手（對客）", section: "真實客戶", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Unitech 實際畫面 (1/2)</Kicker>
      <DemoShot src="assets/unitech/p-42.png" alt="台新 AI 小幫手" size="page" caption="台新 AI 小幫手（對客）：客戶問『洗碗機不排水』→ 給排除步驟、判斷是否建客訴單。" />
    </>
  );
}
