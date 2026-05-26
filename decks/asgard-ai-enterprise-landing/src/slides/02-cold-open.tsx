import { Kicker, Quote } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Cold Open：星期一早會",
  section: "Cold Open",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>Cold Open</Kicker>
      <h2>一個星期一早上的場景</h2>
      <Quote>
        <p>
          星期一早上九點。老闆打開經營總覽，<strong>營收往下掉</strong>。
        </p>
        <p>他的第一個反應是：「是不是行銷不夠力？」</p>
      </Quote>
      <p>
        先把這個畫面停在這裡。這個直覺很自然——但<strong>真正的問題根本不在行銷</strong>。
        如果照這個直覺去加碼廣告，反而會讓事情更糟。
      </p>
      <p>
        這個故事，等一下會完整演給你看。先記住老闆的這個直覺。
        中間這 50 分鐘，我想講清楚：為什麼大部分企業看到問題的方式，
        跟 AI 應該幫你看問題的方式，差這麼多。
      </p>
    </>
  );
}
