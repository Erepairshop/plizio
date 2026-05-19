#!/usr/bin/env tsx
// Count POIs where the lite popup content (description + facts, NOT descriptionAdvanced) is missing or TODO.
type Lang = "de"|"hu"|"ro"|"en";
const [{ pois: dePois }, { romaniaAllPois }, { hungaryAllPoi }, { vaticanPois }, { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS }] = await Promise.all([
  import("../lib/visualLab/data/poi"),
  import("../lib/visualLab/data/romaniaPoi"),
  import("../lib/visualLab/data/hungaryPoi"),
  import("../lib/visualLab/data/vaticanPoi"),
  import("../lib/visualLab/data/allCountryPois"),
]);
const all = ([] as any[]).concat(dePois as any[], ALL_DE_EXTRA_POIS as any[], romaniaAllPois as any[], hungaryAllPoi as any[], vaticanPois as any[], ALL_COUNTRY_POIS as any[]);
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

const TODO_RE = /^todo\s*$|\btodo\b/i;
function isTodoLike(s: any): boolean {
  if (!s) return true;
  if (typeof s === "string") return TODO_RE.test(s.trim()) || s.trim().length === 0;
  if (Array.isArray(s)) return s.length === 0 || s.every(x => typeof x === "string" && (TODO_RE.test(x.trim()) || x.trim().length === 0));
  return false;
}

const stats = {
  desc: { de: { todo:0, ok:0 }, hu: { todo:0, ok:0 }, ro: { todo:0, ok:0 }, en: { todo:0, ok:0 } },
  facts: { de: { todo:0, ok:0 }, hu: { todo:0, ok:0 }, ro: { todo:0, ok:0 }, en: { todo:0, ok:0 } },
};
const anyTodoDesc = new Set<string>();
const allTodoDesc = new Set<string>();
const langs: Lang[] = ["de","hu","ro","en"];

for (const p of pois) {
  let descTodoCount = 0, factsTodoCount = 0;
  for (const l of langs) {
    if (isTodoLike(p.description?.[l])) { stats.desc[l].todo++; descTodoCount++; }
    else stats.desc[l].ok++;
    if (isTodoLike(p.facts?.[l])) { stats.facts[l].todo++; factsTodoCount++; }
    else stats.facts[l].ok++;
  }
  if (descTodoCount > 0) anyTodoDesc.add(p.id);
  if (descTodoCount === 4) allTodoDesc.add(p.id);
}

console.log(`\n=== Lite popup content (description + facts) — total ${pois.length} POIs ===\n`);
console.log(`Per-language description (TODO or missing):`);
console.log("lang  | TODO    | OK      | OK%");
console.log("------|---------|---------|-----");
for (const l of langs) {
  const s = stats.desc[l];
  const pct = ((s.ok / pois.length) * 100).toFixed(1);
  console.log(`${l}    | ${String(s.todo).padStart(7)} | ${String(s.ok).padStart(7)} | ${pct}%`);
}
console.log(`\nPer-language facts (TODO or empty):`);
console.log("lang  | TODO    | OK      | OK%");
console.log("------|---------|---------|-----");
for (const l of langs) {
  const s = stats.facts[l];
  const pct = ((s.ok / pois.length) * 100).toFixed(1);
  console.log(`${l}    | ${String(s.todo).padStart(7)} | ${String(s.ok).padStart(7)} | ${pct}%`);
}
console.log(`\nCross-stats:`);
console.log(`  POIs with description TODO in any of 4 langs: ${anyTodoDesc.size} (${((anyTodoDesc.size/pois.length)*100).toFixed(1)}%)`);
console.log(`  POIs with description TODO in ALL 4 langs:    ${allTodoDesc.size} (${((allTodoDesc.size/pois.length)*100).toFixed(1)}%)`);

console.log("\nSample 10 POIs with TODO description in DE:");
let shown = 0;
for (const p of pois) {
  if (isTodoLike(p.description?.de) && shown < 10) {
    console.log(`  ${p.id?.padEnd(50)} | ${(p.type||"").padEnd(12)} | ${(p.parent||"").padEnd(8)} | de.desc=${typeof p.description?.de === "string" ? `"${(p.description.de as string).slice(0,30)}"` : "(missing)"}`);
    shown++;
  }
}
