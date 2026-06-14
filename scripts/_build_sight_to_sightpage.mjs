// Rebuild public/data/_sight_to_sightpage.json — the POI→sight-page cross-link
// index consumed by generate-poi-html. OLD format keyed on normName|lat|lng
// (coord-cell) which broke ~50% of links on coordinate drift between a POI's
// sights data and the sight-page's stored coords. NEW format groups by parent
// POI so the render matches WITHIN the known parent — by name (Latin) or by
// nearest coord (non-Latin names that normalize to empty, e.g. Cyrillic):
//   { parentPoi: [ { slug, lat, lng, names: [normName,...] } ] }
import fs from "node:fs";
import path from "node:path";

const D = path.resolve(process.cwd(), "public", "data");
const content = JSON.parse(fs.readFileSync(path.join(D, "_sightpages_content.json"), "utf8"));
const norm = (s) =>
  (s || "").normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase().match(/[a-z0-9]+/g)?.join(" ") || "";

const out = {};
let withCoords = 0, withName = 0;
for (const slug of Object.keys(content)) {
  const r = content[slug];
  const pp = r.parentPoi;
  if (!pp) continue;
  const coords = Array.isArray(r.coords) && r.coords.length === 2 ? r.coords : null;
  const names = [...new Set(
    Object.values(r.name || {}).map((n) => norm(n)).filter(Boolean),
  )];
  if (coords) withCoords++;
  if (names.length) withName++;
  (out[pp] ||= []).push({
    slug,
    lat: coords ? Math.round(coords[1] * 1000) / 1000 : null,
    lng: coords ? Math.round(coords[0] * 1000) / 1000 : null,
    names,
  });
}
fs.writeFileSync(path.join(D, "_sight_to_sightpage.json"), JSON.stringify(out));
const total = Object.values(out).reduce((a, l) => a + l.length, 0);
console.log(`_sight_to_sightpage.json rebuilt: ${total} sights across ${Object.keys(out).length} parent POIs`);
console.log(`  with coords: ${withCoords} | with a normalizable name: ${withName}`);
