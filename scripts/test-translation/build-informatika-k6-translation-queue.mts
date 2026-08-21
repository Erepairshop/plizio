import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type Lang = "hu" | "ro" | "en";
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const missingFiles: Record<Lang, number[]> = {
  hu: Array.from({ length: 16 }, (_, index) => index + 13),
  ro: [13, 14, 25, 26, 27],
  en: [13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27],
};
const batchSize = 24;
const outputRoot = path.join("translation-work", "informatika-k6");

function collectStrings(value: JsonValue, target: Set<string>): void {
  if (typeof value === "string") {
    if (value.trim()) target.add(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, target);
    return;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, target);
  }
}

function keyFor(source: string): string {
  return `i_${createHash("sha256").update(source).digest("hex").slice(0, 20)}`;
}

await mkdir(outputRoot, { recursive: true });
for (const [lang, files] of Object.entries(missingFiles) as [Lang, number[]][]) {
  const strings = new Set<string>();
  for (const fileId of files) {
    const sourcePath = path.join("data", "informatika", "class-6", "de", `${fileId}.json`);
    collectStrings(JSON.parse(await readFile(sourcePath, "utf8")) as JsonValue, strings);
  }
  const manifest = Object.fromEntries(
    [...strings].sort((left, right) => left.localeCompare(right, "de")).map((source) => [keyFor(source), source]),
  );
  const entries = Object.entries(manifest);
  const queue = [];
  for (let offset = 0; offset < entries.length; offset += batchSize) {
    queue.push({
      id: `${lang}-${String(offset / batchSize + 1).padStart(3, "0")}`,
      items: Object.fromEntries(entries.slice(offset, offset + batchSize)),
    });
  }
  await writeFile(path.join(outputRoot, `source-manifest-${lang}.json`), `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(path.join(outputRoot, `queue-${lang}.json`), `${JSON.stringify(queue, null, 2)}\n`);
  console.log(JSON.stringify({ lang, files: files.length, strings: entries.length, batches: queue.length }));
}
await writeFile(path.join(outputRoot, "missing-files.json"), `${JSON.stringify(missingFiles, null, 2)}\n`);
