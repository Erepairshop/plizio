// ─── DEUTSCH VISUAL GENERATORS — K2 ──────────────────────────────────────────
// Data pools and generators for visual question types:
//   genus-sort     → tap der/die/das for a noun
//   satz-ordnen    → tap shuffled words into correct sentence order
//   bild-beschriften → SVG icon + pick correct "Artikel + Nomen" phrase

// ─── GENUS SORT ───────────────────────────────────────────────────────────────

export interface GenusSortItem {
  word: string;
  artikel: "der" | "die" | "das";
}

export const GENUS_POOL: GenusSortItem[] = [
  // der
  { word: "Hund", artikel: "der" },
  { word: "Baum", artikel: "der" },
  { word: "Ball", artikel: "der" },
  { word: "Mond", artikel: "der" },
  { word: "Apfel", artikel: "der" },
  { word: "Tisch", artikel: "der" },
  { word: "Stuhl", artikel: "der" },
  { word: "Schuh", artikel: "der" },
  { word: "Stern", artikel: "der" },
  { word: "Pilz", artikel: "der" },
  { word: "Frosch", artikel: "der" },
  { word: "Vogel", artikel: "der" },
  { word: "Fisch", artikel: "der" },
  { word: "Lehrer", artikel: "der" },
  { word: "Stift", artikel: "der" },
  { word: "Rucksack", artikel: "der" },
  { word: "Bleistift", artikel: "der" },
  { word: "Radiergummi", artikel: "der" },
  { word: "Ranzen", artikel: "der" },
  { word: "Schnee", artikel: "der" },
  { word: "Regen", artikel: "der" },
  { word: "Wind", artikel: "der" },
  { word: "Kuchen", artikel: "der" },
  { word: "Saft", artikel: "der" },
  { word: "Tee", artikel: "der" },
  { word: "Käse", artikel: "der" },
  { word: "Igel", artikel: "der" },
  { word: "Tiger", artikel: "der" },
  { word: "Löwe", artikel: "der" },
  { word: "Affe", artikel: "der" },
  // die
  { word: "Katze", artikel: "die" },
  { word: "Sonne", artikel: "die" },
  { word: "Blume", artikel: "die" },
  { word: "Schule", artikel: "die" },
  { word: "Uhr", artikel: "die" },
  { word: "Tasche", artikel: "die" },
  { word: "Straße", artikel: "die" },
  { word: "Maus", artikel: "die" },
  { word: "Schlange", artikel: "die" },
  { word: "Lehrerin", artikel: "die" },
  { word: "Freundin", artikel: "die" },
  { word: "Mutter", artikel: "die" },
  { word: "Schwester", artikel: "die" },
  { word: "Tante", artikel: "die" },
  { word: "Schere", artikel: "die" },
  { word: "Kreide", artikel: "die" },
  { word: "Wolke", artikel: "die" },
  { word: "Milch", artikel: "die" },
  { word: "Banane", artikel: "die" },
  { word: "Erdbeere", artikel: "die" },
  { word: "Tomate", artikel: "die" },
  { word: "Giraffe", artikel: "die" },
  { word: "Kuh", artikel: "die" },
  { word: "Ente", artikel: "die" },
  { word: "Mücke", artikel: "die" },
  { word: "Fliege", artikel: "die" },
  { word: "Nase", artikel: "die" },
  { word: "Schule", artikel: "die" },
  { word: "Pizza", artikel: "die" },
  { word: "Suppe", artikel: "die" },
  // das
  { word: "Buch", artikel: "das" },
  { word: "Haus", artikel: "das" },
  { word: "Auto", artikel: "das" },
  { word: "Herz", artikel: "das" },
  { word: "Kind", artikel: "das" },
  { word: "Tier", artikel: "das" },
  { word: "Bett", artikel: "das" },
  { word: "Heft", artikel: "das" },
  { word: "Fenster", artikel: "das" },
  { word: "Brot", artikel: "das" },
  { word: "Glas", artikel: "das" },
  { word: "Pferd", artikel: "das" },
  { word: "Kaninchen", artikel: "das" },
  { word: "Schwein", artikel: "das" },
  { word: "Schaf", artikel: "das" },
  { word: "Lineal", artikel: "das" },
  { word: "Papier", artikel: "das" },
  { word: "Bild", artikel: "das" },
  { word: "Wetter", artikel: "das" },
  { word: "Eis", artikel: "das" },
  { word: "Obst", artikel: "das" },
  { word: "Gemüse", artikel: "das" },
  { word: "Fahrrad", artikel: "das" },
  { word: "Spielzeug", artikel: "das" },
  { word: "Mädchen", artikel: "das" },
  { word: "Flugzeug", artikel: "das" },
  { word: "Schiff", artikel: "das" },
  { word: "Dorf", artikel: "das" },
  { word: "Schloss", artikel: "das" },
];

// ─── SATZ ORDNEN ──────────────────────────────────────────────────────────────

export interface SatzOrdnenItem {
  words: string[];    // correct order
  subtopic?: string;
}

export const SAETZE_K2: SatzOrdnenItem[] = [
  // wortstellung: Subjekt-Prädikat-Objekt
  { words: ["Der", "Hund", "frisst", "einen", "Knochen."] },
  { words: ["Die", "Katze", "trinkt", "Milch."] },
  { words: ["Das", "Kind", "liest", "ein", "Buch."] },
  { words: ["Die", "Mutter", "kocht", "die", "Suppe."] },
  { words: ["Der", "Vater", "kauft", "Äpfel."] },
  { words: ["Das", "Mädchen", "malt", "ein", "Bild."] },
  { words: ["Der", "Junge", "spielt", "Fußball."] },
  { words: ["Die", "Lehrerin", "erklärt", "die", "Aufgabe."] },
  { words: ["Das", "Pferd", "läuft", "sehr", "schnell."] },
  { words: ["Die", "Sonne", "scheint", "heute", "hell."] },
  // inverted word order (verb second)
  { words: ["Heute", "spielt", "Anna", "im", "Garten."] },
  { words: ["Morgen", "kommt", "mein", "Freund."] },
  { words: ["Am", "Montag", "haben", "wir", "Schule."] },
  { words: ["Im", "Sommer", "schwimmen", "die", "Kinder."] },
  { words: ["Nach", "der", "Schule", "esse", "ich", "Eis."] },
  // question sentences
  { words: ["Wie", "heißt", "du?"] },
  { words: ["Was", "macht", "der", "Hund?"] },
  { words: ["Wohin", "geht", "die", "Katze?"] },
  { words: ["Wann", "kommt", "der", "Bus?"] },
  { words: ["Wer", "hat", "mein", "Heft?"] },
  // imperativ
  { words: ["Komm", "bitte", "her!"] },
  { words: ["Öffne", "das", "Fenster!"] },
  { words: ["Mach", "deine", "Hausaufgaben!"] },
  { words: ["Schreib", "deinen", "Namen!"] },
  { words: ["Lies", "das", "Buch!"] },
];

