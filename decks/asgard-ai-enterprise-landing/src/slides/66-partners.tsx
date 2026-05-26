import { Kicker, Tag, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "產業合作夥伴與客戶生態",
  section: "真實客戶",
  theme: "dark",
};

const industries = [
  "製造（東台精機、東陽、恆耀國際）",
  "品保維修（台新餐飲 Unitech）",
  "零售電商（生活市集、PayEasy）",
  "醫療（台安藥局）",
  "影音娛樂（秀泰）",
  "飯店餐旅（寒舍集團）",
];

const partners = [
  "MetaAge", "Freedom Systems", "Systex 精誠", "Rytass 八拍子",
  "森鉅", "大成長城", "寒舍", "台安", "NEWEB", "Tong Yang", "Boltun", "Tongtai",
];

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · 生態夥伴</Kicker>
      <h2>已落地產業 ＆ SI／生態夥伴</h2>

      <p style={{ marginBottom: 8, color: "var(--muted)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
        已落地產業
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {industries.map((ind) => (
          <Tag key={ind}>{ind}</Tag>
        ))}
      </div>

      <p style={{ marginBottom: 8, color: "var(--muted)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
        SI ／ 生態夥伴
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {partners.map((p) => (
          <Tag key={p}>{p}</Tag>
        ))}
      </div>

      <Talkbox compact>
        <p>
          Asgard 已被廣泛導入製造、零售、金融、電商、科技服務與公部門，
          並獲<strong>大型企業與頂尖 SI 採用</strong>。
        </p>
      </Talkbox>
    </>
  );
}
