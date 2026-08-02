import type { IslandDef } from "../lib/astromath";
import type { KemiaQuestion, KemiaTheme } from "../lib/kemiaCurriculumShared";

const LANGS = ["de", "en", "hu", "ro"] as const;
type Lang = (typeof LANGS)[number];

const failures: string[] = [];

function fail(message: string): void {
  failures.push(message);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertText(value: unknown, context: string): void {
  if (typeof value !== "string" || value.trim().length === 0) {
    fail(`${context}: missing text`);
  }
}

function assertL10n(value: unknown, context: string): void {
  if (!isRecord(value)) {
    fail(`${context}: expected localized object`);
    return;
  }

  for (const lang of LANGS) {
    assertText(value[lang], `${context}.${lang}`);
  }
}

function findGenerator(theme: KemiaTheme, subtopicId: string): boolean {
  return theme.subtopics.some((subtopic) => subtopic.id === subtopicId && subtopic.hasGenerator);
}

function validateQuestion(question: KemiaQuestion, context: string): void {
  const q = question as any;
  assertText(q.question, `${context}.question`);
  assertText(q.topic, `${context}.topic`);
  assertText(q.subtopic, `${context}.subtopic`);

  if (q.type === "mcq") {
    if (!Array.isArray(q.options) || q.options.length < 2) {
      fail(`${context}: MCQ needs at least two options`);
      return;
    }
    q.options.forEach((option: unknown, index: number) => assertText(option, `${context}.options[${index}]`));
    if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length) {
      fail(`${context}: invalid correct index ${q.correct}`);
    }
    const correct = q.options[q.correct];
    if (q.options.filter((option: unknown) => option === correct).length !== 1) {
      fail(`${context}: correct option is duplicated`);
    }
  } else if (q.type === "typing") {
    if (Array.isArray(q.answer)) {
      if (q.answer.length === 0) fail(`${context}: empty typing answer array`);
      q.answer.forEach((answer: unknown, index: number) => assertText(answer, `${context}.answer[${index}]`));
    } else {
      assertText(q.answer, `${context}.answer`);
    }
  } else {
    fail(`${context}: unsupported question type ${q.type}`);
  }
}

function validateCurriculum(
  grade: 5 | 6 | 7 | 8,
  themes: KemiaTheme[],
  getQuestions: (ids: string[], count?: number) => KemiaQuestion[],
): void {
  if (!Array.isArray(themes)) {
    fail(`K${grade}: curriculum export is unavailable`);
    return;
  }
  if (typeof getQuestions !== "function") {
    fail(`K${grade}: question generator export is unavailable`);
    return;
  }
  if (themes.length === 0) fail(`K${grade}: no curriculum themes`);

  const seenSubtopics = new Set<string>();
  let subtopicCount = 0;

  for (const theme of themes) {
    assertText(theme.id, `K${grade}.${theme.id}.id`);
    assertL10n(theme.name, `K${grade}.${theme.id}.name`);
    assertText(theme.icon, `K${grade}.${theme.id}.icon`);
    assertText(theme.color, `K${grade}.${theme.id}.color`);
    if (!Array.isArray(theme.subtopics) || theme.subtopics.length === 0) {
      fail(`K${grade}.${theme.id}: no subtopics`);
      continue;
    }

    for (const subtopic of theme.subtopics) {
      subtopicCount += 1;
      if (seenSubtopics.has(subtopic.id)) fail(`K${grade}: duplicate subtopic ${subtopic.id}`);
      seenSubtopics.add(subtopic.id);
      assertL10n(subtopic.name, `K${grade}.${subtopic.id}.name`);
      if (!findGenerator(theme, subtopic.id) && subtopic.questions.length === 0) {
        fail(`K${grade}.${subtopic.id}: no static questions and no generator flag`);
      }

      const questions = getQuestions([subtopic.id], 8);
      if (questions.length === 0) fail(`K${grade}.${subtopic.id}: generated no questions`);
      questions.forEach((question, index) => validateQuestion(question, `K${grade}.${subtopic.id}.question[${index}]`));
    }
  }

  if (subtopicCount < 27) fail(`K${grade}: expected at least 27 subtopics, got ${subtopicCount}`);
}

