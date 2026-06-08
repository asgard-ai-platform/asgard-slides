import { Kicker, FlowDiagram } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "資料平台六階段角色框架",
  section: "六階段角色框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>完整框架總圖</Kicker>
      <h2>資料平台六階段角色框架</h2>
      <FlowDiagram
        nodes={[
          { title: "Sources" },
          { title: "Ingestion" },
          { title: "Storage" },
          { title: "Transform" },
          { title: "Query" },
          { title: "Consumption" },
        ]}
      />
      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        另有 Orchestration / Governance / Observability 三橫切面貫穿全部。這張框架是後面所有比較的尺。
      </p>
    </>
  );
}
