import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Unitech：自動回信", section: "真實客戶", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Unitech 實際畫面 · 自動化 (2/3)</Kicker>
      <DemoShot src="assets/unitech/p-46.png" alt="處理結果自動寄 Email" size="page" caption="處理結果自動寄 Email 通知客戶。" />
    </>
  );
}
