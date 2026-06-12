#!/usr/bin/env node
// Compute the set of POI ids whose CONTENT changed between two git refs, for the
// delta-deploy path (generate-poi-html.mts POI_IDS_FILE). Conservative: if a
// POI-affecting change can't be mapped to specific ids, exit 3 → caller does FULL regen.
//
// Usage: node scripts/compute-changed-pois.mjs <BEFORE> <AFTER> <OUTFILE>
//   writes one POI id per line to OUTFILE, prints a summary.
//   exit 0 = delta ids written (possibly empty); exit 3 = FULL regen required.
import { execSync } from "node:child_process";
import fs from "node:fs";

const [BEFORE, AFTER, OUTFILE] = process.argv.slice(2);
if (!BEFORE || !AFTER || !OUTFILE) {
  console.error("usage: compute-changed-pois.mjs BEFORE AFTER OUTFILE");
  process.exit(2);
}
const FULL = (msg) => { console.error(`[delta] FULL regen required: ${msg}`); process.exit(3); };
const sh = (cmd) => execSync(cmd, { encoding: "utf8", maxBuffer: 1 << 30 });

let changed;
try {
  changed = sh(`git diff --name-only ${BEFORE} ${AFTER}`).split("\n").map((s) => s.trim()).filter(Boolean);
} catch (e) {
  FULL(`git diff failed: ${e.message}`);
}
console.log(`[delta] ${changed.length} changed files`);

// ── classifiers ──────────────────────────────────────────────────────────────
const isPoiTs = (f) => /^lib\/visualLab\/data\/.*[Pp]oi.*\.ts$/.test(f) && !f.endsWith(".lite.ts") && !f.includes(".bak") && !f.includes(".before_");
// JSON sidecars keyed by POI id (flat object {poiId: value})
const isFlatPoiJson = (f) =>
  /^public\/data\/sights\/.*\.json$/.test(f) ||
  /^public\/data\/poi-faqs.*\.json$/.test(f) ||
  /^public\/data\/poi-yearly-highlights.*\.json$/.test(f) ||
  /^public\/data\/sight-image-map\.json$/.test(f) ||
  /^public\/data\/official-links\.json$/.test(f);
// Per-id-file sidecars: filename (or its dir) is the POI id
const perIdFile = (f) => {
  let m;
  if ((m = f.match(/^public\/data\/city-tips\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/itinerary[^/]*\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/sight-pages\/([^/]+)\//))) return m[1]; // host id
  return null;
};
// Files that, if changed, force FULL regen (template / SEO chain / global).
const forcesFull = (f) =>
  /^scripts\/generate-poi-html\./.test(f) ||
  /^scripts\/build-seo-index\./.test(f) ||
  /^scripts\/split_pois_by_country\./.test(f) ||
  /^scripts\/prepare_v2_data\./.test(f) ||
  /^lib\/seo\//.test(f) ||
  /^components\/seo\//.test(f) ||
  /^app\/\[lang\]/.test(f) ||
  /^public\/poi-static\/poi\.css$/.test(f);

// ── parse POI .ts (TS object-literal array; keys may be unquoted) → {id: rawObjectText} ──
// Brace-walks the top-level array, keying each POI object by its `id` and storing the raw
// object text. apply scripts rewrite files with stable formatting, so unchanged POIs keep
// byte-identical text → raw-text equality reliably flags only genuinely changed POIs.
function parsePoiTs(text) {
  const map = new Map();
  const as = text.indexOf("= [");
  if (as < 0) return map;
  let i = text.indexOf("[", as);
  if (i < 0) return map;
  i++;
  let depth = 0, objStart = -1, ins = false, esc = false, q = "";
  for (; i < text.length; i++) {
    const c = text[i];
    if (ins) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === q) ins = false;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { ins = true; q = c; continue; }
    if (c === "{") { if (depth === 0) objStart = i; depth++; }
    else if (c === "}") {
      if (--depth === 0 && objStart >= 0) {
        const seg = text.slice(objStart, i + 1);
        const m = seg.match(/^\{\s*["']?id["']?\s*:\s*["']([^"']+)["']/);
        if (m) map.set(m[1], seg);
        objStart = -1;
      }
    } else if (c === "]" && depth === 0) break;
  }
  return map;
}
const showOld = (f) => { try { return sh(`git show ${BEFORE}:${f}`); } catch { return null; } }; // null = new file
const readNew = (f) => { try { return fs.readFileSync(f, "utf8"); } catch { return null; } };

const ids = new Set();
for (const f of changed) {
  if (forcesFull(f)) FULL(`template/SEO file changed: ${f}`);

  if (isPoiTs(f)) {
    const oldT = showOld(f), newT = readNew(f);
    if (newT == null) continue; // deleted file → handled by rsync --delete of release; skip
    const oldM = oldT ? parsePoiTs(oldT) : new Map();
    const newM = parsePoiTs(newT);
    if (newM.size === 0 && newT.length > 200) FULL(`could not parse POI ids in ${f}`);
    for (const [id, j] of newM) if (oldM.get(id) !== j) ids.add(id);
    continue;
  }

  const pid = perIdFile(f);
  if (pid) { ids.add(pid); continue; }

  if (isFlatPoiJson(f)) {
    const oldT = showOld(f), newT = readNew(f);
    if (newT == null) continue;
    let oldO = {}, newO = {};
    try { if (oldT) oldO = JSON.parse(oldT); newO = JSON.parse(newT); }
    catch { FULL(`could not parse JSON sidecar ${f}`); }
    const keys = new Set([...Object.keys(oldO), ...Object.keys(newO)]);
    for (const k of keys) if (JSON.stringify(oldO[k]) !== JSON.stringify(newO[k])) ids.add(k);
    continue;
  }
  // Non-POI-affecting change (UI, config, etc.) → ignore for POI gen.
}

const list = [...ids].sort();
fs.writeFileSync(OUTFILE, list.join("\n") + (list.length ? "\n" : ""), "utf8");
console.log(`[delta] ${list.length} changed POI ids → ${OUTFILE}`);
