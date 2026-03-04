// Word Hunt — multilingual word lists per level
// Words are hidden in a letter grid; player finds them by swiping/tapping adjacent letters

export type WHLang = "en" | "hu" | "de" | "ro";

// Words grouped by difficulty tier (short → long)
const WORDS_EN: Record<number, string[]> = {
  1: ["CAT", "DOG", "SUN", "HAT", "RUN", "CUP", "BIG", "RED", "TOP", "BOX"],
  2: ["BIRD", "FISH", "JUMP", "LOVE", "GAME", "FIRE", "RAIN", "WIND", "LEAF", "ROCK"],
  3: ["PLANT", "FLAME", "SEVEN", "OCEAN", "STONE", "NIGHT", "LIGHT", "QUICK", "BRAVE", "CLOUD"],
  4: ["BRIDGE", "PLANET", "FOREST", "MIRROR", "CASTLE", "DRAGON", "FRIEND", "JUNGLE", "ROCKET", "SILVER"],
  5: ["CAPTAIN", "CRYSTAL", "MYSTERY", "THUNDER", "DIAMOND", "HISTORY", "JOURNEY", "LIBRARY", "PATTERN", "PICTURE"],
};

const WORDS_HU: Record<number, string[]> = {
  1: ["KUT", "HAZ", "FAK", "KOR", "FEL", "SOK", "JEL", "KAR", "LAP", "FUT"],
  2: ["EGÉR", "HOLD", "SZÉL", "HANG", "SZEM", "KERT", "BOLT", "NYAR", "TEST", "FOLD"],
  3: ["ÁLOM", "TÜDŐ", "KÖNYV", "ERDŐ", "FOLYÓ", "SZÍN", "TÁSKA", "LEVÉL", "CSEND", "VONAL"],
  4: ["VIRÁG", "MADÁR", "POHÁR", "ISKOLA", "ABLAK", "BARÁT", "KÖNYÖK", "SZEKÉR", "ASZTAL", "KALAND"],
  5: ["KONYHA", "HETVEN", "VÖLGY", "UTAZÁS", "KASTÉLY", "TENGER", "HARANG", "NYOMÁS", "FELHŐ", "LABDA"],
};

const WORDS_DE: Record<number, string[]> = {
  1: ["HUND", "BAUM", "HAUS", "SONNE", "KIND", "BROT", "GRAS", "MOND", "FREI", "WILD"],
  2: ["HERZ", "WALD", "MEER", "BLATT", "NACHT", "LICHT", "WIND", "STEIN", "HAND", "GOLD"],
  3: ["BLUME", "VOGEL", "WASSER", "STURM", "FEUER", "TRAUM", "STERN", "WOLKE", "KRAFT", "BRÜCKE"],
  4: ["SCHULE", "FREUND", "HIMMEL", "STILLE", "LÖSUNG", "TEMPEL", "HELDEN", "KRIEGE", "DRACHE", "QUELLE"],
  5: ["MÄRCHEN", "KRISTAL", "GEHEIMNIS", "REISE", "GEDANKE", "FREUDE", "WEISHEIT", "STÄRKE", "FRIEDEN", "SCHLOSS"],
};

const WORDS_RO: Record<number, string[]> = {
  1: ["CAL", "ZOR", "FOC", "APE", "NOR", "PAD", "MER", "DOR", "COD", "VIN"],
  2: ["LUNA", "SOARE", "OARE", "DRUM", "NORI", "MARE", "FIER", "VANT", "BLOC", "DEAL"],
  3: ["FLOARE", "PADURE", "MUNTE", "STELE", "SUFLET", "VREME", "PIATRA", "VERDE", "ALBAS", "ROTAT"],
  4: ["CASTEL", "DRAGON", "PRINTE", "SCOALA", "PRIETEN", "JUMATE", "PAMANT", "LUMINA", "CRISTAL", "MUZICA"],
  5: ["CALATOR", "MISTER", "TREZIRE", "ENERGIE", "VICTORI", "PLANETA", "COPILUL", "CAMPION", "ORIZONT", "GANDURI"],
};

const ALL_WORDS: Record<WHLang, Record<number, string[]>> = {
  en: WORDS_EN,
  hu: WORDS_HU,
  de: WORDS_DE,
  ro: WORDS_RO,
};

// Returns `count` random words for the given tier (1-5) and language
export function getWordsForLevel(lang: WHLang, tier: number, count: number): string[] {
  const pool = ALL_WORDS[lang]?.[tier] ?? ALL_WORDS.en[tier];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// All letters that can appear as filler (uppercase, language-safe)
export const FILLER_LETTERS: Record<WHLang, string[]> = {
  en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  hu: "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÖŐÚÜŰ".split(""),
  de: "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split(""),
  ro: "ABCDEFGHIJKLMNOPQRSTUVWXYZĂÂÎȘȚ".split(""),
};
