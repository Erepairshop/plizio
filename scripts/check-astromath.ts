/**
 * AstroMath curriculum validator
 * Teszteli az összes G1-G8 generátort és sziget definíciót.
 *
 * Futtatás: npx tsx scripts/check-astromath.ts [grade]
 * Példa:    npx tsx scripts/check-astromath.ts      (mind a 8 grade)
 *           npx tsx scripts/check-astromath.ts 4    (csak G4)
 */

import { generateTopicQuestions, generateTest } from "../lib/mathCurriculum";
import type { IslandDef } from "../lib/astromath";
import { G1_ISLANDS, CHECKPOINT_TOPICS  as G1_CHECKPOINT_TOPICS } from "../lib/astromath";
import { G2_ISLANDS, G2_CHECKPOINT_TOPICS } from "../lib/astromath2";
import { G3_ISLANDS, G3_CHECKPOINT_TOPICS } from "../lib/astromath3";
import { G4_ISLANDS, G4_CHECKPOINT_TOPICS } from "../lib/astromath4";
import { G5_ISLANDS, G5_CHECKPOINT_TOPICS } from "../lib/astromath5";
import { G6_ISLANDS, G6_CHECKPOINT_TOPICS } from "../lib/astromath6";
import { G7_ISLANDS, G7_CHECKPOINT_TOPICS } from "../lib/astromath7";
import { G8_ISLANDS, G8_CHECKPOINT_TOPICS } from "../lib/astromath8";

// ─── Konfiguráció ─────────────────────────────────────────────────────────────

const GRADE_FILTER = parseInt(process.argv[2] || "0"); // 0 = mind
const RUNS_PER_TOPIC = 20;
const CCS = ["DE", "EN", "HU", "RO", "US"];

const GRADE_DATA: Array<{
  grade: number;
  islands: IslandDef[];
  checkpointTopics: Record<string, string[]>;
}> = [
  { grade: 1, islands: G1_ISLANDS, checkpointTopics: G1_CHECKPOINT_TOPICS },
  { grade: 2, islands: G2_ISLANDS, checkpointTopics: G2_CHECKPOINT_TOPICS },
  { grade: 3, islands: G3_ISLANDS, checkpointTopics: G3_CHECKPOINT_TOPICS },
  { grade: 4, islands: G4_ISLANDS, checkpointTopics: G4_CHECKPOINT_TOPICS },
  { grade: 5, islands: G5_ISLANDS, checkpointTopics: G5_CHECKPOINT_TOPICS },
  { grade: 6, islands: G6_ISLANDS, checkpointTopics: G6_CHECKPOINT_TOPICS },
  { grade: 7, islands: G7_ISLANDS, checkpointTopics: G7_CHECKPOINT_TOPICS },
  { grade: 8, islands: G8_ISLANDS, checkpointTopics: G8_CHECKPOINT_TOPICS },
];

// ─── Kérdés validátor ─────────────────────────────────────────────────────────

function validateQuestion(q: ReturnType<typeof generateTopicQuestions>[number], context: string): string[] {
  const errors: string[] = [];

  // Üres / hibás kérdés szöveg
  if (!q.question || q.question.trim() === "") {
    errors.push(`${context}: Üres question szöveg`);
  } else if (q.question.includes("undefined") || q.question.includes("[object")) {
    errors.push(`${context}: question szövegben "undefined"/object: "${q.question.slice(0, 60)}"`);
  } else if (q.question.includes("NaN")) {
    errors.push(`${context}: question szövegben NaN: "${q.question.slice(0, 60)}"`);
  }

  // correctAnswer érvényessége
  if (q.correctAnswer === null || q.correctAnswer === undefined) {
    errors.push(`${context}: correctAnswer null/undefined`);
  } else if (typeof q.correctAnswer === "number") {
    if (isNaN(q.correctAnswer))      errors.push(`${context}: correctAnswer NaN`);
    if (!isFinite(q.correctAnswer))  errors.push(`${context}: correctAnswer Infinite`);
    if (q.correctAnswer < 0 && !q.question.includes("-") && !q.topic.includes("neg")) {
      // Negatív eredmény G1-G4-ben gyanús (hacsak nem szándékos)
      // Csak G5+ esetén engedjük meg (előjeles számok)
      // => itt nem hibáztatjuk, csak megjegyezzük
    }
  } else if (typeof q.correctAnswer === "string") {
    if (q.correctAnswer.trim() === "") errors.push(`${context}: correctAnswer üres string`);
    if (q.correctAnswer.includes("NaN")) errors.push(`${context}: correctAnswer NaN-t tartalmaz`);
  }

  // options ellenőrzés (MCQ esetén)
  if (q.options && q.options.length > 0) {
    // Hossz: MCQ általában 4, de comparison kérdéseknél 3 (< > =) — ez szándékos
    // Csak 1 vagy 0 opciót jelzünk hibának (az options[] tömb meg kell legyen)
    if (q.options.length < 2) {
      errors.push(`${context}: options.length=${q.options.length} (túl kevés!)`);
    }

    // NaN / Infinite / undefined az options-ben
    for (let i = 0; i < q.options.length; i++) {
      const o = q.options[i];
      if (o === null || o === undefined) {
        errors.push(`${context}: options[${i}] null/undefined`);
      } else if (typeof o === "number") {
        if (isNaN(o))     errors.push(`${context}: options[${i}] NaN`);
        if (!isFinite(o)) errors.push(`${context}: options[${i}] Infinite`);
      } else if (typeof o === "string") {
        if (o.trim() === "") errors.push(`${context}: options[${i}] üres string`);
        if (o.includes("NaN")) errors.push(`${context}: options[${i}] NaN-t tartalmaz`);
      }
    }

    // Duplikált options
    const seen = new Set<string>();
    let hasDup = false;
    for (const o of q.options) {
      const key = String(o);
      if (seen.has(key)) { hasDup = true; break; }
      seen.add(key);
    }
    if (hasDup) {
      errors.push(`${context}: Duplikált options: [${q.options.join(", ")}]`);
    }

    // correctAnswer szerepel-e az options-ben?
    const inOpts = q.options.some(o => String(o) === String(q.correctAnswer));
    if (!inOpts) {
      errors.push(
        `${context}: correctAnswer "${q.correctAnswer}" NINCS az options-ben: [${q.options.join(", ")}]`
      );
    }
  }

  return errors;
}

