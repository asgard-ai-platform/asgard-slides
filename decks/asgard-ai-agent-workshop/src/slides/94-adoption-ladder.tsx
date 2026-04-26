import { Kicker, Quote, Steps, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "從一個人用，到全公司用：四階段 adoption ladder",
  section: "Adoption Path",
  theme: "light",
};

export const notes = `
### 94. 從一個人用，到全公司用：四階段 adoption ladder
- 區段：Adoption Path
- 主句：別從第 4 階段開始；從第 1 階段就先做。
- 階段重點：
  - 1 個人試：選一個 weekly 的重複工作，跑通 task brief → agent → 交付的循環。
  - 2 Pilot team（5-10 人）：把成功做法沉澱成 reusable skill / workflow；建立 review 流程。
  - 3 Center of Excellence：跨部門平台、共用 skill library、訂治理規則；指定專人維運。
  - 4 全公司：agent 像 Slack 一樣是基礎設施；新人入職就有可用 workflow。
- 補充講法：常見錯誤是想直接做第 4 階——先評估全公司平台、選大廠合約、編大團隊。Agent 的學習成本不在工具，在「組織知道哪些工作該交給 agent」。先從個人 use case 跑通，後面才有素材做 skill library 與治理。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Adoption Path</Kicker>
      <h2>從一個人用，到全公司用：四階段 adoption ladder</h2>
      <Steps items={[
        { label: "1", body: <>個人<br />一個 use case 跑通</> },
        { label: "2", body: <>Pilot team<br />5-10 人沉澱 skill</> },
        { label: "3", body: <>Center of Excellence<br />跨部門平台 + 治理</> },
        { label: "4", body: <>全公司<br />像 Slack 一樣基礎設施</> },
        { label: "?", body: <>常見錯誤<br />從第 4 階段開始</> },
        { label: "✓", body: <>正確做法<br />從第 1 階段先跑通</> },
      ]} />
      <Quote compact>別從第 4 階段開始。第 1 階段沒先跑通，第 4 階段做了也沒人會用。</Quote>
      <Talkbox compact>
        <p>Agent 的學習成本不在工具，在「組織知道哪些工作該交給 agent」。先用個人 use case 累積素材，第 2 階段才有東西沉澱成 skill library，第 3 階段才有規則可制定治理政策。</p>
      </Talkbox>
    </>
  );
}
