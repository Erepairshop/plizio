// Build a RESUMABLE worklist of EU city POIs that currently have NO events in the
// poi-yearly-highlights.json sidecar, ranked by population (most-visited first).
// Also emits an empty done-list if none exists yet. NO source mutation.
//
// Run: NODE_OPTIONS=--max-old-space-size=8192 npx tsx scripts/_build_events_worklist.mts
import fs from "node:fs";
import path from "node:path";

const loaderNs: any = await import("./_load-full-pois.ts");
const slugsNs: any = await import("../lib/seo/slugs.ts");
const loader = loaderNs.default ?? loaderNs;
const slugs = slugsNs.default ?? slugsNs;

const loadFullPois = loader.loadFullPois ?? loaderNs.loadFullPois;
const getCountryIdStrict = slugs.getCountryIdStrict ?? slugsNs.getCountryIdStrict;
const ISO2_TO_COUNTRY: Record<string, string> = slugs.ISO2_TO_COUNTRY ?? slugsNs.ISO2_TO_COUNTRY;
if (!ISO2_TO_COUNTRY || !loadFullPois || !getCountryIdStrict) {
  throw new Error(`import resolve failed`);
}

const COUNTRY_TO_ISO2: Record<string, string> = {};
for (const [iso, cid] of Object.entries(ISO2_TO_COUNTRY)) {
  if (!(cid in COUNTRY_TO_ISO2)) COUNTRY_TO_ISO2[cid] = iso;
}

// EU/Europe ISO2 set (matches _enum_pois_for_pop.mts)
const EU_ISO = new Set(["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","MT","MD","MC","ME","NL","MK","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB","VA"]);
const CITY_TYPES = new Set(["city","town","state-capital","capital","municipality"]);

const DATA = path.resolve(process.cwd(), "public/data");
const cityPop: Record<string, any> = JSON.parse(fs.readFileSync(path.join(DATA, "_city-population.json"), "utf8"));
const highlights: Record<string, any[]> = JSON.parse(fs.readFileSync(path.join(DATA, "poi-yearly-highlights.json"), "utf8"));

const pois = await loadFullPois();

function coordsOf(p: any): [number, number] | null {
  if (Array.isArray(p.coords) && p.coords.length >= 2) {
    const lon = Number(p.coords[0]), lat = Number(p.coords[1]);
    if (Number.isFinite(lon) && Number.isFinite(lat)) return [lon, lat];
  }
  return null;
}

type Target = { id: string; iso2: string; country: string; type: string; name: any; coords: [number, number] | null; pop: number; tier: number | null; hasEvents: boolean };
const all: Target[] = [];
for (const p of pois as any[]) {
  if (!p?.id || !p.parent) continue;
  const cid = getCountryIdStrict(p.parent);
  if (!cid) continue;
  const iso2 = COUNTRY_TO_ISO2[cid];
  if (!iso2 || !EU_ISO.has(iso2)) continue;
  if (!CITY_TYPES.has(p.type)) continue;
  const pp = cityPop[p.id] || {};
  const pop = typeof p.population === "number" && p.population > 0 ? p.population
            : (typeof pp.pop === "number" ? pp.pop : 0);
  const hasEvents = Array.isArray(highlights[p.id]) && highlights[p.id].length > 0;
  all.push({
    id: p.id, iso2, country: cid, type: p.type, name: p.name,
    coords: coordsOf(p), pop, tier: typeof pp.tier === "number" ? pp.tier : null, hasEvents,
  });
}

// Dedup by id (a POI could theoretically appear twice); keep richest pop.
const byId = new Map<string, Target>();
for (const t of all) {
  const cur = byId.get(t.id);
  if (!cur || t.pop > cur.pop) byId.set(t.id, t);
}
const uniq = [...byId.values()];

// Collapse district-POIs that inherited the parent CITY's population via a bad
// coord-join (e.g. Rome's "Tuscolano"/"Tuscolano Sud", Copenhagen's "Islands
// Brygge", "Minsk Upper Town"). Signature: same iso2 + same exact large pop.
// Keep the most canonical id (prefer "city-" prefix, then shortest id).
function canonScore(t: Target): number {
  let s = 0;
  if (t.id.startsWith("city-")) s -= 1000;
  if (t.type === "capital" || t.type === "state-capital") s -= 500;
  s += t.id.length; // shorter id wins
  return s;
}
const popGroups = new Map<string, Target[]>();
for (const t of uniq) {
  if (t.pop > 50000) {
    const k = t.iso2 + "|" + t.pop;
    (popGroups.get(k) ?? popGroups.set(k, []).get(k)!).push(t);
  }
}
const dropIds = new Set<string>();
for (const grp of popGroups.values()) {
  if (grp.length < 2) continue;
  const keep = [...grp].sort((a, b) => canonScore(a) - canonScore(b))[0];
  for (const t of grp) if (t.id !== keep.id) dropIds.add(t.id);
}

const withEv = uniq.filter(t => t.hasEvents).length;
const targets = uniq.filter(t => !t.hasEvents && t.pop > 0 && !dropIds.has(t.id))
  .sort((a, b) => b.pop - a.pop);
console.log(`district/pop-collision POIs dropped: ${dropIds.size}`);

// per-country breakdown of targets
const perC: Record<string, number> = {};
for (const t of targets) perC[t.iso2] = (perC[t.iso2] || 0) + 1;

console.log(`EU city-ish POIs: ${uniq.length}  | with events: ${withEv}  | WITHOUT events (pop>0): ${targets.length}`);
console.log(`\nTop 25 target cities (no events, by pop):`);
for (const t of targets.slice(0, 25)) {
  const nm = t.name?.en || t.name?.de || t.name?.hu || t.id;
  console.log(`  ${String(t.pop).padStart(9)}  ${t.iso2}  ${t.tier ?? "-"}  ${t.id.padEnd(28)} ${nm}`);
}
console.log(`\nTargets per country (top 20):`);
Object.entries(perC).sort((a,b)=>b[1]-a[1]).slice(0,20).forEach(([k,v])=>console.log(`  ${k}: ${v}`));

const worklistPath = path.join(DATA, "_eu_events_worklist.json");
fs.writeFileSync(worklistPath, JSON.stringify(targets.map(t => ({
  id: t.id, iso2: t.iso2, country: t.country, type: t.type,
  name: { en: t.name?.en, de: t.name?.de, hu: t.name?.hu, ro: t.name?.ro },
  coords: t.coords, pop: t.pop, tier: t.tier,
})), null, 0), "utf8");
console.log(`\nwrote ${targets.length} targets -> ${worklistPath}`);

const donePath = path.join(DATA, "_eu_events_done.json");
if (!fs.existsSync(donePath)) {
  fs.writeFileSync(donePath, JSON.stringify([], null, 0), "utf8");
  console.log(`created empty done-list -> ${donePath}`);
} else {
  const done = JSON.parse(fs.readFileSync(donePath, "utf8"));
  console.log(`existing done-list: ${Array.isArray(done) ? done.length : "?"} ids`);
}
