// Build a geo-sharded static index of OUR city POIs for the PlizioGo route-planner CAR mode.
// Car mode stops at REAL cities/towns along the route (each linking to our own POI page),
// instead of camper sites. Mirrors the sights-geo sharding (1°×1° cells), client-side haversine.
//
// Source: loadFullPois() (same authoritative set as the page generator) ∩ _poi-url-index.json
//         (only cities that actually have an indexable page → valid internal link).
// Output: public/data/cities-geo/<latcell>_<loncell>.json + _manifest.json
// Record (compact): [lon, lat, nameByLang, pathByLang, rank]   rank 0=capital,1=city,2=town,3=village
//
// Run: npx tsx scripts/build-cities-geo.mts   (NODE_OPTIONS=--max-old-space-size=8192)
import * as fs from "node:fs";
import * as path from "node:path";
import * as _loader from "./_load-full-pois";

const _l: any = (_loader as any).default ?? _loader;
const loadFullPois: () => Promise<any[]> = _l.loadFullPois;

const CITY_TYPES = new Set(["city", "capital", "state-capital", "town", "village", "municipality", "commune"]);
const RANK: Record<string, number> = { capital: 0, "state-capital": 0, city: 1, municipality: 1, town: 2, commune: 2, village: 3 };
const LANGS = ["de", "hu", "ro", "en", "fr"] as const;

function coordsOf(p: any): [number, number] | null {
  if (Array.isArray(p.coords) && p.coords.length >= 2) {
    const lon = Number(p.coords[0]), lat = Number(p.coords[1]);
    if (Number.isFinite(lon) && Number.isFinite(lat)) return [lon, lat];
  }
  if (p.coordinates && Number.isFinite(p.coordinates.lat) && Number.isFinite(p.coordinates.lng)) {
    return [Number(p.coordinates.lng), Number(p.coordinates.lat)];
  }
  return null;
}

const pois = await loadFullPois();
const urlIdx: Record<string, Record<string, string>> = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "public/data/_poi-url-index.json"), "utf-8"),
);

const OUT = path.resolve(process.cwd(), "public/data/cities-geo");
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const cells: Record<string, any[]> = {};
let n = 0, noPage = 0, noCoord = 0;
for (const p of pois as any[]) {
  if (!CITY_TYPES.has(p.type)) continue;
  const paths = urlIdx[p.id];
  if (!paths) { noPage++; continue; }            // no indexable page → would 404, skip
  const c = coordsOf(p);
  if (!c) { noCoord++; continue; }
  const [lon, lat] = c;
  if (!(lon >= -180 && lon <= 180 && lat >= -90 && lat <= 90)) continue;
  const nm: Record<string, string> = {};
  for (const lng of LANGS) { const v = p.name?.[lng]; if (v) nm[lng] = String(v); }
  if (!(nm.en || nm.de || nm.hu || nm.ro || nm.fr)) continue;
  const u: Record<string, string> = {};
  for (const lng of LANGS) { if (paths[lng]) u[lng] = paths[lng]; }
  if (!Object.keys(u).length) continue;
  const rank = RANK[p.type] ?? 2;
  const cell = `${Math.floor(lat)}_${Math.floor(lon)}`;
  (cells[cell] ||= []).push([Math.round(lon * 1e5) / 1e5, Math.round(lat * 1e5) / 1e5, nm, u, rank]);
  n++;
}

for (const [cell, recs] of Object.entries(cells)) {
  fs.writeFileSync(path.join(OUT, cell + ".json"), JSON.stringify(recs));
}
fs.writeFileSync(
  path.join(OUT, "_manifest.json"),
  JSON.stringify({ cells: Object.keys(cells).sort(), count: n, cellCount: Object.keys(cells).length }),
);
console.log(`cities: ${n} | cells: ${Object.keys(cells).length} | skipped no-page: ${noPage} | no-coord: ${noCoord}`);
