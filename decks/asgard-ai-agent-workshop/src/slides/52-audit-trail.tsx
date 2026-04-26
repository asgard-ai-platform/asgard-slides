import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Audit trail 的最低要求：紀錄什麼、留多久、誰能看、誰看不到",
  section: "Audit Requirements",
  theme: "light",
};

export const notes = `
### 52. Audit trail 的最低要求：紀錄什麼、留多久、誰能看、誰看不到
- 區段：Audit Requirements
- 主句：trace 是工程資料；audit 是治理證據——兩者欄位不一樣。
- 表格重點：
  - 紀錄什麼：每次 tool call、輸入、輸出摘要、approval、failure / recovery、人為介入。
  - 留多久：依產業規定。法務 7 年、金融 10 年、健康照護依 HIPAA。
  - 誰能看：使用者本人、合規部門、必要時稽核；存取本身要被 log。
  - 不該看到：原始 credentials、個資（依 GDPR / 個資法），需 redaction 與 hash。
- 補充講法：audit trail 不只是「記下來」，是「該記什麼、不該記什麼、誰看得到、保多久」的設計。production agent 一定要在這四欄之間找到平衡。
`;

export default function Slide() {
  return (
    <>
      <Kicker layer="L6">Audit Requirements</Kicker>
      <h2>Audit trail 的最低要求：紀錄什麼、留多久、誰能看、誰看不到</h2>
      <Matrix
        headers={["維度", "要做的事", "踩雷模式"]}
        rows={[
          [
            "紀錄什麼",
            "每次 tool call、input、output 摘要、approval、failure / recovery、人為介入點。",
            "只記成功不記失敗、只記結果不記輸入；事後追不回原因。",
          ],
          [
            "留多久",
            "依產業規定：法務 7 年、金融 10 年、健康照護依 HIPAA、其他依公司 retention policy。",
            "全部存永久（成本爆）或全部存 30 天（合規來查就出事）。",
          ],
          [
            "誰能看",
            "使用者本人、合規部門、必要時稽核。存取本身也要被 log。",
            "工程師可任意撈 audit log；GDPR、個資法問題立刻浮現。",
          ],
          [
            "不該被看到",
            "原始 credentials、原始個資；需要 redaction、tokenization、hash 處理。",
            "audit log 直接存 raw token / SSN / 信用卡，外洩就是合規事件。",
          ],
        ]}
      />
      <Talkbox compact>
        <p>Trace 是工程觀測資料；audit 是治理證據——欄位、保存規則、存取控制都不一樣。Production agent 兩個都要有，且要能對齊。</p>
      </Talkbox>
    </>
  );
}
