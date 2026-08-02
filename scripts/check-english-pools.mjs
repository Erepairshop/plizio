/**
 * AstroEnglish pool validator
 * Checks lib/explorerPools/englishK*.ts for common structural issues.
 *
 * Run with: node scripts/check-english-pools.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POOLS_DIR = path.join(ROOT, "lib/explorerPools");

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

const NO_HINTS_TYPES = new Set([
  "block-drag", "number-line", "tap-count",
  "physics-magnet", "physics-slingshot", "physics-stacker", "physics-bucket",
  "label-diagram", "balance-scale", "ratio-slider",
]);

function findBlocks(content, prefix) {
  const result = [];
  let i = 0;
  while (i < content.length) {
    const idx = content.indexOf(prefix, i);
    if (idx === -1) break;
    let depth = 0;
    let started = false;
    let endIdx = -1;
    for (let j = idx; j < content.length; j++) {
      if (content[j] === "{") {
        depth++;
        started = true;
      } else if (content[j] === "}" && started) {
        depth--;
        if (depth === 0) {
          endIdx = j;
          break;
        }
      }
    }
    if (endIdx !== -1) {
      result.push({ block: content.slice(idx, endIdx + 1), index: idx });
    }
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
  for (const m of cleaned.matchAll(/"(t\d+_[a-z0-9_]+)"/g)) {
    refs.push(m[1]);
  }
  return refs;
}

function countChoices(choicesStr) {
  return (choicesStr.match(/"/g) || []).length / 2;
}

function extractLanguageBlocks(block) {
  const result = [];
  const startRegex = /^\s{2}(en|de|hu|ro):\s*\{/gm;
  let match;
  while ((match = startRegex.exec(block)) !== null) {
    const lang = match[1];
    const openIdx = block.indexOf("{", match.index);
    if (openIdx === -1) continue;
    let depth = 0;
    let endIdx = -1;
    for (let i = openIdx; i < block.length; i++) {
      if (block[i] === "{") depth++;
      else if (block[i] === "}") {
        depth--;
        if (depth === 0) {
          endIdx = i;
          break;
        }
      }
    }
    if (endIdx !== -1) {
      result.push({ lang, block: block.slice(openIdx, endIdx + 1) });
    }
  }
  return result;
}

function lineNumber(content, index) {
  return content.slice(0, index).split("\n").length;
}

const files = fs.readdirSync(POOLS_DIR)
  .filter((file) => /^englishK\d+\.ts$/.test(file))
  .sort((a, b) => Number(a.match(/\d+/)?.[0]) - Number(b.match(/\d+/)?.[0]));

if (files.length === 0) {
  console.log("No englishK*.ts files were found in lib/explorerPools/.");
  process.exit(1);
}

console.log(`Checking AstroEnglish pools: ${files.length} file(s)\n`);

let totalErrors = 0;
let totalWarnings = 0;
let totalTopics = 0;

for (const file of files) {
  const filePath = path.join(POOLS_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const errors = [];
  const warnings = [];

  const importCount = (content.match(/import type \{ PoolTopicDef \}/g) || []).length;
  if (importCount > 1) {
    errors.push(`[IMPORT] Duplicate PoolTopicDef import: ${importCount}x`);
  }

  const poolExports = [...content.matchAll(/export const (\w+_POOL):\s*PoolTopicDef\[\]/g)];
  const labelExports = [...content.matchAll(/export const (\w+_LABELS):/g)];
  if (poolExports.length !== 9) {
    warnings.push(`[POOL] ${poolExports.length} POOL exports found (expected 9)`);
  }
  if (labelExports.length !== poolExports.length) {
    errors.push(`[POOL] LABELS (${labelExports.length}) and POOL (${poolExports.length}) export counts do not match`);
  }

  for (const poolMatch of poolExports) {
    const poolName = poolMatch[1];
    const poolIdx = content.indexOf(`export const ${poolName}: PoolTopicDef[]`);
    const eqBracket = content.indexOf("= [", poolIdx);
    if (poolIdx === -1 || eqBracket === -1) continue;
    const arrStart = eqBracket + 2;
    let depth = 0;
    let arrEnd = -1;
    for (let j = arrStart; j < content.length; j++) {
      if (content[j] === "[") depth++;
      else if (content[j] === "]") {
        depth--;
        if (depth === 0) {
          arrEnd = j;
          break;
        }
      }
    }
    if (arrEnd === -1) continue;
    const poolContent = content.slice(arrStart, arrEnd + 1);
    const topicCount = (poolContent.match(/infoTitle:/g) || []).length;
    totalTopics += topicCount;
    if (topicCount === 0) {
      errors.push(`[POOL] ${poolName}: empty (0 topics)`);
    } else if (topicCount < 10) {
      warnings.push(`[POOL] ${poolName}: only ${topicCount} topics (expected 15)`);
    }
  }

  const labelKeys = extractLabelKeys(content);

  for (const labelsMatch of content.matchAll(/export const \w+_LABELS[^=]*=\s*\{[\s\S]*?^};/gm)) {
    const block = labelsMatch[0];
    for (const languageBlock of extractLanguageBlocks(block)) {
      const keyCount = {};
      for (const m of languageBlock.block.matchAll(/\b(t\d+_\w+):\s*"/g)) {
        keyCount[m[1]] = (keyCount[m[1]] || 0) + 1;
      }
      for (const [key, count] of Object.entries(keyCount)) {
        if (count > 1) {
          errors.push(`L${lineNumber(content, labelsMatch.index)}: [LABEL] Duplicate key in ${languageBlock.lang}: "${key}" (${count}x)`);
        }
      }
    }
  }

  for (const m of content.matchAll(/^\s{4,}(t\d+_\w+):\s*""\s*,?$/gm)) {
    errors.push(`L${lineNumber(content, m.index)}: [LABEL] Empty value: "${m[1]}"`);
  }

  lines.forEach((line, i) => {
    const ln = i + 1;
    const trim = line.trim();

    if (trim.match(/"(TODO|PLACEHOLDER|TBD|YOUR_TEXT_HERE)"/i) || trim.match(/"(FILL|XXX)"/)) {
      errors.push(`L${ln}: [CONTENT] Placeholder text left in file`);
    }
    if (trim.startsWith("//") || trim.startsWith("*")) return;

    if (trim.includes('"sentence-flow"')) {
      errors.push(`L${ln}: [SVG] "sentence-flow" should be "sentence-display"`);
    }
    if (trim.match(/type:\s*"word-display"/) && trim.includes("words:")) {
      errors.push(`L${ln}: [SVG] word-display uses "words:" instead of "word:"`);
    }
    if (trim.match(/type:\s*"sentence-build"/) && trim.includes("parts:")) {
      errors.push(`L${ln}: [INTERACTIVE] sentence-build uses "parts:" instead of "fragments:"`);
    }
    if (trim.match(/type:\s*"highlight-text"/) && trim.includes("sentence:")) {
      errors.push(`L${ln}: [INTERACTIVE] highlight-text uses "sentence:" instead of "tokens:"`);
    }
    if (trim.includes("accepts:")) {
      errors.push(`L${ln}: [INTERACTIVE] drag-to-bucket uses unsupported "accepts:"`);
    }
    if (/^\s*id:\s*"t\d+"/.test(trim)) {
      errors.push(`L${ln}: [POOL] topic contains an unexpected "id:" field`);
    }
    if (/^\s*title:\s*"t\d+_/.test(trim) && !trim.includes("explorer_title")) {
      errors.push(`L${ln}: [POOL] topic uses "title:" instead of "infoTitle:"`);
    }
    if (/^\s*hint1:\s*"t\d+_/.test(trim)) {
      const context = lines.slice(Math.max(0, i - 20), i).join(" ");
      const isInsideInteractive = context.includes("interactive:");
      if (!isInsideInteractive) {
        errors.push(`L${ln}: [POOL] topic-level "hint1:" should be "hintKey:"`);
      }
    }
  });

  const svgBlocks = findBlocks(content, "svg: {");
  for (const { block, index } of svgBlocks) {
    const ln = lineNumber(content, index);
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    if (!typeMatch) {
      errors.push(`L${ln}: [SVG] Missing "type:" field`);
      continue;
    }
    const type = typeMatch[1];
    if (!VALID_SVG_TYPES.has(type)) {
      errors.push(`L${ln}: [SVG] Unknown type: "${type}"`);
      continue;
    }

    if (type === "word-display") {
      if (!block.includes("word:")) errors.push(`L${ln}: [SVG] word-display missing "word:"`);
      if (!block.includes("color:")) errors.push(`L${ln}: [SVG] word-display missing "color:"`);
    }
    if (type === "sentence-display") {
      if (!block.includes("words:")) errors.push(`L${ln}: [SVG] sentence-display missing "words:"`);
      if (!block.includes("color:")) errors.push(`L${ln}: [SVG] sentence-display missing "color:"`);
    }
    if (type === "compound-word") {
      if (!block.includes("word1:")) errors.push(`L${ln}: [SVG] compound-word missing "word1:"`);
      if (!block.includes("word2:")) errors.push(`L${ln}: [SVG] compound-word missing "word2:"`);
      if (!block.includes("result:")) errors.push(`L${ln}: [SVG] compound-word missing "result:"`);
      if (!block.includes("color:")) errors.push(`L${ln}: [SVG] compound-word missing "color:"`);
    }
    if (type === "word-syllables") {
      if (!block.includes("parts:")) errors.push(`L${ln}: [SVG] word-syllables missing "parts:"`);
      if (!block.includes("color:")) errors.push(`L${ln}: [SVG] word-syllables missing "color:"`);
    }
    if (type === "word-card") {
      if (!block.includes("word:")) errors.push(`L${ln}: [SVG] word-card missing "word:"`);
      if (!block.includes("translation:")) errors.push(`L${ln}: [SVG] word-card missing "translation:"`);
    }
  }

  const intBlocks = findBlocks(content, "interactive: {");
  for (const { block, index } of intBlocks) {
    const ln = lineNumber(content, index);
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    const type = typeMatch?.[1];

    if (type && !VALID_INTERACTIVE_TYPES.has(type)) {
      errors.push(`L${ln}: [INTERACTIVE] Unknown type: "${type}"`);
    }
    if (type && !NO_HINTS_TYPES.has(type)) {
      if (!block.includes("instruction:")) errors.push(`L${ln}: [INTERACTIVE] (${type}) missing "instruction:"`);
      if (!block.includes("hint1:")) errors.push(`L${ln}: [INTERACTIVE] (${type}) missing "hint1:"`);
      if (!block.includes("hint2:")) errors.push(`L${ln}: [INTERACTIVE] (${type}) missing "hint2:"`);
    }
    if (type === "sentence-build" && !block.includes("fragments:")) {
      errors.push(`L${ln}: [INTERACTIVE] sentence-build missing "fragments:"`);
    }
    if (type === "highlight-text") {
      if (!block.includes("tokens:")) errors.push(`L${ln}: [INTERACTIVE] highlight-text missing "tokens:"`);
      if (!block.includes("correctIndices:")) errors.push(`L${ln}: [INTERACTIVE] highlight-text missing "correctIndices:"`);
    }
    if (type === "drag-to-bucket" && !block.includes("bucketId")) {
      errors.push(`L${ln}: [INTERACTIVE] drag-to-bucket items missing "bucketId"`);
    }
    if (type === "match-pairs" && !block.includes("pairs:")) {
      errors.push(`L${ln}: [INTERACTIVE] match-pairs missing "pairs:"`);
    }
    if (type === "word-order") {
      if (!block.includes("words:")) errors.push(`L${ln}: [INTERACTIVE] word-order missing "words:"`);
      if (!block.includes("correctOrder:")) errors.push(`L${ln}: [INTERACTIVE] word-order missing "correctOrder:"`);
    }
    if (type === "gap-fill") {
      const ciMatch = block.match(/correctIndex:\s*(\d+)/);
      const choicesMatch = block.match(/choices:\s*\[([^\]]*)\]/);
      if (!block.includes("choices:")) errors.push(`L${ln}: [INTERACTIVE] gap-fill missing "choices:"`);
      if (!block.includes("correctIndex:")) errors.push(`L${ln}: [INTERACTIVE] gap-fill missing "correctIndex:"`);
      if (ciMatch && choicesMatch) {
        const ci = Number(ciMatch[1]);
        const count = countChoices(choicesMatch[1]);
        if (ci >= count) {
          errors.push(`L${ln}: [INTERACTIVE] gap-fill correctIndex=${ci} but only ${count} choices exist`);
        }
      }
    }
    if (type === "physics-slingshot" && !block.includes("isCorrect: true")) {
      errors.push(`L${ln}: [INTERACTIVE] physics-slingshot has no correct target`);
    }

    for (const ref of extractStringRefs(block)) {
      if (!labelKeys.has(ref)) {
        errors.push(`L${ln}: [LABEL-REF] interactive reference "${ref}" does not exist`);
      }
    }
  }

  const quizBlocks = findBlocks(content, "quiz: {");
  for (const { block, index } of quizBlocks) {
    const ln = lineNumber(content, index);
    if (block.includes("generate:")) continue;
    if (!block.includes("question:")) errors.push(`L${ln}: [QUIZ] missing "question:"`);
    if (!block.includes("choices:")) errors.push(`L${ln}: [QUIZ] missing "choices:"`);
    if (!block.includes("answer:")) errors.push(`L${ln}: [QUIZ] missing "answer:"`);

    const choicesMatch = block.match(/choices:\s*\[([^\]]*)\]/);
    if (choicesMatch) {
      const count = countChoices(choicesMatch[1]);
      if (count !== 4) {
        errors.push(`L${ln}: [QUIZ] choices has ${count} items (expected 4)`);
      }
    }

    for (const ref of extractStringRefs(block)) {
      if (!labelKeys.has(ref)) {
        errors.push(`L${ln}: [LABEL-REF] quiz reference "${ref}" does not exist`);
      }
    }
  }

  const infoTitleCount = (content.match(/infoTitle:/g) || []).length;
  const infoTextCount = (content.match(/infoText:/g) || []).length;
  if (infoTitleCount !== infoTextCount) {
    warnings.push(`[POOL] infoTitle (${infoTitleCount}) and infoText (${infoTextCount}) counts differ`);
  }

  const uniqueErrors = [...new Set(errors)];
  const uniqueWarnings = [...new Set(warnings)];
  totalErrors += uniqueErrors.length;
  totalWarnings += uniqueWarnings.length;

  if (uniqueErrors.length === 0 && uniqueWarnings.length === 0) {
    console.log(`OK   ${file} (${infoTitleCount} topics)`);
  } else {
    console.log(`${uniqueErrors.length ? "ERR" : "WARN"} ${file} (${infoTitleCount} topics)`);
    uniqueErrors.forEach((msg) => console.log(`  ${msg}`));
    uniqueWarnings.forEach((msg) => console.log(`  ${msg}`));
  }
}

console.log(`\nSummary: ${totalErrors} error(s), ${totalWarnings} warning(s), ${totalTopics} topics across ${files.length} file(s)`);
if (totalErrors === 0) {
  console.log("English pools passed.");
}