// ─── Topik tesztelő ───────────────────────────────────────────────────────────

interface TopicResult {
  topicKey: string;
  grade: number;
  islandId: string;
  errors: string[];
  notFound: string[]; // CC-k ahol generateTopicQuestions üres tömböt adott vissza
}

function testTopic(grade: number, islandId: string, topicKey: string): TopicResult {
  const errors: string[] = [];
  const notFound: string[] = [];

  for (const cc of CCS) {
    let questions;
    try {
      questions = generateTopicQuestions(grade, topicKey, cc, RUNS_PER_TOPIC);
    } catch (e) {
      errors.push(`[${cc}] generateTopicQuestions CRASH: ${e}`);
      continue;
    }

    if (questions.length === 0) {
      notFound.push(cc);
      continue;
    }

    for (let i = 0; i < questions.length; i++) {
      const qErrors = validateQuestion(questions[i], `[${cc}] kérdés #${i + 1}`);
      errors.push(...qErrors);
    }
  }

  return { topicKey, grade, islandId, errors, notFound };
}

// ─── generateTest tesztelő ────────────────────────────────────────────────────

function testGenerateTest(grade: number): string[] {
  const errors: string[] = [];

  for (const cc of CCS) {
    for (let period = 1; period <= 5; period++) {
      let qs;
      try {
        qs = generateTest(grade, period, cc);
      } catch (e) {
        errors.push(`G${grade} P${period} [${cc}] generateTest CRASH: ${e}`);
        continue;
      }
      if (qs.length < 8) {
        errors.push(`G${grade} P${period} [${cc}] generateTest: csak ${qs.length} kérdés (várható: 10)`);
      }
      for (let i = 0; i < qs.length; i++) {
        const qErrors = validateQuestion(qs[i], `G${grade} P${period} [${cc}] #${i + 1}`);
        errors.push(...qErrors);
      }
    }
  }

  return errors;
}

// ─── Sziget struktúra ellenőrzés ──────────────────────────────────────────────

function checkIslandDefs(grade: number, islands: IslandDef[]): string[] {
  const errors: string[] = [];

  if (islands.length !== 9) {
    errors.push(`G${grade}: ${islands.length} sziget (várható: 9)`);
  }

  for (const island of islands) {
    const ctx = `G${grade} ${island.id}`;

    if (!island.topicKeys || island.topicKeys.length === 0) {
      errors.push(`${ctx}: Nincsenek topicKeys!`);
    }

    if (!island.sortRange || island.sortRange[0] >= island.sortRange[1]) {
      errors.push(`${ctx}: Hibás sortRange: [${island.sortRange}]`);
    }

    if (!island.missions || island.missions.length !== 3) {
      errors.push(`${ctx}: ${island.missions?.length ?? 0} misszió (várható: 3)`);
    }

    for (const mission of island.missions || []) {
      if (!mission.gameType) {
        errors.push(`${ctx} ${mission.id}: Hiányzó gameType`);
      }
      if (!mission.category) {
        errors.push(`${ctx} ${mission.id}: Hiányzó category`);
      }
    }
  }

  return errors;
}

