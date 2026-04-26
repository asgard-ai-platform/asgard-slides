import type { DeckCard } from "./deck-metadata";

const ESCAPE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ESCAPE[c]);
}

function renderCard(card: DeckCard): string {
  const meta = [
    card.durationMin ? `${card.durationMin} min` : null,
    esc(card.lang),
    `${card.slideCount} slides`,
  ]
    .filter(Boolean)
    .join(" · ");

  const chapters = card.chapterTitles.map(esc).join(" · ");

  return `      <a class="card" href="${esc(card.slug)}/">
        <h2 class="card-title">${esc(card.title)}</h2>
        ${card.subtitle ? `<p class="card-subtitle">${esc(card.subtitle)}</p>` : ""}
        <p class="card-meta">${meta}</p>
        ${chapters ? `<p class="card-chapters">Chapters: ${chapters}</p>` : ""}
        <span class="card-cta">Open deck →</span>
      </a>`;
}

const CSS = `
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 48px 24px 80px;
    background: #050812;
    color: #ffffff;
    font: 16px/1.5 -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", sans-serif;
  }
  .wrap { max-width: 720px; margin: 0 auto; }
  .header { margin-bottom: 32px; }
  .header h1 {
    margin: 0 0 6px;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 0.01em;
    color: #06b6d4;
  }
  .header p {
    margin: 0;
    color: #9ca3af;
    font-size: 14px;
  }
  .grid { display: grid; gap: 14px; }
  .card {
    display: block;
    padding: 20px 22px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 14px;
    background: #0a0f1e;
    color: inherit;
    text-decoration: none;
    transition: border-color 120ms ease, transform 120ms ease;
  }
  .card:hover { border-color: #06b6d4; transform: translateY(-2px); }
  .card-title { margin: 0 0 4px; font-size: 18px; font-weight: 800; color: #ffffff; }
  .card-subtitle { margin: 0 0 10px; color: rgba(255, 255, 255, 0.72); font-size: 14px; }
  .card-meta {
    margin: 0 0 10px;
    color: #9ca3af;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .card-chapters {
    margin: 0 0 14px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    line-height: 1.45;
  }
  .card-cta { color: #06b6d4; font-size: 13px; font-weight: 700; }
  .empty {
    padding: 40px 22px;
    border: 1px dashed rgba(255, 255, 255, 0.18);
    border-radius: 14px;
    color: #9ca3af;
    text-align: center;
  }
  .footer {
    margin-top: 40px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
  }
  .footer a { color: rgba(255, 255, 255, 0.6); text-decoration: none; }
  .footer a:hover { color: #06b6d4; }
`;

export function renderLandingHtml(cards: DeckCard[]): string {
  const body = cards.length
    ? `<div class="grid">\n${cards.map(renderCard).join("\n")}\n      </div>`
    : `<div class="empty">No decks yet — add one under <code>decks/</code> to get started.</div>`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>asgard-slides</title>
    <meta name="description" content="Open-source slide decks on the agent stack. MIT.">
    <style>${CSS}</style>
  </head>
  <body>
    <div class="wrap">
      <header class="header">
        <h1>asgard-slides</h1>
        <p>Open-source talks on the agent stack. MIT licensed.</p>
      </header>
      ${body}
      <footer class="footer">
        <a href="https://github.com/asgard-ai-platform/asgard-slides">GitHub</a> ·
        <a href="https://github.com/asgard-ai-platform/asgard-slides/blob/main/LICENSE">License</a>
      </footer>
    </div>
  </body>
</html>
`;
}
