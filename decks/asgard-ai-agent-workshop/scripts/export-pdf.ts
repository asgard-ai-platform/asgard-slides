import { chromium } from "playwright";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../exports");
const date = new Date().toISOString().slice(0, 10);
const outPath = path.join(OUT_DIR, `${date}.pdf`);

await mkdir(OUT_DIR, { recursive: true });

const url = process.env.DECK_URL ?? "http://localhost:4173";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outPath,
  width: "1280px",
  height: "720px",
  printBackground: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
});
await browser.close();

console.log(`PDF written: ${outPath}`);
