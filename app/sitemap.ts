import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getGitLastMod } from "@/lib/seo/lastmod";
import {
  VISUAL_LAB_LANGS,
  VISUAL_LAB_SEO_SUBJECTS,
  getVisualLabStaticParams,
  visualLabGameUrl,
  visualLabSubjectUrl,
} from "@/lib/visualLab/seoCatalog";
import { discoverStaticMapPaths } from "@/lib/seo/staticMapSitemap";
import { SITE_URL, hasIndexableContent, stateHasIndexablePois } from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  COUNTRY_SLUGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  countrySlugFor,
  extraLangsFor,
  getCountryIdStrict,
  pois,
  regions,
  type Lang,
} from "@/lib/seo/slugs";
import {
  TYPE_BUCKETS,
  TYPE_INDEX_COUNTRIES,
  isIndexableCategory,
  typeSlugFor,
} from "@/lib/seo/typeIndex";

// All country-hub IDs (one /<lang>/<country>/ page each, per generateStaticParams).
const ALL_COUNTRY_IDS = Object.keys(COUNTRY_SLUGS);
// Csak azokat a state-eket tesszuk a sitemapbe, amiknek van indexalhato POI-juk
// (a 0-POI traditional-region overlay-oldalak thin-ek → noindex + sitemap-drop).
const INDEXABLE_REGIONS = regions.filter((r) => stateHasIndexablePois(r.id));
// Category hubs strong enough to be indexing targets. We still build legacy
// 4-19 item pages, but they are noindex and intentionally absent here.
const CATEGORY_PARAMS: { countryId: string; bucket: string }[] = [];
for (const countryId of TYPE_INDEX_COUNTRIES) {
  for (const bucket of Object.keys(TYPE_BUCKETS)) {
    if (isIndexableCategory(countryId, bucket)) {
      CATEGORY_PARAMS.push({ countryId, bucket });
    }
  }
}

const STATIC_MAP_PATHS = discoverStaticMapPaths();
const STATIC_ROOT_PAGES = [
  { url: "/", source: "app/page.tsx", priority: 1 },
  { url: "/de/", source: "app/de/page.tsx", priority: 1 },
  { url: "/hu/", source: "app/hu/page.tsx", priority: 1 },
  { url: "/ro/", source: "app/ro/page.tsx", priority: 1 },
  { url: "/en/", source: "app/en/page.tsx", priority: 1 },
  { url: "/learn/", source: "app/learn/page.tsx", priority: 0.9 },
  { url: "/astro-ai/", source: "app/astro-ai/page.tsx", priority: 0.9 },
  { url: "/aitest/", source: "app/aitest/page.tsx", priority: 0.9 },
  { url: "/postcard/", source: "app/postcard/page.tsx", priority: 0.8 },
] as const;

const GAME_ROUTES = [
  "astromath", "astro-ai", "astro-biologie", "astro-geographie", "astro-geschichte",
  "astro-physik", "astro-sachkunde", "astrodeutsch", "astroenglish", "astrokemia",
  "astromagyar", "astroromana", "astrinformatika", "codekids",
  "deutschtest", "mathtest", "romaniantest", "biologietest", "physiktest", "kemiatest",
  "geographietest", "geschichtetest", "sachkundetest", "englishtest", "informatikatest",
  "aitest", "codekidstest",
] as const;

