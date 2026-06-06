// Build a static spatial grid index of ALL sights for the client-side
// "nearby sights within N km" filter on POI pages (and later the route planner).
//
// Output: public/data/sight-grid/<lang>/<latCell>_<lngCell>.json
//   cell key = floor(lat/0.5) + "_" + floor(lng/0.5)  (0.5 deg ~ 55 km lat)
//   entry  = [name, lat, lng, category, parentUrlPath|null, sv(0|1)]
// Sight coords convention: [lng, lat]. Dedup per cell by name+coord@4dp.
import fs from "node:fs";
import path from "node:path";

const LANGS = ["de", "hu", "ro", "en"] as const;
const CELL = 0.5;

const mod: any = await import("../lib/visualLab/data/_all_poi_sources.generated");
const URLS: Record<string, Record<string, string>> = JSON.parse(
  fs.readFileSync(path.resolve("public/data/_poi-url-index.json"), "utf-8"),
);
let SV_OK: Record<string, 1> = {};
try { SV_OK = JSON.parse(fs.readFileSync(path.resolve("public/data/sight-sv.json"), "utf-8")); } catch {}

type Entry = [string, number, number, string, string | null, number];
// lang -> cellKey -> dedupKey -> entry
const grid: Record<string, Map<string, Map<string, Entry>>> = {};
for (const l of LANGS) grid[l] = new Map();
// "<lang>|<cell>|<dedupKey>" -> rovid leiras (a <cell>d.json sidecarhoz)
const descs = new Map<string, string>();

let total = 0;
for (const p of mod.ALL_POI_SOURCES as any[]) {
  const s = p?.sights;
  if (!s || typeof s !== "object") continue;
  for (const l of LANGS) {
    const arr = s[l];
    if (!Array.isArray(arr)) continue;
    const purl = URLS[p.id]?.[l] || null;
    for (const it of arr) {
      const c = it?.coords;
      if (!Array.isArray(c) || c.length !== 2) continue;
      const [lng, lat] = c;
      if (typeof lat !== "number" || typeof lng !== "number") continue;
      if (Math.abs(lat) > 90 || Math.abs(lng) > 180) continue;
      const name = typeof it.name === "string" ? it.name : "";
      if (!name || name.length < 3) continue;
      const cell = `${Math.floor(lat / CELL)}_${Math.floor(lng / CELL)}`;
      const dk = `${name.toLowerCase()}|${lat.toFixed(4)},${lng.toFixed(4)}`;
      let m = grid[l].get(cell);
      if (!m) { m = new Map(); grid[l].set(cell, m); }
      if (m.has(dk)) continue;
      const sv = SV_OK[`${lat.toFixed(4)},${lng.toFixed(4)}`] ? 1 : 0;
      m.set(dk, [name, +lat.toFixed(5), +lng.toFixed(5), it.category || "landmark", purl, sv]);
      // Rovid leiras a kattintasra-kibomlo blokkhoz — kulon <cell>d.json
      // sidecarba kerul (index-aligned), hogy a fo cella-fajl kicsi maradjon.
      const txt = typeof it.text === "string" ? it.text.trim() : "";
      descs.set(`${l}|${cell}|${dk}`, txt.length > 280 ? txt.slice(0, 277).replace(/\s+\S*$/, "") + "…" : txt);
      total++;
    }
  }
}

const outRoot = path.resolve("public/data/sight-grid");
fs.rmSync(outRoot, { recursive: true, force: true });
let files = 0; let bytes = 0; let descBytes = 0;
for (const l of LANGS) {
  const dir = path.join(outRoot, l);
  fs.mkdirSync(dir, { recursive: true });
  for (const [cell, m] of grid[l]) {
    const j = JSON.stringify([...m.values()]);
    fs.writeFileSync(path.join(dir, `${cell}.json`), j);
    files++; bytes += j.length;
    // index-aligned desc sidecar (csak kattintaskor toltodik a kliensen)
    const dj = JSON.stringify([...m.keys()].map((dk) => descs.get(`${l}|${cell}|${dk}`) || ""));
    fs.writeFileSync(path.join(dir, `${cell}d.json`), dj);
    descBytes += dj.length;
  }
}
console.log(`sight-grid: ${total} entries | ${files} cell files | ${(bytes / 1024 / 1024).toFixed(1)} MB grid + ${(descBytes / 1024 / 1024).toFixed(1)} MB desc`);
