export type DeductionLocale = "en" | "hu" | "de" | "ro";

export interface DeductionLevelTemplate {
  level: number;
  badge: string;
  title: Record<DeductionLocale, string>;
  rows: string[];
  columns: string[];
  cluePacks: Record<DeductionLocale, string[][]>;
  solution: number[];
}

export interface DeductionLevelView {
  level: number;
  badge: string;
  title: string;
  rows: string[];
  columns: string[];
  clues: string[];
  solution: number[];
}

export function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffleWithSeed<T>(items: T[], seed: number): T[] {
  const out = [...items];
  const rand = mulberry32(seed || 1);
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function materializeDeductionLevels(
  templates: DeductionLevelTemplate[],
  lang: DeductionLocale,
  runSeed: number,
): DeductionLevelView[] {
  return templates.map((template) => {
    // Choose which pack to use
    const packs = template.cluePacks[lang] ?? template.cluePacks.en;
    const packSeed = hashString(`${runSeed}:${template.level}:pack`);
    const packIndex = (packSeed >>> 0) % packs.length;
    const chosenPack = packs[packIndex];

    // Shuffle the clues within that pack
    const shuffleSeed = hashString(`${runSeed}:${template.level}:shuffle`);
    const finalClues = shuffleWithSeed(chosenPack, shuffleSeed);

    return {
      level: template.level,
      badge: template.badge,
      title: template.title[lang] ?? template.title.en,
      rows: [...template.rows],
      columns: [...template.columns],
      clues: finalClues,
      solution: [...template.solution],
    };
  });
}
