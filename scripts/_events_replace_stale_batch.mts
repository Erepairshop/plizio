import fs from "node:fs";
import path from "node:path";

const inputPaths = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const APPLY = process.argv.includes("--apply");
const CUTOFF = "2026-07-26";
const REQUIRED_LANGS = ["de", "hu", "ro", "en"];

if (inputPaths.length === 0) {
  throw new Error("usage: npx tsx scripts/_events_replace_stale_batch.mts <results.json...> [--apply]");
}

const dataDir = path.resolve(process.cwd(), "public", "data");
const sidecarPath = path.join(dataDir, "poi-yearly-highlights.json");
const deltaPath = path.join(dataDir, "_eu_events_delta.txt");
const sidecar: Record<string, any[]> = JSON.parse(fs.readFileSync(sidecarPath, "utf8"));

const normalize = (value: unknown) => String(value || "")
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "")
  .slice(0, 80);

const isHttpUrl = (value: unknown) => {
  try {
    const url = new URL(String(value || ""));
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const isIsoDate = (value: unknown) => /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));

const batches = inputPaths.flatMap((inputPath) => {
  if (!fs.existsSync(inputPath)) throw new Error(`results file not found: ${inputPath}`);
  const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  return Array.isArray(raw) ? raw : raw.results || [];
});

const seenIds = new Set<string>();
const changedIds: string[] = [];
let removed = 0;
let added = 0;

for (const result of batches) {
  const id = String(result?.id || "");
  if (!id) throw new Error("result is missing id");
  if (seenIds.has(id)) throw new Error(`duplicate POI across result files: ${id}`);
  seenIds.add(id);
  if (!(id in sidecar)) throw new Error(`unknown POI in highlights sidecar: ${id}`);

  const incoming = Array.isArray(result.events) ? result.events : [];
  if (incoming.length === 0) throw new Error(`no replacement events supplied for ${id}`);

  for (const event of incoming) {
    const endDate = event.date_end || event.end_date || event.endDate;
    const isRecurrent = !!(event.period && typeof event.period === "object" && event.period.recurrent);
    const remainsRelevant = (isIsoDate(endDate) && endDate >= CUTOFF) || isRecurrent;
    if (!isIsoDate(event.date) || (event.date < CUTOFF && !remainsRelevant)) {
      throw new Error(`${id}: invalid or stale event date: ${event.date}`);
    }
    if (!isHttpUrl(event.source_url)) {
      throw new Error(`${id}: source_url must be an HTTP(S) URL: ${event.source_url}`);
    }
    for (const lang of REQUIRED_LANGS) {
      if (!String(event.title?.[lang] || "").trim()) throw new Error(`${id}: missing title.${lang}`);
      if (!String(event.summary?.[lang] || "").trim()) throw new Error(`${id}: missing summary.${lang}`);
    }
    if (event.image_url && !isHttpUrl(event.image_url)) {
      throw new Error(`${id}: image_url must be an HTTP(S) URL: ${event.image_url}`);
    }
  }

  const existing = Array.isArray(sidecar[id]) ? sidecar[id] : [];
  const retained = existing.filter((event) => {
    if (!isIsoDate(event.date)) return false;
    const hasRequiredContent = REQUIRED_LANGS.every((lang) =>
      String(event.title?.[lang] || "").trim() && String(event.summary?.[lang] || "").trim(),
    );
    if (!hasRequiredContent) return false;
    const endDate = event.date_end || event.end_date || event.endDate;
    const isRecurrent = !!(event.period && typeof event.period === "object" && event.period.recurrent);
    return event.date >= CUTOFF || (isIsoDate(endDate) && endDate >= CUTOFF) || isRecurrent;
  });
  removed += existing.length - retained.length;

  // One official programme page may legitimately describe several distinct events.
  // URL dedup protects against re-runs; title dedup handles the incoming batch.
  const retainedSourceUrls = new Set(retained.map((event) => String(event.source_url || "")).filter(Boolean));
  const titles = new Set(retained.map((event) => normalize(event.title?.en || event.title?.de)));
  const merged = [...retained];
  for (const event of incoming) {
    const titleKey = normalize(event.title?.en || event.title?.de);
    if (retainedSourceUrls.has(event.source_url) || (titleKey && titles.has(titleKey))) continue;
    merged.push({ ...event, _src: "web-research" });
    titles.add(titleKey);
    added++;
  }

  merged.sort((a, b) => String(a.date || "9999").localeCompare(String(b.date || "9999")));
  sidecar[id] = merged;
  changedIds.push(id);
}

console.log(`cutoff: ${CUTOFF}`);
console.log(`POIs: ${changedIds.length} | stale removed: ${removed} | researched added: ${added}`);
console.log(`mode: ${APPLY ? "APPLY" : "DRY RUN"}`);

if (!APPLY) process.exit(0);

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const backupPath = `${sidecarPath}.before_stale_refresh.${stamp}.bak`;
fs.copyFileSync(sidecarPath, backupPath);
fs.writeFileSync(sidecarPath, JSON.stringify(sidecar), "utf8");

const previousDelta = fs.existsSync(deltaPath)
  ? fs.readFileSync(deltaPath, "utf8").split(/\r?\n/).filter(Boolean)
  : [];
fs.writeFileSync(deltaPath, [...new Set([...previousDelta, ...changedIds])].join("\n") + "\n", "utf8");
console.log(`backup: ${backupPath}`);
console.log(`delta: ${deltaPath}`);
