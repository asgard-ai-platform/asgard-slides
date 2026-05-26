import { Kicker, LayerStack, Quote } from "deck-kit";
import type { SlideMeta, StackLayer } from "deck-kit";

export const meta: SlideMeta = {
  title: "要變成「能上線的 Agent」，需要六層架構",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

const layers: StackLayer[] = [
  { label: "🛡️ Governance 治理", note: "誰能讓 Agent 用哪些工具、碰哪些資料" },
  { label: "🧷 Session · Memory 記憶", note: "保存進度、checkpoint、失敗可恢復" },
  { label: "📦 Sandbox 沙箱", note: "讓 AI 產生的指令在受控環境裡執行，不會亂來" },
  { label: "⚙️ Harness 流程引擎", note: "管 Agent loop、工具調度、審核、重試、停止條件" },
  { label: "🔧 Tools · MCP 工具", note: "查資料、呼叫 API、動到真實系統——「會做事」的關鍵" },
  { label: "🧠 Model 模型", note: "理解、規劃、決定下一步" },
];

export default function Slide() {
  return (
    <>
      <Kicker>Agent 系統架構</Kicker>
      <h2>要變成「能上線的 Agent」，需要一整套架構（不只是模型）</h2>
      <LayerStack layers={layers} />
      <Quote compact>
        <p>
          在這六個角色裡，真正的「AI 模型」只佔六分之一。
          <strong>其餘五個，全是扎實的工程與治理。</strong>
          「接了 GPT」≠「導入企業 AI」——那五塊，才是 95% 沒做、也吃不到回報的地方。
        </p>
      </Quote>
    </>
  );
}
