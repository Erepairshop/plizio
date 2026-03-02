export type BadgeId = "vocals" | "shield" | "explorer" | "tracker" | "key";
export type KodexLevelType = "word" | "sentence" | "secretcode";

export type KodexCategory = {
  key: string;
  emoji: string;
  label: Record<string, string>;
};

export const BADGE_DEFS: Record<BadgeId, {
  emoji: string;
  name: Record<string, string>;
  desc: Record<string, string>;
}> = {
  vocals:   {
    emoji: "🎵",
    name: { hu: "Vokális", de: "Vokal", en: "Vocals", ro: "Vocale" },
    desc: { hu: "Minden magánhangzó feltárul", de: "Alle Vokale werden aufgedeckt", en: "All vowels revealed", ro: "Toate vocalele dezvăluite" },
  },
  shield:   {
    emoji: "🛡️",
    name: { hu: "Pajzs", de: "Schild", en: "Shield", ro: "Scut" },
    desc: { hu: "A következő hibás tipp nem számít életnek", de: "Nächste Fehltipp kostet kein Leben", en: "Next wrong guess costs no life", ro: "Urmatoarea greseală nu costă o viata" },
  },
  explorer: {
    emoji: "🗺️",
    name: { hu: "Felfedező", de: "Forscher", en: "Explorer", ro: "Explorator" },
    desc: { hu: "Kategória neve és emojija megjelenik", de: "Kategorie-Name und Emoji werden angezeigt", en: "Category name and emoji revealed", ro: "Numele și emoji-ul categoriei dezvăluite" },
  },
  tracker:  {
    emoji: "🔍",
    name: { hu: "Nyomkövető", de: "Spürhund", en: "Tracker", ro: "Urmăritor" },
    desc: { hu: "A leggyakoribb ismeretlen betű feltárul", de: "Häufigster unbekannter Buchstabe enthüllt", en: "Most common unknown letter revealed", ro: "Cea mai frecventă literă necunoscută dezvăluită" },
  },
  key:      {
    emoji: "🔓",
    name: { hu: "Kulcs", de: "Schlüssel", en: "Key", ro: "Cheie" },
    desc: { hu: "Egy véletlenszerű ismeretlen betű feltárul", de: "Ein zufälliger unbekannter Buchstabe enthüllt", en: "One random unknown letter revealed", ro: "O literă aleatorie necunoscută dezvăluită" },
  },
};

// Badge reward per level (levels 1-9 each give one badge, level 10 is secret code)
export const LEVEL_BADGE: Record<number, BadgeId> = {
  1: "vocals",
  2: "shield",
  3: "explorer",
  4: "tracker",
  5: "key",
  6: "vocals",
  7: "shield",
  8: "explorer",
  9: "tracker",
};

export const THEMES: Record<string, KodexCategory> = {
  animals: { key: "animals", emoji: "🐾", label: { hu: "Állatok",     de: "Tiere",          en: "Animals",     ro: "Animale" } },
  food:    { key: "food",    emoji: "🍕", label: { hu: "Ételek",      de: "Essen",           en: "Food",        ro: "Mâncare" } },
  sports:  { key: "sports",  emoji: "⚽", label: { hu: "Sport",       de: "Sport",           en: "Sports",      ro: "Sport" } },
  nature:  { key: "nature",  emoji: "🌿", label: { hu: "Természet",   de: "Natur",           en: "Nature",      ro: "Natură" } },
  tech:    { key: "tech",    emoji: "💻", label: { hu: "Technológia", de: "Technologie",     en: "Technology",  ro: "Tehnologie" } },
  film:    { key: "film",    emoji: "🎬", label: { hu: "Film & Zene", de: "Film & Musik",    en: "Film & Music",ro: "Film & Muzică" } },
  science: { key: "science", emoji: "🔬", label: { hu: "Tudomány",    de: "Wissenschaft",    en: "Science",     ro: "Știință" } },
  history: { key: "history", emoji: "🏛️", label: { hu: "Történelem",  de: "Geschichte",      en: "History",     ro: "Istorie" } },
  culture: { key: "culture", emoji: "🎭", label: { hu: "Kultúra",     de: "Kultur",          en: "Culture",     ro: "Cultură" } },
  secret:  { key: "secret",  emoji: "🔐", label: { hu: "Titkos Kód", de: "Geheimcode",      en: "Secret Code", ro: "Cod Secret" } },
};

