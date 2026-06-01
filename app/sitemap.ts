import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getGitLastMod } from "@/lib/seo/lastmod";
import { SITE_URL, hasIndexableContent } from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  COUNTRY_SLUGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  countrySlugFor,
  extraLangsFor,
  pois,
  regions,
  type Lang,
} from "@/lib/seo/slugs";
import {
  TYPE_BUCKETS,
  TYPE_INDEX_COUNTRIES,
  getPoisForCountryBucket,
  typeSlugFor,
} from "@/lib/seo/typeIndex";

// All country-hub IDs (one /<lang>/<country>/ page each, per generateStaticParams).
const ALL_COUNTRY_IDS = Object.keys(COUNTRY_SLUGS);
// Category-hub params that actually build (TYPE_INDEX_COUNTRIES × buckets with ≥4 POIs).
// Mirrors generateStaticParams in app/[lang]/[country]/category/[type]/page.tsx.
const CATEGORY_PARAMS: { countryId: string; bucket: string }[] = [];
for (const countryId of TYPE_INDEX_COUNTRIES) {
  for (const bucket of Object.keys(TYPE_BUCKETS)) {
    if (getPoisForCountryBucket(countryId, bucket).length >= 4) {
      CATEGORY_PARAMS.push({ countryId, bucket });
    }
  }
}

// Tier-1 sight page index — loaded at build time. Each entry produces
// /<lang>/<country>/<state>/<host-poi>/sight/<slug>/ in the sitemap.
type SightIdxEntry = { host_id: string; sight_name: string; slug: string };
let SIGHT_PAGES: SightIdxEntry[] = [];
try {
  const fp = path.resolve(process.cwd(), "public", "data", "sight-pages", "_index.json");
  if (fs.existsSync(fp)) SIGHT_PAGES = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}

// 404/410 blocklist from scripts/audit-sitemap-404.sh — excluded from sitemap.
// File is optional; if missing, no filtering applied.
const BAD_URLS = new Set<string>();
try {
  const bp = path.resolve(process.cwd(), "public", "data", "_bad-poi-urls.json");
  if (fs.existsSync(bp)) {
    const arr = JSON.parse(fs.readFileSync(bp, "utf-8"));
    if (Array.isArray(arr)) for (const u of arr) BAD_URLS.add(String(u));
  }
} catch {}

export const dynamic = "force-static";

// Google: 50,000 URLs MAX per sitemap. Chunk to 20K for reliable fetches
// (smaller XML = fewer "Konnte nicht abgerufen werden" timeouts in GSC).
const CHUNK_SIZE = 20_000;

export async function generateSitemaps() {
  // Compute EXACT chunk count — match the same URL-set sitemap() will emit.
  // Previous "100" placeholder undercounted by regions.length × 4 langs (~8K),
  // so when totalUrls was JUST over a 20K chunk boundary, ~10K URLs got lost
  // (last chunk wasn't requested, .slice() returned nothing).
  const indexablePois = pois.filter(
    (poi) => poi && poi.type !== "region" && poi.type !== "country" && hasIndexableContent(poi),
  );
  const ROOT_FIXED = 33;     // hardcoded root pages (/, /learn, /europe-map, country maps, ...)
  const GAME_FIXED = 27;     // GAME_ROUTES.length (astro + test routes), emitted per lang
  // Extra per-POI lang URLs (fr/tr/hr) — emitted by the sitemap() extra-lang loop,
  // so they MUST be counted here too or the last chunk gets dropped.
  let extraLangUrls = 0;
  for (const poi of indexablePois) extraLangUrls += extraLangsFor(poi).length;
  const totalUrls =
    ROOT_FIXED +
    GAME_FIXED * SUPPORTED_LANGS.length +
    ALL_COUNTRY_IDS.length * SUPPORTED_LANGS.length +
    CATEGORY_PARAMS.length * SUPPORTED_LANGS.length +
    regions.length * SUPPORTED_LANGS.length +
    indexablePois.length * SUPPORTED_LANGS.length +
    extraLangUrls +
    SIGHT_PAGES.length * SUPPORTED_LANGS.length;
  const n = Math.max(1, Math.ceil(totalUrls / CHUNK_SIZE));
  return Array.from({ length: n }, (_, id) => ({ id }));
}

