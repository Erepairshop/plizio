// Convert real Bundesländer GeoJSON -> SVG path strings
// Usage: node scripts/convertDeutschlandGeoJSON.mjs

import fs from "node:fs";
import path from "node:path";

const INPUT = process.env.TEMP + "/de.geo.json";
const OUTPUT = path.resolve("lib/visualLab/maps/deutschland.svg.ts");

const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));

// ----- Compute geographic bbox ----------------------------------------------
let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
for (const f of raw.features) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
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
}

// ----- Projection: equirectangular scaled to a target viewBox ---------------
// Adjust latitudes by cos(midLat) so shapes are not stretched at DE's latitude.
const W = 1000;
const H = 1200;
const padding = 20;
const midLat = (minLat + maxLat) / 2;
const latStretch = Math.cos((midLat * Math.PI) / 180);

const lonRange = (maxLon - minLon) * latStretch;
const latRange = maxLat - minLat;

// Fit to (W-2p) × (H-2p) while preserving aspect
const sx = (W - 2 * padding) / lonRange;
const sy = (H - 2 * padding) / latRange;
const scale = Math.min(sx, sy);

const drawnW = lonRange * scale;
const drawnH = latRange * scale;
const offX = (W - drawnW) / 2;
const offY = (H - drawnH) / 2;

function project([lon, lat]) {
  const x = offX + (lon - minLon) * latStretch * scale;
  const y = offY + (maxLat - lat) * scale; // y flipped (north up)
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

// ----- Build path "M x,y L x,y ... Z" for each feature ----------------------
function ringToPath(ring) {
  let d = "";
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = project(ring[i]);
    d += (i === 0 ? "M" : "L") + x + "," + y;
  }
  d += "Z";
  return d;
}

function featureToPath(f) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  const parts = [];
  for (const poly of polys) {
    for (const ring of poly) {
      if (ring.length > 2) parts.push(ringToPath(ring));
    }
  }
  return parts.join(" ");
}

// ----- Compute label position (centroid of largest ring) --------------------
function largestRing(f) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let best = null;
  let bestLen = 0;
  for (const poly of polys) {
    for (const ring of poly) {
      if (ring.length > bestLen) {
        best = ring;
        bestLen = ring.length;
      }
    }
  }
  return best;
}

function centroid(ring) {
  let cx = 0, cy = 0, n = 0;
  for (const [lon, lat] of ring) {
    cx += lon;
    cy += lat;
    n++;
  }
  return [cx / n, cy / n];
}

// ----- Emit TypeScript ------------------------------------------------------
const NAME_LOCALIZED = {
  "DE-BW": { de: "Baden-Württemberg", hu: "Baden-Württemberg", ro: "Baden-Württemberg", en: "Baden-Württemberg" },
  "DE-BY": { de: "Bayern", hu: "Bajorország", ro: "Bavaria", en: "Bavaria" },
  "DE-BE": { de: "Berlin", hu: "Berlin", ro: "Berlin", en: "Berlin" },
  "DE-BB": { de: "Brandenburg", hu: "Brandenburg", ro: "Brandenburg", en: "Brandenburg" },
  "DE-HB": { de: "Bremen", hu: "Bréma", ro: "Bremen", en: "Bremen" },
  "DE-HH": { de: "Hamburg", hu: "Hamburg", ro: "Hamburg", en: "Hamburg" },
  "DE-HE": { de: "Hessen", hu: "Hessen", ro: "Hessa", en: "Hesse" },
  "DE-MV": { de: "Mecklenburg-Vorpommern", hu: "Mecklenburg-Elő-Pomeránia", ro: "Mecklenburg-Pomerania Inferioară", en: "Mecklenburg-Western Pomerania" },
  "DE-NI": { de: "Niedersachsen", hu: "Alsó-Szászország", ro: "Saxonia Inferioară", en: "Lower Saxony" },
  "DE-NW": { de: "Nordrhein-Westfalen", hu: "Észak-Rajna-Vesztfália", ro: "Renania de Nord-Westfalia", en: "North Rhine-Westphalia" },
  "DE-RP": { de: "Rheinland-Pfalz", hu: "Rajna-vidék-Pfalz", ro: "Renania-Palatinat", en: "Rhineland-Palatinate" },
  "DE-SL": { de: "Saarland", hu: "Saar-vidék", ro: "Saarland", en: "Saarland" },
  "DE-SN": { de: "Sachsen", hu: "Szászország", ro: "Saxonia", en: "Saxony" },
  "DE-ST": { de: "Sachsen-Anhalt", hu: "Szász-Anhalt", ro: "Saxonia-Anhalt", en: "Saxony-Anhalt" },
  "DE-SH": { de: "Schleswig-Holstein", hu: "Schleswig-Holstein", ro: "Schleswig-Holstein", en: "Schleswig-Holstein" },
  "DE-TH": { de: "Thüringen", hu: "Türingia", ro: "Turingia", en: "Thuringia" },
};

const CAPITALS = {
  "DE-BW": "Stuttgart", "DE-BY": "München", "DE-BE": "Berlin", "DE-BB": "Potsdam",
  "DE-HB": "Bremen", "DE-HH": "Hamburg", "DE-HE": "Wiesbaden", "DE-MV": "Schwerin",
  "DE-NI": "Hannover", "DE-NW": "Düsseldorf", "DE-RP": "Mainz", "DE-SL": "Saarbrücken",
  "DE-SN": "Dresden", "DE-ST": "Magdeburg", "DE-SH": "Kiel", "DE-TH": "Erfurt",
};

const entries = [];
for (const f of raw.features) {
  const id = f.properties.id;
  const rawName = f.properties.name;
  const d = featureToPath(f);
  const ring = largestRing(f);
  const [clon, clat] = centroid(ring);
  const [lx, ly] = project([clon, clat]);
  entries.push({
    id,
    rawName,
    name: NAME_LOCALIZED[id] ?? { de: rawName, hu: rawName, ro: rawName, en: rawName },
    capital: CAPITALS[id] ?? "",
    d,
    labelX: lx,
    labelY: ly,
  });
}

// Pretty-print output (long path strings kept on one line)
const body = entries
  .map(
    (e) => `  {
    id: ${JSON.stringify(e.id)},
    name: ${JSON.stringify(e.name)},
    capital: ${JSON.stringify(e.capital)},
    labelX: ${e.labelX}, labelY: ${e.labelY},
    path: ${JSON.stringify(e.d)},
  }`
  )
  .join(",\n");

const out = `// Auto-generated from isellsoap/deutschlandGeoJSON (real geographic data)
// Source: https://github.com/isellsoap/deutschlandGeoJSON — public domain
// Projection: equirectangular, cos(lat) stretched. ViewBox 0 0 ${W} ${H}.

export const deutschlandViewBox = "0 0 ${W} ${H}";

// Projection parameters — use projectCoords() to map [lon, lat] to SVG [x, y]
export const DEUTSCHLAND_PROJECTION = {
  minLon: ${minLon},
  maxLon: ${maxLon},
  minLat: ${minLat},
  maxLat: ${maxLat},
  latStretch: ${latStretch},
  scale: ${scale},
  offX: ${offX},
  offY: ${offY},
};

export function projectCoords(lon: number, lat: number): [number, number] {
  const p = DEUTSCHLAND_PROJECTION;
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export interface BundeslandPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const deutschlandMap: BundeslandPath[] = [
${body}
];
`;

fs.writeFileSync(OUTPUT, out);
console.log(`Wrote ${OUTPUT}`);
console.log(`Features: ${entries.length}`);
console.log(`Total path chars: ${entries.reduce((s, e) => s + e.d.length, 0)}`);
