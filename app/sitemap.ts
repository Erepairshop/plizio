import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  pois,
  regions,
} from "@/lib/seo/slugs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const countryUrls = SUPPORTED_LANGS.flatMap((lang) => [
    {
      url: `${SITE_URL}${buildCountryPath(lang, "germany")}`,
      lastModified,
      priority: 1,
    },
    {
      url: `${SITE_URL}${buildCountryPath(lang, "romania")}`,
      lastModified,
      priority: 1,
    },
    {
      url: `${SITE_URL}${buildCountryPath(lang, "hungary")}`,
      lastModified,
      priority: 1,
    },
  ]);

  const rootUrls = [
    { url: SITE_URL, lastModified, priority: 1 },
    { url: `${SITE_URL}/learn`, lastModified, priority: 0.9 },
    { url: `${SITE_URL}/europe-map`, lastModified, priority: 0.9 },
  ];

  const stateUrls = SUPPORTED_LANGS.flatMap((lang) =>
    regions.map((state) => ({
      url: `${SITE_URL}${buildStatePath(lang, state.id)}`,
      lastModified,
      priority: 0.8,
    })),
  );

  const poiUrls = SUPPORTED_LANGS.flatMap((lang) =>
    pois
      .filter((poi) => poi && poi.type !== "region" && poi.type !== "country")
      .map((poi) => ({
        url: `${SITE_URL}${buildPoiPath(lang, poi)}`,
        lastModified,
        priority: 0.6,
      })),
  );

  return [...rootUrls, ...countryUrls, ...stateUrls, ...poiUrls];
}