export type LevelConfig = {
  levelNum: number;
  type: KodexLevelType;
  theme: KodexCategory;
  showCatEmoji: boolean;
  showCatName: boolean;
  lives: number;
  badgeReward?: BadgeId;
};

export const LEVEL_CONFIGS: LevelConfig[] = [
  { levelNum: 1,  type: "word",       theme: THEMES.animals, showCatEmoji: true,  showCatName: true,  lives: 6, badgeReward: "vocals"   },
  { levelNum: 2,  type: "word",       theme: THEMES.food,    showCatEmoji: true,  showCatName: true,  lives: 6, badgeReward: "shield"   },
  { levelNum: 3,  type: "word",       theme: THEMES.sports,  showCatEmoji: true,  showCatName: false, lives: 5, badgeReward: "explorer" },
  { levelNum: 4,  type: "sentence",   theme: THEMES.nature,  showCatEmoji: false, showCatName: true,  lives: 5, badgeReward: "tracker"  },
  { levelNum: 5,  type: "sentence",   theme: THEMES.tech,    showCatEmoji: false, showCatName: false, lives: 5, badgeReward: "key"      },
  { levelNum: 6,  type: "sentence",   theme: THEMES.film,    showCatEmoji: true,  showCatName: false, lives: 4, badgeReward: "vocals"   },
  { levelNum: 7,  type: "sentence",   theme: THEMES.science, showCatEmoji: false, showCatName: false, lives: 4, badgeReward: "shield"   },
  { levelNum: 8,  type: "sentence",   theme: THEMES.history, showCatEmoji: false, showCatName: true,  lives: 4, badgeReward: "explorer" },
  { levelNum: 9,  type: "sentence",   theme: THEMES.culture, showCatEmoji: false, showCatName: false, lives: 3, badgeReward: "tracker"  },
  { levelNum: 10, type: "secretcode", theme: THEMES.secret,  showCatEmoji: true,  showCatName: true,  lives: 3 },
];

export type SecretCodeData = {
  text: string;
  // 9 unique letters to reveal, one collected after each level 1-9
  revealLetters: string[];
};

const SECRET_CODES: Record<string, SecretCodeData> = {
  hu: {
    text: "A TUDÁS A LEGJOBB FEGYVER",
    revealLetters: ["T", "U", "Á", "L", "G", "J", "B", "F", "Y"],
  },
  de: {
    text: "DAS WISSEN ÖFFNET ALLE TÜREN",
    revealLetters: ["D", "S", "W", "I", "N", "Ö", "F", "L", "Ü"],
  },
  en: {
    text: "KNOWLEDGE IS THE BEST WEAPON",
    revealLetters: ["K", "N", "W", "L", "D", "G", "I", "H", "B"],
  },
  ro: {
    text: "CUNOAȘTEREA ESTE CEA MAI BUNĂ",
    revealLetters: ["C", "U", "N", "O", "Ș", "R", "S", "M", "I"],
  },
};

// ─── WORD DATA (levels 1-3) ────────────────────────────────────────────────────

