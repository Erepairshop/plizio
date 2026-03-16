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
