import type { MetadataRoute } from "next";
import { pois, regions } from "@/lib/visualLab/data/poi";
import { SITE_URL } from "@/lib/seo/routes";
import { SUPPORTED_LANGS, buildCountryPath, buildPoiPath, buildStatePath } from "@/lib/seo/slugs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const countryUrls = SUPPORTED_LANGS.map((lang) => ({
    url: `${SITE_URL}${buildCountryPath(lang)}`,
    lastModified,
    priority: 1,
  }));

  const stateUrls = SUPPORTED_LANGS.flatMap((lang) =>
    regions.map((state) => ({
      url: `${SITE_URL}${buildStatePath(lang, state.id)}`,
      lastModified,
      priority: 0.8,
    })),
  );

  const poiUrls = SUPPORTED_LANGS.flatMap((lang) =>
    pois
      .filter((poi) => poi.type !== "region")
      .map((poi) => ({
        url: `${SITE_URL}${buildPoiPath(lang, poi)}`,
        lastModified,
        priority: 0.6,
      })),
  );

  return [...countryUrls, ...stateUrls, ...poiUrls];
}
