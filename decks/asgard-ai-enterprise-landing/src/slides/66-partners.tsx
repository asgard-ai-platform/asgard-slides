import { Kicker } from "deck-kit";
import type { SlideMeta } from "deck-kit";
import styles from "./66-partners.module.css";

export const meta: SlideMeta = {
  title: "產業合作夥伴與客戶生態",
  section: "真實客戶",
  theme: "dark",
};

const industries = [
  { name: "製造", ex: "東台精機、東陽、恆耀國際" },
  { name: "品保維修", ex: "台新餐飲 Unitech" },
  { name: "零售電商", ex: "生活市集、PayEasy" },
  { name: "醫療", ex: "台安藥局" },
  { name: "影音娛樂", ex: "秀泰" },
  { name: "飯店餐旅", ex: "寒舍集團" },
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

      <div className={styles.label}>已落地產業</div>
      <div className={styles.industries}>
        {industries.map((ind) => (
          <div className={styles.ind} key={ind.name}>
            <div className={styles.indName}>{ind.name}</div>
            <div className={styles.indEx}>{ind.ex}</div>
          </div>
        ))}
      </div>

      <div className={styles.label}>SI ／ 生態夥伴</div>
      <div className={styles.partners}>
        {partners.map((p) => (
          <span className={styles.chip} key={p}>{p}</span>
        ))}
      </div>
    </>
  );
}
