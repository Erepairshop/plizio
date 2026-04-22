// Convert Regierungsbezirke GeoJSON into per-Bundesland detail maps.
// Fallback to Kreise for states without Regierungsbezirke.
// Output: lib/visualLab/maps/bundeslandSubregions.ts

import fs from "node:fs";
import path from "node:path";

const RB_INPUT = process.env.TEMP + "/de-rb.geo.json";
const KR_INPUT = process.env.TEMP + "/de-kreise.geo.json";
const OUTPUT = path.resolve("lib/visualLab/maps/bundeslandSubregions.ts");

// Map state name -> ISO id (matches deutschland.svg.ts ids)
const STATE_ID = {
  "Baden-Württemberg": "DE-BW",
  "Bayern": "DE-BY",
  "Berlin": "DE-BE",
  "Brandenburg": "DE-BB",
  "Bremen": "DE-HB",
  "Hamburg": "DE-HH",
  "Hessen": "DE-HE",
  "Mecklenburg-Vorpommern": "DE-MV",
  "Niedersachsen": "DE-NI",
  "Nordrhein-Westfalen": "DE-NW",
  "Rheinland-Pfalz": "DE-RP",
  "Saarland": "DE-SL",
  "Sachsen": "DE-SN",
  "Sachsen-Anhalt": "DE-ST",
  "Schleswig-Holstein": "DE-SH",
  "Thüringen": "DE-TH",
};

const rb = JSON.parse(fs.readFileSync(RB_INPUT, "utf8"));
const kr = JSON.parse(fs.readFileSync(KR_INPUT, "utf8"));

// ----- Per-state bbox computation -------------------------------------------
function bbox(features) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  for (const f of features) {
    const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    for (const poly of polys) for (const ring of poly) for (const [lon, lat] of ring) {
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }
  }
  return { minLon, maxLon, minLat, maxLat };
}

// ----- Group features by parent state ---------------------------------------
function groupByState(features) {
  const byState = new Map();
  for (const f of features) {
    const stateName = f.properties.NAME_1;
    const sid = STATE_ID[stateName];
    if (!sid) continue;
    if (!byState.has(sid)) byState.set(sid, []);
    byState.get(sid).push(f);
  }
  return byState;
}

const rbByState = groupByState(rb.features);
const krByState = groupByState(kr.features);

// ----- Per-state projection (fit each to 1000x1200 viewBox) -----------------
function makeProjection(feats) {
  const { minLon, maxLon, minLat, maxLat } = bbox(feats);
  const W = 1000, H = 1200, padding = 40;
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

  return {
    viewBox: `0 0 ${W} ${H}`,
    params: { minLon, maxLon, minLat, maxLat, latStretch, scale, offX, offY },
    project: ([lon, lat]) => {
      const x = offX + (lon - minLon) * latStretch * scale;
      const y = offY + (maxLat - lat) * scale;
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
  };
}

// ----- Convert a feature to SVG path ---------------------------------------
function featureToPath(f, project) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  const parts = [];
  for (const poly of polys) {
    for (const ring of poly) {
      if (ring.length < 3) continue;
      let d = "";
      for (let i = 0; i < ring.length; i++) {
        const [x, y] = project(ring[i]);
        d += (i === 0 ? "M" : "L") + x + "," + y;
      }
      d += "Z";
      parts.push(d);
    }
  }
  return parts.join(" ");
}

function largestRing(f) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let best = null, bestLen = 0;
  for (const poly of polys) for (const ring of poly) {
    if (ring.length > bestLen) { best = ring; bestLen = ring.length; }
  }
  return best;
}

function centroid(ring) {
  let cx = 0, cy = 0, n = 0;
  for (const [lon, lat] of ring) { cx += lon; cy += lat; n++; }
  return [cx / n, cy / n];
}

// ----- Build output ---------------------------------------------------------
const result = {};
for (const [sid] of Object.entries(STATE_ID).map(([, id]) => [id])) {
  const rbs = rbByState.get(sid) || [];
  const krs = krByState.get(sid) || [];
  // Prefer Regierungsbezirke when state truly has multiple (>= 2); else use Kreise for meaningful subdivision
  const useRbs = rbs.length >= 2;
  const source = useRbs ? rbs : krs;
  if (source.length === 0) continue;
  const sourceType = useRbs ? "regierungsbezirk" : "kreis";

  const { viewBox, project, params } = makeProjection(source);
  const children = source.map((f) => {
    const name = rbs.length > 0 ? f.properties.NAME_2 : (f.properties.NAME_3 || f.properties.NAME_2);
    const d = featureToPath(f, project);
    const ring = largestRing(f);
    const [clon, clat] = centroid(ring);
    const [lx, ly] = project([clon, clat]);
    return { id: `${sid}-${name}`.replace(/\s+/g, "-"), name, labelX: lx, labelY: ly, path: d };
  });
  result[sid] = { viewBox, type: sourceType, projection: params, children };
}

// Emit
const emit = `// Auto-generated from isellsoap/deutschlandGeoJSON (Regierungsbezirke + Kreise)
// Each Bundesland has its own projection fit to a 1000x1200 viewBox.
// 'type' is "regierungsbezirk" (for states that have districts) or "kreis" (county fallback).

export interface SubRegion {
  id: string;
  name: string;
  labelX: number;
  labelY: number;
  path: string;
}

export interface ProjectionParams {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  latStretch: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface BundeslandDetail {
  viewBox: string;
  type: "regierungsbezirk" | "kreis";
  projection: ProjectionParams;
  children: SubRegion[];
}

export function projectInState(p: ProjectionParams, lon: number, lat: number): [number, number] {
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export const bundeslandSubregions: Record<string, BundeslandDetail> = ${JSON.stringify(result, null, 2)};
`;

fs.writeFileSync(OUTPUT, emit);

// Stats
let totalChildren = 0, states = 0;
for (const sid in result) {
  states++;
  totalChildren += result[sid].children.length;
}
console.log(`Wrote ${OUTPUT}`);
console.log(`States: ${states} / 16`);
console.log(`Total subregions: ${totalChildren}`);
console.log(`Types:`, Object.fromEntries(Object.entries(result).map(([k, v]) => [k, v.type + ":" + v.children.length])));
