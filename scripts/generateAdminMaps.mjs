// scripts/generateAdminMaps.mjs
// Generates real GeoJSON-based SVG paths for Poland (voivodeships), Austria (Bezirke), Switzerland (cantons)
// Run: node scripts/generateAdminMaps.mjs
//
// Sources:
//   Poland:      https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/poland.geojson
//   Austria:     https://raw.githubusercontent.com/ginseng666/GeoJSON-TopoJSON-Austria/master/2021/simplified-99.5/bezirke_995_geo.json
//   Switzerland: https://raw.githubusercontent.com/severinlandolt/map-switzerland/main/02%20GeoJSON/CH_Kantonsgrenzen_025_geo.json

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MAPS_DIR = path.join(__dirname, '..', 'lib', 'visualLab', 'maps');

// ── helpers ────────────────────────────────────────────────────────────────

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchJSON(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error(`JSON parse error: ${e.message} (status ${res.statusCode})`)); }
      });
    }).on('error', reject);
  });
}

// Project lon/lat → SVG xy in a 1000x800 viewBox for a bounding box
function makeProjection(features, viewW = 1000, viewH = 800, pad = 40) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  for (const f of features) {
    forEachCoord(f.geometry, ([lon, lat]) => {
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    });
  }
  const dLon = maxLon - minLon;
  const dLat = maxLat - minLat;
  const scaleX = (viewW - 2 * pad) / dLon;
  const scaleY = (viewH - 2 * pad) / dLat;
  const scale = Math.min(scaleX, scaleY);
  return { minLon, maxLon, minLat, maxLat, scale, pad };
}

