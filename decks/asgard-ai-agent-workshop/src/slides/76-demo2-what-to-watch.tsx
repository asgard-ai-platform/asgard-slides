import { Kicker, Quote, Steps, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "看什麼：Plugin demo 要看 task classification、workflow、skill 與 output contract",
  section: "Demo 2 · What To Watch",
  theme: "paper",
};

export const notes = `
### 61. 看什麼：Plugin demo 要看 task classification、workflow、skill 與 output contract
- 區段：Demo 2 · What To Watch
- 主句：這段真正展示的是 harness 的 routing：不是每次重寫 prompt，而是根據任務載入對的 workflow 與 skills。
- 流程：1讀任務 / 家族企業接班個案 -> 2分類 / case-study workflow -> 3載入 / 問題結構化 skill -> 4補知識 / 家族企業 / 治理 -> 5必要時 / M&A / financing -> 6輸出 / 固定報告結構
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 2 · What To Watch</Kicker>
      <h2>看什麼：Plugin demo 要看 task classification、workflow、skill 與 output contract</h2>
      <Steps
        items={[
          { label: "讀任務", body: "家族企業接班個案" },
          { label: "分類", body: "case-study workflow" },
          { label: "載入", body: "問題結構化 skill" },
          { label: "補知識", body: "家族企業 / 治理" },
          { label: "必要時", body: "M&A / financing" },
          { label: "輸出", body: "固定報告結構" },
        ]}
      />
      <Quote compact>這段真正展示的是 harness 的 routing：不是每次重寫 prompt，而是根據任務載入對的 workflow 與 skills。</Quote>
    </>
  );
}
