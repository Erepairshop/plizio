// Programmatic fix: regenerate question text from targetPoiId(s) and recalculate haversine.
// Solves: question mentions POI X but targetPoiId points to POI Y mismatch.
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const DATA_DIR = path.join(REPO, "lib/visualLab/data");
const QUIZ_DIR = path.join(REPO, "lib/visualLab/quiz/data/de");

// ── Build POI index ──
function parsePoiFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const out = [];
  // Split on object-start (works for both `id:` and `"id":` styles, both indents).
  const blocks = src.split(/\n\s*\{\s*\n/);
  for (const block of blocks) {
    const idM = /["']?id["']?\s*:\s*["']([^"']+)["']/.exec(block);
    if (!idM) continue;
    const nameDeM = /name\s*:\s*\{[^}]*?["']?de["']?\s*:\s*["']([^"']+)["']/s.exec(block);
    if (!nameDeM) continue;
    const nameHuM = /["']?hu["']?\s*:\s*["']([^"']+)["']/.exec(nameDeM[0]);
    const nameRoM = /["']?ro["']?\s*:\s*["']([^"']+)["']/.exec(nameDeM[0]);
    const nameEnM = /["']?en["']?\s*:\s*["']([^"']+)["']/.exec(nameDeM[0]);
    const coordsM = /coords\s*:\s*\[\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\]/.exec(block);
    out.push({
      id: idM[1],
      name_de: nameDeM[1],
      name_hu: nameHuM ? nameHuM[1] : nameDeM[1],
      name_ro: nameRoM ? nameRoM[1] : nameDeM[1],
      name_en: nameEnM ? nameEnM[1] : nameDeM[1],
      coords: coordsM ? [parseFloat(coordsM[1]), parseFloat(coordsM[2])] : null,
    });
  }
  return out;
}

const POI_INDEX = new Map();
for (const f of fs.readdirSync(DATA_DIR)) {
  if (f === "poi.ts" || f.startsWith("poi") && f.endsWith(".ts")) {
    for (const p of parsePoiFile(path.join(DATA_DIR, f))) {
      POI_INDEX.set(p.id, p);
    }
  }
}
console.log(`Indexed ${POI_INDEX.size} POIs`);

// ── Haversine ──
function haversineKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b[1] - a[1]);
  const dLon = toRad(b[0] - a[0]);
  const lat1 = toRad(a[1]);
  const lat2 = toRad(b[1]);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

// ── Question regenerators ──
function regenerateQuestion(task) {
  if (task.type === "click_poi" && task.targetPoiId) {
    const p = POI_INDEX.get(task.targetPoiId);
    if (!p) return null;
    return {
      de: `Klicke auf ${p.name_de} auf der Karte!`,
      hu: `Kattints a térképen a következőre: ${p.name_hu}!`,
      ro: `Apasă pe ${p.name_ro} pe hartă!`,
      en: `Click on ${p.name_en} on the map!`,
    };
  }
  if (task.type === "distance_guess" && task.targetPoiId && task.targetPoiId2) {
    const a = POI_INDEX.get(task.targetPoiId);
    const b = POI_INDEX.get(task.targetPoiId2);
    if (!a || !b) return null;
    const km = a.coords && b.coords ? Math.round(haversineKm(a.coords, b.coords)) : null;
    return {
      question: {
        de: `Wie weit ist ${a.name_de} von ${b.name_de} entfernt?`,
        hu: `Milyen messze van ${a.name_hu} és ${b.name_hu} egymástól?`,
        ro: `Cât de departe este ${a.name_ro} de ${b.name_ro}?`,
        en: `How far is ${a.name_en} from ${b.name_en}?`,
      },
      expectedKm: km,
    };
  }
  if (task.type === "click_county" && task.targetCountyId) {
    const stateNames = {
      "DE-BY": "Bayern", "DE-BW": "Baden-Württemberg", "DE-NW": "Nordrhein-Westfalen",
      "DE-HE": "Hessen", "DE-NI": "Niedersachsen", "DE-RP": "Rheinland-Pfalz",
      "DE-SN": "Sachsen", "DE-ST": "Sachsen-Anhalt", "DE-SH": "Schleswig-Holstein",
      "DE-SL": "Saarland", "DE-TH": "Thüringen", "DE-MV": "Mecklenburg-Vorpommern",
      "DE-BB": "Brandenburg", "DE-BE": "Berlin", "DE-HB": "Bremen", "DE-HH": "Hamburg",
    };
    const n = stateNames[task.targetCountyId] ?? task.targetCountyId;
    return {
      de: `Klicke auf das Bundesland ${n}!`,
      hu: `Kattints a tartományra: ${n}!`,
      ro: `Apasă pe landul ${n}!`,
      en: `Click on the state of ${n}!`,
    };
  }
  if (task.type === "spot_error" && task.optionPoiIds && task.wrongPoiId) {
    return {
      de: `Welcher Ort passt nicht zu den anderen?`,
      hu: `Melyik hely nem illik a többihez?`,
      ro: `Care loc nu se potrivește cu celelalte?`,
      en: `Which place doesn't match the others?`,
    };
  }
  if (task.type === "order_by" && task.orderedPoiIds && task.orderBy) {
    const dirText = {
      "west_to_east": { de: "von West nach Ost", hu: "nyugatról keletre", ro: "de la vest la est", en: "from west to east" },
      "east_to_west": { de: "von Ost nach West", hu: "keletről nyugatra", ro: "de la est la vest", en: "from east to west" },
      "by_elevation_asc": { de: "nach Höhe aufsteigend", hu: "magasság szerint növekvően", ro: "după altitudine crescător", en: "by elevation ascending" },
      "by_elevation_desc": { de: "nach Höhe absteigend", hu: "magasság szerint csökkenően", ro: "după altitudine descrescător", en: "by elevation descending" },
    }[task.orderBy] ?? { de: "in der richtigen Reihenfolge", hu: "helyes sorrendben", ro: "în ordinea corectă", en: "in correct order" };
    return {
      de: `Klicke die Orte ${dirText.de} an!`,
      hu: `Kattints a helyekre ${dirText.hu}!`,
      ro: `Apasă pe locuri ${dirText.ro}!`,
      en: `Click the places ${dirText.en}!`,
    };
  }
  return null;
}

// ── Process quiz files ──
let totalChanges = 0;
for (const f of fs.readdirSync(QUIZ_DIR)) {
  if (!f.endsWith("Quiz.ts")) continue;
  const filePath = path.join(QUIZ_DIR, f);
  let src = fs.readFileSync(filePath, "utf8");
  let fileChanges = 0;

  // Match each task object literal by id+type+question pattern
  const taskRegex = /\{\s*id:\s*"([^"]+)",\s*type:\s*"([^"]+)",\s*question:\s*\{[^}]*\},(?:[^{}]|\{[^{}]*\})*?\},?\s*(?=\{|\];)/gs;
  src = src.replace(taskRegex, (match, id, type) => {
    // Parse fields from match
    const targetPoiIdM = /targetPoiId:\s*"([^"]+)"/.exec(match);
    const targetPoiId2M = /targetPoiId2:\s*"([^"]+)"/.exec(match);
    const targetCountyIdM = /targetCountyId:\s*"([^"]+)"/.exec(match);
    const wrongPoiIdM = /wrongPoiId:\s*"([^"]+)"/.exec(match);
    const orderByM = /orderBy:\s*"([^"]+)"/.exec(match);
    const optionPoiIdsM = /optionPoiIds:\s*\[([^\]]+)\]/.exec(match);
    const orderedPoiIdsM = /orderedPoiIds:\s*\[([^\]]+)\]/.exec(match);
    const task = {
      id, type,
      targetPoiId: targetPoiIdM?.[1],
      targetPoiId2: targetPoiId2M?.[1],
      targetCountyId: targetCountyIdM?.[1],
      wrongPoiId: wrongPoiIdM?.[1],
      orderBy: orderByM?.[1],
      optionPoiIds: optionPoiIdsM ? optionPoiIdsM[1].match(/"[^"]+"/g)?.map(s => s.slice(1, -1)) : null,
      orderedPoiIds: orderedPoiIdsM ? orderedPoiIdsM[1].match(/"[^"]+"/g)?.map(s => s.slice(1, -1)) : null,
    };
    const regen = regenerateQuestion(task);
    if (!regen) return match;

    let newQ;
    let newExpKm = null;
    if (regen.question) { newQ = regen.question; newExpKm = regen.expectedKm; }
    else { newQ = regen; }

    let result = match;
    // Replace question block
    result = result.replace(
      /question:\s*\{[^}]*\}/s,
      `question: {\n      de: ${JSON.stringify(newQ.de)},\n      hu: ${JSON.stringify(newQ.hu)},\n      ro: ${JSON.stringify(newQ.ro)},\n      en: ${JSON.stringify(newQ.en)},\n    }`
    );
    // Replace expectedKm if applicable
    if (newExpKm != null && /expectedKm:/.test(result)) {
      result = result.replace(/expectedKm:\s*\d+/, `expectedKm: ${newExpKm}`);
    }
    if (result !== match) fileChanges++;
    return result;
  });

  if (fileChanges > 0) {
    fs.writeFileSync(filePath, src);
    console.log(`${f}: ${fileChanges} tasks regenerated`);
    totalChanges += fileChanges;
  }
}

console.log(`\nTOTAL: ${totalChanges} tasks regenerated`);
