// Export all POIs (id, name, coords, type, parent, existing population) for the
// global population coord-join. Run: NODE_OPTIONS=--max-old-space-size=12288 npx tsx scripts/_export_cities.mts
import fs from "node:fs";
import * as loader from "./_load-full-pois";

const _L: any = (loader as any).default ?? loader;
const pois: any[] = await _L.loadFullPois();
const out: any[] = [];
for (const p of pois) {
  if (!p || !Array.isArray(p.coords) || p.coords.length < 2) continue;
  const t = String(p.type || "");
  const id = String(p.id || "");
  // settlement-ish: city POIs by id convention OR settlement types
  const isCity = /(^city-|-cities?-|-city-|^town-|-towns?-)/i.test(id) ||
    /\b(city|town|village|municipality|locality|capital|commune|gemeinde|ort)\b/i.test(t);
  if (!isCity) continue;
  out.push({
    id,
    name: p.name?.en || p.name?.de || p.name || id,
    coords: [Number(p.coords[0]), Number(p.coords[1])],
    type: t,
    parent: p.parent || "",
    pop: typeof p.population === "number" ? p.population : null,
  });
}
fs.writeFileSync("scripts/_all_city_pois.json", JSON.stringify(out));
console.log(`total pois: ${pois.length} | city-ish exported: ${out.length}`);
console.log(`-> scripts/_all_city_pois.json`);
