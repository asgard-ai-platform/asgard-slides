import { Kicker, Matrix, Talkbox, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP 裝在哪裡？local / project / user / remote 差別在治理邊界",
  section: "Local vs Remote MCP",
  theme: "light",
};

export const notes = `
### 23. MCP 裝在哪裡？local / project / user / remote 差別在治理邊界
- 區段：Local vs Remote MCP
- 表格重點：Local / stdio / 使用者機器或專案資料夾，由 client 啟動 / 本機檔案、內網工具、開發者工具、private script / 每台機器要安裝；server 以使用者權限執行；Project scope / 專案根目錄 \`.mcp.json\` / 團隊共用工具、repo 專屬資料源、可版本控管設定 / 需要信任專案設定；敏感 env 不應寫進 repo；User scope / 個人設定檔，跨專案可用 / 個人常用工具、跨專案 utility、私有憑證 / 不同專案間容易混用，需定期盤點；Remote / HTTP / 網路上的 server 或 SaaS connector / 多使用者、OAuth、集中觀測、企業 API 與雲端服務 / 網路、身份、信任來源與權限設計更重要
- 補充講法：裝在哪裡不是技術細節，而是責任邊界。Local 比較像個人工具；project scope 像團隊約定；remote connector 則開始進入身份、OAuth、audit 與服務治理。
`;

export default function Slide() {
  return (
    <>
      <Kicker>Local vs Remote MCP</Kicker>
      <h2>MCP 裝在哪裡？local / project / user / remote 差別在治理邊界</h2>
      <Matrix
        headers={["型態", "裝在哪裡", "適合場景", "主要風險"]}
        rows={[
          [
            "Local / stdio",
            "使用者機器或專案資料夾，由 client 啟動",
            "本機檔案、內網工具、開發者工具、private script",
            "每台機器要安裝；server 以使用者權限執行",
          ],
          [
            "Project scope",
            <>專案根目錄 <code key="p1">.mcp.json</code></>,
            "團隊共用工具、repo 專屬資料源、可版本控管設定",
            "需要信任專案設定；敏感 env 不應寫進 repo",
          ],
          [
            "User scope",
            "個人設定檔，跨專案可用",
            "個人常用工具、跨專案 utility、私有憑證",
            "不同專案間容易混用，需定期盤點",
          ],
          [
            "Remote / HTTP",
            "網路上的 server 或 SaaS connector",
            "多使用者、OAuth、集中觀測、企業 API 與雲端服務",
            "網路、身份、信任來源與權限設計更重要",
          ],
        ]}
      />
      <Talkbox compact>
        <p>裝在哪裡不是技術細節，而是責任邊界。Local 比較像個人工具；project scope 像團隊約定；remote connector 則開始進入身份、OAuth、audit 與服務治理。</p>
      </Talkbox>
    </>
  );
}
