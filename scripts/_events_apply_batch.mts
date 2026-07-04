// Merge a workflow results file into public/data/poi-yearly-highlights.json.
// Safe: backs up the sidecar first, dedups by source_url (+ normalized title),
// caps at MAX_PER_POI, preserves existing entries (insertion order, first wins).
// Marks every processed id done in _eu_events_done.json; records empty cities in
// _eu_events_empty.json for optional later retry. Emits a delta id list.
//
// Run: npx tsx scripts/_events_apply_batch.mts <results.json> [--apply]
import fs from "node:fs";
import path from "node:path";

const inPath = process.argv[2];
const APPLY = process.argv.includes("--apply");
if (!inPath || !fs.existsSync(inPath)) throw new Error("results file not found: " + inPath);

const DATA = path.resolve(process.cwd(), "public/data");
const SIDE = path.join(DATA, "poi-yearly-highlights.json");
const DONE = path.join(DATA, "_eu_events_done.json");
const EMPTY = path.join(DATA, "_eu_events_empty.json");
const DELTA = path.join(DATA, "_eu_events_delta.txt");
const MAX_PER_POI = 15;

const raw = JSON.parse(fs.readFileSync(inPath, "utf8"));
const results: any[] = Array.isArray(raw) ? raw : (raw.results || []);
const side: Record<string, any[]> = JSON.parse(fs.readFileSync(SIDE, "utf8"));
const done: string[] = fs.existsSync(DONE) ? JSON.parse(fs.readFileSync(DONE, "utf8")) : [];
const doneSet = new Set(done);
const empty: string[] = fs.existsSync(EMPTY) ? JSON.parse(fs.readFileSync(EMPTY, "utf8")) : [];
const emptySet = new Set(empty);

const norm = (s: any) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 40);
const changed: string[] = [];
let added = 0, skipped = 0, processed = 0, emptied = 0;
const DASH = /[‒–—―−]/;

for (const r of results) {
  const id = r.id;
  if (!id || id === "__none__") continue;
  processed++;
  const events: any[] = Array.isArray(r.events) ? r.events : [];
  if (events.length === 0) { if (!emptySet.has(id)) { empty.push(id); emptySet.add(id); } emptied++; doneSet.add(id); continue; }

  const existing = Array.isArray(side[id]) ? side[id] : [];
  // URL-dedup only vs PRE-EXISTING entries (re-run guard). Within a fresh batch,
  // distinct events often share one generic listing/ticket URL, so intra-batch
  // dedup is by normalized TITLE only (distinct title = distinct event).
  const existingUrl = new Set(existing.map((e: any) => String(e.source_url || "")).filter(Boolean));
  const seenTitle = new Set(existing.map((e: any) => norm(e.title?.en || e.title?.de)));
  const merged = [...existing];
  for (const ev of events) {
    if (merged.length >= MAX_PER_POI) break;
    const url = String(ev.source_url || "");
    const tk = norm(ev.title?.en || ev.title?.de);
    if (url && existingUrl.has(url)) { skipped++; continue; }
    if (tk && seenTitle.has(tk)) { skipped++; continue; }
    // sanity: require en title + date
    if (!ev.title?.en || !ev.date) { skipped++; continue; }
    // strip stray long dashes defensively (no source mutation of accents)
    for (const f of ["title", "summary"] as const) {
      if (ev[f] && typeof ev[f] === "object") {
        for (const k of Object.keys(ev[f])) if (typeof ev[f][k] === "string" && DASH.test(ev[f][k])) ev[f][k] = ev[f][k].replace(DASH, ", ");
      }
    }
    ev._src = "web-research";
    merged.push(ev);
    seenTitle.add(tk);
    added++;
  }
  if (merged.length !== existing.length) { side[id] = merged; changed.push(id); }
  doneSet.add(id);
}

console.log(`processed cities: ${processed}  | events added: ${added}  | dedup-skipped: ${skipped}  | empty cities: ${emptied}`);
console.log(`POIs changed: ${changed.length}`);

if (!APPLY) { console.log("\nDRY RUN — pass --apply to write. Nothing changed."); process.exit(0); }

// backup then write
const stamp = Math.floor(fs.statSync(SIDE).mtimeMs);
fs.copyFileSync(SIDE, SIDE + `.before_events.${stamp}.bak`);
fs.writeFileSync(SIDE, JSON.stringify(side), "utf8");
fs.writeFileSync(DONE, JSON.stringify([...doneSet], null, 0), "utf8");
fs.writeFileSync(EMPTY, JSON.stringify(empty, null, 0), "utf8");
// Union with any existing delta ids so multiple applies in one deploy-cycle accumulate.
const prevDelta = fs.existsSync(DELTA) ? fs.readFileSync(DELTA, "utf8").split(/\r?\n/).filter(Boolean) : [];
const allDelta = [...new Set([...prevDelta, ...changed])];
fs.writeFileSync(DELTA, allDelta.join("\n") + (allDelta.length ? "\n" : ""), "utf8");
console.log(`\nAPPLIED. backup: ${path.basename(SIDE)}.before_events.${stamp}.bak`);
console.log(`done-list now: ${doneSet.size}  | empty-list: ${empty.length}  | delta ids -> ${DELTA}`);
