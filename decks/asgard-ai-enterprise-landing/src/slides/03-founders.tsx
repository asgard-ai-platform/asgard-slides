import { Kicker, Credential, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "為什麼是我們在講這件事",
  section: "Cold Open",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>創辦人背景</Kicker>
      <h2>從企業 IT 戰場走出來的創業者</h2>
      <p>
        我不是從學術或純研究進來的，我是從<strong>「導入失敗」的現場</strong>進來的。
        我看過太多公司買了工具、上了系統，最後變成放著生灰塵的「形象工程」。
        Asgard 想解決的，就是這件事。
      </p>
      <Credential>
        <strong>王韋仁 William Wang</strong>
        <br />
        Asgard CEO｜前八拍子（8477）技術長、Microsoft 工程師
      </Credential>
      <Credential>
        <strong>林君翰 John Lin</strong>
        <br />
        Asgard CTO｜前 PwC Risk Assurance、富邦核心系統架構師
      </Credential>
      <Talkbox compact>
        <p>
          我們在企業 IT 的戰場待了 12 年——企業系統、平台開發、ERP 導入、資安稽核。
          <strong>企業要什麼，我們太清楚了，因為那就是我們的日常。</strong>
        </p>
      </Talkbox>
    </>
  );
}
