#!/usr/bin/env tsx
import fs from "node:fs";

const touched = new Set<string>(JSON.parse(fs.readFileSync("C:\\Users\\User\\plizio_orch\\_touched_ids.json", "utf-8")));
const [{ pois: dePois }, { romaniaAllPois }, { hungaryAllPoi }, { vaticanPois }, { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS }] = await Promise.all([
  import("../lib/visualLab/data/poi"),
  import("../lib/visualLab/data/romaniaPoi"),
  import("../lib/visualLab/data/hungaryPoi"),
  import("../lib/visualLab/data/vaticanPoi"),
  import("../lib/visualLab/data/allCountryPois"),
]);
const all = ([] as any[]).concat(dePois as any[], ALL_DE_EXTRA_POIS as any[], romaniaAllPois as any[], hungaryAllPoi as any[], vaticanPois as any[], ALL_COUNTRY_POIS as any[]);
const byId = new Map<string, any>();
for (const p of all) { if (p?.id && !byId.has(p.id)) byId.set(p.id, p); }
const pois = Array.from(byId.values()).filter(p => p?.type !== "region" && p?.type !== "country");

const untouched = pois.filter(p => !touched.has(p.id));
console.log(`Total: ${pois.length}  Touched: ${pois.length - untouched.length}  Untouched: ${untouched.length}`);

// Group by id-suffix pattern
const byPattern: Record<string, number> = {};
for (const p of untouched) {
  const id = p.id || "";
  const m = id.match(/-(extra|extra2|extra3|extras|v2|v3)$/);
  const key = m ? m[1] : (id.match(/-[a-z]+$/)?.[0] || "(other)");
  byPattern[key] = (byPattern[key] || 0) + 1;
}
console.log("\nUntouched by id-suffix:");
for (const [k, v] of Object.entries(byPattern).sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(`  ${k.padEnd(15)} ${v}`);
}

// Group by parent country
const byCC: Record<string, number> = {};
for (const p of untouched) {
  const cc = (p.parent || "").split("-")[0] || "??";
  byCC[cc] = (byCC[cc] || 0) + 1;
}
console.log("\nTop 20 countries by untouched count:");
for (const [cc, n] of Object.entries(byCC).sort((a, b) => b[1] - a[1]).slice(0, 20)) {
  console.log(`  ${cc.padEnd(4)} ${n}`);
}

// Sample
console.log("\nSample 15 untouched IDs:");
for (const p of untouched.slice(0, 15)) {
  console.log(`  ${(p.id||"").padEnd(50)} | ${(p.type||"").padEnd(12)} | ${(p.parent||"").padEnd(10)}`);
}
