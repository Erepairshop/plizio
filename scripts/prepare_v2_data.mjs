// Build _all_v2_pois.json from poiExtra*V2.ts files + fix country-only parents
// to nearest state code via coord lookup.
// Run via: npx tsx scripts/prepare_v2_data.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(__dirname, "..", "lib", "visualLab", "data");

// === STEP 1: Build V1 region centroid table ===
const states = {}; // "AT" -> [{id:"AT-9", lng, lat}, ...]
const v1Files = fs.readdirSync(DATA)
  .filter((f) => f.endsWith(".ts") && !f.includes("V2") && !f.includes(".bak"));
for (const f of v1Files) {
  const text = fs.readFileSync(path.join(DATA, f), "utf8");
  const regionRe = /id:\s*"([A-Z]{2,3}-[A-Za-z0-9_-]+)"[^}]*?type:\s*"region"[^}]*?parent:\s*"([A-Z]{2,3})"[^}]*?coords:\s*\[\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\]/gs;
  let m;
  while ((m = regionRe.exec(text))) {
    const [, sid, cc, lng, lat] = m;
    (states[cc] = states[cc] || []).push({ id: sid, lng: +lng, lat: +lat });
  }
}
// HU legacy (lowercase ids like "budapest")
const hu = fs.readFileSync(path.join(DATA, "hungaryPoi.ts"), "utf8");
const huRe = /id:\s*"([a-z][a-z-]+)"[^}]*?type:\s*"region"[^}]*?parent:\s*"HU(?:-[A-Z]+)?"[^}]*?coords:\s*\[\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\]/gs;
let hm;
while ((hm = huRe.exec(hu))) {
  (states.HU = states.HU || []).push({ id: hm[1], lng: +hm[2], lat: +hm[3] });
}
console.log(`Loaded states for ${Object.keys(states).length} countries`);

function nearestState(cc, lng, lat) {
  const list = states[cc];
  if (!list) return null;
  let best = null, bd2 = Infinity;
  for (const s of list) {
    const d2 = (s.lng - lng) ** 2 + (s.lat - lat) ** 2;
    if (d2 < bd2) { bd2 = d2; best = s.id; }
  }
  return best;
}

// === STEP 2: Load all V2 POI files via dynamic import (dedup by id, first-wins) ===
const files = fs.readdirSync(DATA)
  .filter((f) => /^poiExtra.*V2\.ts$/.test(f) && !f.includes(".bak"))
  .sort();
console.log(`Loading ${files.length} V2 files...`);

const all = [];
const seenIds = new Set();
let loaded = 0;
let dupSkipped = 0;
let recoveredViaStrip = 0;
for (const f of files) {
  const fp = path.join(DATA, f);
  let mod;
  try {
    mod = await import(pathToFileURL(fp).href);
  } catch (e) {
    // 474 V2 files use `import { POI } from './poi'` (value-import) instead of
    // `import type { POI }` — Node ESM cannot resolve the bare `./poi` so the
    // whole file is silently skipped. Fallback: strip that import line, write
    // to a temp file, retry. Recovers ~474 POI files worth (~thousands of POIs).
    try {
      const raw = fs.readFileSync(fp, "utf-8");
      const stripped = raw.replace(/^\s*import\s+(?:type\s+)?\{?[^}]*\}?\s+from\s+["']\.\/poi["'];?/m, "");
      const tmp = fp + ".prep.tmp.ts";
      fs.writeFileSync(tmp, stripped);
      try {
        mod = await import(pathToFileURL(tmp).href);
        recoveredViaStrip++;
      } finally {
        fs.unlinkSync(tmp);
      }
    } catch (e2) {
      console.warn(`  ${f}: ERR ${String(e).slice(0, 120)}`);
      continue;
    }
  }
  try {
    const arrName = Object.keys(mod).find((k) => k !== "default" && Array.isArray(mod[k]));
    if (!arrName) continue;
    for (const p of mod[arrName]) {
      if (p && p.id) {
        if (seenIds.has(p.id)) { dupSkipped++; continue; }
        seenIds.add(p.id);
      }
      all.push(p);
    }
    loaded++;
    if (loaded % 200 === 0) console.log(`  [${loaded}/${files.length}] +${all.length} POIs (skipped ${dupSkipped} dups)`);
  } catch (e) {
    console.warn(`  ${f}: ITER ERR ${String(e).slice(0, 120)}`);
  }
}
console.log(`Recovered via import-strip fallback: ${recoveredViaStrip} files`);
console.log(`Dedup: skipped ${dupSkipped} duplicate-id POIs during aggregation`);

// === STEP 3: Fix country-only parents ===
let fixed = 0;
const cc2Re = /^[A-Z]{2,3}$/;
for (const poi of all) {
  if (!poi || typeof poi !== "object") continue;
  const p = poi.parent;
  if (!p || !cc2Re.test(p)) continue;
  let coords = Array.isArray(poi.coords) ? poi.coords : null;
  if (!coords && poi.coordinates && typeof poi.coordinates.lat === "number") {
    coords = [poi.coordinates.lng, poi.coordinates.lat];
  }
  if (!coords || coords.length < 2) continue;
  const ns = nearestState(p, +coords[0], +coords[1]);
  if (ns) { poi.parent = ns; fixed++; }
}
console.log(`Parent-fix: ${fixed} POIs updated`);

// === STEP 4: Write JSON in CHUNKS (fixed 11 chunks; empty padding if fewer POIs) ===
// allCountryPois.ts imports 11 fixed chunk filenames, so we ALWAYS write 11.
const CHUNK_SIZE = 5000;
const FIXED_CHUNKS = 11;
for (let i = 0; i < FIXED_CHUNKS; i++) {
  const chunk = all.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
  const name = `_all_v2_pois_${String(i).padStart(2, "0")}.json`;
  const fp = path.join(DATA, name);
  fs.writeFileSync(fp, JSON.stringify(chunk));
  console.log(`  chunk ${i}: ${chunk.length} POIs → ${name} (${(fs.statSync(fp).size / 1024 / 1024).toFixed(1)} MB)`);
}
console.log(`\nTotal: ${all.length} POIs across ${FIXED_CHUNKS} fixed chunks`);
