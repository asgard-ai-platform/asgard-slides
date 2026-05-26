import { Kicker, Steps, Quote } from "deck-kit";
import type { SlideMeta, Step } from "deck-kit";

export const meta: SlideMeta = {
  title: "Asgard 導入流程",
  section: "怎麼開始",
  theme: "dark",
};

const steps: Step[] = [
  {
    label: "第一步：釐清問題",
    body: "整理所需資訊、梳理流程、找出 AI／自動化的可能情境。情境流程確認、系統盤點、資料盤點（蒐集／儲存／處理／供應／監控）。",
  },
  {
    label: "第二步：導入 AI 強化",
    body: (
      <div>
        <p style={{ marginBottom: 8 }}>三條線並行推進：</p>
        <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>
            <strong>企業現況分析</strong>（Context / Data / Process）：情境流程確認、系統盤點、資料盤點。
          </li>
          <li>
            <strong>資料架構導入</strong>（AI Agents）：Structured / Unstructured / Analytics / Action Data Agent ＋ Agent Toolset。
          </li>
          <li>
            <strong>AI 綜合應用呈現</strong>：官網／Line AI 客服、企業內部 KM、ERP/WMS 智能查詢／工單自動化、Gen BI。
          </li>
        </ul>
      </div>
    ),
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>怎麼開始</Kicker>
      <h2>Asgard 導入流程</h2>
      <p>
        導入流程其實只有兩步——不是急著裝工具，是先梳理流程、盤點資料、找到最值得下手的情境，再三線並行把 AI 接進來。
      </p>
      <Steps items={steps} />
      <Quote compact>
        <p>
          第一步最關鍵——做錯這步，後面全白費。
        </p>
      </Quote>
    </>
  );
}
