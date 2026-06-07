#!/usr/bin/env node
// Post-build: generate out/sitemap.xml (the sitemap INDEX) from the actual
// flattened chunk files present in out/. Next 16 static export omits the index,
// and the old approach copied a HARDCODED public/sitemap.xml that was frozen at
// 9 chunks (0-8) while the data grew to 12+ chunks — silently orphaning the
// tail chunks (incl. all /hr/ URLs) from Google. This scans reality instead.
// Run AFTER flatten-sitemap-paths.mjs (chunks renamed) — image sitemap is always
// generated, so its entry is appended unconditionally.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve(process.cwd(), process.env.OUT_DIR || "out");
const SITE = "https://plizio.com";

const chunks = fs
  .readdirSync(OUT)
  .filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

if (chunks.length === 0) {
  console.error("[build-sitemap-index] ERROR: no sitemap-N.xml chunks found in out/");
  process.exit(1);
}

// lastmod per entry: a chunk fajl mtime-ja — valtozas-jel a Googlenak, enelkul
// a naponta letoltott index "valtozatlannak" tunik es az uj chunkok (10/11)
// hetekig pending-ben ragadhatnak.
const iso = (d) => d.toISOString().slice(0, 19) + "+00:00";
const entries = chunks.map((f) => ({
  loc: `${SITE}/${f}`,
  lastmod: iso(fs.statSync(path.join(OUT, f)).mtime),
}));
const imgPath = path.join(OUT, "sitemap-images.xml");
entries.push({
  loc: `${SITE}/sitemap-images.xml`, // always produced by generate-image-sitemap.mts
  lastmod: iso(fs.existsSync(imgPath) ? fs.statSync(imgPath).mtime : new Date()),
});

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries.map((e) => `  <sitemap><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></sitemap>`).join("\n") +
  "\n</sitemapindex>\n";

fs.writeFileSync(path.join(OUT, "sitemap.xml"), xml, "utf8");
console.log(`[build-sitemap-index] wrote sitemap.xml index: ${chunks.length} data chunks + image sitemap`);
