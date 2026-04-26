import { useEffect, useRef, useState } from "react";
import { SlideShell } from "../primitives/SlideShell";
import { useDeck } from "../hooks/useDeck";
import { useKeyboardNav } from "../hooks/useKeyboardNav";
import { OverviewMode } from "./OverviewMode";
import { SwipeHint } from "./SwipeHint";
import styles from "./Deck.module.css";

const SWIPE_THRESHOLD_PX = 60;
const SWIPE_MAX_DURATION_MS = 800;
const SWIPE_TRANSITION_MS = 280;

export function Deck() {
  const { slides, index, total, next, prev, goTo } = useDeck();
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [gotoBuffer, setGotoBuffer] = useState("");
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);

  useKeyboardNav({
    onToggleOverview: () => setOverviewOpen((v) => !v),
    onGotoBufferChange: setGotoBuffer,
    overviewOpen,
    onCloseOverview: () => setOverviewOpen(false),
  });

  // Touch / drag — inline (we need state, not just callbacks).
  const startX = useRef(0);
  const startY = useRef(0);
  const startTime = useRef(0);
  const tracking = useRef(false);
  // Direction stays "undecided" until the gesture passes the dead zone.
  // Until then we don't touch any drag state — that way a vertical scroll
  // never causes a horizontal snap-back animation.
  const direction = useRef<"undecided" | "horizontal" | "vertical">("undecided");

  useEffect(() => {
    if (overviewOpen) return; // overview owns scroll

    function onTouchStart(e: TouchEvent) {
      if (e.touches.length !== 1) {
        tracking.current = false;
        return;
      }
      const t = e.touches[0];
      startX.current = t.clientX;
      startY.current = t.clientY;
      startTime.current = Date.now();
      tracking.current = true;
      direction.current = "undecided";
    }

    function onTouchMove(e: TouchEvent) {
      if (!tracking.current) return;
      const t = e.touches[0];
      const dx = t.clientX - startX.current;
      const dy = t.clientY - startY.current;

      // Decide direction once we have enough movement (8px dead zone).
      // Until decided, don't touch drag state at all — vertical scrollers
      // never trigger a snap-back.
      if (direction.current === "undecided") {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        if (Math.abs(dy) > Math.abs(dx)) {
          direction.current = "vertical";
          tracking.current = false;
          return;
        }
        direction.current = "horizontal";
        // Now we are committed to a horizontal swipe; turn off transition
        // so drag follows the finger 1:1.
        setDragging(true);
      }

      if (direction.current === "horizontal") {
        setDrag(dx);
      }
    }

    function onTouchEnd(e: TouchEvent) {
      const wasHorizontal = direction.current === "horizontal";
      tracking.current = false;
      direction.current = "undecided";
      if (!wasHorizontal) {
        // Vertical scroll or never-decided gesture — nothing to clean up.
        return;
      }
      const t = e.changedTouches[0];
      const dx = t.clientX - startX.current;
      const dt = Date.now() - startTime.current;
      const w = window.innerWidth;
      const past = Math.abs(dx) > SWIPE_THRESHOLD_PX && dt < SWIPE_MAX_DURATION_MS;

      // Re-enable transition for the snap.
      setDragging(false);

      if (past) {
        const goingNext = dx < 0;
        const canGo = goingNext ? index < total - 1 : index > 0;
        if (canGo) {
          // Animate the track to the neighbor's position, then commit
          // the index update + reset drag (which lands at the same
          // visual position — no jump).
          setDrag(goingNext ? -w : w);
          window.setTimeout(() => {
            if (goingNext) next();
            else prev();
            setDrag(0);
          }, SWIPE_TRANSITION_MS);
          return;
        }
      }
      // Snap back to current.
      setDrag(0);
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [overviewOpen, index, total, next, prev]);

  const trackTransform = `translateX(calc(${-index * 100}vw + ${drag}px))`;

  return (
    <div className={styles.deck}>
      <div
        className={styles.progress}
        style={{ width: total === 0 ? "0%" : `${((index + 1) / total) * 100}%` }}
      />
      <div
        className={`${styles.track} ${dragging ? styles.dragging : ""}`}
        style={{ transform: trackTransform }}
      >
        {slides.map((s, i) => (
          <div className={styles.slot} key={s.id}>
            <SlideShell
              variant={s.meta.theme ?? "dark"}
              active={i === index}
              slideNumber={i + 1}
              total={total}
            >
              <s.Component />
            </SlideShell>
          </div>
        ))}
      </div>
      <SwipeHint />
      <div className={styles.nav}>
        <button onClick={prev} aria-label="previous">‹</button>
        <GotoSelector
          slides={slides}
          index={index}
          total={total}
          buffer={gotoBuffer}
          onSelect={(i) => goTo(i)}
        />
        <button onClick={next} aria-label="next">›</button>
        <button
          className={styles.overviewBtn}
          onClick={() => setOverviewOpen(true)}
          aria-label="overview"
          title="Overview (o)"
        >
          ⊞
        </button>
      </div>
      {overviewOpen && <OverviewMode onClose={() => setOverviewOpen(false)} />}
    </div>
  );
}

interface GotoSelectorProps {
  slides: Array<{ id: string; meta: { title: string } }>;
  index: number;
  total: number;
  buffer: string;
  onSelect: (i: number) => void;
}

function GotoSelector({ slides, index, total, buffer, onSelect }: GotoSelectorProps) {
  if (buffer) {
    return <span className={styles.gotoBuffer}>→ {buffer}</span>;
  }

  return (
    <select
      className={styles.gotoSelect}
      value={index}
      onChange={(e) => onSelect(parseInt(e.target.value, 10))}
      aria-label="go to slide"
      title="Jump to slide"
    >
      {slides.map((s, i) => (
        <option key={s.id} value={i}>
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} — {s.meta.title}
        </option>
      ))}
    </select>
  );
}
