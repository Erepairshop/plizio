// Merge phase-C Wikidata results (_city_pop_wikidata.json) into the main
// _city-population.json (src:"wikidata", carries year where available) and
// rewrite _city_pop_missing.json with whatever still has no population.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public/data/_city-population.json");
const MISSING = path.join(ROOT, "public/data/_city_pop_missing.json");
const WD = path.join(ROOT, "public/data/_city_pop_wikidata.json");

function tierOf(pop) {
  if (pop >= 1_000_000) return 1;
  if (pop >= 250_000) return 2;
  if (pop >= 100_000) return 3;
  if (pop >= 30_000) return 4;
  return 5;
}

const out = JSON.parse(fs.readFileSync(OUT, "utf8"));
const missing = JSON.parse(fs.readFileSync(MISSING, "utf8"));
const wd = JSON.parse(fs.readFileSync(WD, "utf8"));

let filled = 0;
const stillMissing = [];
for (const p of missing) {
  const w = wd[p.id];
  if (w && w.pop > 0) {
    out[p.id] = { pop: w.pop, src: "wikidata", qid: w.qid, dist: w.dist, year: w.year ?? null, tier: tierOf(w.pop) };
    filled++;
  } else {
    stillMissing.push(p);
  }
}

fs.writeFileSync(OUT, JSON.stringify(out));
fs.writeFileSync(MISSING, JSON.stringify(stillMissing));
console.log(`phase C merge: filled ${filled}, still missing ${stillMissing.length}, total entries ${Object.keys(out).length}`);
const c = {};
for (const p of stillMissing) c[p.iso2] = (c[p.iso2] || 0) + 1;
console.log("still-missing by country:", Object.entries(c).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(" "));