const WORDS_HU: Record<string, string[]> = {
  animals: ["KUTYA", "MACSKA", "TIGRIS", "ELEFÁNT", "ZSIRÁF", "DELFIN", "PINGVIN", "NYÚL", "MEDVE", "FARKAS", "GEPÁRD", "GORILLA", "ZEBRA", "PAPAGÁJ", "KROKODIL", "TEKNŐS", "OROSZLÁN", "PELIKÁN", "BÖLÉNY", "HIÉNA"],
  food:    ["KENYÉR", "SAJT", "ALMA", "KÖRTE", "BARACK", "PIZZA", "NARANCS", "SZŐLŐ", "MANGÓ", "TORTA", "LEKVÁR", "GOMBA", "KOLBÁSZ", "PAPRIKA", "PARADICSOM", "KAKAÓ", "CITROM", "ANANÁSZ", "FOKHAGYMA", "CUKOR"],
  sports:  ["FOCI", "TENISZ", "ÚSZÁS", "FUTÁS", "KARATE", "RÖPLABDA", "KERÉKPÁR", "KÉZILABDA", "JUDO", "VÍVÁS", "GOLF", "EVEZÉS", "ÍJÁSZAT", "LOVAGLÁS"],
};
const WORDS_DE: Record<string, string[]> = {
  animals: ["KATZE", "HUND", "TIGER", "ELEFANT", "GIRAFFE", "DELPHIN", "PINGUIN", "HASE", "WOLF", "GEPARD", "GORILLA", "ZEBRA", "PAPAGEI", "KROKODIL", "LÖWE", "BISON", "HYÄNE", "NASHORN", "PELIKAN", "SCHILDKRÖTE"],
  food:    ["BROT", "KÄSE", "APFEL", "BIRNE", "PFIRSICH", "PIZZA", "ORANGE", "TRAUBE", "MANGO", "TORTE", "MARMELADE", "PILZE", "WURST", "PAPRIKA", "TOMATE", "SCHOKOLADE", "ZITRONE", "ANANAS", "KNOBLAUCH", "ZUCKER"],
  sports:  ["TENNIS", "SCHWIMMEN", "LAUFEN", "KARATE", "VOLLEYBALL", "RADFAHREN", "HANDBALL", "JUDO", "SEGELN", "GOLF", "RUDERN", "FECHTEN", "BOGENSCHIESSEN"],
};
const WORDS_EN: Record<string, string[]> = {
  animals: ["CAT", "DOG", "TIGER", "ELEPHANT", "GIRAFFE", "DOLPHIN", "PENGUIN", "RABBIT", "BEAR", "WOLF", "CHEETAH", "GORILLA", "ZEBRA", "PARROT", "CROCODILE", "TURTLE", "LION", "PELICAN", "BISON", "HYENA"],
  food:    ["BREAD", "CHEESE", "APPLE", "PEAR", "PEACH", "PIZZA", "ORANGE", "GRAPE", "MANGO", "CAKE", "JAM", "MUSHROOM", "SAUSAGE", "PEPPER", "TOMATO", "CHOCOLATE", "LEMON", "PINEAPPLE", "GARLIC", "SUGAR"],
  sports:  ["TENNIS", "SWIMMING", "RUNNING", "KARATE", "VOLLEYBALL", "CYCLING", "HANDBALL", "JUDO", "SAILING", "GOLF", "ROWING", "FENCING", "ARCHERY"],
};
const WORDS_RO: Record<string, string[]> = {
  animals: ["PISICĂ", "CÂINE", "TIGRU", "ELEFANT", "GIRAFĂ", "DELFIN", "PINGUIN", "IEPURE", "URS", "GHEPARD", "GORILĂ", "ZEBRĂ", "PAPAGAL", "CROCODIL", "ȚESTOASĂ", "PELICAN", "LEU", "BIZON", "HIENA", "RINOCER"],
  food:    ["PÂINE", "BRÂNZĂ", "MĂR", "PARĂ", "PIERSICĂ", "PIZZA", "PORTOCALĂ", "STRUGURI", "MANGO", "TORT", "GEM", "CIUPERCĂ", "CÂRNAȚI", "ARDEI", "ROȘIE", "CIOCOLATĂ", "LĂMÂIE", "ANANAS", "USTUROI", "ZAHĂR"],
  sports:  ["TENIS", "ÎNOT", "ALERGARE", "KARATE", "VOLEI", "CICLISM", "HANDBAL", "JUDO", "NAVIGAȚIE", "GOLF", "CANOTAJ", "SCRIMĂ", "TIR"],
};

// ─── SENTENCE DATA (levels 4-9) ───────────────────────────────────────────────

