import { Kicker, TwoColumn, Card, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "左腦 × 右腦：串起來才有威力",
  section: "個人 AI → 組織 AI",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>架構思維</Kicker>
      <h2>左腦 × 右腦：分開都沒用，串起來才有威力</h2>
      <p style={{ marginBottom: "16px" }}>
        Bridging the Left and Right Brain — Unifying Systems, ML, RPA, and GenAI to Eliminate Data Silos
      </p>
      <TwoColumn
        left={
          <Card variant="strong">
            <p><strong>🧮 左腦</strong></p>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              ML / RPA / System Services
            </p>
            <p style={{ fontSize: "14px" }}>
              理性、計算、執行——它很能幹，但它<strong>不懂人話</strong>。
              ML 負責算，RPA 負責自動執行，系統服務負責動企業的資料。
            </p>
          </Card>
        }
        right={
          <Card variant="strong">
            <p><strong>💬 右腦</strong></p>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              GenAI
            </p>
            <p style={{ fontSize: "14px" }}>
              語言、理解、生成——它懂人話、會生成、會對話。
              但它光會說不會做：叫它「幫我補貨」，它只會<strong>告訴你該補貨</strong>，
              不會真的去 ERP 下單。
            </p>
          </Card>
        }
      />
      <Quote compact>
        <p>
          只有 GenAI 會「說」，但不會「做」；只有 ML/RPA 會「算」「做」，但不懂人話。
          <strong>接起來，才是完整的 AI 員工。</strong>
        </p>
      </Quote>
    </>
  );
}
