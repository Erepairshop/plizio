// Phase B: match the still-missing EU city POIs against per-country FULL GeoNames
// dumps (_geonames/<ISO>.txt — includes <500 pop villages). Merges results into
// public/data/_city-population.json (src:"geonames-full"). Rewrites _city_pop_missing.json.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public/data/_city-population.json");
const MISSING = path.join(ROOT, "public/data/_city_pop_missing.json");

function tierOf(pop: number): number {
  if (pop >= 1_000_000) return 1;
  if (pop >= 250_000) return 2;
  if (pop >= 100_000) return 3;
  if (pop >= 30_000) return 4;
  return 5;
}
const norm = (s: string) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
function haversine(la1: number, lo1: number, la2: number, lo2: number): number {
  const R = 6371, toR = Math.PI / 180;
  const dLa = (la2 - la1) * toR, dLo = (lo2 - lo1) * toR;
  const a = Math.sin(dLa / 2) ** 2 + Math.cos(la1 * toR) * Math.cos(la2 * toR) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
type GnRow = { id: string; name: string; ascii: string; alts: string; lat: number; lon: number; pop: number };
const CELL = 10;

const out: Record<string, any> = JSON.parse(fs.readFileSync(OUT, "utf8"));
const missing: any[] = JSON.parse(fs.readFileSync(MISSING, "utf8"));
const byIso = new Map<string, any[]>();
for (const p of missing) { (byIso.get(p.iso2) ?? byIso.set(p.iso2, []).get(p.iso2))!.push(p); }

const NAME_GATE_KM = 20, COORD_GATE_KM = 6;
const stillMissing: any[] = [];
let filled = 0;

for (const [iso2, ps] of byIso) {
  const file = path.join(ROOT, "_geonames", `${iso2}.txt`);
  if (!fs.existsSync(file)) { stillMissing.push(...ps); continue; }
  // build grid from this country's P-rows with pop>0
  const grid = new Map<string, GnRow[]>();
  const lines = fs.readFileSync(file, "utf8").split("\n");
  for (const line of lines) {
    if (!line) continue;
    const f = line.split("\t");
    if (f[6] !== "P") continue;
    const pop = parseInt(f[14], 10) || 0;
    if (pop <= 0) continue;
    const lat = parseFloat(f[4]), lon = parseFloat(f[5]);
    if (Number.isNaN(lat) || Number.isNaN(lon)) continue;
    const k = `${Math.round(lat * CELL)}_${Math.round(lon * CELL)}`;
    (grid.get(k) ?? grid.set(k, []).get(k))!.push({ id: f[0], name: f[1], ascii: f[2], alts: f[3] || "", lat, lon, pop });
  }
  for (const p of ps) {
    const lon = p.coords?.[0], lat = p.coords?.[1];
    let best: { row: GnRow; dist: number; nameMatch: boolean } | null = null;
    if (typeof lat === "number" && typeof lon === "number") {
      const pNames = new Set<string>();
      for (const v of Object.values(p.name || {})) if (typeof v === "string") pNames.add(norm(v));
      const clat = Math.round(lat * CELL), clon = Math.round(lon * CELL);
      const cands: GnRow[] = [];
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
        const cell = grid.get(`${clat + dx}_${clon + dy}`); if (cell) cands.push(...cell);
      }
      for (const r of cands) {
        const dist = haversine(lat, lon, r.lat, r.lon);
        if (dist > NAME_GATE_KM) continue;
        const altSet = r.alts ? new Set(r.alts.split(",").map(norm)) : null;
        const nameMatch = pNames.has(norm(r.name)) || pNames.has(norm(r.ascii)) || (altSet ? [...pNames].some((n) => n && altSet.has(n)) : false);
        if (!best) { best = { row: r, dist, nameMatch }; continue; }
        const better = (nameMatch && !best.nameMatch) ||
          (nameMatch === best.nameMatch && dist < best.dist - 0.5) ||
          (nameMatch === best.nameMatch && Math.abs(dist - best.dist) <= 0.5 && r.pop > best.row.pop);
        if (better) best = { row: r, dist, nameMatch };
      }
      if (best && !best.nameMatch && best.dist > COORD_GATE_KM) best = null;
    }
    if (best && best.row.pop > 0) {
      out[p.id] = { pop: best.row.pop, src: "geonames-full", gnId: best.row.id, dist: Math.round(best.dist * 10) / 10, nameMatch: best.nameMatch, tier: tierOf(best.row.pop) };
      filled++;
    } else {
      stillMissing.push(p);
    }
  }
}

fs.writeFileSync(OUT, JSON.stringify(out), "utf8");
fs.writeFileSync(MISSING, JSON.stringify(stillMissing), "utf8");
console.log(`phase B filled: ${filled}  | still missing: ${stillMissing.length}`);
console.log(`total population entries now: ${Object.keys(out).length}`);
// still-missing by country
const c: Record<string, number> = {};
for (const p of stillMissing) c[p.iso2] = (c[p.iso2] || 0) + 1;
console.log("still-missing by country:", Object.entries(c).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(" "));
