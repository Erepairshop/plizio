// scripts/test-repetition.ts — Romanian test repetition checker
// Usage: npx tsx scripts/test-repetition.ts [grade] [runs]
// Example: npx tsx scripts/test-repetition.ts 4 3

import { getRomanianQuestions, ROMANIAN_CURRICULUM } from "../lib/romanianCurriculum";

const grade = parseInt(process.argv[2] || '4');
const runs = parseInt(process.argv[3] || '3');

const themes = (ROMANIAN_CURRICULUM as any)[grade] ?? [];
const allSubtopics: string[] = themes.flatMap((t: any) => t.subtopics.map((s: any) => s.id));
console.log(`Grade ${grade} — ${allSubtopics.length} subtopic: ${allSubtopics.join(', ')}\n`);

// Minden témát külön tesztel
for (const theme of themes) {
  const subs: string[] = theme.subtopics.map((s: any) => s.id);
  console.log(`\n=== TÉMA: ${theme.name ?? theme.id} (${subs.join(', ')}) ===`);

  const allRuns: string[][] = [];
  for (let i = 0; i < runs; i++) {
    const qs = getRomanianQuestions(grade, subs, 10);
    allRuns.push(qs.map((q: any) => q.question));
    console.log(`\n  -- Teszt ${i+1} --`);
    qs.forEach((q: any, j: number) => console.log(`    ${j+1}. ${q.question}`));
  }

  const allQ = allRuns.flat();
  const unique = new Set(allQ);
  const dupes = allQ.filter((q, i) => allQ.indexOf(q) !== i);
  const pct = ((1 - unique.size / allQ.length) * 100).toFixed(0);
  console.log(`\n  📊 unique: ${unique.size}/${allQ.length} | ismétlés: ${pct}%`);
  if (dupes.length > 0) {
    [...new Set(dupes)].forEach(d => console.log(`  ⚠️  ${d}`));
  }
}
