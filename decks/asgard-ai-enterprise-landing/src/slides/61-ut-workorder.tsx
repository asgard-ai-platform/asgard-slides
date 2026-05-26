import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Unitech：自動建工單", section: "真實客戶", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Unitech 實際畫面 · 自動化 (1/3)</Kicker>
      <DemoShot src="assets/unitech/p-45.png" alt="自動建立工單寫回 NetSuite ERP" size="page" caption="自動建立工單，直接寫回 NetSuite ERP 工程服務單——接進既有系統，不另開系統。" />
    </>
  );
}
