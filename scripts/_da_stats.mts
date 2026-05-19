#!/usr/bin/env tsx
type Lang = "de"|"hu"|"ro"|"en";
const [
  { pois: dePois },
  { romaniaAllPois },
  { hungaryAllPoi },
  { vaticanPois },
  { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS },
] = await Promise.all([
  import("../lib/visualLab/data/poi"),
  import("../lib/visualLab/data/romaniaPoi"),
  import("../lib/visualLab/data/hungaryPoi"),
  import("../lib/visualLab/data/vaticanPoi"),
  import("../lib/visualLab/data/allCountryPois"),
]);
const all = ([] as any[]).concat(dePois as any[], ALL_DE_EXTRA_POIS as any[], romaniaAllPois as any[], hungaryAllPoi as any[], vaticanPois as any[], ALL_COUNTRY_POIS as any[]);
console.log(`[raw] ${all.length} POIs across all sources (before dedup)`);
// Dedup keeping the RICHEST (most descAdv chars across 4 langs)
function richness(p: any): number {
  let n = 0;
  for (const l of ["de","hu","ro","en"]) {
    n += (p?.descriptionAdvanced?.[l]?.length || 0);
    n += (p?.description?.[l]?.length || 0);
  }
  return n;
}
const byId = new Map<string, any>();
for (const p of all) {
  if (!p?.id) continue;
  const prev = byId.get(p.id);
  if (!prev || richness(p) > richness(prev)) byId.set(p.id, p);
}
const pois = Array.from(byId.values()).filter(p => p && p.type !== "region" && p.type !== "country");

const THRESHOLD = 500;
const langs: Lang[] = ["de", "hu", "ro", "en"];
const stats: Record<Lang, { missing: number; short: number; ok: number }> = {
  de: { missing: 0, short: 0, ok: 0 },
  hu: { missing: 0, short: 0, ok: 0 },
  ro: { missing: 0, short: 0, ok: 0 },
  en: { missing: 0, short: 0, ok: 0 },
};

const perCountry: Record<string, { total: number; missing: Record<Lang, number>; short: Record<Lang, number> }> = {};

for (const p of pois) {
  const cc = (p.parent || "").split("-")[0] || "??";
  const c = perCountry[cc] ||= { total: 0, missing: { de:0,hu:0,ro:0,en:0 }, short: { de:0,hu:0,ro:0,en:0 } };
  c.total++;
  const da = p.descriptionAdvanced as Record<string, string> | undefined;
  for (const l of langs) {
    const v = da?.[l];
    if (!v) { stats[l].missing++; c.missing[l]++; }
    else if (v.length < THRESHOLD) { stats[l].short++; c.short[l]++; }
    else { stats[l].ok++; }
  }
}

console.log(`\n=== Total dedup'd POIs (excl region/country): ${pois.length} ===\n`);
console.log("Per-language descriptionAdvanced status (threshold < 500 chars = short):");
console.log("lang  | missing | short  | ok     | ok%");
console.log("------|---------|--------|--------|------");
for (const l of langs) {
  const s = stats[l];
  const pct = ((s.ok / pois.length) * 100).toFixed(1);
  console.log(`${l}    | ${String(s.missing).padStart(7)} | ${String(s.short).padStart(6)} | ${String(s.ok).padStart(6)} | ${pct}%`);
}

console.log("\nTop 20 countries by total missing/short DE+HU+RO+EN slots:");
const ranked = Object.entries(perCountry)
  .map(([cc, c]) => {
    const sumMiss = langs.reduce((a, l) => a + c.missing[l], 0);
    const sumShort = langs.reduce((a, l) => a + c.short[l], 0);
    return { cc, total: c.total, miss: sumMiss, short: sumShort, sum: sumMiss + sumShort };
  })
  .sort((a, b) => b.sum - a.sum)
  .slice(0, 20);
console.log("cc   | pois | missing-slots | short-slots | total-gap");
console.log("-----|------|----------------|-------------|-----------");
for (const r of ranked) {
  console.log(`${r.cc.padEnd(4)} | ${String(r.total).padStart(4)} | ${String(r.miss).padStart(14)} | ${String(r.short).padStart(11)} | ${String(r.sum).padStart(9)}`);
}

// Sample: 10 POIs where DE is missing or short
console.log("\nSample of 10 POIs with DE descAdv short or missing (id | type | parent | de-length):");
let shown = 0;
for (const p of pois) {
  const len = p.descriptionAdvanced?.de?.length || 0;
  if (len < THRESHOLD && shown < 10) {
    console.log(`  ${p.id?.padEnd(45)} | ${(p.type||"").padEnd(10)} | ${(p.parent||"").padEnd(8)} | de=${len}`);
    shown++;
  }
}

// Different thresholds
console.log("\nDifferent thresholds for DE descriptionAdvanced:");
for (const t of [0, 100, 200, 300, 500, 800, 1000]) {
  const ok = pois.filter(p => (p.descriptionAdvanced?.de?.length || 0) >= t).length;
  console.log(`  >= ${t} chars: ${ok} POIs (${((ok/pois.length)*100).toFixed(1)}%)`);
}
