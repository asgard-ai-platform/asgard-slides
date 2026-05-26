import { Kicker, Tree, DashList, Quote } from "deck-kit";
import type { SlideMeta, TreeNode } from "deck-kit";

export const meta: SlideMeta = {
  title: "架構全貌：Ontology Layer 是數位大腦",
  section: "Asgard 產品與架構",
  theme: "dark",
};

const agentTree: TreeNode = {
  label: "Supervisor Agent（主管 Agent）",
  children: [
    { label: "Structured Data Agent（結構化資料）" },
    { label: "Unstructured Data Agent（非結構化資料）" },
    { label: "Analytics Agent（分析）" },
    { label: "Action Agent（執行動作）" },
  ],
};

const dataSources = [
  "ERP", "MES", "PLM", "QMS", "TMS", "WMS", "SRM", "CRM", "POS", "FSM", "CSM", "Docs",
];

const keyPoints = [
  <>
    使用者 <strong>Question</strong>（報告 / 搜尋 / 命令）→ <strong>Answer</strong>（查詢回應 / 語意回應 / 執行動作）——
    第三種「執行動作」，是左右腦真正接起來的證據。
  </>,
  <>
    <strong>Supervisor Agent 拆解任務、分派下去</strong>——帶四個專員：管結構化資料的、管文件的、做分析的、動手做事的——
    就像一個真的部門。
  </>,
  <>
    <strong>底層接你已有的系統</strong>——ERP、CRM、WMS、POS……我們不是要你換掉它們，
    是在它們之上長出一個大腦。
  </>,
];

export default function Slide() {
  return (
    <>
      <Kicker>架構全貌</Kicker>
      <h2>架構全貌：Ontology Layer 是數位大腦</h2>
      <Quote compact>
        <p>
          <strong>Asgard Ontology Layer</strong> — The digital brain that connects all enterprise knowledge, operations, and actions.
        </p>
      </Quote>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
        <div>
          <Tree root={agentTree} />
          <p style={{ fontSize: "13px", marginTop: "12px", color: "var(--muted)" }}>
            <strong>Data Sources：</strong>{dataSources.join(" / ")}
          </p>
        </div>
        <div>
          <DashList items={keyPoints} />
        </div>
      </div>
    </>
  );
}
