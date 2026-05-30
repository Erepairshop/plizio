// Collect rendered sights[] (the sight-CARD source, not itinerary) that have no
// image yet, into the fetcher input format {name, lat, lon, city_id, key}.
// Key = slug(name)-poiId (what renderSightCard looks up). Uses the sight's own
// coords if present, else the host POI coords. Prefers EN name for Commons match.
import fs from "node:fs";
import path from "node:path";

const DEDUP_BLOCK: Set<string> = new Set(
  (() => { try { return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf-8")); } catch { return []; } })()
);
function slugifySight(s: string): string {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function toLatLon(c: any): [number, number] | null {
  if (!Array.isArray(c) || c.length < 2) return null;
  let a = Number(c[0]), b = Number(c[1]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  if (Math.abs(a) < 30 && Math.abs(b) > 25) return [b, a];
  return [a, b];
}

const mods = await Promise.all([
  import("../lib/visualLab/data/poi"), import("../lib/visualLab/data/romaniaPoi"),
  import("../lib/visualLab/data/hungaryPoi"), import("../lib/visualLab/data/vaticanPoi"),
  import("../lib/visualLab/data/allCountryPois"), import("../lib/visualLab/data/poiExtraDeV1"),
  import("../lib/visualLab/data/poiExtraRoV1"), import("../lib/visualLab/data/poiExtraHuV4"),
  import("../lib/visualLab/data/poiExtraFrV1"), import("../lib/visualLab/data/poiExtraUkV1"),
  import("../lib/visualLab/data/poiExtraUkMissingV1"), import("../lib/visualLab/data/poiExtraAtChMissingV1"),
  import("../lib/visualLab/data/poiExtraHrV1"), import("../lib/visualLab/data/poiExtraHrV2"),
  import("../lib/visualLab/data/poiExtraItalyV2"), import("../lib/visualLab/data/poiExtraEsV2"),
] as any);
const all: any[] = ([] as any[]).concat(
  mods[0].pois, mods[4].ALL_DE_EXTRA_POIS, mods[1].romaniaAllPois, mods[2].hungaryAllPoi,
  [mods[3].vaticanCountry], mods[3].vaticanPois, mods[4].ALL_COUNTRY_POIS,
  mods[5].poiExtraDeV1, mods[6].poiExtraRoV1, mods[7].poiExtraHuV4, mods[8].poiExtraFrV1,
  mods[9].poiExtraUkV1, mods[10].poiExtraUkMissingV1, mods[11].poiExtraAtChMissingV1,
  mods[12].poiExtraHrV1, mods[13].poiExtraHrV2, mods[14].poiExtraItalyV2, mods[15].poiExtraEsV2,
);
const byId = new Map<string, any>();
for (const p of all) if (p?.id) byId.set(p.id, p);
const pois = Array.from(byId.values()).filter((p) => !DEDUP_BLOCK.has(p.id));
const frTop = (() => { try { return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "public/data/fr-top100-sights.json"), "utf-8")); } catch { return {}; } })();
const MAP: Record<string, string> = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "public/data/sight-image-map.json"), "utf-8"));
const mapKeys = new Set(Object.keys(MAP));

const out: any[] = [];
const seen = new Set<string>();
let ownCoords = 0, hostCoords = 0, noCoords = 0, hasImg = 0, already = 0;
const LANGS = ["en", "de", "hu", "ro"];

for (const p of pois) {
  let sObj = p.sights;
  if (!(sObj && (sObj.de || sObj.en || sObj.hu || sObj.ro))) sObj = frTop[p.id];
  if (!sObj) continue;
  const hostC = toLatLon(p.coords);
  // index-align across langs: pick EN primary, fall back to other langs at same idx
  const enArr = sObj.en || sObj.de || sObj.hu || sObj.ro || [];
  const len = Math.max(...LANGS.map((l) => Array.isArray(sObj[l]) ? sObj[l].length : 0));
  for (let i = 0; i < len; i++) {
    // gather this sight's name + image flag across langs at index i
    let name = "", anyImg = false, sCoords: [number, number] | null = null;
    for (const l of LANGS) {
      const it = Array.isArray(sObj[l]) ? sObj[l][i] : null;
      if (!it) continue;
      if (it.image) anyImg = true;
      if (!sCoords) sCoords = toLatLon(it.coords);
      if (!name && it.name) name = it.name;          // prefer en (first in LANGS)
    }
    if (!name) continue;
    if (anyImg) { hasImg++; continue; }
    const key = `${slugifySight(name)}-${p.id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (mapKeys.has(key)) { already++; continue; }    // already fetched under this name
    const c = sCoords || hostC;
    if (!c) { noCoords++; continue; }
    if (sCoords) ownCoords++; else hostCoords++;
    out.push({ name, lat: c[0], lon: c[1], city_id: p.id, key });
  }
}
console.log(`gap sights to fetch: ${out.length}`);
console.log(`  own coords: ${ownCoords} | host(city) coords: ${hostCoords} | no coords (skipped): ${noCoords}`);
console.log(`  skipped — already has image: ${hasImg} | already in map: ${already}`);
if (process.argv.includes("--write")) {
  const fp = path.resolve(process.cwd(), "_sight_card_fetch_list.json");
  fs.writeFileSync(fp, JSON.stringify(out));
  console.log("wrote", fp);
}
