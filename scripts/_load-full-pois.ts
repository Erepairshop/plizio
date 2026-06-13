// SINGLE SOURCE OF TRUTH for the full-POI set used by the page generator AND the
// pre-build URL index. Both `generate-poi-html.mts` (writes the actual HTML pages +
// the authoritative _poi-url-index.json) and `build-poi-url-index.mts` (builds the
// temporary index consumed by the Next React routes at build time) import from here,
// so they can NEVER diverge on which POI instance (and thus which parent → which path)
// wins for a given id. Divergence between these two was the root cause of ~466 broken
// internal links (e.g. ferrol: generator /spanien/spanien/ vs poisLite /spanien/galicien/).
// 2026-06-13. See CLAUDE.md "SEO / URL architektúra és 404-MEGELŐZÉS".
//
// IMPORTANT: when you add a new poiExtra*.ts data file, add it to the import list in
// `loadFullPois()` below (this is the generator's explicit list — see
// [[generate-poi-html-imports]]).
import fs from "node:fs";
import path from "node:path";
import type { POI } from "../lib/visualLab/data/poi";

// IDs collapsed at the dedup stage (same place, ≤2km). Excluded everywhere so the kept
// (richest) POI owns the canonical sitemap slug. See _dedup_blocklist.json.
export const DEDUP_BLOCK: Set<string> = new Set(
  JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf-8")),
);

export async function loadFullPois(): Promise<POI[]> {
  const [
    { pois: dePois },
    { romaniaAllPois },
    { hungaryAllPoi },
    { vaticanPois, vaticanCountry },
    { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS },
    { poiExtraDeV1 },
    { poiExtraRoV1 },
    { poiExtraHuV4 },
    { poiExtraFrV1 },
    { poiExtraUkV1 },
    { poiExtraUkMissingV1 },
    { poiExtraAtChMissingV1 },
    { poiExtraHrV1 },
    { poiExtraHrV2 },
    { poiExtraItalyV2 },
    { poiExtraEsV2 },
    { poiExtraHrV3 },
    { euNewV1 },
    { glNewV1 },
    { naNewV1 },
    { afNewV1 },
    { asiaNewV1 },
  ] = await Promise.all([
    import("../lib/visualLab/data/poi"),
    import("../lib/visualLab/data/romaniaPoi"),
    import("../lib/visualLab/data/hungaryPoi"),
    import("../lib/visualLab/data/vaticanPoi"),
    import("../lib/visualLab/data/allCountryPois"),
    import("../lib/visualLab/data/poiExtraDeV1"),
    import("../lib/visualLab/data/poiExtraRoV1"),
    import("../lib/visualLab/data/poiExtraHuV4"),
    import("../lib/visualLab/data/poiExtraFrV1"),
    import("../lib/visualLab/data/poiExtraUkV1"),
    import("../lib/visualLab/data/poiExtraUkMissingV1"),
    import("../lib/visualLab/data/poiExtraAtChMissingV1"),
    import("../lib/visualLab/data/poiExtraHrV1"),
    import("../lib/visualLab/data/poiExtraHrV2"),
    import("../lib/visualLab/data/poiExtraItalyV2"),
    import("../lib/visualLab/data/poiExtraEsV2"),
    import("../lib/visualLab/data/poiExtraHrV3"),
    import("../lib/visualLab/data/poiExtraEuNewV1"),
    import("../lib/visualLab/data/poiExtraGlNewV1"),
    import("../lib/visualLab/data/poiExtraNaNewV1"),
    import("../lib/visualLab/data/poiExtraAfNewV1"),
    import("../lib/visualLab/data/poiExtraAsiaNewV1"),
  ]);
  const all = ([] as POI[]).concat(
    dePois as POI[], ALL_DE_EXTRA_POIS as POI[], romaniaAllPois as POI[], hungaryAllPoi as POI[],
    [vaticanCountry as POI], vaticanPois as POI[], ALL_COUNTRY_POIS as POI[],
    poiExtraDeV1 as POI[], poiExtraRoV1 as POI[], poiExtraHuV4 as POI[], poiExtraFrV1 as POI[],
    poiExtraUkV1 as POI[], poiExtraUkMissingV1 as POI[], poiExtraAtChMissingV1 as POI[],
    poiExtraHrV1 as POI[], poiExtraHrV2 as POI[], poiExtraItalyV2 as POI[], poiExtraEsV2 as POI[],
    poiExtraHrV3 as POI[], euNewV1 as POI[], glNewV1 as POI[], naNewV1 as POI[], afNewV1 as POI[],
    asiaNewV1 as POI[],
  );
  // Dedup by id (richest wins — match slugs.ts pre-refactor behavior).
  const byId = new Map<string, POI>();
  function richness(p: POI): number {
    let n = 0;
    const da = (p as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
    const d = (p as { description?: Record<string, string> }).description;
    for (const obj of [d, da]) if (obj) for (const l of ["de", "hu", "ro", "en"]) n += (obj as any)[l]?.length || 0;
    return n;
  }
  for (const p of all) {
    if (!p?.id) continue;
    const prev = byId.get(p.id);
    if (!prev || richness(p) > richness(prev)) byId.set(p.id, p);
  }
  const out = Array.from(byId.values()).filter((p) => !DEDUP_BLOCK.has(p.id));
  console.log(`[load-full-pois] loaded ${out.length} full POIs (dedup-block: ${DEDUP_BLOCK.size})`);
  return out;
}

// Lenient indexability rule (any text field, any of the 4 core langs). Must match the
// page generator's gate so the URL index reflects exactly the pages that get written.
export function hasIndexableContent(poi: POI): boolean {
  const desc = poi.description as Record<string, string> | undefined;
  const facts = poi.facts as Record<string, string[]> | undefined;
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  for (const l of ["de", "hu", "ro", "en"] as const) {
    if ((desc?.[l]?.length ?? 0) > 0 || (descAdv?.[l]?.length ?? 0) > 0) return true;
    if ((facts?.[l]?.length ?? 0) > 0 || (factsAdv?.[l]?.length ?? 0) > 0) return true;
  }
  return false;
}
