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

// Amenities / businesses that are never tourist sights (any category).
const AMENITY_PATTERNS: RegExp[] = [
  /\bapotheke\b/i, /\bpharmac/i, /\bgyógyszertár\b/i, /\bsupermark/i, /\bsupermercat/i, /\bbäckerei\b/i, /\bbakery\b/i, /\bmetzgerei\b/i,
  /\bhotel\b/i, /\bhostel\b/i, /\bmotel\b/i, /\bguest ?house\b/i, /\bpension\b/i, /\bapartments?\b/i, /\bcamping\b/i,
  /\brestaurant\b/i, /\bpizzeri/i, /\btrattoria\b/i, /\bcaf[ée]\b/i, /\bkávézó\b/i, /\bbistro\b/i, /\bimbiss\b/i, /\bfast food\b/i,
  /\bbar\b/i, /\bpub\b/i, /\bkocsma\b/i, /\bnightclub\b/i, /\bbank\b/i, /\bsparkasse\b/i, /\batm\b/i, /\bbankomat\b/i,
  /\btankstelle\b/i, /\bgas station\b/i, /\bpetrol\b/i, /\bbenzinkút\b/i,
  /\bschule\b/i, /\bschool\b/i, /\biskola\b/i, /\bgymnasium\b/i, /\buniversit/i, /\bkindergarten\b/i, /\bóvoda\b/i,
  /\bkrankenhaus\b/i, /\bhospital\b/i, /\bkórház\b/i, /\bclinic\b/i, /\bklinik\b/i, /\bpraxis\b/i, /\bdentist\b/i,
  /\bfriseur\b/i, /\bsalon\b/i, /\bgmbh\b/i, /\bd\.o\.o\b/i, /\bs\.r\.l\b/i, /\bs\.p\.a\b/i, /\bkft\b/i,
  /\boffice\b/i, /\bbüro\b/i, /\bwarehouse\b/i, /\blagerhaus\b/i, /\bfactory\b/i, /\bfabrik\b/i, /\bgyár\b/i,
  /\bpost ?office\b/i, /\bpostamt\b/i, /\bposta\b/i, /\bshop\b/i, /\bstore\b/i, /\bgeschäft\b/i, /\bboutique\b/i, /\bsalon\b/i,
];

// Generic common-noun "names" — not a real named sight (whole normalized name).
const GENERIC_NAMES = new Set([
  "bunker", "lapidar", "vjeter", "fairgrounds", "central", "block", "ruins", "ruine", "rom",
  "monument", "denkmal", "memorial", "mahnmal", "gedenkstein", "gedenktafel", "statue", "skulptur", "sculpture",
  "fountain", "brunnen", "kreuz", "cross", "museum", "kirche", "church", "chapel", "kapelle", "crkva",
  "park", "garten", "garden", "spielplatz", "markt", "market", "rathaus", "friedhof", "cemetery", "temető",
  "grab", "grave", "tower", "turm", "gate", "tor", "bridge", "brücke", "most", "wc", "toilets", "toilet",
  "alexandria", "gërmadha", "spomenik", "kuca", "kuća", "dom", "spomen", "haus", "house", "villa", "vila",
  "denkmäler", "info", "information", "kiosk", "pavilion", "pavillon", "bushaltestelle", "parkplatz",
]);

// Catch-all OSM categories that hide a lot of junk — scrutinize name quality.
const WEAK_CATEGORIES = new Set([
  "landmark", "natural", "building", "house", "historical", "civic", "attraction", "other", "yes", "",
]);

function norm(s: string): string {
  return s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

// True if this sight is junk / low-quality and should NOT be shown.
// Name+category based only (does NOT use wikidata). Aggressive on weak categories.
export function isJunkSight(name: unknown, category?: unknown): boolean {
  if (typeof name !== "string" || !name.trim()) return true;
  const cat = typeof category === "string" ? category : "";
  const n = name.trim();
  // amenities/businesses: never a sight, regardless of category
  if (AMENITY_PATTERNS.some((re) => re.test(n))) return true;
  // hard junk name patterns (playgrounds, pools, parking, numbered series)
  if (!SAFE_CATEGORIES.has(cat) && JUNK_PATTERNS.some((re) => re.test(n))) return true;
  if (n.length < 3) return true;
  // Latin-script quality heuristics ONLY run when the name has Latin letters.
  // Non-Latin names (Cyrillic/Greek/etc.) are kept here — they get romanized at
  // render and we can't judge "genericness" reliably across scripts.
  const ascii = norm(n).replace(/[^a-z0-9 ]/g, "").trim();
  if (ascii && /[a-z]/.test(ascii)) {
    if (GENERIC_NAMES.has(ascii)) return true;
    if (WEAK_CATEGORIES.has(cat)) {
      const single = ascii.split(/\s+/).filter(Boolean).length < 2;
      if (single && (ascii.length < 5 || /^(der|die|das|the|el|la|le|il|a|az)$/.test(ascii))) return true;
      if (/^\d/.test(ascii) || ascii.replace(/[^0-9]/g, "").length > ascii.length / 2) return true;
    }
  }
  return false;
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
