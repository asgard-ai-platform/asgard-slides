import { Kicker, Quote, Steps, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "這些東西如何被 harness 使用？從任務進來到產物出去",
  section: "How Harness Uses Assets",
  theme: "paper",
};

export const notes = `
### 45. 這些東西如何被 harness 使用？從任務進來到產物出去
- 區段：How Harness Uses Assets
- 主句：Harness 的價值是把任務分類、資產載入、工具調度、權限控制與 artifact 交付整合成一個可觀測的 run。
- 流程：1讀任務 / 辨識類型與風險 -> 2找資產 / plugin / workflow -> 3載入知識 / skills / references -> 4派工具 / MCP / CLI / API -> 5控執行 / sandbox / permission -> 6收結果 / artifact / log / checkpoint
- 補充講法：任務進來後，harness 先做 task classification，再選 plugin / workflow，按需載入 skill，選擇 MCP 或 CLI executor，最後在 sandbox 裡執行並保存 artifact、log 與 checkpoint。
`;

export default function Slide() {
  return (
    <>
      <Kicker>How Harness Uses Assets</Kicker>
      <h2>這些東西如何被 harness 使用？從任務進來到產物出去</h2>
      <Steps
        items={[
          { label: "讀任務", body: "辨識類型與風險" },
          { label: "找資產", body: "plugin / workflow" },
          { label: "載入知識", body: "skills / references" },
          { label: "派工具", body: "MCP / CLI / API" },
          { label: "控執行", body: "sandbox / permission" },
          { label: "收結果", body: "artifact / log / checkpoint" },
        ]}
      />
      <Quote>Harness 的價值是把任務分類、資產載入、工具調度、權限控制與 artifact 交付整合成一個可觀測的 run。</Quote>
      <Talkbox compact>
        <p>任務進來後，harness 先做 task classification，再選 plugin / workflow，按需載入 skill，選擇 MCP 或 CLI executor，最後在 sandbox 裡執行並保存 artifact、log 與 checkpoint。</p>
      </Talkbox>
    </>
  );
}
