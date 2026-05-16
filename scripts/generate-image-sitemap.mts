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
const hasIndexableContent = (p: any): boolean => {
  for (const f of ["description", "descriptionAdvanced", "facts", "factsAdvanced"]) {
    const obj = p?.[f];
    if (!obj) continue;
    for (const l of SUPPORTED_LANGS) {
      const v = obj[l];
      if (typeof v === "string" && v.length > 0) return true;
      if (Array.isArray(v) && v.length > 0) return true;
    }
  }
  return false;
};

const ENT: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };
const x = (s: string): string => s.replace(/[&<>"']/g, (c) => ENT[c] || c);

const eligible = pois.filter((p: any) =>
  p && p.parent && p.type !== "region" && p.type !== "country" && hasIndexableContent(p) && p.image,
);
console.log(`Eligible POIs with image: ${eligible.length}`);

const lines: string[] = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
];

let count = 0;
for (const poi of eligible) {
  for (const lang of SUPPORTED_LANGS) {
    const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
    const imgUrl = `${SITE_URL}${poi.image}`;
    const name = (poi.name?.[lang] || poi.name?.de || poi.id) as string;
    lines.push(
      `<url><loc>${x(url)}</loc><image:image><image:loc>${x(imgUrl)}</image:loc><image:title>${x(name)}</image:title></image:image></url>`,
    );
    count++;
  }
}
lines.push("</urlset>");

const outPath = path.join(OUT_DIR, "sitemap-images.xml");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath} — ${count} <url> entries (${(fs.statSync(outPath).size / 1024 / 1024).toFixed(1)} MB)`);
