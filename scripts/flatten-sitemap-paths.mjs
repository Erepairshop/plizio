#!/usr/bin/env node
// Post-build: flatten Next's /sitemap/N.xml into /sitemap-N.xml so Google's
// sitemap directory-scope rule does not silently reject cross-directory URLs.
// Run after `npx next build` against the out/ directory.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const SITEMAP_DIR = path.join(OUT, "sitemap");
const INDEX = path.join(OUT, "sitemap.xml");

if (!fs.existsSync(SITEMAP_DIR)) {
  console.log("[flatten-sitemap] no out/sitemap/ dir, nothing to do");
  process.exit(0);
}

let moved = 0;
for (const f of fs.readdirSync(SITEMAP_DIR)) {
  const m = f.match(/^(\d+)\.xml$/);
  if (!m) continue;
  const src = path.join(SITEMAP_DIR, f);
  const dst = path.join(OUT, `sitemap-${m[1]}.xml`);
  fs.renameSync(src, dst);
  moved++;
}
try { fs.rmdirSync(SITEMAP_DIR); } catch {}

if (fs.existsSync(INDEX)) {
  const before = fs.readFileSync(INDEX, "utf8");
  const after = before.replace(/https:\/\/plizio\.com\/sitemap\/(\d+)\.xml/g, "https://plizio.com/sitemap-$1.xml");
  if (after !== before) fs.writeFileSync(INDEX, after);
}

console.log(`[flatten-sitemap] moved ${moved} files, rewrote index`);
