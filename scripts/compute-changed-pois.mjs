#!/usr/bin/env node
// Compute the set of POI ids whose CONTENT changed between two git refs, for the
// delta-deploy path (generate-poi-html.mts POI_IDS_FILE). Conservative: if a
// POI-affecting change can't be mapped to specific ids, exit 3 → caller does FULL regen.
//
// Usage: node scripts/compute-changed-pois.mjs <BEFORE> <AFTER> <OUTFILE> [SCOPE_LANG]
//   writes one POI id per line to OUTFILE, prints a summary.
//   exit 0 = delta ids written (possibly empty); exit 3 = FULL regen required.
import { execFileSync, execSync } from "node:child_process";
import fs from "node:fs";

const [BEFORE, AFTER, OUTFILE, SCOPE_LANG_RAW = ""] = process.argv.slice(2);
if (!BEFORE || !AFTER || !OUTFILE) {
  console.error("usage: compute-changed-pois.mjs BEFORE AFTER OUTFILE [SCOPE_LANG]");
  process.exit(2);
}
const FULL = (msg) => { console.error(`[delta] FULL regen required: ${msg}`); process.exit(3); };
const sh = (cmd) => execSync(cmd, { encoding: "utf8", maxBuffer: 1 << 30 });
const scopeLangs = SCOPE_LANG_RAW.split(",").map((lang) => lang.trim().toLowerCase()).filter(Boolean);
if (scopeLangs.some((lang) => !/^[a-z]{2}$/.test(lang))) {
  FULL(`invalid language scope: ${SCOPE_LANG_RAW}`);
}

let changed;
let added;
let deleted;
try {
  changed = sh(`git diff --name-only ${BEFORE} ${AFTER}`).split("\n").map((s) => s.trim()).filter(Boolean);
  added = new Set(sh(`git diff --name-only --diff-filter=A ${BEFORE} ${AFTER}`).split("\n").map((s) => s.trim()).filter(Boolean));
  deleted = new Set(sh(`git diff --name-only --diff-filter=D ${BEFORE} ${AFTER}`).split("\n").map((s) => s.trim()).filter(Boolean));
} catch (e) {
  FULL(`git diff failed: ${e.message}`);
}
console.log(`[delta] ${changed.length} changed files (${added.size} added, ${deleted.size} deleted)`);

// ── classifiers ──────────────────────────────────────────────────────────────
const isPoiTs = (f) => /^lib\/visualLab\/data\/.*[Pp]oi.*\.ts$/.test(f) && !f.endsWith(".lite.ts") && !f.includes(".bak") && !f.includes(".before_");
// JSON sidecars keyed by POI id (flat object {poiId: value})
const isFlatPoiJson = (f) =>
  /^public\/data\/poi-faqs.*\.json$/.test(f) ||
  /^public\/data\/poi-yearly-highlights.*\.json$/.test(f) ||
  /^public\/data\/sight-image-map\.json$/.test(f) ||
  /^public\/data\/official-links\.json$/.test(f);
