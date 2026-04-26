import { useEffect, useMemo, useRef } from "react";
import { useDeck } from "../hooks/useDeck";
import type { Chapter, SlideEntry } from "../types";
import styles from "./OverviewMode.module.css";

interface OverviewModeProps {
  onClose: () => void;
}

interface ChapterGroup {
  chapter: Chapter | null; // null = "no chapter" (e.g. before the first chapter starts)
  slides: { slide: SlideEntry; index: number }[];
}

/** Group slides under their chapter using `chapter.startSlide` as a 1-indexed boundary. */
function groupSlidesByChapter(slides: SlideEntry[], chapters: Chapter[]): ChapterGroup[] {
  if (chapters.length === 0) {
    return [{ chapter: null, slides: slides.map((slide, index) => ({ slide, index })) }];
  }
  const sorted = [...chapters].sort((a, b) => a.startSlide - b.startSlide);
  const groups: ChapterGroup[] = [];
  let cursor = 0;
  // Slides BEFORE the first chapter (rare, but possible).
  if (sorted[0].startSlide > 1) {
    groups.push({
      chapter: null,
      slides: slides.slice(0, sorted[0].startSlide - 1).map((slide, i) => ({ slide, index: i })),
    });
    cursor = sorted[0].startSlide - 1;
  }
  for (let ci = 0; ci < sorted.length; ci++) {
    const start = sorted[ci].startSlide - 1;
    const end = ci + 1 < sorted.length ? sorted[ci + 1].startSlide - 1 : slides.length;
    groups.push({
      chapter: sorted[ci],
      slides: slides.slice(start, end).map((slide, j) => ({ slide, index: start + j })),
    });
    cursor = end;
  }
  // Trailing slides after the last chapter (shouldn't happen with proper chapter list).
  if (cursor < slides.length) {
    groups.push({
      chapter: null,
      slides: slides.slice(cursor).map((slide, j) => ({ slide, index: cursor + j })),
    });
  }
  return groups;
}

export function OverviewMode({ onClose }: OverviewModeProps) {
  const { slides, chapters, index, goTo } = useDeck();
  const groups = useMemo(() => groupSlidesByChapter(slides, chapters), [slides, chapters]);

  // Scroll to the active slide / chapter when overview opens.
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className={styles.overlay} role="dialog" aria-label="Slide overview">
      <div className={styles.header}>
        <div className={styles.title}>Overview · {slides.length} slides · {chapters.length} chapters</div>
        <div className={styles.hint}>Click a slide · Esc to close</div>
        <button className={styles.closeBtn} onClick={onClose} aria-label="close overview">Close · Esc</button>
      </div>

      {groups.map((g, gi) => {
        const isActiveChapter = g.slides.some((s) => s.index === index);
        return (
          <section key={gi} className={`${styles.chapter} ${isActiveChapter ? styles.chapterActive : ""}`}>
            {g.chapter && (
              <header className={styles.chapterHeader}>
                <span className={styles.chapterNum}>
                  Ch · {String(g.chapter.startSlide).padStart(2, "0")}
                </span>
                <span className={styles.chapterTitle}>{g.chapter.title}</span>
                {g.chapter.subtitle && <span className={styles.chapterSubtitle}>{g.chapter.subtitle}</span>}
                <span className={styles.chapterCount}>{g.slides.length} 張</span>
              </header>
            )}
            <div className={styles.grid}>
              {g.slides.map(({ slide, index: i }) => (
                <ThumbnailItem
                  key={slide.id}
                  slide={slide}
                  slideIndex={i}
                  isActive={i === index}
                  buttonRef={i === index ? activeThumbRef : null}
                  onClick={() => { goTo(i); onClose(); }}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

interface ThumbnailItemProps {
  slide: SlideEntry;
  slideIndex: number;
  isActive: boolean;
  buttonRef: React.MutableRefObject<HTMLButtonElement | null> | null;
  onClick: () => void;
}

/**
 * Lightweight overview card — title + section + slide number, theme-tinted.
 * Deliberately does NOT render the actual slide content: at 100+ slides on
 * mobile Safari, fast-scroll crashes the tab. The overview is for navigation
 * (find the slide and jump), not visual preview.
 */
function ThumbnailItem({ slide, slideIndex, isActive, buttonRef, onClick }: ThumbnailItemProps) {
  const theme = slide.meta.theme ?? "dark";
  return (
    <button
      ref={buttonRef}
      className={`${styles.thumb} ${isActive ? styles.active : ""}`}
      data-variant={theme}
      onClick={onClick}
    >
      <div className={styles.thumbAccent} />
      <div className={styles.thumbBody}>
        <div className={styles.thumbNo}>{String(slideIndex + 1).padStart(2, "0")}</div>
        {slide.meta.section && (
          <div className={styles.thumbSection}>{slide.meta.section}</div>
        )}
        <div className={styles.thumbTitle}>{slide.meta.title}</div>
      </div>
    </button>
  );
}
