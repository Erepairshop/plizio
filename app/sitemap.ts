import type { MetadataRoute } from "next";
import { getGitLastMod } from "@/lib/seo/lastmod";
import { SITE_URL, hasIndexableContent } from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  pois,
  regions,
} from "@/lib/seo/slugs";

export const dynamic = "force-static";

// Google: 50,000 URLs MAX per sitemap. Chunk to 40k to leave safety margin.
const CHUNK_SIZE = 40_000;

export async function generateSitemaps() {
  // Compute how many chunks are needed (rough estimate; safe upper bound).
  // root + countries + states + indexable POIs × 4 langs
  const indexablePois = pois.filter(
    (poi) => poi && poi.type !== "region" && poi.type !== "country" && hasIndexableContent(poi),
  );
  const totalUrls = 100 /* roots+countries+states */ + indexablePois.length * SUPPORTED_LANGS.length;
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

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const countryUrls = SUPPORTED_LANGS.flatMap((lang) => [
    createEntry(buildCountryPath(lang, "germany"), "app/[lang]/[country]/page.tsx", 1),
    createEntry(buildCountryPath(lang, "romania"), "app/[lang]/[country]/page.tsx", 1),
    createEntry(buildCountryPath(lang, "hungary"), "app/[lang]/[country]/page.tsx", 1),
  ]);

  const rootUrls = [
    createEntry("/", "app/page.tsx", 1),
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

  const stateUrls = SUPPORTED_LANGS.flatMap((lang) =>
    regions.map((state) => createEntry(buildStatePath(lang, state.id), "app/[lang]/[country]/[state]/page.tsx", 0.8)),
  );

  // SEO: csak az indexálható (megfelelő tartalmú) POI-kat tesszük a sitemap-ba.
  // Az üres POI-k a robots:noindex flag-et kapnak a page.tsx metadata-jában.
  const indexablePois = pois.filter(
    (poi) => poi && poi.type !== "region" && poi.type !== "country" && hasIndexableContent(poi),
  );
  const poiUrls = SUPPORTED_LANGS.flatMap((lang) =>
    indexablePois.map((poi) =>
      createEntry(buildPoiPath(lang, poi), "app/[lang]/[country]/[state]/[poi]/page.tsx", 0.6),
    ),
  );

  const all = [...rootUrls, ...countryUrls, ...stateUrls, ...poiUrls];
  // Chunk: id 0 = first 40k URLs, id 1 = next 40k, etc.
  const start = id * CHUNK_SIZE;
  return all.slice(start, start + CHUNK_SIZE);
}
