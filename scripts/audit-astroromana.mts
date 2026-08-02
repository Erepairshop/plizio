import * as rawC1 from "../lib/astroRomana";
import * as rawC2 from "../lib/astroRomana2";
import * as rawC3 from "../lib/astroRomana3";
import * as rawC4 from "../lib/astroRomana4";
import * as rawC5 from "../lib/astroRomana5";
import * as rawC6 from "../lib/astroRomana6";
import * as rawC7 from "../lib/astroRomana7";
import * as rawC8 from "../lib/astroRomana8";
import * as rawRegistry from "../lib/astro/romanaGameRegistry";

type AnyModule = Record<string, any>;

const unwrap = (mod: AnyModule): AnyModule => mod.default ?? mod["module.exports"] ?? mod;
const grades = [rawC1, rawC2, rawC3, rawC4, rawC5, rawC6, rawC7, rawC8].map(unwrap);
const registry = unwrap(rawRegistry);
const failures: string[] = [];

function assert(condition: unknown, message: string) {
  if (!condition) failures.push(message);
}

function validateQuestion(grade: number, source: string, question: any) {
  assert(String(question.question ?? "").trim(), `C${grade} ${source}: empty question`);
  assert(String(question.correctAnswer ?? "").trim(), `C${grade} ${source}: empty correctAnswer`);
  assert(Array.isArray(question.options) && question.options.length >= 2, `C${grade} ${source}: missing options`);
  assert(!question.options?.some((option: unknown) => !String(option ?? "").trim()), `C${grade} ${source}: empty option`);
  assert(question.options?.includes(question.correctAnswer), `C${grade} ${source}: correct answer not in options`);
}

function walkStrings(value: unknown, path: string) {
  if (typeof value === "string") {
    assert(value.trim(), `${path}: empty string`);
    return;
  }
  if (Array.isArray(value)) {
    assert(value.length > 0, `${path}: empty array`);
    value.forEach((item, index) => walkStrings(item, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) walkStrings(item, `${path}.${key}`);
  }
}

for (let grade = 1; grade <= 8; grade++) {
  const mod = grades[grade - 1];
  const islands = mod[`C${grade}_ISLANDS`];
  const checkpointMap = mod[`C${grade}_CHECKPOINT_MAP`];
  assert(Array.isArray(islands) && islands.length === 9, `C${grade}: expected 9 islands`);
  assert(checkpointMap && Object.keys(checkpointMap).length === 3, `C${grade}: expected 3 checkpoints`);

  for (const island of islands ?? []) {
    walkStrings(island, `C${grade}.${island.id}`);
    assert(island.missions?.length === 3, `C${grade} ${island.id}: expected 3 missions`);
    const categories = new Set(island.missions?.map((mission: any) => mission.category));
    for (const category of ["explore", "build", "challenge"]) {
      assert(categories.has(category), `C${grade} ${island.id}: missing ${category} mission`);
    }

    const questions = mod[`generateIslandQuestionsC${grade}`](island, "ro", 10);
    assert(questions.length === 10, `C${grade} ${island.id}: expected 10 island questions, got ${questions.length}`);
    questions.forEach((question: any, index: number) => validateQuestion(grade, `${island.id}.q${index}`, question));

    for (const mission of island.missions ?? []) {
      if (mission.gameType === "m2") {
        assert(registry.ROMANA_M2_POOLS?.[mission.gameKey]?.length > 0, `C${grade} ${island.id}.${mission.id}: missing M2 pool ${mission.gameKey}`);
      }
      if (mission.gameType === "m3") {
        assert(registry.ROMANA_M3_POOLS?.[mission.gameKey]?.length > 0, `C${grade} ${island.id}.${mission.id}: missing M3 pool ${mission.gameKey}`);
      }
    }
  }

  for (const testId of Object.keys(checkpointMap ?? {})) {
    const questions = mod[`generateCheckpointQuestionsC${grade}`](testId, "ro", 10);
    assert(questions.length === 10, `C${grade} ${testId}: expected 10 checkpoint questions, got ${questions.length}`);
    questions.forEach((question: any, index: number) => validateQuestion(grade, `${testId}.q${index}`, question));
  }
}

for (const [bucket, pools] of Object.entries({ m2: registry.ROMANA_M2_POOLS, m3: registry.ROMANA_M3_POOLS })) {
  for (const [gameKey, rounds] of Object.entries(pools as Record<string, unknown[]>)) {
    assert(Array.isArray(rounds) && rounds.length > 0, `${bucket}.${gameKey}: empty pool`);
    walkStrings(rounds, `${bucket}.${gameKey}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("AstroRomana audit passed: K1-K8 generators, checkpoints, M2/M3 pool wiring, and empty strings are valid.");
