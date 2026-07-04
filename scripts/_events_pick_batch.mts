// Pick the next N undone EU-city targets (most-visited first) into a batch file
// that the eu-events-gather workflow's research agents read by index. Resumable:
// skips anything already in _eu_events_done.json. RU/BY/UA are skipped by default
// (sanctions/war, poor ticketed-event coverage for the DE/HU/RO/EN audience) but
// remain in the worklist; pass --include=RU,UA to opt them back in.
//
// Run: npx tsx scripts/_events_pick_batch.mts 20
import fs from "node:fs";
import path from "node:path";

const N = Number(process.argv[2] || "20");
const includeArg = (process.argv.find(a => a.startsWith("--include=")) || "").split("=")[1] || "";
const forceInclude = new Set(includeArg.split(",").map(s => s.trim().toUpperCase()).filter(Boolean));
const DEFAULT_SKIP = new Set(["RU", "BY", "UA"]);
const skip = new Set([...DEFAULT_SKIP].filter(x => !forceInclude.has(x)));

const DATA = path.resolve(process.cwd(), "public/data");
const worklist: any[] = JSON.parse(fs.readFileSync(path.join(DATA, "_eu_events_worklist.json"), "utf8"));
const donePath = path.join(DATA, "_eu_events_done.json");
const done: string[] = fs.existsSync(donePath) ? JSON.parse(fs.readFileSync(donePath, "utf8")) : [];
const doneSet = new Set(done);

const batch: any[] = [];
for (const t of worklist) {
  if (batch.length >= N) break;
  if (doneSet.has(t.id)) continue;
  if (skip.has(t.iso2)) continue;
  batch.push(t);
}

const batchPath = path.join(DATA, "_eu_events_batch.json");
fs.writeFileSync(batchPath, JSON.stringify(batch, null, 1), "utf8");
console.log(`skip iso2: ${[...skip].join(",") || "(none)"}  | done so far: ${doneSet.size}  | worklist: ${worklist.length}`);
console.log(`\nPicked ${batch.length} targets -> ${batchPath}\n`);
batch.forEach((t, i) => {
  const nm = t.name?.en || t.name?.de || t.id;
  console.log(`  [${String(i).padStart(2)}] ${t.iso2} ${String(t.pop).padStart(9)}  ${t.id.padEnd(30)} ${nm}`);
});
