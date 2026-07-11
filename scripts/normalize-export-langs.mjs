import { opendir, open, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve(process.env.OUT_DIR || "out");
const LANGS = new Set(["de", "en", "fr", "hr", "hu", "ro", "tr"]);
const HTML_LANG_RE = /<html\b([^>]*?)\blang=(['"])[^'"]*\2([^>]*)>/i;

async function* walk(dir) {
  const entries = await opendir(dir);
  for await (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(fullPath);
    else if (entry.isFile() && entry.name === "index.html") yield fullPath;
  }
}

let checked = 0;
let fixed = 0;

for (const lang of LANGS) {
  const langDir = path.join(OUT_DIR, lang);
  try {
    for await (const filePath of walk(langDir)) {
      checked += 1;
      const handle = await open(filePath, "r");
      const probe = Buffer.alloc(1024);
      const { bytesRead } = await handle.read(probe, 0, probe.length, 0);
      await handle.close();
      const head = probe.toString("utf8", 0, bytesRead);
      const match = head.match(HTML_LANG_RE);
      if (!match || match[0].includes(`lang="${lang}"`) || match[0].includes(`lang='${lang}'`)) continue;

      const html = await readFile(filePath, "utf8");
      const normalized = html.replace(HTML_LANG_RE, `<html$1lang=$2${lang}$2$3>`);
      if (normalized !== html) {
        await writeFile(filePath, normalized);
        fixed += 1;
      }
    }
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

console.log(`HTML lang normalization: checked ${checked}, fixed ${fixed}`);
