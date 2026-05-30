// Count orphan sight images: keys present in sight-image-map.json that the
// generator never looks up (no sight whose slug(name)-poiId matches). Replicates
// loadFullPois + lookupSightImage key scheme across ALL langs.
import fs from "node:fs";
import path from "node:path";

const DEDUP_BLOCK: Set<string> = new Set(
  (() => { try { return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf-8")); } catch { return []; } })()
);
function slugifySight(s: string): string {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const [
  { pois: dePois }, { romaniaAllPois }, { hungaryAllPoi }, { vaticanPois, vaticanCountry },
  { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS },
  { poiExtraDeV1 }, { poiExtraRoV1 }, { poiExtraHuV4 }, { poiExtraFrV1 }, { poiExtraUkV1 },
  { poiExtraUkMissingV1 }, { poiExtraAtChMissingV1 }, { poiExtraHrV1 }, { poiExtraHrV2 },
  { poiExtraItalyV2 }, { poiExtraEsV2 },
] = await Promise.all([
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
  dePois, ALL_DE_EXTRA_POIS, romaniaAllPois, hungaryAllPoi, [vaticanCountry], vaticanPois, ALL_COUNTRY_POIS,
  poiExtraDeV1, poiExtraRoV1, poiExtraHuV4, poiExtraFrV1, poiExtraUkV1, poiExtraUkMissingV1,
  poiExtraAtChMissingV1, poiExtraHrV1, poiExtraHrV2, poiExtraItalyV2, poiExtraEsV2,
);
const byId = new Map<string, any>();
for (const p of all) { if (p?.id && !byId.has(p.id)) byId.set(p.id, p); else if (p?.id) byId.set(p.id, p); }
const pois = Array.from(byId.values()).filter((p) => !DEDUP_BLOCK.has(p.id));

const frTop = (() => { try { return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "public/data/fr-top100-sights.json"), "utf-8")); } catch { return {}; } })();
const MAP: Record<string, string> = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "public/data/sight-image-map.json"), "utf-8"));
const mapKeys = new Set(Object.keys(MAP));

const usedKeys = new Set<string>();         // every slug(name)-poiId the build would query
const wantKeys = new Set<string>();         // sights without explicit image (actually do a map lookup)
let totalSights = 0, withExplicit = 0;
const LANGS = ["de", "hu", "ro", "en", "fr"];

function collect(sightsObj: any, poiId: string) {
  if (!sightsObj || typeof sightsObj !== "object") return;
  for (const l of LANGS) {
    const arr = sightsObj[l];
    if (!Array.isArray(arr)) continue;
    for (const s of arr) {
      const nm = s?.name; if (!nm) continue;
      totalSights++;
      const key = `${slugifySight(nm)}-${poiId}`;
      usedKeys.add(key);
      if (s.image) withExplicit++; else wantKeys.add(key);
    }
  }
}
for (const p of pois) {
  const own = p.sights;
  if (own && (own.de || own.en || own.hu || own.ro)) collect(own, p.id);
  else if (frTop[p.id]) collect(frTop[p.id], p.id);
}

let resolvable = 0;
for (const k of wantKeys) if (mapKeys.has(k)) resolvable++;
const orphans = [...mapKeys].filter((k) => !usedKeys.has(k));

console.log("POIs:", pois.length);
console.log("sight entries (all langs):", totalSights, "| with explicit image:", withExplicit);
console.log("unique lookup keys (no explicit img):", wantKeys.size);
console.log("  -> resolvable from map (image shows):", resolvable);
console.log("  -> NO image in map (gap, not fetched):", wantKeys.size - resolvable);
console.log("sight-image-map keys:", mapKeys.size);
console.log("  -> ORPHAN (never looked up, won't show):", orphans.length);
console.log("orphan examples:", orphans.slice(0, 8));

// Recoverability split (fast): an orphan key = slug(name)-<hostId>. Detect the
// host by trying suffixes at '-' boundaries against the set of CURRENT poi ids.
const renderPoiIds = new Set<string>();
const allPoiIds = new Set<string>();
for (const p of pois) { allPoiIds.add(p.id); const o = p.sights; if ((o && (o.de||o.en||o.hu||o.ro)) || frTop[p.id]) renderPoiIds.add(p.id); }
function hostOf(key: string): string | null {
  const seg = key.split("-");
  for (let i = 1; i < seg.length; i++) {            // try ever-longer suffixes
    const cand = seg.slice(i).join("-");
    if (allPoiIds.has(cand)) return cand;
  }
  return null;
}
let hostRendersNameMiss = 0, hostNotRendering = 0, hostUnknownStale = 0;
for (const k of orphans) {
  const h = hostOf(k);
  if (h === null) hostUnknownStale++;              // host id not in current data at all (deduped/renamed/non-indexable)
  else if (renderPoiIds.has(h)) hostRendersNameMiss++; // POI exists & shows sights, but no sight with this name-slug
  else hostNotRendering++;                          // POI exists but renders no sights (non-indexable/blocked)
}
console.log("--- orphan breakdown ---");
console.log("host POI exists & renders sights, name-slug not in its list:", hostRendersNameMiss);
console.log("host POI exists but renders NO sights:", hostNotRendering);
console.log("host id absent from current data (stale/deduped/renamed):", hostUnknownStale);
