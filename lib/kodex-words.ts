export type KodexCategory = {
  key: string;
  emoji: string;
  label: Record<string, string>;
};

export const CATEGORIES: KodexCategory[] = [
  { key: "animals", emoji: "🐾", label: { hu: "Állatok", de: "Tiere", en: "Animals", ro: "Animale" } },
  { key: "food",    emoji: "🍕", label: { hu: "Ételek",  de: "Essen",  en: "Food",    ro: "Mâncare" } },
  { key: "sports",  emoji: "⚽", label: { hu: "Sport",   de: "Sport",  en: "Sports",  ro: "Sport" } },
  { key: "cities",  emoji: "🏙️", label: { hu: "Városok", de: "Städte", en: "Cities",  ro: "Orașe" } },
  { key: "nature",  emoji: "🌿", label: { hu: "Természet", de: "Natur", en: "Nature", ro: "Natură" } },
];

const WORDS_HU: Record<string, string[]> = {
  animals: [
    "KUTYA", "MACSKA", "TIGRIS", "ELEFÁNT", "ZSIRÁF", "DELFIN", "PINGVIN",
    "NYÚL", "MEDVE", "FARKAS", "GEPÁRD", "GORILLA", "ZEBRA", "PAPAGÁJ",
    "KROKODIL", "TEKNŐS", "OROSZLÁN", "PELIKÁN", "BÖLÉNY", "HIÉNA",
  ],
  food: [
    "KENYÉR", "SAJT", "ALMA", "KÖRTE", "BARACK", "PIZZA", "NARANCS",
    "SZŐLŐ", "MANGÓ", "TORTA", "LEKVÁR", "GOMBA", "KOLBÁSZ", "PAPRIKA",
    "PARADICSOM", "KAKAÓ", "CITROM", "ANANÁSZ", "FOKHAGYMA", "CUKOR",
  ],
  sports: [
    "FOCI", "TENISZ", "ÚSZÁS", "FUTÁS", "KARATE", "RÖPLABDA", "KERÉKPÁR",
    "KÉZILABDA", "JUDO", "VÍVÁS", "GOLF", "EVEZÉS", "ÍJÁSZAT", "LOVAGLÁS",
  ],
  cities: [
    "BUDAPEST", "DEBRECEN", "PÉCS", "MISKOLC", "GYŐR", "SZEGED", "EGER",
    "SOPRON", "VESZPRÉM", "KECSKEMÉT", "NYÍREGYHÁZA", "SZOLNOK", "TATABÁNYA",
  ],
  nature: [
    "ERDŐ", "FOLYÓ", "HEGY", "VÖLGY", "TENGER", "VULKÁN", "SIVATAG",
    "DZSUNGEL", "VÍZESÉS", "GLECCSER", "SZIKLA", "TUNDRA", "LAGÚNA",
    "PUSZTA", "MOCSÁR", "SZIKLÁS", "FELHŐ", "VIHAR",
  ],
};

const WORDS_DE: Record<string, string[]> = {
  animals: [
    "KATZE", "HUND", "TIGER", "ELEFANT", "GIRAFFE", "DELPHIN", "PINGUIN",
    "HASE", "WOLF", "GEPARD", "GORILLA", "ZEBRA", "PAPAGEI", "KROKODIL",
    "SCHILDKROTE", "PELIKAN", "LÖWE", "BISON", "HYÄNE", "NASHORN",
  ],
  food: [
    "BROT", "KÄSE", "APFEL", "BIRNE", "PFIRSICH", "PIZZA", "ORANGE",
    "TRAUBE", "MANGO", "TORTE", "MARMELADE", "PILZE", "WURST", "PAPRIKA",
    "TOMATE", "SCHOKOLADE", "ZITRONE", "ANANAS", "KNOBLAUCH", "ZUCKER",
  ],
  sports: [
    "TENNIS", "SCHWIMMEN", "LAUFEN", "KARATE", "VOLLEYBALL", "RADFAHREN",
    "HANDBALL", "JUDO", "SEGELN", "GOLF", "RUDERN", "FECHTEN", "BOGENSCHIESSEN",
  ],
  cities: [
    "BERLIN", "MÜNCHEN", "HAMBURG", "KÖLN", "FRANKFURT", "DÜSSELDORF",
    "STUTTGART", "HANNOVER", "NÜRNBERG", "WIEN", "ZÜRICH", "BERN",
  ],
  nature: [
    "WALD", "FLUSS", "BERG", "TAL", "MEER", "VULKAN", "WÜSTE",
    "DSCHUNGEL", "WASSERFALL", "GLETSCHER", "FELSEN", "TUNDRA", "LAGUNE",
    "STEPPE", "MOOR", "WOLKE", "STURM",
  ],
};