function validateAstro(
  grade: 5 | 6 | 7 | 8,
  islands: IslandDef[],
  islandQuestions: (island: IslandDef, count?: number) => unknown[],
  checkpointQuestions: (testId: string, count?: number) => unknown[],
): void {
  if (!Array.isArray(islands)) {
    fail(`AstroKemia K${grade}: island export is unavailable`);
    return;
  }
  if (typeof islandQuestions !== "function" || typeof checkpointQuestions !== "function") {
    fail(`AstroKemia K${grade}: question helper export is unavailable`);
    return;
  }
  if (islands.length !== 9) fail(`AstroKemia K${grade}: expected 9 islands, got ${islands.length}`);

  const seenTopicKeys = new Set<string>();
  islands.forEach((island, index) => {
    const expectedId = `i${index + 1}`;
    if (island.id !== expectedId) fail(`AstroKemia K${grade}: island ${index} id is ${island.id}, expected ${expectedId}`);
    assertL10n(island.name, `AstroKemia K${grade}.${island.id}.name`);
    if (island.missions.length !== 3) fail(`AstroKemia K${grade}.${island.id}: expected 3 missions`);
    ["m1", "m2", "m3"].forEach((missionId, missionIndex) => {
      const mission = island.missions[missionIndex];
      if (!mission || mission.id !== missionId) fail(`AstroKemia K${grade}.${island.id}: mission ${missionIndex} should be ${missionId}`);
      if (mission) assertL10n(mission.label, `AstroKemia K${grade}.${island.id}.${mission.id}.label`);
    });
    if (island.topicKeys.length === 0) fail(`AstroKemia K${grade}.${island.id}: no topic keys`);
    island.topicKeys.forEach((key) => seenTopicKeys.add(key));

    const questions = islandQuestions(island, 10);
    if (questions.length !== 10) fail(`AstroKemia K${grade}.${island.id}: expected 10 island MCQs, got ${questions.length}`);
  });

  ["test1", "test2", "test3"].forEach((testId) => {
    const questions = checkpointQuestions(testId, 15);
    if (questions.length !== 15) fail(`AstroKemia K${grade}.${testId}: expected 15 checkpoint MCQs, got ${questions.length}`);
  });

  if (seenTopicKeys.size < 27) fail(`AstroKemia K${grade}: too few mapped topic keys (${seenTopicKeys.size})`);
}

function validateExplorerPool(exports: Record<string, unknown>, grade: number): void {
  for (let island = 1; island <= 9; island += 1) {
    const pool = exports[`KEMIA_K${grade}_I${island}_POOL`];
    const labels = exports[`KEMIA_K${grade}_I${island}_LABELS`];
    if (!Array.isArray(pool) || pool.length === 0) {
      fail(`Explorer K${grade}.i${island}: empty pool`);
      continue;
    }
    if (!isRecord(labels)) {
      fail(`Explorer K${grade}.i${island}: missing labels`);
      continue;
    }
    for (const lang of LANGS) {
      if (!isRecord(labels[lang])) fail(`Explorer K${grade}.i${island}: labels.${lang} missing`);
    }
    pool.forEach((topic: any, index: number) => {
      assertText(topic.infoTitle, `Explorer K${grade}.i${island}[${index}].infoTitle`);
      assertText(topic.infoText, `Explorer K${grade}.i${island}[${index}].infoText`);
      if (!isRecord(topic.svg)) fail(`Explorer K${grade}.i${island}[${index}]: missing svg`);
      if (!isRecord(topic.interactive)) fail(`Explorer K${grade}.i${island}[${index}]: missing interactive`);
      if (!isRecord(topic.quiz) && typeof topic.quiz !== "string") fail(`Explorer K${grade}.i${island}[${index}]: missing quiz`);
      for (const lang of LANGS) {
        const localized = labels[lang] as Record<string, unknown>;
        assertText(localized[topic.infoTitle], `Explorer K${grade}.i${island}[${index}].labels.${lang}.${topic.infoTitle}`);
        assertText(localized[topic.infoText], `Explorer K${grade}.i${island}[${index}].labels.${lang}.${topic.infoText}`);
      }
    });
  }
}

function validateLocalizedRoundText(value: unknown, context: string): void {
  if (typeof value === "string") return;
  assertL10n(value, context);
}

function validateRounds(pools: Record<string, any[]>, label: string): void {
  if (!isRecord(pools)) {
    fail(`${label}: pool export is unavailable`);
    return;
  }
  for (const [gameKey, rounds] of Object.entries(pools)) {
    if (!Array.isArray(rounds) || rounds.length === 0) {
      fail(`${label}.${gameKey}: no rounds`);
      continue;
    }
    rounds.forEach((round, index) => {
      assertText(round.id, `${label}.${gameKey}[${index}].id`);
      if (round.taskDescription) assertL10n(round.taskDescription, `${label}.${gameKey}[${index}].taskDescription`);
      for (const [key, value] of Object.entries(round)) {
        if (["label", "text", "explanation", "startWord"].includes(key)) {
          validateLocalizedRoundText(value, `${label}.${gameKey}[${index}].${key}`);
        }
      }
      if (Array.isArray(round.options) && "correctIndex" in round) {
        if (!Number.isInteger(round.correctIndex) || round.correctIndex < 0 || round.correctIndex >= round.options.length) {
          fail(`${label}.${gameKey}[${index}]: invalid correctIndex ${round.correctIndex}`);
        }
      }
      if (Array.isArray(round.items) && Array.isArray(round.correctOrder)) {
        const ids = new Set(round.items.map((item: any) => item.id));
        round.correctOrder.forEach((id: string) => {
          if (!ids.has(id)) fail(`${label}.${gameKey}[${index}]: correctOrder references missing item ${id}`);
        });
      }
    });
  }
}