// Per-id-file sidecars: filename (or its dir) is the POI id
const perIdFile = (f) => {
  let m;
  if ((m = f.match(/^public\/data\/city-tips\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/itinerary[^/]*\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/poi-practical\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/sights\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/poi-news\/([^/]+)\.json(?:\.gz)?$/))) return m[1];
  if ((m = f.match(/^public\/poi-images\/([^/]+)\.(?:webp|avif|jpe?g|png)$/i))) return m[1];
  if ((m = f.match(/^public\/data\/i18n\/[a-z]{2}\/([^/]+)\.json$/))) return m[1];
  if ((m = f.match(/^public\/data\/sight-pages\/([^/]+)\//))) return m[1]; // host id
  return null;
};
const i18nFile = (f) => {
  const match = f.match(/^public\/data\/i18n\/([a-z]{2})\/([^/]+)\.json$/);
  return match ? { lang: match[1], id: match[2] } : null;
};
// Files that, if changed, force FULL regen (template / SEO chain / global).
const forcesFull = (f) =>
  /^scripts\/generate-poi-html\./.test(f) ||
  /^scripts\/build-seo-index\./.test(f) ||
  /^scripts\/split_pois_by_country\./.test(f) ||
  /^scripts\/prepare_v2_data\./.test(f) ||
  /^lib\/seo\//.test(f) ||
  /^components\/seo\//.test(f) ||
  /^public\/data\/poi-hr-native\.json$/.test(f) ||
  /^public\/poi-static\/poi\.css$/.test(f);

// Fail closed when a file lives on a known POI surface but no mapper above
// understands it yet. New data families must never silently become `none`.
const looksPoiAffecting = (f) =>
  /^lib\/visualLab\/data\/.*[Pp]oi/.test(f) ||
  /^public\/data\/(?:i18n|city-tips|itinerary|poi-practical|poi-news|sights|sight-pages|poi-faqs)/.test(f) ||
  /^public\/poi-images\//.test(f);

// ── parse POI .ts (TS object-literal array; keys may be unquoted) → {id: rawObjectText} ──
// Brace-walks the top-level array, keying each POI object by its `id` and storing the raw
// object text. apply scripts rewrite files with stable formatting, so unchanged POIs keep
// byte-identical text → raw-text equality reliably flags only genuinely changed POIs.
function parsePoiTs(text) {
  const map = new Map();
  const as = text.indexOf("= [");
  if (as < 0) return map;
  let i = text.indexOf("[", as);
  if (i < 0) return map;
  i++;
  let depth = 0, objStart = -1, ins = false, esc = false, q = "";
  for (; i < text.length; i++) {
    const c = text[i];
    if (ins) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === q) ins = false;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { ins = true; q = c; continue; }
    if (c === "{") { if (depth === 0) objStart = i; depth++; }
    else if (c === "}") {
      if (--depth === 0 && objStart >= 0) {
        const seg = text.slice(objStart, i + 1);
        const m = seg.match(/^\{\s*["']?id["']?\s*:\s*["']([^"']+)["']/);
        if (m) map.set(m[1], seg);
        objStart = -1;
      }
    } else if (c === "]" && depth === 0) break;
  }
  return map;
}

// Read one direct property from a POI object without evaluating repository code.
// Handles strings, nested objects/arrays and comments well enough for generated
// POI literals while keeping the delta classifier dependency-free.
function directProperty(objectText, wanted) {
  let i = objectText.indexOf("{") + 1;
  const skipTrivia = () => {
    while (i < objectText.length) {
      if (/\s/.test(objectText[i])) { i++; continue; }
      if (objectText.startsWith("//", i)) {
        i = objectText.indexOf("\n", i + 2);
        if (i < 0) return;
        continue;
      }
      if (objectText.startsWith("/*", i)) {
        const end = objectText.indexOf("*/", i + 2);
        i = end < 0 ? objectText.length : end + 2;
        continue;
      }
      break;
    }
  };
  const readQuoted = () => {
    const quote = objectText[i++];
    const start = i;
    let escaped = false;
    while (i < objectText.length) {
      const c = objectText[i++];
      if (escaped) { escaped = false; continue; }
      if (c === "\\") { escaped = true; continue; }
      if (c === quote) return objectText.slice(start, i - 1);
    }
    return null;
  };

  while (i < objectText.length) {
    skipTrivia();
    if (objectText[i] === "}") return null;
    let key = "";
    if (objectText[i] === '"' || objectText[i] === "'") key = readQuoted();
    else {
      const match = objectText.slice(i).match(/^[$A-Z_a-z][$\w]*/);
      if (!match) return null;
      key = match[0];
      i += key.length;
    }
    skipTrivia();
    if (objectText[i] !== ":") return null;
    i++;
    skipTrivia();
    const valueStart = i;
    let braces = 0, brackets = 0, parens = 0, quote = "", escaped = false;
    for (; i < objectText.length; i++) {
      const c = objectText[i];
      if (quote) {
        if (escaped) escaped = false;
        else if (c === "\\") escaped = true;
        else if (c === quote) quote = "";
        continue;
      }
      if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
      if (c === "{") braces++;
      else if (c === "}") {
        if (braces === 0 && brackets === 0 && parens === 0) {
          return key === wanted ? objectText.slice(valueStart, i).trim() : null;
        }
        braces--;
      } else if (c === "[") brackets++;
      else if (c === "]") brackets--;
      else if (c === "(") parens++;
      else if (c === ")") parens--;
      else if (c === "," && braces === 0 && brackets === 0 && parens === 0) {
        if (key === wanted) return objectText.slice(valueStart, i).trim();
        i++;
        break;
      }
    }
  }
  return null;
}

function nonEmptyLiteral(raw) {
  if (raw == null) return false;
  const value = raw.trim();
  if (value === "" || value === "undefined" || value === "null") return false;
  if (value === '""' || value === "''" || value === "``" || value === "[]") return false;
  return true;
}

function hasIndexableRaw(objectText) {
  for (const field of ["description", "descriptionAdvanced", "facts", "factsAdvanced"]) {
    const localized = directProperty(objectText, field);
    if (!localized?.startsWith("{")) continue;
    for (const lang of ["de", "hu", "ro", "en"]) {
      if (nonEmptyLiteral(directProperty(localized, lang))) return true;
    }
  }
  return false;
}

function routingFingerprint(objectText) {
  return JSON.stringify({
    id: directProperty(objectText, "id"),
    type: directProperty(objectText, "type"),
    parent: directProperty(objectText, "parent"),
    name: directProperty(objectText, "name"),
    indexable: hasIndexableRaw(objectText),
  });
}

// Cheap structural checks run before loading old file contents. This keeps an
// obvious FULL decision fast even when the same commit contains a large batch.
for (const f of changed) {
  if (forcesFull(f) && !scopeLangs.length) FULL(`template/SEO file changed: ${f}`);
  if (isPoiTs(f) && (added.has(f) || deleted.has(f))) FULL(`POI source file set changed: ${f}`);
  if (i18nFile(f) && (added.has(f) || deleted.has(f))) FULL(`native-language page set changed: ${f}`);
}

// Fetch every old file needed by the classifier through one long-lived git
// process. Spawning `git show` per POI made large translation batches need
// minutes merely to decide their deploy mode.
function loadFilesAtRef(ref, files) {
  const unique = [...new Set(files)];
  if (!unique.length) return new Map();
  const specs = unique.map((f) => `${ref}:${f}`);
  const output = execFileSync("git", ["cat-file", "--batch"], {
    input: `${specs.join("\n")}\n`,
    maxBuffer: 1 << 30,
  });
  const result = new Map();
  let offset = 0;
  for (let index = 0; index < unique.length; index++) {
    const lineEnd = output.indexOf(10, offset);
    if (lineEnd < 0) FULL("truncated git cat-file output");
    const header = output.subarray(offset, lineEnd).toString("utf8");
    offset = lineEnd + 1;
    if (header.endsWith(" missing")) {
      result.set(unique[index], null);
      continue;
    }
    const match = header.match(/^[0-9a-f]+ blob (\d+)$/);
    if (!match) FULL(`unexpected git cat-file header: ${header}`);
    const size = Number(match[1]);
    result.set(unique[index], output.subarray(offset, offset + size).toString("utf8"));
    offset += size + 1; // blob plus trailing newline
  }
  return result;
}

const oldFilesNeeded = changed.filter((f) => {
  const nativeSidecar = i18nFile(f);
  return isPoiTs(f) || isFlatPoiJson(f) || (nativeSidecar && ["it", "pt", "pl", "nl"].includes(nativeSidecar.lang));
});
let oldContents;
let newFallbackContents;
try {
  oldContents = loadFilesAtRef(BEFORE, oldFilesNeeded);
  newFallbackContents = loadFilesAtRef(AFTER, oldFilesNeeded.filter((f) => !fs.existsSync(f)));
}
catch (e) { FULL(`could not read old file set: ${e.message}`); }
const showOld = (f) => oldContents.get(f) ?? null; // null = new file or not needed
const readNew = (f) => {
  try { return fs.readFileSync(f, "utf8"); }
  catch { return newFallbackContents.get(f) ?? null; }
}; // null = deleted file

const ids = new Set();

// A native-language rollout may change shared renderer/SEO files while only the
// POIs with that language sidecar gain new output. The explicit scope keeps this
// safe and auditable instead of regenerating every POI globally.
if (scopeLangs.length) {
  for (const scopeLang of scopeLangs) {
    const scopeDir = `public/data/i18n/${scopeLang}`;
    if (!fs.existsSync(scopeDir) || !fs.statSync(scopeDir).isDirectory()) {
      FULL(`language scope directory not found: ${scopeDir}`);
    }
    for (const name of fs.readdirSync(scopeDir)) {
      if (name.endsWith(".json")) ids.add(name.slice(0, -5));
    }
  }
  if (ids.size === 0) FULL(`language scopes have no POI sidecars: ${scopeLangs.join(",")}`);
  console.log(`[delta] explicit language scopes ${scopeLangs.join(",")}: ${ids.size} POIs`);
}

for (const f of changed) {
  if (forcesFull(f)) {
    if (!scopeLangs.length) FULL(`template/SEO file changed: ${f}`);
    console.log(`[delta] scoped template/SEO change: ${f}`);
    continue;
  }

  if (isPoiTs(f)) {
    const oldT = showOld(f), newT = readNew(f);
    if (newT == null) FULL(`POI source deleted: ${f}`);
    const oldM = oldT ? parsePoiTs(oldT) : new Map();
    const newM = parsePoiTs(newT);
    if (newM.size === 0 && newT.length > 200) FULL(`could not parse POI ids in ${f}`);
    if (oldM.size !== newM.size) FULL(`POI set size changed in ${f}: ${oldM.size} -> ${newM.size}`);
    for (const id of oldM.keys()) if (!newM.has(id)) FULL(`POI removed or renamed in ${f}: ${id}`);
    for (const [id, currentObject] of newM) {
      const previousObject = oldM.get(id);
      if (previousObject === currentObject) continue;
      if (!previousObject) FULL(`POI added in ${f}: ${id}`);
      if (routingFingerprint(previousObject) !== routingFingerprint(currentObject)) {
        FULL(`routing/indexability changed in ${f}: ${id}`);
      }
      ids.add(id);
    }
    continue;
  }

  const nativeSidecar = i18nFile(f);
  if (nativeSidecar) {
    if (added.has(f) || deleted.has(f)) FULL(`native-language page set changed: ${f}`);
    if (["it", "pt", "pl", "nl"].includes(nativeSidecar.lang)) {
      const oldT = showOld(f), newT = readNew(f);
      if (oldT == null || newT == null) FULL(`native-language page set changed: ${f}`);
      let oldValue, newValue;
      try { oldValue = JSON.parse(oldT); newValue = JSON.parse(newT); }
      catch { FULL(`could not parse native sidecar ${f}`); }
      if (oldValue?.name !== newValue?.name) FULL(`native slug name changed: ${f}`);
    }
    ids.add(nativeSidecar.id);
    continue;
  }

  const pid = perIdFile(f);
  if (pid) { ids.add(pid); continue; }

  if (isFlatPoiJson(f)) {
    const oldT = showOld(f), newT = readNew(f);
    if (newT == null) continue;
    let oldO = {}, newO = {};
    try { if (oldT) oldO = JSON.parse(oldT); newO = JSON.parse(newT); }
    catch { FULL(`could not parse JSON sidecar ${f}`); }
    const keys = new Set([...Object.keys(oldO), ...Object.keys(newO)]);
    for (const k of keys) if (JSON.stringify(oldO[k]) !== JSON.stringify(newO[k])) ids.add(k);
    continue;
  }
  if (looksPoiAffecting(f)) FULL(`unmapped POI-affecting file: ${f}`);
  // Non-POI-affecting change (UI, config, etc.) → ignore for POI gen.
}

const list = [...ids].sort();
fs.writeFileSync(OUTFILE, list.join("\n") + (list.length ? "\n" : ""), "utf8");
console.log(`[delta] ${list.length} changed POI ids → ${OUTFILE}`);
