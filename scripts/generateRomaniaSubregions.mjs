// Generate per-county subregion data for Romania
// Each county gets its own zoomed viewBox + projection + its own path as the only child
// So when user clicks a county on the Romania map, a zoomed detail view opens.

import fs from "node:fs";
import path from "node:path";

const INPUT = path.resolve("scripts/tmp/rou-counties.json");
const OUTPUT = path.resolve("lib/visualLab/maps/romaniaJudetSubregions.ts");

const NAME_TO_ID = {
  "Alba": "RO-AB", "Arad": "RO-AR", "Arges": "RO-AG", "Argeș": "RO-AG",
  "Bacau": "RO-BC", "Bacău": "RO-BC", "Bihor": "RO-BH",
  "Bistrita-Nasaud": "RO-BN", "Bistrița-Năsăud": "RO-BN",
  "Botosani": "RO-BT", "Botoșani": "RO-BT",
  "Brasov": "RO-BV", "Brașov": "RO-BV",
  "Braila": "RO-BR", "Brăila": "RO-BR",
  "Bucharest": "RO-B", "Bucuresti": "RO-B", "București": "RO-B",
  "Buzau": "RO-BZ", "Buzău": "RO-BZ",
  "Caras-Severin": "RO-CS", "Caraș-Severin": "RO-CS",
  "Calarasi": "RO-CL", "Călărași": "RO-CL",
  "Cluj": "RO-CJ",
  "Constanta": "RO-CT", "Constanța": "RO-CT",
  "Covasna": "RO-CV",
  "Dambovita": "RO-DB", "Dâmbovița": "RO-DB",
  "Dolj": "RO-DJ",
  "Galati": "RO-GL", "Galați": "RO-GL",
  "Giurgiu": "RO-GR",
  "Gorj": "RO-GJ",
  "Harghita": "RO-HR",
  "Hunedoara": "RO-HD",
  "Ialomita": "RO-IL", "Ialomița": "RO-IL",
  "Iasi": "RO-IS", "Iași": "RO-IS",
  "Ilfov": "RO-IF",
  "Maramures": "RO-MM", "Maramureș": "RO-MM",
  "Mehedinti": "RO-MH", "Mehedinți": "RO-MH",
  "Mures": "RO-MS", "Mureș": "RO-MS",
  "Neamt": "RO-NT", "Neamț": "RO-NT",
  "Olt": "RO-OT",
  "Prahova": "RO-PH",
  "Satu Mare": "RO-SM",
  "Salaj": "RO-SJ", "Sălaj": "RO-SJ",
  "Sibiu": "RO-SB",
  "Suceava": "RO-SV",
  "Teleorman": "RO-TR",
  "Timis": "RO-TM", "Timiș": "RO-TM",
  "Tulcea": "RO-TL",
  "Vaslui": "RO-VS",
  "Valcea": "RO-VL", "Vâlcea": "RO-VL",
  "Vrancea": "RO-VN",
};

const NAME_RO = {
  "RO-AB": "Alba", "RO-AR": "Arad", "RO-AG": "Argeș", "RO-BC": "Bacău",
  "RO-BH": "Bihor", "RO-BN": "Bistrița-Năsăud", "RO-BT": "Botoșani", "RO-BV": "Brașov",
  "RO-BR": "Brăila", "RO-B": "București", "RO-BZ": "Buzău", "RO-CS": "Caraș-Severin",
  "RO-CL": "Călărași", "RO-CJ": "Cluj", "RO-CT": "Constanța", "RO-CV": "Covasna",
  "RO-DB": "Dâmbovița", "RO-DJ": "Dolj", "RO-GL": "Galați", "RO-GR": "Giurgiu",
  "RO-GJ": "Gorj", "RO-HR": "Harghita", "RO-HD": "Hunedoara", "RO-IL": "Ialomița",
  "RO-IS": "Iași", "RO-IF": "Ilfov", "RO-MM": "Maramureș", "RO-MH": "Mehedinți",
  "RO-MS": "Mureș", "RO-NT": "Neamț", "RO-OT": "Olt", "RO-PH": "Prahova",
  "RO-SM": "Satu Mare", "RO-SJ": "Sălaj", "RO-SB": "Sibiu", "RO-SV": "Suceava",
  "RO-TR": "Teleorman", "RO-TM": "Timiș", "RO-TL": "Tulcea", "RO-VS": "Vaslui",
  "RO-VL": "Vâlcea", "RO-VN": "Vrancea",
};

