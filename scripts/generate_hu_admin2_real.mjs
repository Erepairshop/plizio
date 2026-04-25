// Real HU megye SVG paths from Natural Earth admin-1.
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const NE_FILE = "C:/Users/User/ne_admin1_10m.geojson";
const OUT = path.join(REPO, "lib/visualLab/maps/hungaryAdmin2.svg.ts");

const HU_MEGYE = {
  "HU-BU": "Budapest",
  "HU-BA": "Baranya", "HU-BK": "Bács-Kiskun", "HU-BE": "Békés", "HU-BZ": "Borsod-Abaúj-Zemplén",
  "HU-CS": "Csongrád-Csanád", "HU-FE": "Fejér", "HU-GS": "Győr-Moson-Sopron", "HU-HB": "Hajdú-Bihar",
  "HU-HE": "Heves", "HU-KE": "Komárom-Esztergom", "HU-NO": "Nógrád", "HU-PE": "Pest",
  "HU-SO": "Somogy", "HU-SZ": "Szabolcs-Szatmár-Bereg", "HU-JN": "Jász-Nagykun-Szolnok",
  "HU-TO": "Tolna", "HU-VA": "Vas", "HU-VE": "Veszprém", "HU-ZA": "Zala"
};
const HU_NAMES_4LANG = {
  "HU-BU": { de: "Budapest", hu: "Budapest", ro: "Budapesta", en: "Budapest" },
  "HU-BA": { de: "Komitat Branau", hu: "Baranya", ro: "Baranya", en: "Baranya" },
  "HU-BK": { de: "Komitat Batsch-Kleinkumanien", hu: "Bács-Kiskun", ro: "Bács-Kiskun", en: "Bács-Kiskun" },
  "HU-BE": { de: "Komitat Békés", hu: "Békés", ro: "Békés", en: "Békés" },
  "HU-BZ": { de: "Komitat Borsod-Abaúj-Zemplén", hu: "Borsod-Abaúj-Zemplén", ro: "Borsod-Abaúj-Zemplén", en: "Borsod-Abaúj-Zemplén" },
  "HU-CS": { de: "Komitat Csongrád-Csanád", hu: "Csongrád-Csanád", ro: "Csongrád-Csanád", en: "Csongrád-Csanád" },
  "HU-FE": { de: "Komitat Weißenburg", hu: "Fejér", ro: "Fejér", en: "Fejér" },
  "HU-GS": { de: "Komitat Raab-Wieselburg-Ödenburg", hu: "Győr-Moson-Sopron", ro: "Győr-Moson-Sopron", en: "Győr-Moson-Sopron" },
  "HU-HB": { de: "Komitat Hajdú-Bihar", hu: "Hajdú-Bihar", ro: "Hajdú-Bihar", en: "Hajdú-Bihar" },
  "HU-HE": { de: "Komitat Heves", hu: "Heves", ro: "Heves", en: "Heves" },
  "HU-KE": { de: "Komitat Komorn-Gran", hu: "Komárom-Esztergom", ro: "Komárom-Esztergom", en: "Komárom-Esztergom" },
  "HU-NO": { de: "Komitat Neograd", hu: "Nógrád", ro: "Nógrád", en: "Nógrád" },
  "HU-PE": { de: "Komitat Pest", hu: "Pest", ro: "Pesta", en: "Pest" },
  "HU-SO": { de: "Komitat Schomodei", hu: "Somogy", ro: "Somogy", en: "Somogy" },
  "HU-SZ": { de: "Komitat Sabolcs-Sathmar-Bereg", hu: "Szabolcs-Szatmár-Bereg", ro: "Szabolcs-Szatmár-Bereg", en: "Szabolcs-Szatmár-Bereg" },
  "HU-JN": { de: "Komitat Jasch-Großkumanien-Sollnock", hu: "Jász-Nagykun-Szolnok", ro: "Jász-Nagykun-Szolnok", en: "Jász-Nagykun-Szolnok" },
  "HU-TO": { de: "Komitat Tolnau", hu: "Tolna", ro: "Tolna", en: "Tolna" },
  "HU-VA": { de: "Komitat Eisenburg", hu: "Vas", ro: "Vas", en: "Vas" },
  "HU-VE": { de: "Komitat Wesprim", hu: "Veszprém", ro: "Veszprém", en: "Veszprém" },
  "HU-ZA": { de: "Komitat Zala", hu: "Zala", ro: "Zala", en: "Zala" },
};

