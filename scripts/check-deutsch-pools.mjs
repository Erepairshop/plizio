/**
 * AstroDeutsch pool validator
 * Ellenőrzi a lib/explorerPools/deutschK*.ts fájlokat:
 *  - ismeretlen generate: kulcsok
 *  - hiányzó SVG mezők (words/color sentence-display-nál, result/color compound-word-nál, stb.)
 *  - syllables (régi, parts kellene)
 *  - sentence-flow (nem létező SVG típus)
 *  - duplikált PoolTopicDef import
 *  - placeholder generate: "generator_key"
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POOLS_DIR = path.join(ROOT, "lib/explorerPools");

// Ismert generator kulcsok (deutschGenerators.ts alapján)
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

// Érvényes SVG típusok
const VALID_SVG_TYPES = new Set([
  "letter-circles","two-groups","letter-pairs","word-syllables","text-bubbles",
  "compound-word","article-noun","icon-grid","rhyme-pair","sentence-display",
  "word-display","simple-icon",
]);

// Érvényes interactive típusok
const VALID_INTERACTIVE_TYPES = new Set([
  "block-drag","number-line","word-order","gap-fill","match-pairs","highlight-text","tap-count",
  "drag-to-bucket","sentence-build","label-diagram","balance-scale","ratio-slider",
  "physics-magnet","physics-slingshot","physics-stacker","physics-bucket",
]);

const files = fs.readdirSync(POOLS_DIR)
  .filter(f => f.match(/^deutschK\d+\.ts$/))
  .sort();

let totalErrors = 0;

for (const file of files) {
  const filePath = path.join(POOLS_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const errors = [];

  // 1. Duplikált import
  const importLine = 'import type { PoolTopicDef } from "./types";';
  const importCount = (content.match(/import type \{ PoolTopicDef \}/g) || []).length;
  if (importCount > 1) {
    errors.push(`  [IMPORT] Duplikált PoolTopicDef import: ${importCount}×`);
  }

  // 2. Sor-alapú ellenőrzések
  lines.forEach((line, i) => {
    const ln = i + 1;
    const trim = line.trim();

    // generate: kulcs ellenőrzés
    const genMatch = trim.match(/generate:\s*"([^"]+)"/);
    if (genMatch) {
      const key = genMatch[1];
      if (key === "generator_key") {
        errors.push(`  L${ln}: [GENERATE] Placeholder 'generator_key' – cseréld valódi generátorra`);
      } else if (!KNOWN_GENERATORS.has(key)) {
        errors.push(`  L${ln}: [GENERATE] Ismeretlen kulcs: "${key}"`);
      }
    }

    // sentence-flow (nem létező SVG típus)
    if (trim.includes('"sentence-flow"')) {
      errors.push(`  L${ln}: [SVG] "sentence-flow" nem létező típus → használj "sentence-display"-t`);
    }

    // syllables (régi, parts kellene)
    if (trim.includes("syllables:") && !trim.includes("word-syllables")) {
      errors.push(`  L${ln}: [SVG] "syllables:" helyett "parts:" kell word-syllables-ben`);
    }

    // SVG típus ellenőrzés
    const svgTypeMatch = trim.match(/type:\s*"([^"]+)"/) ;
    if (svgTypeMatch && line.includes("svg:")) {
      // csak svg: sorában vizsgáljuk
    }
  });

  // 3. Blokk-alapú ellenőrzések (regex a teljes tartalmon)

  // sentence-display hiányzó words/color
  const sdMatches = [...content.matchAll(/type:\s*"sentence-display"[^}]*/g)];
  sdMatches.forEach(m => {
    const block = m[0];
    const lineNum = content.slice(0, m.index).split("\n").length;
    if (!block.includes("words:") && !block.includes('"words"')) {
      errors.push(`  L${lineNum}: [SVG] sentence-display hiányzó "words:" mező`);
    }
    if (!block.includes("color:")) {
      errors.push(`  L${lineNum}: [SVG] sentence-display hiányzó "color:" mező`);
    }
  });

  // compound-word hiányzó result/color
  const cwMatches = [...content.matchAll(/type:\s*"compound-word"[^}]*/g)];
  cwMatches.forEach(m => {
    const block = m[0];
    const lineNum = content.slice(0, m.index).split("\n").length;
    if (!block.includes("result:")) {
      errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "result:" mező`);
    }
    if (!block.includes("color:")) {
      errors.push(`  L${lineNum}: [SVG] compound-word hiányzó "color:" mező`);
    }
  });

  // word-syllables hiányzó parts/color
  const wsMatches = [...content.matchAll(/type:\s*"word-syllables"[^}]*/g)];
  wsMatches.forEach(m => {
    const block = m[0];
    const lineNum = content.slice(0, m.index).split("\n").length;
    if (block.includes("syllables:")) {
      errors.push(`  L${lineNum}: [SVG] word-syllables: "syllables" → "parts" kell`);
    }
    if (!block.includes("parts:") && !block.includes("syllables:")) {
      errors.push(`  L${lineNum}: [SVG] word-syllables hiányzó "parts:" mező`);
    }
    if (!block.includes("color:")) {
      errors.push(`  L${lineNum}: [SVG] word-syllables hiányzó "color:" mező`);
    }
  });

  // text-bubbles items: hiányzó color/bg
  const tbMatches = [...content.matchAll(/type:\s*"text-bubbles"[\s\S]{0,300}?items:\s*\[([^\]]*)\]/g)];
  tbMatches.forEach(m => {
    const itemsBlock = m[1];
    const lineNum = content.slice(0, m.index).split("\n").length;
    const items = [...itemsBlock.matchAll(/\{([^}]*)\}/g)];
    items.forEach((item, idx) => {
      const itemContent = item[1];
      if (!itemContent.includes("color:")) {
        errors.push(`  L${lineNum}: [SVG] text-bubbles item #${idx+1} hiányzó "color:" mező`);
      }
      if (!itemContent.includes("bg:")) {
        errors.push(`  L${lineNum}: [SVG] text-bubbles item #${idx+1} hiányzó "bg:" mező`);
      }
    });
  });

  // interactive: hiányzó hint1/hint2
  // Find interactive blocks with proper nested brace handling
  const intMatches = [];
  let i = 0;
  while (i < content.length) {
    const idx = content.indexOf("interactive: {", i);
    if (idx === -1) break;

    let braceCount = 0;
    let endIdx = -1;
    for (let j = idx + "interactive: {".length - 1; j < content.length; j++) {
      if (content[j] === "{") braceCount++;
      else if (content[j] === "}") {
        if (braceCount === 0) {
          endIdx = j;
          break;
        }
        braceCount--;
      }
    }

    if (endIdx !== -1) {
      const block = content.substring(idx, endIdx + 1);
      intMatches.push({ block, index: idx });
    }
    i = endIdx !== -1 ? endIdx + 1 : idx + 1;
  }

  intMatches.forEach(m => {
    const block = m.block;
    const lineNum = content.slice(0, m.index).split("\n").length;
    if (!block.includes("hint1:")) {
      errors.push(`  L${lineNum}: [INTERACTIVE] hiányzó "hint1:"`);
    }
    if (!block.includes("hint2:")) {
      errors.push(`  L${lineNum}: [INTERACTIVE] hiányzó "hint2:"`);
    }
    if (!block.includes("instruction:")) {
      errors.push(`  L${lineNum}: [INTERACTIVE] hiányzó "instruction:"`);
    }
    // Típus ellenőrzés
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (typeMatch && !VALID_INTERACTIVE_TYPES.has(typeMatch[1])) {
      errors.push(`  L${lineNum}: [INTERACTIVE] Ismeretlen típus: "${typeMatch[1]}"`);
    }
  });

  // SVG típus érvényesség
  // Find svg blocks with proper nested brace handling
  const svgBlockMatches = [];
  i = 0;
  while (i < content.length) {
    const idx = content.indexOf("svg: {", i);
    if (idx === -1) break;

    let braceCount = 0;
    let endIdx = -1;
    for (let j = idx + "svg: {".length - 1; j < content.length; j++) {
      if (content[j] === "{") braceCount++;
      else if (content[j] === "}") {
        if (braceCount === 0) {
          endIdx = j;
          break;
        }
        braceCount--;
      }
    }

    if (endIdx !== -1) {
      const block = content.substring(idx, endIdx + 1);
      svgBlockMatches.push({ block, index: idx });
    }
    i = endIdx !== -1 ? endIdx + 1 : idx + 1;
  }

  svgBlockMatches.forEach(m => {
    const block = m.block;
    const lineNum = content.slice(0, m.index).split("\n").length;
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (typeMatch && !VALID_SVG_TYPES.has(typeMatch[1])) {
      errors.push(`  L${lineNum}: [SVG] Ismeretlen SVG típus: "${typeMatch[1]}"`);
    }
  });

  // Eredmény
  if (errors.length === 0) {
    console.log(`✅ ${file} — hibátlan`);
  } else {
    console.log(`\n❌ ${file} — ${errors.length} hiba:`);
    // Deduplicate
    const unique = [...new Set(errors)];
    unique.forEach(e => console.log(e));
    totalErrors += unique.length;
  }
}

console.log(`\n${"─".repeat(50)}`);
console.log(`Összesen: ${totalErrors} hiba ${files.length} fájlban`);
