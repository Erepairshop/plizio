// Pre-build POI id → canonical URL per lang map for use by static map generator.
// Run via `npx tsx scripts/build-poi-url-index.mts`.
// Output: public/data/_poi-url-index.json
import * as fs from "node:fs";
import * as path from "node:path";
import * as _s from "../lib/seo/slugs";

const s: any = (_s as any).default ?? _s;
const LANGS = ["de", "hu", "ro", "en"] as const;

const idx: Record<string, { de?: string; hu?: string; ro?: string; en?: string }> = {};
let ok = 0, skipped = 0;

for (const poi of s.pois) {
  if (!poi || !poi.id) continue;
  if (poi.type === "country" || poi.type === "region") continue;
  if (poi.hasIndexable === false) { skipped++; continue; }
  // Orphan parent (unresolvable → buildPoiPath would route to /deutschland/ort/ which 404s).
  // Exclude so no internal link points at a non-existent page (2026-06-12).
  if (!poi.parent || s.getCountryIdStrict(poi.parent) == null) { skipped++; continue; }
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