// ─── BILD BESCHRIFTEN ─────────────────────────────────────────────────────────

export interface BildBeschriftenItem {
  imageKey: string;           // G1_ICONS key
  artikel: "der" | "die" | "das";
  nomen: string;              // display name (Großschreibung)
}

// Only nouns that have icons in G1_ICONS
export const BILD_POOL: BildBeschriftenItem[] = [
  { imageKey: "hund",   artikel: "der", nomen: "Hund" },
  { imageKey: "katze",  artikel: "die", nomen: "Katze" },
  { imageKey: "fisch",  artikel: "der", nomen: "Fisch" },
  { imageKey: "vogel",  artikel: "der", nomen: "Vogel" },
  { imageKey: "baum",   artikel: "der", nomen: "Baum" },
  { imageKey: "ball",   artikel: "der", nomen: "Ball" },
  { imageKey: "haus",   artikel: "das", nomen: "Haus" },
  { imageKey: "sonne",  artikel: "die", nomen: "Sonne" },
  { imageKey: "mond",   artikel: "der", nomen: "Mond" },
  { imageKey: "blume",  artikel: "die", nomen: "Blume" },
  { imageKey: "auto",   artikel: "das", nomen: "Auto" },
  { imageKey: "buch",   artikel: "das", nomen: "Buch" },
  { imageKey: "apfel",  artikel: "der", nomen: "Apfel" },
  { imageKey: "tisch",  artikel: "der", nomen: "Tisch" },
  { imageKey: "stuhl",  artikel: "der", nomen: "Stuhl" },
  { imageKey: "schuh",  artikel: "der", nomen: "Schuh" },
  { imageKey: "stern",  artikel: "der", nomen: "Stern" },
  { imageKey: "herz",   artikel: "das", nomen: "Herz" },
  { imageKey: "pilz",   artikel: "der", nomen: "Pilz" },
  { imageKey: "frosch", artikel: "der", nomen: "Frosch" },
];

// ─── FEHLER FINDEN ────────────────────────────────────────────────────────────

export interface FehlerFindenItem {
  words: string[];      // sentence split into words
  errorIndex: number;   // which word has the error
  hint: string;         // explanation shown after submit
}

export const FEHLER_POOL: FehlerFindenItem[] = [
  // wrong article (der/die/das)
  { words: ["Die", "Hund", "bellt", "laut."], errorIndex: 1, hint: "Nomen: der Hund → maskulin" },
  { words: ["Der", "Katze", "schläft", "auf", "dem", "Sofa."], errorIndex: 1, hint: "Nomen: die Katze → feminin" },
  { words: ["Das", "Ball", "ist", "rund."], errorIndex: 1, hint: "Nomen: der Ball → maskulin" },
  { words: ["Der", "Sonne", "scheint", "heute."], errorIndex: 1, hint: "Nomen: die Sonne → feminin" },
  { words: ["Die", "Buch", "ist", "spannend."], errorIndex: 1, hint: "Nomen: das Buch → neutrum" },
  { words: ["Das", "Blume", "riecht", "schön."], errorIndex: 1, hint: "Nomen: die Blume → feminin" },
  { words: ["Der", "Haus", "ist", "groß."], errorIndex: 1, hint: "Nomen: das Haus → neutrum" },
  { words: ["Die", "Apfel", "ist", "rot."], errorIndex: 1, hint: "Nomen: der Apfel → maskulin" },
  // wrong verb form (conjugation)
  { words: ["Ich", "hast", "ein", "Buch."], errorIndex: 1, hint: "ich → habe (nicht hast)" },
  { words: ["Du", "habe", "viele", "Freunde."], errorIndex: 1, hint: "du → hast (nicht habe)" },
  { words: ["Er", "haben", "Hunger."], errorIndex: 1, hint: "er → hat (nicht haben)" },
  { words: ["Wir", "ist", "müde."], errorIndex: 1, hint: "wir → sind (nicht ist)" },
  { words: ["Sie", "bist", "nett."], errorIndex: 1, hint: "sie → ist (nicht bist)" },
  { words: ["Das", "Kind", "spielen", "im", "Garten."], errorIndex: 2, hint: "das Kind (3. Pers. Sg.) → spielt" },
  { words: ["Die", "Kinder", "spielt", "im", "Garten."], errorIndex: 2, hint: "die Kinder (Plural) → spielen" },
  // wrong spelling / capitalization
  { words: ["der", "Hund", "läuft", "schnell."], errorIndex: 0, hint: "Satzanfang → Der (Großschreibung)" },
  { words: ["Ich", "esse", "gerne", "Äpfeln."], errorIndex: 3, hint: "Akkusativ Plural: Äpfel (kein -n)" },
  { words: ["Das", "Mädchen", "trägt", "ein", "rotes", "Kleid."], errorIndex: 5, hint: "Korrekt! (kein Fehler)... Wähle trotzdem!" },
  { words: ["Ich", "gehe", "in", "die", "schule."], errorIndex: 4, hint: "Nomen immer groß: die Schule" },
  { words: ["Wir", "fahren", "Mit", "dem", "Bus."], errorIndex: 2, hint: "Präposition klein: mit dem Bus" },
  // wrong plural
  { words: ["Die", "Kinder", "essen", "viele", "Apfels."], errorIndex: 4, hint: "Plural von Apfel: Äpfel (Umlaut!)" },
  { words: ["Die", "Mäuser", "sind", "klein."], errorIndex: 1, hint: "Plural von Maus: Mäuse" },
  { words: ["Die", "Hunde", "bellen", "gerne."], errorIndex: 5, hint: "Dieser Satz ist korrekt!" },
  // wrong preposition / case
  { words: ["Ich", "gehe", "in", "den", "Schule."], errorIndex: 4, hint: "die Schule → in die Schule (feminin)" },
  { words: ["Er", "wartet", "auf", "dem", "Bus."], errorIndex: 3, hint: "auf den Bus warten (Akkusativ)" },
];

