import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "Sindri · Agent Hub", section: "Asgard 產品與架構", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>Sindri Agent Hub · 產品畫面</Kicker>
      <DemoShot src="assets/product/p-22.png" alt="Sindri Agent Hub" size="page" caption="Agent Hub — 上線的 AI Agent 集中管理，員工像用線上客服一樣使用。" />
    </>
  );
}
