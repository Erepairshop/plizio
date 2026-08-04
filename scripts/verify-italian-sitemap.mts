import * as _sitemap from "../app/sitemap";
import * as _routes from "../lib/seo/routes";
import * as _slugs from "../lib/seo/slugs";

const sitemapModule: any = (_sitemap as any).default?.generateSitemaps
  ? (_sitemap as any).default
  : _sitemap;
const routes: any = (_routes as any).default ?? _routes;
const slugs: any = (_slugs as any).default ?? _slugs;
const sitemap = sitemapModule.default;
const generateSitemaps = sitemapModule.generateSitemaps;
const hasIndexableContent = routes.hasIndexableContent;
const buildPoiPath = slugs.buildPoiPath;
const getCountryIdStrict = slugs.getCountryIdStrict;
const pois = slugs.pois as any[];

const chunks = await generateSitemaps();
const urls = new Set<string>();
for (const chunk of chunks) {
  for (const entry of await sitemap({ id: Promise.resolve(String(chunk.id)) })) {
    urls.add(entry.url);
  }
}
const overflow = await sitemap({ id: Promise.resolve(String(chunks.length)) });
if (overflow.length > 0) {
  console.error(`Sitemap chunk count is too small: ${overflow.length} URL(s) spill into chunk ${chunks.length}`);
  process.exit(1);
}

const expectedPoiUrls = pois
  .filter((poi) =>
    poi &&
    poi.type !== "region" &&
    poi.type !== "country" &&
    poi.parent &&
    getCountryIdStrict(poi.parent) === "italy" &&
    hasIndexableContent(poi),
  )
  .map((poi) => `https://plizio.com${buildPoiPath("it", poi)}`);

const missing = expectedPoiUrls.filter((url) => !urls.has(url));
const expectedSet = new Set(expectedPoiUrls);
const actualItalianPoiUrls = [...urls].filter((url) =>
  url.startsWith("https://plizio.com/it/italia/") &&
  !url.includes("/category/") &&
  url !== "https://plizio.com/it/italia/",
);
const unexpected = actualItalianPoiUrls.filter((url) => !expectedSet.has(url));
const requiredHubs = [
  "https://plizio.com/it/italia/",
  "https://plizio.com/it/italia/category/citta/",
];
for (const url of requiredHubs) {
  if (!urls.has(url)) missing.push(url);
}

if (missing.length > 0) {
  console.error(
    `Italian sitemap verification failed: ${missing.length} missing URL(s), ` +
    `${unexpected.length} unexpected Italian URL(s)`,
  );
  for (const url of missing.slice(0, 20)) console.error(`MISSING ${url}`);
  for (const url of unexpected.slice(0, 20)) console.error(`EXTRA ${url}`);
  process.exit(1);
}

console.log(`Italian sitemap OK: ${expectedPoiUrls.length} POIs, ${chunks.length} XML chunks`);
