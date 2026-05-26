import { Kicker, DashList, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "企業語意層 Enterprise Ontology Layer",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const whyMatters = [
  <>
    你的「客戶」「訂單」「毛利」「缺貨」，在 ERP、CRM、WMS 裡<strong>叫法都不一樣</strong>——
    人靠開會、靠資深員工的經驗去橋；AI 不會通靈。
  </>,
  <>
    語意層 = 幫企業建一份<strong>「共同字典」</strong>，把散落各系統的名詞對齊成同一套商業概念。
  </>,
  <>
    建好以後，不管你用哪個 AI、問哪個問題，它都站在<strong>同一套企業常識</strong>上回答——
    不會雞同鴨講。沒有它，AI 永遠是個聰明的外人。
  </>,
];

export default function Slide() {
  return (
    <>
      <Kicker>架構心臟</Kicker>
      <h2>企業語意層 Enterprise Ontology Layer</h2>
      <Quote compact>
        <p>
          建一次知識模型，全平台通用，讓 AI <strong>真正理解你的企業語言</strong>。
        </p>
      </Quote>
      <p style={{ marginTop: "16px", marginBottom: "8px" }}>
        <strong>為什麼重要：</strong>
      </p>
      <DashList items={whyMatters} />
    </>
  );
}
