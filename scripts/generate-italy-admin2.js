// Script to generate italyAdmin2.svg.ts from real GeoJSON
// Run: node scripts/generate-italy-admin2.js
// Source: https://github.com/openpolis/geojson-italy (MIT)
//
// Province acronym → ISO 3166-2 region code mapping (IT-XX)
// Region codes follow NUTS-2 / ISO 3166-2 assignment used in italy.svg.ts

const https = require('https');
const fs = require('fs');
const path = require('path');

// Province acronym → ISO region code
const PROV_TO_REGION = {
  // Valle d'Aosta (IT-23)
  AO: 'IT-23',
  // Piedmont (IT-21)
  AL:'IT-21', AT:'IT-21', BI:'IT-21', CN:'IT-21',
  NO:'IT-21', TO:'IT-21', VB:'IT-21', VC:'IT-21',
  // Lombardy (IT-25)
  BG:'IT-25', BS:'IT-25', CO:'IT-25', CR:'IT-25', LC:'IT-25',
  LO:'IT-25', MB:'IT-25', MI:'IT-25', MN:'IT-25', PV:'IT-25',
  SO:'IT-25', VA:'IT-25',
  // Liguria (IT-42)
  GE:'IT-42', IM:'IT-42', SP:'IT-42', SV:'IT-42',
  // Trentino-South Tyrol (IT-32)
  BZ:'IT-32', TN:'IT-32',
  // Veneto (IT-34)
  BL:'IT-34', PD:'IT-34', RO:'IT-34', TV:'IT-34',
  VE:'IT-34', VI:'IT-34', VR:'IT-34',
  // Friuli-Venezia Giulia (IT-36)
  GO:'IT-36', PN:'IT-36', TS:'IT-36', UD:'IT-36',
  // Emilia-Romagna (IT-45)
  BO:'IT-45', FE:'IT-45', FC:'IT-45', MO:'IT-45',
  PR:'IT-45', PC:'IT-45', RA:'IT-45', RE:'IT-45', RN:'IT-45',
  // Tuscany (IT-52)
  AR:'IT-52', FI:'IT-52', GR:'IT-52', LI:'IT-52', LU:'IT-52',
  MS:'IT-52', PI:'IT-52', PT:'IT-52', PO:'IT-52', SI:'IT-52',
  // Umbria (IT-55)
  PG:'IT-55', TR:'IT-55',
  // Marche (IT-57)
  AN:'IT-57', AP:'IT-57', FM:'IT-57', MC:'IT-57', PU:'IT-57',
  // Lazio (IT-62)
  FR:'IT-62', LT:'IT-62', RI:'IT-62', RM:'IT-62', VT:'IT-62',
  // Abruzzo (IT-65)
  AQ:'IT-65', CH:'IT-65', PE:'IT-65', TE:'IT-65',
  // Molise (IT-67)
  CB:'IT-67', IS:'IT-67',
  // Campania (IT-72)
  AV:'IT-72', BN:'IT-72', CE:'IT-72', NA:'IT-72', SA:'IT-72',
  // Puglia (IT-75)
  BA:'IT-75', BT:'IT-75', BR:'IT-75', FG:'IT-75', LE:'IT-75', TA:'IT-75',
  // Basilicata (IT-77)
  MT:'IT-77', PZ:'IT-77',
  // Calabria (IT-78)
  CS:'IT-78', CZ:'IT-78', KR:'IT-78', RC:'IT-78', VV:'IT-78',
  // Sicily (IT-82)
  AG:'IT-82', CL:'IT-82', CT:'IT-82', EN:'IT-82', ME:'IT-82',
  PA:'IT-82', RG:'IT-82', SR:'IT-82', TP:'IT-82',
  // Sardinia (IT-88)
  CA:'IT-88', SU:'IT-88', OR:'IT-88', NU:'IT-88', SS:'IT-88',
  // Old Sardinia codes still in some datasets
  CI:'IT-88', VS:'IT-88', OG:'IT-88', OT:'IT-88',
};

// Region bounding boxes [minLon, maxLon, minLat, maxLat]
const REGION_BBOX = {
  'IT-23': [6.85,  7.95,  45.45, 45.9],
  'IT-21': [6.63,  9.22,  44.06, 46.47],
  'IT-25': [8.5,  11.35,  44.68, 46.65],
  'IT-42': [7.5,  10.05,  43.78, 44.67],
  'IT-32': [10.45,12.45,  45.67, 47.1],
  'IT-34': [10.7, 13.1,   44.8,  46.65],
  'IT-36': [12.3, 13.9,   45.6,  46.65],
  'IT-45': [9.2,  12.8,   43.75, 45.08],
  'IT-52': [9.68, 12.37,  42.37, 44.47],
  'IT-55': [11.9, 13.25,  42.36, 43.62],
  'IT-57': [12.35,13.95,  42.69, 43.97],
  'IT-62': [11.45,14.03,  41.23, 42.84],
  'IT-65': [13.15,14.8,   41.73, 42.9],
  'IT-67': [13.95,15.15,  41.35, 41.95],
  'IT-72': [14.03,15.85,  39.99, 41.5],
  'IT-75': [15.0, 18.52,  39.79, 41.88],
  'IT-77': [15.35,16.85,  39.9,  41.15],
  'IT-78': [15.63,16.63,  37.92, 40.15],
  'IT-82': [12.43,15.65,  36.65, 38.33],
  'IT-88': [8.13,  9.83,  38.86, 41.26],
};

