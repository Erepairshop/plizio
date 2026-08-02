function exportsOf<T extends Record<string, any>>(module: T): T {
  return (module.default ?? module["module.exports"] ?? module) as T;
}

await import("../lib/physikRegistration");

const {
  K5_CURRICULUM,
  K5_GENERATOR_MAP,
  getK5Questions,
} = exportsOf(await import("../lib/physikCurriculum5"));
const {
  K6_CURRICULUM,
  K6_GENERATOR_MAP,
  getK6Questions,
} = exportsOf(await import("../lib/physikCurriculum6"));
const {
  K7_CURRICULUM,
  K7_GENERATOR_MAP,
  getK7Questions,
} = exportsOf(await import("../lib/physikCurriculum7"));
const {
  K8_CURRICULUM,
  K8_GENERATOR_MAP,
  getK8Questions,
} = exportsOf(await import("../lib/physikCurriculum8"));
const { PHYSIK_M2_POOLS, PHYSIK_M3_POOLS } = exportsOf(await import("../lib/astro/physikGameRegistry"));
const {
  PHYSIK_K5_CHECKPOINT_MAP,
  PHYSIK_K5_CHECKPOINT_TOPICS,
  PHYSIK_K5_ISLANDS,
  generateCheckpointQuestionsPhysikK5,
  generateIslandQuestionsPhysikK5,
} = exportsOf(await import("../lib/astroPhysik5"));
const {
  PHYSIK_K6_CHECKPOINT_MAP,
  PHYSIK_K6_CHECKPOINT_TOPICS,
  PHYSIK_K6_ISLANDS,
  generateCheckpointQuestionsPhysikK6,
  generateIslandQuestionsPhysikK6,
} = exportsOf(await import("../lib/astroPhysik6"));
const {
  PHYSIK_K7_CHECKPOINT_MAP,
  PHYSIK_K7_CHECKPOINT_TOPICS,
  PHYSIK_K7_ISLANDS,
  generateCheckpointQuestionsPhysikK7,
  generateIslandQuestionsPhysikK7,
} = exportsOf(await import("../lib/astroPhysik7"));
const {
  PHYSIK_K8_CHECKPOINT_MAP,
  PHYSIK_K8_CHECKPOINT_TOPICS,
  PHYSIK_K8_ISLANDS,
  generateCheckpointQuestionsPhysikK8,
  generateIslandQuestionsPhysikK8,
} = exportsOf(await import("../lib/astroPhysik8"));
const { PHYSIK_POOLS } = exportsOf(await import("../lib/visualLab/pools/physikPool"));
const physikK5Explorer = exportsOf(await import("../lib/explorerPools/physikK5"));
const physikK6Explorer = exportsOf(await import("../lib/explorerPools/physikK6"));
const physikK7Explorer = exportsOf(await import("../lib/explorerPools/physikK7"));
const physikK8Explorer = exportsOf(await import("../lib/explorerPools/physikK8"));

type Grade = 5 | 6 | 7 | 8;
type Curriculum = Array<{
  id: string;
  name: string | Record<string, string>;
  subtopics: Array<{ id: string; name: Record<string, string>; questions: unknown[]; hasGenerator: boolean }>;
}>;
type Question = {
  type?: string;
  topic?: string;
  subtopic?: string;
  question?: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
};

const LANGS = ["de", "en", "hu", "ro"];
const GERMAN_HINTS = [
  " der ",
  " die ",
  " das ",
  " ist ",
  " sind ",
  " welche",
  " welcher",
  " welches",
  " berechne",
  " warum",
  " wie ",
  " was ",
  " wenn ",
  " kraft",
  " wärme",
  " strom",
  " spannung",
];
const ENGLISH_HINTS = [
  " the ",
  " which ",
  " what ",
  " calculate",
  " force",
  " energy",
  " current",
  " voltage",
  " resistance",
  " light ",
  " sound ",
];

