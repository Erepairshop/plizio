// Enumerate the AUTHORITATIVE generated POI set (exactly what generate-poi-html
// renders, via loadFullPois — explicit import list + dedup + DEDUP_BLOCK) and
// report city-population coverage per European country. Writes the European
// city-ish POI list for the population fetcher. NO source mutation.
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
  throw new Error(`import resolve failed: ISO2=${!!ISO2_TO_COUNTRY} load=${!!loadFullPois} strict=${!!getCountryIdStrict}`);
}

// country-id -> ISO2 (invert). Some country-ids map from multiple ISO2; first wins.
const COUNTRY_TO_ISO2: Record<string, string> = {};
for (const [iso, cid] of Object.entries(ISO2_TO_COUNTRY)) {
  if (!(cid in COUNTRY_TO_ISO2)) COUNTRY_TO_ISO2[cid] = iso;
}

const EU_ISO = new Set(["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","MT","MD","MC","ME","NL","MK","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB","VA"]);
// "city-ish" — settlements that should carry a population for tiering.
const CITY_TYPES = new Set(["city","town","village","state-capital","capital","municipality","suburb"]);

const pois = await loadFullPois();
console.log(`\n=== GENERATED TOTAL (loadFullPois): ${pois.length} POIs ===`);

// global type histogram (top)
const allTypes: Record<string, number> = {};
for (const p of pois) allTypes[p.type] = (allTypes[p.type] || 0) + 1;

// resolve country + collect EU city-ish
type Row = { id: string; iso2: string; type: string; parent: string; coords?: number[]; name: any; population?: number };
const euCities: Row[] = [];
const perCountry: Record<string, { city: number; withPop: number }> = {};
let unresolved = 0;
let euCityNoCoords = 0;

for (const p of pois) {
  if (!p?.id || !p.parent) { unresolved++; continue; }
  const cid = getCountryIdStrict(p.parent);
  if (!cid) { unresolved++; continue; }
  const iso2 = COUNTRY_TO_ISO2[cid];
  if (!iso2 || !EU_ISO.has(iso2)) continue;
  if (!CITY_TYPES.has(p.type)) continue;
  perCountry[iso2] ??= { city: 0, withPop: 0 };
  perCountry[iso2].city++;
  const hasPop = typeof (p as any).population === "number" && (p as any).population > 0;
  if (hasPop) perCountry[iso2].withPop++;
  if (!p.coords || p.coords.length < 2) euCityNoCoords++;
  euCities.push({
    id: p.id, iso2, type: p.type, parent: p.parent,
    coords: p.coords, name: p.name, population: (p as any).population,
  });
}

const rows = Object.entries(perCountry).map(([iso, v]) => [iso, v.city, v.withPop, Math.round(v.withPop / v.city * 100)] as const)
  .sort((a, b) => a[3] - b[3]);
console.log("\nISO  cities  withPop  cov%");
for (const r of rows) console.log(String(r[0]).padEnd(4), String(r[1]).padStart(6), String(r[2]).padStart(7), String(r[3]).padStart(4) + "%");
const tc = rows.reduce((s, r) => s + r[1], 0);
const twp = rows.reduce((s, r) => s + r[2], 0);
console.log("---");
console.log(`EU city-ish TOTAL: ${tc}  withPop: ${twp}  cov: ${Math.round(twp / tc * 100)}%  missing: ${tc - twp}`);
console.log(`EU city-ish WITHOUT coords: ${euCityNoCoords}  | unresolved-country POIs (all types): ${unresolved}`);
console.log(`\nGlobal type histogram (settlement types): ` +
  Object.entries(allTypes).filter(([t]) => CITY_TYPES.has(t)).map(([t, n]) => `${t}:${n}`).join("  "));

const outPath = path.resolve(process.cwd(), "public/data/_eu_city_pop_input.json");
fs.writeFileSync(outPath, JSON.stringify(euCities, null, 0), "utf8");
console.log(`\nwrote ${euCities.length} EU city-ish rows → ${outPath}`);
