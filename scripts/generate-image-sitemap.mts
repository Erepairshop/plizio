// Generates /sitemap-images.xml — image sitemap extension for Google Image discovery.
// One <url> per POI page with its hero image (multi-lang: same image, all 4 URLs).
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as _slugs from "../lib/seo/slugs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(process.cwd(), process.env.OUT_DIR || "out");
const SITE_URL = "https://plizio.com";

const s: any = (_slugs as any).default ?? _slugs;
const pois = s.pois;
const SUPPORTED_LANGS = s.SUPPORTED_LANGS as string[];
const buildPoiPath = s.buildPoiPath;
// build-seo-index.mts already computes `hasIndexable` on each lite POI by
// looking at the FULL POI's description/descriptionAdvanced/facts/factsAdvanced.
// The lite shape only exposes the boolean — use it directly.
const hasIndexableContent = (p: any): boolean => p?.hasIndexable === true;

const ENT: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };
const x = (s: string): string => s.replace(/[&<>"']/g, (c) => ENT[c] || c);

function collectIndexablePageUrls(): Set<string> {
  const urls = new Set<string>();
  for (const name of fs.readdirSync(OUT_DIR)) {
    if (!/^sitemap(?:-(?!images)[^.]+)?\.xml$/.test(name)) continue;
    const xml = fs.readFileSync(path.join(OUT_DIR, name), "utf8");
    if (!/<urlset\b/i.test(xml)) continue;
    for (const block of xml.match(/<url\b[\s\S]*?<\/url>/g) || []) {
      const loc = /<loc>([\s\S]*?)<\/loc>/.exec(block);
      if (loc) urls.add(loc[1].trim().replace(/&amp;/g, "&"));
    }
  }
  return urls;
}

const imageManifest = new Set<string>();
try {
  const manifestPath = path.resolve(process.cwd(), "public", "data", "_image-manifest.json");
  if (fs.existsSync(manifestPath)) {
    const arr = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (Array.isArray(arr)) {
      for (const f of arr) if (typeof f === "string" && f.endsWith(".webp")) imageManifest.add(f);
    }
  }
} catch (e) {
  console.warn(`[image-sitemap] failed to read _image-manifest.json: ${(e as Error).message}`);
}
if (imageManifest.size < 1000) {
  throw new Error(`[image-sitemap] image manifest is missing or implausibly small: ${imageManifest.size}`);
}

// The page sitemaps have already been pruned against the final release. Reuse
// that exact URL set so the image sitemap cannot re-introduce a missing,
// noindex, non-canonical or nginx-shadowed language variant.
const indexablePageUrls = collectIndexablePageUrls();
if (indexablePageUrls.size === 0) {
  throw new Error("[image-sitemap] no indexable page URLs found after sitemap pruning");
}

function fileExistsForUrl(urlPath: string): boolean {
  const clean = urlPath.replace(/^https?:\/\/[^/]+/i, "").split(/[?#]/, 1)[0];
  if (!clean.startsWith("/")) return false;
  const rel = clean.replace(/^\/+/, "");
  return fs.existsSync(path.join(OUT_DIR, rel)) || fs.existsSync(path.resolve(process.cwd(), "public", rel));
}

function resolveImagePath(poi: any): string | null {
  if (!poi?.image || typeof poi.image !== "string") return null;
  if (/^https?:\/\//i.test(poi.image)) return null;
  const clean = (poi.image.startsWith("/") ? poi.image : `/${poi.image}`).split(/[?#]/, 1)[0];
  const filename = clean.split("/").pop() || "";

  // /poi-images/ is served from shared storage on the VPS, so the refreshed
  // manifest is the source of truth before the release symlink is created.
  if (clean.startsWith("/poi-images/")) {
    return imageManifest.has(filename) ? `/poi-images/${filename}` : null;
  }

  // Static images that are part of the export can be verified directly.
  return fileExistsForUrl(clean) ? clean : null;
}

const eligible = pois
  .filter((p: any) => p && p.parent && p.type !== "region" && p.type !== "country" && hasIndexableContent(p))
  .map((poi: any) => ({ poi, image: resolveImagePath(poi) }))
  .filter((row: any) => !!row.image);
console.log(`Eligible POIs with verified image: ${eligible.length} (manifest: ${imageManifest.size})`);

// Build all entries first
const entries: string[] = [];
const seenPages = new Set<string>();
for (const { poi, image } of eligible) {
  for (const lang of SUPPORTED_LANGS) {
    const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
    if (!indexablePageUrls.has(url) || seenPages.has(url)) continue;
    seenPages.add(url);
    const imgUrl = `${SITE_URL}${image}`;
    const name = (poi.name?.[lang] || poi.name?.de || poi.id) as string;
    entries.push(
      `<url><loc>${x(url)}</loc><image:image><image:loc>${x(imgUrl)}</image:loc><image:title>${x(name)}</image:title></image:image></url>`,
    );
  }
}
console.log(`Total image URL entries: ${entries.length}`);

// Split into chunks of 40,000 (under Google's 50K limit, leaves headroom)
const CHUNK_SIZE = 40000;
const chunks: string[][] = [];
for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
  chunks.push(entries.slice(i, i + CHUNK_SIZE));
}

const imagesDir = path.join(OUT_DIR, "sitemap-images");
fs.mkdirSync(imagesDir, { recursive: true });

const chunkPaths: string[] = [];
chunks.forEach((chunk, idx) => {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...chunk,
    "</urlset>",
  ];
  const outPath = path.join(imagesDir, `${idx}.xml`);
  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  const sizeMB = (fs.statSync(outPath).size / 1024 / 1024).toFixed(1);
  console.log(`  sitemap-images/${idx}.xml: ${chunk.length} entries (${sizeMB} MB)`);
  chunkPaths.push(`${SITE_URL}/sitemap-images/${idx}.xml`);
});

// Write sitemap-images.xml as a sitemap-index pointing to the chunks
const indexLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...chunkPaths.map((u) => `  <sitemap><loc>${x(u)}</loc></sitemap>`),
  "</sitemapindex>",
];
const indexPath = path.join(OUT_DIR, "sitemap-images.xml");
fs.writeFileSync(indexPath, indexLines.join("\n"), "utf8");
console.log(`Wrote sitemap-images.xml (index) — ${chunks.length} chunks, ${entries.length} total URLs`);
