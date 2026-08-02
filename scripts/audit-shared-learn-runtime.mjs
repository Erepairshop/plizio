import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const rel = (...parts) => path.join(root, ...parts);
const read = (...parts) => fs.readFileSync(rel(...parts), "utf8");

const failures = [];

function fail(message) {
  failures.push(message);
}

function assertIncludes(file, needle, message) {
  const text = read(file);
  if (!text.includes(needle)) fail(`${file}: ${message}`);
}

function assertNoDuplicateSvgIds(file) {
  const text = read(file);
  const ids = [...text.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
  const seen = new Set();
  const dupes = new Set();
  for (const id of ids) {
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  }
  if (dupes.size > 0) fail(`${file}: duplicate SVG id(s): ${[...dupes].join(", ")}`);
}

function assertStorageGuard(file) {
  const text = read(file);
  const directAccesses = [...text.matchAll(/(?<!window\.)\blocalStorage\./g)];
  if (directAccesses.length > 0) fail(`${file}: localStorage access must be window-scoped and guarded`);
}

function assertGameCases(file, keys) {
  const text = read(file);
  for (const key of keys) {
    if (!text.includes(`case "${key}"`)) fail(`${file}: missing game case "${key}"`);
  }
  assertIncludes(file, "GameUnavailable", "must route bad/unsupported content to GameUnavailable");
}

function assertTimerRegistryUse(file) {
  const text = read(file);
  if (text.includes("setTimeout(") && !text.includes("useTimeoutRegistry")) {
    fail(`${file}: setTimeout used without shared timeout registry`);
  }
}

assertGameCases("components/astro-games/M2Engine.tsx", [
  "tap-match",
  "category-rush",
  "memory-pairs",
  "shape-spotter",
  "quick-tap",
  "bubble-choice",
  "speed-match",
  "true-false-blitz",
  "word-chain",
]);

assertGameCases("components/astro-games/M3Engine.tsx", [
  "drag-sort",
  "timeline-slider",
  "pattern-finish",
  "count-catch",
  "sound-match",
  "fill-blank",
  "mcq4-explanation",
  "sort-puzzle",
  "gap-fill-story",
]);

for (const file of [
  "components/QuizEngine.tsx",
  "components/LanguageTestGame.tsx",
  "components/DynamicExplorer.tsx",
  "components/VisualLab.tsx",
  "components/InteractiveEngine.tsx",
  "app/astro-biologie/games/ExplorerEngine.tsx",
]) {
  assertStorageGuard(file);
  assertTimerRegistryUse(file);
}

assertNoDuplicateSvgIds("components/TopicSvgRenderer.tsx");
assertIncludes("components/QuizEngine.tsx", "role=\"alert\"", "empty quiz state should be visible");
assertIncludes("components/VisualLab.tsx", "role=\"dialog\"", "overlay should expose dialog semantics");
assertIncludes("components/VisualLab.tsx", "event.key === \"Escape\"", "overlay should close on Escape");

if (failures.length > 0) {
  console.error("Shared Learn runtime audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Shared Learn runtime audit passed.");
