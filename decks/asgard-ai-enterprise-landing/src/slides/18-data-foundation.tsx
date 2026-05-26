import { Kicker, DashList, Quote, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "地基：乾淨、可治理的資料",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const requirements = [
  <>
    <strong>一份資料、多種用途：</strong>儲存與運算分離，同一份資料能給 BI、ML、GenAI 一起用，
    不用複製來複製去——每個工具各一份，是災難的開始。
  </>,
  <>
    <strong>可治理、可追溯：</strong>誰能看哪張表、欄位從哪來、被誰改過，都查得到。
    治理是上 AI 的<strong>前提</strong>，不是出事才補。
  </>,
  <>
    <strong>不被單一廠商綁死：</strong>用開放格式（如 <strong>Apache Iceberg</strong>）存資料，
    將來換引擎、換工具，資料不用搬家。
  </>,
];

export default function Slide() {
  return (
    <>
      <Kicker>資料地基</Kicker>
      <h2>別忘了地基：AI 要落地，先要有乾淨、可治理的資料</h2>
      <Quote compact>
        <p>再強的 AI，也只能跟它看到的資料一樣聰明。</p>
      </Quote>
      <p style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-2)" }}>
        <strong>三個底層要求：</strong>
      </p>
      <DashList items={requirements} />
      <Talkbox compact label="類比">
        <p>
          就像 Git——所有版本都在，但你需要一個地方記住「現在是哪一版、誰能改」。
          資料平台的這個角色，就是「目錄 / Catalog」。必要時，我們會先幫企業把
          ETL / Data Gateway / Pipeline 這條資料管線建起來，再談 AI（BYOA）。
        </p>
      </Talkbox>
    </>
  );
}
