import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);
const generated = pickModule(await import("../../lib/sachkundeQuestionTranslations.generated"));
const table = generated.SACHKUNDE_QUESTION_TRANSLATIONS.hu as Record<string, string>;
const germanLeak = /\b(?:Was|Wie|Wo|Wer|Welche|Welcher|Welches|Wozu|Wohin|Womit|Woraus|Warum|Ordne|Erkläre|Nenne|Kreislauf|Richtig|Aufgabe|Antwort|Verdunstung|Niederschlag)\b/;

const sources = Object.entries(table)
  .filter(([source, target]) => germanLeak.test(target) || (source === target && germanLeak.test(source)))
  .map(([source]) => source)
  .sort((a, b) => a.localeCompare(b, "de"));
const manifest: Record<string, string> = {};
for (const source of sources) {
  manifest["sr2_" + createHash("sha256").update(source).digest("hex").slice(0, 16)] = source;
}
const entries = Object.entries(manifest);
const queue = [];
for (let index = 0; index < entries.length; index += 20) {
  queue.push({
    id: `sachkunde-hu-repair2-${String(queue.length + 1).padStart(3, "0")}`,
    items: Object.fromEntries(entries.slice(index, index + 20)),
  });
}
const outputDir = path.resolve(process.argv[2] ?? "translation-work/sachkunde-test-repair2-hu");
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "source-manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
await writeFile(path.join(outputDir, "queue.json"), JSON.stringify(queue, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ missingHungarianQualityStrings: entries.length, batches: queue.length, outputDir }));
