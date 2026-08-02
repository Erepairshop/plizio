import "../lib/biologieGenerators5.ts";
import "../lib/biologieGenerators6.ts";
import "../lib/biologieGenerators7.ts";
import "../lib/biologieGenerators8.ts";

type Lang = "de" | "en" | "hu" | "ro";
type Island = {
  id: string;
  name: Record<Lang, string>;
  topicKeys: string[];
  missions: { id: string; category?: string; gameType: string; gameKey?: string; label: Record<Lang, string> }[];
};

const LANGS: Lang[] = ["de", "en", "hu", "ro"];
const failures: string[] = [];
let BIOLOGIE_M2_POOLS: Record<string, any[]> | undefined;
let BIOLOGIE_M3_POOLS: Record<string, any[]> | undefined;

function fail(message: string) {
  failures.push(message);
}

function expectL10n(value: unknown, path: string) {
  if (!value || typeof value !== "object") {
    fail(`${path} is missing localized text`);
    return;
  }
  for (const lang of LANGS) {
    const text = (value as Record<string, unknown>)[lang];
    if (typeof text !== "string" || text.trim().length === 0) {
      fail(`${path}.${lang} is empty`);
    }
  }
}

function liveSubtopics(curriculum: any[]): any[] {
  return curriculum.flatMap((theme) =>
    theme.subtopics.filter((sub: any) => sub.questions.length > 0 || sub.hasGenerator)
  );
}

function liveSubtopicIds(curriculum: any[]): Set<string> {
  return new Set(liveSubtopics(curriculum).map((sub: any) => sub.id));
}

function validateQuestions(questions: any[], path: string, expectedCount: number) {
  if (questions.length < expectedCount) {
    fail(`${path} generated ${questions.length}/${expectedCount} questions`);
  }
  for (const [index, q] of questions.entries()) {
    if (!q || typeof q.question !== "string" || q.question.trim().length < 8) {
      fail(`${path}[${index}] has an empty/short question`);
    }
    if (q.type === "mcq" || Array.isArray(q.options)) {
      if (!Array.isArray(q.options) || q.options.length < 2) fail(`${path}[${index}] has fewer than 2 options`);
      if (Array.isArray(q.options) && new Set(q.options.map(String)).size !== q.options.length) fail(`${path}[${index}] has duplicate options`);
      if (!Number.isInteger(q.correct) && typeof q.correctAnswer !== "string") fail(`${path}[${index}] has no correct answer`);
      if (Number.isInteger(q.correct) && (q.correct < 0 || q.correct >= q.options.length)) fail(`${path}[${index}] has an invalid correct index`);
    }
    if (q.type === "typing" && (q.answer === undefined || String(q.answer).trim().length === 0)) {
      fail(`${path}[${index}] has no typing answer`);
    }
  }
}

function validateExplorerModule(mod: Record<string, any>, prefix: string) {
  const hasLabel = (labels: any, key: string) =>
    LANGS.every((lang) => typeof labels?.[lang]?.[key] === "string" && labels[lang][key].trim().length > 0);

  for (let i = 1; i <= 9; i++) {
    const pool = mod[`${prefix}_I${i}_POOL`] ?? mod[`BIO_I${i}_POOL`];
    const labels = mod[`${prefix}_I${i}_LABELS`] ?? mod[`BIO_I${i}_LABELS`];
    if (!Array.isArray(pool) || pool.length === 0) {
      fail(`${prefix || "BIO"}_I${i}_POOL is empty or missing`);
      continue;
    }
    if (!labels || typeof labels !== "object") {
      fail(`${prefix || "BIO"}_I${i}_LABELS is missing`);
    }
    const ids = new Set<string>();
    for (const [index, topic] of pool.entries()) {
      const topicId = topic.infoTitle ?? topic.id;
      if (!topicId || typeof topicId !== "string") fail(`${prefix || "BIO"}_I${i}_POOL[${index}] has no stable topic key`);
      if (ids.has(topicId)) fail(`${prefix || "BIO"}_I${i}_POOL duplicate topic key ${topicId}`);
      ids.add(topicId);
      for (const key of ["infoTitle", "infoText"]) {
        if (typeof topic[key] !== "string" || !hasLabel(labels, topic[key])) {
          fail(`${prefix || "BIO"}_I${i}_POOL[${index}].${key} points to missing label ${topic[key]}`);
        }
      }
      if (!topic.svg || typeof topic.svg !== "object") fail(`${prefix || "BIO"}_I${i}_POOL[${index}] has no svg config`);
      if (!topic.interactive || typeof topic.interactive !== "object") fail(`${prefix || "BIO"}_I${i}_POOL[${index}] has no interactive config`);
      if (!topic.quiz || typeof topic.quiz !== "object") fail(`${prefix || "BIO"}_I${i}_POOL[${index}] has no quiz config`);
      if (topic.quiz?.question && !hasLabel(labels, topic.quiz.question)) fail(`${prefix || "BIO"}_I${i}_POOL[${index}].quiz.question points to missing label ${topic.quiz.question}`);
      for (const choice of topic.quiz?.choices ?? []) {
        if (!hasLabel(labels, choice)) fail(`${prefix || "BIO"}_I${i}_POOL[${index}].quiz choice points to missing label ${choice}`);
      }
    }
  }
}

