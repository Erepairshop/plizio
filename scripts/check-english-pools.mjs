/**
 * AstroEnglish pool validator
 * Ellenőrzi a lib/explorerPools/englishK*.ts fájlokat (K1-K8).
 *
 * Futtatás: node scripts/check-english-pools.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POOLS_DIR = path.join(ROOT, "lib/explorerPools");

// ─── Érvényes típusok ──────────────────────────────────────────────────────────

const VALID_SVG_TYPES = new Set([
  "letter-circles", "two-groups", "letter-pairs", "word-syllables", "text-bubbles",
  "compound-word", "article-noun", "icon-grid", "rhyme-pair", "sentence-display",
  "word-display", "simple-icon", "word-card",
]);

const VALID_INTERACTIVE_TYPES = new Set([
  "block-drag", "number-line", "word-order", "gap-fill", "match-pairs",
  "highlight-text", "tap-count", "drag-to-bucket", "sentence-build",
  "label-diagram", "balance-scale", "ratio-slider",
  "physics-magnet", "physics-slingshot", "physics-stacker", "physics-bucket",
]);

// Instruction + hint1 + hint2 NEM kell ezekhez:
const NO_HINTS_TYPES = new Set([
  "block-drag", "number-line", "tap-count",
  "physics-magnet", "physics-slingshot", "physics-stacker", "physics-bucket",
  "label-diagram", "balance-scale", "ratio-slider",
]);

// ─── Segédfüggvények ──────────────────────────────────────────────────────────

/** Megkeresi az összes { } blokkot egy adott prefix után */
function findBlocks(content, prefix) {
  const result = [];
  let i = 0;
  while (i < content.length) {
    const idx = content.indexOf(prefix, i);
    if (idx === -1) break;
    let braceCount = 0;
    let started = false;
    let endIdx = -1;
    for (let j = idx; j < content.length; j++) {
      if (content[j] === "{") { braceCount++; started = true; }
      else if (content[j] === "}" && started) {
        braceCount--;
        if (braceCount === 0) { endIdx = j; break; }
      }
    }
    if (endIdx !== -1) result.push({ block: content.substring(idx, endIdx + 1), index: idx });
    i = endIdx !== -1 ? endIdx + 1 : idx + 1;
  }
  return result;
}

