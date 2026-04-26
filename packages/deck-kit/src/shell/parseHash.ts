/**
 * Convert a window.location.hash string into a slide index.
 * Hash uses 1-based slide numbers; index is 0-based.
 * Returns 0 (first slide) for any invalid input.
 */
export function parseHash(hash: string, total: number): number {
  if (total <= 0) return 0;
  const n = parseInt(hash.replace(/^#/, ""), 10);
  if (!Number.isInteger(n) || n < 1) return 0;
  if (n > total) return total - 1;
  return n - 1;
}
