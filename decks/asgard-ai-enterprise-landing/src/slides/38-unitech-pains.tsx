import { Kicker, DashList, Talkbox } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Unitech 的三大結構性痛點",
  section: "真實客戶",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>真實客戶 · 痛點診斷</Kicker>
      <h2>Unitech 的三大結構性痛點</h2>
      <p>設備維修型服務的痛，跟你公司大概八成像。</p>
      <DashList
        items={[
          <>
            <strong>新進員工培訓</strong>——平均 &gt;6 個月才能獨立作業。
            老師傅的知識在腦袋裡，無法標準化、難以快速複製經驗。
          </>,
          <>
            <strong>作業流程</strong>——大量依賴人工填寫、轉單、判讀。
            每一個環節靠人接，斷點多，效率低且易錯。
          </>,
          <>
            <strong>資料查詢結構</strong>——數據分散多系統，主管要看狀況得仰賴 IT 協助，
            回應慢，決策永遠落後現況。
          </>,
        ]}
      />
      <Talkbox compact>
        <p>
          注意——沒有一個是「缺一個聊天機器人」。
          它們是<strong>結構問題</strong>，需要的是重新設計資訊流動的方式。
        </p>
      </Talkbox>
    </>
  );
}
