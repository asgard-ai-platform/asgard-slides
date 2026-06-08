import { Kicker, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "簡易版起步 = 完整藍圖的第一階段",
  section: "階段演進路線",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>本章結論</Kicker>
      <h2>簡易版起步 = 完整藍圖的第一階段</h2>
      <Callout variant="good">
        「簡易版起步」與「完整架構」不是二選一——Phase 1 的 PostgreSQL 中台就是完整藍圖的第一階段形態。投資節奏由觸發條件控制，每一塊錢都花在已被驗證的需求上。
      </Callout>
    </>
  );
}
