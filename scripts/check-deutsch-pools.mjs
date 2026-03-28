/**
 * AstroDeutsch pool validator
 * Ellenőrzi a lib/explorerPools/deutschK*.ts fájlokat.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POOLS_DIR = path.join(ROOT, "lib/explorerPools");

const KNOWN_GENERATORS = new Set([
  "artikel_k1","silben","satzzeichen_k1","fehlende_woerter_k1",
  "körperteile_k1","haushalt_k1","tiere_k1","familie_k1","lebensmittel_k1",
  "artikel_k2","nomen_k2","verben_k2","zahlen_k2","farben_k2","zeit_k2","berufe_k2","gegensaetze_k2",
  "plural","adjektive_gegenteil","verben_k3",
  "nominativ","akkusativ","dativ","genitiv","praeteritum","perfekt",
  "steigerung","synonyme","antonyme",
  "konjunktiv_1","werden_passiv",
  "synonyme_k7","antonyme_k7","fremdwoerter_k7","relativsatz_k7",
  "nebensatztypen",
]);

const VALID_SVG_TYPES = new Set([
  "letter-circles","two-groups","letter-pairs","word-syllables","text-bubbles",
  "compound-word","article-noun","icon-grid","rhyme-pair","sentence-display",
  "word-display","simple-icon",
]);

const VALID_INTERACTIVE_TYPES = new Set([
  "block-drag","number-line","word-order","gap-fill","match-pairs","highlight-text","tap-count",
  "drag-to-bucket","sentence-build","label-diagram","balance-scale","ratio-slider",
  "physics-magnet","physics-slingshot","physics-stacker","physics-bucket",
]);

/** Megkeresi az összes { } blokkot egy adott prefix után */
function findBlocks(content, prefix) {
  const result = [];
  let i = 0;
  while (i < content.length) {
    const idx = content.indexOf(prefix, i);
    if (idx === -1) break;
    let braceCount = 0;
    let endIdx = -1;
    for (let j = idx + prefix.length - 1; j < content.length; j++) {
      if (content[j] === "{") braceCount++;
      else if (content[j] === "}") {
        if (braceCount === 0) { endIdx = j; break; }
        braceCount--;
      }
    }
    if (endIdx !== -1) result.push({ block: content.substring(idx, endIdx + 1), index: idx });
    i = endIdx !== -1 ? endIdx + 1 : idx + 1;
  }
  return result;
}

