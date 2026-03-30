// scripts/test-repetition.mjs — Romanian test repetition checker
// Usage: node scripts/test-repetition.mjs [grade] [runs]

import { execSync } from 'child_process';
import { writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';

const grade = parseInt(process.argv[2] || '4');
const runs = parseInt(process.argv[3] || '3');

const tmpTs = join(process.cwd(), `_test_rep_${Date.now()}.ts`);
writeFileSync(tmpTs, `
import { getRomanianQuestions, ROMANIAN_CURRICULUM } from "./lib/romanianCurriculum";

const grade = ${grade};
const runs = ${runs};
const themes = (ROMANIAN_CURRICULUM as any)[grade] ?? [];
const allSubtopics: string[] = themes.flatMap((t: any) => t.subtopics.map((s: any) => s.id));
console.log("Grade " + grade + " — " + allSubtopics.length + " subtopics: " + allSubtopics.join(', '));

const testSubtopics: string[] = themes[0]?.subtopics.map((s: any) => s.id) ?? allSubtopics.slice(0, 3);
console.log("Testing subtopics: " + testSubtopics.join(', ') + "\\n");

const allRuns: string[][] = [];
for (let i = 0; i < runs; i++) {
  const qs = getRomanianQuestions(grade, testSubtopics, 10);
  allRuns.push(qs.map((q: any) => q.question));
  console.log("--- Teszt " + (i+1) + " ---");
  qs.forEach((q: any, j: number) => console.log("  " + (j+1) + ". " + q.question));
  console.log();
}

const allQ = allRuns.flat();
const unique = new Set(allQ);
const dupes = allQ.filter((q, i) => allQ.indexOf(q) !== i);
console.log("Összesen: " + allQ.length + " kérdés, unique: " + unique.size);
console.log("Ismétlési arány: " + ((1 - unique.size/allQ.length)*100).toFixed(0) + "%");
if (dupes.length > 0) {
  console.log("\\nIsmétlődő kérdések:");
  [...new Set(dupes)].forEach((d: string) => console.log("  - " + d));
}
`);

try {
  const result = execSync('npx ts-node --transpile-only ' + tmpTs, {
    cwd: process.cwd(), encoding: 'utf8'
  });
  console.log(result);
} catch (e) {
  console.error(e.stdout || e.message);
} finally {
  try { unlinkSync(tmpTs); } catch {}
}
