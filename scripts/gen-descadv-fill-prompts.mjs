// Generate Pro prompts for thin descriptionAdvanced fill.
// 7 POIs per batch, only the langs that are <700 chars get a fill task per POI.
// Output: writes prompts to plizio_orch/prompts/ and appends tasks to queue_pro.json.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "..", "lib", "visualLab", "data");
const ORCH = "C:\\Users\\User\\plizio_orch";
const PROMPTS_DIR = path.join(ORCH, "prompts");
const QUEUE_PATH = path.join(ORCH, "queue_pro.json");
const THRESH = 700;
const TARGET_CHARS = 900; // requested length per lang
const PER_BATCH = 7;
const LANGS = ["de", "hu", "ro", "en"];

// 1. Build POI lookup (id → full POI obj + filename)
const files = fs.readdirSync(DATA_DIR).filter(f => f.startsWith("poiExtra") && f.endsWith(".ts"));
const poiById = new Map();
const fileById = new Map();
let parseFail = 0;

for (const f of files) {
  const fp = path.join(DATA_DIR, f);
  let mod;
  try { mod = await import(pathToFileURL(fp).href); }
  catch {
    try {
      const raw = fs.readFileSync(fp, "utf-8");
      const stripped = raw.replace(/^\s*import\s+(?:type\s+)?\{?[^}]*\}?\s+from\s+["']\.\/poi["'];?/m, "");
      const tmp = fp + ".gen.tmp.ts";
      fs.writeFileSync(tmp, stripped);
      try { mod = await import(pathToFileURL(tmp).href); }
      finally { fs.unlinkSync(tmp); }
    } catch { parseFail++; continue; }
  }
  const arr = Object.values(mod).find(v => Array.isArray(v) && v[0] && typeof v[0] === "object");
  if (!arr) continue;
  for (const p of arr) {
    if (p && p.id) { poiById.set(p.id, p); fileById.set(p.id, f); }
  }
}
console.log(`indexed ${poiById.size} POIs (parse fails: ${parseFail})`);

// 2. Load thin list and decide fill-langs per POI
const thinList = JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "public", "data", "_thin-descadv.json"), "utf-8"));
const work = []; // [{ id, fillLangs, poi }]
for (const t of thinList) {
  const poi = poiById.get(t.id);
  if (!poi) continue;
  const da = poi.descriptionAdvanced || {};
  const fillLangs = LANGS.filter(l => (da[l] || "").length < THRESH);
  if (fillLangs.length === 0) continue;
  work.push({ id: t.id, fillLangs, poi });
}
console.log(`work items: ${work.length}`);

// 3. Compactly summarize POI for prompt: id, name, parent, coords, short description, facts (if any)
function poiContext(poi) {
  const name = poi.name || {};
  const desc = poi.description || {};
  const facts = poi.facts || {};
  const nm = LANGS.map(l => `${l}:${(name[l]||"").replace(/"/g,'\\"')}`).join(" | ");
  const ds = LANGS.map(l => `${l}: ${(desc[l]||"").slice(0,200)}`).join("\n      ");
  const fac = LANGS.map(l => {
    const arr = Array.isArray(facts[l]) ? facts[l] : [];
    return `${l}: [${arr.slice(0,6).map(x => String(x).slice(0,40)).join(" / ")}]`;
  }).join("\n      ");
  return [
    `  - id: ${poi.id}`,
    `    type: ${poi.type || "?"}`,
    `    parent: ${poi.parent || "?"}`,
    `    coords: [${(poi.coords||[]).join(", ")}]`,
    `    name: ${nm}`,
    `    description (short, already filled):`,
    `      ${ds}`,
    `    facts (already filled):`,
    `      ${fac}`,
  ].join("\n");
}

// 4. Batch + write prompts
fs.mkdirSync(PROMPTS_DIR, { recursive: true });
const queue = JSON.parse(fs.readFileSync(QUEUE_PATH, "utf-8"));
const newTasks = [];

const KEY = "descadv-fill-v1";
let bnum = 0;
for (let i = 0; i < work.length; i += PER_BATCH) {
  bnum++;
  const batch = work.slice(i, i + PER_BATCH);
  const cityBlocks = batch.map(w =>
    `${poiContext(w.poi)}\n    fill_langs: [${w.fillLangs.join(", ")}]`
  ).join("\n\n");

  const prompt = `olvasd be a GEMINI.md-t és kövesd

You are filling descriptionAdvanced for tourist POIs in 1-4 languages.

**OUTPUT JSON ONLY. NO TOOL CALLS. NO grep, NO web search, NO Python, NO file reads. DIRECT TEXT RESPONSE ONLY.**

# INPUT
${cityBlocks}

# TASK
For each POI, generate descriptionAdvanced ONLY for the languages listed in its \`fill_langs\` array.

Each generated language MUST:
- be 700-1100 characters (target ~900)
- be NATIVE-quality writing, NOT machine translation
- expand factually on the short description: history, geography, culture, what makes it visit-worthy
- match the existing facts / description style (consistent tone)
- NO placeholder phrases like "TODO", "PLACEHOLDER", "Schule für K7", "Plizio-Lehrplan", "Geographie K7", template repeats — must be genuine descriptive content
- if fill_langs has "ro" and the existing descriptions in other langs mention specific landmarks, names, or facts, REUSE those in the Romanian version (don't invent new ones)

# OUTPUT STRICT JSON — top-level keys = POI IDs, values = partial descriptionAdvanced (only the fill_langs):

\`\`\`json
{
  "<poi-id-1>": { "ro": "..." },
  "<poi-id-2>": { "de": "...", "hu": "...", "ro": "...", "en": "..." }
}
\`\`\`

# RULES
- Include only the langs listed in each POI's fill_langs
- Do NOT include the langs that are already filled (they stay as-is in the source file)
- Magyar/német/román mind 100%-os natív, nem fordítás
- Start with \`{\` end with \`}\`. NOTHING ELSE.
`;

  const bid = `${KEY}-b${String(bnum).padStart(4,"0")}-pro`;
  const pfName = `_${bid}.txt`;
  fs.writeFileSync(path.join(PROMPTS_DIR, pfName), prompt, "utf-8");
  newTasks.push({ id: bid, kind: "descadv-fill-pro", model: "pro", prompt_file: pfName });
}

// 5. Append to queue
const merged = queue.concat(newTasks);
fs.writeFileSync(QUEUE_PATH, JSON.stringify(merged), "utf-8");
console.log(`wrote ${newTasks.length} batch prompts → ${PROMPTS_DIR}`);
console.log(`queue_pro: ${queue.length} -> ${merged.length}`);
console.log(`first batch: ${newTasks[0]?.id}`);
console.log(`last batch:  ${newTasks[newTasks.length-1]?.id}`);
