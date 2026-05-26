import { Kicker, GlanceGrid, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "其他客戶案例（二）：零售 / 服務 / 娛樂",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · 零售與服務</Kicker>
      <h2>零售 / 服務 / 娛樂客戶案例</h2>
      <GlanceGrid
        items={[
          { label: "秀泰", value: "客服 AI", note: "百貨/影城：查品牌、查會員消費、查點數" },
          { label: "東台精機（4526）", value: "人資 ＋ 銷售客服", note: "雙 Agent 分別服務 HR 查詢與銷售支援" },
          { label: "PayEasy", value: "導購 AI", note: "福委會電商：精準推薦員工福利商品" },
          { label: "生活市集", value: "導購 AI", note: "電商平台語意化商品推薦" },
          { label: "遊戲橘子（6180）", value: "AI 關卡生成", note: "遊戲內容 Agent 自動產出關卡設計" },
          { label: "財經節目", value: "Multi-Agent 選題", note: "腳本架構／角色扮演／事實合規審查自動化" },
          { label: "Asgard 自家", value: "AI 自動發文", note: "IG / 社群營運自動化機器人" },
        ]}
      />
      <Talkbox compact>
        <p>
          連我們自己的社群，都是 AI 自動發文在經營。
          這不是炫耀客戶數，而是<strong>跨產業都能落地</strong>的實證。
        </p>
      </Talkbox>
    </>
  );
}
