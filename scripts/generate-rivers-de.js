// Script to generate deRivers.ts from Natural Earth river centerlines GeoJSON
// Run: node scripts/generate-rivers-de.js
//
// Source: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_rivers_lake_centerlines.geojson

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Bundesland bounding boxes [minLon, maxLon, minLat, maxLat] + projection params
// Extracted from bundeslandSubregions.ts
const BUNDESLAND_DATA = {
  'DE-BW': { bbox: [7.512, 10.505, 47.537, 49.788], proj: { minLon: 7.512126922607649, maxLon: 10.505069732666186, minLat: 47.53711700439453, maxLat: 49.78755950927729, latStretch: 0.6604953473486626, scale: 465.39278522296945, offX: 40, offY: 76.3301473342292 } },
  'DE-BY': { bbox: [8.995, 13.836, 47.270, 50.565], proj: { minLon: 8.995349884033317, maxLon: 13.835957527160872, minLat: 47.26985931396479, maxLat: 50.56501007080078, latStretch: 0.6604953473486626, scale: 282.5, offX: 40, offY: 40 } },
  'DE-BE': { bbox: [13.094, 13.768, 52.339, 52.675], proj: { minLon: 13.093818664550781, maxLon: 13.768408775329533, minLat: 52.33872222900396, maxLat: 52.67502212524414, latStretch: 0.6, scale: 1500, offX: 40, offY: 40 } },
  'DE-BB': { bbox: [11.273, 14.746, 51.362, 53.556], proj: { minLon: 11.273380279541016, maxLon: 14.74603080749523, minLat: 51.36178207397472, maxLat: 53.556289672851506, latStretch: 0.6, scale: 420, offX: 40, offY: 40 } },
  'DE-HB': { bbox: [8.487, 8.993, 53.015, 53.230], proj: { minLon: 8.486890792846793, maxLon: 8.992988586425724, minLat: 53.015239715576286, maxLat: 53.22970199584961, latStretch: 0.59, scale: 2200, offX: 40, offY: 40 } },
  'DE-HH': { bbox: [9.724, 10.337, 53.405, 53.748], proj: { minLon: 9.7236585617066, maxLon: 10.336769104003906, minLat: 53.4047203063966, maxLat: 53.748081207275334, latStretch: 0.59, scale: 2500, offX: 40, offY: 40 } },
  'DE-HE': { bbox: [7.785, 10.237, 49.404, 51.657], proj: { minLon: 7.784550189971924, maxLon: 10.236989021301497, minLat: 49.404090881347884, maxLat: 51.65705108642601, latStretch: 0.645, scale: 460, offX: 40, offY: 40 } },
  'DE-MV': { bbox: [10.597, 14.416, 53.108, 54.685], proj: { minLon: 10.597419738769645, maxLon: 14.415765762329158, minLat: 53.10763168334961, maxLat: 54.68458175659174, latStretch: 0.575, scale: 430, offX: 40, offY: 40 } },
  'DE-NI': { bbox: [6.631, 11.602, 51.301, 53.931], proj: { minLon: 6.630833148956697, maxLon: 11.601718902588175, minLat: 51.30081939697277, maxLat: 53.93125152587902, latStretch: 0.615, scale: 330, offX: 40, offY: 40 } },
  'DE-NW': { bbox: [5.872, 9.466, 50.322, 52.533], proj: { minLon: 5.87161922454851, maxLon: 9.465918540954647, minLat: 50.32192993164068, maxLat: 52.53250885009771, latStretch: 0.64, scale: 400, offX: 40, offY: 40 } },
  'DE-RP': { bbox: [6.098, 8.509, 48.969, 50.943], proj: { minLon: 6.098002910613957, maxLon: 8.508589744568098, minLat: 48.9688415527346, maxLat: 50.943019866943416, latStretch: 0.645, scale: 540, offX: 40, offY: 40 } },
  'DE-SL': { bbox: [6.355, 7.412, 49.113, 49.647], proj: { minLon: 6.35482120513916, maxLon: 7.411569118499756, minLat: 49.112586975097656, maxLat: 49.646820068359375, latStretch: 0.645, scale: 1300, offX: 40, offY: 40 } },
  'DE-SN': { bbox: [11.879, 15.038, 50.180, 51.681], proj: { minLon: 11.878723144531307, maxLon: 15.03811264038086, minLat: 50.17972946167015, maxLat: 51.68059158325201, latStretch: 0.635, scale: 460, offX: 40, offY: 40 } },
  'DE-ST': { bbox: [10.563, 13.199, 50.945, 53.039], proj: { minLon: 10.563369750976562, maxLon: 13.198930740356388, minLat: 50.94509887695324, maxLat: 53.03868865966814, latStretch: 0.625, scale: 430, offX: 40, offY: 40 } },
  'DE-SH': { bbox: [7.863, 11.314, 53.370, 55.057], proj: { minLon: 7.86250114440918, maxLon: 11.31360912322998, minLat: 53.36989212036133, maxLat: 55.05652618408209, latStretch: 0.58, scale: 500, offX: 40, offY: 40 } },
  'DE-TH': { bbox: [9.873, 12.666, 50.200, 51.649], proj: { minLon: 9.873108863830566, maxLon: 12.666169166565055, minLat: 50.19984054565424, maxLat: 51.64873123168951, latStretch: 0.64, scale: 580, offX: 40, offY: 40 } },
};

