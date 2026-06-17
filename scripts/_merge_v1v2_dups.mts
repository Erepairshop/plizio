// Merge 46 real V1/V2 UK city duplicates: V2 sights -> V1 sidecar (_sights_extra),
// emit the V2 id skip-list (generator drops them) + a V2->V1 redirect map (nginx).
// Coord-gated (<10km) so homonyms (Arad RO/BH etc.) are NOT touched.
import fs from "node:fs";
const mod: any = await import("../lib/visualLab/data/_all_poi_sources.generated");
const all = (mod.ALL_POI_SOURCES as any[]).filter(Boolean);
const byId = new Map(all.map((p) => [p.id, p]));
function hav(a: any, b: any) { if (!a||!b||a.length<2||b.length<2) return 9999; const R=6371,p=Math.PI/180; const d=Math.sin((b[1]-a[1])*p/2)**2+Math.cos(a[1]*p)*Math.cos(b[1]*p)*Math.sin((b[0]-a[0])*p/2)**2; return 2*R*Math.asin(Math.sqrt(d)); }

const pairs: { v1: string; v2: string }[] = [];
for (const p of all) {
  const m = String(p.id).match(/^(.*)-cities-v2$/);
  if (!m) continue;
  const v1 = byId.get(m[1]);
  if (v1 && hav((v1 as any).coords, p.coords) < 10) pairs.push({ v1: m[1], v2: p.id });
}

const extra: Record<string, any> = JSON.parse(fs.readFileSync("public/data/_sights_extra.json", "utf8"));
const norm = (s: string) => (s||"").normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"");
const LANGS = ["de","en","hu","ro"];
let mergedSights = 0, poisGotSights = 0;
const skip: string[] = [];
for (const { v1, v2 } of pairs) {
  skip.push(v2);
  const v2poi = byId.get(v2) as any;
  const v2s = v2poi?.sights;
  if (!v2s || typeof v2s !== "object") continue;
  // existing sight names on V1 (own + already in sidecar)
  const v1poi = byId.get(v1) as any;
  const cur = extra[v1] || {};
  const seen = new Set<string>();
  for (const l of LANGS) for (const s of [...((v1poi?.sights?.[l])||[]), ...((cur[l])||[])]) { const k = norm(s?.name); if (k) seen.add(k); }
  let added = false;
  for (const l of LANGS) {
    const arr = v2s[l]; if (!Array.isArray(arr)) continue;
    const fresh = arr.filter((s: any) => { const k = norm(s?.name); return k && !seen.has(k); });
    if (fresh.length) { cur[l] = ([...(cur[l]||[]), ...fresh]); fresh.forEach((s:any)=>seen.add(norm(s.name))); mergedSights += fresh.length; added = true; }
  }
  if (added) { extra[v1] = cur; poisGotSights++; }
}
fs.writeFileSync("public/data/_sights_extra.json", JSON.stringify(extra));
fs.writeFileSync("public/data/_v1v2_skip.json", JSON.stringify(skip));
console.log(`real pairs: ${pairs.length} | V2 sights merged into V1: ${mergedSights} (${poisGotSights} POIs) | skip-list: ${skip.length}`);
console.log("skip sample:", skip.slice(0,6).join(", "));
