import { Kicker, FlowDiagram } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Asgard Data Insight：自然語言查詢",
  section: "Consumption",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>AI 入口</Kicker>
      <h2>Asgard Data Insight：自然語言查詢</h2>
      <FlowDiagram
        nodes={[
          { title: "使用者", body: "「上月各課別達成率排名？」" },
          { title: "ADI", body: "語意理解 → 生成 SQL → 驗證 → 執行" },
          { title: "marts 層", body: "治理過的乾淨彙總表" },
          { title: "回傳", body: "答案 + 圖表 + 引用的數據口徑" },
        ]}
      />
    </>
  );
}