const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));

function computeBBox(feature) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  const polys = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  for (const poly of polys) {
    for (const ring of poly) {
      for (const [lon, lat] of ring) {
        if (lon < minLon) minLon = lon;
        if (lon > maxLon) maxLon = lon;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
      }
    }
  }
  return { minLon, maxLon, minLat, maxLat };
}

function makeProjection(bbox, W = 1000, H = 1200, padding = 40) {
  const { minLon, maxLon, minLat, maxLat } = bbox;
  const midLat = (minLat + maxLat) / 2;
  const latStretch = Math.cos((midLat * Math.PI) / 180);
  const lonRange = (maxLon - minLon) * latStretch;
  const latRange = maxLat - minLat;
  const sx = (W - 2 * padding) / lonRange;
  const sy = (H - 2 * padding) / latRange;
  const scale = Math.min(sx, sy);
  const drawnW = lonRange * scale;
  const drawnH = latRange * scale;
  const offX = (W - drawnW) / 2;
  const offY = (H - drawnH) / 2;
  return { minLon, maxLon, minLat, maxLat, latStretch, scale, offX, offY };
}

function project(p, lon, lat) {
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

function featurePath(feature, p) {
  const polys = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  const parts = [];
  for (const poly of polys) {
    for (const ring of poly) {
      if (ring.length < 3) continue;
      let d = "";
      for (let i = 0; i < ring.length; i++) {
        const [x, y] = project(p, ring[i][0], ring[i][1]);
        d += (i === 0 ? "M" : "L") + x + "," + y;
      }
      d += "Z";
      parts.push(d);
    }
  }
  return parts.join(" ");
}

const entries = {};
for (const f of raw.features) {
  const rawName = f.properties.NAME_1 || f.properties.name;
  const id = NAME_TO_ID[rawName];
  if (!id) continue;

  const bbox = computeBBox(f);
  const proj = makeProjection(bbox);
  const selfPath = featurePath(f, proj);

  // Compute label centroid
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let cx = 0, cy = 0, n = 0;
  const largest = polys.reduce((best, poly) => {
    const ring = poly[0];
    return ring.length > (best?.length ?? 0) ? ring : best;
  }, null);
  if (largest) {
    for (const [lon, lat] of largest) { cx += lon; cy += lat; n++; }
    cx /= n; cy /= n;
  }
  const [labelX, labelY] = project(proj, cx, cy);

  entries[id] = {
    viewBox: "0 0 1000 1200",
    type: "judet",
    projection: proj,
    children: [{
      id,
      name: NAME_RO[id] ?? rawName,
      labelX,
      labelY,
      path: selfPath,
    }],
  };
}

const out = `// Auto-generated per-county detail data for Romania
// Each county = own zoomed viewBox + projection + its own path
// Matches the shape of bundeslandSubregions.ts for InteractiveMap compatibility

export interface JudetSubRegion {
  id: string;
  name: string;
  labelX: number;
  labelY: number;
  path: string;
}

export interface JudetProjection {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  latStretch: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface JudetDetail {
  viewBox: string;
  type: "judet";
  projection: JudetProjection;
  children: JudetSubRegion[];
}

export function projectInJudet(p: JudetProjection, lon: number, lat: number): [number, number] {
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export const romaniaJudetSubregions: Record<string, JudetDetail> = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(OUTPUT, out);
console.log(`Wrote ${OUTPUT}`);
console.log(`Judete: ${Object.keys(entries).length}`);
