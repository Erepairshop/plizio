// Script to generate franceAdmin2.svg.ts + franceSubregions.ts from GeoJSON
// Run: node scripts/generate-france-admin2.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// Department code (string) -> region ISO code mapping
const DEPT_TO_REGION = {
  '01':'FR-ARA','03':'FR-ARA','07':'FR-ARA','15':'FR-ARA','26':'FR-ARA','38':'FR-ARA',
  '42':'FR-ARA','43':'FR-ARA','63':'FR-ARA','69':'FR-ARA','73':'FR-ARA','74':'FR-ARA',
  '21':'FR-BFC','25':'FR-BFC','39':'FR-BFC','58':'FR-BFC','70':'FR-BFC','71':'FR-BFC',
  '89':'FR-BFC','90':'FR-BFC',
  '22':'FR-BRE','29':'FR-BRE','35':'FR-BRE','56':'FR-BRE',
  '18':'FR-CVL','28':'FR-CVL','36':'FR-CVL','37':'FR-CVL','41':'FR-CVL','45':'FR-CVL',
  '2A':'FR-COR','2B':'FR-COR',
  '08':'FR-GES','10':'FR-GES','51':'FR-GES','52':'FR-GES','54':'FR-GES','55':'FR-GES',
  '57':'FR-GES','67':'FR-GES','68':'FR-GES','88':'FR-GES',
  '02':'FR-HDF','59':'FR-HDF','60':'FR-HDF','62':'FR-HDF','80':'FR-HDF',
  '75':'FR-IDF','77':'FR-IDF','78':'FR-IDF','91':'FR-IDF','92':'FR-IDF','93':'FR-IDF',
  '94':'FR-IDF','95':'FR-IDF',
  '14':'FR-NOR','27':'FR-NOR','50':'FR-NOR','61':'FR-NOR','76':'FR-NOR',
  '16':'FR-NAQ','17':'FR-NAQ','19':'FR-NAQ','23':'FR-NAQ','24':'FR-NAQ','33':'FR-NAQ',
  '40':'FR-NAQ','47':'FR-NAQ','64':'FR-NAQ','79':'FR-NAQ','86':'FR-NAQ','87':'FR-NAQ',
  '09':'FR-OCC','11':'FR-OCC','12':'FR-OCC','30':'FR-OCC','31':'FR-OCC','32':'FR-OCC',
  '34':'FR-OCC','46':'FR-OCC','48':'FR-OCC','65':'FR-OCC','66':'FR-OCC','81':'FR-OCC','82':'FR-OCC',
  '44':'FR-PDL','49':'FR-PDL','53':'FR-PDL','72':'FR-PDL','85':'FR-PDL',
  '04':'FR-PAC','05':'FR-PAC','06':'FR-PAC','13':'FR-PAC','83':'FR-PAC','84':'FR-PAC',
};

// Region bounding boxes for zoomed per-region viewBox projection
// [minLon, maxLon, minLat, maxLat]
const REGION_BBOX = {
  'FR-ARA': [2.06, 7.70, 44.11, 46.81],
  'FR-BFC': [2.84, 6.83, 46.17, 48.40],
  'FR-BRE': [-5.14, -0.55, 47.28, 48.89],
  'FR-CVL': [0.06, 3.13, 46.35, 48.95],
  'FR-COR': [8.53, 9.57, 41.33, 43.03],
  'FR-GES': [5.35, 8.23, 47.43, 50.17],
  'FR-HDF': [1.45, 4.25, 49.03, 51.09],
  'FR-IDF': [1.45, 3.56, 48.12, 49.24],
  'FR-NOR': [-1.93, 1.79, 48.12, 50.09],
  'FR-NAQ': [-1.79, 3.33, 42.78, 47.60],
  'FR-OCC': [-0.33, 4.87, 42.33, 45.06],
  'FR-PDL': [-2.55, 0.90, 46.28, 48.55],
  'FR-PAC': [4.23, 7.72, 43.05, 44.88],
};