/** Kinyeri az összes label kulcsot a fájlból (t\d+_xxx: "..." mintából) */
function extractLabelKeys(content) {
  const keys = new Set();
  for (const m of content.matchAll(/\b(t\d+_\w+):\s*"/g)) {
    keys.add(m[1]);
  }
  return keys;
}

/** Kinyeri a t\d+_xxx formátumú string referenciákat egy blokkból */
function extractStringRefs(block) {
  const refs = [];
  const cleaned = block.replace(/\bid:\s*"[^"]*"/g, "");
  for (const m of cleaned.matchAll(/"(t\d+_[a-z0-9_]+)"/g)) {
    refs.push(m[1]);
  }
  return refs;
}

/** Megszámolja a vesszőkkel elválasztott string elemeket egy tömbben */
function countChoices(choicesStr) {
  return (choicesStr.match(/"/g) || []).length / 2;
}

// ─── Fájlok beolvasása ─────────────────────────────────────────────────────────

const files = fs.readdirSync(POOLS_DIR)
  .filter(f => f.match(/^englishK\d+\.ts$/))
  .sort((a, b) => {
    const na = parseInt(a.match(/\d+/)[0]);
    const nb = parseInt(b.match(/\d+/)[0]);
    return na - nb;
  });

if (files.length === 0) {
  console.log("⚠️  Nem találhatók englishK*.ts fájlok a lib/explorerPools/ mappában.");
  process.exit(1);
}

console.log(`🔍 AstroEnglish pool ellenőrzés — ${files.length} fájl\n`);

let totalErrors = 0;
let totalTopics = 0;

for (const file of files) {
  const filePath = path.join(POOLS_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const errors = [];
  const warnings = [];

  // ─── 1. Duplikált import ───────────────────────────────────────────────────
  const importCount = (content.match(/import type \{ PoolTopicDef \}/g) || []).length;
  if (importCount > 1) {
    errors.push(`  [IMPORT] Duplikált PoolTopicDef import: ${importCount}×`);
  }

  // ─── 2. POOL méret ellenőrzés (9 pool, mindegyik legalább 10 téma) ─────────
  const poolExports = [...content.matchAll(/export const (\w+_POOL):\s*PoolTopicDef\[\]/g)];
  const labelExports = [...content.matchAll(/export const (\w+_LABELS):/g)];

  if (poolExports.length !== 9) {
    warnings.push(`  [POOL] ${poolExports.length} POOL export van (várt: 9)`);
  }
  if (labelExports.length !== poolExports.length) {
    errors.push(`  [POOL] LABELS (${labelExports.length}) és POOL (${poolExports.length}) export szám nem egyezik`);
  }

  // Pool-onként topic count — keresi a `= [` utáni tömb tartalmát
  for (const poolMatch of poolExports) {
    const poolName = poolMatch[1];
    const poolIdx = content.indexOf(`export const ${poolName}: PoolTopicDef[]`);
    if (poolIdx === -1) continue;
    // Keressük a `= [` -t a deklaráció után (nem a type annotation []-t)
    const eqBracket = content.indexOf("= [", poolIdx);
    if (eqBracket === -1) continue;
    const arrStart = eqBracket + 2; // a '[' pozíciója
    let depth = 0;
    let arrEnd = -1;
    for (let j = arrStart; j < content.length; j++) {
      if (content[j] === "[") depth++;
      else if (content[j] === "]") {
        depth--;
        if (depth === 0) { arrEnd = j; break; }
      }
    }
    if (arrEnd === -1) continue;
    const poolContent = content.substring(arrStart, arrEnd + 1);
    const topicCount = (poolContent.match(/infoTitle:/g) || []).length;
    totalTopics += topicCount;
    if (topicCount === 0) {
      errors.push(`  [POOL] ${poolName}: ÜRES (0 topic)`);
    } else if (topicCount < 10) {
      warnings.push(`  [POOL] ${poolName}: csak ${topicCount} topic (várt: 15)`);
    }
  }

  // ─── 3. Label kulcsok kinyerése ───────────────────────────────────────────
  const labelKeys = extractLabelKeys(content);

  // ─── 4. Duplikált label kulcsok egy LABELS blokkon belül ─────────────────
  for (const labelsMatch of content.matchAll(/export const \w+_LABELS[^=]*=\s*\{[\s\S]*?^};/gm)) {
    const block = labelsMatch[0];
    const keyCount = {};
    for (const m of block.matchAll(/\b(t\d+_\w+):\s*"/g)) {
      keyCount[m[1]] = (keyCount[m[1]] || 0) + 1;
    }
    for (const [key, count] of Object.entries(keyCount)) {
      if (count > 1) {
        const ln = content.slice(0, labelsMatch.index).split("\n").length;
        errors.push(`  L${ln}: [LABEL] Duplikált kulcs: "${key}" (${count}×)`);
      }
    }
  }

  // ─── 5. Üres label értékek ────────────────────────────────────────────────
  for (const m of content.matchAll(/^\s{4,}(t\d+_\w+):\s*""\s*,?$/gm)) {
    const ln = content.slice(0, m.index).split("\n").length;
    errors.push(`  L${ln}: [LABEL] Üres érték: "${m[1]}"`);
  }

  // ─── 6. Sor-alapú ellenőrzések ────────────────────────────────────────────
  lines.forEach((line, i) => {
    const ln = i + 1;
    const trim = line.trim();

    // Placeholder szövegek (csak uppercase vagy egyértelmű placeholder szavak)
    // "fill" lowercase kizárva — valódi angol szó (pl. refill, fill in)
    if (trim.match(/"(TODO|PLACEHOLDER|TBD|YOUR_TEXT_HERE)"/i) ||
        trim.match(/"(FILL|XXX)"/)) {  // csak nagybetűs FILL/XXX a placeholder
      errors.push(`  L${ln}: [CONTENT] Placeholder szöveg maradt: ${trim.substring(0, 60)}`);
    }

    // Komment sorokat kihagyjuk a sor-alapú ellenőrzéseknél
    if (trim.startsWith("//") || trim.startsWith("*")) return;

    // sentence-flow (elavult)
    if (trim.includes('"sentence-flow"')) {
      errors.push(`  L${ln}: [SVG] "sentence-flow" → használj "sentence-display"-t`);
    }

    // word-display: words: helyett word:
    if (trim.match(/type:\s*"word-display"/) && trim.includes("words:")) {
      errors.push(`  L${ln}: [SVG] word-display: "words:" → "word:" (single string!)`);
    }

    // sentence-build: parts: helyett fragments:
    if (trim.match(/type:\s*"sentence-build"/) && trim.includes("parts:")) {
      errors.push(`  L${ln}: [INTERACTIVE] sentence-build: "parts:" → "fragments:"`);
    }

    // highlight-text: sentence: helyett tokens:
    if (trim.match(/type:\s*"highlight-text"/) && trim.includes("sentence:")) {
      errors.push(`  L${ln}: [INTERACTIVE] highlight-text: "sentence:" → "tokens:"`);
    }

    // drag-to-bucket: accepts: nem létezik
    if (trim.includes("accepts:") && !trim.startsWith("//")) {
      errors.push(`  L${ln}: [INTERACTIVE] drag-to-bucket: "accepts:" → NEM LÉTEZŐ mező! Használj buckets: [{id, label}] + items: [{text, bucketId}]`);
    }

    // id: mező a POOL-ban (nem kellene)
    if (trim.match(/^\s*id:\s*"t\d+"/)) {
      errors.push(`  L${ln}: [POOL] "id:" mező a topicban — NEM SZABAD! Töröld.`);
    }

    // title: mező (infoTitle helyett)
    if (trim.match(/^\s*title:\s*"t\d+_/) && !trim.includes("explorer_title")) {
      errors.push(`  L${ln}: [POOL] "title:" → "infoTitle:" kell`);
    }

    // hint1: mező ellenőrzés: csak TOPIC szintjén tilos (interactive blokkon kívül)
    // Tágabb kontextus vizsgálat: 20 soron belül van-e interactive: {
    if (trim.match(/^\s*hint1:\s*"t\d+_/)) {
      const context = lines.slice(Math.max(0, i - 20), i).join(" ");
      const isInsideInteractive = context.includes("interactive:") ||
        context.includes("word-order") || context.includes("gap-fill") ||
        context.includes("match-pairs") || context.includes("sentence-build") ||
        context.includes("highlight-text") || context.includes("drag-to-bucket") ||
        context.includes("physics-");
      if (!isInsideInteractive) {
        errors.push(`  L${ln}: [POOL] "hint1:" a topic szintjén → "hintKey:" kell`);
      }
    }

    // hu:/de:/ro: label nyelvek (csak en: kellene English pool-ban)
    if (trim.match(/^\s*(hu|de|ro):\s*\{/) && !trim.startsWith("//")) {
      errors.push(`  L${ln}: [I18N] "${trim.match(/^\s*(hu|de|ro)/)[1]}:" nyelvblokk — English pool csak "en:" kell!`);
    }
  });

  // ─── 7. SVG blokk ellenőrzések ────────────────────────────────────────────
  const svgBlocks = findBlocks(content, "svg: {");
  svgBlocks.forEach(({ block, index }) => {
    const lineNum = content.slice(0, index).split("\n").length;
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (!typeMatch) {
      errors.push(`  L${lineNum}: [SVG] Hiányzó "type:" mező`);
      return;
    }
    const type = typeMatch[1];
    if (!VALID_SVG_TYPES.has(type)) {
      errors.push(`  L${lineNum}: [SVG] Ismeretlen típus: "${type}"`);
      return;
    }

    // Típus-specifikus ellenőrzések
    if (type === "word-display") {
      if (block.includes("words:"))  errors.push(`  L${lineNum}: [SVG] word-display: "words:" → "word:" (single string)`);
      if (!block.includes("word:"))  errors.push(`  L${lineNum}: [SVG] word-display hiányzó "word:"`);
      if (!block.includes("color:")) errors.push(`  L${lineNum}: [SVG] word-display hiányzó "color:"`);
    }
    if (type === "sentence-display") {
      if (!block.includes("words:")) errors.push(`  L${lineNum}: [SVG] sentence-display hiányzó "words:"`);
      if (!block.includes("color:")) errors.push(`  L${lineNum}: [SVG] sentence-display hiányzó "color:"`);
    }
    if (type === "compound-word") {
      if (!block.includes("word1:"))  errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "word1:"`);
      if (!block.includes("word2:"))  errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "word2:"`);
      if (!block.includes("result:")) errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "result:"`);
      if (!block.includes("color:"))  errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "color:"`);
      // left:/right: nem szabad
      if (block.match(/\bleft:\s*"/) || block.match(/\bright:\s*"/)) {
        errors.push(`  L${lineNum}: [SVG] compound-word: "left:"/"right:" → "word1:"/"word2:"`);
      }
    }
    if (type === "word-syllables") {
      if (block.includes("syllables:")) errors.push(`  L${lineNum}: [SVG] word-syllables: "syllables:" → "parts:"`);
      if (!block.includes("parts:"))    errors.push(`  L${lineNum}: [SVG] word-syllables hiányzó "parts:"`);
      if (!block.includes("color:"))    errors.push(`  L${lineNum}: [SVG] word-syllables hiányzó "color:"`);
    }
    if (type === "two-groups") {
      if (!block.includes("border:")) errors.push(`  L${lineNum}: [SVG] two-groups hiányzó "border:" (left/right-ban)`);
      // label: nem szabad left/right-ban
      const groupContent = block.replace(/type:\s*"two-groups"/, "");
      if (groupContent.match(/left:\s*\{[^}]*label:/)) {
        errors.push(`  L${lineNum}: [SVG] two-groups left: tartalmaz "label:" → NEM SZABAD`);
      }
      if (groupContent.match(/right:\s*\{[^}]*label:/)) {
        errors.push(`  L${lineNum}: [SVG] two-groups right: tartalmaz "label:" → NEM SZABAD`);
      }
    }
    if (type === "rhyme-pair") {
      if (!block.includes("color:")) errors.push(`  L${lineNum}: [SVG] rhyme-pair hiányzó "color:"`);
    }
    if (type === "word-card") {
      if (!block.includes("word:"))        errors.push(`  L${lineNum}: [SVG] word-card hiányzó "word:"`);
      if (!block.includes("translation:")) errors.push(`  L${lineNum}: [SVG] word-card hiányzó "translation:"`);
    }
  });

  // text-bubbles items color/bg
  for (const m of content.matchAll(/type:\s*"text-bubbles"[\s\S]{0,500}?items:\s*\[([^\]]*(?:\{[^}]*\}[^\]]*)*)\]/g)) {
    const lineNum = content.slice(0, m.index).split("\n").length;
    const items = [...m[1].matchAll(/\{([^}]*)\}/g)];
    items.forEach((item, idx) => {
      if (!item[1].includes("color:")) errors.push(`  L${lineNum}: [SVG] text-bubbles item #${idx+1} hiányzó "color:"`);
      if (!item[1].includes("bg:"))    errors.push(`  L${lineNum}: [SVG] text-bubbles item #${idx+1} hiányzó "bg:"`);
    });
  }

  // ─── 8. Interactive blokk ellenőrzések ───────────────────────────────────
  const intBlocks = findBlocks(content, "interactive: {");
  intBlocks.forEach(({ block, index }) => {
    const lineNum = content.slice(0, index).split("\n").length;
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    const itype = typeMatch ? typeMatch[1] : null;

    if (itype && !VALID_INTERACTIVE_TYPES.has(itype)) {
      errors.push(`  L${lineNum}: [INTERACTIVE] Ismeretlen típus: "${itype}"`);
    }

    // hint1/hint2/instruction kötelező (kivéve NO_HINTS_TYPES)
    if (itype && !NO_HINTS_TYPES.has(itype)) {
      if (!block.includes("instruction:")) errors.push(`  L${lineNum}: [INTERACTIVE] (${itype}) hiányzó "instruction:"`);
      if (!block.includes("hint1:"))       errors.push(`  L${lineNum}: [INTERACTIVE] (${itype}) hiányzó "hint1:"`);
      if (!block.includes("hint2:"))       errors.push(`  L${lineNum}: [INTERACTIVE] (${itype}) hiányzó "hint2:"`);
    }

    // sentence-build: fragments: kell, parts: nem
    if (itype === "sentence-build") {
      if (block.includes("parts:") && !block.includes("fragments:")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] sentence-build: "parts:" → "fragments:"`);
      }
      if (!block.includes("fragments:")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] sentence-build hiányzó "fragments:"`);
      }
    }

    // highlight-text: tokens: + correctIndices: kell
    if (itype === "highlight-text") {
      if (block.includes("sentence:")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] highlight-text: "sentence:" → "tokens:" (array)`);
      }
      if (block.includes("targets:") && !block.includes("correctIndices:")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] highlight-text: "targets:" → "correctIndices:" (number[])`);
      }
      if (!block.includes("tokens:"))         errors.push(`  L${lineNum}: [INTERACTIVE] highlight-text hiányzó "tokens:"`);
      if (!block.includes("correctIndices:")) errors.push(`  L${lineNum}: [INTERACTIVE] highlight-text hiányzó "correctIndices:"`);
    }

    // drag-to-bucket: items {text, bucketId} + buckets {id, label}
    if (itype === "drag-to-bucket") {
      if (block.includes("accepts:")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] drag-to-bucket: "accepts:" mező NEM LÉTEZŐ → buckets: [{id, label}]`);
      }
      if (!block.includes("bucketId")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] drag-to-bucket: items-ből hiányzó "bucketId"`);
      }
    }

    // match-pairs: pairs []
    if (itype === "match-pairs" && !block.includes("pairs:")) {
      errors.push(`  L${lineNum}: [INTERACTIVE] match-pairs hiányzó "pairs:"`);
    }

    // word-order: words + correctOrder
    if (itype === "word-order") {
      if (!block.includes("words:"))        errors.push(`  L${lineNum}: [INTERACTIVE] word-order hiányzó "words:"`);
      if (!block.includes("correctOrder:")) errors.push(`  L${lineNum}: [INTERACTIVE] word-order hiányzó "correctOrder:"`);
    }

    // gap-fill: correctIndex ellenőrzés
    if (itype === "gap-fill") {
      const ciMatch = block.match(/correctIndex:\s*(\d+)/);
      const choicesMatch = block.match(/choices:\s*\[([^\]]*)\]/);
      if (ciMatch && choicesMatch) {
        const ci = parseInt(ciMatch[1]);
        const count = countChoices(choicesMatch[1]);
        if (ci >= count) {
          errors.push(`  L${lineNum}: [INTERACTIVE] gap-fill: correctIndex=${ci} de csak ${count} choice van`);
        }
      }
      if (!block.includes("choices:"))     errors.push(`  L${lineNum}: [INTERACTIVE] gap-fill hiányzó "choices:"`);
      if (!block.includes("correctIndex:")) errors.push(`  L${lineNum}: [INTERACTIVE] gap-fill hiányzó "correctIndex:"`);
    }

    // physics-slingshot: kell legalább 1 isCorrect: true
    if (itype === "physics-slingshot" && !block.includes("isCorrect: true")) {
      errors.push(`  L${lineNum}: [INTERACTIVE] physics-slingshot: nincs "isCorrect: true" target`);
    }

    // Label referenciák léteznek-e?
    const refs = extractStringRefs(block);
    for (const ref of refs) {
      if (!labelKeys.has(ref)) {
        errors.push(`  L${lineNum}: [LABEL-REF] interactive: "${ref}" nem létezik a LABELS-ben`);
      }
    }
  });

  // ─── 9. Quiz blokk ellenőrzések ──────────────────────────────────────────
  const quizBlocks = findBlocks(content, "quiz: {");
  quizBlocks.forEach(({ block, index }) => {
    const lineNum = content.slice(0, index).split("\n").length;

    if (block.includes("generate:")) return; // generate módban nincs label ref

    if (!block.includes("question:")) errors.push(`  L${lineNum}: [QUIZ] hiányzó "question:"`);
    if (!block.includes("choices:"))  errors.push(`  L${lineNum}: [QUIZ] hiányzó "choices:"`);
    if (!block.includes("answer:"))   errors.push(`  L${lineNum}: [QUIZ] hiányzó "answer:"`);

    // choices count: pontosan 4 kell
    const choicesMatch = block.match(/choices:\s*\[([^\]]*)\]/);
    if (choicesMatch) {
      const count = countChoices(choicesMatch[1]);
      if (count !== 4) {
        errors.push(`  L${lineNum}: [QUIZ] choices: ${count} elem (várt: 4)`);
      }
    }

    // Label referenciák
    const refs = extractStringRefs(block);
    for (const ref of refs) {
      if (!labelKeys.has(ref)) {
        errors.push(`  L${lineNum}: [LABEL-REF] quiz: "${ref}" nem létezik a LABELS-ben`);
      }
    }
  });

  // ─── 10. infoTitle / infoText minden topicban ─────────────────────────────
  const missingInfoTitle = (content.match(/infoTitle:/g) || []).length;
  const missingInfoText  = (content.match(/infoText:/g)  || []).length;
  if (missingInfoTitle !== missingInfoText) {
    warnings.push(`  [POOL] infoTitle (${missingInfoTitle}) ≠ infoText (${missingInfoText}) darab — valahol hiányzik`);
  }

  // ─── Eredmény ─────────────────────────────────────────────────────────────
  const topicCount = (content.match(/infoTitle:/g) || []).length;
  if (errors.length === 0 && warnings.length === 0) {
    console.log(`✅ ${file} — hibátlan (${topicCount} topic)`);
  } else {
    if (errors.length > 0) {
      console.log(`\n❌ ${file} — ${errors.length} HIBA, ${warnings.length} figyelmeztetés (${topicCount} topic):`);
      const unique = [...new Set(errors)];
      unique.forEach(e => console.log(e));
    } else {
      console.log(`\n⚠️  ${file} — 0 hiba, ${warnings.length} figyelmeztetés (${topicCount} topic):`);
    }
    if (warnings.length > 0) {
      console.log("  Figyelmeztetések:");
      [...new Set(warnings)].forEach(w => console.log(w));
    }
    totalErrors += new Set(errors).size;
  }
}

console.log(`\n${"─".repeat(60)}`);
console.log(`Összesen: ${totalErrors} hiba | ${totalTopics} topic | ${files.length} fájl`);
if (totalErrors === 0) {
  console.log("🎉 Minden pool hibátlan!");
}
