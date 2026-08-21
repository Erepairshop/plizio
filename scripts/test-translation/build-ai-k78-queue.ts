import { mkdirSync, writeFileSync } from "node:fs";
import { AI_K7_CURRICULUM } from "../../lib/aiCurriculum7";
import { AI_K8_CURRICULUM } from "../../lib/aiCurriculum8";

type Entry = { key: string; source: string };
type RuntimeQuestion = {
  type: "mcq" | "typing";
  _lang?: Record<string, { q?: string; opts?: string[]; ans?: string }>;
};

const entries = new Map<string, Entry>();

function add(source: unknown) {
  if (typeof source !== "string" || !source.trim()) return;
  const clean = source.trim();
  if (!entries.has(clean)) {
    entries.set(clean, { key: `s${String(entries.size + 1).padStart(4, "0")}`, source: clean });
  }
}

for (const curriculum of [AI_K7_CURRICULUM, AI_K8_CURRICULUM]) {
  for (const theme of curriculum) {
    for (const subtopic of theme.subtopics) {
      const localizedName = subtopic.name as unknown as Record<string, string>;
      add(localizedName?.en);
      for (const question of subtopic.questions as RuntimeQuestion[]) {
        const english = question._lang?.en;
        add(english?.q);
        english?.opts?.forEach(add);
        add(english?.ans);
      }
    }
  }
}

const values = [...entries.values()];
const batchSize = 30;
const queue = [];
for (let offset = 0; offset < values.length; offset += batchSize) {
  const batch = values.slice(offset, offset + batchSize);
  queue.push({
    id: `ai-k78-${String(queue.length + 1).padStart(3, "0")}`,
    items: Object.fromEntries(batch.map(({ key, source }) => [key, source])),
  });
}

const outputDir = "translation-work/ai-test-k78";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/queue.json`, `${JSON.stringify(queue, null, 2)}\n`, "utf8");
writeFileSync(
  `${outputDir}/source-manifest.json`,
  `${JSON.stringify(Object.fromEntries(values.map(({ key, source }) => [key, source])), null, 2)}\n`,
  "utf8",
);
console.log(`AI K7-K8 queue: ${values.length} unique English strings in ${queue.length} batches.`);