// Simple equirectangular projection into 1000x1200 viewBox
function makeProjection(minLon, maxLon, minLat, maxLat) {
  const lonRange = maxLon - minLon;
  const latRange = maxLat - minLat;
  const padding = 40;
  const viewW = 1000 - 2 * padding;
  const viewH = 1200 - 2 * padding;
  // Keep aspect ratio
  const scaleX = viewW / lonRange;
  const scaleY = viewH / latRange;
  // Use cos(mid-lat) correction for longitude
  const midLat = (minLat + maxLat) / 2;
  const latStretch = Math.cos((midLat * Math.PI) / 180);
  const scale = Math.min(scaleX / latStretch, scaleY);
  const offX = padding;
  const offY = padding;
  return { minLon, maxLon, minLat, maxLat, latStretch, scale, offX, offY };
}

function projectPoint(proj, lon, lat) {
  const x = proj.offX + (lon - proj.minLon) * proj.latStretch * proj.scale;
  const y = proj.offY + (proj.maxLat - lat) * proj.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

// Simplify coordinates: keep every Nth point (reduce data size)
function simplifyCoords(coords, factor) {
  if (coords.length <= 10) return coords;
  const result = [];
  for (let i = 0; i < coords.length; i++) {
    if (i === 0 || i === coords.length - 1 || i % factor === 0) {
      result.push(coords[i]);
    }
  }
  return result;
}

function ringToPath(ring, proj, simplifyFactor) {
  const simplified = simplifyCoords(ring, simplifyFactor);
  if (simplified.length < 3) return '';
  const points = simplified.map(c => projectPoint(proj, c[0], c[1]));
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    d += `L${points[i][0]},${points[i][1]}`;
  }
  d += 'Z';
  return d;
}

function featureToPath(geometry, proj, simplifyFactor) {
  const parts = [];
  if (geometry.type === 'Polygon') {
    const ring = geometry.coordinates[0];
    parts.push(ringToPath(ring, proj, simplifyFactor));
    // Holes (inner rings) — skip for simplicity
  } else if (geometry.type === 'MultiPolygon') {
    for (const poly of geometry.coordinates) {
      parts.push(ringToPath(poly[0], proj, simplifyFactor));
    }
  }
  return parts.filter(Boolean).join(' ');
}

function getCentroid(geometry) {
  let coords = [];
  if (geometry.type === 'Polygon') {
    coords = geometry.coordinates[0];
  } else if (geometry.type === 'MultiPolygon') {
    // Use largest polygon
    let maxLen = 0;
    for (const poly of geometry.coordinates) {
      if (poly[0].length > maxLen) { maxLen = poly[0].length; coords = poly[0]; }
    }
  }
  const sumLon = coords.reduce((s, c) => s + c[0], 0) / coords.length;
  const sumLat = coords.reduce((s, c) => s + c[1], 0) / coords.length;
  return [sumLon, sumLat];
}

