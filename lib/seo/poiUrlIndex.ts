// SERVER-ONLY build-time helper. Resolves a POI id → the canonical path that the page
// generator ACTUALLY wrote, by reading public/data/_poi-url-index.json (produced by
// scripts/build-poi-url-index.mts before the Next build, from the same loadFullPois set
// as generate-poi-html.mts). React hub routes (category/country/state) MUST link via this
// instead of computing buildPoiPath on their own poisLite POI object, because the poisLite
// dedup can pick a different parent for the same id → a path the generator never wrote → 404.
//
// Returns null when the id has no written page (deduped away / not eligible); callers must
// then SKIP rendering the link rather than emit a 404. 2026-06-13.
//
// Do NOT import this from client components — it uses node:fs. Server components / route
// handlers / generateStaticParams only.
import fs from "node:fs";
import path from "node:path";
import { buildPoiPath, type Lang } from "@/lib/seo/slugs";

type UrlIndex = Record<string, Partial<Record<Lang, string>>>;

let _idx: UrlIndex | null = null;
function loadIndex(): UrlIndex {
  if (_idx) return _idx;
  try {
    const fp = path.resolve(process.cwd(), "public", "data", "_poi-url-index.json");
    _idx = JSON.parse(fs.readFileSync(fp, "utf-8")) as UrlIndex;
  } catch {
    _idx = {};
  }
  return _idx;
}

/**
 * Authoritative internal-link path for a POI, or null if no page was written for it.
 * Falls back to buildPoiPath ONLY when the id is present in the index but the specific
 * lang entry is missing (rare); a completely absent id returns null → caller skips.
 */
export function poiHref(lang: Lang, poi: { id?: string; parent?: string }): string | null {
  if (!poi?.id) return null;
  const entry = loadIndex()[poi.id];
  if (!entry) return null; // no written page → never link (would 404)
  if (entry[lang]) return entry[lang]!;
  // id is in the index (page exists for some langs) but not this one — derive defensively.
  try {
    const p = buildPoiPath(lang, poi as never);
    return p && typeof p === "string" ? p : (entry.en ?? null);
  } catch {
    return entry.en ?? null;
  }
}
