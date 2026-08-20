import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { CurriculumQuestion } from "../../lib/curriculumTypes";

type Generator = (seed?: number) => CurriculumQuestion[];

const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);

function collectGenerators(value: unknown, target: Generator[]): void {
  if (typeof value === "function") {
    target.push(value as Generator);
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const child of Object.values(value)) collectGenerators(child, target);
}

function collectQuestionStrings(question: CurriculumQuestion, target: Set<string>): void {
  target.add(question.question.trim());
  if (question.type === "mcq") {
    for (const option of question.options) target.add(option.trim());
    return;
  }
  const answers = Array.isArray(question.answer) ? question.answer : [question.answer];
  for (const answer of answers) target.add(answer.trim());
}

const modules = await Promise.all([
  import("../../lib/biologieGenerators5"),
  import("../../lib/biologieGenerators6"),
  import("../../lib/biologieGenerators7"),
  import("../../lib/biologieGenerators8"),
]);

const generators: Generator[] = [];
for (const imported of modules) {
  const module = pickModule(imported) as { GENERATOR_MAP: unknown };
  collectGenerators(module.GENERATOR_MAP, generators);
}

const strings = new Set<string>();
let stablePasses = 0;
for (let seed = 1; seed <= 200 && stablePasses < 32; seed += 1) {
  const before = strings.size;
  for (const generator of generators) {
    for (const question of generator(seed) ?? []) collectQuestionStrings(question, strings);
  }
  stablePasses = strings.size === before ? stablePasses + 1 : 0;
}

const sources = [...strings].filter(Boolean).sort((a, b) => a.localeCompare(b, "de"));
const manifest: Record<string, string> = {};
for (const source of sources) {
  const key = "b_" + createHash("sha256").update(source).digest("hex").slice(0, 16);
  if (manifest[key] && manifest[key] !== source) throw new Error(`Hash collision for ${key}`);
  manifest[key] = source;
}

const entries = Object.entries(manifest);
const batchSize = 20;
const queue = [];
for (let index = 0; index < entries.length; index += batchSize) {
  queue.push({
    id: `biologie-${String(queue.length + 1).padStart(3, "0")}`,
    items: Object.fromEntries(entries.slice(index, index + batchSize)),
  });
}

const outputDir = path.resolve(process.argv[2] ?? "translation-work/biologie-test");
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "source-manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ generators: generators.length, strings: entries.length, batches: queue.length, outputDir }));
