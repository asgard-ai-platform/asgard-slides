import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "實務判斷：不是選陣營，而是選工具要被誰管理",
  section: "MCP vs CLI",
  theme: "light",
};

export const notes = `
### 26. 實務判斷：不是選陣營，而是選工具要被誰管理
- 區段：MCP vs CLI
- 表格重點：個人探索 / 一次性研究、跑測試、grep log、整理本機檔案，先求快與透明。 / 暫時不必急著包；除非這個工具很快會被多個 agent 或多人共用。；團隊重複使用 / 可以先保留 CLI，但要包 wrapper、固定輸入輸出、避免 token 出現在 command 文字裡。 / 流程變成團隊資產後，就適合把 schema、description、error handling 與 permission 一起包起來。；企業系統整合 / CLI 可以做內部 automation，但治理成本會落在 shell、env、runner、log 與權限規範。 / 遠端服務、OAuth、集中 audit、tool filtering、跨 client 使用，通常更適合 MCP / connector。；Harness 角度 / CLI 是便宜好用的 executor，適合 sandbox 裡的本機動作。 / MCP 是可發現、可描述、可治理的 tool interface，適合被 harness 長期調度。
- 補充講法：CLI 解決「我現在怎麼把事情跑起來」；MCP 解決「這個能力如何被多個 agent、多人、企業權限與 audit 長期使用」。成熟系統通常兩個都會有。
`;

export default function Slide() {
  return (
    <>
      <Kicker>MCP vs CLI</Kicker>
      <h2>實務判斷：不是選陣營，而是選工具要被誰管理</h2>
      <Matrix
        compact
        headers={["場景", "比較適合 CLI", "比較適合 MCP"]}
        rows={[
          [
            "個人探索",
            "一次性研究、跑測試、grep log、整理本機檔案，先求快與透明。",
            "暫時不必急著包；除非這個工具很快會被多個 agent 或多人共用。",
          ],
          [
            "團隊重複使用",
            "可以先保留 CLI，但要包 wrapper、固定輸入輸出、避免 token 出現在 command 文字裡。",
            "流程變成團隊資產後，就適合把 schema、description、error handling 與 permission 一起包起來。",
          ],
          [
            "企業系統整合",
            "CLI 可以做內部 automation，但治理成本會落在 shell、env、runner、log 與權限規範。",
            "遠端服務、OAuth、集中 audit、tool filtering、跨 client 使用，通常更適合 MCP / connector。",
          ],
          [
            "Harness 角度",
            "CLI 是便宜好用的 executor，適合 sandbox 裡的本機動作。",
            "MCP 是可發現、可描述、可治理的 tool interface，適合被 harness 長期調度。",
          ],
        ]}
      />
      <Talkbox compact>
        <p>CLI 解決「我現在怎麼把事情跑起來」；MCP 解決「這個能力如何被多個 agent、多人、企業權限與 audit 長期使用」。成熟系統通常兩個都會有。</p>
      </Talkbox>
    </>
  );
}