function makeProjection(minLon, maxLon, minLat, maxLat) {
  const PAD = 40;
  const W = 1000 - 2 * PAD;
  const H = 1200 - 2 * PAD;
  const lonSpan = maxLon - minLon;
  const latSpan = maxLat - minLat;
  const latStretch = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180));
  const scaleX = W / (lonSpan * latStretch);
  const scaleY = H / latSpan;
  const scale = Math.min(scaleX, scaleY);
  const usedW = lonSpan * latStretch * scale;
  const usedH = latSpan * scale;
  const offX = PAD + (W - usedW) / 2;
  const offY = PAD + (H - usedH) / 2;
  return { minLon, maxLon, minLat, maxLat, latStretch, scale, offX, offY };
}

function projectPoint(proj, lon, lat) {
  const x = proj.offX + (lon - proj.minLon) * proj.latStretch * proj.scale;
  const y = proj.offY + (proj.maxLat - lat) * proj.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

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
  return d + 'Z';
}

function featureToPath(geometry, proj, simplifyFactor) {
  const parts = [];
  if (geometry.type === 'Polygon') {
    parts.push(ringToPath(geometry.coordinates[0], proj, simplifyFactor));
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
    const req = https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function main() {
  console.log('Fetching Italy provinces GeoJSON from openpolis...');
  const geojson = await fetchGeoJSON(
    'https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_provinces.geojson'
  );
  console.log(`Got ${geojson.features.length} features`);

  // Group features by region
  const regionFeatures = {};
  for (const feature of geojson.features) {
    const acr = feature.properties.prov_acr;
    const regionId = PROV_TO_REGION[acr];
    if (!regionId) {
      console.warn(`  WARN: no region mapping for province acronym "${acr}" (${feature.properties.prov_name})`);
      continue;
    }
    if (!regionFeatures[regionId]) regionFeatures[regionId] = [];
    regionFeatures[regionId].push(feature);
  }

  // Build per-region detail objects
  const adminData = {};
  for (const [regionId, features] of Object.entries(regionFeatures)) {
    const bbox = REGION_BBOX[regionId];
    if (!bbox) {
      console.warn(`  WARN: no bbox for region ${regionId}`);
      continue;
    }
    const proj = makeProjection(...bbox);
    const area = (bbox[1] - bbox[0]) * (bbox[3] - bbox[2]);
    const simplifyFactor = area < 3 ? 2 : (area < 10 ? 3 : 5);

    const children = features.map(feature => {
      const acr = feature.properties.prov_acr;
      const name = feature.properties.prov_name;
      const svgPath = featureToPath(feature.geometry, proj, simplifyFactor);
      const centroid = getCentroid(feature.geometry);
      const [cx, cy] = projectPoint(proj, centroid[0], centroid[1]);
      return {
        id: `IT-${acr}`,
        name,
        labelX: Math.round(cx * 100) / 100,
        labelY: Math.round(cy * 100) / 100,
        path: svgPath,
      };
    });

    // Sort children by id for determinism
    children.sort((a, b) => a.id.localeCompare(b.id));

    adminData[regionId] = {
      viewBox: '0 0 1000 1200',
      type: 'province',
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

    console.log(`  ${regionId}: ${children.length} provinces`);
  }

  const totalProvinces = Object.values(adminData).reduce((s, r) => s + r.children.length, 0);
  console.log(`\nTotal regions: ${Object.keys(adminData).length}, provinces: ${totalProvinces}`);

  // Write italyAdmin2.svg.ts
  const tsContent = `// Auto-generated Italy admin-2 (province) SVG paths
// Generated by: node scripts/generate-italy-admin2.js
// Source: https://github.com/openpolis/geojson-italy (MIT)
// ${totalProvinces} provinces across ${Object.keys(adminData).length} regions.
// Each region has its own equirectangular projection fit to a 1000x1200 viewBox.
// Simplification applied to reduce file size.

export interface ItalyProvinceSubRegion {
  id: string;      // ISO 3166-2 province code, e.g. "IT-MI"
  name: string;    // Italian province name
  labelX: number;
  labelY: number;
  path: string;    // Real SVG polygon path from GeoJSON
}

export interface ItalyRegionProjection {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  latStretch: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface ItalyRegionDetail {
  viewBox: string;
  type: "province";
  projection: ItalyRegionProjection;
  children: ItalyProvinceSubRegion[];
}

export function projectInItalyRegion(
  p: ItalyRegionProjection,
  lon: number,
  lat: number
): [number, number] {
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export const italyAdmin2: Record<string, ItalyRegionDetail> = ${JSON.stringify(adminData, null, 2)};
`;

  const mapsDir = path.join(__dirname, '..', 'lib', 'visualLab', 'maps');
  const outPath = path.join(mapsDir, 'italyAdmin2.svg.ts');
  fs.writeFileSync(outPath, tsContent, 'utf8');
  console.log(`\nWrote: lib/visualLab/maps/italyAdmin2.svg.ts`);
}

main().catch(e => {
  console.error('FAILED:', e.message);
  process.exit(1);
});
