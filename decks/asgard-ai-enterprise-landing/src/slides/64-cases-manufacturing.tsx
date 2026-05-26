import { Kicker, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "其他客戶案例（一）：製造業",
  section: "真實客戶",
  theme: "dark",
};

const cases = [
  {
    name: "森鉅（8942.TWO）",
    desc: "生產線設計整合與資料萃取，Semantic 模型 ＋ Data Insight ＋ 智慧製造對話 Agent",
  },
  {
    name: "QST / Boltun（8349.TWO）",
    desc: "越南廠 ERP 系統；會計傳票資料的財務洞察（前 20 大會計科目分類金額統計）",
  },
  {
    name: "東陽 Tong Yang（1319.TW）",
    desc: "研發系統 ＋ AI 自動辨識車燈/零件圖號結構化、零件清單比對",
  },
];

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · 製造業</Kicker>
      <h2>製造業客戶案例</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
        {cases.map((c) => (
          <div
            key={c.name}
            style={{
              padding: "14px 18px",
              border: "1px solid var(--line)",
              borderRadius: 8,
              background: "var(--card)",
            }}
          >
            <strong style={{ display: "block", marginBottom: 4, color: "var(--cyan)" }}>{c.name}</strong>
            <span style={{ color: "var(--muted)", fontSize: 15 }}>{c.desc}</span>
          </div>
        ))}
      </div>
      <Talkbox compact>
        <p>
          從營運、財務到研發，<strong>同一套架構、不同字典</strong>。
        </p>
      </Talkbox>
    </>
  );
}
