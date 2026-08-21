import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { CurriculumQuestion } from "../../lib/curriculumTypes";

function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) | 0;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const originalRandom = Math.random;
Math.random = seeded(20260820);

const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);

const curriculumModule = pickModule(await import("../../lib/sachkundeCurriculum"));
const visualModule = pickModule(await import("../../lib/sachkundeVisualGenerators"));
const {
  SACHKUNDE_ACTIVE_GRADES,
  SACHKUNDE_CURRICULUM,
  SACHKUNDE_SUBTOPIC_HINTS,
} = curriculumModule;
const { SACHKUNDE_VISUAL_TYPES } = visualModule;

const strings = new Set<string>();
const ignoredKeys = new Set([
  "id", "type", "scene", "diagramId", "missionId", "subtopic", "subtopicIds",
  "printSvg", "icon", "color", "correctIndex", "correct", "lang",
]);

function add(value: unknown): void {
  if (typeof value === "string") {
    const text = value.trim();
    if (text && /[A-Za-zÄÖÜäöüß]/.test(text)) strings.add(text);
  }
}

function collectQuestion(question: CurriculumQuestion): void {
  add(question.question);
  if (question.type === "mcq") question.options.forEach(add);
  else (Array.isArray(question.answer) ? question.answer : [question.answer]).forEach(add);
}

function collectObject(value: unknown, key = ""): void {
  if (ignoredKeys.has(key)) return;
  if (typeof value === "string") {
    add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(item => collectObject(item, key));
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [childKey, child] of Object.entries(value)) collectObject(child, childKey);
}

for (const grade of SACHKUNDE_ACTIVE_GRADES) {
  for (const theme of SACHKUNDE_CURRICULUM[grade] ?? []) {
    add(typeof theme.name === "string" ? theme.name : theme.name.de);
    for (const subtopic of theme.subtopics) {
      add(typeof subtopic.name === "string" ? subtopic.name : subtopic.name.de);
      subtopic.questions.forEach(collectQuestion);
    }
  }
}
Object.values(SACHKUNDE_SUBTOPIC_HINTS).forEach(add);

try {
  for (const visualType of SACHKUNDE_VISUAL_TYPES) {
    add(visualType.label);
    add(visualType.printLabel);
    for (let seed = 1; seed <= 64; seed += 1) {
      Math.random = seeded(seed);
      for (const question of visualType.generate(100)) collectObject(question);
    }
  }
} finally {
  Math.random = originalRandom;
}

const sources = [...strings].sort((a, b) => a.localeCompare(b, "de"));
const manifest: Record<string, string> = {};
for (const source of sources) {
  const key = "s_" + createHash("sha256").update(source).digest("hex").slice(0, 16);
  if (manifest[key] && manifest[key] !== source) throw new Error(`Hash collision for ${key}`);
  manifest[key] = source;
}

const entries = Object.entries(manifest);
const batchSize = 20;
const queue = [];
for (let index = 0; index < entries.length; index += batchSize) {
  queue.push({
    id: `sachkunde-${String(queue.length + 1).padStart(3, "0")}`,
    items: Object.fromEntries(entries.slice(index, index + batchSize)),
  });
}

const outputDir = path.resolve(process.argv[2] ?? "translation-work/sachkunde-test");
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "source-manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ grades: SACHKUNDE_ACTIVE_GRADES, strings: entries.length, batches: queue.length, outputDir }));