const VISUAL_LAB_HUB_PATHS = VISUAL_LAB_LANGS.map((lang) => `/${lang}/visual-lab/`);
const VISUAL_LAB_SUBJECT_PATHS = VISUAL_LAB_SEO_SUBJECTS.flatMap((subject) =>
  subject.locales.map((lang) => visualLabSubjectUrl(lang, subject.id)),
);
const VISUAL_LAB_GAME_PATHS = getVisualLabStaticParams().map(({ lang, subjectId, gameId }) =>
  visualLabGameUrl(lang, subjectId, gameId),
);
const VISUAL_LAB_PATHS = [
  ...VISUAL_LAB_HUB_PATHS,
  ...VISUAL_LAB_SUBJECT_PATHS,
  ...VISUAL_LAB_GAME_PATHS,
];
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
    (poi) => poi && poi.type !== "region" && poi.type !== "country" && hasIndexableContent(poi) && !!poi.parent && getCountryIdStrict(poi.parent) != null,
  );
  const ROOT_FIXED = STATIC_ROOT_PAGES.length + STATIC_MAP_PATHS.length;
  const GAME_FIXED = GAME_ROUTES.length;
  // Extra per-POI lang URLs (fr/tr/hr) — emitted by the sitemap() extra-lang loop,
  // so they MUST be counted here too or the last chunk gets dropped.
  let extraLangUrls = 0;
  for (const poi of indexablePois) extraLangUrls += extraLangsFor(poi).length;
  const italyRegions = INDEXABLE_REGIONS.filter((state) => getCountryIdStrict(state.id) === "italy").length;
  const italyCategories = CATEGORY_PARAMS.filter(({ countryId }) => countryId === "italy").length;
  const spainRegions = INDEXABLE_REGIONS.filter((state) => getCountryIdStrict(state.id) === "spain").length;
  const spainCategories = CATEGORY_PARAMS.filter(({ countryId }) => countryId === "spain").length;
  const portugalRegions = INDEXABLE_REGIONS.filter((state) => getCountryIdStrict(state.id) === "portugal").length;
  const totalUrls =
    ROOT_FIXED +
    GAME_FIXED * SUPPORTED_LANGS.length +
    VISUAL_LAB_PATHS.length +
    ALL_COUNTRY_IDS.length * SUPPORTED_LANGS.length +
    CATEGORY_PARAMS.length * SUPPORTED_LANGS.length +
    INDEXABLE_REGIONS.length * SUPPORTED_LANGS.length +
    indexablePois.length * SUPPORTED_LANGS.length +
    extraLangUrls +
    SIGHT_PAGES.length * SUPPORTED_LANGS.length;
  // +3: the it/es/pt country hubs pushed onto countryUrls below.
  const totalWithNativeHubs = totalUrls + 3 + italyRegions + italyCategories + spainRegions + spainCategories + portugalRegions;
  const n = Math.max(1, Math.ceil(totalWithNativeHubs / CHUNK_SIZE));
  return Array.from({ length: n }, (_, id) => ({ id }));
}

type SitemapEntry = MetadataRoute.Sitemap[number];

function createEntry(url: string, sourceFile: string | null, priority: number): SitemapEntry {
  // trailingSlash:true → a generált oldal és a canonical MINDIG "/"-re végződik
  // (pl. /sanmarino-map/). A sitemapnek is ezzel kell egyeznie, különben a Google a
  // per-nélküli URL-t "Alternative page with proper canonical tag"-ként nem indexeli.
  const slashed = url.endsWith("/") ? url : `${url}/`;
  const entry: SitemapEntry = {
    url: `${SITE_URL}${slashed}`,
    priority,
  };
  // Only attach lastmod when a source file uniquely represents this URL.
  // Shared dynamic templates are not URL-level modification signals; omitting an
  // inaccurate date is explicitly safer than marking 250k pages as newly changed.
  if (sourceFile) entry.lastModified = getGitLastMod(sourceFile);
  return entry;
}

