#!/usr/bin/env node
/**
 * Post-build sitemap cleaner.
 *
 * The Next sitemap is generated before the POI HTML overlay and before the live
 * nginx cleanup maps are considered. This script rewrites the generated page
 * sitemap URL sets so they only advertise URLs that the final release can serve
 * as indexable canonical HTML.
 */
import fs from "node:fs";
import path from "node:path";

const SITE_URL = (process.env.SITE_URL || process.env.SITE_ORIGIN || "https://plizio.com").replace(/\/+$/, "");
const OUT_DIR = path.resolve(process.cwd(), process.env.OUT_DIR || "out");

function xmlDecode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function normalizePath(p) {
  if (!p.startsWith("/")) p = `/${p}`;
  return p.replace(/\/{2,}/g, "/");
}

function urlPath(u) {
  const p = new URL(u).pathname;
  try {
    return normalizePath(decodeURI(p));
  } catch {
    return normalizePath(p);
  }
}

function canonicalComparable(u) {
  const parsed = new URL(u);
  let p = parsed.pathname || "/";
  if (!path.posix.extname(p) && !p.endsWith("/")) p += "/";
  parsed.pathname = p;
  parsed.hash = "";
  return parsed.toString();
}

function htmlFileFor(pathname) {
  const rel = pathname.replace(/^\/+/, "");
  if (!rel) return path.join(OUT_DIR, "index.html");
  if (pathname.endsWith("/")) return path.join(OUT_DIR, rel, "index.html");
  const html = path.join(OUT_DIR, `${rel}.html`);
  if (fs.existsSync(html)) return html;
  return path.join(OUT_DIR, rel, "index.html");
}

function canonicalOf(html) {
  const tag = /<link\b[^>]*rel=["']canonical["'][^>]*>/i.exec(html)
    || /<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/i.exec(html);
  if (!tag) return null;
  const href = /\bhref=["']([^"']+)["']/i.exec(tag[0]);
  return href ? xmlDecode(href[1]) : null;
}

function hasNoindex(html) {
  const robots = /<meta\b[^>]*name=["'](?:robots|googlebot)["'][^>]*>/ig;
  let m;
  while ((m = robots.exec(html))) {
    const content = /\bcontent=["']([^"']+)["']/i.exec(m[0]);
    if (content && /\bnoindex\b/i.test(content[1])) return true;
  }
  return false;
}

function loadMapPaths(file) {
  const set = new Set();
  if (!file || !fs.existsSync(file)) return set;
  for (const raw of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    if (!line || line.startsWith("default")) continue;
    const m = /^["']?(\/[^"'\s;]+)/.exec(line);
    if (m) set.add(normalizePath(m[1]));
  }
  return set;
}

function mapHasPath(paths, pathname) {
  if (paths.has(pathname)) return true;
  if (pathname === "/") return false;
  return pathname.endsWith("/")
    ? paths.has(pathname.slice(0, -1))
    : paths.has(`${pathname}/`);
}

function pageSitemapFiles() {
  return fs.readdirSync(OUT_DIR)
    .map((name) => path.join(OUT_DIR, name))
    .filter((p) => p.endsWith(".xml"))
    .filter((p) => path.basename(p).startsWith("sitemap"))
    .filter((p) => !path.basename(p).startsWith("sitemap-images"));
}

function locFromUrlBlock(block) {
  const m = /<loc>([\s\S]*?)<\/loc>/.exec(block);
  return m ? xmlDecode(m[1].trim()) : "";
}

function splitUrlset(xml) {
  const first = xml.search(/<url\b/i);
  const last = xml.lastIndexOf("</url>");
  if (first < 0 || last < 0) return null;
  const end = last + "</url>".length;
  return {
    prefix: xml.slice(0, first),
    blocks: xml.slice(first, end).match(/<url\b[\s\S]*?<\/url>/g) || [],
    suffix: xml.slice(end),
  };
}

if (!fs.existsSync(OUT_DIR)) {
  console.error(`[sitemap-prune] OUT_DIR does not exist: ${OUT_DIR}`);
  process.exit(1);
}

const map301 = loadMapPaths(process.env.SEO_GATE_301_MAP || "/etc/nginx/plizio_301.map");
const map410 = loadMapPaths(process.env.SEO_GATE_410_MAP || "/etc/nginx/plizio_410.map");
const seen = new Set();
const stats = {
  files: 0,
  kept: 0,
  removedDuplicate: 0,
  removedMissing: 0,
  removedNoindex: 0,
  removedCanonical: 0,
  removedMap301: 0,
  removedMap410: 0,
};

for (const file of pageSitemapFiles()) {
  const xml = fs.readFileSync(file, "utf8");
  if (!/<urlset\b/i.test(xml)) continue;
  const parts = splitUrlset(xml);
  if (!parts) continue;
  stats.files++;
  const kept = [];

  for (const block of parts.blocks) {
    const loc = locFromUrlBlock(block);
    if (!loc || !loc.startsWith(SITE_URL)) continue;
    const pathname = urlPath(loc);

    if (seen.has(loc)) {
      stats.removedDuplicate++;
      continue;
    }
    seen.add(loc);

    if (mapHasPath(map301, pathname)) {
      stats.removedMap301++;
      continue;
    }
    if (mapHasPath(map410, pathname)) {
      stats.removedMap410++;
      continue;
    }

    const htmlPath = htmlFileFor(pathname);
    if (!fs.existsSync(htmlPath)) {
      stats.removedMissing++;
      continue;
    }
    const html = fs.readFileSync(htmlPath, "utf8");
    if (hasNoindex(html)) {
      stats.removedNoindex++;
      continue;
    }
    const canonical = canonicalOf(html);
    if (!canonical || canonicalComparable(canonical) !== canonicalComparable(loc)) {
      stats.removedCanonical++;
      continue;
    }

    kept.push(block);
    stats.kept++;
  }

  fs.writeFileSync(file, `${parts.prefix}${kept.join("\n")}${kept.length ? "\n" : ""}${parts.suffix}`, "utf8");
}

console.log("[sitemap-prune]", JSON.stringify(stats));
if (stats.kept === 0) {
  console.error("[sitemap-prune] no URLs kept; refusing release");
  process.exit(1);
}
