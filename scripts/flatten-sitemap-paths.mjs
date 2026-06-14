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

// Chunk indices 10/11/12 are PERMANENTLY poisoned in Google Search Console:
// they were once submitted individually while 404-ing, and GSC keeps them stuck
// `pending:true` (never downloaded) — delete+resubmit on the SAME filename does
// NOT clear it (confirmed over weeks). A FRESH filename gets fetched in ~1 min
// (proven 2026-06-14: sitemap-poi-a/c read in 60s with identical content).
// So these three indices map to fresh names that have no stuck GSC history.
// 0-9 stay numbered (they work + are indexed); 13+ are fresh numbers → fine via
// the index. NEVER serve sitemap-10/11/12.xml again. See [[gsc-sitemap-stuck-pending]].
// poi-b also got stuck (was individually submitted in testing) → retired, use a
// fresh name poi-d for index 11. NEVER individually submit any chunk again —
// rely on index discovery only.
const POISONED = { 10: "sitemap-poi-a.xml", 11: "sitemap-poi-d.xml", 12: "sitemap-poi-c.xml" };
const chunkName = (n) => POISONED[n] || `sitemap-${n}.xml`;

let moved = 0;
for (const f of fs.readdirSync(SITEMAP_DIR)) {
  const m = f.match(/^(\d+)\.xml$/);
  if (!m) continue;
  const src = path.join(SITEMAP_DIR, f);
  const dst = path.join(OUT, chunkName(Number(m[1])));
  fs.renameSync(src, dst);
  moved++;
}
try { fs.rmdirSync(SITEMAP_DIR); } catch {}

if (fs.existsSync(INDEX)) {
  const before = fs.readFileSync(INDEX, "utf8");
  const after = before.replace(
    /https:\/\/plizio\.com\/sitemap\/(\d+)\.xml/g,
    (_, n) => `https://plizio.com/${chunkName(Number(n))}`,
  );
  if (after !== before) fs.writeFileSync(INDEX, after);
}

console.log(`[flatten-sitemap] moved ${moved} files, rewrote index`);
