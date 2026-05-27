// Audit descriptionAdvanced char counts across all poiExtra*.ts files.
// Usage: node --experimental-strip-types scripts/audit-descadv.mjs [THRESH]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "..", "lib", "visualLab", "data");
const THRESH = parseInt(process.argv[2] || "700", 10);
const LANGS = ["de", "hu", "ro", "en"];

const files = fs.readdirSync(DATA_DIR)
  .filter(f => f.startsWith("poiExtra") && f.endsWith(".ts"))
  .map(f => path.join(DATA_DIR, f));

let total = 0, withDA = 0, missing = 0, anyThin = 0, allThin = 0;
let pairThin = 0, pairTotal = 0;
const perLangThin = Object.fromEntries(LANGS.map(l => [l, 0]));
const thinPois = [];
let parseFail = 0;

for (const fp of files) {
  let mod;
  try {
    mod = await import(pathToFileURL(fp).href);
  } catch (e) {
    // Some files use `import { POI } from "./poi"` (value-import) instead of
    // `import type { POI }` — Node can't resolve the bare `./poi`. Workaround:
    // strip the import line, write to a tmp file, import that.
    try {
      const raw = fs.readFileSync(fp, "utf-8");
      const stripped = raw.replace(/^\s*import\s+(?:type\s+)?\{?[^}]*\}?\s+from\s+["']\.\/poi["'];?/m, "");
      const tmpPath = fp + ".audit.tmp.ts";
      fs.writeFileSync(tmpPath, stripped, "utf-8");
      try {
        mod = await import(pathToFileURL(tmpPath).href);
      } finally {
        fs.unlinkSync(tmpPath);
      }
    } catch (e2) {
      parseFail++;
      continue;
    }
  }
  // Find the exported POI array
  const arr = Object.values(mod).find(v => Array.isArray(v) && v.length > 0 && typeof v[0] === "object");
  if (!arr) continue;
  for (const poi of arr) {
    if (!poi || typeof poi !== "object") continue;
    total++;
    const da = poi.descriptionAdvanced;
    if (!da || typeof da !== "object") { missing++; continue; }
    const present = {};
    for (const l of LANGS) {
      const v = da[l];
      if (typeof v === "string" && v.length > 0) present[l] = v.length;
    }
    const keys = Object.keys(present);
    if (keys.length === 0) { missing++; continue; }
    withDA++;
    const vals = keys.map(k => present[k]);
    const anyT = vals.some(n => n < THRESH);
    const allT = vals.every(n => n < THRESH);
    if (anyT) anyThin++;
    if (allT) allThin++;
    if (anyT) {
      thinPois.push({ id: poi.id, file: path.basename(fp), lens: present });
    }
    for (const [l, n] of Object.entries(present)) {
      pairTotal++;
      if (n < THRESH) { pairThin++; perLangThin[l]++; }
    }
  }
}

console.log(`files: ${files.length}, parse fails: ${parseFail}`);
console.log(`\n=== descAdv audit, threshold = ${THRESH} chars ===`);
console.log(`Total POIs:                ${total.toLocaleString().padStart(7)}`);
console.log(`With descAdv (some lang):  ${withDA.toLocaleString().padStart(7)}`);
console.log(`Missing descAdv:           ${missing.toLocaleString().padStart(7)}`);
console.log();
console.log(`(A) ANY lang  <${THRESH}:    ${anyThin.toLocaleString().padStart(7)} POIs`);
console.log(`(B) ALL langs <${THRESH}:    ${allThin.toLocaleString().padStart(7)} POIs`);
console.log(`(C) (POI,lang)<${THRESH}:    ${pairThin.toLocaleString().padStart(7)} / ${pairTotal.toLocaleString()} pairs`);
console.log();
console.log("Per-lang thin counts:");
for (const l of LANGS) console.log(`  ${l}: ${perLangThin[l].toString().padStart(6)}`);

// Dump first 20 thinnest POIs
thinPois.sort((a, b) => Math.min(...Object.values(a.lens)) - Math.min(...Object.values(b.lens)));
console.log(`\n=== Top 20 thinnest POIs (by minimum lang length) ===`);
for (const p of thinPois.slice(0, 20)) {
  const langStr = LANGS.map(l => `${l}=${p.lens[l] ?? "-"}`).join(" ");
  console.log(`  ${p.id.padEnd(48)} ${langStr.padEnd(40)} (${p.file})`);
}

// Save full list to JSON for follow-up
const outPath = path.resolve(__dirname, "..", "public", "data", "_thin-descadv.json");
fs.writeFileSync(outPath, JSON.stringify(thinPois, null, 1));
console.log(`\nfull thin list: ${thinPois.length} POIs → ${outPath}`);
