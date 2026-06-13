// Pre-build POI id → canonical URL per lang map, consumed by the Next React routes
// (category/country/state pages) at build time AND by the static map generator.
//
// CRITICAL: this MUST agree with generate-poi-html.mts on which POI instance (→ which
// parent → which path) wins per id, otherwise the React routes link to a path the
// generator never wrote → 404. To guarantee that, we load the EXACT same full-POI set
// (loadFullPois) and apply the SAME eligibility gate + buildPoiPath as the generator.
// The generator OVERWRITES this file post-Next-build with its authoritative version
// (id → actually-written path); this temp index just has to match for the 4 core langs
// the React landing routes render. 2026-06-13. See CLAUDE.md 404-MEGELŐZÉS.
//
// Run via `npx tsx scripts/build-poi-url-index.mts`.
// Output: public/data/_poi-url-index.json
import * as fs from "node:fs";
import * as path from "node:path";
import * as _s from "../lib/seo/slugs";
import * as _loader from "./_load-full-pois";

const s: any = (_s as any).default ?? _s;
const _l: any = (_loader as any).default ?? _loader;
const loadFullPois: () => Promise<any[]> = _l.loadFullPois;
const hasIndexableContent: (poi: any) => boolean = _l.hasIndexableContent;
const LANGS = ["de", "hu", "ro", "en"] as const;

const pois = await loadFullPois();

const idx: Record<string, { de?: string; hu?: string; ro?: string; en?: string }> = {};
let ok = 0, skipped = 0;

for (const poi of pois) {
  if (!poi || !poi.id) continue;
  // Same eligibility gate as generate-poi-html.mts `eligible` filter — so the index
  // contains an entry for EXACTLY the POIs whose pages get written.
  if (poi.type === "region" || poi.type === "country") { skipped++; continue; }
  if (!poi.parent) { skipped++; continue; }
  if (!hasIndexableContent(poi)) { skipped++; continue; }
  // Orphan parent → getCountryId would fall back to "germany" → /deutschland/ort/ 404.
  if (s.getCountryIdStrict(poi.parent) == null) { skipped++; continue; }
  const entry: any = {};
  let any = false;
  for (const lang of LANGS) {
    try {
      const p = s.buildPoiPath(lang, poi);
      if (p && typeof p === "string") { entry[lang] = p; any = true; }
    } catch {
      // ignore per-lang failures
    }
  }
  if (any) { idx[poi.id] = entry; ok++; }
  else skipped++;
}

const outPath = path.join(process.cwd(), "public", "data", "_poi-url-index.json");
fs.writeFileSync(outPath, JSON.stringify(idx), "utf8");
const sz = fs.statSync(outPath).size;
console.log(`POI URL index: ${ok} indexable / ${skipped} skipped, ${(sz/1024/1024).toFixed(1)}MB → ${outPath}`);
