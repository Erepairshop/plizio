import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type ResultRow = {
  id: string;
  status: string;
  translations?: Record<string, string>;
};

const root = path.resolve(process.argv[2] ?? "translation-work/biologie-test");
const lang = process.argv[3] ?? "hu";
const outputDir = path.resolve(process.argv[4] ?? `translation-work/biologie-test/repair2-${lang}`);
const manifest = JSON.parse(await readFile(path.join(root, "source-manifest.json"), "utf8")) as Record<string, string>;
const resultFiles = [
  path.join(root, `result-${lang}.jsonl`),
  path.join(root, `repair-${lang}`, `result-${lang}.jsonl`),
];
const translated: Record<string, string> = {};
for (const resultFile of resultFiles) {
  try {
    const rows = (await readFile(resultFile, "utf8"))
      .split(/\r?\n/)
      .filter(Boolean)
      .map(line => JSON.parse(line) as ResultRow);
    const latest = new Map<string, ResultRow>();
    for (const row of rows) latest.set(row.id, row);
    for (const row of latest.values()) {
      if (row.status === "completed" && row.translations) Object.assign(translated, row.translations);
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT" || resultFile === resultFiles[0]) throw error;
  }
}

const germanGrammar = /\b(?:Welche|Welcher|Welches|Warum|Erkl\u00e4re|Nenne|Ordne|Wodurch|Woraus|Beschreibe|Vergleiche|Kennzeichne|Was|Wie|Wer|Wo|Der|Die|Das|Den|Dem|Ein|Eine|Einen|Einem|Einer|Und|Oder|Ist|Sind|Hat|Haben|F\u00fcr|Durch|Wird|Werden|Unter|Keine|Kein|Zur|Zum|Des)\b/i;
const candidates = Object.entries(manifest).filter(([key]) => germanGrammar.test(translated[key] ?? ""));
const queue = [];
for (let offset = 0; offset < candidates.length; offset += 24) {
  queue.push({
    id: `biologie-german-repair-${lang}-${String(offset / 24 + 1).padStart(3, "0")}`,
    items: Object.fromEntries(candidates.slice(offset, offset + 24)),
  });
}
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ lang, candidates: candidates.length, batches: queue.length, outputDir }));