// ─── WORTFAMILIEN-BAUM ────────────────────────────────────────────────────────

export interface WortfamilieItem {
  stamm: string;          // root shown to student
  options: string[];      // 6 words
  correctIndices: number[]; // which are in the family
}

export const WORTFAMILIE_POOL: WortfamilieItem[] = [
  {
    stamm: "spiel",
    options: ["spielen", "Spielzeug", "Schule", "Mitspieler", "Spielplatz", "fahren"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "lern",
    options: ["lernen", "Lernheft", "spielen", "Lehrerin", "gelehrt", "laufen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "schreib",
    options: ["schreiben", "Schreibheft", "lesen", "Schreibtisch", "Schrift", "essen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "lauf",
    options: ["laufen", "Läufer", "springen", "Auslauf", "Verlauf", "sitzen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "mal",
    options: ["malen", "Malbuch", "bauen", "Maler", "Gemälde", "singen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "back",
    options: ["backen", "Bäcker", "kochen", "Backhaus", "Gebäck", "trinken"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "fahr",
    options: ["fahren", "Fahrer", "laufen", "Fahrrad", "Ausfahrt", "bauen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "schlaf",
    options: ["schlafen", "Schläfer", "schreiben", "Schlafzimmer", "einschlafen", "wohnen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "koch",
    options: ["kochen", "Köchin", "backen", "Küche", "gekocht", "essen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "sing",
    options: ["singen", "Sänger", "spielen", "Gesang", "Lied", "Singvogel"],
    correctIndices: [0, 1, 3, 5],
  },
  {
    stamm: "spring",
    options: ["springen", "Springer", "laufen", "Sprung", "Absprung", "rollen"],
    correctIndices: [0, 1, 3, 4],
  },
  {
    stamm: "bau",
    options: ["bauen", "Baumeister", "wohnen", "Gebäude", "Baustelle", "kaufen"],
    correctIndices: [0, 1, 3, 4],
  },
];

// ─── GESCHICHTE SORTIEREN ─────────────────────────────────────────────────────

export interface GeschichteItem {
  sentences: string[];   // in correct order (3-4 sentences)
}

export const GESCHICHTE_POOL: GeschichteItem[] = [
  { sentences: ["Anna geht in den Supermarkt.", "Sie kauft Äpfel und Brot.", "Zu Hause macht sie einen Kuchen.", "Der Kuchen schmeckt sehr gut!"] },
  { sentences: ["Max wacht früh auf.", "Er zieht sich an und frühstückt.", "Dann geht er zur Schule.", "In der Schule lernt er viel."] },
  { sentences: ["Es regnet draußen.", "Lena nimmt ihren Regenschirm.", "Sie läuft schnell nach Hause.", "Zuhause trinkt sie warmen Tee."] },
  { sentences: ["Der Hund ist hungrig.", "Er sitzt vor seinem Napf.", "Das Kind bringt ihm Futter.", "Der Hund frisst alles auf."] },
  { sentences: ["Tim findet einen Regenwurm.", "Er zeigt ihn seiner Freundin.", "Sie legen ihn in die Erde.", "Der Regenwurm kriecht weg."] },
  { sentences: ["Die Sonne scheint hell.", "Die Kinder gehen auf den Spielplatz.", "Sie spielen Verstecken.", "Am Abend gehen sie müde heim."] },
  { sentences: ["Paul bekommt ein Fahrrad.", "Er übt jeden Tag.", "Bald fährt er ohne Stützräder.", "Er ist sehr stolz auf sich."] },
  { sentences: ["Im Herbst fallen die Blätter.", "Die Kinder sammeln sie auf.", "Sie basteln ein Bild daraus.", "Es hängt jetzt an der Wand."] },
  { sentences: ["Lisa backt Plätzchen.", "Sie mischt Mehl, Zucker und Butter.", "Die Plätzchen kommen in den Ofen.", "Nach 20 Minuten sind sie fertig."] },
  { sentences: ["Ein Vogel baut ein Nest.", "Er sammelt Zweige und Moos.", "Er legt drei Eier hinein.", "Bald schlüpfen die Küken."] },
];

// ─── GENERATORS ───────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Generate unique genus-sort questions (no duplicate words) */
export function genGenusSortierung(count: number): GenusSortItem[] {
  return shuffle(GENUS_POOL).slice(0, count);
}

/** Generate unique satz-ordnen questions */
export function genSatzOrdnen(count: number): SatzOrdnenItem[] {
  return shuffle(SAETZE_K2).slice(0, count);
}

/** Generate bild-beschriften MCQ questions.
 *  Returns items with correct index and 3 distractors. */
export function genBildBeschriften(count: number): Array<{
  imageKey: string;
  nomen: string;
  options: string[];   // 4 "Artikel Nomen" strings
  correct: number;     // index into options
}> {
  const pool = shuffle(BILD_POOL).slice(0, count);
  return pool.map((item) => {
    const correctPhrase = `${item.artikel} ${item.nomen}`;
    // build 3 distractors from other items (different nomen)
    const others = BILD_POOL.filter((b) => b.imageKey !== item.imageKey);
    const distractors = shuffle(others)
      .slice(0, 3)
      .map((b) => `${b.artikel} ${b.nomen}`);
    const options = shuffle([correctPhrase, ...distractors]);
    return {
      imageKey: item.imageKey,
      nomen: item.nomen,
      options,
      correct: options.indexOf(correctPhrase),
    };
  });
}

/** Generate fehler-finden questions */
export function genFehlerFinden(count: number): FehlerFindenItem[] {
  return shuffle(FEHLER_POOL).slice(0, count);
}

/** Generate wortfamilien-baum questions */
export function genWortfamilienBaum(count: number): WortfamilieItem[] {
  return shuffle(WORTFAMILIE_POOL).slice(0, count);
}

/** Generate geschichte-sortieren questions with pre-shuffled order */
export function genGeschichteSortieren(count: number): Array<{
  sentences: string[];
  shuffledOrder: number[];
}> {
  return shuffle(GESCHICHTE_POOL).slice(0, count).map((item) => {
    const indices = item.sentences.map((_, i) => i);
    const shuffledOrder = shuffle(indices);
    return { sentences: item.sentences, shuffledOrder };
  });
}

// ─── WORTARTEN SORTIEREN (K3) ─────────────────────────────────────────────────

export interface WortartenItem {
  words: string[];
  categories: ('N' | 'V' | 'A')[];
}

export const WORTARTEN_POOL: WortartenItem[] = [
  { words: ["Hund",    "laufen",   "groß",    "Schule",   "trinken",  "schön"],    categories: ['N','V','A','N','V','A'] },
  { words: ["springen","Apfel",    "schnell", "schreiben","Buch",     "kalt"],      categories: ['V','N','A','V','N','A'] },
  { words: ["Blume",   "blühen",   "bunt",    "Katze",    "spielen",  "klein"],     categories: ['N','V','A','N','V','A'] },
  { words: ["warm",    "Haus",     "bauen",   "alt",      "Vogel",    "fliegen"],   categories: ['A','N','V','A','N','V'] },
  { words: ["lesen",   "Sonne",    "hell",    "singen",   "Berg",     "hoch"],      categories: ['V','N','A','V','N','A'] },
  { words: ["Tisch",   "stehen",   "hart",    "Regen",    "fallen",   "nass"],      categories: ['N','V','A','N','V','A'] },
  { words: ["Mutter",  "kochen",   "lecker",  "Freund",   "helfen",   "freundlich"],categories: ['N','V','A','N','V','A'] },
  { words: ["fahren",  "Zug",      "schnell", "schwimmen","Fisch",    "kalt"],      categories: ['V','N','A','V','N','A'] },
  { words: ["König",   "regieren", "mächtig", "Ritter",   "kämpfen",  "tapfer"],    categories: ['N','V','A','N','V','A'] },
  { words: ["leise",   "Musik",    "spielen", "laut",     "Trompete", "üben"],      categories: ['A','N','V','A','N','V'] },
  { words: ["Baum",    "wachsen",  "grün",    "Wiese",    "blühen",   "bunt"],      categories: ['N','V','A','N','V','A'] },
  { words: ["rennen",  "Kind",     "müde",    "tanzen",   "Mädchen",  "fröhlich"],  categories: ['V','N','A','V','N','A'] },
];

export function genWortartenSortieren(count: number): WortartenItem[] {
  return shuffle(WORTARTEN_POOL).slice(0, count);
}

// ─── ZEITFORMEN ZUORDNEN (K3) ─────────────────────────────────────────────────

export interface ZeitformItem {
  sentence: string;
  zeitform: 'pres' | 'praet' | 'perf';
}

export const ZEITFORM_POOL: ZeitformItem[] = [
  // Präsens
  { sentence: "Das Kind spielt im Garten.", zeitform: 'pres' },
  { sentence: "Die Katze schläft auf dem Sofa.", zeitform: 'pres' },
  { sentence: "Ich lese ein spannendes Buch.", zeitform: 'pres' },
  { sentence: "Wir essen heute Pizza.", zeitform: 'pres' },
  { sentence: "Der Hund bellt laut.", zeitform: 'pres' },
  { sentence: "Sie singt ein schönes Lied.", zeitform: 'pres' },
  // Präteritum
  { sentence: "Das Kind spielte im Garten.", zeitform: 'praet' },
  { sentence: "Er schlief lange.", zeitform: 'praet' },
  { sentence: "Sie las ein Buch.", zeitform: 'praet' },
  { sentence: "Wir aßen Pizza.", zeitform: 'praet' },
  { sentence: "Der Hund bellte laut.", zeitform: 'praet' },
  { sentence: "Er schrieb einen Brief.", zeitform: 'praet' },
  { sentence: "Sie sang ein Lied.", zeitform: 'praet' },
  { sentence: "Es war einmal ein König.", zeitform: 'praet' },
  // Perfekt
  { sentence: "Das Kind hat gespielt.", zeitform: 'perf' },
  { sentence: "Sie hat das Buch gelesen.", zeitform: 'perf' },
  { sentence: "Wir haben Pizza gegessen.", zeitform: 'perf' },
  { sentence: "Er hat einen Brief geschrieben.", zeitform: 'perf' },
  { sentence: "Sie hat ein Lied gesungen.", zeitform: 'perf' },
  { sentence: "Der Hund hat gebellt.", zeitform: 'perf' },
  { sentence: "Er ist nach Hause gegangen.", zeitform: 'perf' },
  { sentence: "Sie haben Fußball gespielt.", zeitform: 'perf' },
];

export function genZeitformenZuordnen(count: number): ZeitformItem[] {
  return shuffle(ZEITFORM_POOL).slice(0, count);
}

// ─── SATZGLIED MARKIEREN (K3) ─────────────────────────────────────────────────

export interface SatzgliedItem {
  words: string[];
  labels: string[];   // 'S' | 'P' | 'O' | '' per word
}

export const SATZGLIED_POOL: SatzgliedItem[] = [
  // S P O patterns
  { words: ["Der", "Hund", "frisst", "den", "Knochen."],          labels: ['S','S','P','O','O'] },
  { words: ["Die", "Katze", "trinkt", "die", "Milch."],           labels: ['S','S','P','O','O'] },
  { words: ["Das", "Kind", "liest", "ein", "Buch."],              labels: ['S','S','P','O','O'] },
  { words: ["Die", "Mutter", "kocht", "die", "Suppe."],           labels: ['S','S','P','O','O'] },
  { words: ["Der", "Junge", "spielt", "Fußball."],                labels: ['S','S','P','O'] },
  { words: ["Die", "Lehrerin", "erklärt", "die", "Aufgabe."],     labels: ['S','S','P','O','O'] },
  { words: ["Das", "Mädchen", "malt", "ein", "Bild."],            labels: ['S','S','P','O','O'] },
  { words: ["Der", "Vater", "kauft", "Äpfel."],                   labels: ['S','S','P','O'] },
  { words: ["Der", "Hund", "beißt", "den", "Ball."],              labels: ['S','S','P','O','O'] },
  { words: ["Die", "Ente", "frisst", "das", "Brot."],             labels: ['S','S','P','O','O'] },
  { words: ["Der", "Pilot", "fliegt", "das", "Flugzeug."],        labels: ['S','S','P','O','O'] },
  { words: ["Anna", "schreibt", "einen", "Brief."],               labels: ['S','P','O','O'] },
  { words: ["Paul", "liest", "das", "Buch."],                     labels: ['S','P','O','O'] },
  { words: ["Max", "spielt", "Gitarre."],                         labels: ['S','P','O'] },
  { words: ["Tim", "öffnet", "das", "Fenster."],                  labels: ['S','P','O','O'] },
];

export function genSatzgliedMarkieren(count: number): SatzgliedItem[] {
  return shuffle(SATZGLIED_POOL).slice(0, count);
}

// ─── K4: KASUS MARKIEREN ──────────────────────────────────────────────────────
// Show a sentence; one word is highlighted — user taps N / A / D / G

export interface KasusItem {
  sentence: string;   // full sentence
  highlight: string;  // the word to identify (substring that should be highlighted)
  kasus: 'N' | 'A' | 'D' | 'G';
}

export const KASUS_POOL: KasusItem[] = [
  // Nominativ
  { sentence: "Der Hund bellt laut.", highlight: "Der Hund", kasus: 'N' },
  { sentence: "Die Lehrerin erklärt die Aufgabe.", highlight: "Die Lehrerin", kasus: 'N' },
  { sentence: "Das Kind spielt im Garten.", highlight: "Das Kind", kasus: 'N' },
  { sentence: "Mein Vater kocht das Essen.", highlight: "Mein Vater", kasus: 'N' },
  { sentence: "Unser Hund schläft den ganzen Tag.", highlight: "Unser Hund", kasus: 'N' },
  { sentence: "Die Sonne scheint hell.", highlight: "Die Sonne", kasus: 'N' },
  // Akkusativ
  { sentence: "Ich sehe den Mann.", highlight: "den Mann", kasus: 'A' },
  { sentence: "Sie kauft einen Apfel.", highlight: "einen Apfel", kasus: 'A' },
  { sentence: "Er liest das Buch.", highlight: "das Buch", kasus: 'A' },
  { sentence: "Wir besuchen unsere Oma.", highlight: "unsere Oma", kasus: 'A' },
  { sentence: "Das Kind trinkt die Milch.", highlight: "die Milch", kasus: 'A' },
  { sentence: "Er kauft einen neuen Computer.", highlight: "einen neuen Computer", kasus: 'A' },
  // Dativ
  { sentence: "Ich helfe dem Vater.", highlight: "dem Vater", kasus: 'D' },
  { sentence: "Sie gibt der Lehrerin das Heft.", highlight: "der Lehrerin", kasus: 'D' },
  { sentence: "Er spielt mit dem Ball.", highlight: "dem Ball", kasus: 'D' },
  { sentence: "Wir fahren mit dem Bus.", highlight: "dem Bus", kasus: 'D' },
  { sentence: "Das Geschenk gehört meinem Bruder.", highlight: "meinem Bruder", kasus: 'D' },
  { sentence: "Sie wohnt bei ihrer Tante.", highlight: "ihrer Tante", kasus: 'D' },
  // Genitiv
  { sentence: "Das Auto meines Vaters ist blau.", highlight: "meines Vaters", kasus: 'G' },
  { sentence: "Die Farbe des Himmels ist blau.", highlight: "des Himmels", kasus: 'G' },
  { sentence: "Der Hund meiner Schwester bellt.", highlight: "meiner Schwester", kasus: 'G' },
  { sentence: "Das Dach des Hauses ist rot.", highlight: "des Hauses", kasus: 'G' },
  { sentence: "Die Tasche der Lehrerin ist schwer.", highlight: "der Lehrerin", kasus: 'G' },
  { sentence: "Der Name des Schülers steht auf der Liste.", highlight: "des Schülers", kasus: 'G' },
];

export function genKasusMarkieren(count: number): KasusItem[] {
  return shuffle(KASUS_POOL).slice(0, count);
}

// ─── K4: ADJEKTIV-ENDUNGEN ────────────────────────────────────────────────────
// Show "ein groß___ Hund" — user taps chip to pick ending: -e / -er / -es / -en / -em

export interface AdjektivEndungItem {
  phrase: string;     // e.g. "ein groß___ Hund"
  stem: string;       // e.g. "groß" (the adjective stem without the blank)
  ending: string;     // correct ending: "er" | "e" | "es" | "en" | "em"
}

export const ADJEKTIV_ENDUNGEN_POOL: AdjektivEndungItem[] = [
  // Nominativ
  { phrase: "ein groß___ Hund", stem: "groß", ending: "er" },
  { phrase: "die klein___ Katze", stem: "klein", ending: "e" },
  { phrase: "ein klein___ Kind", stem: "klein", ending: "es" },
  { phrase: "der alt___ Mann", stem: "alt", ending: "e" },
  { phrase: "eine schön___ Blume", stem: "schön", ending: "e" },
  { phrase: "das neu___ Fahrrad", stem: "neu", ending: "e" },
  { phrase: "ein spannend___ Buch", stem: "spannend", ending: "es" },
  { phrase: "ein rot___ Apfel", stem: "rot", ending: "er" },
  // Akkusativ
  { phrase: "den gut___ Freund", stem: "gut", ending: "en" },
  { phrase: "einen warm___ Tee", stem: "warm", ending: "en" },
  { phrase: "den blau___ Himmel", stem: "blau", ending: "en" },
  { phrase: "eine süß___ Melone", stem: "süß", ending: "e" },
  { phrase: "einen schwer___ Koffer", stem: "schwer", ending: "en" },
  // Dativ
  { phrase: "mit dem alt___ Auto", stem: "alt", ending: "en" },
  { phrase: "mit einer alt___ Dame", stem: "alt", ending: "en" },
  { phrase: "dem nett___ Nachbarn", stem: "nett", ending: "en" },
  { phrase: "mit klug___ Schülerinnen", stem: "klug", ending: "en" },
  // Plural
  { phrase: "die klein___ Kinder", stem: "klein", ending: "en" },
  { phrase: "viele fleißig___ Kinder", stem: "fleißig", ending: "e" },
  { phrase: "alle gut___ Dinge", stem: "gut", ending: "en" },
  { phrase: "ihre grün___ Augen", stem: "grün", ending: "en" },
];

export function genAdjektivEndungen(count: number): AdjektivEndungItem[] {
  return shuffle(ADJEKTIV_ENDUNGEN_POOL).slice(0, count);
}


// ─── K8: LÜCKENTEXT (Partizipialkonstruktionen) ───────────────────────────────
// Sentence with a ___ blank; user picks the correct participle / Konjunktiv form.

export interface LueckenTextItem {
  /** Sentence containing exactly one "___" placeholder */
  sentence: string;
  /** 2–3 candidate forms */
  options: string[];
  /** Index of correct option */
  correct: number;
}

export const LUECKENTEXT_POOL: LueckenTextItem[] = [
  // Partizip I (present active)
  { sentence: "Das ___ Kind lief über die Straße.", options: ["laufendes", "gelaufenes", "gelaufene"], correct: 0 },
  { sentence: "Der ___ Hund bellte laut.", options: ["bellende", "gebellte", "bellender"], correct: 0 },
  { sentence: "Die ___ Frau winkte uns zu.", options: ["winkende", "gewinkende", "gewinkter"], correct: 0 },
  { sentence: "Das ___ Wasser glitzerte in der Sonne.", options: ["glitzernde", "geglitzerte", "glitzertes"], correct: 0 },
  { sentence: "Der ___ Zug kam pünktlich an.", options: ["ankommende", "angekommene", "ankäme"], correct: 0 },
  { sentence: "Die ___ Schülerinnen schrieben still.", options: ["schreibenden", "geschriebenen", "schreibender"], correct: 0 },
  { sentence: "Ein ___ Vogel saß auf dem Ast.", options: ["singender", "gesungener", "gesungenem"], correct: 0 },
  // Partizip II (past passive)
  { sentence: "Der ___ Brief lag auf dem Tisch.", options: ["geschriebene", "schreibende", "schreibender"], correct: 0 },
  { sentence: "Das ___ Buch gehört der Bibliothek.", options: ["geliehene", "leihende", "geliehener"], correct: 0 },
  { sentence: "Die ___ Hausaufgaben wurden bewertet.", options: ["erledigten", "erledigende", "erledigenden"], correct: 0 },
  { sentence: "Das ___ Fenster ließ kalte Luft herein.", options: ["geöffnete", "öffnende", "geöffneter"], correct: 0 },
  { sentence: "Der ___ Kuchen duftete herrlich.", options: ["gebackene", "backende", "gebackener"], correct: 0 },
  { sentence: "Die ___ Aufgabe war schwieriger als erwartet.", options: ["gestellte", "stellende", "gestellten"], correct: 0 },
  // Partizip I vs II distinction
  { sentence: "Die ___ Schüler warteten vor dem Klassenzimmer.", options: ["wartenden", "gewartet", "warteten"], correct: 0 },
  { sentence: "Das ___ Ergebnis überraschte alle.", options: ["errechnete", "errechnende", "errechneten"], correct: 0 },
  { sentence: "Der ___ Arzt half dem Patienten.", options: ["behandelnde", "behandelte", "behandelten"], correct: 0 },
  { sentence: "Die ___ Nachrichten berichteten über den Unfall.", options: ["gesendeten", "sendenden", "sendete"], correct: 1 },
  { sentence: "Der ___ Schaden war enorm.", options: ["entstandene", "entstehende", "entstanden"], correct: 0 },
  // Konjunktiv II context
  { sentence: "Er sagte, er ___ keine Zeit.", options: ["hätte", "hat", "hatte"], correct: 0 },
  { sentence: "Sie meinte, das ___ eine gute Idee.", options: ["wäre", "war", "ist"], correct: 0 },
  { sentence: "Er fragte, ob sie ___ kommen.", options: ["könnte", "kann", "konnte"], correct: 0 },
  { sentence: "Sie berichtete, er ___ den Brief bereits geschrieben.", options: ["habe", "hat", "hatte"], correct: 0 },
  { sentence: "Der Zeuge erklärte, er ___ nichts gesehen.", options: ["habe", "hat", "hätte"], correct: 0 },
  // Erweitertes Partizip (complex participial phrase)
  { sentence: "Das ___ Mädchen lächelte freundlich.", options: ["lächelnde", "gelächelte", "gelächeltes"], correct: 0 },
  { sentence: "Der von allen ___ Lehrer verließ die Schule.", options: ["geschätzte", "schätzende", "schätzenden"], correct: 0 },
  { sentence: "Das gestern ___ Paket kam nicht an.", options: ["abgeschickte", "abschickende", "abschickendes"], correct: 0 },
  { sentence: "Die in der Zeitung ___ Meldung stimmte nicht.", options: ["veröffentlichte", "veröffentlichende", "veröffentlichtes"], correct: 0 },
];

export function genLueckenText(count: number): LueckenTextItem[] {
  return shuffle(LUECKENTEXT_POOL).slice(0, count);
}

// ─── K8: SATZGEFÜGE-DIAGRAM (Nebensatztypen) ────────────────────────────────
// Hauptsatz + Nebensatz shown as connected boxes; user identifies the Nebensatztyp.

export interface SatzgefugeItem {
  hauptsatz: string;
  nebensatz: string;
  konjunktion: string;
  /** Correct Nebensatztyp string */
  correctType: string;
  /** 3–4 choices including correctType */
  options: string[];
}

export const SATZGEFUGE_POOL: SatzgefugeItem[] = [
  // Kausalsatz (weil, da)
  { hauptsatz: "Er blieb zu Hause,", nebensatz: "weil er krank war.", konjunktion: "weil", correctType: "Kausalsatz", options: ["Kausalsatz", "Finalsatz", "Temporalsatz", "Konditionalsatz"] },
  { hauptsatz: "Sie weinte,", nebensatz: "da sie die Prüfung nicht bestanden hatte.", konjunktion: "da", correctType: "Kausalsatz", options: ["Kausalsatz", "Konzessivsatz", "Relativsatz", "Modalsatz"] },
  { hauptsatz: "Er aß nichts,", nebensatz: "weil er keinen Hunger hatte.", konjunktion: "weil", correctType: "Kausalsatz", options: ["Kausalsatz", "Finalsatz", "Konsekutivsatz", "Temporalsatz"] },
  // Finalsatz (damit, um … zu)
  { hauptsatz: "Er lernte fleißig,", nebensatz: "damit er die Prüfung besteht.", konjunktion: "damit", correctType: "Finalsatz", options: ["Finalsatz", "Kausalsatz", "Konzessivsatz", "Konditionalsatz"] },
  { hauptsatz: "Sie rief an,", nebensatz: "damit wir rechtzeitig kamen.", konjunktion: "damit", correctType: "Finalsatz", options: ["Finalsatz", "Temporalsatz", "Kausalsatz", "Modalsatz"] },
  { hauptsatz: "Er spart Geld,", nebensatz: "damit er sich ein Fahrrad kaufen kann.", konjunktion: "damit", correctType: "Finalsatz", options: ["Finalsatz", "Kausalsatz", "Relativsatz", "Konsekutivsatz"] },
  // Konzessivsatz (obwohl, obgleich)
  { hauptsatz: "Er kam zur Schule,", nebensatz: "obwohl er Fieber hatte.", konjunktion: "obwohl", correctType: "Konzessivsatz", options: ["Konzessivsatz", "Kausalsatz", "Finalsatz", "Temporalsatz"] },
  { hauptsatz: "Sie half ihm,", nebensatz: "obwohl sie wenig Zeit hatte.", konjunktion: "obwohl", correctType: "Konzessivsatz", options: ["Konzessivsatz", "Konditionalsatz", "Kausalsatz", "Relativsatz"] },
  { hauptsatz: "Er lächelte,", nebensatz: "obgleich er traurig war.", konjunktion: "obgleich", correctType: "Konzessivsatz", options: ["Konzessivsatz", "Kausalsatz", "Modalsatz", "Finalsatz"] },
  // Konditionalsatz (wenn, falls)
  { hauptsatz: "Wir fahren in die Stadt,", nebensatz: "wenn das Wetter schön ist.", konjunktion: "wenn", correctType: "Konditionalsatz", options: ["Konditionalsatz", "Temporalsatz", "Kausalsatz", "Konzessivsatz"] },
  { hauptsatz: "Ich helfe dir,", nebensatz: "falls du Probleme hast.", konjunktion: "falls", correctType: "Konditionalsatz", options: ["Konditionalsatz", "Finalsatz", "Kausalsatz", "Modalsatz"] },
  { hauptsatz: "Er ruft an,", nebensatz: "wenn er ankommt.", konjunktion: "wenn", correctType: "Konditionalsatz", options: ["Konditionalsatz", "Temporalsatz", "Kausalsatz", "Relativsatz"] },
  // Temporalsatz (als, wenn, während, bevor, nachdem)
  { hauptsatz: "Sie weinte,", nebensatz: "als sie die Nachricht hörte.", konjunktion: "als", correctType: "Temporalsatz", options: ["Temporalsatz", "Kausalsatz", "Konzessivsatz", "Konditionalsatz"] },
  { hauptsatz: "Er aß Mittag,", nebensatz: "während seine Schwester schlief.", konjunktion: "während", correctType: "Temporalsatz", options: ["Temporalsatz", "Konzessivsatz", "Kausalsatz", "Modalsatz"] },
  { hauptsatz: "Sie wusch sich die Hände,", nebensatz: "bevor sie aß.", konjunktion: "bevor", correctType: "Temporalsatz", options: ["Temporalsatz", "Finalsatz", "Kausalsatz", "Konditionalsatz"] },
  { hauptsatz: "Wir feierten,", nebensatz: "nachdem wir gewonnen hatten.", konjunktion: "nachdem", correctType: "Temporalsatz", options: ["Temporalsatz", "Kausalsatz", "Finalsatz", "Konzessivsatz"] },
  // Relativsatz
  { hauptsatz: "Der Mann,", nebensatz: "der neben uns saß, schlief ein.", konjunktion: "der", correctType: "Relativsatz", options: ["Relativsatz", "Kausalsatz", "Finalsatz", "Konditionalsatz"] },
  { hauptsatz: "Das Buch,", nebensatz: "das ich gestern las, war spannend.", konjunktion: "das", correctType: "Relativsatz", options: ["Relativsatz", "Temporalsatz", "Konzessivsatz", "Kausalsatz"] },
  // Konsekutivsatz (sodass)
  { hauptsatz: "Er rannte so schnell,", nebensatz: "sodass er außer Atem war.", konjunktion: "sodass", correctType: "Konsekutivsatz", options: ["Konsekutivsatz", "Kausalsatz", "Finalsatz", "Modalsatz"] },
  { hauptsatz: "Es regnete so stark,", nebensatz: "sodass die Straße überschwemmt wurde.", konjunktion: "sodass", correctType: "Konsekutivsatz", options: ["Konsekutivsatz", "Temporalsatz", "Konzessivsatz", "Kausalsatz"] },
  // Modalsatz (indem, ohne dass)
  { hauptsatz: "Er löste das Problem,", nebensatz: "indem er kreativ dachte.", konjunktion: "indem", correctType: "Modalsatz", options: ["Modalsatz", "Finalsatz", "Kausalsatz", "Relativsatz"] },
  { hauptsatz: "Sie bestand die Prüfung,", nebensatz: "indem sie intensiv übte.", konjunktion: "indem", correctType: "Modalsatz", options: ["Modalsatz", "Kausalsatz", "Temporalsatz", "Konzessivsatz"] },
];

export function genSatzgefuge(count: number): SatzgefugeItem[] {
  return shuffle(SATZGEFUGE_POOL).slice(0, count);
}

// ─── K8: EPOCHEN-ZEITSTRAHL (Epochen & Gattungen) ────────────────────────────
// Author / work → correct literary epoch. 4 epoch chips shown as mini timeline.

export interface EpochenItem {
  /** Display name, e.g. "Goethe: Faust" */
  author: string;
  /** Short context clue, e.g. "1808" */
  hint?: string;
  /** Index of correct option in options[] */
  correct: number;
  /** 4 epoch names to choose from */
  options: string[];
}

export const EPOCHEN_POOL: EpochenItem[] = [
  // Klassik
  { author: "Goethe: Faust", hint: "1808", correct: 0, options: ["Klassik", "Romantik", "Barock", "Aufklärung"] },
  { author: "Schiller: Die Räuber", hint: "1781", correct: 0, options: ["Klassik", "Sturm & Drang", "Aufklärung", "Naturalismus"] },
  { author: "Schiller: Wilhelm Tell", hint: "1804", correct: 0, options: ["Klassik", "Romantik", "Realismus", "Aufklärung"] },
  { author: "Goethe: Iphigenie auf Tauris", hint: "1787", correct: 0, options: ["Klassik", "Sturm & Drang", "Barock", "Romantik"] },
  // Romantik
  { author: "Eichendorff: Aus dem Leben eines Taugenichts", hint: "1826", correct: 0, options: ["Romantik", "Klassik", "Realismus", "Naturalismus"] },
  { author: "Hoffmann: Der Sandmann", hint: "1816", correct: 0, options: ["Romantik", "Klassik", "Aufklärung", "Expressionismus"] },
  { author: "Novalis: Heinrich von Ofterdingen", hint: "1802", correct: 0, options: ["Romantik", "Klassik", "Sturm & Drang", "Naturalismus"] },
  { author: "Brentano & von Arnim: Des Knaben Wunderhorn", hint: "1806", correct: 0, options: ["Romantik", "Aufklärung", "Barock", "Realismus"] },
  // Aufklärung
  { author: "Lessing: Nathan der Weise", hint: "1779", correct: 0, options: ["Aufklärung", "Klassik", "Barock", "Romantik"] },
  { author: "Lessing: Emilia Galotti", hint: "1772", correct: 0, options: ["Aufklärung", "Klassik", "Sturm & Drang", "Romantik"] },
  { author: "Kant: Was ist Aufklärung?", hint: "1784", correct: 0, options: ["Aufklärung", "Klassik", "Romantik", "Barock"] },
  // Sturm & Drang
  { author: "Goethe: Die Leiden des jungen Werthers", hint: "1774", correct: 0, options: ["Sturm & Drang", "Klassik", "Aufklärung", "Romantik"] },
  { author: "Schiller: Kabale und Liebe", hint: "1784", correct: 0, options: ["Sturm & Drang", "Klassik", "Aufklärung", "Barock"] },
  // Barock
  { author: "Grimmelshausen: Simplicissimus", hint: "1668", correct: 0, options: ["Barock", "Aufklärung", "Mittelalter", "Klassik"] },
  { author: "Gryphius: Es ist alles eitel", hint: "1643", correct: 0, options: ["Barock", "Aufklärung", "Romantik", "Klassik"] },
  // Realismus
  { author: "Fontane: Effi Briest", hint: "1895", correct: 0, options: ["Realismus", "Romantik", "Naturalismus", "Expressionismus"] },
  { author: "Storm: Der Schimmelreiter", hint: "1888", correct: 0, options: ["Realismus", "Romantik", "Naturalismus", "Klassik"] },
  { author: "Keller: Romeo und Julia auf dem Dorfe", hint: "1856", correct: 0, options: ["Realismus", "Romantik", "Klassik", "Naturalismus"] },
  // Naturalismus
  { author: "Hauptmann: Die Weber", hint: "1892", correct: 0, options: ["Naturalismus", "Realismus", "Expressionismus", "Romantik"] },
  { author: "Hauptmann: Vor Sonnenaufgang", hint: "1889", correct: 0, options: ["Naturalismus", "Realismus", "Klassik", "Moderne"] },
  // Expressionismus
  { author: "Kafka: Die Verwandlung", hint: "1915", correct: 0, options: ["Expressionismus", "Naturalismus", "Realismus", "Moderne"] },
  { author: "Trakl: Grodek", hint: "1914", correct: 0, options: ["Expressionismus", "Romantik", "Naturalismus", "Moderne"] },
  { author: "Heym: Der Krieg", hint: "1911", correct: 0, options: ["Expressionismus", "Realismus", "Naturalismus", "Romantik"] },
  // Moderne / 20. Jh.
  { author: "Brecht: Der gute Mensch von Sezuan", hint: "1943", correct: 0, options: ["Moderne", "Expressionismus", "Naturalismus", "Romantik"] },
  { author: "Böll: Ansichten eines Clowns", hint: "1963", correct: 0, options: ["Moderne", "Realismus", "Expressionismus", "Klassik"] },
  { author: "Dürrenmatt: Der Besuch der alten Dame", hint: "1956", correct: 0, options: ["Moderne", "Expressionismus", "Naturalismus", "Romantik"] },
  // Mittelalter
  { author: "Nibelungenlied", hint: "~1200", correct: 0, options: ["Mittelalter", "Barock", "Aufklärung", "Klassik"] },
  { author: "Walther von der Vogelweide: Minnesang", hint: "~1190", correct: 0, options: ["Mittelalter", "Barock", "Romantik", "Aufklärung"] },
];

export function genEpochenZeitstrahl(count: number): EpochenItem[] {
  return shuffle(EPOCHEN_POOL).slice(0, count);
}
