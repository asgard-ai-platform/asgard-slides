import { Kicker, Steps, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Skill 的重點：讓 agent 在正確時機載入正確方法",
  section: "Skill Packaging",
  theme: "light",
};

export const notes = `
### 28. Skill 的重點：讓 agent 在正確時機載入正確方法
- 區段：Skill Packaging
- 流程：1Description / 判斷何時要用 -> 2Workflow / 告訴 agent 怎麼做 -> 3References / 需要時再補深度 -> 4Examples / 給好壞範例 -> 5Scripts / 可執行輔助工具 -> 6Output contract / 固定交付格式
- 補充講法：Skill 不是把所有知識一口氣塞給模型，而是用 progressive disclosure 管理 context budget：平常只暴露 name / description；觸發後載入 SKILL.md；真正需要深度材料或計算時，才讀 references 或執行 scripts。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Skill Packaging</Kicker>
      <h2>Skill 的重點：讓 agent 在正確時機載入正確方法</h2>
      <Steps items={[
        { label: "1", body: <>Description<br />判斷何時要用</> },
        { label: "2", body: <>Workflow<br />告訴 agent 怎麼做</> },
        { label: "3", body: <>References<br />需要時再補深度</> },
        { label: "4", body: <>Examples<br />給好壞範例</> },
        { label: "5", body: <>Scripts<br />可執行輔助工具</> },
        { label: "6", body: <>Output contract<br />固定交付格式</> },
      ]} />
      <Talkbox compact>
        <p>Skill 不是把所有知識一口氣塞給模型，而是用 progressive disclosure 管理 context budget：平常只暴露 name / description；觸發後載入 SKILL.md；真正需要深度材料或計算時，才讀 references 或執行 scripts。</p>
      </Talkbox>
    </>
  );
}
