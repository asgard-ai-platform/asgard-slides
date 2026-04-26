import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "怎麼知道 agent 在做事？五個 production quality 指標",
  section: "Evaluation",
  theme: "light",
};

export const notes = `
### 90. 怎麼知道 agent 在做事？五個 production quality 指標
- 區段：Evaluation
- 主句：沒有指標的 agent，等於沒有 production 的 agent。
- 表格重點：
  - Task success rate：任務完成比例。低於某 threshold 就要 review。
  - Time to completion：平均跑多久。突然變長 = 通常是 retry 暴增或 tool 失靈。
  - Human intervention rate：被打斷或被覆寫的比例。高 = agent 沒抓到正確規則。
  - Cost per successful task：每完成一次值多少錢。降不下來 = 成本／效果失衡。
  - User satisfaction：實際留下來用的比例；7 天 / 30 天留存。
- 補充講法：這五個指標一起看才有意義。只看 success rate 會掩蓋成本爆走；只看 cost 會錯過品質下滑。最好的 dashboard 是「五個指標放在一起」。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Evaluation · Quality Metrics</Kicker>
      <h2>怎麼知道 agent 在做事？五個 production quality 指標</h2>
      <Matrix
        headers={["指標", "在量什麼", "失控訊號"]}
        rows={[
          ["Task success rate", "任務完成比例（agent 自評 + 使用者驗收）", "突然下降 = workflow 或 tool 改版踩到雷"],
          ["Time to completion", "平均單次完成時間", "突然變長 = retry 暴增、tool 失靈、或新任務類型沒對應 skill"],
          ["Human intervention rate", "被人工打斷、修正、覆寫的比例", "高 = agent 沒抓到正確規則或 context 不足"],
          ["Cost per successful task", "完成一次任務的平均 token / API cost", "降不下來 = retry 過多、prompt 過長、缺 caching"],
          ["User satisfaction / retention", "使用者實際留下來用的比例（7d / 30d）", "上線後熱度衰退 = 解決不了真實問題"],
        ]}
      />
      <Talkbox compact>
        <p>五個指標一起看才有意義。只看 success rate 會掩蓋成本爆走；只看 cost 會錯過品質下滑。Production agent 的 dashboard 至少要這五欄。</p>
      </Talkbox>
    </>
  );
}
