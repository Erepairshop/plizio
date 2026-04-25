import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const ADMIN2 = path.join(REPO, "lib/visualLab/maps/hungaryAdmin2.svg.ts");
const FILE = path.join(REPO, "lib/visualLab/data/hungaryPoi.ts");

// Direct slug -> HU-XX
const SLUG_MAP = {
  "budapest": "HU-BU",
  "baranya": "HU-BA",
  "bacs-kiskun": "HU-BK",
  "bekes": "HU-BE",
  "borsod-abauj-zemplen": "HU-BZ",
  "csongrad-csanad": "HU-CS",
  "fejer": "HU-FE",
  "gyor-moson-sopron": "HU-GS",
  "hajdu-bihar": "HU-HB",
  "heves": "HU-HE",
  "komarom-esztergom": "HU-KE",
  "nograd": "HU-NO",
  "pest": "HU-PE",
  "somogy": "HU-SO",
  "szabolcs-szatmar-bereg": "HU-SZ",
  "jasz-nagykun-szolnok": "HU-JN",
  "tolna": "HU-TO",
  "vas": "HU-VA",
  "veszprem": "HU-VE",
  "zala": "HU-ZA",
};

// For city/place slugs (e.g., "visegrad", "szentendre") -> nearestMegye by coords.
const adminSrc = fs.readFileSync(ADMIN2, "utf8");
const megyeCenters = [];
const idRe = /"(HU-[A-Z]{2})":\s*\[/g;
let m;
while ((m = idRe.exec(adminSrc)) !== null) {
  const after = adminSrc.slice(m.index, m.index + 1500);
  const latM = /centerLat:\s*([-\d.]+)/.exec(after);
  const lngM = /centerLng:\s*([-\d.]+)/.exec(after);
  if (latM && lngM) megyeCenters.push({ id: m[1], lat: parseFloat(latM[1]), lng: parseFloat(lngM[1]) });
}

function nearestMegye(lon, lat) {
  let best = "HU", bestD = Infinity;
  for (const c of megyeCenters) {
    const d = (c.lng - lon) ** 2 + (c.lat - lat) ** 2;
    if (d < bestD) { bestD = d; best = c.id; }
  }
  return best;
}

let src = fs.readFileSync(FILE, "utf8");
let count = 0;

// Match each POI block with its parent + coords, rewrite parent
src = src.replace(
  /(parent:\s*)"([^"]+)"(,\s*coords:\s*\[\s*([-\d.]+),\s*([-\d.]+)\s*\])/g,
  (match, prefix, parent, suffix, lon, lat) => {
    if (parent.startsWith("HU-")) return match; // already correct
    if (parent === "EU" || parent === "HU") return match.replace(`"${parent}"`, `"${nearestMegye(parseFloat(lon), parseFloat(lat))}"`);
    if (SLUG_MAP[parent]) {
      count++;
      return `${prefix}"${SLUG_MAP[parent]}"${suffix}`;
    }
    // Unknown slug -> nearestMegye fallback
    const newParent = nearestMegye(parseFloat(lon), parseFloat(lat));
    count++;
    return `${prefix}"${newParent}"${suffix}`;
  }
);

fs.writeFileSync(FILE, src);
console.log(`Reassigned ${count} POI parents in hungaryPoi.ts`);
