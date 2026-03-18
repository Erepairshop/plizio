// ─── DEUTSCH GENERATORS ───────────────────────────────────────────────────────
// Véletlenszerű MCQ-kérdések szólistákból — minden test-indulásnál új kombináció
//
// ═══════════════════════════════════════════════════════════════════════════════
// BŐVÍTÉS — csak add hozzá a szavakat az adott listához, a generátor
// automatikusan felhasználja őket.
//
// NOMEN: { n: Nomen, a: Artikel, p: Plural, s: Silbenzahl }
// VERBEN: { v: Infinitiv, du/er/wir: Form, praet: Präteritum,
//           part: Partizip II, hv: "hat"|"ist" }
// ADJEKTIVE: { a: Grundform, k: Komparativ, s: Superlativ }
// ═══════════════════════════════════════════════════════════════════════════════

import type { DeutschQuestion } from "./deutschCurriculum";

// ─── HILFSFUNKTIONEN ──────────────────────────────────────────────────────────

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Létrehoz egy MCQ-kérdést: correct + max 3 wrong opció, megkeverve */
function mkMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[]
): DeutschQuestion {
  const uniqueWrong = [...new Set(wrong.filter((w) => w !== correct))];
  const opts = shuffle([correct, ...uniqueWrong.slice(0, 3)]);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── ADATLISTÁK ───────────────────────────────────────────────────────────────
// TODO: bővítsd a listákat tetszőleges számú szóval a megadott formátum szerint

// Nomen mit Artikel, Plural und Silbenanzahl
// n=Nomen  a=Artikel(der/die/das)  p=Plural  s=Silbenzahl(1/2/3)
const NOMEN: { n: string; a: string; p: string; s: number }[] = [
  { n: "Hund",     a: "der", p: "Hunde",      s: 1 },
  { n: "Katze",    a: "die", p: "Katzen",      s: 2 },
  { n: "Haus",     a: "das", p: "Häuser",      s: 1 },
  { n: "Schule",   a: "die", p: "Schulen",     s: 2 },
  { n: "Kind",     a: "das", p: "Kinder",      s: 1 },
  { n: "Baum",     a: "der", p: "Bäume",       s: 1 },
  { n: "Blume",    a: "die", p: "Blumen",      s: 2 },
  { n: "Tisch",    a: "der", p: "Tische",      s: 1 },
  { n: "Auto",     a: "das", p: "Autos",       s: 2 },
  { n: "Buch",     a: "das", p: "Bücher",      s: 1 },
  { n: "Mutter",   a: "die", p: "Mütter",      s: 2 },
  { n: "Vater",    a: "der", p: "Väter",       s: 2 },
  { n: "Stadt",    a: "die", p: "Städte",      s: 1 },
  { n: "Vogel",    a: "der", p: "Vögel",       s: 2 },
  { n: "Fenster",  a: "das", p: "Fenster",     s: 2 },
  { n: "Garten",   a: "der", p: "Gärten",      s: 2 },
  { n: "Apfel",    a: "der", p: "Äpfel",       s: 2 },
  { n: "Stuhl",    a: "der", p: "Stühle",      s: 1 },
  { n: "Lampe",    a: "die", p: "Lampen",      s: 2 },
  { n: "Mädchen",  a: "das", p: "Mädchen",     s: 2 },
  { n: "Lehrer",   a: "der", p: "Lehrer",      s: 2 },
  { n: "Lehrerin", a: "die", p: "Lehrerinnen", s: 3 },
  { n: "Wasser",   a: "das", p: "Wasser",      s: 2 },
  { n: "Brot",     a: "das", p: "Brote",       s: 1 },
  { n: "Pferd",    a: "das", p: "Pferde",      s: 1 },
  { n: "Stern",    a: "der", p: "Sterne",      s: 1 },
  { n: "Sonne",    a: "die", p: "Sonnen",      s: 2 },
  { n: "Wolke",    a: "die", p: "Wolken",      s: 2 },
  { n: "Fluss",    a: "der", p: "Flüsse",      s: 1 },
  { n: "Zimmer",   a: "das", p: "Zimmer",      s: 2 },
  { n: "Heft",     a: "das", p: "Hefte",       s: 1 },
  { n: "Stift",    a: "der", p: "Stifte",      s: 1 },
  { n: "Klasse",   a: "die", p: "Klassen",     s: 2 },
  { n: "Satz",     a: "der", p: "Sätze",       s: 1 },
  { n: "Farbe",    a: "die", p: "Farben",      s: 2 },
  { n: "Tür",      a: "die", p: "Türen",       s: 1 },
  { n: "Flasche",  a: "die", p: "Flaschen",    s: 2 },
  { n: "Bett",     a: "das", p: "Betten",      s: 1 },
  { n: "Glas",     a: "das", p: "Gläser",      s: 1 },
  { n: "Wald",     a: "der", p: "Wälder",      s: 1 },
  // ─── K1 BŐVÍTÉS: 30 új szó (2026-03-17) ───────────────────────────
  { n: "Affe",      a: "der", p: "Affen",       s: 2 },
  { n: "Löwe",      a: "der", p: "Löwen",       s: 2 },
  { n: "Käse",      a: "der", p: "Käse",        s: 2 },
  { n: "Schaf",     a: "das", p: "Schafe",      s: 1 },
  { n: "Enten",     a: "die", p: "Enten",       s: 2 },
  { n: "Maus",      a: "die", p: "Mäuse",       s: 1 },
  { n: "Fisch",     a: "der", p: "Fische",      s: 1 },
  { n: "Spielzeug", a: "das", p: "Spielzeuge",  s: 3 },
  { n: "Eis",       a: "das", p: "Eise",        s: 1 },
  { n: "Schuh",     a: "der", p: "Schuhe",      s: 1 },
  { n: "Biber",     a: "der", p: "Biber",       s: 2 },
  { n: "Feder",     a: "die", p: "Federn",      s: 2 },
  { n: "Kirsche",   a: "die", p: "Kirschen",    s: 2 },
  { n: "Korb",      a: "der", p: "Körbe",       s: 1 },
  { n: "Krone",     a: "die", p: "Kronen",      s: 2 },
  { n: "Kugel",     a: "die", p: "Kugeln",      s: 2 },
  { n: "Loch",      a: "das", p: "Löcher",      s: 1 },
  { n: "Magnet",    a: "der", p: "Magnete",     s: 2 },
  { n: "Marke",     a: "die", p: "Marken",      s: 2 },
  { n: "Milch",     a: "die", p: "Milche",      s: 1 },
  { n: "Minze",     a: "die", p: "Minzen",      s: 2 },
  { n: "Moment",    a: "der", p: "Momente",     s: 2 },
  { n: "Münze",     a: "die", p: "Münzen",      s: 2 },
  { n: "Nähe",      a: "die", p: "Nähen",       s: 2 },
  { n: "Nerv",      a: "der", p: "Nerven",      s: 2 },
  { n: "Nuss",      a: "die", p: "Nüsse",       s: 1 },
  { n: "Ohr",       a: "das", p: "Ohren",       s: 1 },
  { n: "Öl",        a: "das", p: "Öle",         s: 1 },
  { n: "Orange",    a: "die", p: "Orangen",     s: 2 },
  { n: "Ordnung",   a: "die", p: "Ordnungen",   s: 3 },
];

// Verben mit vollständiger Konjugation
// v=Infinitiv  du/er/wir=Formen  praet=Präteritum  part=Partizip II  hv="hat"|"ist"
const VERBEN: { v: string; du: string; er: string; wir: string; praet: string; part: string; hv: "hat" | "ist" }[] = [
  { v: "spielen",   du: "spielst",   er: "spielt",   wir: "spielen",  praet: "spielte",   part: "gespielt",    hv: "hat" },
  { v: "laufen",    du: "läufst",    er: "läuft",    wir: "laufen",   praet: "lief",      part: "gelaufen",    hv: "ist" },
  { v: "kommen",    du: "kommst",    er: "kommt",    wir: "kommen",   praet: "kam",       part: "gekommen",    hv: "ist" },
  { v: "gehen",     du: "gehst",     er: "geht",     wir: "gehen",    praet: "ging",      part: "gegangen",    hv: "ist" },
  { v: "machen",    du: "machst",    er: "macht",    wir: "machen",   praet: "machte",    part: "gemacht",     hv: "hat" },
  { v: "sehen",     du: "siehst",    er: "sieht",    wir: "sehen",    praet: "sah",       part: "gesehen",     hv: "hat" },
  { v: "lesen",     du: "liest",     er: "liest",    wir: "lesen",    praet: "las",       part: "gelesen",     hv: "hat" },
  { v: "schreiben", du: "schreibst", er: "schreibt", wir: "schreiben",praet: "schrieb",   part: "geschrieben", hv: "hat" },
  { v: "essen",     du: "isst",      er: "isst",     wir: "essen",    praet: "aß",        part: "gegessen",    hv: "hat" },
  { v: "trinken",   du: "trinkst",   er: "trinkt",   wir: "trinken",  praet: "trank",     part: "getrunken",   hv: "hat" },
  { v: "schlafen",  du: "schläfst",  er: "schläft",  wir: "schlafen", praet: "schlief",   part: "geschlafen",  hv: "hat" },
  { v: "fahren",    du: "fährst",    er: "fährt",    wir: "fahren",   praet: "fuhr",      part: "gefahren",    hv: "ist" },
  { v: "helfen",    du: "hilfst",    er: "hilft",    wir: "helfen",   praet: "half",      part: "geholfen",    hv: "hat" },
  { v: "kaufen",    du: "kaufst",    er: "kauft",    wir: "kaufen",   praet: "kaufte",    part: "gekauft",     hv: "hat" },
  { v: "lernen",    du: "lernst",    er: "lernt",    wir: "lernen",   praet: "lernte",    part: "gelernt",     hv: "hat" },
  { v: "sprechen",  du: "sprichst",  er: "spricht",  wir: "sprechen", praet: "sprach",    part: "gesprochen",  hv: "hat" },
  { v: "finden",    du: "findest",   er: "findet",   wir: "finden",   praet: "fand",      part: "gefunden",    hv: "hat" },
  { v: "schwimmen", du: "schwimmst", er: "schwimmt", wir: "schwimmen",praet: "schwamm",   part: "geschwommen", hv: "ist" },
  { v: "hören",     du: "hörst",     er: "hört",     wir: "hören",    praet: "hörte",     part: "gehört",      hv: "hat" },
  { v: "wohnen",    du: "wohnst",    er: "wohnt",    wir: "wohnen",   praet: "wohnte",    part: "gewohnt",     hv: "hat" },
  // TODO: add more ↓
];

// Adjektive mit Steigerung
// a=Grundform  k=Komparativ  s=Superlativ("am ...sten")
const ADJEKTIVE: { a: string; k: string; s: string }[] = [
  { a: "groß",    k: "größer",    s: "am größten"    },
  { a: "klein",   k: "kleiner",   s: "am kleinsten"  },
  { a: "schnell", k: "schneller", s: "am schnellsten"},
  { a: "langsam", k: "langsamer", s: "am langsamsten"},
  { a: "warm",    k: "wärmer",    s: "am wärmsten"   },
  { a: "kalt",    k: "kälter",    s: "am kältesten"  },
  { a: "alt",     k: "älter",     s: "am ältesten"   },
  { a: "jung",    k: "jünger",    s: "am jüngsten"   },
  { a: "gut",     k: "besser",    s: "am besten"     },
  { a: "hoch",    k: "höher",     s: "am höchsten"   },
  { a: "lang",    k: "länger",    s: "am längsten"   },
  { a: "kurz",    k: "kürzer",    s: "am kürzesten"  },
  { a: "schwer",  k: "schwerer",  s: "am schwersten" },
  { a: "leicht",  k: "leichter",  s: "am leichtesten"},
  { a: "hell",    k: "heller",    s: "am hellsten"   },
  { a: "stark",   k: "stärker",   s: "am stärksten"  },
  { a: "laut",    k: "lauter",    s: "am lautesten"  },
  { a: "schön",   k: "schöner",   s: "am schönsten"  },
  { a: "klug",    k: "klüger",    s: "am klügsten"   },
  // TODO: add more ↓
];

// Synonyme: w=Wort  syn=Synonym  f1/f2=Falschantworten
const SYNONYME: { w: string; syn: string; f1: string; f2: string }[] = [
  { w: "froh",     syn: "glücklich",    f1: "traurig",   f2: "müde"     },
  { w: "schnell",  syn: "rasch",        f1: "langsam",   f2: "schwer"   },
  { w: "schön",    syn: "hübsch",       f1: "hässlich",  f2: "laut"     },
  { w: "klug",     syn: "intelligent",  f1: "dumm",      f2: "faul"     },
  { w: "mutig",    syn: "tapfer",       f1: "feige",     f2: "traurig"  },
  { w: "sprechen", syn: "reden",        f1: "schweigen", f2: "laufen"   },
  { w: "beginnen", syn: "anfangen",     f1: "aufhören",  f2: "schlafen" },
  { w: "helfen",   syn: "unterstützen", f1: "behindern", f2: "schaden"  },
  { w: "wütend",   syn: "zornig",       f1: "fröhlich",  f2: "ruhig"    },
  { w: "schauen",  syn: "blicken",      f1: "hören",     f2: "riechen"  },
  // TODO: add more ↓
];

// ─── K1 EXPANSION: Körperteile (Bodyparts) ─────────────────────────────────
const KÖRPERTEILE: { n: string; a: string; p: string; s: number }[] = [
  { n: "Kopf",       a: "der", p: "Köpfe",       s: 1 },
  { n: "Auge",       a: "das", p: "Augen",       s: 2 },
  { n: "Ohr",        a: "das", p: "Ohren",       s: 1 },
  { n: "Nase",       a: "die", p: "Nasen",       s: 2 },
  { n: "Mund",       a: "der", p: "Münder",      s: 1 },
  { n: "Zahn",       a: "der", p: "Zähne",       s: 1 },
  { n: "Zunge",      a: "die", p: "Zungen",      s: 2 },
  { n: "Hals",       a: "der", p: "Hälse",       s: 1 },
  { n: "Arm",        a: "der", p: "Arme",        s: 1 },
  { n: "Hand",       a: "die", p: "Hände",       s: 1 },
  { n: "Finger",     a: "der", p: "Finger",      s: 2 },
  { n: "Bauch",      a: "der", p: "Bäuche",      s: 1 },
  { n: "Bein",       a: "das", p: "Beine",       s: 1 },
  { n: "Knie",       a: "das", p: "Knie",        s: 1 },
  { n: "Fuß",        a: "der", p: "Füße",        s: 1 },
  { n: "Herz",       a: "das", p: "Herzen",      s: 1 },
  { n: "Rücken",     a: "der", p: "Rücken",      s: 2 },
  { n: "Lunge",      a: "die", p: "Lungen",      s: 2 },
];

// ─── K1 EXPANSION: Haushalt (Household Items) ──────────────────────────────
const HAUSHALT: { n: string; a: string; p: string; s: number }[] = [
  { n: "Tisch",      a: "der", p: "Tische",      s: 1 },
  { n: "Stuhl",      a: "der", p: "Stühle",      s: 1 },
  { n: "Bett",       a: "das", p: "Betten",      s: 1 },
  { n: "Schrank",    a: "der", p: "Schränke",    s: 1 },
  { n: "Tür",        a: "die", p: "Türen",       s: 1 },
  { n: "Fenster",    a: "das", p: "Fenster",     s: 2 },
  { n: "Lampe",      a: "die", p: "Lampen",      s: 2 },
  { n: "Sofa",       a: "das", p: "Sofas",       s: 2 },
  { n: "Spiegel",    a: "der", p: "Spiegel",     s: 2 },
  { n: "Regal",      a: "das", p: "Regale",      s: 2 },
  { n: "Kühlschrank",a: "der", p: "Kühlschränke",s: 3 },
  { n: "Herd",       a: "der", p: "Herde",       s: 1 },
];

// ─── K1 EXPANSION: Tiere (Animals) ────────────────────────────────────────
const TIERE: { n: string; a: string; p: string; s: number }[] = [
  { n: "Hund",       a: "der", p: "Hunde",       s: 1 },
  { n: "Katze",      a: "die", p: "Katzen",      s: 2 },
  { n: "Vogel",      a: "der", p: "Vögel",       s: 2 },
  { n: "Fisch",      a: "der", p: "Fische",      s: 1 },
  { n: "Pferd",      a: "das", p: "Pferde",      s: 1 },
  { n: "Kuh",        a: "die", p: "Kühe",        s: 1 },
  { n: "Schaf",      a: "das", p: "Schafe",      s: 1 },
  { n: "Schwein",    a: "das", p: "Schweine",    s: 1 },
  { n: "Huhn",       a: "das", p: "Hühner",      s: 1 },
  { n: "Ente",       a: "die", p: "Enten",       s: 2 },
  { n: "Biene",      a: "die", p: "Bienen",      s: 2 },
  { n: "Schmetterling",a: "der", p: "Schmetterlinge", s: 3 },
  { n: "Maus",       a: "die", p: "Mäuse",       s: 1 },
  { n: "Löwe",       a: "der", p: "Löwen",       s: 2 },
];

// ─── K1 EXPANSION: Familie (Family) ────────────────────────────────────────
const FAMILIE: { n: string; a: string; p: string; s: number }[] = [
  { n: "Mutter",     a: "die", p: "Mütter",      s: 2 },
  { n: "Vater",      a: "der", p: "Väter",       s: 2 },
  { n: "Bruder",     a: "der", p: "Brüder",      s: 2 },
  { n: "Schwester",  a: "die", p: "Schwestern",  s: 3 },
  { n: "Großmutter", a: "die", p: "Großmütter",  s: 3 },
  { n: "Großvater",  a: "der", p: "Großväter",   s: 3 },
  { n: "Opa",        a: "der", p: "Opas",        s: 2 },
  { n: "Oma",        a: "die", p: "Omas",        s: 2 },
  { n: "Tante",      a: "die", p: "Tanten",      s: 2 },
  { n: "Onkel",      a: "der", p: "Onkel",       s: 2 },
  { n: "Cousin",     a: "der", p: "Cousins",     s: 2 },
  { n: "Cousine",    a: "die", p: "Cousinen",    s: 3 },
];

// ─── K1 EXPANSION: Lebensmittel (Food & Drink) ─────────────────────────────
const LEBENSMITTEL: { n: string; a: string; p: string; s: number }[] = [
  { n: "Apfel",      a: "der", p: "Äpfel",       s: 2 },
  { n: "Birne",      a: "die", p: "Birnen",      s: 2 },
  { n: "Banane",     a: "die", p: "Bananen",     s: 3 },
  { n: "Orange",     a: "die", p: "Orangen",     s: 2 },
  { n: "Erdbeere",   a: "die", p: "Erdbeeren",   s: 3 },
  { n: "Tomate",     a: "die", p: "Tomaten",     s: 2 },
  { n: "Kartoffel",  a: "die", p: "Kartoffeln",  s: 3 },
  { n: "Karotte",    a: "die", p: "Karotten",    s: 2 },
  { n: "Brot",       a: "das", p: "Brote",       s: 1 },
  { n: "Butter",     a: "die", p: "Buttern",     s: 2 },
  { n: "Käse",       a: "der", p: "Käse",        s: 2 },
  { n: "Ei",         a: "das", p: "Eier",        s: 1 },
  { n: "Milch",      a: "die", p: "Milche",      s: 1 },
  { n: "Wasser",     a: "das", p: "Wasser",      s: 2 },
  { n: "Saft",       a: "der", p: "Säfte",       s: 1 },
];

// Antonyme: w=Wort  ant=Antonym  f1/f2=Falschantworten
const ANTONYME: { w: string; ant: string; f1: string; f2: string }[] = [
  { w: "hell",      ant: "dunkel",      f1: "warm",      f2: "groß"    },
  { w: "früh",      ant: "spät",        f1: "schnell",   f2: "laut"    },
  { w: "nass",      ant: "trocken",     f1: "weich",     f2: "ruhig"   },
  { w: "laut",      ant: "leise",       f1: "warm",      f2: "schnell" },
  { w: "sauber",    ant: "schmutzig",   f1: "klein",     f2: "weich"   },
  { w: "fröhlich",  ant: "traurig",     f1: "groß",      f2: "kalt"    },
  { w: "anfangen",  ant: "aufhören",    f1: "schlafen",  f2: "lernen"  },
  { w: "kaufen",    ant: "verkaufen",   f1: "lernen",    f2: "sehen"   },
  { w: "öffnen",    ant: "schließen",   f1: "gehen",     f2: "trinken" },
  { w: "arm",       ant: "reich",       f1: "klein",     f2: "alt"     },
  // TODO: add more ↓
];

// Kasus-Sätze: satz=Lückentext  kasus=Kasusname  r=richtig  f=Falschoptionen[]
const KASUS_SAETZE: { satz: string; kasus: string; r: string; f: string[] }[] = [
  { satz: "Ich sehe ___ Hund.",             kasus: "Akkusativ",  r: "den", f: ["der", "dem", "des"] },
  { satz: "Er hilft ___ Kind.",             kasus: "Dativ",      r: "dem", f: ["das", "den", "des"] },
  { satz: "___ Hund bellt laut.",           kasus: "Nominativ",  r: "Der", f: ["Den", "Dem", "Das"] },
  { satz: "Das Fell ___ Hundes ist weich.", kasus: "Genitiv",    r: "des", f: ["der", "den", "dem"] },
  { satz: "Ich sehe ___ Mädchen.",          kasus: "Akkusativ",  r: "das", f: ["die", "der", "dem"] },
  { satz: "Er gibt ___ Frau ein Buch.",     kasus: "Dativ",      r: "der", f: ["die", "das", "den"] },
  { satz: "___ Schule ist groß.",           kasus: "Nominativ",  r: "Die", f: ["Den", "Dem", "Das"] },
  { satz: "Ich kenne ___ Lehrerin.",        kasus: "Akkusativ",  r: "die", f: ["der", "das", "dem"] },
  { satz: "Er folgt ___ Katze.",            kasus: "Dativ",      r: "der", f: ["die", "das", "den"] },
  { satz: "___ Kind spielt im Garten.",     kasus: "Nominativ",  r: "Das", f: ["Den", "Die", "Des"] },
  { satz: "Das Auto ___ Vaters ist rot.",   kasus: "Genitiv",    r: "des", f: ["der", "den", "dem"] },
  // TODO: add more ↓
];

// Adjektiv-Gegenteilpaare für K3
// w=Wort  g=Gegenteil  f1/f2=Falschantworten
const GEGENTEIL_PAARE: { w: string; g: string; f1: string; f2: string }[] = [
  { w: "warm",    g: "kalt",      f1: "heiß",     f2: "kühl"     },
  { w: "groß",    g: "klein",     f1: "hoch",     f2: "lang"     },
  { w: "alt",     g: "jung",      f1: "neu",      f2: "frisch"   },
  { w: "hell",    g: "dunkel",    f1: "grau",     f2: "matt"     },
  { w: "schnell", g: "langsam",   f1: "träge",    f2: "faul"     },
  { w: "laut",    g: "leise",     f1: "ruhig",    f2: "still"    },
  { w: "nass",    g: "trocken",   f1: "feucht",   f2: "frisch"   },
  { w: "hart",    g: "weich",     f1: "zart",     f2: "sanft"    },
  { w: "stark",   g: "schwach",   f1: "kraftlos", f2: "müde"     },
  { w: "schön",   g: "hässlich",  f1: "unschön",  f2: "grau"     },
  { w: "früh",    g: "spät",      f1: "pünktlich",f2: "langsam"  },
  { w: "lang",    g: "kurz",      f1: "eng",      f2: "schmal"   },
  // TODO: add more ↓
];

// Satzzeichen-Templates für K1
const SATZZEICHEN_TEMPLATES: { satz: string; zz: string; f: string[] }[] = [
  { satz: "Wie heißt du",     zz: "?", f: [".", "!"] },
  { satz: "Ich heiße Anna",   zz: ".", f: ["?", "!"] },
  { satz: "Komm sofort her",  zz: "!", f: [".", "?"] },
  { satz: "Was machst du",    zz: "?", f: [".", "!"] },
  { satz: "Das ist schön",    zz: ".", f: ["?", "!"] },
  { satz: "Hilfe",            zz: "!", f: [".", "?"] },
  { satz: "Wo wohnst du",     zz: "?", f: [".", "!"] },
  { satz: "Ich bin müde",     zz: ".", f: ["?", "!"] },
  { satz: "Vorsicht",         zz: "!", f: [".", "?"] },
  { satz: "Wann kommst du",   zz: "?", f: [".", "!"] },
  // TODO: add more ↓
];

// ─── K2 EXPANSION: Zahlen (Numbers 1-100) ────────────────────────────────────
const ZAHLEN_K2: { num: number; wort: string }[] = [
  { num: 1, wort: "eins" }, { num: 2, wort: "zwei" }, { num: 3, wort: "drei" },
  { num: 4, wort: "vier" }, { num: 5, wort: "fünf" }, { num: 6, wort: "sechs" },
  { num: 7, wort: "sieben" }, { num: 8, wort: "acht" }, { num: 9, wort: "neun" },
  { num: 10, wort: "zehn" }, { num: 11, wort: "elf" }, { num: 12, wort: "zwölf" },
  { num: 13, wort: "dreizehn" }, { num: 14, wort: "vierzehn" }, { num: 15, wort: "fünfzehn" },
  { num: 16, wort: "sechzehn" }, { num: 17, wort: "siebzehn" }, { num: 18, wort: "achtzehn" },
  { num: 19, wort: "neunzehn" }, { num: 20, wort: "zwanzig" }, { num: 21, wort: "einundzwanzig" },
  { num: 25, wort: "fünfundzwanzig" }, { num: 30, wort: "dreißig" }, { num: 35, wort: "fünfunddreißig" },
  { num: 40, wort: "vierzig" }, { num: 45, wort: "fünfundvierzig" }, { num: 50, wort: "fünfzig" },
  { num: 60, wort: "sechzig" }, { num: 70, wort: "siebzig" }, { num: 80, wort: "achtzig" },
  { num: 90, wort: "neunzig" }, { num: 100, wort: "hundert" },
];

// ─── K2 EXPANSION: Farben (Colors) ────────────────────────────────────────────
const FARBEN_K2: { n: string; a: string; p: string }[] = [
  { n: "rot",      a: "rot",      p: "rote" },
  { n: "blau",     a: "blau",     p: "blaue" },
  { n: "grün",     a: "grün",     p: "grüne" },
  { n: "gelb",     a: "gelb",     p: "gelbe" },
  { n: "schwarz",  a: "schwarz",  p: "schwarze" },
  { n: "weiß",     a: "weiß",     p: "weiße" },
  { n: "braun",    a: "braun",    p: "braune" },
  { n: "rosa",     a: "rosa",     p: "rosa" },
  { n: "orange",   a: "orange",   p: "orange" },
  { n: "lila",     a: "lila",     p: "lila" },
  { n: "grau",     a: "grau",     p: "graue" },
  { n: "pink",     a: "pink",     p: "pinke" },
];

// ─── K2 EXPANSION: Zeit (Time) ────────────────────────────────────────────────
const ZEIT_K2: { num: number; name: string; text: string }[] = [
  { num: 1, name: "Morgen", text: "früh am Morgen" },
  { num: 2, name: "Vormittag", text: "am Vormittag" },
  { num: 3, name: "Mittag", text: "zur Mittagszeit" },
  { num: 4, name: "Nachmittag", text: "am Nachmittag" },
  { num: 5, name: "Abend", text: "am Abend" },
  { num: 6, name: "Nacht", text: "in der Nacht" },
];

// ─── K2 EXPANSION: Berufe (Professions) ───────────────────────────────────────
const BERUFE_K2: { n: string; a: string; p: string }[] = [
  { n: "Lehrer",        a: "der", p: "Lehrer" },
  { n: "Lehrerin",      a: "die", p: "Lehrerinnen" },
  { n: "Arzt",          a: "der", p: "Ärzte" },
  { n: "Ärztin",        a: "die", p: "Ärztinnen" },
  { n: "Polizist",      a: "der", p: "Polizisten" },
  { n: "Feuerwehrmann", a: "der", p: "Feuerwehrmänner" },
  { n: "Koch",          a: "der", p: "Köche" },
  { n: "Köchin",        a: "die", p: "Köchinnen" },
  { n: "Bauer",         a: "der", p: "Bauern" },
  { n: "Maler",         a: "der", p: "Maler" },
  { n: "Tänzer",        a: "der", p: "Tänzer" },
  { n: "Tänzerin",      a: "die", p: "Tänzerinnen" },
  { n: "Sänger",        a: "der", p: "Sänger" },
  { n: "Sängerin",      a: "die", p: "Sängerinnen" },
  { n: "Fahrer",        a: "der", p: "Fahrer" },
];

// ─── K2 EXPANSION: Gegensätze (Opposites/Antonyms K2) ────────────────────────
const GEGENSAETZE_K2: { a: string; b: string }[] = [
  { a: "groß", b: "klein" },
  { a: "warm", b: "kalt" },
  { a: "hell", b: "dunkel" },
  { a: "schnell", b: "langsam" },
  { a: "laut", b: "leise" },
  { a: "alt", b: "jung" },
  { a: "lang", b: "kurz" },
  { a: "oben", b: "unten" },
  { a: "links", b: "rechts" },
  { a: "vorne", b: "hinten" },
  { a: "sauber", b: "schmutzig" },
  { a: "stark", b: "schwach" },
  { a: "dick", b: "dünn" },
  { a: "früh", b: "spät" },
  { a: "früher", b: "später" },
];

// Konjunktiv I für K7: v=Verb  er=Konjunktiv-I-Form(er/sie/es)
const KONJ1: { v: string; er: string }[] = [
  { v: "sein",     er: "sei"     },
  { v: "haben",    er: "habe"    },
  { v: "werden",   er: "werde"   },
  { v: "gehen",    er: "gehe"    },
  { v: "kommen",   er: "komme"   },
  { v: "spielen",  er: "spiele"  },
  { v: "lernen",   er: "lerne"   },
  { v: "lesen",    er: "lese"    },
  { v: "machen",   er: "mache"   },
  { v: "wohnen",   er: "wohne"   },
  { v: "arbeiten", er: "arbeite" },
  { v: "sprechen", er: "spreche" },
  // TODO: add more ↓
];

// Passiv-Sätze für K7
// aktiv=Ausgangssatz  passiv=richtiges Passiv  f1/f2=Falschformen
const PASSIV_SAETZE: { aktiv: string; passiv: string; f1: string; f2: string }[] = [
  { aktiv: "Man öffnet das Fenster.",   passiv: "Das Fenster wird geöffnet.",  f1: "Das Fenster wurde geöffnet.",  f2: "Das Fenster ist geöffnet."  },
  { aktiv: "Man backt den Kuchen.",     passiv: "Der Kuchen wird gebacken.",   f1: "Der Kuchen wurde gebacken.",   f2: "Der Kuchen ist gebacken."   },
  { aktiv: "Man renoviert das Haus.",   passiv: "Das Haus wird renoviert.",    f1: "Das Haus wurde renoviert.",    f2: "Das Haus ist renoviert."    },
  { aktiv: "Man schreibt den Brief.",   passiv: "Der Brief wird geschrieben.", f1: "Der Brief wurde geschrieben.", f2: "Der Brief ist geschrieben." },
  { aktiv: "Man liest das Buch.",       passiv: "Das Buch wird gelesen.",      f1: "Das Buch wurde gelesen.",      f2: "Das Buch ist gelesen."      },
  { aktiv: "Man repariert das Auto.",   passiv: "Das Auto wird repariert.",    f1: "Das Auto wurde repariert.",    f2: "Das Auto ist repariert."    },
  // TODO: add more ↓
];

// Nebensatztypen für K8
const NEBENSATZ_TYPEN: { satz: string; typ: string; f: string[] }[] = [
  { satz: "Er lernte, weil er müde war.",      typ: "Kausalsatz",      f: ["Konzessivsatz", "Finalsatz",    "Konditionalsatz"] },
  { satz: "Er lernte, obwohl es schwer war.",  typ: "Konzessivsatz",   f: ["Kausalsatz",    "Finalsatz",    "Temporalsatz"]    },
  { satz: "Er lernte, damit er besteht.",      typ: "Finalsatz",       f: ["Kausalsatz",    "Konzessivsatz","Konditionalsatz"] },
  { satz: "Er lernte, wenn er Zeit hatte.",    typ: "Konditionalsatz", f: ["Kausalsatz",    "Temporalsatz", "Finalsatz"]       },
  { satz: "Er lernte, als er jung war.",       typ: "Temporalsatz",    f: ["Kausalsatz",    "Konditionalsatz","Konzessivsatz"] },
  { satz: "Er lernte, da er Prüfung hatte.",   typ: "Kausalsatz",      f: ["Konzessivsatz", "Temporalsatz", "Finalsatz"]      },
  { satz: "Er lernte, falls es nötig ist.",    typ: "Konditionalsatz", f: ["Kausalsatz",    "Temporalsatz", "Konzessivsatz"]  },
  // TODO: add more ↓
];

// Wortarten-Erkennungslisten (K2) — TODO: füllen
const NOMEN_WA   = NOMEN.map((x) => x.n);
const VERBEN_WA  = VERBEN.map((x) => x.v);
const ADJ_WA     = ADJEKTIVE.map((x) => x.a);
const ANDERE_WA  = ["und", "oder", "aber", "weil", "wenn", "dann", "auch", "sehr", "immer", "oft"];

// ─── GENERATOR-FUNKTIONEN ─────────────────────────────────────────────────────

// K1-K2: Artikel (der/die/das)
function genArtikel(topic: string, subtopic: string): DeutschQuestion {
  const { n, a } = pick(NOMEN);
  return mkMCQ(topic, subtopic, `Welcher Artikel passt? ___ ${n}`, a,
    ["der", "die", "das"].filter((x) => x !== a));
}

// ─── K1 EXPANSION GENERATORS ──────────────────────────────────────────────────

// K1: Körperteile (Body Parts)
function genKörperteile(): DeutschQuestion {
  const { n, a } = pick(KÖRPERTEILE);
  return mkMCQ("körperteile", "körperteile_k1", `Welcher Artikel passt? ___ ${n}`, a,
    ["der", "die", "das"].filter((x) => x !== a));
}

// K1: Haushalt (Household Items)
function genHaushalt(): DeutschQuestion {
  const { n, a } = pick(HAUSHALT);
  return mkMCQ("haus_möbel", "haushalt_k1", `Welcher Artikel passt? ___ ${n}`, a,
    ["der", "die", "das"].filter((x) => x !== a));
}

// K1: Tiere (Animals)
function genTiere(): DeutschQuestion {
  const { n, a } = pick(TIERE);
  return mkMCQ("tiere", "tiere_k1", `Welcher Artikel passt? ___ ${n}`, a,
    ["der", "die", "das"].filter((x) => x !== a));
}

// K1: Familie (Family)
function genFamilie(): DeutschQuestion {
  const { n, a } = pick(FAMILIE);
  return mkMCQ("familie", "familie_k1", `Welcher Artikel passt? ___ ${n}`, a,
    ["der", "die", "das"].filter((x) => x !== a));
}

// K1: Lebensmittel (Food & Drink)
function genLebensmittel(): DeutschQuestion {
  const { n, a } = pick(LEBENSMITTEL);
  return mkMCQ("lebensmittel", "lebensmittel_k1", `Welcher Artikel passt? ___ ${n}`, a,
    ["der", "die", "das"].filter((x) => x !== a));
}

// ─── K2 EXPANSION GENERATORS ──────────────────────────────────────────────────

// K2: Zahlen (Numbers)
function genZahlen(): DeutschQuestion {
  const item = pick(ZAHLEN_K2.filter((x) => x.num <= 50));
  return mkMCQ("zahlen", "zahlen_k2",
    `Welche Zahl ist das? ${item.num}`,
    item.wort,
    shuffle(ZAHLEN_K2.filter((x) => x.wort !== item.wort).map((x) => x.wort)).slice(0, 3));
}

// K2: Farben (Colors)
function genFarben(): DeutschQuestion {
  const { n, a } = pick(FARBEN_K2);
  return mkMCQ("farben", "farben_k2", `Welche Farbe ist das? ___`, n,
    FARBEN_K2.filter((x) => x.n !== n).map((x) => x.n).slice(0, 3));
}

// K2: Zeit (Time of day)
function genZeit(): DeutschQuestion {
  const { name, text } = pick(ZEIT_K2);
  return mkMCQ("zeit", "zeit_k2", `Wann ist das? ${text}?`, name,
    ZEIT_K2.filter((x) => x.name !== name).map((x) => x.name).slice(0, 3));
}

// K2: Berufe (Professions)
function genBerufe(): DeutschQuestion {
  const { n, a } = pick(BERUFE_K2);
  return mkMCQ("berufe", "berufe_k2", `Welcher Beruf ist das? Ein ___ / Eine ___`, n,
    BERUFE_K2.filter((x) => x.n !== n).map((x) => x.n).slice(0, 3));
}

// K2: Gegensätze (Opposites)
function genGegensaetze(): DeutschQuestion {
  const pair = pick(GEGENSAETZE_K2);
  const showA = Math.random() > 0.5;
  const correct = showA ? pair.b : pair.a;
  const wrong = showA ? pair.a : pair.b;
  return mkMCQ("gegensaetze", "gegensaetze_k2",
    `Gegenteil von '${wrong}':`, correct,
    GEGENSAETZE_K2.filter((x) => x.a !== wrong && x.b !== wrong).map((x) => x.a).slice(0, 3));
}

// K1: Silben zählen
function genSilben(): DeutschQuestion {
  const { n, s } = pick(NOMEN.filter((x) => x.s <= 3));
  return mkMCQ("buchstaben", "silben",
    `Wie viele Silben hat '${n}'?`, String(s),
    [1, 2, 3].filter((x) => x !== s).map(String));
}

// K1: Satzzeichen
function genSatzzeichen(): DeutschQuestion {
  const { satz, zz, f } = pick(SATZZEICHEN_TEMPLATES);
  return mkMCQ("saetze_k1", "satzzeichen_k1",
    `Satzzeichen am Ende: '${satz}___'`, zz, f);
}

// K2: Nomen erkennen (aus 4 Worttypen)
function genNomenErkennen(): DeutschQuestion {
  const opts = shuffle([pick(NOMEN_WA), pick(VERBEN_WA), pick(ADJ_WA), pick(ANDERE_WA)]);
  // Sicherstellen dass der richtige wirklich ein Nomen ist
  const correct = opts.find((o) => NOMEN_WA.includes(o)) ?? opts[0];
  return mkMCQ("wortarten_k2", "nomen_k2",
    "Welches Wort ist ein Nomen?", correct,
    opts.filter((o) => o !== correct));
}

// K2: Verb erkennen
function genVerbErkennen(): DeutschQuestion {
  const opts = shuffle([pick(VERBEN_WA), pick(NOMEN_WA), pick(ADJ_WA), pick(ANDERE_WA)]);
  const correct = opts.find((o) => VERBEN_WA.includes(o)) ?? opts[0];
  return mkMCQ("wortarten_k2", "verben_k2",
    "Welches Wort ist ein Verb?", correct,
    opts.filter((o) => o !== correct));
}

// K3: Plural bilden (MCQ)
function genPlural(): DeutschQuestion {
  const { n, p } = pick(NOMEN);
  const wrongPlurale = shuffle(NOMEN.filter((x) => x.n !== n && x.p !== p).map((x) => x.p)).slice(0, 3);
  return mkMCQ("wortarten_k3", "plural",
    `Plural von '${n}' →`, p, wrongPlurale);
}

// K3: Verb konjugieren (er/sie/es)
function genVerbKonj(): DeutschQuestion {
  const { v, er, du, wir } = pick(VERBEN);
  return mkMCQ("wortarten_k3", "verben_k3",
    `Konjugiere (er/sie/es): ___ ${v}`,
    er, [du, wir].filter((x) => x !== er));
}

// K3: Adjektiv Gegenteil
function genGegenteil(): DeutschQuestion {
  const { w, g, f1, f2 } = pick(GEGENTEIL_PAARE);
  return mkMCQ("wortarten_k3", "adjektive_gegenteil",
    `Gegenteil von '${w}'?`, g, [f1, f2]);
}

// K4: Kasus (mit Kasusfilter für spezifische Subtopics)
function genKasus(kasusFocus?: string): DeutschQuestion {
  const pool = kasusFocus
    ? KASUS_SAETZE.filter((k) => k.kasus === kasusFocus)
    : KASUS_SAETZE;
  const { satz, kasus, r, f } = pick(pool.length > 0 ? pool : KASUS_SAETZE);
  const subMap: Record<string, string> = {
    Nominativ: "nominativ", Akkusativ: "akkusativ",
    Dativ: "dativ", Genitiv: "genitiv",
  };
  return mkMCQ("kasus", subMap[kasus] ?? "nominativ", satz, r, f);
}

// K4: Präteritum
function genPraeteritum(): DeutschQuestion {
  const vb = pick(VERBEN);
  const wrong = shuffle(VERBEN.filter((x) => x.v !== vb.v).map((x) => x.praet)).slice(0, 3);
  return mkMCQ("zeitformen_k4", "praeteritum",
    `Präteritum (er/sie/es) von '${vb.v}':`, vb.praet, wrong);
}

// K4: Perfekt – haben oder sein
function genPerfekt(): DeutschQuestion {
  const vb = pick(VERBEN);
  const falsch = vb.hv === "hat" ? "ist" : "hat";
  return mkMCQ("zeitformen_k4", "perfekt",
    `Hilfsverb im Perfekt: 'Er ___ ${vb.part}.'`,
    vb.hv, [falsch, vb.hv === "hat" ? "war" : "hatte"]);
}

// K5: Komparativ
function genKomparativ(): DeutschQuestion {
  const adj = pick(ADJEKTIVE);
  const wrong = shuffle(ADJEKTIVE.filter((x) => x.a !== adj.a).map((x) => x.k)).slice(0, 3);
  return mkMCQ("wortarten_k5", "steigerung",
    `Komparativ von '${adj.a}':`, adj.k, wrong);
}

// K5: Superlativ
function genSuperlativ(): DeutschQuestion {
  const adj = pick(ADJEKTIVE);
  const wrong = shuffle(ADJEKTIVE.filter((x) => x.a !== adj.a).map((x) => x.s)).slice(0, 3);
  return mkMCQ("wortarten_k5", "steigerung",
    `Superlativ von '${adj.a}':`, adj.s, wrong);
}

// K6: Synonym
function genSynonym(): DeutschQuestion {
  const { w, syn, f1, f2 } = pick(SYNONYME);
  return mkMCQ("wortschatz_k6", "synonyme",
    `Gleichbedeutendes Wort für '${w}'?`, syn, [f1, f2]);
}

// K6: Antonym
function genAntonym(): DeutschQuestion {
  const { w, ant, f1, f2 } = pick(ANTONYME);
  return mkMCQ("wortschatz_k6", "antonyme",
    `Gegenteil von '${w}'?`, ant, [f1, f2]);
}

// ─── K7 WORTLISTEN ────────────────────────────────────────────────────────────

const SYNONYME_K7: { w: string; syn: string; f1: string; f2: string }[] = [
  { w: "behaupten",        syn: "vorgeben",         f1: "schweigen",     f2: "fragen" },
  { w: "erwidern",         syn: "antworten",         f1: "fragen",        f2: "behaupten" },
  { w: "schildern",        syn: "beschreiben",       f1: "vergessen",     f2: "untersuchen" },
  { w: "erläutern",        syn: "erklären",          f1: "verschweigen",  f2: "widersprechen" },
  { w: "belegen",          syn: "beweisen",          f1: "bezweifeln",    f2: "ignorieren" },
  { w: "widersprechen",    syn: "ablehnen",          f1: "zustimmen",     f2: "bestätigen" },
  { w: "analysieren",      syn: "untersuchen",       f1: "ignorieren",    f2: "vergessen" },
  { w: "veranschaulichen", syn: "darstellen",        f1: "verbergen",     f2: "missachten" },
  { w: "betonen",          syn: "hervorheben",       f1: "abschwächen",   f2: "übergehen" },
  { w: "feststellen",      syn: "bemerken",          f1: "übersehen",     f2: "bezweifeln" },
  { w: "vergleichen",      syn: "gegenüberstellen",  f1: "trennen",       f2: "ignorieren" },
  { w: "begründen",        syn: "rechtfertigen",     f1: "bestreiten",    f2: "weglassen" },
  { w: "formulieren",      syn: "ausdrücken",        f1: "verschweigen",  f2: "missverstehen" },
  { w: "charakterisieren", syn: "kennzeichnen",      f1: "verstecken",    f2: "verwechseln" },
  { w: "verdeutlichen",    syn: "klarstellen",       f1: "verwirren",     f2: "verschweigen" },
  { w: "zustimmen",        syn: "bestätigen",        f1: "widersprechen", f2: "zweifeln" },
  { w: "vermuten",         syn: "annehmen",          f1: "wissen",        f2: "beweisen" },
  { w: "überzeugend",      syn: "schlüssig",         f1: "widersprüchlich", f2: "unklar" },
  { w: "passend",          syn: "treffend",          f1: "falsch",        f2: "ungeeignet" },
  { w: "bedeutend",        syn: "wesentlich",        f1: "unwichtig",     f2: "nebensächlich" },
  { w: "kritisieren",      syn: "bemängeln",         f1: "loben",         f2: "ignorieren" },
  { w: "beobachten",       syn: "betrachten",        f1: "übersehen",     f2: "ignorieren" },
  { w: "schlussfolgern",   syn: "folgern",           f1: "bezweifeln",    f2: "vermuten" },
  { w: "widerlegen",       syn: "entkräften",        f1: "bestätigen",    f2: "beweisen" },
  { w: "verfassen",        syn: "schreiben",         f1: "lesen",         f2: "korrigieren" },
  { w: "erwähnen",         syn: "nennen",            f1: "verschweigen",  f2: "vergessen" },
  { w: "darstellen",       syn: "zeigen",            f1: "verbergen",     f2: "weglassen" },
  { w: "beurteilen",       syn: "bewerten",          f1: "ignorieren",    f2: "beschreiben" },
  { w: "aufführen",        syn: "auflisten",         f1: "weglassen",     f2: "vergessen" },
  { w: "anführen",         syn: "zitieren",          f1: "erfinden",      f2: "weglassen" },
];

const ANTONYME_K7: { w: string; ant: string; f1: string; f2: string }[] = [
  { w: "objektiv",      ant: "subjektiv",     f1: "neutral",      f2: "sachlich" },
  { w: "explizit",      ant: "implizit",      f1: "klar",         f2: "deutlich" },
  { w: "konstruktiv",   ant: "destruktiv",    f1: "positiv",      f2: "hilfreich" },
  { w: "konkret",       ant: "abstrakt",      f1: "greifbar",     f2: "anschaulich" },
  { w: "rational",      ant: "irrational",    f1: "logisch",      f2: "vernünftig" },
  { w: "formal",        ant: "informell",     f1: "offiziell",    f2: "sachlich" },
  { w: "aktiv",         ant: "passiv",        f1: "tätig",        f2: "engagiert" },
  { w: "zustimmen",     ant: "widersprechen", f1: "ablehnen",     f2: "verweigern" },
  { w: "loben",         ant: "kritisieren",   f1: "tadeln",       f2: "bemängeln" },
  { w: "fördern",       ant: "hemmen",        f1: "bremsen",      f2: "verhindern" },
  { w: "stärken",       ant: "schwächen",     f1: "belasten",     f2: "vermindern" },
  { w: "beginnen",      ant: "beenden",       f1: "aufhören",     f2: "abschließen" },
  { w: "überzeugend",   ant: "unglaubwürdig", f1: "schwach",      f2: "zweifelhaft" },
  { w: "produktiv",     ant: "unproduktiv",   f1: "ineffizient",  f2: "nutzlos" },
  { w: "einleiten",     ant: "abschließen",   f1: "beenden",      f2: "zusammenfassen" },
  { w: "vereinfachen",  ant: "verkomplizieren", f1: "erschweren", f2: "verwirren" },
  { w: "bestätigen",    ant: "widerlegen",    f1: "entkräften",   f2: "ablehnen" },
  { w: "eindeutig",     ant: "mehrdeutig",    f1: "ambivalent",   f2: "unklar" },
  { w: "ausführlich",   ant: "knapp",         f1: "kurz",         f2: "bündig" },
  { w: "sachlich",      ant: "emotional",     f1: "gefühlvoll",   f2: "subjektiv" },
];

const FREMDWOERTER_K7: { w: string; def: string; f1: string; f2: string }[] = [
  { w: "Analyse",       def: "genaue Untersuchung",              f1: "Zusammenfassung",   f2: "Einleitung" },
  { w: "Argument",      def: "Begründung / Beleg für eine These", f1: "Meinung",          f2: "Beispiel" },
  { w: "These",         def: "aufgestellte Behauptung",          f1: "Beweis",            f2: "Frage" },
  { w: "Metapher",      def: "bildlicher Ausdruck (übertragen)", f1: "Vergleich",         f2: "Alliteration" },
  { w: "Kontext",       def: "Zusammenhang, Umfeld",             f1: "Inhalt",            f2: "Struktur" },
  { w: "Struktur",      def: "Aufbau, Gliederung",               f1: "Inhalt",            f2: "Stil" },
  { w: "Intention",     def: "Absicht, Ziel",                    f1: "Meinung",           f2: "Wirkung" },
  { w: "Perspektive",   def: "Sichtweise, Blickwinkel",          f1: "Meinung",           f2: "Standpunkt" },
  { w: "Chronologie",   def: "zeitliche Reihenfolge",            f1: "Struktur",          f2: "Aufbau" },
  { w: "Kontrast",      def: "starker Gegensatz",                f1: "Vergleich",         f2: "Ähnlichkeit" },
  { w: "Symbolik",      def: "Bedeutung von Symbolen / Sinnbildern", f1: "Metapher",      f2: "Allegorie" },
  { w: "Ambiguität",    def: "Mehrdeutigkeit",                   f1: "Klarheit",          f2: "Eindeutigkeit" },
  { w: "Funktion",      def: "Aufgabe, Zweck",                   f1: "Bedeutung",         f2: "Inhalt" },
  { w: "Stilmittel",    def: "sprachliches Gestaltungsmittel",   f1: "Grammatikregel",    f2: "Wortart" },
  { w: "Protagonist",   def: "Hauptfigur eines Textes",          f1: "Erzähler",          f2: "Antagonist" },
  { w: "Antagonist",    def: "Gegenspieler des Protagonisten",   f1: "Hauptfigur",        f2: "Erzähler" },
  { w: "Erzählperspektive", def: "Standpunkt des Erzählers",     f1: "Handlung",          f2: "Thema" },
  { w: "Klimax",        def: "Steigerung zum Höhepunkt",         f1: "Wiederholung",      f2: "Kontrast" },
  { w: "Ironie",        def: "das Gegenteil des Gemeinten sagen", f1: "Metapher",         f2: "Alliteration" },
  { w: "Paraphrase",    def: "Umschreibung mit eigenen Worten",  f1: "Zitat",             f2: "Zusammenfassung" },
  { w: "Zitat",         def: "wörtliche Übernahme aus einem Text", f1: "Paraphrase",      f2: "Kommentar" },
  { w: "Inhaltsangabe", def: "kurze, sachliche Textzusammenfassung", f1: "Analyse",       f2: "Kommentar" },
  { w: "Erörterung",    def: "Abwägen von Pro und Kontra zu einer These", f1: "Analyse",  f2: "Inhaltsangabe" },
  { w: "Kommentar",     def: "persönliche Stellungnahme zu einem Thema", f1: "Analyse",   f2: "Inhaltsangabe" },
  { w: "Hyperbel",      def: "starke Übertreibung als Stilmittel", f1: "Metapher",        f2: "Ironie" },
];

// ─── K7 RELATIVSATZ-LISTEN ───────────────────────────────────────────────────

type RelNoun = { n: string; a: "der" | "die" | "das" };
const REL_NOUNS: RelNoun[] = [
  { n: "Mann",      a: "der" }, { n: "Lehrer",    a: "der" }, { n: "Freund",    a: "der" },
  { n: "Schüler",   a: "der" }, { n: "Arzt",      a: "der" }, { n: "Student",   a: "der" },
  { n: "Frau",      a: "die" }, { n: "Lehrerin",  a: "die" }, { n: "Freundin",  a: "die" },
  { n: "Stadt",     a: "die" }, { n: "Schule",    a: "die" }, { n: "Idee",      a: "die" },
  { n: "Kind",      a: "das" }, { n: "Buch",      a: "das" }, { n: "Haus",      a: "das" },
  { n: "Auto",      a: "das" }, { n: "Ergebnis",  a: "das" }, { n: "Thema",     a: "das" },
];

// Relativpronomen-Tabelle
const REL_TABLE: Record<"der"|"die"|"das", Record<"nom"|"akk"|"dat"|"gen", string>> = {
  der: { nom: "der",   akk: "den",  dat: "dem",  gen: "dessen" },
  die: { nom: "die",   akk: "die",  dat: "der",  gen: "deren"  },
  das: { nom: "das",   akk: "das",  dat: "dem",  gen: "dessen" },
};

// Falsche Optionen je Genus/Kasus
function relFalsch(a: "der"|"die"|"das", kasus: "nom"|"akk"|"dat"|"gen"): string[] {
  const correct = REL_TABLE[a][kasus];
  return Object.values(REL_TABLE).flatMap(t => Object.values(t))
    .filter(v => v !== correct)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .slice(0, 3);
}

// K7: Synonyme
function genSynonymK7(): DeutschQuestion {
  const { w, syn, f1, f2 } = pick(SYNONYME_K7);
  return mkMCQ("wortschatz_k7", "synonyme_k7",
    `Gleichbedeutendes Wort für '${w}'?`, syn, [f1, f2]);
}

// K7: Antonyme
function genAntonymK7(): DeutschQuestion {
  const { w, ant, f1, f2 } = pick(ANTONYME_K7);
  return mkMCQ("wortschatz_k7", "antonyme_k7",
    `Gegenteil von '${w}'?`, ant, [f1, f2]);
}

// K7: Fremdwörter
function genFremdwoerterK7(): DeutschQuestion {
  const { w, def, f1, f2 } = pick(FREMDWOERTER_K7);
  return mkMCQ("wortschatz_k7", "fremdwoerter_k7",
    `Was bedeutet '${w}'?`, def, [f1, f2]);
}

// K7: Relativsatz — Nominativ/Akkusativ/Dativ
function genRelativsatzK7(): DeutschQuestion {
  const { n, a } = pick(REL_NOUNS);
  const kasus = pick<"nom"|"akk"|"dat">(["nom", "akk", "dat"]);
  const correct = REL_TABLE[a][kasus];
  const wrong = relFalsch(a, kasus);
  const kasusLabel = { nom: "Nominativ", akk: "Akkusativ", dat: "Dativ" }[kasus];
  const satzteile: Record<"nom"|"akk"|"dat", string> = {
    nom: `${a === "der" ? "Der" : a === "die" ? "Die" : "Das"} ${n}, ___ dort steht, ...`,
    akk: `${a === "der" ? "Der" : a === "die" ? "Die" : "Das"} ${n}, ___ ich kenne, ...`,
    dat: `${a === "der" ? "Der" : a === "die" ? "Die" : "Das"} ${n}, ___ ich helfe, ...`,
  };
  return mkMCQ("nebensatztypen_k7", "relativsatz_k7",
    `${kasusLabel} — Ergänze: '${satzteile[kasus]}'`, correct, wrong);
}

// K7: Konjunktiv I
function genKonjunktiv1(): DeutschQuestion {
  const { v, er } = pick(KONJ1);
  const wrong = shuffle(KONJ1.filter((x) => x.v !== v).map((x) => x.er)).slice(0, 3);
  return mkMCQ("indirekte_rede", "konjunktiv_1",
    `Konjunktiv I: 'Er sagt, er ___ (${v}).'`, er, wrong);
}

// K7: Werden-Passiv
function genWerdenPassiv(): DeutschQuestion {
  const { aktiv, passiv, f1, f2 } = pick(PASSIV_SAETZE);
  return mkMCQ("passivformen_k7", "werden_passiv",
    `Passiv Präsens: '${aktiv}' →`, passiv, [f1, f2]);
}

// K8: Nebensatztyp erkennen
function genNebensatztyp(): DeutschQuestion {
  const { satz, typ, f } = pick(NEBENSATZ_TYPEN);
  return mkMCQ("komplexe_grammatik_k8", "nebensatztypen",
    `Welcher Nebensatztyp? '${satz}'`, typ, f);
}

// ─── GENERATOR-MAP ────────────────────────────────────────────────────────────
// subtopicId → Generator-Funktion
// Wird in page.tsx mit getDeutschQuestions() kombiniert

export const GENERATORS: Record<string, () => DeutschQuestion> = {
  // K1
  artikel_k1:          () => genArtikel("woerter", "artikel_k1"),
  silben:              genSilben,
  satzzeichen_k1:      genSatzzeichen,
  fehlende_woerter_k1: genSatzzeichen, // Fallback auf Satzzeichen
  // K1 EXPANSION (2026-03-17)
  körperteile_k1:      genKörperteile,
  haushalt_k1:         genHaushalt,
  tiere_k1:            genTiere,
  familie_k1:          genFamilie,
  lebensmittel_k1:     genLebensmittel,
  // K2
  artikel_k2:          () => genArtikel("wortarten_k2", "artikel_k2"),
  nomen_k2:            genNomenErkennen,
  verben_k2:           genVerbErkennen,
  // K2 EXPANSION (2026-03-17)
  zahlen_k2:           genZahlen,
  farben_k2:           genFarben,
  zeit_k2:             genZeit,
  berufe_k2:           genBerufe,
  gegensaetze_k2:      genGegensaetze,
  // K3
  plural:              genPlural,
  adjektive_gegenteil: genGegenteil,
  verben_k3:           genVerbKonj,
  // K4
  nominativ:           () => genKasus("Nominativ"),
  akkusativ:           () => genKasus("Akkusativ"),
  dativ:               () => genKasus("Dativ"),
  genitiv:             () => genKasus("Genitiv"),
  praeteritum:         genPraeteritum,
  perfekt:             genPerfekt,
  // K5
  steigerung:          () => Math.random() < 0.5 ? genKomparativ() : genSuperlativ(),
  // K6
  synonyme:            genSynonym,
  antonyme:            genAntonym,
  // K7
  konjunktiv_1:        genKonjunktiv1,
  werden_passiv:       genWerdenPassiv,
  synonyme_k7:         genSynonymK7,
  antonyme_k7:         genAntonymK7,
  fremdwoerter_k7:     genFremdwoerterK7,
  relativsatz_k7:      genRelativsatzK7,
  // K8
  nebensatztypen:      genNebensatztyp,
};

/**
 * Generiert Fragen für die gewählten Subtopics.
 * Jeder Subtopic mit Generator produziert `perSubtopic` Fragen.
 * Aufrufen in buildTest() zusammen mit getDeutschQuestions().
 */
export function generateForSubtopics(
  subtopicIds: string[],
  perSubtopic = 12
): DeutschQuestion[] {
  const result: DeutschQuestion[] = [];
  for (const id of subtopicIds) {
    if (GENERATORS[id]) {
      for (let i = 0; i < perSubtopic; i++) {
        result.push(GENERATORS[id]());
      }
    }
  }
  return result;
}
