import AdmZip from "adm-zip";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const OUT_DIR = path.resolve(__dirname, "../exports");
const date = new Date().toISOString().slice(0, 10);
const outPath = path.join(OUT_DIR, `${date}.zip`);

await mkdir(OUT_DIR, { recursive: true });

const zip = new AdmZip();
zip.addLocalFolder(DIST_DIR);
zip.writeZip(outPath);
console.log(`ZIP written: ${outPath}`);
