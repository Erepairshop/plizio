import fs from "node:fs";
import { GEOGRAPHY_POOLS } from "../lib/visualLab/pools/geographyPool";
import {
  GEOGRAPHY_LEVEL_ROUNDS,
  GEOGRAPHY_SKILL_GAME_IDS,
  isGeographyGameAvailableForGrade,
  type GeographyGameId,
  type GeographyLevel,
} from "../lib/visualLab/geographyCurriculum";
import { buildGeographySkillRounds, geographySkillCoverage } from "../lib/visualLab/geographySkillContent";
import { prepareLegacyGeographyRounds } from "../lib/visualLab/prepareLegacyGeographyRounds";

const languages = ["de", "en", "hu", "ro"] as const;
const grades = [5, 6, 7, 8] as const;
const levels = [1, 2, 3, 4, 5] as const satisfies readonly GeographyLevel[];
const legacyGames = ["meteor-catch", "orbit-sort", "signal-runner", "constellation-builder", "memory-radar"] as const satisfies readonly GeographyGameId[];
const poolByGame = {
  "meteor-catch": GEOGRAPHY_POOLS.meteorCatch,
  "orbit-sort": GEOGRAPHY_POOLS.orbitSort,
  "signal-runner": GEOGRAPHY_POOLS.signalRunner,
  "constellation-builder": GEOGRAPHY_POOLS.constellationBuilder,
  "memory-radar": GEOGRAPHY_POOLS.memoryRadar,
};

const errors: string[] = [];
let skillRoundCount = 0;
let legacyRoundCount = 0;

for (const grade of grades) {
  for (const lang of languages) {
    for (const gameId of GEOGRAPHY_SKILL_GAME_IDS) {
      const seenTasks = new Set<string>();
      for (const level of levels) {
        const expected = GEOGRAPHY_LEVEL_ROUNDS[level];
        const rounds = buildGeographySkillRounds(gameId, grade, lang, level, expected);
        skillRoundCount += rounds.length;
        if (rounds.length !== expected) errors.push(`${grade}/${lang}/${gameId}/L${level}: ${rounds.length} rounds, expected ${expected}`);
        const ids = new Set<string>();
        for (const round of rounds) {
          const taskKey = `${round.context}\u0000${round.prompt}`.toLocaleLowerCase(lang).replace(/\s+/g, " ").trim();
          if (seenTasks.has(taskKey)) errors.push(`${grade}/${lang}/${gameId}/L${level}: repeated task across levels: ${round.context}`);
          seenTasks.add(taskKey);
          if (round.grade !== grade || round.level !== level || round.gameId !== gameId) errors.push(`${round.id}: metadata mismatch`);
          if (!round.id || ids.has(round.id)) errors.push(`${grade}/${lang}/${gameId}/L${level}: duplicate or empty id ${round.id}`);
          ids.add(round.id);
          for (const [field, value] of Object.entries({ title: round.title, instruction: round.instruction, context: round.context, prompt: round.prompt, explanation: round.explanation })) {
            if (typeof value !== "string" || !value.trim()) errors.push(`${round.id}: empty ${field}`);
          }
          if (round.options.length < 2 || new Set(round.options).size !== round.options.length) errors.push(`${round.id}: invalid or duplicate options`);
          if (round.options.filter((option) => option === round.correctAnswer).length !== 1) errors.push(`${round.id}: correct answer is not unique`);
        }
      }
    }
  }

  for (const gameId of legacyGames) {
    const expectedVisible = gameId === "meteor-catch" ? grade <= 6 : gameId === "orbit-sort" ? grade <= 7 : true;
    if (isGeographyGameAvailableForGrade(gameId, grade) !== expectedVisible) errors.push(`${grade}/${gameId}: wrong grade gate`);
    if (!expectedVisible) continue;
    for (const level of levels) {
      const rounds = prepareLegacyGeographyRounds(gameId, poolByGame[gameId] as any[], grade, level);
      legacyRoundCount += rounds.length;
      if (rounds.length !== poolByGame[gameId].length) errors.push(`${grade}/${gameId}/L${level}: legacy pool lost rounds`);
      if (new Set(rounds.map((round) => round.id)).size !== rounds.length) errors.push(`${grade}/${gameId}/L${level}: duplicate legacy ids`);
      if (gameId === "meteor-catch") {
        for (const round of rounds as any[]) {
          if (!round.correctItems?.length || !round.wrongItems?.length || round.goal !== round.correctItems.length) errors.push(`${round.id}: invalid meteor mini-round`);
        }
      }
      if (gameId === "memory-radar") {
        for (const round of rounds as any[]) {
          if (round.flashDurationMs < 1500) errors.push(`${round.id}: memory flash is too short`);
        }
      }
    }
  }
}

for (const grade of [1, 2, 3, 4]) {
  for (const gameId of [...legacyGames, ...GEOGRAPHY_SKILL_GAME_IDS]) {
    if (isGeographyGameAvailableForGrade(gameId, grade)) errors.push(`${grade}/${gameId}: geography must stay hidden before grade 5`);
  }
}

const coverage = geographySkillCoverage();
for (const grade of grades) {
  for (const gameId of GEOGRAPHY_SKILL_GAME_IDS) {
    const minimumCoverage = grade === 5 && gameId === "zukunfts-planer" ? 3 : 4;
    if (coverage[grade][gameId].length < minimumCoverage) errors.push(`${grade}/${gameId}: insufficient curriculum coverage`);
  }
}

const visualLabSource = fs.readFileSync(new URL("../components/VisualLab.tsx", import.meta.url), "utf8");
for (const labelKey of ["kartenKompass", "landschaftDetektiv", "klimaLabor", "weltregionenAtlas", "menschRaumNetz", "geoDatenCheck", "zukunftsPlaner"]) {
  const occurrences = visualLabSource.split(`${labelKey}:`).length - 1;
  if (occurrences !== 4) errors.push(`${labelKey}: expected 4 localized labels, found ${occurrences}`);
}

if (errors.length > 0) {
  console.error(`Geography Visual Lab audit failed with ${errors.length} problem(s):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Geography Visual Lab audit passed: ${skillRoundCount} generated skill rounds and ${legacyRoundCount} prepared legacy rounds across 4 grades, 4 languages and 5 levels.`);
