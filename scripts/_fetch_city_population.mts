// Match EU city-ish POIs (from _eu_city_pop_input.json — the AUTHORITATIVE
// loadFullPois set) against GeoNames cities500 by coordinate + name, within the
// same country. Produces public/data/_city-population.json (id -> {pop,src,tier}).
// Phase A: cities500 (pop>500). Unmatched → _city_pop_missing.json for phase B.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "public/data/_eu_city_pop_input.json");
const GN = path.join(ROOT, "_geonames/cities500.txt");
const OUT = path.join(ROOT, "public/data/_city-population.json");
const MISSING = path.join(ROOT, "public/data/_city_pop_missing.json");

// Tunable tier thresholds (population). Tier 1 = largest.
function tierOf(pop: number): number {
  if (pop >= 1_000_000) return 1;
  if (pop >= 250_000) return 2;
  if (pop >= 100_000) return 3;
  if (pop >= 30_000) return 4;
  return 5;
}

const norm = (s: string) =>
  (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

function haversine(la1: number, lo1: number, la2: number, lo2: number): number {
  const R = 6371, toR = Math.PI / 180;
  const dLa = (la2 - la1) * toR, dLo = (lo2 - lo1) * toR;
  const a = Math.sin(dLa / 2) ** 2 + Math.cos(la1 * toR) * Math.cos(la2 * toR) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

type GnRow = { id: string; name: string; ascii: string; alts: string; lat: number; lon: number; pop: number };

// Build per-country grid index of GeoNames populated places.
const byCountry = new Map<string, Map<string, GnRow[]>>(); // iso2 -> cellKey -> rows
const CELL = 10; // ~0.1deg cells (~11km)
const cellKey = (lat: number, lon: number) => `${Math.round(lat * CELL)}_${Math.round(lon * CELL)}`;

let gnCount = 0;
const lines = fs.readFileSync(GN, "utf8").split("\n");
for (const line of lines) {
  if (!line) continue;
  const f = line.split("\t");
  if (f[6] !== "P") continue; // feature_class populated place
  const iso2 = f[8];
  const lat = parseFloat(f[4]), lon = parseFloat(f[5]), pop = parseInt(f[14], 10) || 0;
  if (!iso2 || Number.isNaN(lat) || Number.isNaN(lon)) continue;
  const row: GnRow = { id: f[0], name: f[1], ascii: f[2], alts: f[3] || "", lat, lon, pop };
  let g = byCountry.get(iso2);
  if (!g) { g = new Map(); byCountry.set(iso2, g); }
  const k = cellKey(lat, lon);
  let cell = g.get(k);
  if (!cell) { cell = []; g.set(k, cell); }
  cell.push(row);
  gnCount++;
}
console.log(`GeoNames P-rows indexed: ${gnCount} across ${byCountry.size} countries`);

const pois: any[] = JSON.parse(fs.readFileSync(INPUT, "utf8"));
const out: Record<string, any> = {};
const missing: any[] = [];
const perCountry: Record<string, { total: number; matched: number; inline: number; miss: number }> = {};

const NAME_GATE_KM = 25;   // accept a name-matched GeoNames place up to this far
const COORD_GATE_KM = 8;   // else accept nearest populous place within this radius

for (const p of pois) {
  const iso2 = p.iso2;
  perCountry[iso2] ??= { total: 0, matched: 0, inline: 0, miss: 0 };
  perCountry[iso2].total++;
  const g = byCountry.get(iso2);
  const lon = p.coords?.[0], lat = p.coords?.[1];
  let best: { row: GnRow; dist: number; nameMatch: boolean } | null = null;

  if (g && typeof lat === "number" && typeof lon === "number") {
    // candidate POI names (normalized)
    const pNames = new Set<string>();
    for (const v of [p.name?.en, p.name?.de, p.name?.hu, p.name?.ro, ...Object.values(p.name || {})]) {
      if (typeof v === "string") pNames.add(norm(v));
    }
    const clat = Math.round(lat * CELL), clon = Math.round(lon * CELL);
    const cands: GnRow[] = [];
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
      const cell = g.get(`${clat + dx}_${clon + dy}`);
      if (cell) cands.push(...cell);
    }
    for (const r of cands) {
      const dist = haversine(lat, lon, r.lat, r.lon);
      if (dist > NAME_GATE_KM) continue;
      const altSet = r.alts ? new Set(r.alts.split(",").map(norm)) : null;
      const nameMatch = pNames.has(norm(r.name)) || pNames.has(norm(r.ascii)) || (altSet ? [...pNames].some((n) => n && altSet.has(n)) : false);
      // prefer: name match; then smaller distance; then larger population
      if (!best) { best = { row: r, dist, nameMatch }; continue; }
      const better =
        (nameMatch && !best.nameMatch) ||
        (nameMatch === best.nameMatch && dist < best.dist - 0.5) ||
        (nameMatch === best.nameMatch && Math.abs(dist - best.dist) <= 0.5 && r.pop > best.row.pop);
      if (better) best = { row: r, dist, nameMatch };
    }
    // coordinate-only fallback must be within the tighter gate
    if (best && !best.nameMatch && best.dist > COORD_GATE_KM) best = null;
  }

  if (best && best.row.pop > 0) {
    const pop = best.row.pop;
    out[p.id] = { pop, src: "geonames", gnId: best.row.id, dist: Math.round(best.dist * 10) / 10, nameMatch: best.nameMatch, tier: tierOf(pop) };
    perCountry[iso2].matched++;
  } else if (typeof p.population === "number" && p.population > 0) {
    out[p.id] = { pop: p.population, src: "inline", tier: tierOf(p.population) };
    perCountry[iso2].inline++;
  } else {
    missing.push({ id: p.id, iso2, type: p.type, coords: p.coords, name: p.name });
    perCountry[iso2].miss++;
  }
}

fs.writeFileSync(OUT, JSON.stringify(out), "utf8");
fs.writeFileSync(MISSING, JSON.stringify(missing), "utf8");

const rows = Object.entries(perCountry).map(([iso, v]) => {
  const have = v.matched + v.inline;
  return [iso, v.total, v.matched, v.inline, v.miss, Math.round(have / v.total * 100)] as const;
}).sort((a, b) => a[5] - b[5]);
console.log("\nISO  total  geoN  inline  miss  cov%");
for (const r of rows) console.log(String(r[0]).padEnd(4), String(r[1]).padStart(5), String(r[2]).padStart(5), String(r[3]).padStart(6), String(r[4]).padStart(5), String(r[5]).padStart(4) + "%");
const T = rows.reduce((s, r) => s + r[1], 0), HV = rows.reduce((s, r) => s + r[2] + r[3], 0), MS = rows.reduce((s, r) => s + r[4], 0);
console.log("---");
console.log(`TOTAL ${T}  have ${HV} (${Math.round(HV / T * 100)}%)  missing ${MS}`);
console.log(`wrote ${Object.keys(out).length} → ${OUT}`);
console.log(`wrote ${missing.length} missing → ${MISSING}`);