const SENTENCES_HU: Record<string, string[]> = {
  nature:  ["ZÖLD ERDŐ", "KÉK TENGER", "MAGAS HEGY", "MÉLY VÖLGY", "FEHÉR HÓ", "CSENDES TÓ", "FRISS LEVEGŐ", "MELEG NYÁR", "HIDEG TÉL", "ARANY MEZŐ"],
  tech:    ["OKOS TELEFON", "GYORS INTERNET", "DIGITÁLIS VILÁG", "BINÁRIS KÓD", "MESTERSÉGES INTELLIGENCIA", "KVANTUM SZÁMÍTÁS", "VIRTUÁLIS VALÓSÁG", "SZÁMÍTÓGÉP HÁLÓZAT", "ELEKTROMOS AUTÓ", "ADATBÁZIS RENDSZER"],
  film:    ["FILM ZENE TÁNC", "RITMUS BEAT DALLAM", "GITÁR DOB BASSZUS", "JAZZ BLUES SOUL", "OPERA DRÁMA SZÍN", "KAMERA FÉNY SZTÁR", "MUSICAL ÉNEK TÁNC", "ROCK POP METAL", "DRÁMA VÍGJÁTÉK FILM", "HANG KÉP ÉRZÉS"],
  science: ["ATOM ELEKTRON PROTON", "FÉNY HANG HULLÁM", "FÖLD HOLD NAP", "KÉMIA FIZIKA BIOLÓGIA", "GRAVITÁCIÓ TÖMEG ERŐ", "OXIGÉN SZÉN HIDROGÉN", "DNS RNS FEHÉRJE", "CSILLAG BOLYGÓ HOLD", "HŐMÉRSÉKLET NYOMÁS GÁZTÉR", "TÖMEG ERŐ TÉR"],
  history: ["RÓMA NAGY BIRODALOM VOLT", "GÖRÖG BÖLCS TANÍT MINDENT", "NAGY SÁNDOR VILÁG URA", "EGYIPTOM ŐSI TITKA ÉL", "KÍNA FALA RÉGEN ÉPÜL", "KÖZÉPKOR LOVAG ERŐS BÁTOR", "VIKINGEK TENGEREN MESSZE MENTEK", "HISTÓRIA MINDENT ELMOND EGYSZER", "HÁBORÚ BÉKE MINDIG VÁLTJA", "INDIA KULTÚRA CSODA REJT"],
  culture: ["KULTÚRA ÉRTÉKE MINDENKIÉ LEHET", "TÁNC ZENE ÉTEL ITAL", "ÜNNEP ÖRÖM NAGY FAMÍLIA", "MÚZEUM KÉPEK SZOBROK ÉLNEK", "IRODALOM VERSEK REGÉNY ÉLET", "VILÁG NÉPE MIND KÜLÖNBÖZIK", "GASZTRONÓMIA ÍZEK VILÁGA CSODA", "FILMEK KÖNYVEK KÉPZELET SZÁRNY", "SPORT KULTÚRA EGYÜTT JÁR", "HAGYOMÁNY MÚLT JELEN VAN"],
};
const SENTENCES_DE: Record<string, string[]> = {
  nature:  ["GRÜNER WALD", "BLAUES MEER", "HOHER BERG", "TIEFES TAL", "WEISSER SCHNEE", "STILLER SEE", "FRISCHE LUFT", "WARMER SOMMER", "KALTER WINTER", "GOLDENE WIESE"],
  tech:    ["SMARTES TELEFON", "SCHNELLES INTERNET", "DIGITALE WELT", "BINÄRER CODE", "KÜNSTLICHE INTELLIGENZ", "QUANTEN COMPUTER", "VIRTUELLE REALITÄT", "COMPUTER NETZWERK", "ELEKTRISCHES AUTO", "DATEN BANK"],
  film:    ["FILM MUSIK TANZ", "RHYTHMUS BEAT MELODIE", "GITARRE SCHLAGZEUG BASS", "JAZZ BLUES SOUL", "OPER DRAMA BÜHNE", "KAMERA LICHT STAR", "MUSICAL GESANG TANZ", "ROCK POP METAL", "DRAMA KOMÖDIE FILM", "KLANG BILD EMOTION"],
  science: ["ATOM ELEKTRON PROTON", "LICHT KLANG WELLE", "ERDE MOND SONNE", "CHEMIE PHYSIK BIOLOGIE", "GRAVITATION MASSE KRAFT", "SAUERSTOFF KOHLENSTOFF WASSERSTOFF", "DNA RNA PROTEIN", "STERN PLANET MOND", "TEMPERATUR DRUCK VOLUMEN", "MASSE KRAFT RAUM"],
  history: ["ROM GROSSES IMPERIUM WAR", "GRIECHISCHE WEISHEIT LEHRT ALLES", "ALEXANDER GROSSER WELTHERRSCHER WAR", "ÄGYPTEN ALTE GEHEIMNISSE LEBEN", "CHINAS MAUER EINST ERBAUT", "MITTELALTER RITTER STARK TAPFER", "WIKINGER BEREISTEN FERNE MEERE", "HISTORIA ERZÄHLT EINMAL ALLES", "KRIEG FRIEDEN WECHSELN SICH", "INDIEN KULTUR WUNDER BIRGT"],
  culture: ["KULTUR WERT GEHÖRT ALLEN", "TANZ MUSIK ESSEN TRINKEN", "FEST FREUDE GROSSE FAMILIE", "MUSEUM BILDER SKULPTUREN LEBEN", "LITERATUR VERSE ROMAN LEBEN", "WELTVÖLKER ALLE VERSCHIEDEN SIND", "GASTRONOMIE GESCHMACK WELT WUNDER", "FILME BÜCHER FANTASIE FLÜGEL", "SPORT KULTUR GEHEN ZUSAMMEN", "TRADITION VERGANGENHEIT GEGENWART ZUKUNFT"],
};
const SENTENCES_EN: Record<string, string[]> = {
  nature:  ["GREEN FOREST", "BLUE OCEAN", "HIGH MOUNTAIN", "DEEP VALLEY", "WHITE SNOW", "QUIET LAKE", "FRESH AIR", "WARM SUMMER", "COLD WINTER", "GOLDEN MEADOW"],
  tech:    ["SMART PHONE", "FAST INTERNET", "DIGITAL WORLD", "BINARY CODE", "ARTIFICIAL INTELLIGENCE", "QUANTUM COMPUTING", "VIRTUAL REALITY", "COMPUTER NETWORK", "ELECTRIC CAR", "DATABASE SYSTEM"],
  film:    ["FILM MUSIC DANCE", "RHYTHM BEAT MELODY", "GUITAR DRUMS BASS", "JAZZ BLUES SOUL", "OPERA DRAMA STAGE", "CAMERA LIGHT STAR", "MUSICAL SING DANCE", "ROCK POP METAL", "DRAMA COMEDY FILM", "SOUND IMAGE FEEL"],
  science: ["ATOM ELECTRON PROTON", "LIGHT SOUND WAVE", "EARTH MOON SUN", "CHEMISTRY PHYSICS BIOLOGY", "GRAVITY MASS FORCE", "OXYGEN CARBON HYDROGEN", "DNA RNA PROTEIN", "STAR PLANET MOON", "TEMPERATURE PRESSURE VOLUME", "MASS FORCE SPACE"],
  history: ["ROME WAS GREAT EMPIRE", "GREEK WISDOM TAUGHT EVERYTHING", "ALEXANDER GREAT WORLD RULER", "EGYPT OLD SECRETS LIVE", "CHINA WALL ONCE BUILT", "MEDIEVAL KNIGHT STRONG BRAVE", "VIKINGS SAILED FAR SEAS", "HISTORY TELLS ALL ONCE", "WAR PEACE REPLACE EACH", "INDIA CULTURE WONDER HOLDS"],
  culture: ["CULTURE VALUE BELONGS EVERYONE", "DANCE MUSIC FOOD DRINK", "FESTIVAL JOY GREAT FAMILY", "MUSEUM PAINTINGS SCULPTURES LIVE", "LITERATURE VERSE NOVEL LIFE", "WORLD PEOPLES ALL DIFFERENT", "GASTRONOMY TASTE WORLD WONDER", "FILMS BOOKS IMAGINATION WINGS", "SPORT CULTURE GO TOGETHER", "TRADITION PAST PRESENT FUTURE"],
};
const SENTENCES_RO: Record<string, string[]> = {
  nature:  ["PĂDURE VERDE", "OCEAN ALBASTRU", "MUNTE ÎNALT", "VALE ADÂNCĂ", "ZĂPADĂ ALBĂ", "LAC LINIȘTIT", "AER PROASPĂT", "VARĂ CALDĂ", "IARNĂ RECE", "CÂMPIE AURIE"],
  tech:    ["TELEFON INTELIGENT", "INTERNET RAPID", "LUME DIGITALĂ", "COD BINAR", "INTELIGENȚĂ ARTIFICIALĂ", "CALCUL CUANTIC", "REALITATE VIRTUALĂ", "REȚEA CALCULATOR", "MAȘINĂ ELECTRICĂ", "SISTEM DATE"],
  film:    ["FILM MUZICĂ DANS", "RITM BEAT MELODIE", "CHITARĂ TOBE BASS", "JAZZ BLUES SOUL", "OPERĂ DRAMĂ SCENĂ", "CAMERĂ LUMINI STEA", "MUSICAL CÂNTEC DANS", "ROCK POP METAL", "DRAMĂ COMEDIE FILM", "SUNET IMAGINE EMOȚIE"],
  science: ["ATOM ELECTRON PROTON", "LUMINĂ SUNET UNDĂ", "PĂMÂNT LUNĂ SOARE", "CHIMIE FIZICĂ BIOLOGIE", "GRAVITAȚIE MASĂ FORȚĂ", "OXIGEN CARBON HIDROGEN", "ADN ARN PROTEINĂ", "STEA PLANETĂ LUNĂ", "TEMPERATURĂ PRESIUNE VOLUM", "MASĂ FORȚĂ SPAȚIU"],
  history: ["ROMA MARE IMPERIU ERA", "ÎNȚELEPCIUNEA GREACĂ PREDĂ TOTUL", "ALEXANDRU CEL MARE CONDUCĂTOR", "EGIPT VECHI SECRETE TRĂIESC", "MARELE ZID CONSTRUIT DEMULT", "EVUL MEDIU CAVALER VITEAZ", "VIKINGII NAVIGAU MĂRI ÎNDEPĂRTATE", "ISTORIA SPUNE TOTUL ODATĂ", "RĂZBOI PACE SE ALTERNEAZĂ", "INDIA CULTURĂ MINUNE ASCUNDE"],
  culture: ["VALORILE CULTURII APARȚIN TUTUROR", "DANS MUZICĂ MÂNCARE BĂUTURĂ", "SĂRBĂTOARE BUCURIE MARE FAMILIE", "MUZEU PICTURI SCULPTURI VIE", "LITERATURĂ VERSURI ROMAN VIAȚĂ", "POPOARELE LUMII TOATE DIFERITE", "GASTRONOMIA LUMII GUSTURI MINUNE", "FILME CĂRȚI IMAGINAȚIE ARIPI", "SPORT CULTURĂ MERG ÎMPREUNĂ", "TRADIȚIE TRECUT PREZENT VIITOR"],
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export function getLevelConfig(levelNum: number): LevelConfig {
  return LEVEL_CONFIGS[levelNum - 1];
}

export function getPuzzleForLevel(lang: string, levelNum: number): string {
  const l = ["hu", "de", "en", "ro"].includes(lang) ? lang : "en";
  const cfg = getLevelConfig(levelNum);
  if (cfg.type === "word") {
    const map = { hu: WORDS_HU, de: WORDS_DE, en: WORDS_EN, ro: WORDS_RO }[l]!;
    const arr = map[cfg.theme.key] ?? [];
    return arr[Math.floor(Math.random() * arr.length)] ?? "CAT";
  }
  if (cfg.type === "sentence") {
    const map = { hu: SENTENCES_HU, de: SENTENCES_DE, en: SENTENCES_EN, ro: SENTENCES_RO }[l]!;
    const arr = map[cfg.theme.key] ?? [];
    return arr[Math.floor(Math.random() * arr.length)] ?? "HELLO WORLD";
  }
  return "";
}

export function getSecretCode(lang: string): SecretCodeData {
  return SECRET_CODES[lang in SECRET_CODES ? lang : "en"];
}

// Vowels per language (for Vokális badge)
export function getVowels(lang: string): string[] {
  const base = ["A", "E", "I", "O", "U"];
  if (lang === "hu") return [...base, "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
  if (lang === "de") return [...base, "Ä", "Ö", "Ü"];
  if (lang === "ro") return [...base, "Ă", "Â", "Î"];
  return base;
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

// Keep backward compatibility for anything that might import getRandomWord
export function getRandomWord(lang: string): { word: string; category: KodexCategory } {
  return { word: getPuzzleForLevel(lang, 1), category: THEMES.animals };
}

// CATEGORIES exported for backward compat
export const CATEGORIES = Object.values(THEMES).filter(t => t.key !== "secret");