/** Kinyeri az összes label kulcsot a LABELS objektumból */
function extractLabelKeys(content) {
  const keys = new Set();
  // Megkeresi az összes `key: "value"` mintát bárhol a fájlban
  // Egy sorban több is lehet: t1_w1: "A", t1_w2: "U", t1_w3: "T"
  for (const m of content.matchAll(/\b(t\d+_\w+):\s*"/g)) {
    keys.add(m[1]);
  }
  return keys;
}

/** Kinyeri az összes string értéket egy blokkból (label referenciák) */
function extractStringRefs(block) {
  const refs = [];
  // id: "..." mezőket kizárjuk (belső azonosítók, nem label kulcsok)
  const cleaned = block.replace(/\bid:\s*"[^"]*"/g, '');
  for (const m of cleaned.matchAll(/"([a-z][a-z0-9_]+)"/g)) {
    // Csak tN_xxx formátumú kulcsok (topic referenciák)
    if (/^t\d+_/.test(m[1])) refs.push(m[1]);
  }
  return refs;
}

const files = fs.readdirSync(POOLS_DIR)
  .filter(f => f.match(/^deutschK\d+\.ts$/))
  .sort();

let totalErrors = 0;

for (const file of files) {
  const filePath = path.join(POOLS_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const errors = [];

  // ─── 1. Duplikált import ───────────────────────────────────────────────────
  const importCount = (content.match(/import type \{ PoolTopicDef \}/g) || []).length;
  if (importCount > 1) {
    errors.push(`  [IMPORT] Duplikált PoolTopicDef import: ${importCount}×`);
  }

  // ─── 2. Label kulcsok kinyerése (validáláshoz) ────────────────────────────
  const labelKeys = extractLabelKeys(content);

  // ─── 3. Duplikált label kulcsok (csak egy LABELS blokkon belül) ──────────
  // Megkeresi az összes LABELS = { de: { ... } } blokkot és külön ellenőrzi
  for (const labelsMatch of content.matchAll(/export const \w+_LABELS[^=]*=\s*\{[\s\S]*?^};/gm)) {
    const block = labelsMatch[0];
    const keyCount = {};
    for (const m of block.matchAll(/\b(t\d+_\w+):\s*"/g)) {
      keyCount[m[1]] = (keyCount[m[1]] || 0) + 1;
    }
    for (const [key, count] of Object.entries(keyCount)) {
      if (count > 1) {
        const ln = content.slice(0, labelsMatch.index).split("\n").length;
        errors.push(`  L${ln}: [LABEL] Duplikált kulcs egy LABELS blokkban: "${key}" (${count}×)`);
      }
    }
  }

  // ─── 4. Üres label értékek ────────────────────────────────────────────────
  for (const m of content.matchAll(/^\s{4,}(\w+):\s*""\s*,?$/gm)) {
    const ln = content.slice(0, m.index).split("\n").length;
    if (/^t\d+_/.test(m[1])) {
      errors.push(`  L${ln}: [LABEL] Üres érték: "${m[1]}"`);
    }
  }

  // ─── 5. Sor-alapú ellenőrzések ────────────────────────────────────────────
  lines.forEach((line, i) => {
    const ln = i + 1;
    const trim = line.trim();

    // generate: kulcs ellenőrzés
    const genMatch = trim.match(/generate:\s*"([^"]+)"/);
    if (genMatch) {
      const key = genMatch[1];
      if (key === "generator_key") {
        errors.push(`  L${ln}: [GENERATE] Placeholder 'generator_key'`);
      } else if (!KNOWN_GENERATORS.has(key)) {
        errors.push(`  L${ln}: [GENERATE] Ismeretlen kulcs: "${key}"`);
      }
    }

    // sentence-flow
    if (trim.includes('"sentence-flow"')) {
      errors.push(`  L${ln}: [SVG] "sentence-flow" → használj "sentence-display"-t`);
    }

    // syllables helyett parts
    if (trim.includes("syllables:") && !trim.includes("word-syllables")) {
      errors.push(`  L${ln}: [SVG] "syllables:" → "parts:" kell`);
    }
  });

  // ─── 6. SVG blokk ellenőrzések ────────────────────────────────────────────
  const svgBlocks = findBlocks(content, "svg: {");
  svgBlocks.forEach(({ block, index }) => {
    const lineNum = content.slice(0, index).split("\n").length;
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (!typeMatch) return;
    const type = typeMatch[1];

    if (!VALID_SVG_TYPES.has(type)) {
      errors.push(`  L${lineNum}: [SVG] Ismeretlen típus: "${type}"`);
      return;
    }

    if (type === "sentence-display") {
      if (!block.includes("words:")) errors.push(`  L${lineNum}: [SVG] sentence-display hiányzó "words:"`);
      if (!block.includes("color:")) errors.push(`  L${lineNum}: [SVG] sentence-display hiányzó "color:"`);
    }
    if (type === "compound-word") {
      if (!block.includes("result:")) errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "result:"`);
      if (!block.includes("color:"))  errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "color:"`);
    }
    if (type === "word-syllables") {
      if (block.includes("syllables:")) errors.push(`  L${lineNum}: [SVG] word-syllables: "syllables" → "parts"`);
      if (!block.includes("parts:") && !block.includes("syllables:")) errors.push(`  L${lineNum}: [SVG] word-syllables hiányzó "parts:"`);
      if (!block.includes("color:")) errors.push(`  L${lineNum}: [SVG] word-syllables hiányzó "color:"`);
    }
    if (type === "two-groups") {
      if (!block.includes("border:")) errors.push(`  L${lineNum}: [SVG] two-groups hiányzó "border:" (left/right-ban)`);
    }
    if (type === "rhyme-pair") {
      if (!block.includes("color:")) errors.push(`  L${lineNum}: [SVG] rhyme-pair hiányzó "color:"`);
    }
  });

  // text-bubbles items color/bg
  const tbMatches = [...content.matchAll(/type:\s*"text-bubbles"[\s\S]{0,300}?items:\s*\[([^\]]*)\]/g)];
  tbMatches.forEach(m => {
    const lineNum = content.slice(0, m.index).split("\n").length;
    const items = [...m[1].matchAll(/\{([^}]*)\}/g)];
    items.forEach((item, idx) => {
      if (!item[1].includes("color:")) errors.push(`  L${lineNum}: [SVG] text-bubbles item #${idx+1} hiányzó "color:"`);
      if (!item[1].includes("bg:"))    errors.push(`  L${lineNum}: [SVG] text-bubbles item #${idx+1} hiányzó "bg:"`);
    });
  });

  // ─── 7. Interactive blokk ellenőrzések ───────────────────────────────────
  const intBlocks = findBlocks(content, "interactive: {");
  intBlocks.forEach(({ block, index }) => {
    const lineNum = content.slice(0, index).split("\n").length;

    // hint1/hint2/instruction
    if (!block.includes("hint1:"))      errors.push(`  L${lineNum}: [INTERACTIVE] hiányzó "hint1:"`);
    if (!block.includes("hint2:"))      errors.push(`  L${lineNum}: [INTERACTIVE] hiányzó "hint2:"`);
    if (!block.includes("instruction:")) errors.push(`  L${lineNum}: [INTERACTIVE] hiányzó "instruction:"`);

    // Típus
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (typeMatch && !VALID_INTERACTIVE_TYPES.has(typeMatch[1])) {
      errors.push(`  L${lineNum}: [INTERACTIVE] Ismeretlen típus: "${typeMatch[1]}"`);
    }

    // physics-slingshot: legalább 1 isCorrect: true kell
    if (typeMatch && typeMatch[1] === "physics-slingshot") {
      if (!block.includes("isCorrect: true")) {
        errors.push(`  L${lineNum}: [INTERACTIVE] physics-slingshot: nincs "isCorrect: true" target!`);
      }
    }

    // gap-fill: correctIndex érvényes (0-3)?
    if (typeMatch && typeMatch[1] === "gap-fill") {
      const ciMatch = block.match(/correctIndex:\s*(\d+)/);
      const choicesMatch = block.match(/choices:\s*\[([^\]]*)\]/);
      if (ciMatch && choicesMatch) {
        const ci = parseInt(ciMatch[1]);
        const choiceCount = (choicesMatch[1].match(/"/g) || []).length / 2;
        if (ci >= choiceCount) {
          errors.push(`  L${lineNum}: [INTERACTIVE] gap-fill: correctIndex=${ci} de csak ${choiceCount} choice van`);
        }
      }
    }

    // Label referenciák léteznek-e?
    const refs = extractStringRefs(block);
    for (const ref of refs) {
      if (!labelKeys.has(ref)) {
        errors.push(`  L${lineNum}: [LABEL-REF] "${ref}" nem létezik a LABELS-ben`);
      }
    }
  });

  // ─── 8. Quiz blokk label referenciák ─────────────────────────────────────
  const quizBlocks = findBlocks(content, "quiz: {");
  quizBlocks.forEach(({ block, index }) => {
    if (block.includes("generate:")) return; // generate módnál nincs label ref
    const lineNum = content.slice(0, index).split("\n").length;
    const refs = extractStringRefs(block);
    for (const ref of refs) {
      if (!labelKeys.has(ref)) {
        errors.push(`  L${lineNum}: [LABEL-REF] quiz: "${ref}" nem létezik a LABELS-ben`);
      }
    }
  });

  // ─── Eredmény ─────────────────────────────────────────────────────────────
  if (errors.length === 0) {
    console.log(`✅ ${file} — hibátlan`);
  } else {
    console.log(`\n❌ ${file} — ${errors.length} hiba:`);
    const unique = [...new Set(errors)];
    unique.forEach(e => console.log(e));
    totalErrors += unique.length;
  }
}

console.log(`\n${"─".repeat(50)}`);
console.log(`Összesen: ${totalErrors} hiba ${files.length} fájlban`);
