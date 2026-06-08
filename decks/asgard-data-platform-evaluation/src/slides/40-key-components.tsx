import { Kicker, DemoShot } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "dbt 與 Airflow：日常維運的兩個介面",
  section: "目標藍圖 Lakehouse",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>重點元件放大</Kicker>
      <h2>dbt 與 Airflow：日常維運的兩個介面</h2>
      <DemoShot
        src="assets/research/dbt-dag.png"
        alt="dbt 模型依賴血緣圖"
        caption="dbt 自動產生的模型依賴（血緣）圖"
      />
    </>
  );
}
