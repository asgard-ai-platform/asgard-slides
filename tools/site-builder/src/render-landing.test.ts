import { describe, it, expect } from "vitest";
import { renderLandingHtml } from "./render-landing";
import type { DeckCard } from "./deck-metadata";

const CARD: DeckCard = {
  slug: "asgard-ai-agent-workshop",
  title: "Sandboxed Agent 實戰",
  subtitle: "為什麼從 Chat 走到 Agent",
  slideCount: 101,
  chapterTitles: ["開場", "基礎", "Tools/MCP/A2A"],
  lang: "zh-TW",
  durationMin: 60,
};

describe("renderLandingHtml", () => {
  it("renders a complete HTML doc", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toMatch(/<!doctype html>/i);
    expect(html).toMatch(/<title>asgard-slides<\/title>/);
    expect(html).toMatch(/<\/html>/);
  });

  it("includes one card per deck with title, subtitle, count, lang, duration", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toContain("Sandboxed Agent 實戰");
    expect(html).toContain("為什麼從 Chat 走到 Agent");
    expect(html).toContain("101 slides");
    expect(html).toContain("60 min");
    expect(html).toContain("zh-TW");
  });

  it("renders the chapter list comma-separated", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toContain("開場 · 基礎 · Tools/MCP/A2A");
  });

  it("links each card to /<slug>/", () => {
    const html = renderLandingHtml([CARD]);
    expect(html).toMatch(/href="asgard-ai-agent-workshop\/"/);
  });

  it("hides the duration row when durationMin is undefined", () => {
    const html = renderLandingHtml([{ ...CARD, durationMin: undefined }]);
    expect(html).not.toContain("60 min");
    expect(html).not.toContain("undefined min");
  });

  it("escapes HTML in card content", () => {
    const html = renderLandingHtml([{ ...CARD, title: "A & <b>" }]);
    expect(html).toContain("A &amp; &lt;b&gt;");
    expect(html).not.toContain("A & <b>");
  });

  it("renders an empty-state when no decks are present", () => {
    const html = renderLandingHtml([]);
    expect(html).toContain("No decks yet");
  });
});
