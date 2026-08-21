import manifestJson from "../translation-work/ai-test-k78/source-manifest.json";
import overlayJson from "../lib/aiK78TranslationOverlay.json";

const manifest = manifestJson as Record<string, string>;
const expected = new Set(Object.values(manifest));
const overlay = overlayJson as Record<string, Record<string, string>>;
const errors: string[] = [];

for (const lang of ["de", "hu", "ro"]) {
  const values = overlay[lang] || {};
  const keys = new Set(Object.keys(values));
  for (const source of expected) {
    if (!keys.has(source)) errors.push(`${lang}: missing source ${source}`);
  }
  for (const source of keys) {
    if (!expected.has(source)) errors.push(`${lang}: extra source ${source}`);
    const translated = values[source];
    if (!translated?.trim()) errors.push(`${lang}: blank translation for ${source}`);
    if (/\uFFFD|Ã.|Â.|â€|ðŸ/.test(translated)) errors.push(`${lang}: broken UTF-8 for ${source}`);
    if (lang === "ro" && /[şţŞŢ]/.test(translated)) errors.push(`${lang}: legacy cedilla spelling for ${source}`);
    if (/fordítás vége|end of translation|ende der übersetzung|sfârșitul traducerii/i.test(translated)) {
      errors.push(`${lang}: translator commentary for ${source}`);
    }
  }
  const unchanged = [...keys].filter((source) => values[source] === source).length;
  console.log(`${lang}: ${keys.size} translations, ${unchanged} unchanged technical/proper-name strings.`);
}

if (errors.length) {
  console.error(errors.slice(0, 100).join("\n"));
  process.exit(1);
}
console.log(`AI K7-K8 translation overlay audit passed: ${expected.size} sources x 3 languages.`);