function validateRoundPools(pools: Record<string, any[]> | undefined, path: string) {
  if (!pools || typeof pools !== "object") {
    fail(`${path} is missing`);
    return;
  }
  for (const [key, rounds] of Object.entries(pools)) {
    if (!Array.isArray(rounds) || rounds.length === 0) {
      fail(`${path}.${key} has no rounds`);
      continue;
    }
    const ids = new Set<string>();
    for (const [index, round] of rounds.entries()) {
      if (!round.id || typeof round.id !== "string") fail(`${path}.${key}[${index}] has no id`);
      if (ids.has(round.id)) fail(`${path}.${key} duplicate round id ${round.id}`);
      ids.add(round.id);
    }
  }
}

function validateGrade(args: {
  grade: number;
  islands: Island[];
  checkpointMap: Record<string, string[]>;
  checkpointTopics: Record<string, string[]>;
  curriculum: any[];
  getQuestions: (ids: string[], count: number) => any[];
  generateIslandQuestions: (island: any, count: number) => any[];
  generateCheckpointQuestions: (testId: string, count: number) => any[];
}) {
  const { grade, islands, checkpointMap, checkpointTopics, curriculum, getQuestions, generateIslandQuestions, generateCheckpointQuestions } = args;
  const prefix = `K${grade}`;
  if (islands.length !== 9) fail(`${prefix} has ${islands.length}/9 islands`);
  const islandIds = new Set(islands.map((island) => island.id));
  const subtopicIds = liveSubtopicIds(curriculum);

  for (const island of islands) {
    expectL10n(island.name, `${prefix}.${island.id}.name`);
    if (island.missions.length !== 3) fail(`${prefix}.${island.id} has ${island.missions.length}/3 missions`);
    const categories = island.missions.map((m) => m.category).join(",");
    if (categories !== "explore,build,challenge") fail(`${prefix}.${island.id} mission categories are ${categories}`);
    for (const topicKey of island.topicKeys) {
      if (!subtopicIds.has(topicKey)) fail(`${prefix}.${island.id} references missing subtopic ${topicKey}`);
    }
    for (const mission of island.missions) {
      expectL10n(mission.label, `${prefix}.${island.id}.${mission.id}.label`);
      if (mission.gameType === "m2" && (!mission.gameKey || !BIOLOGIE_M2_POOLS?.[mission.gameKey])) fail(`${prefix}.${island.id}.${mission.id} has dead M2 gameKey ${mission.gameKey}`);
      if (mission.gameType === "m3" && (!mission.gameKey || !BIOLOGIE_M3_POOLS?.[mission.gameKey])) fail(`${prefix}.${island.id}.${mission.id} has dead M3 gameKey ${mission.gameKey}`);
    }
    validateQuestions(generateIslandQuestions(island, 10), `${prefix}.${island.id}.astroQuestions`, 10);
  }

  for (const [testId, ids] of Object.entries(checkpointMap)) {
    if (ids.length !== 3) fail(`${prefix}.${testId} maps ${ids.length}/3 islands`);
    for (const id of ids) {
      if (!islandIds.has(id)) fail(`${prefix}.${testId} references missing island ${id}`);
    }
    for (const topicKey of checkpointTopics[testId] ?? []) {
      if (!subtopicIds.has(topicKey)) fail(`${prefix}.${testId} references missing subtopic ${topicKey}`);
    }
    validateQuestions(generateCheckpointQuestions(testId, 10), `${prefix}.${testId}.checkpointQuestions`, 10);
  }

  for (const subtopicId of subtopicIds) {
    validateQuestions(getQuestions([subtopicId], 4), `${prefix}.biologietest.${subtopicId}`, 4);
  }
}

