import {
  BIOLOGY_SKILL_GAME_IDS,
  BIOLOGY_LEVEL_ROUNDS,
  isBiologyGameAvailableForGrade,
  type BiologyLevel,
} from "../lib/visualLab/biologyCurriculum";
import {
  biologySkillBankSize,
  buildBiologySkillRounds,
  type BiologySkillLang,
} from "../lib/visualLab/biologySkillContent";

const LANGS: BiologySkillLang[] = ["de", "en", "hu", "ro"];
const LEVELS: BiologyLevel[] = [1, 2, 3, 4, 5];
const failures: string[] = [];

function fail(message: string) {
  failures.push(message);
}

for (let grade = 5; grade <= 8; grade += 1) {
  if (!isBiologyGameAvailableForGrade("mikro-scanner", grade)) fail(`grade ${grade} blocks skill games`);
  if (grade >= 7 && isBiologyGameAvailableForGrade("meteor-catch", grade)) fail(`grade ${grade} still exposes meteor-catch`);
  if (grade === 8 && isBiologyGameAvailableForGrade("orbit-sort", grade)) fail("grade 8 still exposes orbit-sort");

  for (const lang of LANGS) {
    for (const gameId of BIOLOGY_SKILL_GAME_IDS) {
      const bankSize = biologySkillBankSize(gameId, grade, lang);
      if (bankSize < 40) fail(`${gameId} grade ${grade} ${lang} has only ${bankSize}/40 distinct tasks`);
      const seen = new Set<string>();
      for (const level of LEVELS) {
        const expected = BIOLOGY_LEVEL_ROUNDS[level];
        const rounds = buildBiologySkillRounds(gameId, grade, lang, level, expected);
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
  console.error(`Biology Visual Lab audit failed with ${failures.length} issue(s):`);
  failures.slice(0, 100).forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Biology Visual Lab audit passed: grades 5-8, four languages, five levels, distinct skill mechanics and non-repeating level tasks.");
