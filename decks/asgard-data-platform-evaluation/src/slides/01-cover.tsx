import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = { title: "企業資料平台選型評估", section: "開場", theme: "dark" };

export default function Slide() {
  return (
    <>
      <Kicker>開場</Kicker>
      <h2>企業資料平台選型評估</h2>
    </>
  );
}