// ─── Checkpoint topik ellenőrzés ──────────────────────────────────────────────

function checkCheckpointTopics(
  grade: number,
  checkpointTopics: Record<string, string[]>
): string[] {
  const errors: string[] = [];

  for (const [testId, topicKeys] of Object.entries(checkpointTopics)) {
    if (topicKeys.length === 0) {
      errors.push(`G${grade} ${testId}: Üres checkpoint topicKeys`);
      continue;
    }
    for (const topicKey of topicKeys) {
      for (const cc of ["DE", "EN"]) {
        let qs;
        try {
          qs = generateTopicQuestions(grade, topicKey, cc, 5);
        } catch (e) {
          errors.push(`G${grade} ${testId} "${topicKey}" [${cc}] CRASH: ${e}`);
          continue;
        }
        if (qs.length === 0) {
          errors.push(`G${grade} ${testId} "${topicKey}" [${cc}]: Nincs kérdés (topicKey nem létezik?)`);
        }
      }
    }
  }

  return errors;
}

// ─── Fő logika ────────────────────────────────────────────────────────────────

async function main() {
  const grades = GRADE_FILTER > 0
    ? GRADE_DATA.filter(g => g.grade === GRADE_FILTER)
    : GRADE_DATA;

  console.log(`\n🔍 AstroMath validator — G${GRADE_FILTER || "1-8"} | ${RUNS_PER_TOPIC} kérdés/topik/CC\n${"─".repeat(70)}`);

  let totalErrors = 0;

  for (const { grade, islands, checkpointTopics } of grades) {
    console.log(`\n📐 Grade ${grade}`);
    let gradeErrors = 0;

    // 1. Sziget struktúra
    const islandErrors = checkIslandDefs(grade, islands);
    if (islandErrors.length > 0) {
      console.log(`  ⚠️  Sziget definíció hibák:`);
      islandErrors.forEach(e => console.log(`    ${e}`));
      gradeErrors += islandErrors.length;
    }

    // 2. Topik generátorok (szigetenként)
    const allTopicKeys = new Map<string, string>(); // topicKey → islandId
    for (const island of islands) {
      for (const tk of island.topicKeys) {
        if (!allTopicKeys.has(tk)) allTopicKeys.set(tk, island.id);
      }
    }

    for (const [topicKey, islandId] of allTopicKeys) {
      const result = testTopic(grade, islandId, topicKey);

      if (result.notFound.length > 0) {
        console.log(`  ❌ "${topicKey}" (${islandId}): NEM TALÁLHATÓ CC-kben: [${result.notFound.join(", ")}]`);
        gradeErrors++;
      }

      const uniqueErrors = [...new Set(result.errors)];
      if (uniqueErrors.length > 0) {
        console.log(`  ⚠️  "${topicKey}" (${islandId}): ${uniqueErrors.length} hiba`);
        uniqueErrors.slice(0, 3).forEach(e => console.log(`      ${e}`));
        if (uniqueErrors.length > 3) console.log(`      ... és még ${uniqueErrors.length - 3} eset`);
        gradeErrors += uniqueErrors.length;
      }
    }

    // 3. Checkpoint topicok
    const cpErrors = checkCheckpointTopics(grade, checkpointTopics);
    if (cpErrors.length > 0) {
      console.log(`  ⚠️  Checkpoint hibák:`);
      cpErrors.forEach(e => console.log(`    ${e}`));
      gradeErrors += cpErrors.length;
    }

    // 4. generateTest minden periódusra
    const testErrors = testGenerateTest(grade);
    const uniqueTestErrors = [...new Set(testErrors)];
    if (uniqueTestErrors.length > 0) {
      console.log(`  ⚠️  generateTest hibák (${uniqueTestErrors.length} db):`);
      uniqueTestErrors.slice(0, 5).forEach(e => console.log(`    ${e}`));
      if (uniqueTestErrors.length > 5) console.log(`    ... és még ${uniqueTestErrors.length - 5} eset`);
      gradeErrors += uniqueTestErrors.length;
    }

    if (gradeErrors === 0) {
      console.log(`  ✅ Minden rendben (${allTopicKeys.size} topik, ${CCS.length} CC)`);
    } else {
      totalErrors += gradeErrors;
    }
  }

  console.log(`\n${"─".repeat(70)}`);
  if (totalErrors === 0) {
    console.log(`✅ Nincs hiba!`);
  } else {
    console.log(`⚠️  Összesen: ${totalErrors} hiba`);
  }
  console.log();
}

main().catch(console.error);