const grades: Record<Grade, {
  curriculum: Curriculum;
  generatorMap: Record<string, Record<string, (lang?: string, seed?: number) => Question[]>>;
  getQuestions: (ids: string[], count?: number) => Question[];
  islands: any[];
  checkpointMap: Record<string, string[]>;
  checkpointTopics: Record<string, string[]>;
  generateIslandQuestions: (island: any) => any[];
  generateCheckpointQuestions: (testId: string) => any[];
  explorer: Record<string, unknown>;
}> = {
  5: {
    curriculum: K5_CURRICULUM,
    generatorMap: K5_GENERATOR_MAP,
    getQuestions: getK5Questions,
    islands: PHYSIK_K5_ISLANDS,
    checkpointMap: PHYSIK_K5_CHECKPOINT_MAP,
    checkpointTopics: PHYSIK_K5_CHECKPOINT_TOPICS,
    generateIslandQuestions: generateIslandQuestionsPhysikK5,
    generateCheckpointQuestions: generateCheckpointQuestionsPhysikK5,
    explorer: physikK5Explorer,
  },
  6: {
    curriculum: K6_CURRICULUM,
    generatorMap: K6_GENERATOR_MAP,
    getQuestions: getK6Questions,
    islands: PHYSIK_K6_ISLANDS,
    checkpointMap: PHYSIK_K6_CHECKPOINT_MAP,
    checkpointTopics: PHYSIK_K6_CHECKPOINT_TOPICS,
    generateIslandQuestions: generateIslandQuestionsPhysikK6,
    generateCheckpointQuestions: generateCheckpointQuestionsPhysikK6,
    explorer: physikK6Explorer,
  },
  7: {
    curriculum: K7_CURRICULUM,
    generatorMap: K7_GENERATOR_MAP,
    getQuestions: getK7Questions,
    islands: PHYSIK_K7_ISLANDS,
    checkpointMap: PHYSIK_K7_CHECKPOINT_MAP,
    checkpointTopics: PHYSIK_K7_CHECKPOINT_TOPICS,
    generateIslandQuestions: generateIslandQuestionsPhysikK7,
    generateCheckpointQuestions: generateCheckpointQuestionsPhysikK7,
    explorer: physikK7Explorer,
  },
  8: {
    curriculum: K8_CURRICULUM,
    generatorMap: K8_GENERATOR_MAP,
    getQuestions: getK8Questions,
    islands: PHYSIK_K8_ISLANDS,
    checkpointMap: PHYSIK_K8_CHECKPOINT_MAP,
    checkpointTopics: PHYSIK_K8_CHECKPOINT_TOPICS,
    generateIslandQuestions: generateIslandQuestionsPhysikK8,
    generateCheckpointQuestions: generateCheckpointQuestionsPhysikK8,
    explorer: physikK8Explorer,
  },
};

const errors: string[] = [];
const warnings: string[] = [];

function assert(condition: unknown, message: string) {
  if (!condition) errors.push(message);
}

function warn(condition: unknown, message: string) {
  if (!condition) warnings.push(message);
}

function flattenText(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(flattenText);
  if (value && typeof value === "object") return Object.values(value).flatMap(flattenText);
  return [];
}

function hasGermanSignal(text: string): boolean {
  const normalized = ` ${text.toLowerCase()} `;
  return GERMAN_HINTS.some((hint) => normalized.includes(hint));
}

function hasEnglishSignal(text: string): boolean {
  const normalized = ` ${text.toLowerCase()} `;
  return ENGLISH_HINTS.some((hint) => normalized.includes(hint));
}

function validateQuestion(q: Question, loc: string) {
  assert(q.question && q.question.trim().length > 0, `${loc}: missing question text`);
  assert(q.topic && q.topic.trim().length > 0, `${loc}: missing topic`);
  assert(q.subtopic && q.subtopic.trim().length > 0, `${loc}: missing subtopic`);
  assert(q.type === "mcq" || q.type === "typing", `${loc}: unsupported type ${q.type}`);

  if (q.type === "mcq") {
    assert(Array.isArray(q.options) && q.options.length >= 2, `${loc}: mcq must have at least 2 options`);
    assert(Number.isInteger(q.correct) && q.correct! >= 0 && q.correct! < (q.options?.length ?? 0), `${loc}: invalid correct index`);
    assert(new Set(q.options).size === q.options?.length, `${loc}: duplicate mcq options`);
    for (const [idx, option] of (q.options ?? []).entries()) {
      assert(option.trim().length > 0, `${loc}: empty option ${idx}`);
    }
  }

  if (q.type === "typing") {
    const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
    assert(answers.every((answer) => typeof answer === "string" && answer.trim().length > 0), `${loc}: invalid typing answer`);
  }
}

function validateMathQuestion(q: any, loc: string) {
  assert(typeof q.question === "string" && q.question.trim().length > 0, `${loc}: missing question`);
  assert(typeof q.correctAnswer === "string" && q.correctAnswer.trim().length > 0, `${loc}: missing correctAnswer`);
  assert(Array.isArray(q.options) && q.options.length >= 2, `${loc}: missing options`);
  assert(q.options?.includes(q.correctAnswer), `${loc}: correctAnswer not present in options`);
  assert(typeof q.topic === "string" && q.topic.trim().length > 0, `${loc}: missing topic`);
}

