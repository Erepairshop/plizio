// Precise: point-in-polygon containment using country-map megye paths
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const COUNTRY = path.join(REPO, "lib/visualLab/maps/magyarorszag.svg.ts");
const POI_FILE = path.join(REPO, "lib/visualLab/data/hungaryPoi.ts");

// Parse projection from country map
const cSrc = fs.readFileSync(COUNTRY, "utf8");
const projM = /HUNGARY_PROJECTION\s*=\s*\{([^}]+)\}/.exec(cSrc);
const projObj = {};
for (const kv of projM[1].matchAll(/(\w+):\s*([-\d.]+)/g)) {
  projObj[kv[1]] = parseFloat(kv[2]);
}
const proj = projObj;
console.log("Proj:", proj);

function project(lon, lat) {
  return [
    proj.offX + (lon - proj.minLon) * proj.latStretch * proj.scale,
    proj.offY + (proj.maxLat - lat) * proj.scale,
  ];
}

// Parse megye paths
const blockRe = /\{\s*id:\s*"(HU-[A-Z]{2})",[\s\S]*?path:\s*"([^"]+)"/g;
const megyek = [];
let m;
while ((m = blockRe.exec(cSrc)) !== null) {
  megyek.push({ id: m[1], path: m[2] });
}
console.log(`Loaded ${megyek.length} megye paths`);

// Convert SVG path to polygon rings (M..L..L..Z, M..L..Z multi)
function pathToRings(d) {
  const rings = [];
  let current = [];
  // Tokens: commands and numbers
  const tokens = d.match(/[ML]|-?\d+\.?\d*/g) ?? [];
  let i = 0;
  let cmd = null;
  while (i < tokens.length) {
    const t = tokens[i];
    if (t === "M" || t === "L") {
      cmd = t;
      i++;
      if (t === "M" && current.length > 0) {
        rings.push(current);
        current = [];
      }
      continue;
    }
    if (t === "Z" || t === "z") {
      if (current.length > 0) { rings.push(current); current = []; }
      i++;
      continue;
    }
    // Numbers (x y)
    const x = parseFloat(tokens[i]);
    const y = parseFloat(tokens[i + 1]);
    current.push([x, y]);
    i += 2;
  }
  if (current.length > 0) rings.push(current);
  return rings;
}

function pointInRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi || 1e-12) + xi) inside = !inside;
  }
  return inside;
}

const megyePolys = megyek.map(m => ({ id: m.id, rings: pathToRings(m.path) }));

function findMegye(lon, lat) {
  const [px, py] = project(lon, lat);
  for (const m of megyePolys) {
    for (const ring of m.rings) {
      if (pointInRing(px, py, ring)) return m.id;
    }
  }
  return null;
}

// Process POI file
let src = fs.readFileSync(POI_FILE, "utf8");
let count = 0, unmatched = 0;
src = src.replace(
  /(parent:\s*)"(HU-[A-Z]{2})"(,\s*coords:\s*\[\s*([-\d.]+),\s*([-\d.]+)\s*\])/g,
  (match, prefix, oldParent, suffix, lon, lat) => {
    const newParent = findMegye(parseFloat(lon), parseFloat(lat));
    if (!newParent) { unmatched++; return match; }
    if (newParent !== oldParent) count++;
    return `${prefix}"${newParent}"${suffix}`;
  }
);
fs.writeFileSync(POI_FILE, src);
console.log(`Reassigned ${count} POIs to correct megye via point-in-polygon. ${unmatched} could not be matched.`);
