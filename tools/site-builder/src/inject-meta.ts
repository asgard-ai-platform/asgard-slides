export interface MetaInput {
  title: string;
  description: string;
  ogImage: string;
  canonicalUrl: string;
  lang: string;
}

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ESCAPE_MAP[c]);
}

/**
 * Rewrite the <head> of an HTML string with title + OpenGraph + Twitter Card
 * + canonical link, and update the <html> lang attribute. The input HTML
 * comes from a Playwright snapshot — we don't own its exact whitespace, so
 * everything works with regex anchors rather than a full HTML parser.
 */
export function injectMetaTags(html: string, meta: MetaInput): string {
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const url = escapeHtml(meta.canonicalUrl);
  const img = escapeHtml(meta.ogImage);

  // Replace existing <title>, or insert one if missing.
  let out = html.match(/<title>[^<]*<\/title>/i)
    ? html.replace(/<title>[^<]*<\/title>/i, `<title>${t}</title>`)
    : html.replace(/<\/head>/i, `  <title>${t}</title>\n</head>`);

  const tags = [
    `<meta name="description" content="${d}">`,
    `<meta property="og:type" content="article">`,
    `<meta property="og:title" content="${t}">`,
    `<meta property="og:description" content="${d}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${t}">`,
    `<meta name="twitter:description" content="${d}">`,
    `<meta name="twitter:image" content="${img}">`,
    `<link rel="canonical" href="${url}">`,
  ].join("\n    ");

  out = out.replace(/<\/head>/i, `    ${tags}\n  </head>`);

  // Update <html lang="...">. If the attribute is missing, add it.
  out = out.match(/<html\s+[^>]*lang="[^"]*"/i)
    ? out.replace(/(<html\s+[^>]*)lang="[^"]*"/i, `$1lang="${meta.lang}"`)
    : out.replace(/<html(\s|>)/i, `<html lang="${meta.lang}"$1`);

  return out;
}
