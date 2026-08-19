import {
  PHYSICS_SKILL_GAME_IDS,
  PHYSICS_LEVEL_ROUNDS,
  isPhysicsGameAvailableForGrade,
  type PhysicsLevel,
} from "../lib/visualLab/physicsCurriculum";
import {
  physicsSkillBankSize,
  buildPhysicsSkillRounds,
  type PhysicsSkillLang,
} from "../lib/visualLab/physicsSkillContent";
import { PHYSIK_POOLS } from "../lib/visualLab/pools/physikPool";

const LANGS: PhysicsSkillLang[] = ["de", "en", "hu", "ro"];
const LEVELS: PhysicsLevel[] = [1, 2, 3, 4, 5];
const failures: string[] = [];

function fail(message: string) {
  failures.push(message);
}

function auditNestedIds(value: unknown, path: string) {
  if (Array.isArray(value)) {
    const ids = value
      .filter((entry): entry is { id: string } => Boolean(entry) && typeof entry === "object" && typeof (entry as { id?: unknown }).id === "string")
      .map((entry) => entry.id);
    if (new Set(ids).size !== ids.length) fail(`${path} contains duplicate child ids: ${ids.join(", ")}`);
    value.forEach((entry, index) => auditNestedIds(entry, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, entry]) => auditNestedIds(entry, `${path}.${key}`));
  }
}

auditNestedIds(PHYSIK_POOLS, "PHYSIK_POOLS");

for (let grade = 5; grade <= 8; grade += 1) {
  if (!isPhysicsGameAvailableForGrade("kraft-labor", grade)) fail(`grade ${grade} blocks skill games`);
  if (grade >= 7 && isPhysicsGameAvailableForGrade("meteor-catch", grade)) fail(`grade ${grade} still exposes meteor-catch`);
  if (grade === 8 && isPhysicsGameAvailableForGrade("orbit-sort", grade)) fail("grade 8 still exposes orbit-sort");
  if (!isPhysicsGameAvailableForGrade("formula-blitz", grade)) fail(`grade ${grade} blocks its formula-blitz questions`);

  for (const lang of LANGS) {
    for (const gameId of PHYSICS_SKILL_GAME_IDS) {
      const bankSize = physicsSkillBankSize(gameId, grade, lang);
      if (bankSize < 40) fail(`${gameId} grade ${grade} ${lang} has only ${bankSize}/40 distinct tasks`);
      const seen = new Set<string>();
      for (const level of LEVELS) {
        const expected = PHYSICS_LEVEL_ROUNDS[level];
        const rounds = buildPhysicsSkillRounds(gameId, grade, lang, level, expected);
        if (rounds.length !== expected) fail(`${gameId} grade ${grade} ${lang} level ${level}: ${rounds.length}/${expected}`);
        for (const round of rounds) {
          if (round.gameId !== gameId || round.grade !== grade || round.level !== level) fail(`${round.id} has inconsistent identity`);
          if (!round.title.trim() || !round.instruction.trim() || !round.context.trim() || !round.prompt.trim()) fail(`${round.id} has empty text`);
          if (round.options.length < 2 || new Set(round.options).size !== round.options.length) fail(`${round.id} has invalid options`);
          if (!round.options.includes(round.correctAnswer)) fail(`${round.id} misses its correct answer`);
          const key = `${round.prompt.toLocaleLowerCase(lang)}|${round.correctAnswer.toLocaleLowerCase(lang)}`;
          if (seen.has(key)) fail(`${gameId} grade ${grade} ${lang} repeats a task across levels`);
          seen.add(key);
        }
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`Physics Visual Lab audit failed with ${failures.length} issue(s):`);
  failures.slice(0, 100).forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Physics Visual Lab audit passed: grades 5-8, four languages, five levels, distinct skill mechanics and non-repeating level tasks.");
