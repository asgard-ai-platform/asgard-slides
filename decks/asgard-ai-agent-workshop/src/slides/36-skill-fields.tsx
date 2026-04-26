import { Kicker, Matrix, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "SKILL.md 欄位拆解：每個欄位都影響 routing、permission 或 context",
  section: "Skill Anatomy",
  theme: "paper",
};

export const notes = `
### 30. SKILL.md 欄位拆解：每個欄位都影響 routing、permission 或 context
- 區段：Skill Anatomy
- 表格重點：\`name\` / 唯一識別與命名空間基礎 / 短、穩定、可被 plugin 或 marketplace 管理。不要頻繁改名，否則安裝、引用、文件與使用習慣都會斷。；\`description\` / 自動觸發與 routing 判斷的主要訊號 / 包含 use cases、同義說法、任務邊界與風險提示。這不是市場文案，而是 agent router 的分類訊號。；\`allowed-tools\` / 在某些平台可預先授權 skill 常用工具 / 它通常是 approval convenience，不應被誤解成安全邊界；真正禁止工具要在 permission policy / sandbox 層做。；body / 觸發後載入的操作程序 / 保留核心流程、檢查點、輸出格式與 gotchas；避免塞長篇百科，長內容應拆到 references。；\`references/\` / 延後載入的深度資料 / 放理論、模板、schema、長案例；在 SKILL.md 中清楚寫明「什麼情況讀哪一份」。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Skill Anatomy</Kicker>
      <h2>SKILL.md 欄位拆解：每個欄位都影響 routing、permission 或 context</h2>
      <Matrix
        headers={["區塊", "技術作用", "設計要點"]}
        rows={[
          [<code>name</code>, "唯一識別與命名空間基礎", "短、穩定、可被 plugin 或 marketplace 管理。不要頻繁改名，否則安裝、引用、文件與使用習慣都會斷。"],
          [<code>description</code>, "自動觸發與 routing 判斷的主要訊號", "包含 use cases、同義說法、任務邊界與風險提示。這不是市場文案，而是 agent router 的分類訊號。"],
          [<code>allowed-tools</code>, "在某些平台可預先授權 skill 常用工具", "它通常是 approval convenience，不應被誤解成安全邊界；真正禁止工具要在 permission policy / sandbox 層做。"],
          ["body", "觸發後載入的操作程序", "保留核心流程、檢查點、輸出格式與 gotchas；避免塞長篇百科，長內容應拆到 references。"],
          [<code>references/</code>, "延後載入的深度資料", "放理論、模板、schema、長案例；在 SKILL.md 中清楚寫明「什麼情況讀哪一份」。"],
          [<code>scripts/</code>, "可重複、可驗算的 deterministic 執行", "把容易算錯的邏輯交給 script，例如統計檢定、價格彈性、排名分數或文件轉檔。"],
        ]}
      />
    </>
  );
}