function validateInteractive(interactive: any, loc: string) {
  assert(interactive && typeof interactive.type === "string", `${loc}: missing interactive type`);
  const texts = flattenText(interactive).filter((text) => text.trim().length > 0);
  warn(texts.length > 0, `${loc}: no user-facing interactive text`);

  if (interactive.type === "gap-fill") {
    assert(typeof interactive.sentence === "string" && interactive.sentence.length > 0, `${loc}: gap-fill sentence missing`);
    assert(Array.isArray(interactive.choices) && interactive.choices.length >= 2, `${loc}: gap-fill needs choices`);
    assert(Number.isInteger(interactive.correctIndex) && interactive.correctIndex >= 0 && interactive.correctIndex < interactive.choices?.length, `${loc}: invalid gap-fill correctIndex`);
  }

  if (interactive.type === "physics-stacker") {
    assert(Array.isArray(interactive.words) && interactive.words.length >= 2, `${loc}: stacker needs words`);
    assert(
      Array.isArray(interactive.correctOrder) &&
        interactive.correctOrder.length === interactive.words?.length &&
        interactive.correctOrder.every((idx: unknown) => Number.isInteger(idx) && (idx as number) >= 0 && (idx as number) < interactive.words.length),
      `${loc}: invalid stacker correctOrder`,
    );
  }

  if (interactive.type === "physics-magnet") {
    assert(Array.isArray(interactive.pairs) && interactive.pairs.length >= 2, `${loc}: magnet needs pairs`);
  }

  if (interactive.type === "physics-bucket" || interactive.type === "drag-to-bucket") {
    assert(Array.isArray(interactive.buckets) && interactive.buckets.length >= 2, `${loc}: bucket task needs buckets`);
    assert(Array.isArray(interactive.items) && interactive.items.length >= 2, `${loc}: bucket task needs items`);
    const bucketIds = new Set((interactive.buckets ?? []).map((bucket: any) => bucket.id));
    for (const item of interactive.items ?? []) {
      assert(bucketIds.has(item.bucketId), `${loc}: item ${item.text} references unknown bucket ${item.bucketId}`);
    }
  }

  if (interactive.type === "physics-slingshot") {
    assert(Array.isArray(interactive.targets) && interactive.targets.length >= 2, `${loc}: slingshot needs targets`);
    assert(interactive.targets?.some((target: any) => target.isCorrect), `${loc}: slingshot needs a correct target`);
  }
}

