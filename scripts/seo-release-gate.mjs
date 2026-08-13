#!/usr/bin/env node
/**
 * Deploy-time SEO gate for the final static export.
 *
 * Checks the exact files that are about to become the release:
 * - page sitemap duplicates
 * - sitemap URL has an exported HTML file
 * - HTML is indexable and has an exact canonical
 * - sitemap URL is not shadowed by live nginx 301/410 cleanup maps
 * - relative image references point at exported files or the refreshed image manifest
 *
 * The image check is reported by default. Set SEO_GATE_STRICT_IMAGES=1 to make
 * missing images fatal after the current image debt is cleaned.
 */
import fs from "node:fs";
import path from "node:path";

const SITE_URL = (process.env.SITE_URL || process.env.SITE_ORIGIN || "https://plizio.com").replace(/\/+$/, "");
const OUT_DIR = path.resolve(process.cwd(), process.env.OUT_DIR || "out");
const STRICT_IMAGES = process.env.SEO_GATE_STRICT_IMAGES === "1";
const CHECK_IMAGES = process.env.SEO_GATE_CHECK_IMAGES !== "0";
const SAMPLE_LIMIT = Number(process.env.SEO_GATE_SAMPLE_LIMIT || 20);
const MAX_URLS = Number(process.env.SEO_GATE_MAX_URLS || 0);
// Keep the gate scoped to the urlsets intentionally published by sitemap.xml.
const PAGE_SITEMAP_FILE_RE = /^sitemap-(?:\d+|poi-[a-z]+|hubs|beach|sightpages)\.xml$/;

function fail(message) {
  console.error(`\n[seo-gate] FAIL: ${message}`);
  process.exitCode = 1;
}

function xmlDecode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function extractUrlLocs(xml) {
  const locs = [];
  const urlRe = /<url\b[\s\S]*?<\/url>/g;
  let m;
  while ((m = urlRe.exec(xml))) {
    const loc = /<loc>([\s\S]*?)<\/loc>/.exec(m[0]);
    if (loc) locs.push(xmlDecode(loc[1].trim()));
  }
  return locs;
}

function collectPageSitemapUrls() {
  const files = fs.readdirSync(OUT_DIR)
    .filter((name) => PAGE_SITEMAP_FILE_RE.test(name))
    .map((name) => path.join(OUT_DIR, name))
    .filter((p) => fs.statSync(p).isFile());

  const urls = [];
  for (const file of files) {
    const xml = fs.readFileSync(file, "utf8");
    if (!/<urlset\b/.test(xml)) continue;
    urls.push(...extractUrlLocs(xml).filter((u) => u.startsWith(SITE_URL)));
  }
  return urls;
}

