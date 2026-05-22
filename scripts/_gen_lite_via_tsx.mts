/**
 * Generate <file>.lite.ts companions for resolver-imported POI files.
 * Uses tsx runtime to resolve spread-union exports correctly.
 */
import * as fs from "node:fs";
import * as path from "node:path";

const DATA = path.resolve("lib/visualLab/data");
const RESOLVER = path.resolve("lib/visualLab/maps/resolver.ts");

const KEEP_FIELDS = new Set([
  "id", "type", "parent", "coords", "name",
  "image", "coa", "population", "tier",
  "historyPeriod", "historyYear", "subjects", "grades",
]);

function liteCopy(poi: any) {
  const out: any = {};
  for (const k of Object.keys(poi)) {
    if (KEEP_FIELDS.has(k)) out[k] = poi[k];
  }
  return out;
}

const text = fs.readFileSync(RESOLVER, "utf-8");
const importRegex = /import\s+\{\s*([^}]+?)\s*\}\s+from\s+"\.\.\/data\/([\w/]+)"/g;
const tasks: Array<{ symbol: string; modulePath: string }> = [];
let m: RegExpExecArray | null;
while ((m = importRegex.exec(text))) {
  const syms = m[1].split(",").map((s) => s.trim()).filter(Boolean);
  for (const s of syms) tasks.push({ symbol: s, modulePath: m[2] });
}
console.log(`Found ${tasks.length} POI imports`);

let okCount = 0; let skipCount = 0; let totalOrig = 0; let totalLite = 0;
for (const t of tasks) {
  const src = path.join(DATA, t.modulePath + ".ts");
  if (!fs.existsSync(src)) { console.log(`  SKIP ${t.symbol}: source ${src} not found`); skipCount++; continue; }
  try {
    const mod: any = await import(`../lib/visualLab/data/${t.modulePath}.ts`);
    const arr = mod[t.symbol];
    if (!Array.isArray(arr)) { console.log(`  SKIP ${t.symbol}: not an array`); skipCount++; continue; }
    const lite = arr.map(liteCopy);
    const liteBody = lite.map((p) => JSON.stringify(p)).join(",\n");
    const liteOut = `// @ts-nocheck
// AUTO-GENERATED LITE — only map-essential POI fields. Heavy fields stripped.
// Source: ${t.modulePath}.ts (regenerate via scripts/_gen_lite_via_tsx.mts)
import type { POI } from "./poi";
export const ${t.symbol}: POI[] = [
${liteBody}
];
`;
    const outFp = src.replace(/\.ts$/, ".lite.ts");
    fs.writeFileSync(outFp, liteOut, "utf-8");
    const origSize = fs.statSync(src).size;
    const liteSize = fs.statSync(outFp).size;
    totalOrig += origSize; totalLite += liteSize;
    okCount++;
    console.log(`  ${t.symbol.padEnd(32)} ${origSize.toLocaleString().padStart(10)} → ${liteSize.toLocaleString().padStart(10)} (${arr.length} POIs)`);
  } catch (e: any) {
    console.log(`  ERR ${t.symbol}: ${e.message?.slice(0, 80)}`);
    skipCount++;
  }
}

console.log();
console.log(`OK: ${okCount}  SKIP: ${skipCount}`);
console.log(`TOTAL: ${totalOrig.toLocaleString()} → ${totalLite.toLocaleString()}  (${((1 - totalLite/totalOrig)*100).toFixed(1)}% reduction)`);
