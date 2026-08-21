import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

await import("../../lib/kemiaRegistration");

const curriculumModules = await Promise.all([
  import("../../lib/kemiaCurriculum5"),
  import("../../lib/kemiaCurriculum6"),
  import("../../lib/kemiaCurriculum7"),
  import("../../lib/kemiaCurriculum8"),
]);

type Question = {
  question?: string;
  options?: string[];
  answer?: string | string[];
};

const strings = new Set<string>();

function add(value: unknown) {
  if (typeof value === "string" && value.trim()) strings.add(value.trim());
}

for (let gradeIndex = 0; gradeIndex < curriculumModules.length; gradeIndex += 1) {
  const grade = gradeIndex + 5;
  const module = curriculumModules[gradeIndex] as Record<string, unknown>;
  const curriculum = module[`K${grade}_CURRICULUM`] as Array<{
    name: string | Record<string, string>;
    subtopics: Array<{ name: string | Record<string, string> }>;
  }>;
  const generatorMap = module[`K${grade}_GENERATOR_MAP`] as Record<string, Record<string, (seed?: number) => Question[]>>;

  for (const theme of curriculum) {
    add(typeof theme.name === "string" ? theme.name : theme.name.de);
    for (const subtopic of theme.subtopics) add(typeof subtopic.name === "string" ? subtopic.name : subtopic.name.de);
  }

  for (const themeGenerators of Object.values(generatorMap)) {
    for (const generator of Object.values(themeGenerators)) {
      for (let seed = 0; seed < 32; seed += 1) {
        for (const question of generator(seed)) {
          add(question.question);
          question.options?.forEach(add);
          if (Array.isArray(question.answer)) question.answer.forEach(add);
          else add(question.answer);
        }
      }
    }
  }
}

const ordered = [...strings].sort((a, b) => a.localeCompare(b, "de"));
const manifest = Object.fromEntries(
  ordered.map((source) => [`k_${createHash("sha256").update(source).digest("hex").slice(0, 16)}`, source]),
);
if (Object.keys(manifest).length !== ordered.length) throw new Error("Translation key collision");

const batchSize = 36;
const entries = Object.entries(manifest);
const queue = [];
for (let offset = 0; offset < entries.length; offset += batchSize) {
  queue.push({
    id: `kemia-${String(offset / batchSize + 1).padStart(3, "0")}`,
    items: Object.fromEntries(entries.slice(offset, offset + batchSize)),
  });
}

const outputDir = path.resolve(process.argv[2] ?? "translation-work/kemia-test");
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "source-manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ strings: ordered.length, batches: queue.length, outputDir }));