function createEntry(url: string, sourceFile: string, priority: number) {
  return {
    url: `${SITE_URL}${url === "/" ? "" : url}`,
    lastModified: getGitLastMod(sourceFile),
    priority,
  };
}

export default async function sitemap(props: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const id = parseInt(await props.id, 10) || 0;
  // All ~180 country hubs (not just DE/RO/HU) — each builds a /<lang>/<country>/ page.
  const countryUrls = SUPPORTED_LANGS.flatMap((lang) =>
    ALL_COUNTRY_IDS.map((cid) =>
      createEntry(buildCountryPath(lang, cid), "app/[lang]/[country]/page.tsx", 0.9),
    ),
  );
  // Category hub pages: /<lang>/<country>/category/<type>/ (cities, castles, mountains, …).
  const categoryUrls = SUPPORTED_LANGS.flatMap((lang) =>
    CATEGORY_PARAMS.map(({ countryId, bucket }) =>
      createEntry(
        `/${lang}/${countrySlugFor(lang as Lang, countryId)}/category/${typeSlugFor(bucket, lang as Lang)}/`,
        "app/[lang]/[country]/category/[type]/page.tsx",
        0.7,
      ),
    ),
  );

  const rootUrls = [
    createEntry("/", "app/page.tsx", 1),
    createEntry("/de/", "app/de/page.tsx", 1),
    createEntry("/hu/", "app/hu/page.tsx", 1),
    createEntry("/ro/", "app/ro/page.tsx", 1),
    createEntry("/en/", "app/en/page.tsx", 1),
    createEntry("/learn", "app/learn/page.tsx", 0.9),
    createEntry("/europe-map", "app/europe-map/page.tsx", 0.9),
    createEntry("/deutschland-map", "app/deutschland-map/page.tsx", 0.9),
    createEntry("/magyarorszag-map", "app/magyarorszag-map/page.tsx", 0.9),
    createEntry("/romania-map", "app/romania-map/page.tsx", 0.9),
    createEntry("/france-map", "app/france-map/page.tsx", 0.9),
    createEntry("/italy-map", "app/italy-map/page.tsx", 0.9),
    createEntry("/spain-map", "app/spain-map/page.tsx", 0.9),
    createEntry("/unitedkingdom-map", "app/unitedkingdom-map/page.tsx", 0.9),
    createEntry("/netherlands-map", "app/netherlands-map/page.tsx", 0.9),
    createEntry("/poland-map", "app/poland-map/page.tsx", 0.9),
    createEntry("/austria-map", "app/austria-map/page.tsx", 0.9),
    createEntry("/iceland-map", "app/iceland-map/page.tsx", 0.9),
    createEntry("/malta-map", "app/malta-map/page.tsx", 0.9),
    createEntry("/cyprus-map", "app/cyprus-map/page.tsx", 0.9),
    createEntry("/albania-map", "app/albania-map/page.tsx", 0.9),
    createEntry("/serbia-map", "app/serbia-map/page.tsx", 0.9),
    createEntry("/bosnia-map", "app/bosnia-map/page.tsx", 0.9),
    createEntry("/montenegro-map", "app/montenegro-map/page.tsx", 0.9),
    createEntry("/northmacedonia-map", "app/northmacedonia-map/page.tsx", 0.9),
    createEntry("/kosovo-map", "app/kosovo-map/page.tsx", 0.9),
    createEntry("/liechtenstein-map", "app/liechtenstein-map/page.tsx", 0.9),
    createEntry("/moldova-map", "app/moldova-map/page.tsx", 0.9),
    createEntry("/ukraine-map", "app/ukraine-map/page.tsx", 0.9),
    createEntry("/belarus-map", "app/belarus-map/page.tsx", 0.9),
    createEntry("/andorra-map", "app/andorra-map/page.tsx", 0.9),
    createEntry("/monaco-map", "app/monaco-map/page.tsx", 0.9),
    createEntry("/sanmarino-map", "app/sanmarino-map/page.tsx", 0.9),
    createEntry("/vatican-map", "app/vatican-map/page.tsx", 0.9),
    createEntry("/astro-ai", "app/astro-ai/page.tsx", 0.9),
    createEntry("/aitest", "app/aitest/page.tsx", 0.9),
  ];

  // Per-language learning game + test routes. Each has an app/[lang]/<route>/
  // SSG wrapper that prerenders localized static HTML + a 4-lang hreflang cluster
  // (de/hu/ro/en), so Google can surface them in all four markets.
  const GAME_ROUTES = [
    // astro / interactive games
    "astromath", "astro-ai", "astro-biologie", "astro-geographie", "astro-geschichte",
    "astro-physik", "astro-sachkunde", "astrodeutsch", "astroenglish", "astrokemia",
    "astromagyar", "astroromana", "astrinformatika", "codekids",
    // written school tests
    "deutschtest", "mathtest", "romaniantest", "biologietest", "physiktest", "kemiatest",
    "geographietest", "geschichtetest", "sachkundetest", "englishtest", "informatikatest",
    "aitest", "codekidstest",
  ];
  const gameUrls = SUPPORTED_LANGS.flatMap((lang) =>
    GAME_ROUTES.map((route) =>
      createEntry(`/${lang}/${route}/`, `app/[lang]/${route}/page.tsx`, 0.85),
    ),
  );

  const stateUrls = SUPPORTED_LANGS.flatMap((lang) =>
    regions.map((state) => createEntry(buildStatePath(lang, state.id), "app/[lang]/[country]/[state]/page.tsx", 0.8)),
  );

  // SEO: csak az indexálható (megfelelő tartalmú) POI-kat tesszük a sitemap-ba.
  // Az üres POI-k a robots:noindex flag-et kapnak a page.tsx metadata-jában.
  const indexablePois = pois.filter(
    (poi) => poi && poi.type !== "region" && poi.type !== "country" && hasIndexableContent(poi),
  );
  const poiUrls: ReturnType<typeof createEntry>[] = [];
  for (const lang of SUPPORTED_LANGS) {
    for (const poi of indexablePois) {
      const p = buildPoiPath(lang, poi);
      if (BAD_URLS.has(p)) continue;
      poiUrls.push(createEntry(p, "app/[lang]/[country]/[state]/[poi]/page.tsx", 0.6));
    }
  }
  // Extra langs per POI (fr / tr) — only when descAdv is ≥700 chars in that lang
  // (frLong / trLong flags from build-seo-index) OR when the POI's parent country
  // matches the lang's target (FR-* for fr, DE-* for tr).
  for (const poi of indexablePois) {
    const extras = extraLangsFor(poi);
    for (const lang of extras) {
      const p = buildPoiPath(lang, poi);
      if (BAD_URLS.has(p)) continue;
      poiUrls.push(createEntry(p, "app/[lang]/[country]/[state]/[poi]/page.tsx", 0.55));
    }
  }

  // Tier-1 sight pages: /<lang>/<country>/<state>/<host-poi>/sight/<slug>/
  const sightUrls: ReturnType<typeof createEntry>[] = [];
  const poiById = new Map(pois.filter(p => p?.id).map(p => [p.id, p]));
  for (const lang of SUPPORTED_LANGS) {
    for (const sp of SIGHT_PAGES) {
      const host = poiById.get(sp.host_id);
      if (!host || !host.parent) continue;
      const url = buildPoiPath(lang, host).replace(/\/$/, "") + "/sight/" + sp.slug + "/";
      sightUrls.push(createEntry(url, "scripts/generate-poi-html.mts", 0.55));
    }
  }

  // poiUrls can have 100k+ entries; array-spread with >65k items hits V8's
  // argument-count limit (RangeError). Use push-loop instead.
  const all: ReturnType<typeof createEntry>[] = [];
  for (const u of rootUrls) all.push(u);
  for (const u of gameUrls) all.push(u);
  for (const u of countryUrls) all.push(u);
  for (const u of categoryUrls) all.push(u);
  for (const u of stateUrls) all.push(u);
  for (const u of poiUrls) all.push(u);
  for (const u of sightUrls) all.push(u);
  // Chunk: id 0 = first 40k URLs, id 1 = next 40k, etc.
  const start = id * CHUNK_SIZE;
  return all.slice(start, start + CHUNK_SIZE);
}