// Actually use the real projection params from bundeslandSubregions.ts
// We'll read them and recalculate based on the correct offY for each state.
// The proj above is just a fallback; the real ones are computed from the actual geo data.
// Since we only need to project river coords using the SAME projection as the state's subregions,
// we'll parse the actual projection from the bundeslandSubregions.ts file.

function fetchGeoJSON(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    let data = '';
    const req = protocol.get(url, { timeout: 30000 }, (res) => {
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
    req.on('timeout', () => { req.destroy(); reject(new Error('Request timed out')); });
  });
}

function projectPoint(proj, lon, lat) {
  const x = proj.offX + (lon - proj.minLon) * proj.latStretch * proj.scale;
  const y = proj.offY + (proj.maxLat - lat) * proj.scale;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

// Keep every Nth point for simplification
function simplifyCoords(coords, factor) {
  if (coords.length <= 4) return coords;
  const result = [coords[0]];
  for (let i = 1; i < coords.length - 1; i++) {
    if (i % factor === 0) result.push(coords[i]);
  }
  result.push(coords[coords.length - 1]);
  return result;
}

function coordsToPath(coords, proj, simplifyFactor) {
  const simplified = simplifyCoords(coords, simplifyFactor);
  if (simplified.length < 2) return '';
  const points = simplified.map(c => projectPoint(proj, c[0], c[1]));
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    d += `L${points[i][0]},${points[i][1]}`;
  }
  return d;
}

// Check if a LineString coordinate array intersects/crosses the bbox
function coordsCrossBbox(coords, minLon, maxLon, minLat, maxLat) {
  // Expand bbox slightly for rivers that touch the edge
  const expand = 0.15;
  for (const [lon, lat] of coords) {
    if (lon >= minLon - expand && lon <= maxLon + expand &&
        lat >= minLat - expand && lat <= maxLat + expand) {
      return true;
    }
  }
  return false;
}

function getAllCoords(geometry) {
  if (geometry.type === 'LineString') return [geometry.coordinates];
  if (geometry.type === 'MultiLineString') return geometry.coordinates;
  return [];
}

// Clip coords to only include segments that are within or near the bbox
function clipCoordsToBox(coords, minLon, maxLon, minLat, maxLat) {
  const expand = 0.2;
  const clipped = [];
  let currentSegment = [];

  for (const [lon, lat] of coords) {
    const inBox = lon >= minLon - expand && lon <= maxLon + expand &&
                  lat >= minLat - expand && lat <= maxLat + expand;
    if (inBox) {
      currentSegment.push([lon, lat]);
    } else {
      if (currentSegment.length >= 2) {
        clipped.push(currentSegment);
      }
      currentSegment = [];
    }
  }
  if (currentSegment.length >= 2) clipped.push(currentSegment);
  return clipped;
}

async function loadProjections() {
  const content = fs.readFileSync('C:/Users/User/plizio-repo/lib/visualLab/maps/bundeslandSubregions.ts', 'utf8');
  const result = {};
  const matches = content.matchAll(/"(DE-[A-Z]+)": \{\s*"viewBox"[^}]*"projection": \{([^}]+)\}/g);
  for (const m of matches) {
    const id = m[1];
    const projStr = m[2];
    const num = (key) => parseFloat(projStr.match(new RegExp(`"${key}": ([^,\n]+)`))?.[1] ?? '0');
    result[id] = {
      minLon: num('minLon'),
      maxLon: num('maxLon'),
      minLat: num('minLat'),
      maxLat: num('maxLat'),
      latStretch: num('latStretch'),
      scale: num('scale'),
      offX: num('offX'),
      offY: num('offY'),
    };
  }
  return result;
}