function project(proj, lon, lat) {
  const x = proj.pad + (lon - proj.minLon) * proj.scale;
  const y = proj.pad + (proj.maxLat - lat) * proj.scale;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function* coordsFromRing(ring) {
  for (const c of ring) yield c;
}

function forEachCoord(geom, fn) {
  if (!geom) return;
  if (geom.type === 'Polygon') {
    for (const ring of geom.coordinates) for (const c of ring) fn(c);
  } else if (geom.type === 'MultiPolygon') {
    for (const poly of geom.coordinates) for (const ring of poly) for (const c of ring) fn(c);
  }
}

// Simplify: keep every Nth point (N=2 for moderate, 3+ for heavy)
function simplifyRing(ring, step = 2) {
  const out = [];
  for (let i = 0; i < ring.length; i++) {
    if (i === 0 || i === ring.length - 1 || i % step === 0) out.push(ring[i]);
  }
  return out;
}

function geomToPath(geom, proj, step = 2) {
  if (!geom) return '';
  const parts = [];
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  for (const poly of polys) {
    for (const ring of poly) {
      const simplified = simplifyRing(ring, step);
      if (simplified.length < 3) continue;
      const points = simplified.map(c => project(proj, c[0], c[1]));
      parts.push('M' + points.map(p => p.join(',')).join('L') + 'Z');
    }
  }
  return parts.join('');
}

function centroid(geom) {
  let sumLon = 0, sumLat = 0, count = 0;
  forEachCoord(geom, ([lon, lat]) => { sumLon += lon; sumLat += lat; count++; });
  return count ? [sumLon / count, sumLat / count] : [0, 0];
}

// ── Poland (voivodeships as admin-2 stand-in) ─────────────────────────────

const PL_VOIV_MAP = {
  'Świętokrzyskie':      { id: 'PL-SK', de: 'Heiligkreuz',   hu: 'Szentkereszt',    ro: 'Sfânta Cruce',       en: 'Świętokrzyskie' },
  'Wielkopolskie':       { id: 'PL-WP', de: 'Großpolen',     hu: 'Nagylengyel',     ro: 'Marea Polonie',      en: 'Greater Poland' },
  'Kujawsko-Pomorskie':  { id: 'PL-KP', de: 'Kujawien-Pom.', hu: 'Kujávia-Pomerán.', ro: 'Cuiavia-Pomerania', en: 'Kujawy-Pomerania' },
  'Lubelskie':           { id: 'PL-LU', de: 'Lublin',        hu: 'Lublini',         ro: 'Lublin',             en: 'Lublin' },
  'Małopolskie':         { id: 'PL-MA', de: 'Kleinpolen',    hu: 'Kislengyel',      ro: 'Mica Polonie',       en: 'Lesser Poland' },
  'Dolnośląskie':        { id: 'PL-DS', de: 'Niederschles.', hu: 'Alsó-Szilézia',   ro: 'Silezia Inferioară', en: 'Lower Silesia' },
  'Lubuskie':            { id: 'PL-LB', de: 'Lebus',         hu: 'Lebusi',          ro: 'Lubuskie',           en: 'Lubusz' },
  'Mazowieckie':         { id: 'PL-MZ', de: 'Masowien',      hu: 'Mazóvia',         ro: 'Mazovia',            en: 'Masovia' },
  'Opolskie':            { id: 'PL-OP', de: 'Oppeln',        hu: 'Opolei',          ro: 'Opole',              en: 'Opole' },
  'Podlaskie':           { id: 'PL-PD', de: 'Podlachien',    hu: 'Podlachia',       ro: 'Podlahia',           en: 'Podlaskie' },
  'Pomorskie':           { id: 'PL-PM', de: 'Pommern',       hu: 'Pomeránia',       ro: 'Pomerania',          en: 'Pomerania' },
  'Podkarpackie':        { id: 'PL-PK', de: 'Karpatenvorland', hu: 'Kárpátalja', ro: 'Subcarpathia',         en: 'Subcarpathia' },
  'Zachodniopomorskie':  { id: 'PL-ZP', de: 'Westpommern',   hu: 'Nyugat-Pomeránia', ro: 'Pomerania Occidentală', en: 'W. Pomerania' },
  'Łódzkie':             { id: 'PL-LD', de: 'Lodsch',        hu: 'Łódźi',           ro: 'Łódź',               en: 'Łódź' },
  'Śląskie':             { id: 'PL-SL', de: 'Schlesien',     hu: 'Sziléziai',       ro: 'Silezia',            en: 'Silesia' },
  'Warmińsko-Mazurskie': { id: 'PL-WN', de: 'Ermland-Masuren', hu: 'Ermland-Mazúria', ro: 'Warmia-Mazuria',  en: 'Warmia-Masuria' },
};

// ── Austria ISO → AT-X code + bundesland ──────────────────────────────────
function atIsoToRegion(iso) {
  const n = parseInt(iso, 10);
  if (n >= 100 && n < 200) return 'AT-1';
  if (n >= 200 && n < 300) return 'AT-2';
  if (n >= 300 && n < 400) return 'AT-3';
  if (n >= 400 && n < 500) return 'AT-4';
  if (n >= 500 && n < 600) return 'AT-5';
  if (n >= 600 && n < 700) return 'AT-6';
  if (n >= 700 && n < 800) return 'AT-7';
  if (n >= 800 && n < 900) return 'AT-8';
  if (n >= 900)            return 'AT-9';
  return 'AT-?';
}

function atDistrictId(iso, name) {
  // Use iso prefix as ID
  return `AT-${iso}`;
}

// ── Switzerland KANTONSNUM → CH-XX ISO code ────────────────────────────────
const CH_KANTON_NUM_TO_ISO = {
  1: 'CH-ZH', 2: 'CH-BE', 3: 'CH-LU', 4: 'CH-UR', 5: 'CH-SZ',
  6: 'CH-OW', 7: 'CH-NW', 8: 'CH-GL', 9: 'CH-ZG', 10: 'CH-FR',
  11: 'CH-SO', 12: 'CH-BS', 13: 'CH-BL', 14: 'CH-SH', 15: 'CH-AR',
  16: 'CH-AI', 17: 'CH-SG', 18: 'CH-GR', 19: 'CH-AG', 20: 'CH-TG',
  21: 'CH-TI', 22: 'CH-VD', 23: 'CH-VS', 24: 'CH-NE', 25: 'CH-GE',
  26: 'CH-JU',
};

const CH_NAME_TRANSLATIONS = {
  'Graubünden': { de: 'Graubünden', hu: 'Graubünden', ro: 'Graubünden', en: 'Grisons' },
  'Bern':       { de: 'Bern',       hu: 'Bern',       ro: 'Berna',      en: 'Bern' },
  'Valais':     { de: 'Wallis',     hu: 'Valais',     ro: 'Valais',     en: 'Valais' },
  'Vaud':       { de: 'Waadt',      hu: 'Vaud',       ro: 'Vaud',       en: 'Vaud' },
  'Ticino':     { de: 'Tessin',     hu: 'Tessin',     ro: 'Ticino',     en: 'Ticino' },
  'Zürich':     { de: 'Zürich',     hu: 'Zürich',     ro: 'Zurich',     en: 'Zurich' },
  'Aargau':     { de: 'Aargau',     hu: 'Aargau',     ro: 'Aargau',     en: 'Aargau' },
  'St. Gallen': { de: 'St. Gallen', hu: 'Sankt Gallen', ro: 'Sankt Gallen', en: 'St. Gallen' },
  'Luzern':     { de: 'Luzern',     hu: 'Luzern',     ro: 'Lucerna',    en: 'Lucerne' },
  'Fribourg':   { de: 'Freiburg',   hu: 'Freiburg',   ro: 'Fribourg',   en: 'Fribourg' },
  'Solothurn':  { de: 'Solothurn',  hu: 'Solothurn',  ro: 'Solothurn',  en: 'Solothurn' },
  'Thurgau':    { de: 'Thurgau',    hu: 'Thurgau',    ro: 'Thurgau',    en: 'Thurgau' },
  'Schwyz':     { de: 'Schwyz',     hu: 'Schwyz',     ro: 'Schwyz',     en: 'Schwyz' },
  'Neuchâtel':  { de: 'Neuenburg',  hu: 'Neuchâtel',  ro: 'Neuchâtel',  en: 'Neuchâtel' },
  'Schaffhausen':{ de: 'Schaffhausen', hu: 'Schaffhausen', ro: 'Schaffhausen', en: 'Schaffhausen' },
  'Jura':       { de: 'Jura',       hu: 'Jura',       ro: 'Jura',       en: 'Jura' },
  'Basel-Stadt':{ de: 'Basel-Stadt', hu: 'Bázel-Város', ro: 'Basel-Stadt', en: 'Basel-City' },
  'Basel-Landschaft':{ de: 'Basel-Land', hu: 'Basel-Land', ro: 'Basel-Land', en: 'Basel-Land' },
  'Appenzell Ausserrhoden':{ de: 'Appenzell A.Rh.', hu: 'Appenzell AR', ro: 'Appenzell AR', en: 'Appenzell Outer' },
  'Appenzell Innerrhoden':{ de: 'Appenzell I.Rh.', hu: 'Appenzell AI', ro: 'Appenzell AI', en: 'Appenzell Inner' },
  'Glarus':     { de: 'Glarus',     hu: 'Glarus',     ro: 'Glarus',     en: 'Glarus' },
  'Zug':        { de: 'Zug',        hu: 'Zug',        ro: 'Zug',        en: 'Zug' },
  'Geneva':     { de: 'Genf',       hu: 'Genf',       ro: 'Geneva',     en: 'Geneva' },
  'Uri':        { de: 'Uri',        hu: 'Uri',        ro: 'Uri',        en: 'Uri' },
  'Obwalden':   { de: 'Obwalden',   hu: 'Obwalden',   ro: 'Obwalden',   en: 'Obwalden' },
  'Nidwalden':  { de: 'Nidwalden',  hu: 'Nidwalden',  ro: 'Nidwalden',  en: 'Nidwalden' },
};

// ── Generate Poland ─────────────────────────────────────────────────────────

async function generatePoland() {
  console.log('Fetching Poland voivodeships...');
  const data = await fetchJSON('https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/poland.geojson');
  const proj = makeProjection(data.features, 1000, 1000, 40);

  const entries = [];
  for (const f of data.features) {
    const rawName = f.properties.name;
    const meta = PL_VOIV_MAP[rawName];
    if (!meta) { console.warn('Unknown voivodeship:', rawName); continue; }
    const [cLon, cLat] = centroid(f.geometry);
    const [lx, ly] = project(proj, cLon, cLat);
    const pathStr = geomToPath(f.geometry, proj, 2);
    entries.push({ meta, labelX: lx, labelY: ly, path: pathStr });
  }

  // Poland admin2 structure: flat array keyed by voivodeship id
  const records = entries.map(e => {
    return `  {
    id: "${e.meta.id}",
    name: { de: ${JSON.stringify(e.meta.de)}, hu: ${JSON.stringify(e.meta.hu)}, ro: ${JSON.stringify(e.meta.ro)}, en: ${JSON.stringify(e.meta.en)} },
    labelX: ${e.labelX}, labelY: ${e.labelY},
    path: "${e.path}"
  }`;
  });

  const output = `// Poland Admin-2 (voivodeships) — REAL GeoJSON paths
// Source: https://github.com/codeforgermany/click_that_hood (poland.geojson)
// Generated: ${new Date().toISOString().slice(0, 10)}
// viewBox: "0 0 1000 1000"  projection: equirectangular fit

export interface PoiatSubregion {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  labelX: number;
  labelY: number;
  path: string;
}

export const plAdmin2Map: Record<string, PoiatSubregion[]> = {
  // Poland has 16 voivodeships.
  // Each voivodeship is both a key AND a single entry (voivodeship-level admin-2).
  // Drill-down to powiaty can be added later from datasets-pl/poland-administrative-boundaries.
${entries.map(e => `  ${JSON.stringify(e.meta.id)}: [\n    {\n      id: ${JSON.stringify(e.meta.id)},\n      name: { de: ${JSON.stringify(e.meta.de)}, hu: ${JSON.stringify(e.meta.hu)}, ro: ${JSON.stringify(e.meta.ro)}, en: ${JSON.stringify(e.meta.en)} },\n      labelX: ${e.labelX}, labelY: ${e.labelY},\n      path: ${JSON.stringify(e.path)}\n    }\n  ]`).join(',\n')}
};
`;
  fs.writeFileSync(path.join(MAPS_DIR, 'polandAdmin2.svg.ts'), output, 'utf8');
  console.log(`Written polandAdmin2.svg.ts (${entries.length} voivodeships)`);
}

// ── Generate Austria ─────────────────────────────────────────────────────────

const AT_REGION_NAMES = {
  'AT-1': 'Burgenland',
  'AT-2': 'Kärnten',
  'AT-3': 'Niederösterreich',
  'AT-4': 'Oberösterreich',
  'AT-5': 'Salzburg',
  'AT-6': 'Steiermark',
  'AT-7': 'Tirol',
  'AT-8': 'Vorarlberg',
  'AT-9': 'Wien',
};

async function generateAustria() {
  console.log('Fetching Austria Bezirke...');
  const data = await fetchJSON('https://raw.githubusercontent.com/ginseng666/GeoJSON-TopoJSON-Austria/master/2021/simplified-99.5/bezirke_995_geo.json');

  // Group by bundesland
  const grouped = {};
  for (const regionKey of Object.keys(AT_REGION_NAMES)) grouped[regionKey] = [];

  // Build per-region bounding boxes for projection
  const byRegion = {};
  for (const f of data.features) {
    const iso = String(f.properties.iso);
    const region = atIsoToRegion(iso);
    if (!byRegion[region]) byRegion[region] = [];
    byRegion[region].push(f);
  }

  const regionEntries = {};
  for (const [region, features] of Object.entries(byRegion)) {
    const proj = makeProjection(features, 1000, 800, 40);
    regionEntries[region] = features.map(f => {
      const iso = String(f.properties.iso);
      const name = f.properties.name;
      const [cLon, cLat] = centroid(f.geometry);
      const [lx, ly] = project(proj, cLon, cLat);
      const pathStr = geomToPath(f.geometry, proj, 2);
      return { iso, name, labelX: lx, labelY: ly, path: pathStr };
    });
  }

  let recordLines = [];
  for (const [region, entries] of Object.entries(regionEntries).sort()) {
    const districtLines = entries.map(e => {
      const de = e.name;
      return `    {
      id: "AT-${e.iso}",
      name: { de: ${JSON.stringify(de)}, hu: ${JSON.stringify(de)}, ro: ${JSON.stringify(de)}, en: ${JSON.stringify(de)} },
      labelX: ${e.labelX}, labelY: ${e.labelY},
      path: ${JSON.stringify(e.path)}
    }`;
    });
    recordLines.push(`  // ${AT_REGION_NAMES[region] || region}\n  ${JSON.stringify(region)}: [\n${districtLines.join(',\n')}\n  ]`);
  }

  const totalDistricts = Object.values(regionEntries).reduce((s, a) => s + a.length, 0);

  const output = `// Austria Admin-2 (Bezirke) — REAL GeoJSON paths
// Source: https://github.com/ginseng666/GeoJSON-TopoJSON-Austria (2021/simplified-99.5/bezirke_995_geo.json)
// Generated: ${new Date().toISOString().slice(0, 10)}
// Each region has its own equirectangular projection fit to a 1000x800 viewBox.
// Total: ${totalDistricts} Bezirke across 9 Bundesländer

export interface AustriaDistrict {
  id: string;       // e.g. "AT-101"
  name: { de: string; hu: string; ro: string; en: string };
  labelX: number;
  labelY: number;
  path: string;
}

export const atAdmin2Map: Record<string, AustriaDistrict[]> = {
${recordLines.join(',\n')}
};
`;
  fs.writeFileSync(path.join(MAPS_DIR, 'austriaAdmin2.svg.ts'), output, 'utf8');
  console.log(`Written austriaAdmin2.svg.ts (${totalDistricts} Bezirke)`);
}

// ── Generate Switzerland (cantons as admin-2) ─────────────────────────────

async function generateSwitzerland() {
  console.log('Fetching Switzerland cantons...');
  const data = await fetchJSON('https://raw.githubusercontent.com/severinlandolt/map-switzerland/main/02%20GeoJSON/CH_Kantonsgrenzen_025_geo.json');
  const proj = makeProjection(data.features, 1000, 641, 30);

  // Group multi-part cantons (KT_TEIL splits one canton into several features)
  const grouped = {}; // isoKey -> { rawName, parts: Feature[] }
  for (const f of data.features) {
    const num = f.properties.KANTONSNUM;
    const isoKey = CH_KANTON_NUM_TO_ISO[num];
    if (!isoKey) { console.warn('Unknown KANTONSNUM:', num, f.properties.NAME); continue; }
    const rawName = f.properties.NAME;
    if (!grouped[isoKey]) grouped[isoKey] = { rawName, parts: [] };
    grouped[isoKey].parts.push(f);
  }

  const entries = [];
  for (const [isoKey, { rawName, parts }] of Object.entries(grouped)) {
    const trans = CH_NAME_TRANSLATIONS[rawName] || { de: rawName, hu: rawName, ro: rawName, en: rawName };
    // Compute centroid from all parts combined
    let sumLon = 0, sumLat = 0, count = 0;
    for (const f of parts) {
      const [cLon, cLat] = centroid(f.geometry);
      sumLon += cLon; sumLat += cLat; count++;
    }
    const [lx, ly] = project(proj, sumLon / count, sumLat / count);
    // Merge all parts into a single path string
    const pathStr = parts.map(f => geomToPath(f.geometry, proj, 1)).join('');
    entries.push({ isoKey, rawName, trans, labelX: lx, labelY: ly, path: pathStr });
  }

  entries.sort((a, b) => a.isoKey.localeCompare(b.isoKey));

  const recordLines = entries.map(e =>
    `  ${JSON.stringify(e.isoKey)}: [\n    {\n      id: ${JSON.stringify(e.isoKey)},\n      name: { de: ${JSON.stringify(e.trans.de)}, hu: ${JSON.stringify(e.trans.hu)}, ro: ${JSON.stringify(e.trans.ro)}, en: ${JSON.stringify(e.trans.en)} },\n      labelX: ${e.labelX}, labelY: ${e.labelY},\n      path: ${JSON.stringify(e.path)}\n    }\n  ]`
  );

  const output = `// Switzerland Admin-2 (cantons) — REAL GeoJSON paths
// Source: https://github.com/severinlandolt/map-switzerland (CH_Kantonsgrenzen_025_geo.json, swisstopo data)
// Generated: ${new Date().toISOString().slice(0, 10)}
// viewBox: "0 0 1000 641"  projection: equirectangular fit
// Each canton appears as a single entry under its ISO key.
// Bezirke drill-down can be added later from swisstopo or SFSO data.

export interface ChDistrict {
  id: string;       // e.g. "CH-ZH"
  name: { de: string; hu: string; ro: string; en: string };
  labelX: number;
  labelY: number;
  path: string;
}

export const chAdmin2Map: Record<string, ChDistrict[]> = {
${recordLines.join(',\n')}
};
`;
  fs.writeFileSync(path.join(MAPS_DIR, 'switzerlandAdmin2.svg.ts'), output, 'utf8');
  console.log(`Written switzerlandAdmin2.svg.ts (${entries.length} cantons)`);
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  try { await generatePoland(); } catch(e) { console.error('Poland FAILED:', e.message); }
  try { await generateAustria(); } catch(e) { console.error('Austria FAILED:', e.message); }
  try { await generateSwitzerland(); } catch(e) { console.error('Switzerland FAILED:', e.message); }
  console.log('Done.');
}

main();
