import { readFileSync } from "node:fs";
import { join } from "node:path";

import * as G1 from "../lib/astroSachkunde1.ts";
import * as G2 from "../lib/astroSachkunde2.ts";
import * as G3 from "../lib/astroSachkunde3.ts";
import * as G4 from "../lib/astroSachkunde4.ts";
import * as Curriculum from "../lib/sachkundeCurriculum.ts";
import * as Registry from "../lib/astro/sachkundeGameRegistry.ts";

type Issue = { file: string; message: string };
type Island = (typeof G1.SK_G1_ISLANDS)[number];

const root = process.cwd();
const issues: Issue[] = [];
function unwrapModule<T extends Record<string, any>>(mod: T): T {
  const realKeys = Object.keys(mod).filter((key) => key !== "default" && key !== "module.exports");
  return (realKeys.length ? mod : mod["module.exports"] ?? mod.default ?? mod) as T;
}

const g1 = unwrapModule(G1);
const g2 = unwrapModule(G2);
const g3 = unwrapModule(G3);
const g4 = unwrapModule(G4);
const curriculumModule = unwrapModule(Curriculum);
const registryModule = unwrapModule(Registry);
const curriculum = curriculumModule.SACHKUNDE_CURRICULUM;
const getQuestions = curriculumModule.getSachkundeQuestions;
const m2Pools = registryModule.SACHKUNDE_M2_POOLS;
const m3Pools = registryModule.SACHKUNDE_M3_POOLS;

if (!curriculum || typeof getQuestions !== "function" || !m2Pools || !m3Pools) {
  console.error("AstroSachkunde audit could not load required subject exports.");
  console.error({
    curriculum: Boolean(curriculum),
    getQuestions: typeof getQuestions,
    m2Pools: Boolean(m2Pools),
    m3Pools: Boolean(m3Pools),
    curriculumKeys: Object.keys(Curriculum),
    registryKeys: Object.keys(Registry),
  });
  process.exit(1);
}

const grades = [
  {
    grade: 1,
    file: "lib/astroSachkunde1.ts",
    islands: g1.SK_G1_ISLANDS,
    checkpoints: g1.SK_G1_CHECKPOINT_MAP,
    checkpointTopics: g1.SK_G1_CHECKPOINT_TOPICS,
    islandQuestions: g1.generateIslandQuestionsSKG1,
    checkpointQuestions: g1.generateCheckpointQuestionsSKG1,
  },
  {
    grade: 2,
    file: "lib/astroSachkunde2.ts",
    islands: g2.SK_G2_ISLANDS,
    checkpoints: g2.SK_G2_CHECKPOINT_MAP,
    checkpointTopics: g2.SK_G2_CHECKPOINT_TOPICS,
    islandQuestions: g2.generateIslandQuestionsSKG2,
    checkpointQuestions: g2.generateCheckpointQuestionsSKG2,
  },
  {
    grade: 3,
    file: "lib/astroSachkunde3.ts",
    islands: g3.SK_G3_ISLANDS,
    checkpoints: g3.SK_G3_CHECKPOINT_MAP,
    checkpointTopics: g3.SK_G3_CHECKPOINT_TOPICS,
    islandQuestions: g3.generateIslandQuestionsSKG3,
    checkpointQuestions: g3.generateCheckpointQuestionsSKG3,
  },
  {
    grade: 4,
    file: "lib/astroSachkunde4.ts",
    islands: g4.SK_G4_ISLANDS,
    checkpoints: g4.SK_G4_CHECKPOINT_MAP,
    checkpointTopics: g4.SK_G4_CHECKPOINT_TOPICS,
    islandQuestions: g4.generateIslandQuestionsSKG4,
    checkpointQuestions: g4.generateCheckpointQuestionsSKG4,
  },
];

function fail(file: string, message: string) {
  issues.push({ file, message });
}

function assertText(file: string, label: string, value: unknown, minLength = 2) {
  if (typeof value !== "string" || value.trim().length < minLength) {
    fail(file, `${label} is empty or too short`);
  }
}

function validateQuestion(file: string, label: string, q: any) {
  assertText(file, `${label}.question`, q.question);
  assertText(file, `${label}.correctAnswer`, q.correctAnswer, 1);
  if (!Array.isArray(q.options) || q.options.length < 2) {
    fail(file, `${label}.options has fewer than 2 options`);
    return;
  }
  const normalized = q.options.map((option: unknown) => String(option).trim());
  const unique = new Set(normalized);
  if (unique.size !== normalized.length) fail(file, `${label}.options has duplicate options`);
  if (!normalized.includes(String(q.correctAnswer).trim())) {
    fail(file, `${label}.correctAnswer is missing from options`);
  }
}

