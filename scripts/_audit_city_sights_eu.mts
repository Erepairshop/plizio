// Audit: EU city-type POIs without sights (post-merge, includes EuNewV1).
import fs from "node:fs";
import path from "node:path";
const mod: any = await import("../lib/visualLab/data/_all_poi_sources.generated");
const ALL: any[] = (mod.ALL_POI_SOURCES as any[]).filter((p) => p?.id);
// EU id set: pois/<ISO>.json splits + EuNewV1 (not split yet)
const EU = new Set(["DE","AT","CH","FR","IT","ES","PT","NL","BE","LU","GB","IE","PL","CZ","SK","HU","RO","SI","HR","RS","BA","ME","MK","AL","XK","BG","GR","DK","SE","NO","FI","IS","EE","LV","LT","UA","BY","MD","CY","MT","AD","MC","SM","VA","LI"]);
const euIds = new Map<string, string>();
const POIS = path.resolve(process.cwd(), "public", "data", "pois");
for (const f of fs.readdirSync(POIS)) {
  const iso = f.replace(".json", "");
  if (!f.endsWith(".json") || !EU.has(iso)) continue;
  const raw: any = JSON.parse(fs.readFileSync(path.join(POIS, f), "utf-8"));
  const list: any[] = Array.isArray(raw) ? raw : (raw?.pois ?? Object.values(raw ?? {}));
  for (const p of list) if (p?.id) euIds.set(p.id, iso);
}
const { euNewV1 } = await import("../lib/visualLab/data/poiExtraEuNewV1");
for (const p of euNewV1 as any[]) if (!euIds.has(p.id)) euIds.set(p.id, (p.id.split("-")[0] || "eunew").toUpperCase().slice(0, 12));
const CITY = new Set(["city","town","village","state-capital","capital","municipality","commune"]);
function hasSights(p: any): boolean {
  const s = p?.sights;
  if (!s || typeof s !== "object") return false;
  return Object.values(s).some((a: any) => Array.isArray(a) && a.length > 0);
}
// id -> best (any source with sights wins)
const byId = new Map<string, any>();
for (const p of ALL) {
  const prev = byId.get(p.id);
  if (!prev || (!hasSights(prev) && hasSights(p))) byId.set(p.id, p);
}
let tot = 0, nosight = 0;
const byCountry = new Map<string, [number, number]>();
for (const [id, iso] of euIds) {
  const p = byId.get(id);
  if (!p || !CITY.has(p.type)) continue;
  tot++;
  const c = byCountry.get(iso) ?? [0, 0];
  c[0]++;
  if (!hasSights(p)) { nosight++; c[1]++; }
  byCountry.set(iso, c);
}
console.log(`EU city-tipusu POI: ${tot} | sights NINCS: ${nosight} (${Math.round(100*nosight/tot)}%)`);
const rows = [...byCountry.entries()].sort((a, b) => b[1][1] - a[1][1]);
for (const [iso, [t, m]] of rows) console.log(`  ${iso.padEnd(12)} ${String(m).padStart(5)} / ${t}`);