for (const [gradeText, cfg] of Object.entries(grades)) {
  const grade = Number(gradeText) as Grade;
  const subtopicIds = cfg.curriculum.flatMap((theme) => theme.subtopics.map((sub) => sub.id));
  const uniqueSubtopicIds = new Set(subtopicIds);

  assert(uniqueSubtopicIds.size === subtopicIds.length, `K${grade}: duplicate curriculum subtopic ids`);
  assert(cfg.islands.length === 9, `K${grade}: expected 9 islands, found ${cfg.islands.length}`);
  assert(PHYSIK_POOLS[grade] && PHYSIK_POOLS[grade].grade === grade, `K${grade}: missing Visual Lab grade pool`);

  for (const theme of cfg.curriculum) {
    for (const lang of LANGS) {
      assert(typeof (theme.name as any)[lang] === "string" && (theme.name as any)[lang].length > 0, `K${grade}/${theme.id}: missing ${lang} theme name`);
    }
    for (const sub of theme.subtopics) {
      for (const lang of LANGS) {
        assert(typeof sub.name[lang] === "string" && sub.name[lang].length > 0, `K${grade}/${sub.id}: missing ${lang} subtopic name`);
      }
      const generator = Object.values(cfg.generatorMap).find((themeGenerators) => themeGenerators[sub.id]);
      const typingGenerator = Object.values(cfg.generatorMap).find((themeGenerators) => themeGenerators[`${sub.id}_typing`]);
      assert(generator, `K${grade}/${sub.id}: missing generator`);
      assert(typingGenerator, `K${grade}/${sub.id}: missing typing generator`);

      const questions = cfg.getQuestions([sub.id], 8);
      assert(questions.length > 0, `K${grade}/${sub.id}: getQuestions returned no questions`);
      questions.forEach((q, idx) => validateQuestion(q, `K${grade}/${sub.id}/q${idx}`));
      const questionText = questions.map((q) => q.question ?? "").join(" ");
      warn(hasGermanSignal(questionText), `K${grade}/${sub.id}: generated sample lacks German signal`);
      warn(!hasEnglishSignal(questionText) || hasGermanSignal(questionText), `K${grade}/${sub.id}: generated sample looks English`);
    }
  }

  for (const island of cfg.islands) {
    assert(uniqueSubtopicIds.has(island.topicKeys?.[0]) || island.topicKeys?.every((key: string) => uniqueSubtopicIds.has(key)), `K${grade}/${island.id}: island topic key not in curriculum`);
    assert(island.missions?.length === 3, `K${grade}/${island.id}: expected m1/m2/m3`);
    assert(island.missions?.[0]?.id === "m1" && island.missions?.[0]?.gameType?.includes("explorer"), `K${grade}/${island.id}: m1 must be explorer`);
    assert(island.missions?.[1]?.id === "m2" && PHYSIK_M2_POOLS[island.missions[1].gameKey as keyof typeof PHYSIK_M2_POOLS], `K${grade}/${island.id}: m2 gameKey missing in registry`);
    assert(island.missions?.[2]?.id === "m3" && PHYSIK_M3_POOLS[island.missions[2].gameKey as keyof typeof PHYSIK_M3_POOLS], `K${grade}/${island.id}: m3 gameKey missing in registry`);

    const islandQuestions = cfg.generateIslandQuestions(island);
    assert(islandQuestions.length > 0, `K${grade}/${island.id}: island questions empty`);
    islandQuestions.forEach((q, idx) => validateMathQuestion(q, `K${grade}/${island.id}/islandQuestion${idx}`));

    const pool = cfg.explorer[`PHYSIK_K${grade}_${island.id.toUpperCase()}_POOL`] as any[] | undefined;
    assert(Array.isArray(pool) && pool.length >= 5, `K${grade}/${island.id}: explorer pool missing or too small`);
    pool?.forEach((topic, idx) => {
      assert(typeof topic.infoTitle === "string" && topic.infoTitle.length > 0, `K${grade}/${island.id}/explorer${idx}: missing infoTitle`);
      assert(typeof topic.infoText === "string" && topic.infoText.length > 0, `K${grade}/${island.id}/explorer${idx}: missing infoText`);
      assert(topic.quiz?.generate || (topic.quiz?.question && topic.quiz?.choices?.length >= 2), `K${grade}/${island.id}/explorer${idx}: invalid quiz config`);
      validateInteractive(topic.interactive, `K${grade}/${island.id}/explorer${idx}`);
    });

    const labels = cfg.explorer[`PHYSIK_K${grade}_${island.id.toUpperCase()}_LABELS`] as Record<string, Record<string, string>> | undefined;
    assert(labels, `K${grade}/${island.id}: explorer labels missing`);
    for (const lang of LANGS) {
      assert(labels?.[lang], `K${grade}/${island.id}: missing ${lang} explorer labels`);
    }
  }

  for (const [testId, islandIds] of Object.entries(cfg.checkpointMap)) {
    assert(islandIds.length === 3, `K${grade}/${testId}: expected 3 checkpoint islands`);
    for (const islandId of islandIds) {
      assert(cfg.islands.some((island) => island.id === islandId), `K${grade}/${testId}: unknown checkpoint island ${islandId}`);
    }
    assert(cfg.checkpointTopics[testId]?.every((topicId) => uniqueSubtopicIds.has(topicId)), `K${grade}/${testId}: checkpoint topic not in curriculum`);
    const checkpointQuestions = cfg.generateCheckpointQuestions(testId);
    assert(checkpointQuestions.length > 0, `K${grade}/${testId}: checkpoint questions empty`);
    checkpointQuestions.forEach((q, idx) => validateMathQuestion(q, `K${grade}/${testId}/checkpointQuestion${idx}`));
  }
}

for (const [key, rounds] of Object.entries({ ...PHYSIK_M2_POOLS, ...PHYSIK_M3_POOLS })) {
  assert(Array.isArray(rounds) && rounds.length > 0, `${key}: registry pool is empty`);
  rounds.forEach((round: unknown, idx: number) => {
    const texts = flattenText(round);
    assert(texts.length > 0, `${key}/${idx}: round has no text`);
    warn(texts.some(hasGermanSignal), `${key}/${idx}: round lacks German signal`);
  });
}

if (warnings.length) {
  console.warn(`AstroPhysik audit warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error(`AstroPhysik audit failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("AstroPhysik audit passed.");