const WORDS_EN: Record<string, string[]> = {
  animals: [
    "CAT", "DOG", "TIGER", "ELEPHANT", "GIRAFFE", "DOLPHIN", "PENGUIN",
    "RABBIT", "BEAR", "WOLF", "CHEETAH", "GORILLA", "ZEBRA", "PARROT",
    "CROCODILE", "TURTLE", "LION", "PELICAN", "BISON", "HYENA",
  ],
  food: [
    "BREAD", "CHEESE", "APPLE", "PEAR", "PEACH", "PIZZA", "ORANGE",
    "GRAPE", "MANGO", "CAKE", "JAM", "MUSHROOM", "SAUSAGE", "PEPPER",
    "TOMATO", "CHOCOLATE", "LEMON", "PINEAPPLE", "GARLIC", "SUGAR",
  ],
  sports: [
    "TENNIS", "SWIMMING", "RUNNING", "KARATE", "VOLLEYBALL", "CYCLING",
    "HANDBALL", "JUDO", "SAILING", "GOLF", "ROWING", "FENCING", "ARCHERY",
  ],
  cities: [
    "LONDON", "PARIS", "BERLIN", "ROME", "MADRID", "TOKYO", "SYDNEY",
    "MOSCOW", "PRAGUE", "VIENNA", "BUDAPEST", "AMSTERDAM", "BRUSSELS",
  ],
  nature: [
    "FOREST", "RIVER", "MOUNTAIN", "VALLEY", "OCEAN", "VOLCANO", "DESERT",
    "JUNGLE", "WATERFALL", "GLACIER", "CANYON", "TUNDRA", "LAGOON",
    "PRAIRIE", "SWAMP", "CLOUD", "STORM",
  ],
};

const WORDS_RO: Record<string, string[]> = {
  animals: [
    "PISICĂ", "CÂINE", "TIGRU", "ELEFANT", "GIRAFĂ", "DELFIN", "PINGUIN",
    "IEPURE", "URS", "GHEPARD", "GORILĂ", "ZEBRĂ", "PAPAGAL", "CROCODIL",
    "ȚESTOASĂ", "PELICAN", "LEU", "BIZON", "HIENA", "RINOCER",
  ],
  food: [
    "PÂINE", "BRÂNZĂ", "MĂR", "PARĂ", "PIERSICĂ", "PIZZA", "PORTOCALĂ",
    "STRUGURI", "MANGO", "TORT", "GEM", "CIUPERCĂ", "CÂRNAȚI", "ARDEI",
    "ROȘIE", "CIOCOLATĂ", "LĂMÂIE", "ANANAS", "USTUROI", "ZAHĂR",
  ],
  sports: [
    "TENIS", "ÎNOT", "ALERGARE", "KARATE", "VOLEI", "CICLISM",
    "HANDBAL", "JUDO", "NAVIGAȚIE", "GOLF", "CANOTAJ", "SCRIMĂ", "TIR CU ARCUL",
  ],
  cities: [
    "BUCUREȘTI", "LONDON", "PARIS", "BERLIN", "ROMA", "MADRID", "TOKYO",
    "MOSCOVA", "PRAGA", "VIENA", "AMSTERDAM", "BRUXELLES",
  ],
  nature: [
    "PĂDURE", "RÂU", "MUNTE", "VALE", "OCEAN", "VULCAN", "DEȘERT",
    "JUNGLĂ", "CASCADĂ", "GHEȚAR", "CANION", "TUNDRĂ", "LAGUNĂR",
    "STEPĂ", "MLAȘTINĂ", "NOR", "FURTUNĂ",
  ],
};

const ALL_WORDS: Record<string, Record<string, string[]>> = {
  hu: WORDS_HU,
  de: WORDS_DE,
  en: WORDS_EN,
  ro: WORDS_RO,
};

export function getRandomWord(lang: string): { word: string; category: KodexCategory } {
  const words = ALL_WORDS[lang] || ALL_WORDS.en;
  const catIdx = Math.floor(Math.random() * CATEGORIES.length);
  const category = CATEGORIES[catIdx];
  const wordList = words[category.key];
  const word = wordList[Math.floor(Math.random() * wordList.length)];
  return { word, category };
}

// Extra special-character keys shown below the main keyboard for each language
export function getSpecialKeys(lang: string): string[] {
  switch (lang) {
    case "hu": return ["Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    case "de": return ["Ä", "Ö", "Ü"];
    case "ro": return ["Ă", "Â", "Î", "Ș", "Ț"];
    default:   return [];
  }
}
