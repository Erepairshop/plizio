// Shared junk-sight filter. OSM dumps pull in many non-tourist "sights":
// playgrounds, pools, reservoirs, minigolf/arcades, parking, amenity areas,
// numbered series (Bunker 303, Mound 94…). High-precision NAME patterns; we
// also protect real categories so genuine landmarks are never dropped.
// Used at POI-load time (generate-poi-html) and by sight-page / country-sights
// builders, so junk never renders and gets no page — without mutating source data.

const JUNK_PATTERNS: RegExp[] = [
  /\bplayground\b/i, /\bplay area\b/i, /\bplay ground\b/i, /\bspielplatz\b/i, /\bspielhalle\b/i,
  /\bpaddling pool\b/i, /\bswimming pool\b/i, /\bswim(?:ming)? club\b/i, /\bschwimmbad\b/i, /\bhallenbad\b/i,
  /\bfreibad\b/i, /\bfreizeitbad\b/i, /\blido\b/i, /\bmain pool\b/i, /\bsolebad\b/i,
  /\breservoir \d+\b/i, /\bamenity area\b/i, /\ballotment/i, /\bkleingart/i,
  /\badventure golf\b/i, /\bmini[- ]?golf\b/i, /\barcade\b/i, /\bbowling\b/i, /\btrampolin/i,
  /\bsports? cent(?:re|er)\b/i, /\bleisure cent(?:re|er)\b/i, /\bfitness\b/i, /\bgym\b/i,
  /\bcar park\b/i, /\bparkplatz\b/i, /\bparking\b/i, /\bskate ?park\b/i,
  /\bbus (?:station|stop)\b/i, /\bbushaltestelle\b/i, /\bsupermarket\b/i, /\bshopping cent(?:re|er)\b/i,
  /\b(?:public )?toilets?\b/i, /\bcampsite\b/i, /\bcaravan park\b/i, /\bholiday park\b/i,
  /^(?:end|mole|lunet|mound|central|block|abschnitt|station)\s*\d+$/i,
  /\b(?:bunker|stellung)\s*\d+/i, /\bbeacon\s*№?\s*\d+/i,
];

// Categories whose entries are NOT pattern-filtered (protects genuine sights).
const SAFE_CATEGORIES = new Set([
  "historical", "religious", "museum", "castle", "fortress", "tower", "landmark",
]);

export function isJunkSight(name: unknown, category?: unknown): boolean {
  if (typeof name !== "string" || !name) return false;
  if (typeof category === "string" && SAFE_CATEGORIES.has(category)) return false;
  return JUNK_PATTERNS.some((re) => re.test(name));
}

// Returns a new array with junk sights removed. Non-array input passes through.
export function stripJunkSights<T extends { name?: unknown; category?: unknown }>(arr: T[] | undefined | null): T[] {
  if (!Array.isArray(arr)) return (arr as T[]) ?? [];
  return arr.filter((s) => !isJunkSight(s?.name, s?.category));
}

// Clean a POI's multi-lang sights object: drop junk AND cap each category to
// `cap` entries (keeps the first N per category by array order = the top ones).
// When the per-lang arrays are aligned (same length, parallel sights), the
// keep/drop decision is computed once on a reference lang and applied by the
// SAME indices to every lang — so name-variant alignment (sAligned) survives.
// Returns the new object + how many sights were removed (counted on the ref lang).
export function cleanSightsObject(
  sObj: Record<string, Array<{ name?: unknown; category?: unknown }>> | null | undefined,
  cap = 3,
): { obj: any; removed: number } {
  if (!sObj || typeof sObj !== "object") return { obj: sObj, removed: 0 };
  const langs = Object.keys(sObj).filter((l) => Array.isArray(sObj[l]));
  if (!langs.length) return { obj: sObj, removed: 0 };
  const lens = langs.map((l) => sObj[l].length);
  const aligned = lens.every((n) => n === lens[0]);
  const catKey = (s: any) => (typeof s?.category === "string" && s.category ? s.category : "_uncat");

  if (aligned) {
    const ref = sObj[langs[0]];
    const counts: Record<string, number> = {};
    const keep: boolean[] = ref.map((s) => {
      if (isJunkSight(s?.name, s?.category)) return false;
      const c = catKey(s);
      counts[c] = (counts[c] || 0) + 1;
      return counts[c] <= cap;
    });
    const removed = keep.filter((k) => !k).length;
    const out: any = {};
    for (const l of Object.keys(sObj)) {
      out[l] = Array.isArray(sObj[l]) ? sObj[l].filter((_, i) => keep[i]) : sObj[l];
    }
    return { obj: out, removed };
  }

  // Misaligned: filter each lang independently (junk + per-lang cap).
  let removed = 0;
  const out: any = {};
  for (const l of Object.keys(sObj)) {
    if (!Array.isArray(sObj[l])) { out[l] = sObj[l]; continue; }
    const counts: Record<string, number> = {};
    const before = sObj[l].length;
    out[l] = sObj[l].filter((s) => {
      if (isJunkSight(s?.name, s?.category)) return false;
      const c = catKey(s);
      counts[c] = (counts[c] || 0) + 1;
      return counts[c] <= cap;
    });
    removed += before - out[l].length;
  }
  return { obj: out, removed };
}
