// Cross-file dedup: poiExtraHu1.ts entries that duplicate (parent+name.hu) hungaryPoi.ts entries
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const MAIN = path.join(REPO, "lib/visualLab/data/hungaryPoi.ts");
const EXTRA = path.join(REPO, "lib/visualLab/data/poiExtraHu1.ts");

function parseEntries(src) {
  // Parse top-level objects in any POI[] array
  const out = [];
  let depth = 0, start = -1, inStr = false, q = null;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === q) inStr = false;
      continue;
    }
    if (c === '"' || c === "'") { inStr = true; q = c; continue; }
    if (c === "{") { if (depth === 0) start = i; depth++; }
    else if (c === "}") {
      depth--;
      if (depth === 0 && start >= 0) {
        const txt = src.slice(start, i + 1);
        const idM = /id:\s*"([^"]+)"/.exec(txt);
        const parentM = /parent:\s*"([^"]+)"/.exec(txt);
        const huM = /name:\s*\{[^}]*"hu":\s*"([^"]+)"/.exec(txt) || /name:\s*\{[^}]*hu:\s*"([^"]+)"/.exec(txt);
        if (idM && parentM && huM) {
          out.push({ start, end: i + 1, id: idM[1], parent: parentM[1], hu: huM[1].toLowerCase().trim() });
        }
        start = -1;
      }
    }
  }
  return out;
}

const mainSrc = fs.readFileSync(MAIN, "utf8");
const extraSrc = fs.readFileSync(EXTRA, "utf8");
const mainEntries = parseEntries(mainSrc);
const extraEntries = parseEntries(extraSrc);

const mainKeys = new Set(mainEntries.map(e => `${e.parent}||${e.hu}`));
const dupeIds = extraEntries.filter(e => mainKeys.has(`${e.parent}||${e.hu}`));
console.log(`Main: ${mainEntries.length}, Extra: ${extraEntries.length}, Dupes in extra: ${dupeIds.length}`);

if (dupeIds.length === 0) process.exit(0);

// Remove dupes from extra (in reverse order)
let newExtra = extraSrc;
const sorted = [...dupeIds].sort((a, b) => b.start - a.start);
for (const e of sorted) {
  let s = e.start, n = e.end;
  while (s > 0 && /[\s\n,]/.test(newExtra[s - 1])) s--;
  while (n < newExtra.length && /[\s\n]/.test(newExtra[n])) n++;
  if (newExtra[n] === ",") n++;
  newExtra = newExtra.slice(0, s) + (s > 0 && n < newExtra.length ? "\n  " : "") + newExtra.slice(n);
}
// Re-add commas between objects if needed
newExtra = newExtra.replace(/}\s*\n(\s*)\{/g, '},\n$1{');
fs.writeFileSync(EXTRA, newExtra);
console.log(`Removed ${dupeIds.length} dupes from poiExtraHu1.ts`);
sorted.forEach(d => console.log(`  - ${d.id} "${d.hu}" parent=${d.parent}`));
