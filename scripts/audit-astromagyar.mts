import fs from "node:fs";
import path from "node:path";
import * as MagyarCurriculum from "../lib/magyarCurriculum";
import * as MagyarRegistry from "../lib/astro/magyarGameRegistry";
import * as O1 from "../lib/astroMagyar";
import * as O2 from "../lib/astroMagyar2";
import * as O3 from "../lib/astroMagyar3";
import * as O4 from "../lib/astroMagyar4";
import * as O5 from "../lib/astroMagyar5";
import * as O6 from "../lib/astroMagyar6";
import * as O7 from "../lib/astroMagyar7";
import * as O8 from "../lib/astroMagyar8";

type Question = {
  question: string;
  correctAnswer: string | number;
  options?: Array<string | number>;
};

const curriculum = MagyarCurriculum.default ?? MagyarCurriculum;
const registry = MagyarRegistry.default ?? MagyarRegistry;
const o1 = O1.default ?? O1;
const o2 = O2.default ?? O2;
const o3 = O3.default ?? O3;
const o4 = O4.default ?? O4;
const o5 = O5.default ?? O5;
const o6 = O6.default ?? O6;
const o7 = O7.default ?? O7;
const o8 = O8.default ?? O8;

type GradeDef = {
  grade: number;
  route: string;
  islands: typeof o1.O1_ISLANDS;
  checkpoints: Record<string, string[]>;
  checkpointTopics: Record<string, string[]>;
  islandQuestions: (island: typeof o1.O1_ISLANDS[number], count: number) => Question[];
  checkpointQuestions: (testId: string, count: number) => Question[];
};

const grades: GradeDef[] = [
  {
    grade: 1, route: "app/astromagyar/1/page.tsx", islands: o1.O1_ISLANDS,
    checkpoints: o1.O1_CHECKPOINT_MAP, checkpointTopics: o1.O1_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o1.generateMagyarIslandQuestions(island, 1, count),
    checkpointQuestions: (testId, count) => o1.generateMagyarCheckpointQuestions(testId, o1.O1_CHECKPOINT_TOPICS, 1, count),
  },
  {
    grade: 2, route: "app/astromagyar/2/page.tsx", islands: o2.O2_ISLANDS,
    checkpoints: o2.O2_CHECKPOINT_MAP, checkpointTopics: o2.O2_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o2.generateIslandQuestionsO2(island, "hu", count),
    checkpointQuestions: (testId, count) => o2.generateCheckpointQuestionsO2(testId, "hu", count),
  },
  {
    grade: 3, route: "app/astromagyar/3/page.tsx", islands: o3.O3_ISLANDS,
    checkpoints: o3.O3_CHECKPOINT_MAP, checkpointTopics: o3.O3_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o3.generateIslandQuestionsO3(island, "hu", count),
    checkpointQuestions: (testId, count) => o3.generateCheckpointQuestionsO3(testId, "hu", count),
  },
  {
    grade: 4, route: "app/astromagyar/4/page.tsx", islands: o4.O4_ISLANDS,
    checkpoints: o4.O4_CHECKPOINT_MAP, checkpointTopics: o4.O4_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o4.generateIslandQuestionsO4(island, "hu", count),
    checkpointQuestions: (testId, count) => o4.generateCheckpointQuestionsO4(testId, "hu", count),
  },
  {
    grade: 5, route: "app/astromagyar/5/page.tsx", islands: o5.O5_ISLANDS,
    checkpoints: o5.O5_CHECKPOINT_MAP, checkpointTopics: o5.O5_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o5.generateIslandQuestionsO5(island, "hu", count),
    checkpointQuestions: (testId, count) => o5.generateCheckpointQuestionsO5(testId, "hu", count),
  },
  {
    grade: 6, route: "app/astromagyar/6/page.tsx", islands: o6.O6_ISLANDS,
    checkpoints: o6.O6_CHECKPOINT_MAP, checkpointTopics: o6.O6_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o6.generateIslandQuestionsO6(island, "hu", count),
    checkpointQuestions: (testId, count) => o6.generateCheckpointQuestionsO6(testId, "hu", count),
  },
  {
    grade: 7, route: "app/astromagyar/7/page.tsx", islands: o7.O7_ISLANDS,
    checkpoints: o7.O7_CHECKPOINT_MAP, checkpointTopics: o7.O7_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o1.generateMagyarIslandQuestions(island, 7, count),
    checkpointQuestions: (testId, count) => o1.generateMagyarCheckpointQuestions(testId, o7.O7_CHECKPOINT_TOPICS, 7, count),
  },
  {
    grade: 8, route: "app/astromagyar/8/page.tsx", islands: o8.O8_ISLANDS,
    checkpoints: o8.O8_CHECKPOINT_MAP, checkpointTopics: o8.O8_CHECKPOINT_TOPICS,
    islandQuestions: (island, count) => o8.generateMagyarIslandQuestions(island, 8, count),
    checkpointQuestions: (testId, count) => o8.generateMagyarCheckpointQuestions(testId, o8.O8_CHECKPOINT_TOPICS, 8, count),
  },
];