async function main() {
  console.log('Loading Bundesland projections...');
  const projections = await loadProjections();
  console.log(`Loaded projections for: ${Object.keys(projections).join(', ')}`);

  console.log('Fetching Natural Earth river centerlines GeoJSON...');
  let geojson;
  const riverUrl = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_rivers_lake_centerlines.geojson';
  try {
    geojson = await fetchGeoJSON(riverUrl);
    console.log(`Got ${geojson.features.length} river features`);
  } catch (err) {
    console.error(`Failed to fetch GeoJSON: ${err.message}`);
    console.log('Writing placeholder file...');
    const placeholder = `// TODO: Rivers GeoJSON fetch failed. Re-run scripts/generate-rivers-de.js when network available.
// Source: ${riverUrl}
export const deRivers: Record<string, Array<{ name: string; path: string }>> = {};
`;
    const outDir = 'C:/Users/User/plizio-repo/lib/visualLab/maps/rivers';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outDir + '/deRivers.ts', placeholder, 'utf8');
    console.log('Wrote placeholder deRivers.ts');
    return;
  }

  const result = {};
  const stateIds = Object.keys(projections);

  for (const stateId of stateIds) {
    const proj = projections[stateId];
    const { minLon, maxLon, minLat, maxLat } = proj;
    const rivers = [];

    for (const feature of geojson.features) {
      const name = feature.properties?.name || feature.properties?.NAME || 'Unknown';
      // Skip very minor features (unnamed or classified as intermittent/lake outlines)
      const featurecla = feature.properties?.featurecla || '';
      if (featurecla.toLowerCase().includes('Lake') || featurecla.toLowerCase().includes('lake')) continue;

      const allCoordArrays = getAllCoords(feature.geometry);
      if (allCoordArrays.length === 0) continue;

      const pathParts = [];
      for (const coords of allCoordArrays) {
        if (!coordsCrossBbox(coords, minLon, maxLon, minLat, maxLat)) continue;
        const clipped = clipCoordsToBox(coords, minLon, maxLon, minLat, maxLat);
        for (const segment of clipped) {
          // Simplify: keep every 3rd point (reduces path length significantly)
          const p = coordsToPath(segment, proj, 3);
          if (p) pathParts.push(p);
        }
      }

      if (pathParts.length > 0) {
        rivers.push({ name: name.trim(), path: pathParts.join(' ') });
      }
    }

    // Sort by name and deduplicate same-named rivers (keep first)
    const seen = new Set();
    const unique = [];
    for (const r of rivers) {
      if (!seen.has(r.name)) {
        seen.add(r.name);
        unique.push(r);
      } else {
        // Merge paths for same named river
        const existing = unique.find(x => x.name === r.name);
        if (existing) existing.path += ' ' + r.path;
      }
    }

    result[stateId] = unique;
    console.log(`${stateId}: ${unique.length} rivers (${unique.map(r => r.name).slice(0, 8).join(', ')}${unique.length > 8 ? '...' : ''})`);
  }

  // Generate TypeScript output
  let ts = `// Auto-generated by scripts/generate-rivers-de.js
// Source: Natural Earth ne_10m_rivers_lake_centerlines
// DO NOT EDIT manually — re-run script to regenerate

export const deRivers: Record<string, Array<{ name: string; path: string }>> = {\n`;

  for (const [stateId, rivers] of Object.entries(result)) {
    ts += `  "${stateId}": [\n`;
    for (const r of rivers) {
      const safeName = r.name.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      ts += `    { name: "${safeName}", path: "${r.path}" },\n`;
    }
    ts += `  ],\n`;
  }

  ts += `};\n`;

  const outDir = 'C:/Users/User/plizio-repo/lib/visualLab/maps/rivers';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outFile = outDir + '/deRivers.ts';
  fs.writeFileSync(outFile, ts, 'utf8');

  const totalRivers = Object.values(result).reduce((s, a) => s + a.length, 0);
  const sizes = Object.values(result).map(a => a.length);
  console.log(`\nDone! Wrote ${outFile}`);
  console.log(`Total: ${totalRivers} river entries across ${stateIds.length} states`);
  console.log(`Per-state range: min=${Math.min(...sizes)}, max=${Math.max(...sizes)}`);
  console.log(`File size: ${Math.round(fs.statSync(outFile).size / 1024)}KB`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