function fetchGeoJSON(url) {
  return new Promise((resolve, reject) => {
    let data = '';
    https.get(url, (res) => {
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching France departments GeoJSON...');
  const geojson = await fetchGeoJSON(
    'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson'
  );

  console.log(`Got ${geojson.features.length} features`);

  // Group by region
  const regionDepts = {};
  for (const feature of geojson.features) {
    const code = feature.properties.code;
    const regionId = DEPT_TO_REGION[code];
    if (!regionId) {
      console.warn(`No region mapping for dept code: ${code} (${feature.properties.nom})`);
      continue;
    }
    if (!regionDepts[regionId]) regionDepts[regionId] = [];
    regionDepts[regionId].push(feature);
  }

  // Build per-region detail objects
  const adminData = {};
  for (const [regionId, features] of Object.entries(regionDepts)) {
    const bbox = REGION_BBOX[regionId];
    if (!bbox) {
      console.warn(`No bbox for region ${regionId}`);
      continue;
    }
    const proj = makeProjection(...bbox);
    // Smaller regions (IDF, COR) get less simplification
    const area = (bbox[1]-bbox[0]) * (bbox[3]-bbox[2]);
    const simplifyFactor = area < 5 ? 2 : (area < 20 ? 4 : 6);

    const children = features.map(feature => {
      const code = feature.properties.code;
      const nom = feature.properties.nom;
      const path = featureToPath(feature.geometry, proj, simplifyFactor);
      const centroid = getCentroid(feature.geometry);
      const [cx, cy] = projectPoint(proj, centroid[0], centroid[1]);

      return {
        id: `FR-${code}`,
        name: nom,
        code: code,
        labelX: Math.round(cx * 100) / 100,
        labelY: Math.round(cy * 100) / 100,
        path,
      };
    });

    adminData[regionId] = {
      viewBox: '0 0 1000 1200',
      type: 'departement',
      projection: {
        minLon: proj.minLon,
        maxLon: proj.maxLon,
        minLat: proj.minLat,
        maxLat: proj.maxLat,
        latStretch: proj.latStretch,
        scale: proj.scale,
        offX: proj.offX,
        offY: proj.offY,
      },
      children,
    };

    console.log(`  ${regionId}: ${children.length} departments`);
  }

  // Write franceAdmin2.svg.ts
  const admin2Content = `// Auto-generated France admin-2 (départements) SVG paths
// Generated from: https://github.com/gregoiredavid/france-geojson (MIT)
// Each region has its own equirectangular projection fit to a 1000x1200 viewBox.
// Simplification applied to reduce file size (every Nth coordinate kept).

export interface DepartementSubRegion {
  id: string;         // e.g. "FR-75"
  name: string;       // French name e.g. "Paris"
  code: string;       // INSEE code e.g. "75"
  labelX: number;
  labelY: number;
  path: string;
}

export interface DepartementProjection {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  latStretch: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface DepartementDetail {
  viewBox: string;
  type: "departement";
  projection: DepartementProjection;
  children: DepartementSubRegion[];
}

export function projectInDepartement(
  p: DepartementProjection,
  lon: number,
  lat: number
): [number, number] {
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

// Helper: given a POI's lat/lon, find which department it falls in (by label proximity)
// Used by the map component to associate POIs with departments without modifying POI data.
export function getDepartmentForCoords(
  regionId: string,
  lon: number,
  lat: number,
  data: Record<string, DepartementDetail>
): string | undefined {
  const regionData = data[regionId];
  if (!regionData) return undefined;
  const proj = regionData.projection;
  const [px, py] = projectInDepartement(proj, lon, lat);
  // Find nearest department centroid
  let best: string | undefined;
  let bestDist = Infinity;
  for (const child of regionData.children) {
    const dx = child.labelX - px;
    const dy = child.labelY - py;
    const dist = dx * dx + dy * dy;
    if (dist < bestDist) {
      bestDist = dist;
      best = child.id;
    }
  }
  return best;
}

export const franceAdmin2: Record<string, DepartementDetail> = ${JSON.stringify(adminData, null, 2)};
`;

  // Write franceSubregions.ts
  const subregionsContent = `// France departement subregions module
// Mirrors the bundeslandSubregions.ts API for InteractiveMap compatibility.
// Wraps franceAdmin2 data with a typed export.

import {
  franceAdmin2,
  type DepartementDetail,
  type DepartementSubRegion,
  type DepartementProjection,
  projectInDepartement,
  getDepartmentForCoords,
} from "./franceAdmin2.svg";

export type { DepartementDetail, DepartementSubRegion, DepartementProjection };
export { projectInDepartement, getDepartmentForCoords };

// Re-export as franceSubregions for resolver.ts compatibility
export const franceSubregions: Record<string, DepartementDetail> = franceAdmin2;
`;

  const mapsDir = path.join(__dirname, '..', 'lib', 'visualLab', 'maps');
  fs.writeFileSync(path.join(mapsDir, 'franceAdmin2.svg.ts'), admin2Content, 'utf8');
  fs.writeFileSync(path.join(mapsDir, 'franceSubregions.ts'), subregionsContent, 'utf8');

  console.log('\nWrote:');
  console.log('  lib/visualLab/maps/franceAdmin2.svg.ts');
  console.log('  lib/visualLab/maps/franceSubregions.ts');
  console.log(`\nTotal regions: ${Object.keys(adminData).length}`);
  const totalDepts = Object.values(adminData).reduce((s, r) => s + r.children.length, 0);
  console.log(`Total departments: ${totalDepts}`);
}

main().catch(e => {
  console.error('FAILED:', e.message);
  process.exit(1);
});
