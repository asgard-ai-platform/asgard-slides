import { describe, it, expect } from "vitest";
import { injectMetaTags } from "./inject-meta";

const SAMPLE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Old Title</title>
  </head>
  <body><div id="root"></div></body>
</html>`;

const META = {
  title: "Sandboxed Agent 實戰",
  description: "為什麼從 Chat 走到 Agent",
  ogImage: "/asgard-slides/og/asgard-ai-agent-workshop.png",
  canonicalUrl:
    "https://asgard-ai-platform.github.io/asgard-slides/asgard-ai-agent-workshop/",
  lang: "zh-TW",
};

describe("injectMetaTags", () => {
  it("replaces the existing <title>", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(/<title>Sandboxed Agent 實戰<\/title>/);
    expect(out).not.toMatch(/<title>Old Title<\/title>/);
  });

  it("adds OpenGraph + Twitter meta tags", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(/property="og:title"\s+content="Sandboxed Agent 實戰"/);
    expect(out).toMatch(
      /property="og:description"\s+content="為什麼從 Chat 走到 Agent"/,
    );
    expect(out).toMatch(/property="og:image"\s+content="\/asgard-slides\/og\//);
    expect(out).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
  });

  it("adds <link rel=\"canonical\">", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(
      /<link rel="canonical" href="https:\/\/asgard-ai-platform\.github\.io\/asgard-slides\/asgard-ai-agent-workshop\/">/,
    );
  });

  it("sets the html lang attribute", () => {
    const out = injectMetaTags(SAMPLE_HTML, META);
    expect(out).toMatch(/<html\s+lang="zh-TW"/);
    expect(out).not.toMatch(/<html\s+lang="en"/);
  });

  it("escapes HTML-special chars in title and description", () => {
    const out = injectMetaTags(SAMPLE_HTML, {
      ...META,
      title: 'A & B <c> "d"',
      description: "x > y",
    });
    expect(out).toContain("<title>A &amp; B &lt;c&gt; &quot;d&quot;</title>");
    expect(out).toContain('content="x &gt; y"');
  });
});
