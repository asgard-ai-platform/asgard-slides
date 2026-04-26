import { Kicker, Quote, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Skill 跟 workflow 寫好了，但 agent 在哪裡執行？",
  section: "From Skill To Sandbox",
  theme: "paper",
};

export const notes = `
### 41. Skill 跟 workflow 寫好了，但 agent 在哪裡執行？
- 區段：From Skill To Sandbox
- 主句：方法論寫得再好，沒有 sandbox 執行環境，agent 仍然只是 chat。
- 補充講法：這是一段過場——前面講完 skill / workflow / 方法論，下一個自然問題是「這些東西在哪裡跑」。Sandbox 是讓 agent 真的能讀檔、跑指令、產 artifact 的地方。沒有它，所有 skill 都只是 prompt 加長版。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="Transition">From Skill To Sandbox</Kicker>
      <h2>Skill 跟 workflow 寫好了，但 agent 在哪裡執行？</h2>
      <Quote>方法論寫得再好，沒有 sandbox 執行環境，agent 仍然只是 chat。</Quote>
      <Talkbox compact>
        <p>前面講完 skill 與 workflow，下一個自然問題是「這些東西到底在哪裡跑」。Sandbox 是讓 agent 真的能讀檔、跑指令、產 artifact 的地方。接下來看 sandbox agent 的概念，再看 Claude Code 怎麼把 sandbox 包進來。</p>
      </Talkbox>
    </>
  );
}
