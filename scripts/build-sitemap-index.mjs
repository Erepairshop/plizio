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

// Chunk files: numbered sitemap-N.xml PLUS the fresh-named overflow chunks
// (sitemap-poi-a/b/c.xml) that replace the GSC-poisoned indices 10/11/12 — the
// flatten step renames those so Google actually fetches them (the poisoned
// numbers never download). See flatten-sitemap-paths.mjs + [[gsc-sitemap-stuck-pending]].
const chunks = fs
  .readdirSync(OUT)
  .filter((f) => /^sitemap-(\d+|poi-[a-z]+)\.xml$/.test(f))
  .sort((a, b) => {
    const na = a.match(/^sitemap-(\d+)\.xml$/), nb = b.match(/^sitemap-(\d+)\.xml$/);
    if (na && nb) return parseInt(na[1], 10) - parseInt(nb[1], 10);
    if (na) return -1; // numbered chunks first
    if (nb) return 1;
    return a.localeCompare(b); // then poi-a, poi-b, poi-c
  });

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
// SEO hub pages (country attractions + cities landing pages). Generated FRESH
// from the authoritative _hub_manifest.json (build-country-sights writes it):
// ~193 countries × {attractions,cities} × 4 langs. The old static
// public/sitemap-hubs.xml was stale (72 URLs = 18 countries, attractions only) →
// all cities hubs + non-curated countries were orphaned from Google. 404-safe:
// only slugs whose out/<slug>/index.html actually exists are emitted.
const hubsPath = path.join(OUT, "sitemap-hubs.xml");
try {
  const manPath = [
    path.join(OUT, "data", "_hub_manifest.json"),
    path.resolve(process.cwd(), "public", "data", "_hub_manifest.json"),
  ].find((p) => fs.existsSync(p));
  if (manPath) {
    const man = JSON.parse(fs.readFileSync(manPath, "utf8"));
    const seen = new Set();
    const hubUrls = [];
    for (const isoCode of Object.keys(man)) {
      for (const cat of Object.keys(man[isoCode] || {})) {
        for (const lang of Object.keys(man[isoCode][cat] || {})) {
          const slug = man[isoCode][cat][lang];
          if (!slug || seen.has(slug)) continue;
          if (!fs.existsSync(path.join(OUT, slug, "index.html"))) continue; // 404-safe
          seen.add(slug);
          hubUrls.push(`${SITE}/${slug}/`);
        }
      }
    }
    if (hubUrls.length) {
      const lm = iso(new Date());
      const hxml =
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        hubUrls.map((u) => `  <url><loc>${u}</loc><lastmod>${lm}</lastmod></url>`).join("\n") +
        "\n</urlset>\n";
      fs.writeFileSync(hubsPath, hxml, "utf8");
      console.log(`[build-sitemap-index] regenerated sitemap-hubs.xml from manifest: ${hubUrls.length} hub URLs`);
    }
  }
} catch (e) {
  console.error("[build-sitemap-index] hub manifest -> sitemap-hubs.xml failed:", e.message);
}
if (fs.existsSync(hubsPath)) {
  entries.push({ loc: `${SITE}/sitemap-hubs.xml`, lastmod: iso(fs.statSync(hubsPath).mtime) });
}

// Beach-hub pages (build-beach-hub.mts → out/sitemap-beach.xml). Optional.
const beachPath = path.join(OUT, "sitemap-beach.xml");
if (fs.existsSync(beachPath)) {
  entries.push({ loc: `${SITE}/sitemap-beach.xml`, lastmod: iso(fs.statSync(beachPath).mtime) });
}

// Standalone sight pages (build-sight-pages.mts → out/sitemap-sightpages.xml). Optional.
const sightPath = path.join(OUT, "sitemap-sightpages.xml");
if (fs.existsSync(sightPath)) {
  entries.push({ loc: `${SITE}/sitemap-sightpages.xml`, lastmod: iso(fs.statSync(sightPath).mtime) });
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries.map((e) => `  <sitemap><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></sitemap>`).join("\n") +
  "\n</sitemapindex>\n";

fs.writeFileSync(path.join(OUT, "sitemap.xml"), xml, "utf8");
console.log(`[build-sitemap-index] wrote sitemap.xml index: ${chunks.length} data chunks + image sitemap`);
