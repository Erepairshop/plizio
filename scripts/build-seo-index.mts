#!/usr/bin/env tsx
// Build-time only: reads all POI TS sources via dynamic import, computes the
// dedup/richness/coord-bucket logic ONCE, and writes a lightweight
// public/data/_seo-index.json that lib/seo/slugs.ts loads at module init.
//
// The Next.js build (webpack/turbopack workers) never imports the heavy POI TS
// files anymore — only the lite JSON — so the worker heap stays small enough
// to handle hundreds of thousands of POIs.

import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("lib/seo/_seo-data.generated.ts");

async function main() {
  console.log("[build-seo-index] importing POI sources...");
  // Use the auto-generated manifest as the single source of truth for ALL
  // POI files. Run `scripts/gen_poi_manifest.mts` if you've added/removed POI
  // data files (CI does this automatically). Replaces ad-hoc 7-file imports.
  const { ALL_POI_SOURCES } = await import("../lib/visualLab/data/_all_poi_sources.generated");
  const [
    { regions: deRegions },
    { romaniaRegions },
    { hungaryRegions },
    { vaticanCountry },
  ] = await Promise.all([
    import("../lib/visualLab/data/poi"),
    import("../lib/visualLab/data/romaniaPoi"),
    import("../lib/visualLab/data/hungaryPoi"),
    import("../lib/visualLab/data/vaticanPoi"),
  ]);

  type POI = Record<string, unknown> & { id?: string; type?: string; parent?: string; coords?: number[]; image?: string; coa?: unknown; name?: Record<string, string> };

  // === Same logic as slugs.ts ===
  const _poiById = new Map<string, POI>();
  function _richness(p: POI): number {
    let n = 0;
    const desc = p.description as Record<string, string> | undefined;
    const descAdv = p.descriptionAdvanced as Record<string, string> | undefined;
    const facts = p.facts as Record<string, string[]> | undefined;
    const factsAdv = p.factsAdvanced as Record<string, string[]> | undefined;
    for (const obj of [desc, descAdv]) {
      if (!obj) continue;
      for (const l of ["de", "hu", "ro", "en"]) n += ((obj as Record<string, string>)[l] || "").length;
    }
    for (const obj of [facts, factsAdv]) {
      if (!obj) continue;
      for (const l of ["de", "hu", "ro", "en"]) {
        const arr = (obj as Record<string, unknown>)[l];
        if (Array.isArray(arr)) for (const s of arr) n += (typeof s === "string" ? s.length : 0);
      }
    }
    if (p.image) n += 50;
    return n;
  }

  const _DEDUP_BLOCK = new Set<string>(
    JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf-8")),
  );
  const allSources: POI[] = (ALL_POI_SOURCES as POI[]).concat([vaticanCountry as POI])
    .filter((p) => !(p && p.id && _DEDUP_BLOCK.has(p.id)));
  console.log(`[build-seo-index] raw sources: ${allSources.length} (dedup-block: ${_DEDUP_BLOCK.size})`);

  for (const p of allSources) {
    if (!p || !p.id) continue;
    const prev = _poiById.get(p.id);
    if (!prev || _richness(p) > _richness(prev)) _poiById.set(p.id, p);
  }

  // GPS dedup
  function poiCoords(p: POI): [number, number] | null {
    if (p.coords && p.coords.length >= 2) return [Number(p.coords[0]), Number(p.coords[1])];
    const c = p.coordinates as { lat: number; lng: number } | undefined;
    if (c && typeof c.lat === "number" && typeof c.lng === "number") return [c.lng, c.lat];
    return null;
  }
  function poiScore(p: POI): number {
    let s = 0;
    if (p.parent) s += 100;
    if (p.image) s += 10;
    if (p.description) s += 5;
    if (p.facts) s += 3;
    return s;
  }
  const seenCoords = new Map<string, POI>();
  const passthrough: POI[] = [];
  for (const p of _poiById.values()) {
    // Passthrough types: identity supersedes coord proximity, so a state/national
    // capital is never collapsed with a nearby district or landmark POI.
    if (!p || p.type === "region" || p.type === "country" ||
             p.type === "state-capital" || p.type === "capital") {
      passthrough.push(p); continue;
    }
    const xy = poiCoords(p);
    if (!xy) { passthrough.push(p); continue; }
    const key = `${Math.round(xy[1] / 0.0005)}:${Math.round(xy[0] / 0.0005)}`;
    const existing = seenCoords.get(key);
    if (!existing || poiScore(p) > poiScore(existing)) seenCoords.set(key, p);
  }
  const finalPois: POI[] = passthrough.concat(Array.from(seenCoords.values()));

  // hasIndexableContent — same lenient rule as lib/seo/routes.ts (any field, any lang).
  function hasIndexable(p: POI): boolean {
    const desc = p.description as Record<string, string> | undefined;
    const descAdv = p.descriptionAdvanced as Record<string, string> | undefined;
    const facts = p.facts as Record<string, string[]> | undefined;
    const factsAdv = p.factsAdvanced as Record<string, string[]> | undefined;
    for (const l of ["de", "hu", "ro", "en"] as const) {
      if ((desc?.[l]?.length ?? 0) > 0 || (descAdv?.[l]?.length ?? 0) > 0) return true;
      if ((facts?.[l]?.length ?? 0) > 0 || (factsAdv?.[l]?.length ?? 0) > 0) return true;
    }
    return false;
  }

  // Per-lang "has long content" flags for sitemap inclusion of fr/tr.
  // Threshold: 700 chars in descriptionAdvanced[lang] — short pages risk Google soft-404.
  function longLang(p: POI, lang: string): boolean {
    const da = p.descriptionAdvanced as Record<string, string> | undefined;
    return typeof da?.[lang] === "string" && da[lang].length >= 700;
  }

  // hr = native Croatian: a POI gets the hr variant iff it has hr-native content
  // (public/data/poi-hr-native.json, produced by _apply_hr_native.py).
  const HR_NATIVE_IDS = new Set<string>();
  try {
    const hrPath = path.resolve(process.cwd(), "public", "data", "poi-hr-native.json");
    if (fs.existsSync(hrPath)) {
      for (const id of Object.keys(JSON.parse(fs.readFileSync(hrPath, "utf-8")))) HR_NATIVE_IDS.add(id);
    }
  } catch { /* sidecar optional */ }
  console.log(`[build-seo-index] hr-native POIs: ${HR_NATIVE_IDS.size}`);

  // Lite shape — only what slugs.ts / sitemap.ts / page generators need.
  const lite = finalPois.map((p) => ({
    id: p.id,
    type: p.type,
    parent: p.parent,
    coords: p.coords,
    image: p.image,
    frLong: longLang(p, "fr"),
    trLong: longLang(p, "tr"),
    hrLong: HR_NATIVE_IDS.has(p.id),
    coa: p.coa,
    name: p.name,
    hasIndexable: hasIndexable(p),
  }));

  // Regions — match slugs.ts: deRegions + romaniaRegions + hungaryRegions + region/country POIs
  const regionById = new Map<string, POI>();
  for (const r of ([] as POI[]).concat(deRegions as POI[], romaniaRegions as POI[], hungaryRegions as POI[])) {
    if (r && r.id && !regionById.has(r.id)) regionById.set(r.id, r);
  }
  for (const p of finalPois) {
    if (p && (p.type === "region" || p.type === "country") && !regionById.has(p.id!)) {
      regionById.set(p.id!, p);
    }
  }
  const regions = Array.from(regionById.values()).map((r) => ({
    id: r.id, type: r.type, parent: r.parent, name: r.name, coords: r.coords,
  }));

  // Emit as a generated TypeScript module so the data can be imported by both
  // server and client bundles without needing `node:fs` (which Turbopack does
  // not allow in client components). The lite shape (~50K POIs × ~150 bytes)
  // is small enough to fit comfortably in build worker memory.
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const banner = `// AUTO-GENERATED by scripts/build-seo-index.mts. Do not edit by hand.\n// Run that script before any Next.js build so slugs.ts can import this.\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nexport const SEO_POIS: any[] = `;
  const regionsBanner = `;\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nexport const SEO_REGIONS: any[] = `;
  fs.writeFileSync(OUT, banner + JSON.stringify(lite) + regionsBanner + JSON.stringify(regions) + ";\n");
  const mb = (fs.statSync(OUT).size / 1024 / 1024).toFixed(1);
  console.log(`[build-seo-index] wrote ${OUT} (${lite.length} POIs, ${regions.length} regions, ${mb} MB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
