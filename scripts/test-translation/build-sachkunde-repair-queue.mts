import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { CurriculumQuestion } from "../../lib/curriculumTypes";

type Generator = (seed?: number) => CurriculumQuestion[];
const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);

const [g1, g2, g3, g4, visualModule, generatedModule] = await Promise.all([
  import("../../lib/sachkundeGenerators1").then(pickModule),
  import("../../lib/sachkundeGenerators2").then(pickModule),
  import("../../lib/sachkundeGenerators3").then(pickModule),
  import("../../lib/sachkundeGenerators4").then(pickModule),
  import("../../lib/sachkundeVisualGenerators").then(pickModule),
  import("../../lib/sachkundeQuestionTranslations.generated").then(pickModule),
]);

const existing = new Set(Object.keys(generatedModule.SACHKUNDE_QUESTION_TRANSLATIONS.hu));
const strings = new Set<string>();
const ignoredKeys = new Set(["id", "type", "scene", "diagramId", "missionId", "subtopic", "subtopicIds", "printSvg", "icon", "color", "lang"]);

function add(value: unknown): void {
  if (typeof value !== "string") return;
  const text = value.trim();
  if (text && /[A-Za-zÄÖÜäöüß]/.test(text) && !existing.has(text)) strings.add(text);
}

function collectQuestion(question: CurriculumQuestion): void {
  add(question.question);
  if (question.type === "mcq") question.options.forEach(add);
  else (Array.isArray(question.answer) ? question.answer : [question.answer]).forEach(add);
}

function collectObject(value: unknown, key = ""): void {
  if (ignoredKeys.has(key)) return;
  if (typeof value === "string") return add(value);
  if (Array.isArray(value)) return value.forEach(item => collectObject(item, key));
  if (!value || typeof value !== "object") return;
  for (const [childKey, child] of Object.entries(value)) collectObject(child, childKey);
}

const generators: Generator[] = [
  ...Object.values(g1.G1_Generators_Sachkunde),
  ...Object.values(g2.G2_Generators_Sachkunde),
  ...Object.values(g3.G3_Generators_Sachkunde),
  ...Object.values(g4.G4_Generators_Sachkunde),
  ...Object.values(g4.G4_Typing_Generators_Sachkunde),
] as Generator[];

let stablePasses = 0;
for (let seed = 1; seed <= 400 && stablePasses < 64; seed += 1) {
  const before = strings.size;
  for (const generator of generators) {
    for (const question of generator(seed) ?? []) collectQuestion(question);
  }
  stablePasses = strings.size === before ? stablePasses + 1 : 0;
}

for (const visualType of visualModule.SACHKUNDE_VISUAL_TYPES) {
  add(visualType.label);
  add(visualType.printLabel);
  for (let pass = 0; pass < 100; pass += 1) {
    for (const question of visualType.generate(100)) collectObject(question);
  }
}

const sources = [...strings].sort((a, b) => a.localeCompare(b, "de"));
const manifest: Record<string, string> = {};
for (const source of sources) {
  const key = "sr_" + createHash("sha256").update(source).digest("hex").slice(0, 16);
  manifest[key] = source;
}
const entries = Object.entries(manifest);
const queue = [];
for (let index = 0; index < entries.length; index += 20) {
  queue.push({
    id: `sachkunde-repair-${String(queue.length + 1).padStart(3, "0")}`,
    items: Object.fromEntries(entries.slice(index, index + 20)),
  });
}

const outputDir = path.resolve(process.argv[2] ?? "translation-work/sachkunde-test-repair");
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "source-manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ generators: generators.length, missingStrings: entries.length, batches: queue.length, stablePasses, outputDir }));