const data = JSON.parse(fs.readFileSync(NE_FILE, "utf8"));
const huFeatures = data.features.filter(f => f.properties.iso_3166_2 && HU_MEGYE[f.properties.iso_3166_2]);
console.log(`Found ${huFeatures.length} HU megye features`);

// HU bounding box (approx)
const HU_BBOX = { minLon: 16.0, maxLon: 22.95, minLat: 45.7, maxLat: 48.6 };
const VB_W = 1000, VB_H = 700;
const project = (lon, lat) => {
  const x = ((lon - HU_BBOX.minLon) / (HU_BBOX.maxLon - HU_BBOX.minLon)) * VB_W;
  const y = ((HU_BBOX.maxLat - lat) / (HU_BBOX.maxLat - HU_BBOX.minLat)) * VB_H;
  return [x, y];
};

function ringToPath(ring) {
  return ring.map(([lon, lat], i) => {
    const [x, y] = project(lon, lat);
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join("") + "Z";
}

function geometryToPath(geom) {
  if (geom.type === "Polygon") {
    return geom.coordinates.map(ringToPath).join("");
  }
  if (geom.type === "MultiPolygon") {
    return geom.coordinates.map(poly => poly.map(ringToPath).join("")).join("");
  }
  return "";
}

function centerLatLng(geom) {
  let totalLon = 0, totalLat = 0, count = 0;
  const walk = (coords) => {
    if (typeof coords[0] === "number") { totalLon += coords[0]; totalLat += coords[1]; count++; }
    else coords.forEach(walk);
  };
  walk(geom.coordinates);
  return [totalLat / count, totalLon / count];
}

const lines = [
  '// Auto-generated Hungary Admin-2 (megye) SVG paths',
  '// Source: Natural Earth ne_10m_admin_1_states_provinces (CC BY 4.0)',
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

const parents = new Map();
for (const f of huFeatures) {
  const id = f.properties.iso_3166_2;
  if (!parents.has(id)) parents.set(id, []);
  parents.get(id).push(f);
}

const wantedIds = Object.keys(HU_MEGYE);
for (const megyeId of wantedIds) {
  const features = parents.get(megyeId) ?? [];
  if (features.length === 0) {
    console.log(`MISSING: ${megyeId}`);
    continue;
  }
  // Merge all features for this megye into one path
  const path = features.map(f => geometryToPath(f.geometry)).join("");
  const [centerLat, centerLng] = centerLatLng(features[0].geometry);
  const [labelX, labelY] = project(centerLng, centerLat);
  const name = HU_NAMES_4LANG[megyeId];
  lines.push(`  "${megyeId}": [`);
  lines.push(`    {`);
  lines.push(`      id: "${megyeId}",`);
  lines.push(`      name: ${JSON.stringify(name)},`);
  lines.push(`      centerLat: ${centerLat.toFixed(4)},`);
  lines.push(`      centerLng: ${centerLng.toFixed(4)},`);
  lines.push(`      labelX: ${labelX.toFixed(2)},`);
  lines.push(`      labelY: ${labelY.toFixed(2)},`);
  lines.push(`      path: ${JSON.stringify(path)}`);
  lines.push(`    }`);
  lines.push(`  ],`);
}
lines.push('};');
lines.push('');

fs.writeFileSync(OUT, lines.join("\n"));
console.log(`Wrote ${OUT}`);
