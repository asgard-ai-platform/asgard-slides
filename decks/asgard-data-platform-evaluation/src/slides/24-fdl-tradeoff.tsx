import { Kicker, Compare } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "FineDataLink：優勢與限制",
  section: "方案放進框架",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>路線一</Kicker>
      <h2>FineDataLink：優勢與限制</h2>
      <Compare
        pros={{
          head: "優勢",
          items: [
            "低代碼上手快，對沒有資料工程背景的團隊友善",
            "中文生態最完整，台灣有帆軟分公司",
            "CDC 即時同步成熟",
            "與帆軟全家桶（FineReport / FineBI）整合順",
          ],
        }}
        cons={{
          head: "限制",
          items: [
            "是工具不是平台：儲存、查詢、治理仍是空的",
            "轉換邏輯存在產品內（圖形化），換工具需重建",
            "授權費不公開，全家桶各自計價",
            "團隊學到的是 FDL 操作，非業界通用技能",
          ],
        }}
      />
    </>
  );
}