function validatePool(file: string, key: string, pool: any[] | undefined, kind: "M2" | "M3") {
  if (!Array.isArray(pool) || pool.length === 0) {
    fail(file, `${kind} pool missing for gameKey "${key}"`);
    return;
  }
  pool.forEach((round, index) => {
    const text = JSON.stringify(round);
    if (!text || text.length < 20) fail(file, `${kind} pool "${key}" round ${index} has little content`);
  });
}

function validateIsland(file: string, island: Island, grade: number) {
  assertText(file, `K${grade} ${island.id}.id`, island.id);
  if (island.missions.length !== 3) fail(file, `K${grade} ${island.id} does not expose exactly m1/m2/m3`);
  for (const mission of island.missions) {
    if (!["m1", "m2", "m3"].includes(mission.id)) {
      fail(file, `K${grade} ${island.id} has unexpected mission id "${mission.id}"`);
    }
    assertText(file, `K${grade} ${island.id}.${mission.id}.label.de`, mission.label.de);
    if (mission.id === "m1" && mission.gameType !== `sachkunde-k${grade}-explore`) {
      fail(file, `K${grade} ${island.id}.m1 has wrong explorer gameType "${mission.gameType}"`);
    }
    if (mission.id === "m2") validatePool("lib/astro/sachkundeGameRegistry.ts", mission.gameKey ?? "", m2Pools[mission.gameKey ?? ""], "M2");
    if (mission.id === "m3") validatePool("lib/astro/sachkundeGameRegistry.ts", mission.gameKey ?? "", m3Pools[mission.gameKey ?? ""], "M3");
  }
}

for (const spec of grades) {
  const curriculumTopics = new Set(
    (curriculum[spec.grade] ?? []).flatMap((theme) => theme.subtopics.map((sub) => sub.id)),
  );
  if (spec.islands.length !== 9) fail(spec.file, `K${spec.grade} should have 9 islands`);
  for (const island of spec.islands) {
    validateIsland(spec.file, island as Island, spec.grade);
    for (const topic of island.topicKeys) {
      if (!curriculumTopics.has(topic)) fail(spec.file, `K${spec.grade} ${island.id} topic "${topic}" is not in curriculum`);
    }
    const questions = spec.islandQuestions(island as never, 10);
    if (questions.length < 10) fail(spec.file, `K${spec.grade} ${island.id} generated only ${questions.length}/10 questions`);
    questions.forEach((q, i) => validateQuestion(spec.file, `K${spec.grade} ${island.id} q${i + 1}`, q));
  }
  for (const [testId, islandIds] of Object.entries(spec.checkpoints)) {
    if (islandIds.length !== 3) fail(spec.file, `K${spec.grade} ${testId} should guard 3 islands`);
    for (const islandId of islandIds) {
      if (!spec.islands.some((island) => island.id === islandId)) {
        fail(spec.file, `K${spec.grade} ${testId} references missing island "${islandId}"`);
      }
    }
    for (const topic of spec.checkpointTopics[testId] ?? []) {
      if (!curriculumTopics.has(topic)) fail(spec.file, `K${spec.grade} ${testId} topic "${topic}" is not in curriculum`);
    }
    const questions = spec.checkpointQuestions(testId, 10);
    if (questions.length < 10) fail(spec.file, `K${spec.grade} ${testId} generated only ${questions.length}/10 questions`);
    questions.forEach((q, i) => validateQuestion(spec.file, `K${spec.grade} ${testId} q${i + 1}`, q));
  }
  for (const theme of curriculum[spec.grade] ?? []) {
    for (const subtopic of theme.subtopics) {
      if (!subtopic.questions.length) fail("lib/sachkundeCurriculum.ts", `K${spec.grade} ${subtopic.id} has no questions`);
      const sampled = getQuestions(spec.grade, [subtopic.id], 10);
      if (sampled.length < 10) fail("lib/sachkundeCurriculum.ts", `K${spec.grade} ${subtopic.id} sampled only ${sampled.length}/10 questions`);
    }
  }
}

const routeFiles = [
  "app/astro-sachkunde/page.tsx",
  "app/sachkundetest/page.tsx",
  "app/sachkunde-test/page.tsx",
  "app/sachkunde-test/klasse-1/page.tsx",
  "app/sachkunde-test/klasse-2/page.tsx",
  "app/sachkunde-test/klasse-3/page.tsx",
  "app/sachkunde-test/klasse-4/page.tsx",
];

for (const file of routeFiles) {
  const source = readFileSync(join(root, file), "utf8");
  if (/klasse-[5-8]|astro-sachkunde\/[5-8]|grades:\s*\[[^\]]*[5-8]|visualGrades:\s*\[[^\]]*[5-8]/.test(source)) {
    fail(file, "route appears to expose K5-K8");
  }
}

if (issues.length) {
  console.error(`AstroSachkunde audit failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue.file}: ${issue.message}`);
  process.exit(1);
}

console.log("AstroSachkunde audit passed for live K1-K4 routes, islands, topics, M2/M3 pools, and question shape.");
