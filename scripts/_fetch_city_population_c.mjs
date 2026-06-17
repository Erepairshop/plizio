// Phase C: fill still-missing city populations from Wikidata P1082 via coordinate
// radius search (wikibase:around). Captures point-in-time year (P585) where present.
// Resumable: skips ids already in _city_pop_wikidata.json. Run in background.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const MISSING = path.join(ROOT, "public/data/_city_pop_missing.json");
const WD_OUT = path.join(ROOT, "public/data/_city_pop_wikidata.json");
const LOG = path.join(ROOT, "_geonames/_phasec.log");
const ENDPOINT = "https://query.wikidata.org/sparql";
const UA = "PlizioCityPop/1.0 (https://plizio.com; borota25@gmail.com)";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (m) => { fs.appendFileSync(LOG, m + "\n"); console.log(m); };

const missing = JSON.parse(fs.readFileSync(MISSING, "utf8"));
const out = fs.existsSync(WD_OUT) ? JSON.parse(fs.readFileSync(WD_OUT, "utf8")) : {};

function query(lat, lon) {
  return `SELECT ?place ?placeLabel ?pop ?dist ?date WHERE {
  SERVICE wikibase:around {
    ?place wdt:P625 ?loc .
    bd:serviceParam wikibase:center "Point(${lon} ${lat})"^^geo:wktLiteral .
    bd:serviceParam wikibase:radius "5" .
    bd:serviceParam wikibase:distance ?dist .
  }
  ?place wdt:P1082 ?pop .
  OPTIONAL { ?place p:P1082 ?st . ?st pq:P585 ?date . }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en,de,hu,fr". }
} ORDER BY ASC(?dist) LIMIT 8`;
}

let done = 0, filled = 0, fail = 0;
for (const p of missing) {
  if (out[p.id] !== undefined) { done++; continue; }
  const lon = p.coords?.[0], lat = p.coords?.[1];
  if (typeof lat !== "number" || typeof lon !== "number") { out[p.id] = null; continue; }
  let ok = false;
  for (let attempt = 0; attempt < 3 && !ok; attempt++) {
    try {
      const url = ENDPOINT + "?format=json&query=" + encodeURIComponent(query(lat, lon));
      const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/sparql-results+json" } });
      if (res.status === 429) { await sleep(5000); continue; }
      if (!res.ok) { await sleep(1500); continue; }
      const j = await res.json();
      const rows = j.results?.bindings || [];
      // nearest row (already ASC dist); accept ≤4km. pick best year per that place.
      let chosen = null;
      for (const r of rows) {
        const dist = parseFloat(r.dist?.value); // km
        if (Number.isNaN(dist) || dist > 4) continue;
        const pop = parseInt(r.pop?.value, 10);
        if (!pop || pop <= 0) continue;
        const yr = r.date?.value ? parseInt(r.date.value.slice(0, 4), 10) : null;
        if (!chosen || chosen.qid === r.place.value.split("/").pop()) {
          // same nearest place: keep the latest-year population value
          if (!chosen) chosen = { qid: r.place.value.split("/").pop(), label: r.placeLabel?.value || "", pop, dist: Math.round(dist * 10) / 10, year: yr };
          else if (yr && (!chosen.year || yr > chosen.year)) { chosen.pop = pop; chosen.year = yr; }
        }
      }
      out[p.id] = chosen; // null if nothing within gate
      if (chosen) filled++;
      ok = true;
    } catch (e) {
      await sleep(1500);
    }
  }
  if (!ok) { out[p.id] = null; fail++; }
  done++;
  if (done % 25 === 0) {
    fs.writeFileSync(WD_OUT, JSON.stringify(out));
    log(`[phaseC] ${done}/${missing.length} processed, filled ${filled}, fail ${fail}`);
  }
  await sleep(350);
}
fs.writeFileSync(WD_OUT, JSON.stringify(out));
log(`[phaseC] DONE ${done}/${missing.length} processed, filled ${filled}, fail ${fail}`);
