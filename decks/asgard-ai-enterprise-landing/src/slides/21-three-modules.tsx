import { Kicker, DemoShot, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "三大核心模組",
  section: "Asgard 產品與架構",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>產品架構</Kicker>
      <h2>三大核心模組</h2>
      <DemoShot src="assets/deck/p16_three_modules.png" alt="Asgard 三大核心模組 Odin/Mimir/Sindri ＋ 語意層" size="large" />
      <Talkbox compact>
        <p>三個模組共享同一個企業語意層——建一次，全平台通用。</p>
      </Talkbox>
    </>
  );
}
