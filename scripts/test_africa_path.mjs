// Test: does buildPoiPathById return URL for African POIs?
import { pois } from "../lib/seo/slugs.js";
import { buildPoiPathById } from "../lib/seo/slugs.js";

// Find first African POI
const africanCountries = ["DZ", "EG", "NG", "ZA", "KE", "ET"];
for (const cc of africanCountries) {
  const samples = pois.filter(p => p.id?.toLowerCase().includes(cc.toLowerCase()) || p.parent?.startsWith(cc + "-"));
  console.log(`${cc}: ${samples.length} POIs`);
  for (const p of samples.slice(0, 3)) {
    const path = buildPoiPathById("de", p.id);
    console.log(`  ${p.id} (parent=${p.parent}) -> ${path ?? "NULL"}`);
  }
}
