// Use the country-map megye paths (which look correct) for the admin-2 drill-down too.
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const COUNTRY = path.join(REPO, "lib/visualLab/maps/magyarorszag.svg.ts");
const ADMIN2 = path.join(REPO, "lib/visualLab/maps/hungaryAdmin2.svg.ts");
const SUB = path.join(REPO, "lib/visualLab/maps/hungarySubregions.ts");

const src = fs.readFileSync(COUNTRY, "utf8");
// Parse each megye block: { id, name, capital, labelX, labelY, path }
const blockRe = /\{\s*id:\s*"(HU-[A-Z]{2})",\s*name:\s*(\{[^}]+\}),\s*capital:\s*"([^"]*)",\s*labelX:\s*([-\d.]+),\s*labelY:\s*([-\d.]+),\s*path:\s*"([^"]+)"/g;

const megyek = [];
let m;
while ((m = blockRe.exec(src)) !== null) {
  megyek.push({ id: m[1], name: m[2], capital: m[3], labelX: parseFloat(m[4]), labelY: parseFloat(m[5]), path: m[6] });
}
console.log(`Found ${megyek.length} megye paths in country map`);

// Estimate centerLat/Lng from labelXY -> reverse projection (HUNGARY_PROJECTION)
const proj = { minLon: 16.11, maxLon: 22.90, minLat: 45.74, maxLat: 48.58, latStretch: 0.68, scale: 130, offX: 0, offY: 0 };
function unproject(x, y) {
  const lat = proj.maxLat - (y - proj.offY) / proj.scale;
  const lon = proj.minLon + (x - proj.offX) / (proj.latStretch * proj.scale);
  return [lat, lon];
}

const lines = [
  '// Auto-generated Hungary Admin-2 (megye) SVG paths',
  '// Source: magyarorszag.svg.ts (countries-of-hungary geojson via wuerdo/geoHungary)',
  '// Generated: ' + new Date().toISOString().slice(0, 10),
  '',
  'export interface AdminSubregion {',
  '  id: string;',
  '  name: { de: string; hu: string; ro: string; en: string };',
  '  centerLat: number;',
  '  centerLng: number;',
  '  labelX: number;',
  '  labelY: number;',
  '  path: string;',
  '}',
  '',
  'export const huAdmin2Map: Record<string, AdminSubregion[]> = {',
];

for (const meg of megyek) {
  const [lat, lon] = unproject(meg.labelX, meg.labelY);
  lines.push(`  "${meg.id}": [`);
  lines.push(`    {`);
  lines.push(`      id: "${meg.id}",`);
  lines.push(`      name: ${meg.name},`);
  lines.push(`      centerLat: ${lat.toFixed(4)},`);
  lines.push(`      centerLng: ${lon.toFixed(4)},`);
  lines.push(`      labelX: ${meg.labelX},`);
  lines.push(`      labelY: ${meg.labelY},`);
  lines.push(`      path: ${JSON.stringify(meg.path)}`);
  lines.push(`    }`);
  lines.push(`  ],`);
}
lines.push('};');
lines.push('');

fs.writeFileSync(ADMIN2, lines.join("\n"));
console.log(`Wrote ${ADMIN2}`);

// Update subregions viewBox + projection to match country
let subSrc = fs.readFileSync(SUB, "utf8");
subSrc = subSrc.replace(/viewBox:\s*"[^"]+"/, 'viewBox: "0 0 500 350"');
subSrc = subSrc.replace(/minLon:\s*[\d.]+,\s*maxLon:\s*[\d.]+,\s*minLat:\s*[\d.]+,\s*maxLat:\s*[\d.]+,\s*latStretch:\s*[\d.]+,\s*scale:\s*[\d.]+/,
  `minLon: 16.11,\n      maxLon: 22.90,\n      minLat: 45.74,\n      maxLat: 48.58,\n      latStretch: 0.68,\n      scale: 130`);
fs.writeFileSync(SUB, subSrc);
console.log(`Updated ${SUB}`);
