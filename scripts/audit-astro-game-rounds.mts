const registryFiles = [
  "ai", "biologie", "deutsch", "english", "geographie", "geschichte",
  "informatika", "kemia", "magyar", "math", "physik", "romana", "sachkunde",
];

const failures: string[] = [];

function validM2(key: string, round: any): boolean {
  if (!round) return false;
  switch (key) {
    case "tap-match": return round.left?.length > 0 && round.right?.length > 0 && round.correctPairs?.length > 0;
    case "category-rush": return round.categories?.length > 0 && round.items?.length > 0;
    case "memory-pairs": return round.pairs?.length > 0;
    case "shape-spotter": return round.shapes?.some((item: any) => item.isTarget) === true;
    case "quick-tap": return round.items?.some((item: any) => item.isTarget) === true;
    case "bubble-choice": return round.bubbles?.some((item: any) => item.isCorrect) === true;
    case "speed-match": return round.pairs?.some((item: any) => typeof item?.isMatch === "boolean") === true;
    case "true-false-blitz": return round.statements?.some((item: any) => typeof item?.isTrue === "boolean") === true;
    case "word-chain": return round.options?.length > 0 && Number.isInteger(round.correctIndex);
    default: return false;
  }
}

function validM3(key: string, round: any): boolean {
  if (!round) return false;
  switch (key) {
    case "drag-sort": return round.bins?.length > 0 && round.items?.length > 0;
    case "timeline-slider": return Boolean(round.axes?.x) && round.events?.length > 0;
    case "pattern-finish": return round.pattern?.length > 0 && round.options?.some((item: any) => item.isCorrect) === true;
    case "count-catch": return round.itemsToCount?.length > 0 && round.options?.some((item: any) => item.isCorrect) === true;
    case "sound-match": return Boolean(round.audioEmoji) && round.options?.some((item: any) => item.isCorrect) === true;
    case "fill-blank": return Boolean(round.sentenceParts) && round.options?.length > 0 && Number.isInteger(round.correctIndex);
    case "mcq4-explanation": return Boolean(round.question) && round.options?.length > 0 && Number.isInteger(round.correctIndex);
    case "sort-puzzle": return round.items?.length > 0 && round.correctOrder?.length > 0;
    case "gap-fill-story": return Boolean(round.story) && round.blanks?.length > 0;
    default: return false;
  }
}

for (const registry of registryFiles) {
  const raw = await import(`../lib/astro/${registry}GameRegistry.ts`);
  const mod = (raw.default ?? raw["module.exports"] ?? raw) as Record<string, any>;
  for (const [exportName, pools] of Object.entries(mod)) {
    if (!exportName.endsWith("_M2_POOLS") && !exportName.endsWith("_M3_POOLS")) continue;
    const validator = exportName.endsWith("_M2_POOLS") ? validM2 : validM3;
    for (const [gameKey, rounds] of Object.entries(pools as Record<string, any[]>)) {
      if (!Array.isArray(rounds) || rounds.length === 0) {
        failures.push(`${registry}.${gameKey}: empty rounds`);
        continue;
      }
      rounds.forEach((round, index) => {
        if (!validator(gameKey, round)) failures.push(`${registry}.${gameKey}[${index}]: rejected by shared engine guard`);
      });
    }
  }
}

if (failures.length > 0) {
  console.error(`Astro game round audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Astro game round audit passed for ${registryFiles.length} registries.`);
