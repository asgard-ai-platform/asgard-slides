/**
 * Optional landing-page metadata. The site-builder reads this via dynamic
 * import; if absent, sensible defaults are used (lang="zh-TW", no duration).
 *
 * This file is NOT imported by the deck app itself — it exists only so the
 * landing card can show language and duration alongside the title.
 */
export const siteMeta = {
  lang: "zh-TW",
  durationMin: 60,
} as const;
