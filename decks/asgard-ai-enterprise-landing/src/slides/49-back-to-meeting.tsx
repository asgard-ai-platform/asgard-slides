import { Kicker, TwoColumn, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "回到那個早會：兩種公司的差距",
  section: "怎麼開始",
  theme: "dark",
};

const colStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "20px 18px",
  borderRadius: 12,
  border: "1px solid",
  height: "100%",
};

const noAiStyle: React.CSSProperties = {
  ...colStyle,
  background: "rgba(239, 68, 68, 0.06)",
  borderColor: "rgba(239, 68, 68, 0.25)",
};

const aiStyle: React.CSSProperties = {
  ...colStyle,
  background: "rgba(45, 90, 138, 0.08)",
  borderColor: "rgba(45, 90, 138, 0.35)",
};

const stepStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.6,
  color: "var(--ink)",
  paddingLeft: 14,
  borderLeft: "2px solid var(--line)",
};

const badStep: React.CSSProperties = {
  ...stepStyle,
  borderLeftColor: "var(--rose)",
};

const goodStep: React.CSSProperties = {
  ...stepStyle,
  borderLeftColor: "var(--cyan)",
};

const Left = (
  <div style={noAiStyle}>
    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--rose)", marginBottom: 4 }}>
      ✗ 沒有組織型 AI
    </div>
    <div style={badStep}>老闆憑直覺加廣告</div>
    <div style={badStep}>更多人進來排隊等出貨</div>
    <div style={badStep}>客訴爆炸，問題越滾越大</div>
  </div>
);

const Right = (
  <div style={aiStyle}>
    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--cyan)", marginBottom: 4 }}>
      ✓ 有組織型 AI
    </div>
    <div style={goodStep}>AI 把紅燈拆成三條線</div>
    <div style={goodStep}>跨部門追到缺貨與履約根因</div>
    <div style={goodStep}>30 分鐘內下完正確決策</div>
  </div>
);

export default function Slide() {
  return (
    <>
      <Kicker>收束</Kicker>
      <h2>回到那個早會：星期一，營收亮紅燈</h2>
      <p>
        同樣一個紅燈，兩種公司，結果截然不同。
      </p>
      <TwoColumn left={Left} right={Right} />
      <Quote>
        <p>
          差別不在「有沒有 AI」，在「AI 有沒有變成你組織的一部分」。
        </p>
      </Quote>
    </>
  );
}