function validateVisualLabPool(value: unknown, context: string): void {
  if (!isRecord(value)) {
    fail(`${context}: missing pool object`);
    return;
  }
  const visit = (node: unknown, path: string): void => {
    if (Array.isArray(node)) {
      node.forEach((entry, index) => visit(entry, `${path}[${index}]`));
      return;
    }
    if (!isRecord(node)) return;
    if (LANGS.every((lang) => typeof node[lang] === "string")) {
      assertL10n(node, path);
      return;
    }
    Object.entries(node).forEach(([key, child]) => visit(child, `${path}.${key}`));
  };
  visit(value, context);
}

async function main(): Promise<void> {
  await import("../lib/kemiaRegistration");

  const curriculumK5 = await import("../lib/kemiaCurriculum5");
  const curriculumK6 = await import("../lib/kemiaCurriculum6");
  const curriculumK7 = await import("../lib/kemiaCurriculum7");
  const curriculumK8 = await import("../lib/kemiaCurriculum8");
  const astroK5 = await import("../lib/astroKemia5");
  const astroK6 = await import("../lib/astroKemia6");
  const astroK7 = await import("../lib/astroKemia7");
  const astroK8 = await import("../lib/astroKemia8");
  const gameRegistry = await import("../lib/astro/kemiaGameRegistry");
  const explorerK5 = await import("../lib/explorerPools/kemiaK5");
  const explorerK6 = await import("../lib/explorerPools/kemiaK6");
  const explorerK7 = await import("../lib/explorerPools/kemiaK7");
  const explorerK8 = await import("../lib/explorerPools/kemiaK8");
  const kemiaVisualLabPool = await import("../lib/visualLab/pools/kemiaPool");
  const chemistryVisualLabPool = await import("../lib/visualLab/pools/chemistryPool");

  validateCurriculum(5, (curriculumK5 as any).K5_CURRICULUM, (curriculumK5 as any).getK5Questions);
  validateCurriculum(6, (curriculumK6 as any).K6_CURRICULUM, (curriculumK6 as any).getK6Questions);
  validateCurriculum(7, (curriculumK7 as any).K7_CURRICULUM, (curriculumK7 as any).getK7Questions);
  validateCurriculum(8, (curriculumK8 as any).K8_CURRICULUM, (curriculumK8 as any).getK8Questions);

  validateAstro(5, (astroK5 as any).KEMIA_K5_ISLANDS, (astroK5 as any).generateIslandQuestionsKemiaK5, (astroK5 as any).generateCheckpointQuestionsKemiaK5);
  validateAstro(6, (astroK6 as any).KEMIA_K6_ISLANDS, (astroK6 as any).generateIslandQuestionsKemiaK6, (astroK6 as any).generateCheckpointQuestionsKemiaK6);
  validateAstro(7, (astroK7 as any).KEMIA_K7_ISLANDS, (astroK7 as any).generateIslandQuestionsKemiaK7, (astroK7 as any).generateCheckpointQuestionsKemiaK7);
  validateAstro(8, (astroK8 as any).KEMIA_K8_ISLANDS, (astroK8 as any).generateIslandQuestionsKemiaK8, (astroK8 as any).generateCheckpointQuestionsKemiaK8);

  validateExplorerPool(explorerK5, 5);
  validateExplorerPool(explorerK6, 6);
  validateExplorerPool(explorerK7, 7);
  validateExplorerPool(explorerK8, 8);

  validateRounds((gameRegistry as any).KEMIA_M2_POOLS, "KEMIA_M2_POOLS");
  validateRounds((gameRegistry as any).KEMIA_M3_POOLS, "KEMIA_M3_POOLS");

  for (const grade of [5, 6, 7, 8]) {
    validateVisualLabPool((kemiaVisualLabPool as any).KEMIA_POOLS?.[grade], `KEMIA_POOLS.${grade}`);
  }
  validateVisualLabPool((chemistryVisualLabPool as any).CHEMISTRY_VISUAL_LAB_POOL, "CHEMISTRY_VISUAL_LAB_POOL");

  if (failures.length > 0) {
    console.error(`AstroKemia audit failed with ${failures.length} issue(s):`);
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log("AstroKemia audit passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
