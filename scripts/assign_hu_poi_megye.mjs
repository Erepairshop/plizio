// Assign HU POI parent to nearest HU-XX megye center based on coords.
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const DATA_DIR = path.join(REPO, "lib/visualLab/data");
const ADMIN2 = path.join(REPO, "lib/visualLab/maps/hungaryAdmin2.svg.ts");

// Parse megye centers from hungaryAdmin2.svg.ts
const adminSrc = fs.readFileSync(ADMIN2, "utf8");
// Parse: "HU-XX": [ { id:..., centerLat:N, centerLng:N, ... } ]
const megyeCenters = [];
const idRe = /"(HU-[A-Z]{2})":\s*\[/g;
let m;
while ((m = idRe.exec(adminSrc)) !== null) {
  const after = adminSrc.slice(m.index, m.index + 1500);
  const latM = /centerLat:\s*([-\d.]+)/.exec(after);
  const lngM = /centerLng:\s*([-\d.]+)/.exec(after);
  if (latM && lngM) {
    megyeCenters.push({ id: m[1], lat: parseFloat(latM[1]), lng: parseFloat(lngM[1]) });
  }
}
console.log(`Loaded ${megyeCenters.length} megye centers`);

function nearestMegye(lon, lat) {
  let best = null, bestD = Infinity;
  for (const c of megyeCenters) {
    const dx = c.lng - lon;
    const dy = c.lat - lat;
    const d = dx * dx + dy * dy;
    if (d < bestD) { bestD = d; best = c; }
  }
  return best?.id ?? "HU";
}

const hu_files = ["hungaryPoi.ts"];
for (const f of fs.readdirSync(DATA_DIR)) {
  if (f.startsWith("poiExtraHu") && f.endsWith(".ts")) hu_files.push(f);
}
console.log(`Files: ${hu_files.join(", ")}`);

let totalChanges = 0;
for (const fname of hu_files) {
  const fp = path.join(DATA_DIR, fname);
  if (!fs.existsSync(fp)) continue;
  let src = fs.readFileSync(fp, "utf8");
  let count = 0;
  // Match each POI block (id...coords...parent) and rewrite parent if HU
  src = src.replace(
    /(id:\s*"[^"]+",\s*type:\s*"[^"]+",\s*parent:\s*)"HU"(,\s*coords:\s*\[\s*([-\d.]+),\s*([-\d.]+)\s*\])/g,
    (match, prefix, suffix, lon, lat) => {
      const newParent = nearestMegye(parseFloat(lon), parseFloat(lat));
      count++;
      return `${prefix}"${newParent}"${suffix}`;
    }
  );
  if (count > 0) {
    fs.writeFileSync(fp, src);
    console.log(`${fname}: ${count} POIs reassigned`);
    totalChanges += count;
  }
}
console.log(`\nTOTAL: ${totalChanges} HU POIs reassigned to megye`);