const failures: string[] = [];

function fail(message: string) {
  failures.push(message);
}

function assert(condition: unknown, message: string) {
  if (!condition) fail(message);
}

function topicExists(grade: number, key: string): boolean {
  const [themeId, subtopicId] = key.split("/");
  const theme = curriculum.MAGYAR_CURRICULUM[grade]?.find((item) => item.id === themeId);
  return Boolean(theme?.subtopics.some((subtopic) => subtopic.id === subtopicId))
    || curriculum.getMagyarCurriculumQuestions([key], 1, grade).length > 0;
}

function validateQuestions(label: string, questions: Question[], expected = 10) {
  assert(questions.length === expected, `${label}: expected ${expected} questions, got ${questions.length}`);
  const seen = new Set<string>();
  for (const [index, question] of questions.entries()) {
    assert(question.question?.trim(), `${label} q${index + 1}: missing prompt`);
    assert(question.correctAnswer !== undefined && question.correctAnswer !== null && String(question.correctAnswer).trim(), `${label} q${index + 1}: missing correct answer`);
    assert(Array.isArray(question.options) && question.options.length >= 2, `${label} q${index + 1}: missing options`);
    assert(question.options?.includes(question.correctAnswer), `${label} q${index + 1}: correct answer is not in options`);
    assert(!seen.has(question.question), `${label} q${index + 1}: duplicate prompt "${question.question}"`);
    seen.add(question.question);
  }
}

for (const grade of grades) {
  assert(fs.existsSync(grade.route), `K${grade.grade}: live route is missing at ${grade.route}`);
  assert(grade.islands.length === 9, `K${grade.grade}: expected 9 islands, got ${grade.islands.length}`);

  const islandIds = new Set<string>();
  for (const [index, island] of grade.islands.entries()) {
    assert(island.id === `i${index + 1}`, `K${grade.grade}: island order/id mismatch at position ${index + 1}`);
    assert(!islandIds.has(island.id), `K${grade.grade}: duplicate island id ${island.id}`);
    islandIds.add(island.id);
    assert(island.name.hu?.trim(), `K${grade.grade} ${island.id}: missing Hungarian island name`);
    assert(island.topicKeys.length > 0, `K${grade.grade} ${island.id}: no topic keys`);
    for (const key of island.topicKeys) {
      assert(topicExists(grade.grade, key), `K${grade.grade} ${island.id}: missing curriculum topic ${key}`);
    }
    assert(island.missions.length === 3, `K${grade.grade} ${island.id}: expected 3 missions`);
    for (const [missionIndex, mission] of island.missions.entries()) {
      assert(mission.id === `m${missionIndex + 1}`, `K${grade.grade} ${island.id}: mission id/order mismatch`);
      assert(mission.label.hu?.trim(), `K${grade.grade} ${island.id}/${mission.id}: missing Hungarian label`);
      if (mission.gameType === "m2") {
        assert(Boolean(mission.gameKey && registry.MAGYAR_M2_POOLS[mission.gameKey]?.length), `K${grade.grade} ${island.id}/${mission.id}: missing m2 pool ${mission.gameKey}`);
      }
      if (mission.gameType === "m3") {
        assert(Boolean(mission.gameKey && registry.MAGYAR_M3_POOLS[mission.gameKey]?.length), `K${grade.grade} ${island.id}/${mission.id}: missing m3 pool ${mission.gameKey}`);
      }
    }
    validateQuestions(`K${grade.grade} ${island.id}`, grade.islandQuestions(island, 10));
  }

  for (const testId of ["test1", "test2", "test3"]) {
    const checkpointIslandIds = grade.checkpoints[testId] ?? [];
    assert(checkpointIslandIds.length === 3, `K${grade.grade} ${testId}: expected 3 unlocking islands`);
    for (const islandId of checkpointIslandIds) {
      assert(islandIds.has(islandId), `K${grade.grade} ${testId}: unknown island ${islandId}`);
    }
    const topics = grade.checkpointTopics[testId] ?? [];
    assert(topics.length > 0, `K${grade.grade} ${testId}: no checkpoint topics`);
    for (const key of topics) {
      assert(topicExists(grade.grade, key), `K${grade.grade} ${testId}: missing curriculum topic ${key}`);
    }
    validateQuestions(`K${grade.grade} ${testId}`, grade.checkpointQuestions(testId, 10));
  }
}

for (const file of fs.readdirSync("app/astromagyar").filter((name) => /^islands.*\.tsx$/.test(name))) {
  const filePath = path.join("app/astromagyar", file);
  const source = fs.readFileSync(filePath, "utf8");
  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const seen = new Set<string>();
  for (const id of ids) {
    assert(!seen.has(id), `${filePath}: duplicate hardcoded SVG id "${id}"`);
    seen.add(id);
  }
}

if (failures.length > 0) {
  console.error(`AstroMagyar audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`AstroMagyar audit passed for ${grades.length} grades, ${grades.reduce((sum, grade) => sum + grade.islands.length, 0)} islands, and ${grades.length * 3} checkpoints.`);