function loadMapPaths(file) {
  const set = new Set();
  if (!file || !fs.existsSync(file)) return set;
  for (const raw of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    if (!line || line.startsWith("default")) continue;
    const m = /^["']?(\/[^"'\s;]+)/.exec(line);
    if (!m) continue;
    set.add(normalizePath(m[1]));
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
  const m = /<link\b[^>]*rel=["']canonical["'][^>]*>/i.exec(html)
    || /<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/i.exec(html);
  if (!m) return null;
  const href = /\bhref=["']([^"']+)["']/i.exec(m[0]);
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

function loadImageManifest() {
  const set = new Set();
  const fp = path.join(process.cwd(), "public", "data", "_image-manifest.json");
  if (!fs.existsSync(fp)) return set;
  try {
    const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
    if (Array.isArray(arr)) for (const f of arr) if (typeof f === "string") set.add(f);
  } catch {}
  return set;
}

function imgSrcs(html) {
  const srcs = [];
  const imgRe = /<img\b[^>]*>/ig;
  let m;
  while ((m = imgRe.exec(html))) {
    const src = /\bsrc=["']([^"']+)["']/i.exec(m[0]);
    if (src) srcs.push(xmlDecode(src[1]));
  }
  return srcs;
}

function imageExists(src, manifest) {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) return true;
  if (/^https?:\/\//i.test(src)) return true;
  const clean = src.split(/[?#]/, 1)[0];
  if (!clean.startsWith("/")) return true;
  const filename = clean.split("/").pop() || "";
  if (clean.startsWith("/poi-images/")) {
    return manifest.has(filename) || fs.existsSync(path.join(OUT_DIR, clean.replace(/^\/+/, "")));
  }
  return fs.existsSync(path.join(OUT_DIR, clean.replace(/^\/+/, "")))
    || fs.existsSync(path.resolve(process.cwd(), "public", clean.replace(/^\/+/, "")));
}

if (!fs.existsSync(OUT_DIR)) {
  fail(`OUT_DIR does not exist: ${OUT_DIR}`);
  process.exit();
}

let urls = collectPageSitemapUrls();
if (MAX_URLS > 0) {
  console.warn(`[seo-gate] sample mode: checking first ${MAX_URLS} of ${urls.length} sitemap URLs`);
  urls = urls.slice(0, MAX_URLS);
}
console.log(`[seo-gate] page sitemap URLs: ${urls.length}`);
if (urls.length === 0) fail("no page sitemap URLs found");

const seen = new Set();
const duplicateUrls = [];

for (const u of urls) {
  if (seen.has(u)) duplicateUrls.push(u);
  seen.add(u);
}

const map301 = loadMapPaths(process.env.SEO_GATE_301_MAP || "/etc/nginx/plizio_301.map");
const map410 = loadMapPaths(process.env.SEO_GATE_410_MAP || "/etc/nginx/plizio_410.map");
console.log(`[seo-gate] nginx maps loaded: 301=${map301.size}, 410=${map410.size}`);

const manifest = loadImageManifest();
const missingFiles = [];
const noindex = [];
const canonicalMissing = [];
const canonicalMismatch = [];
const mapHits301 = [];
const mapHits410 = [];
const missingImages = new Map();
let checkedImages = 0;

for (const u of urls) {
  const pathname = urlPath(u);
  if (mapHasPath(map301, pathname)) mapHits301.push(u);
  if (mapHasPath(map410, pathname)) mapHits410.push(u);

  const htmlPath = htmlFileFor(pathname);
  if (!fs.existsSync(htmlPath)) {
    missingFiles.push(u);
    continue;
  }
  const html = fs.readFileSync(htmlPath, "utf8");
  if (hasNoindex(html)) noindex.push(u);
  const canon = canonicalOf(html);
  if (!canon) canonicalMissing.push(u);
  else if (canonicalComparable(canon) !== canonicalComparable(u)) canonicalMismatch.push(`${u} -> ${canon}`);

  if (CHECK_IMAGES) {
    for (const src of imgSrcs(html)) {
      checkedImages++;
      if (!imageExists(src, manifest)) {
        const arr = missingImages.get(src) || [];
        if (arr.length < 3) arr.push(u);
        missingImages.set(src, arr);
      }
    }
  }
}

function report(name, arr, fatal = true) {
  if (!arr.length) return;
  console.error(`[seo-gate] ${name}: ${arr.length}`);
  for (const item of arr.slice(0, SAMPLE_LIMIT)) console.error(`  - ${item}`);
  if (fatal) process.exitCode = 1;
}

report("duplicate sitemap page URLs", duplicateUrls);
report("sitemap URLs without exported HTML", missingFiles);
report("sitemap URLs with noindex", noindex);
report("sitemap URLs missing canonical", canonicalMissing);
report("sitemap URLs with canonical mismatch", canonicalMismatch);
report("sitemap URLs shadowed by nginx 301 map", mapHits301);
report("sitemap URLs shadowed by nginx 410 map", mapHits410);

if (CHECK_IMAGES) {
  console.log(`[seo-gate] image refs checked: ${checkedImages}, missing unique refs: ${missingImages.size}, strict=${STRICT_IMAGES}`);
  if (missingImages.size) {
    for (const [src, pages] of Array.from(missingImages.entries()).slice(0, SAMPLE_LIMIT)) {
      console.error(`  - ${src} on ${pages[0]}`);
    }
    if (STRICT_IMAGES) process.exitCode = 1;
  }
}

if (process.exitCode) {
  fail("release failed SEO gate");
} else {
  console.log("[seo-gate] OK");
}
