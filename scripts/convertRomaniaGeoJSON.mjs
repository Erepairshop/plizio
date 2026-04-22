// Convert real Romania județe GeoJSON -> SVG path strings
// Usage: node scripts/convertRomaniaGeoJSON.mjs
// Input: scripts/tmp/rou-counties.json (downloaded GeoJSON)
// Output: lib/visualLab/maps/romania.svg.ts

import fs from "node:fs";
import path from "node:path";

const INPUT = path.resolve("scripts/tmp/rou-counties.json");
const OUTPUT = path.resolve("lib/visualLab/maps/romania.svg.ts");

const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));

// ─── Name → ISO 3166-2:RO code mapping ───────────────────────────────────────
const NAME_TO_ID = {
  "Alba": "RO-AB", "Arad": "RO-AR", "Arges": "RO-AG", "Argeș": "RO-AG",
  "Bacau": "RO-BC", "Bacău": "RO-BC", "Bihor": "RO-BH",
  "Bistrita-Nasaud": "RO-BN", "Bistrița-Năsăud": "RO-BN", "Bistrita-Năsăud": "RO-BN",
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

const NAME_LOCALIZED = {
  "RO-AB": { de: "Alba", hu: "Fehér", ro: "Alba", en: "Alba" },
  "RO-AR": { de: "Arad", hu: "Arad", ro: "Arad", en: "Arad" },
  "RO-AG": { de: "Argeș", hu: "Argeș", ro: "Argeș", en: "Argeș" },
  "RO-BC": { de: "Bacău", hu: "Bákó", ro: "Bacău", en: "Bacău" },
  "RO-BH": { de: "Bihor", hu: "Bihar", ro: "Bihor", en: "Bihor" },
  "RO-BN": { de: "Bistrița-Năsăud", hu: "Beszterce-Naszód", ro: "Bistrița-Năsăud", en: "Bistrița-Năsăud" },
  "RO-BT": { de: "Botoșani", hu: "Botosán", ro: "Botoșani", en: "Botoșani" },
  "RO-BV": { de: "Kronstadt", hu: "Brassó", ro: "Brașov", en: "Brașov" },
  "RO-BR": { de: "Brăila", hu: "Brăila", ro: "Brăila", en: "Brăila" },
  "RO-B":  { de: "Bukarest", hu: "Bukarest", ro: "București", en: "Bucharest" },
  "RO-BZ": { de: "Buzău", hu: "Buzău", ro: "Buzău", en: "Buzău" },
  "RO-CS": { de: "Karasch-Severin", hu: "Krassó-Szörény", ro: "Caraș-Severin", en: "Caraș-Severin" },
  "RO-CL": { de: "Călărași", hu: "Călărași", ro: "Călărași", en: "Călărași" },
  "RO-CJ": { de: "Klausenburg", hu: "Kolozs", ro: "Cluj", en: "Cluj" },
  "RO-CT": { de: "Konstanza", hu: "Konstanca", ro: "Constanța", en: "Constanța" },
  "RO-CV": { de: "Kovasna", hu: "Kovászna", ro: "Covasna", en: "Covasna" },
  "RO-DB": { de: "Dâmbovița", hu: "Dâmbovița", ro: "Dâmbovița", en: "Dâmbovița" },
  "RO-DJ": { de: "Dolj", hu: "Dolj", ro: "Dolj", en: "Dolj" },
  "RO-GL": { de: "Galați", hu: "Galac", ro: "Galați", en: "Galați" },
  "RO-GR": { de: "Giurgiu", hu: "Gyurgyevó", ro: "Giurgiu", en: "Giurgiu" },
  "RO-GJ": { de: "Gorj", hu: "Gorzs", ro: "Gorj", en: "Gorj" },
  "RO-HR": { de: "Harghita", hu: "Hargita", ro: "Harghita", en: "Harghita" },
  "RO-HD": { de: "Hunedoara", hu: "Hunyad", ro: "Hunedoara", en: "Hunedoara" },
  "RO-IL": { de: "Ialomița", hu: "Ialomița", ro: "Ialomița", en: "Ialomița" },
  "RO-IS": { de: "Jassy", hu: "Jászvásár", ro: "Iași", en: "Iași" },
  "RO-IF": { de: "Ilfov", hu: "Ilfov", ro: "Ilfov", en: "Ilfov" },
  "RO-MM": { de: "Maramureș", hu: "Máramaros", ro: "Maramureș", en: "Maramureș" },
  "RO-MH": { de: "Mehedinți", hu: "Mehedinți", ro: "Mehedinți", en: "Mehedinți" },
  "RO-MS": { de: "Mureș", hu: "Maros", ro: "Mureș", en: "Mureș" },
  "RO-NT": { de: "Neamț", hu: "Neamț", ro: "Neamț", en: "Neamț" },
  "RO-OT": { de: "Olt", hu: "Olt", ro: "Olt", en: "Olt" },
  "RO-PH": { de: "Prahova", hu: "Prahova", ro: "Prahova", en: "Prahova" },
  "RO-SM": { de: "Sathmar", hu: "Szatmár", ro: "Satu Mare", en: "Satu Mare" },
  "RO-SJ": { de: "Sălaj", hu: "Szilágy", ro: "Sălaj", en: "Sălaj" },
  "RO-SB": { de: "Hermannstadt", hu: "Szeben", ro: "Sibiu", en: "Sibiu" },
  "RO-SV": { de: "Suczawa", hu: "Szucsáva", ro: "Suceava", en: "Suceava" },
  "RO-TR": { de: "Teleorman", hu: "Teleorman", ro: "Teleorman", en: "Teleorman" },
  "RO-TM": { de: "Temesch", hu: "Temes", ro: "Timiș", en: "Timiș" },
  "RO-TL": { de: "Tulcea", hu: "Tulcea", ro: "Tulcea", en: "Tulcea" },
  "RO-VS": { de: "Vaslui", hu: "Vaslui", ro: "Vaslui", en: "Vaslui" },
  "RO-VL": { de: "Vâlcea", hu: "Vâlcea", ro: "Vâlcea", en: "Vâlcea" },
  "RO-VN": { de: "Vrancea", hu: "Vráncea", ro: "Vrancea", en: "Vrancea" },
};

const CAPITALS = {
  "RO-AB": "Alba Iulia", "RO-AR": "Arad", "RO-AG": "Pitești", "RO-BC": "Bacău",
  "RO-BH": "Oradea", "RO-BN": "Bistrița", "RO-BT": "Botoșani", "RO-BV": "Brașov",
  "RO-BR": "Brăila", "RO-B": "București", "RO-BZ": "Buzău", "RO-CS": "Reșița",
  "RO-CL": "Călărași", "RO-CJ": "Cluj-Napoca", "RO-CT": "Constanța", "RO-CV": "Sfântu Gheorghe",
  "RO-DB": "Târgoviște", "RO-DJ": "Craiova", "RO-GL": "Galați", "RO-GR": "Giurgiu",
  "RO-GJ": "Târgu Jiu", "RO-HR": "Miercurea Ciuc", "RO-HD": "Deva", "RO-IL": "Slobozia",
  "RO-IS": "Iași", "RO-IF": "Buftea", "RO-MM": "Baia Mare", "RO-MH": "Drobeta-Turnu Severin",
  "RO-MS": "Târgu Mureș", "RO-NT": "Piatra Neamț", "RO-OT": "Slatina", "RO-PH": "Ploiești",
  "RO-SM": "Satu Mare", "RO-SJ": "Zalău", "RO-SB": "Sibiu", "RO-SV": "Suceava",
  "RO-TR": "Alexandria", "RO-TM": "Timișoara", "RO-TL": "Tulcea", "RO-VS": "Vaslui",
  "RO-VL": "Râmnicu Vâlcea", "RO-VN": "Focșani",
};

// ─── Compute bbox ───────────────────────────────────────────────────────────
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

// ─── Projection (equirectangular with cos(lat) stretch) ─────────────────────
const W = 1000;
const H = 700; // Romania wider than tall
const padding = 20;
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

function project([lon, lat]) {
  const x = offX + (lon - minLon) * latStretch * scale;
  const y = offY + (maxLat - lat) * scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

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

function largestRing(f) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  let best = null, bestLen = 0;
  for (const poly of polys) {
    for (const ring of poly) {
      if (ring.length > bestLen) { best = ring; bestLen = ring.length; }
    }
  }
  return best;
}

function centroid(ring) {
  let cx = 0, cy = 0, n = 0;
  for (const [lon, lat] of ring) { cx += lon; cy += lat; n++; }
  return [cx / n, cy / n];
}

// ─── Build entries ──────────────────────────────────────────────────────────
const entries = [];
const unmapped = [];
for (const f of raw.features) {
  const rawName = f.properties.NAME_1 || f.properties.name;
  const id = NAME_TO_ID[rawName];
  if (!id) {
    unmapped.push(rawName);
    continue;
  }
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

if (unmapped.length) {
  console.warn("Unmapped county names (not in NAME_TO_ID):", unmapped);
}

entries.sort((a, b) => a.id.localeCompare(b.id));

const body = entries
  .map(e => `  {
    id: ${JSON.stringify(e.id)},
    name: ${JSON.stringify(e.name)},
    capital: ${JSON.stringify(e.capital)},
    labelX: ${e.labelX}, labelY: ${e.labelY},
    path: ${JSON.stringify(e.d)},
  }`)
  .join(",\n");

const out = `// Auto-generated from GabrielRondelli/geojson romania-counties (real geographic data)
// Source: https://github.com/GabrielRondelli/geojson
// Projection: equirectangular, cos(lat) stretched. ViewBox 0 0 ${W} ${H}.

export const romaniaViewBox = "0 0 ${W} ${H}";

export const ROMANIA_PROJECTION = {
  minLon: ${minLon},
  maxLon: ${maxLon},
  minLat: ${minLat},
  maxLat: ${maxLat},
  latStretch: ${latStretch},
  scale: ${scale},
  offX: ${offX},
  offY: ${offY},
};

export function projectCoordsRO(lon: number, lat: number): [number, number] {
  const p = ROMANIA_PROJECTION;
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export interface JudetPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const romaniaMap: JudetPath[] = [
${body}
];
`;

fs.writeFileSync(OUTPUT, out);
console.log(`Wrote ${OUTPUT}`);
console.log(`Features: ${entries.length}`);
console.log(`Unmapped: ${unmapped.length}`);
console.log(`Total path chars: ${entries.reduce((s, e) => s + e.d.length, 0)}`);