const astroK5 = await import("../lib/astroBiologie5.ts");
const astroK6 = await import("../lib/astroBiologie6.ts");
const astroK7 = await import("../lib/astroBiologie7.ts");
const astroK8 = await import("../lib/astroBiologie8.ts");
const curriculumK5 = await import("../lib/biologieCurriculum5.ts");
const curriculumK6 = await import("../lib/biologieCurriculum6.ts");
const curriculumK7 = await import("../lib/biologieCurriculum7.ts");
const curriculumK8 = await import("../lib/biologieCurriculum8.ts");
const biologieGameRegistry = await import("../lib/astro/biologieGameRegistry.ts");
const bioK5Pools = await import("../lib/explorerPools/biologieK5.ts");
const bioK6Pools = await import("../lib/explorerPools/biologieK6.ts");
const bioK7Pools = await import("../lib/explorerPools/biologieK7.ts");
const bioK8Pools = await import("../lib/explorerPools/biologieK8.ts");

BIOLOGIE_M2_POOLS = biologieGameRegistry.BIOLOGIE_M2_POOLS;
BIOLOGIE_M3_POOLS = biologieGameRegistry.BIOLOGIE_M3_POOLS;

validateRoundPools(BIOLOGIE_M2_POOLS, "BIOLOGIE_M2_POOLS");
validateRoundPools(BIOLOGIE_M3_POOLS, "BIOLOGIE_M3_POOLS");
validateExplorerModule(bioK5Pools, "BIO");
validateExplorerModule(bioK6Pools, "BIO_K6");
validateExplorerModule(bioK7Pools, "BIO_K7");
validateExplorerModule(bioK8Pools, "BIO_K8");

validateGrade({ grade: 5, islands: astroK5.BIO_K5_ISLANDS, checkpointMap: astroK5.BIO_K5_CHECKPOINT_MAP, checkpointTopics: astroK5.BIO_K5_CHECKPOINT_TOPICS, curriculum: curriculumK5.K5_CURRICULUM, getQuestions: curriculumK5.getK5Questions, generateIslandQuestions: astroK5.generateIslandQuestionsK5, generateCheckpointQuestions: astroK5.generateCheckpointQuestionsK5 });
validateGrade({ grade: 6, islands: astroK6.BIO_K6_ISLANDS, checkpointMap: astroK6.BIO_K6_CHECKPOINT_MAP, checkpointTopics: astroK6.BIO_K6_CHECKPOINT_TOPICS, curriculum: curriculumK6.K6_CURRICULUM, getQuestions: curriculumK6.getK6Questions, generateIslandQuestions: astroK6.generateIslandQuestionsK6, generateCheckpointQuestions: astroK6.generateCheckpointQuestionsK6 });
validateGrade({ grade: 7, islands: astroK7.BIO_K7_ISLANDS, checkpointMap: astroK7.BIO_K7_CHECKPOINT_MAP, checkpointTopics: astroK7.BIO_K7_CHECKPOINT_TOPICS, curriculum: curriculumK7.K7_CURRICULUM, getQuestions: curriculumK7.getK7Questions, generateIslandQuestions: astroK7.generateIslandQuestionsK7, generateCheckpointQuestions: astroK7.generateCheckpointQuestionsK7 });
validateGrade({ grade: 8, islands: astroK8.BIO_K8_ISLANDS, checkpointMap: astroK8.BIO_K8_CHECKPOINT_MAP, checkpointTopics: astroK8.BIO_K8_CHECKPOINT_TOPICS, curriculum: curriculumK8.K8_CURRICULUM, getQuestions: curriculumK8.getK8Questions, generateIslandQuestions: astroK8.generateIslandQuestionsK8, generateCheckpointQuestions: astroK8.generateCheckpointQuestionsK8 });

if (failures.length > 0) {
  console.error(`AstroBiologie audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("AstroBiologie audit passed: grades 5-8 routes/data, M2/M3 pools, explorer pools, checkpoint topics, and BiologieTest generators are wired.");
