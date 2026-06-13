// Generate the country-hub config for build-country-sights.mts: every country that has a
// public/data/pois/<ISO>.json gets {iso, mapSlug, names{de,hu,ro,en}}. The builder then
// produces a "Top sights" hub for each (gated by >=25 attractions). Output: scripts/_country_hub_config.json
import * as fs from "node:fs";
import * as path from "node:path";
import * as _slugs from "../lib/seo/slugs";
import * as _routes from "../lib/seo/routes";
import * as _cms from "../lib/seo/countryMapSlug";

const slugs: any = (_slugs as any).default ?? _slugs;
const routes: any = (_routes as any).default ?? _routes;
const cms: any = (_cms as any).default ?? _cms;
const ISO2_TO_COUNTRY: Record<string, string> = slugs.ISO2_TO_COUNTRY;
const getCountryId: (id: string) => string = slugs.getCountryId;
const getCountryCopy: (cid: string, lang: string) => { name: string } = routes.getCountryCopy;
const mapSlugForCountry: (cid: string) => string | null = cms.mapSlugForCountry;
const LANGS = ["de", "hu", "ro", "en"] as const;

const poisDir = path.resolve(process.cwd(), "public/data/pois");
const isos = fs.readdirSync(poisDir).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5));

const out: any[] = [];
const skipped: string[] = [];
for (const iso of isos) {
  let cid = ISO2_TO_COUNTRY[iso] || ISO2_TO_COUNTRY[iso.toUpperCase()];
  if (!cid) { try { cid = getCountryId(iso.toUpperCase()); } catch { /* */ } }
  if (!cid || cid === "germany" && iso.toUpperCase() !== "DE") { skipped.push(iso); continue; } // unmapped → would mislabel
  let names: Record<string, string> = {};
  let ok = true;
  for (const l of LANGS) {
    const n = getCountryCopy(cid, l)?.name;
    if (!n) { ok = false; break; }
    names[l] = n;
  }
  if (!ok) { skipped.push(iso); continue; }
  out.push({ iso: iso.toLowerCase(), mapSlug: mapSlugForCountry(cid) || "", countryId: cid, names });
}
out.sort((a, b) => a.iso.localeCompare(b.iso));
fs.writeFileSync(path.resolve(process.cwd(), "scripts/_country_hub_config.json"), JSON.stringify(out, null, 1));
console.log(`country-hub config: ${out.length} countries | skipped (unmapped): ${skipped.length}`);
console.log("skipped:", skipped.slice(0, 40).join(" "));
console.log("sample:", JSON.stringify(out.slice(0, 3)));
