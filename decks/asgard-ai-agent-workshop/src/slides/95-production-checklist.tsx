import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "上線前，用這張表檢查你的 agent",
  section: "Production Checklist",
  theme: "paper",
};

export const notes = `
### 75. 上線前，用這張表檢查你的 agent
- 區段：Production Checklist
- 表格重點：Model / 能不能換 model 而不重寫流程？ / 狀態藏在 prompt 或 provider 特定格式；Tools / 工具描述、權限、錯誤是否可被 agent 理解？ / 工具會被誤用，錯誤後無限重試；Harness / 是否有 planning、recovery、checkpoint？ / 跑久就失控，斷線就重來；Sandbox / credentials 是否離開執行環境？ / 模型生成程式能讀到敏感 token；Governance / 每次決策能不能追溯？ / 出事後只剩聊天紀錄，沒有事件鏈
- 補充講法：這張是上線前的最低門檻。只要有一項回答不出來，就先不要把它叫 production agent；先把流程、權限、紀錄與恢復能力補齊。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Production Checklist</Kicker>
      <h2>上線前，用這張表檢查你的 agent</h2>
      <Matrix
        headers={["檢查項", "問題", "不合格訊號"]}
        rows={[
          ["Model", "能不能換 model 而不重寫流程？", "狀態藏在 prompt 或 provider 特定格式"],
          ["Tools", "工具描述、權限、錯誤是否可被 agent 理解？", "工具會被誤用，錯誤後無限重試"],
          ["Harness", "是否有 planning、recovery、checkpoint？", "跑久就失控，斷線就重來"],
          ["Sandbox", "credentials 是否離開執行環境？", "模型生成程式能讀到敏感 token"],
          ["Governance", "每次決策能不能追溯？", "出事後只剩聊天紀錄，沒有事件鏈"],
        ]}
      />
      <Talkbox compact>
        <p>這張是上線前的最低門檻。只要有一項回答不出來，就先不要把它叫 production agent；先把流程、權限、紀錄與恢復能力補齊。</p>
      </Talkbox>
    </>
  );
}
