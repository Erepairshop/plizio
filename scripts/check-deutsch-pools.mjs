/**
 * AstroDeutsch pool validator.
 * Checks the deutschK*.ts files for:
 * - missing or mismatched language blocks inside each LABELS export
 * - duplicate label keys within a single language block
 * - empty label values
 * - invalid generate: keys
 * - basic SVG and interactive wiring issues
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POOLS_DIR = path.join(ROOT, "lib/explorerPools");
const LANGS = ["de", "en", "hu", "ro"];

const KNOWN_GENERATORS = new Set([
  "adjektive_gegenteil",
  "akkusativ",
  "antonyme",
  "artikel_k2",
  "berufe_k2",
  "dativ",
  "eroerterung_k8",
  "farben_k2",
  "finalsatz_k7",
  "gegensaetze_k2",
  "genitiv",
  "infinitiv_zu_k6",
  "kausalsatz_k6",
  "kausalsatz_k7",
  "komma_nebensatz_k5",
  "konditionalsatz_k7",
  "konjunktiv2_k6",
  "konjunktiv_1",
  "konjunktiv_i_k8",
  "konjunktiv_ii_k8",
  "konzessivsatz_k7",
  "nebensatztypen",
  "nebensatztypen_k8",
  "nomen_k2",
  "nominalstil_k8",
  "nominativ",
  "partizip_k5",
  "partizipial_k8",
  "passiv_k6",
  "passiv_k8",
  "passiv_modal_k7",
  "passiv_praeteritum_k5",
  "perfekt",
  "plural",
  "plusquamperfekt_k5",
  "praeteritum",
  "pronomen_k5",
  "register_k8",
  "relativsatz_k6",
  "relativsatz_k7",
  "satzzeichen_k1",
  "steigerung",
  "stilmittel_k7",
  "stilmittel_k8",
  "synonyme",
  "synonyme_k5",
  "temporalsatz_k7",
  "tiere_k1",
  "um_zu_k7",
  "verben_k2",
  "verben_k3",
  "vorgangspassiv_k5",
  "werden_passiv",
  "zahlen_k2",
  "zeit_k2",
]);

const VALID_SVG_TYPES = new Set([
  "letter-circles",
  "two-groups",
  "letter-pairs",
  "word-syllables",
  "text-bubbles",
  "compound-word",
  "article-noun",
  "icon-grid",
  "rhyme-pair",
  "sentence-display",
  "word-display",
  "simple-icon",
]);

const VALID_INTERACTIVE_TYPES = new Set([
  "block-drag",
  "number-line",
  "word-order",
  "gap-fill",
  "match-pairs",
  "highlight-text",
  "tap-count",
  "drag-to-bucket",
  "sentence-build",
  "label-diagram",
  "balance-scale",
  "ratio-slider",
  "physics-magnet",
  "physics-slingshot",
  "physics-stacker",
  "physics-bucket",
]);

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

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
        if (braceCount === 0) {
          endIdx = j;
          break;
        }
        braceCount--;
      }
    }
    if (endIdx !== -1) result.push({ block: content.substring(idx, endIdx + 1), index: idx });
    i = endIdx !== -1 ? endIdx + 1 : idx + 1;
  }
  return result;
}

function extractLabelKeys(content) {
  const keys = new Set();
  for (const m of content.matchAll(/\b(t\d+_\w+):\s*"/g)) {
    keys.add(m[1]);
  }
  return keys;
}

function extractStringRefs(block) {
  const refs = [];
  const cleaned = block.replace(/\bid:\s*"[^"]*"/g, "");
  for (const m of cleaned.matchAll(/"([a-z][a-z0-9_]+)"/g)) {
    if (/^t\d+_/.test(m[1])) refs.push(m[1]);
  }
  return refs;
}

function extractLabelExports(content) {
  const lines = content.split("\n");
  const exports = [];
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^export const (\w+_LABELS):\s*Record<string,\s*Record<string,\s*string>>\s*=\s*\{$/);
    if (!match) continue;
    exports.push({
      name: match[1],
      startLine: i + 1,
      endLine: null,
    });
  }
  for (let i = 0; i < exports.length; i++) {
    exports[i].endLine = i + 1 < exports.length ? exports[i + 1].startLine - 1 : lines.length;
  }
  return { lines, exports };
}

function extractLangBlocks(sectionLines) {
  const blocks = [];
  let current = null;
  let depth = 0;
  let startLine = 0;
  let buffer = [];

  for (let i = 0; i < sectionLines.length; i++) {
    const line = sectionLines[i];
    const match = line.match(/^\s*(de|en|hu|ro):\s*\{$/);
    if (!current && match) {
      current = match[1];
      startLine = i + 1;
      depth = 1;
      buffer = [line];
      continue;
    }
    if (!current) continue;

    buffer.push(line);
    depth += (line.match(/\{/g) || []).length;
    depth -= (line.match(/\}/g) || []).length;

    if (depth === 0) {
      blocks.push({ lang: current, startLine, block: buffer.join("\n") });
      current = null;
      buffer = [];
    }
  }

  return blocks;
}

const files = fs.readdirSync(POOLS_DIR)
  .filter(f => f.match(/^deutschK\d+\.ts$/))
  .sort();

let totalErrors = 0;

for (const file of files) {
  const filePath = path.join(POOLS_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { lines, exports } = extractLabelExports(content);
  const errors = [];
  const labelKeys = extractLabelKeys(content);

  const importCount = (content.match(/import type \{ PoolTopicDef \}/g) || []).length;
  if (importCount > 1) {
    errors.push(`[IMPORT] Duplicate PoolTopicDef import: ${importCount}x`);
  }

  for (const exp of exports) {
    const sectionLines = lines.slice(exp.startLine - 1, exp.endLine);
    const langBlocks = extractLangBlocks(sectionLines);

    const foundLangs = new Set(langBlocks.map(b => b.lang));
    for (const lang of LANGS) {
      if (!foundLangs.has(lang)) {
        errors.push(`L${exp.startLine}: [LABEL] ${exp.name} missing ${lang} block`);
      }
    }

    const keysByLang = new Map();
    for (const langBlock of langBlocks) {
      const keys = [...langBlock.block.matchAll(/\b(t\d+_\w+):\s*"/g)].map(m => m[1]);
      keysByLang.set(langBlock.lang, keys);

      const counts = new Map();
      for (const key of keys) counts.set(key, (counts.get(key) || 0) + 1);
      for (const [key, count] of counts.entries()) {
        if (count > 1) {
          errors.push(`L${exp.startLine + langBlock.startLine - 1}: [LABEL] Duplicate key in ${exp.name}/${langBlock.lang}: "${key}" (${count}x)`);
        }
      }
    }

    const keySetByLang = new Map([...keysByLang.entries()].map(([lang, keys]) => [lang, new Set(keys)]));
    const allKeys = new Set();
    for (const keys of keysByLang.values()) {
      for (const key of keys) allKeys.add(key);
    }

    for (const lang of LANGS) {
      const keys = keysByLang.get(lang);
      if (!keys) continue;
      const set = keySetByLang.get(lang);
      const missing = [...allKeys].filter(key => !set.has(key));
      const extra = [...set].filter(key => !allKeys.has(key));
      if (missing.length || extra.length) {
        const baseLine = exp.startLine + (langBlocks.find(b => b.lang === lang)?.startLine || 1) - 1;
        if (missing.length) {
          errors.push(`L${baseLine}: [LABEL] ${exp.name}/${lang} missing keys: ${missing.join(", ")}`);
        }
        if (extra.length) {
          errors.push(`L${baseLine}: [LABEL] ${exp.name}/${lang} extra keys: ${extra.join(", ")}`);
        }
      }
    }

    if (langBlocks.length === LANGS.length) {
      const baseline = keysByLang.get(LANGS[0]) || [];
      for (const lang of LANGS.slice(1)) {
        const other = keysByLang.get(lang) || [];
        if (baseline.length !== other.length) {
          errors.push(`L${exp.startLine}: [LABEL] ${exp.name} key count mismatch: ${LANGS[0]}=${baseline.length}, ${lang}=${other.length}`);
        }
      }
    }
  }

  for (const m of content.matchAll(/^\s{4,}(\w+):\s*""\s*,?$/gm)) {
    const ln = lineNumber(content, m.index);
    if (/^t\d+_/.test(m[1])) {
      errors.push(`L${ln}: [LABEL] Empty value: "${m[1]}"`);
    }
  }

  lines.forEach((line, i) => {
    const ln = i + 1;
    const trim = line.trim();

    const genMatch = trim.match(/generate:\s*"([^"]+)"/);
    if (genMatch) {
      const key = genMatch[1];
      if (key === "generator_key") {
        errors.push(`L${ln}: [GENERATE] Placeholder 'generator_key'`);
      } else if (!KNOWN_GENERATORS.has(key)) {
        errors.push(`L${ln}: [GENERATE] Unknown key: "${key}"`);
      }
    }

    if (trim.includes('"sentence-flow"')) {
      errors.push(`L${ln}: [SVG] Use "sentence-display" instead of "sentence-flow"`);
    }

    if (trim.includes("syllables:") && !trim.includes("word-syllables")) {
      errors.push(`L${ln}: [SVG] Use "parts:" instead of "syllables:"`);
    }
  });

  const svgBlocks = findBlocks(content, "svg: {");
  svgBlocks.forEach(({ block, index }) => {
    const lineNum = lineNumber(content, index);
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (!typeMatch) return;
    const type = typeMatch[1];

    if (!VALID_SVG_TYPES.has(type)) {
      errors.push(`L${lineNum}: [SVG] Unknown type: "${type}"`);
      return;
    }

    if (type === "sentence-display") {
      if (!block.includes("words:")) errors.push(`L${lineNum}: [SVG] sentence-display missing "words:"`);
      if (!block.includes("color:")) errors.push(`L${lineNum}: [SVG] sentence-display missing "color:"`);
    }
    if (type === "compound-word") {
      if (!block.includes("result:")) errors.push(`L${lineNum}: [SVG] compound-word missing "result:"`);
      if (!block.includes("color:")) errors.push(`L${lineNum}: [SVG] compound-word missing "color:"`);
    }
    if (type === "word-syllables") {
      if (block.includes("syllables:")) errors.push(`L${lineNum}: [SVG] word-syllables: use "parts"`);
      if (!block.includes("parts:") && !block.includes("syllables:")) errors.push(`L${lineNum}: [SVG] word-syllables missing "parts:"`);
      if (!block.includes("color:")) errors.push(`L${lineNum}: [SVG] word-syllables missing "color:"`);
    }
    if (type === "two-groups") {
      if (!block.includes("border:")) errors.push(`L${lineNum}: [SVG] two-groups missing "border:"`);
    }
    if (type === "rhyme-pair") {
      if (!block.includes("color:")) errors.push(`L${lineNum}: [SVG] rhyme-pair missing "color:"`);
    }
  });

  const tbMatches = [...content.matchAll(/type:\s*"text-bubbles"[\s\S]{0,300}?items:\s*\[([^\]]*)\]/g)];
  tbMatches.forEach(m => {
    const lineNum = lineNumber(content, m.index);
    const items = [...m[1].matchAll(/\{([^}]*)\}/g)];
    items.forEach((item, idx) => {
      if (!item[1].includes("color:")) errors.push(`L${lineNum}: [SVG] text-bubbles item #${idx + 1} missing "color:"`);
      if (!item[1].includes("bg:")) errors.push(`L${lineNum}: [SVG] text-bubbles item #${idx + 1} missing "bg:"`);
    });
  });

  const intBlocks = findBlocks(content, "interactive: {");
  intBlocks.forEach(({ block, index }) => {
    const lineNum = lineNumber(content, index);

    if (!block.includes("hint1:")) errors.push(`L${lineNum}: [INTERACTIVE] missing "hint1:"`);
    if (!block.includes("hint2:")) errors.push(`L${lineNum}: [INTERACTIVE] missing "hint2:"`);
    if (!block.includes("instruction:")) errors.push(`L${lineNum}: [INTERACTIVE] missing "instruction:"`);

    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (typeMatch && !VALID_INTERACTIVE_TYPES.has(typeMatch[1])) {
      errors.push(`L${lineNum}: [INTERACTIVE] Unknown type: "${typeMatch[1]}"`);
    }

    if (typeMatch && typeMatch[1] === "physics-slingshot" && !block.includes("isCorrect: true")) {
      errors.push(`L${lineNum}: [INTERACTIVE] physics-slingshot needs at least one "isCorrect: true" target`);
    }

    if (typeMatch && typeMatch[1] === "gap-fill") {
      const ciMatch = block.match(/correctIndex:\s*(\d+)/);
      const choicesMatch = block.match(/choices:\s*\[([^\]]*)\]/);
      if (ciMatch && choicesMatch) {
        const ci = parseInt(ciMatch[1], 10);
        const choiceCount = (choicesMatch[1].match(/"/g) || []).length / 2;
        if (ci >= choiceCount) {
          errors.push(`L${lineNum}: [INTERACTIVE] gap-fill correctIndex=${ci} but only ${choiceCount} choices`);
        }
      }
    }

    const refs = extractStringRefs(block);
    for (const ref of refs) {
      if (!labelKeys.has(ref)) {
        errors.push(`L${lineNum}: [LABEL-REF] "${ref}" does not exist in LABELS`);
      }
    }
  });

  const quizBlocks = findBlocks(content, "quiz: {");
  quizBlocks.forEach(({ block, index }) => {
    if (block.includes("generate:")) return;
    const lineNum = lineNumber(content, index);
    const refs = extractStringRefs(block);
    for (const ref of refs) {
      if (!labelKeys.has(ref)) {
        errors.push(`L${lineNum}: [LABEL-REF] quiz: "${ref}" does not exist in LABELS`);
      }
    }
  });

  const uniqueErrors = [...new Set(errors)];
  if (uniqueErrors.length === 0) {
    console.log(`OK ${file}`);
  } else {
    console.log(`\nERROR ${file} - ${uniqueErrors.length} issue(s)`);
    uniqueErrors.forEach(e => console.log(e));
    totalErrors += uniqueErrors.length;
  }
}

console.log(`\n${"-".repeat(50)}`);
console.log(`Total: ${totalErrors} issue(s) in ${files.length} file(s)`);
