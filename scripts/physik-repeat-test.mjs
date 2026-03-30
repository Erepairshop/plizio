#!/usr/bin/env node
/**
 * Physik Test — Kérdés-ismétlődés teszt
 *
 * Használat:
 *   node scripts/physik-repeat-test.mjs [grade] [runs] [lang]
 *
 * Példák:
 *   node scripts/physik-repeat-test.mjs 5 3 de    # K5, 3 teszt, német
 *   node scripts/physik-repeat-test.mjs 6 5 en    # K6, 5 teszt, angol
 *   node scripts/physik-repeat-test.mjs            # K5, 3 teszt, de (default)
 */

import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

// ─── TSX loader ──────────────────────────────────────────────────────────
// We need tsx to import .ts files
const tsxPath = path.resolve("node_modules/tsx/dist/register.cjs");
try {
  // Try to use tsx's register hook for ESM
  const tsx = await import("tsx/esm/api");
  tsx.register();
} catch {
  try {
    await import("tsx");
  } catch {
    console.error("❌  tsx nincs telepítve. Futtasd: npm i -D tsx");
    process.exit(1);
  }
}

// ─── Args ────────────────────────────────────────────────────────────────
const grade = parseInt(process.argv[2] || "5");
const runs = parseInt(process.argv[3] || "3");
const lang = process.argv[4] || "de";

if (grade < 5 || grade > 8) {
  console.error("❌  Grade 5-8 között kell legyen");
  process.exit(1);
}

console.log(`\n🔬 Physik Test Ismétlődés-vizsgálat`);
console.log(`   Grade: K${grade} | Futások: ${runs} | Nyelv: ${lang}\n`);

// ─── Import generators ──────────────────────────────────────────────────
// First import registration to set up generator maps
await import("../lib/physikRegistration.ts");

const currMod = await import(`../lib/physikCurriculum${grade}.ts`);
const getQuestions = currMod[`getK${grade}Questions`];
const curriculum = currMod[`K${grade}_CURRICULUM`];

if (!getQuestions) {
  console.error(`❌  getK${grade}Questions nem található`);
  process.exit(1);
}

// Collect all subtopic IDs
const allSubtopicIds = [];
for (const theme of curriculum) {
  for (const sub of theme.subtopics) {
    allSubtopicIds.push(sub.id);
  }
}

console.log(`📋 Subtopics (${allSubtopicIds.length}): ${allSubtopicIds.join(", ")}\n`);

// ─── Run tests ───────────────────────────────────────────────────────────
const allRuns = [];
const questionCounts = new Map(); // question text → count across all runs

for (let r = 0; r < runs; r++) {
  const questions = getQuestions(allSubtopicIds, 10);
  const thisRun = [];

  for (const q of questions) {
    const text = q.question;
    thisRun.push(text);
    questionCounts.set(text, (questionCounts.get(text) || 0) + 1);
  }

  allRuns.push(thisRun);
  console.log(`  ✅ Teszt #${r + 1}: ${questions.length} kérdés generálva`);
}

// ─── Analysis ────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(60)}`);
console.log(`📊 EREDMÉNYEK\n`);

// Total unique questions
const uniqueQuestions = questionCounts.size;
const totalQuestions = runs * 10;
console.log(`  Összesen generált: ${totalQuestions} kérdés`);
console.log(`  Egyedi kérdések:   ${uniqueQuestions}`);
console.log(`  Ismétlődő:        ${totalQuestions - uniqueQuestions} (${((totalQuestions - uniqueQuestions) / totalQuestions * 100).toFixed(1)}%)\n`);

// Cross-run duplicates
const repeatedQuestions = [];
for (const [text, count] of questionCounts) {
  if (count > 1) {
    repeatedQuestions.push({ text, count });
  }
}
repeatedQuestions.sort((a, b) => b.count - a.count);

if (repeatedQuestions.length === 0) {
  console.log(`  🎉 Nincs ismétlődő kérdés a ${runs} teszt között!`);
} else {
  console.log(`  ⚠️  ${repeatedQuestions.length} kérdés ismétlődik:\n`);
  for (const rq of repeatedQuestions.slice(0, 20)) {
    const short = rq.text.length > 80 ? rq.text.slice(0, 77) + "..." : rq.text;
    console.log(`    ${rq.count}×  ${short}`);
  }
  if (repeatedQuestions.length > 20) {
    console.log(`    ... és még ${repeatedQuestions.length - 20} ismétlődő kérdés`);
  }
}

// Pairwise overlap between runs
console.log(`\n  Páronkénti átfedés:`);
for (let i = 0; i < runs; i++) {
  for (let j = i + 1; j < runs; j++) {
    const setA = new Set(allRuns[i]);
    const overlap = allRuns[j].filter(q => setA.has(q));
    console.log(`    Teszt #${i + 1} vs #${j + 1}: ${overlap.length}/10 közös kérdés (${(overlap.length * 10)}%)`);
  }
}

// Within-run duplicates
console.log(`\n  Teszten belüli duplikátumok:`);
let anyInRunDupes = false;
for (let i = 0; i < runs; i++) {
  const seen = new Set();
  const dupes = [];
  for (const q of allRuns[i]) {
    if (seen.has(q)) dupes.push(q);
    seen.add(q);
  }
  if (dupes.length > 0) {
    anyInRunDupes = true;
    console.log(`    Teszt #${i + 1}: ${dupes.length} duplikátum!`);
    for (const d of dupes) {
      const short = d.length > 70 ? d.slice(0, 67) + "..." : d;
      console.log(`      → ${short}`);
    }
  }
}
if (!anyInRunDupes) {
  console.log(`    ✅ Nincs teszten belüli duplikátum`);
}

console.log(`\n${"─".repeat(60)}\n`);
