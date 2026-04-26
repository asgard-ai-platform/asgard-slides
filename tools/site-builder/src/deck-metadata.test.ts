import { describe, it, expect } from "vitest";
import { parseChaptersSource, deriveDeckCard, type RawDeck } from "./deck-metadata";

describe("parseChaptersSource", () => {
  it("extracts startSlide/title/subtitle from a Chapter[] export", () => {
    const src = `
      import type { Chapter } from "deck-kit";
      export const chapters: Chapter[] = [
        { startSlide: 1, title: "開場", subtitle: "為什麼從 Chat 走到 Agent" },
        { startSlide: 6, title: "基礎", subtitle: "六層架構" },
      ];
    `;
    const out = parseChaptersSource(src);
    expect(out).toEqual([
      { startSlide: 1, title: "開場", subtitle: "為什麼從 Chat 走到 Agent" },
      { startSlide: 6, title: "基礎", subtitle: "六層架構" },
    ]);
  });

  it("returns [] when no chapters export is present", () => {
    expect(parseChaptersSource("export const foo = 1;")).toEqual([]);
  });
});

describe("deriveDeckCard", () => {
  const raw: RawDeck = {
    slug: "asgard-ai-agent-workshop",
    pkgDescription: "Sandboxed Agent 實戰 — 60-min deck.",
    chapters: [
      { startSlide: 1, title: "開場", subtitle: "為什麼從 Chat 走到 Agent" },
      { startSlide: 6, title: "基礎", subtitle: "六層架構" },
    ],
    slideCount: 101,
    siteMeta: { lang: "zh-TW", durationMin: 60 },
  };

  it("composes a card from raw deck data", () => {
    const card = deriveDeckCard(raw);
    expect(card).toEqual({
      slug: "asgard-ai-agent-workshop",
      title: "Sandboxed Agent 實戰 — 60-min deck.",
      subtitle: "為什麼從 Chat 走到 Agent",
      slideCount: 101,
      chapterTitles: ["開場", "基礎"],
      lang: "zh-TW",
      durationMin: 60,
    });
  });

  it("falls back to defaults when siteMeta is undefined", () => {
    const card = deriveDeckCard({ ...raw, siteMeta: undefined });
    expect(card.lang).toBe("zh-TW");
    expect(card.durationMin).toBeUndefined();
  });

  it("uses an empty subtitle when chapters is empty", () => {
    const card = deriveDeckCard({ ...raw, chapters: [] });
    expect(card.subtitle).toBe("");
    expect(card.chapterTitles).toEqual([]);
  });
});
