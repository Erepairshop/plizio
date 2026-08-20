import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type ResultRow = {
  id: string;
  status: string;
  translations?: Record<string, string>;
};

const root = path.resolve(process.argv[2] ?? "translation-work/biologie-test");
const lang = process.argv[3] ?? "hu";
const outputDir = path.resolve(process.argv[4] ?? `translation-work/biologie-test/repair-${lang}`);
const manifest = JSON.parse(await readFile(path.join(root, "source-manifest.json"), "utf8")) as Record<string, string>;
const rows = (await readFile(path.join(root, `result-${lang}.jsonl`), "utf8"))
  .split(/\r?\n/)
  .filter(Boolean)
  .map(line => JSON.parse(line) as ResultRow);
const latest = new Map<string, ResultRow>();
for (const row of rows) latest.set(row.id, row);
const translated: Record<string, string> = {};
for (const row of latest.values()) {
  if (row.status === "completed" && row.translations) Object.assign(translated, row.translations);
}

const keyedCandidates = Object.entries(manifest).filter(([key, source]) => translated[key] === source);
const queue = [];
for (let offset = 0; offset < keyedCandidates.length; offset += 24) {
  queue.push({
    id: `biologie-repair-${lang}-${String(offset / 24 + 1).padStart(3, "0")}`,
    items: Object.fromEntries(keyedCandidates.slice(offset, offset + 24)),
  });
}
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ lang, candidates: keyedCandidates.length, batches: queue.length, outputDir }));