export default async function sitemap(props: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const id = parseInt(await props.id, 10) || 0;
  // All ~180 country hubs (not just DE/RO/HU) — each builds a /<lang>/<country>/ page.
  const countryUrls = SUPPORTED_LANGS.flatMap((lang) =>
    ALL_COUNTRY_IDS.map((cid) =>
      createEntry(buildCountryPath(lang, cid), null, 0.9),
    ),
  ).concat([
    createEntry(buildCountryPath("it", "italy"), null, 0.9),
    createEntry(buildCountryPath("es", "spain"), null, 0.9),
    createEntry(buildCountryPath("pt", "portugal"), null, 0.9),
  ]);
  // Category hub pages: /<lang>/<country>/category/<type>/ (cities, castles, mountains, …).
  const categoryUrls = SUPPORTED_LANGS.flatMap((lang) =>
    CATEGORY_PARAMS.map(({ countryId, bucket }) =>
      createEntry(
        `/${lang}/${countrySlugFor(lang as Lang, countryId)}/category/${typeSlugFor(bucket, lang as Lang)}/`,
        null,
        0.7,
      ),
    ),
  );
  for (const { countryId, bucket } of CATEGORY_PARAMS) {
    if (countryId === "italy") {
      categoryUrls.push(createEntry(`/it/italia/category/${typeSlugFor(bucket, "it")}/`, null, 0.7));
    } else if (countryId === "spain") {
      categoryUrls.push(createEntry(`/es/espana/category/${typeSlugFor(bucket, "es")}/`, null, 0.7));
    } else if (countryId === "portugal") {
      categoryUrls.push(createEntry(`/pt/portugal/category/${typeSlugFor(bucket, "pt")}/`, null, 0.7));
    }
  }

  const rootUrls: SitemapEntry[] = STATIC_ROOT_PAGES.map((page) =>
    createEntry(page.url, page.source, page.priority),
  );
  for (const mapPath of STATIC_MAP_PATHS) rootUrls.push(createEntry(mapPath, null, 0.9));

  // Per-language learning game + test routes. Each has an app/[lang]/<route>/
  // SSG wrapper that prerenders localized static HTML + a 4-lang hreflang cluster
  // (de/hu/ro/en), so Google can surface them in all four markets.
  const gameUrls = SUPPORTED_LANGS.flatMap((lang) =>
    GAME_ROUTES.map((route) =>
      createEntry(`/${lang}/${route}/`, `app/[lang]/${route}/page.tsx`, 0.85),
    ),
  );

  const visualLabUrls = VISUAL_LAB_PATHS.map((route) => createEntry(route, null, 0.75));

  const stateUrls = SUPPORTED_LANGS.flatMap((lang) =>
    INDEXABLE_REGIONS.map((state) => createEntry(buildStatePath(lang, state.id), null, 0.8)),
  );
  for (const state of INDEXABLE_REGIONS) {
    const countryId = getCountryIdStrict(state.id);
    if (countryId === "italy") stateUrls.push(createEntry(buildStatePath("it", state.id), null, 0.8));
    if (countryId === "spain") stateUrls.push(createEntry(buildStatePath("es", state.id), null, 0.8));
    if (countryId === "portugal") stateUrls.push(createEntry(buildStatePath("pt", state.id), null, 0.8));
  }

  // SEO: csak az indexálható (megfelelő tartalmú) POI-kat tesszük a sitemap-ba.
  // Az üres POI-k a robots:noindex flag-et kapnak a page.tsx metadata-jában.
  const indexablePois = pois.filter(
    (poi) => poi && poi.type !== "region" && poi.type !== "country" && hasIndexableContent(poi) && !!poi.parent && getCountryIdStrict(poi.parent) != null,
  );
  const poiUrls: ReturnType<typeof createEntry>[] = [];
  for (const lang of SUPPORTED_LANGS) {
    for (const poi of indexablePois) {
      const p = buildPoiPath(lang, poi);
      if (BAD_URLS.has(p)) continue;
      poiUrls.push(createEntry(p, null, 0.6));
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
      poiUrls.push(createEntry(p, null, 0.55));
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
      sightUrls.push(createEntry(url, null, 0.55));
    }
  }

  // poiUrls can have 100k+ entries; array-spread with >65k items hits V8's
  // argument-count limit (RangeError). Use push-loop instead.
  const all: ReturnType<typeof createEntry>[] = [];
  const seenUrls = new Set<string>();
  const appendUnique = (entries: ReturnType<typeof createEntry>[]) => {
    for (const entry of entries) {
      if (seenUrls.has(entry.url)) continue;
      seenUrls.add(entry.url);
      all.push(entry);
    }
  };
  appendUnique(rootUrls);
  appendUnique(gameUrls);
  appendUnique(visualLabUrls);
  appendUnique(countryUrls);
  appendUnique(categoryUrls);
  appendUnique(stateUrls);
  appendUnique(poiUrls);
  appendUnique(sightUrls);
  // Chunk: id 0 = first 20k URLs, id 1 = next 20k, etc.
  const start = id * CHUNK_SIZE;
  return all.slice(start, start + CHUNK_SIZE);
}
