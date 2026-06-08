import { Kicker, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "為什麼 FineDataLink 與 Denodo 難直接比",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>先放回正確位置</Kicker>
      <h2>為什麼 FineDataLink 與 Denodo 難直接比</h2>
      <Callout variant="info" title="進貨物流 vs 出貨窗口">
        FineDataLink 解決「怎麼把資料搬進來、加工」；Denodo 解決「怎麼不搬資料就查到」。比較它們就像比較「進貨物流」與「出貨窗口」——都重要，但不是同一個職位。
      </Callout>
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        更關鍵的是，兩者都沒回答「資料的家在哪裡」（Storage）——而對尚未建倉的企業，這正是首要目的。
      </p>
    </>
  );
}
