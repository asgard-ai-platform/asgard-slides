import { Kicker, Callout } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "在 OLTP 上跑分析的三個後果",
  section: "背景與評估目標",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>為什麼不能直接在來源查</Kicker>
      <h2>在 OLTP 上跑分析的三個後果</h2>
      <Callout variant="warn" title="拖慢生產系統">
        一句掃半年的報表查詢，會和現場下單、報工搶資源。
      </Callout>
      <Callout variant="warn" title="表結構不適合分析">
        OLTP 表為交易正確性設計，分析常要跨數十張表 JOIN。
      </Callout>
      <Callout variant="warn" title="歷史查不到">
        來源系統會清舊資料，趨勢與 AI 需要的長期歷史不在裡面。
      </Callout>
    </>
  );
}
