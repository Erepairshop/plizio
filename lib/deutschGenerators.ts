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
  { n: "Hund",        a: "der", p: "Hunde",        s: 1 },
  { n: "Katze",       a: "die", p: "Katzen",        s: 2 },
  { n: "Haus",        a: "das", p: "Häuser",        s: 1 },
  { n: "Schule",      a: "die", p: "Schulen",       s: 2 },
  { n: "Kind",        a: "das", p: "Kinder",        s: 1 },
  { n: "Baum",        a: "der", p: "Bäume",         s: 1 },
  { n: "Blume",       a: "die", p: "Blumen",        s: 2 },
  { n: "Tisch",       a: "der", p: "Tische",        s: 1 },
  { n: "Auto",        a: "das", p: "Autos",         s: 2 },
  { n: "Buch",        a: "das", p: "Bücher",        s: 1 },
  { n: "Mutter",      a: "die", p: "Mütter",        s: 2 },
  { n: "Vater",       a: "der", p: "Väter",         s: 2 },
  { n: "Stadt",       a: "die", p: "Städte",        s: 1 },
  { n: "Vogel",       a: "der", p: "Vögel",         s: 2 },
  { n: "Fenster",     a: "das", p: "Fenster",       s: 2 },
  { n: "Garten",      a: "der", p: "Gärten",        s: 2 },
  { n: "Apfel",       a: "der", p: "Äpfel",         s: 2 },
  { n: "Stuhl",       a: "der", p: "Stühle",        s: 1 },
  { n: "Lampe",       a: "die", p: "Lampen",        s: 2 },
  { n: "Mädchen",     a: "das", p: "Mädchen",       s: 2 },
  { n: "Lehrer",      a: "der", p: "Lehrer",        s: 2 },
  { n: "Lehrerin",    a: "die", p: "Lehrerinnen",   s: 3 },
  { n: "Wasser",      a: "das", p: "Wasser",        s: 2 },
  { n: "Brot",        a: "das", p: "Brote",         s: 1 },
  { n: "Pferd",       a: "das", p: "Pferde",        s: 1 },
  { n: "Stern",       a: "der", p: "Sterne",        s: 1 },
  { n: "Sonne",       a: "die", p: "Sonnen",        s: 2 },
  { n: "Wolke",       a: "die", p: "Wolken",        s: 2 },
  { n: "Fluss",       a: "der", p: "Flüsse",        s: 1 },
  { n: "Zimmer",      a: "das", p: "Zimmer",        s: 2 },
  { n: "Heft",        a: "das", p: "Hefte",         s: 1 },
  { n: "Stift",       a: "der", p: "Stifte",        s: 1 },
  { n: "Klasse",      a: "die", p: "Klassen",       s: 2 },
  { n: "Satz",        a: "der", p: "Sätze",         s: 1 },
  { n: "Farbe",       a: "die", p: "Farben",        s: 2 },
  { n: "Tür",         a: "die", p: "Türen",         s: 1 },
  { n: "Flasche",     a: "die", p: "Flaschen",      s: 2 },
  { n: "Bett",        a: "das", p: "Betten",        s: 1 },
  { n: "Glas",        a: "das", p: "Gläser",        s: 1 },
  { n: "Wald",        a: "der", p: "Wälder",        s: 1 },
  { n: "Straße",      a: "die", p: "Straßen",       s: 2 },
  { n: "Berg",        a: "der", p: "Berge",         s: 1 },
  { n: "Meer",        a: "das", p: "Meere",         s: 1 },
  { n: "Brücke",      a: "die", p: "Brücken",       s: 2 },
  { n: "Küche",       a: "die", p: "Küchen",        s: 2 },
  { n: "Ball",        a: "der", p: "Bälle",         s: 1 },
  { n: "Kuchen",      a: "der", p: "Kuchen",        s: 2 },
  { n: "Schuh",       a: "der", p: "Schuhe",        s: 1 },
  { n: "Uhr",         a: "die", p: "Uhren",         s: 1 },
  { n: "Finger",      a: "der", p: "Finger",        s: 2 },
  { n: "Arm",         a: "der", p: "Arme",          s: 1 },
  { n: "Auge",        a: "das", p: "Augen",         s: 2 },
  { n: "Nase",        a: "die", p: "Nasen",         s: 2 },
  { n: "Mund",        a: "der", p: "Münder",        s: 1 },
  { n: "Haar",        a: "das", p: "Haare",         s: 1 },
  { n: "Kopf",        a: "der", p: "Köpfe",         s: 1 },
  { n: "Hand",        a: "die", p: "Hände",         s: 1 },
  { n: "Fuß",         a: "der", p: "Füße",          s: 1 },
  { n: "Bein",        a: "das", p: "Beine",         s: 1 },
  { n: "Herz",        a: "das", p: "Herzen",        s: 1 },
  { n: "Stein",       a: "der", p: "Steine",        s: 1 },
  { n: "Feuer",       a: "das", p: "Feuer",         s: 2 },
  { n: "Luft",        a: "die", p: "Lüfte",         s: 1 },
  { n: "Erde",        a: "die", p: "Erden",         s: 2 },
  { n: "Tier",        a: "das", p: "Tiere",         s: 1 },
  { n: "Fisch",       a: "der", p: "Fische",        s: 1 },
  { n: "Maus",        a: "die", p: "Mäuse",         s: 1 },
  { n: "Kuh",         a: "die", p: "Kühe",          s: 1 },
  { n: "Schaf",       a: "das", p: "Schafe",        s: 1 },
  { n: "Schwein",     a: "das", p: "Schweine",      s: 2 },
  { n: "Hase",        a: "der", p: "Hasen",         s: 2 },
  { n: "Frosch",      a: "der", p: "Frösche",       s: 1 },
  { n: "Schlange",    a: "die", p: "Schlangen",     s: 2 },
  { n: "Löwe",        a: "der", p: "Löwen",         s: 2 },
  { n: "Tiger",       a: "der", p: "Tiger",         s: 2 },
  { n: "Elefant",     a: "der", p: "Elefanten",     s: 3 },
  { n: "Affe",        a: "der", p: "Affen",         s: 2 },
  { n: "Spinne",      a: "die", p: "Spinnen",       s: 2 },
  { n: "Biene",       a: "die", p: "Bienen",        s: 2 },
  { n: "Schmetterling",a:"der", p:"Schmetterlinge", s: 4 },
  { n: "Brief",       a: "der", p: "Briefe",        s: 1 },
  { n: "Wort",        a: "das", p: "Wörter",        s: 1 },
  { n: "Lied",        a: "das", p: "Lieder",        s: 1 },
  { n: "Spiel",       a: "das", p: "Spiele",        s: 1 },
  { n: "Tasse",       a: "die", p: "Tassen",        s: 2 },
  { n: "Teller",      a: "der", p: "Teller",        s: 2 },
  { n: "Löffel",      a: "der", p: "Löffel",        s: 2 },
  { n: "Messer",      a: "das", p: "Messer",        s: 2 },
  { n: "Gabel",       a: "die", p: "Gabeln",        s: 2 },
  { n: "Topf",        a: "der", p: "Töpfe",         s: 1 },
  { n: "Pfanne",      a: "die", p: "Pfannen",       s: 2 },
  { n: "Schloss",     a: "das", p: "Schlösser",     s: 1 },
  { n: "Turm",        a: "der", p: "Türme",         s: 1 },
  { n: "Kirche",      a: "die", p: "Kirchen",       s: 2 },
  { n: "Markt",       a: "der", p: "Märkte",        s: 1 },
  { n: "Park",        a: "der", p: "Parks",         s: 1 },
  { n: "See",         a: "der", p: "Seen",          s: 1 },
  { n: "Flugzeug",    a: "das", p: "Flugzeuge",     s: 3 },
  { n: "Zug",         a: "der", p: "Züge",          s: 1 },
  { n: "Bus",         a: "der", p: "Busse",         s: 1 },
  { n: "Fahrrad",     a: "das", p: "Fahrräder",     s: 3 },
  { n: "Boot",        a: "das", p: "Boote",         s: 1 },
  { n: "Schiff",      a: "das", p: "Schiffe",       s: 1 },
];

// Verben mit vollständiger Konjugation
// v=Infinitiv  du/er/wir=Formen  praet=Präteritum  part=Partizip II  hv="hat"|"ist"
const VERBEN: { v: string; du: string; er: string; wir: string; praet: string; part: string; hv: "hat" | "ist" }[] = [
  { v: "spielen",    du: "spielst",    er: "spielt",    wir: "spielen",   praet: "spielte",    part: "gespielt",     hv: "hat" },
  { v: "laufen",     du: "läufst",     er: "läuft",     wir: "laufen",    praet: "lief",       part: "gelaufen",     hv: "ist" },
  { v: "kommen",     du: "kommst",     er: "kommt",     wir: "kommen",    praet: "kam",        part: "gekommen",     hv: "ist" },
  { v: "gehen",      du: "gehst",      er: "geht",      wir: "gehen",     praet: "ging",       part: "gegangen",     hv: "ist" },
  { v: "machen",     du: "machst",     er: "macht",     wir: "machen",    praet: "machte",     part: "gemacht",      hv: "hat" },
  { v: "sehen",      du: "siehst",     er: "sieht",     wir: "sehen",     praet: "sah",        part: "gesehen",      hv: "hat" },
  { v: "lesen",      du: "liest",      er: "liest",     wir: "lesen",     praet: "las",        part: "gelesen",      hv: "hat" },
  { v: "schreiben",  du: "schreibst",  er: "schreibt",  wir: "schreiben", praet: "schrieb",    part: "geschrieben",  hv: "hat" },
  { v: "essen",      du: "isst",       er: "isst",      wir: "essen",     praet: "aß",         part: "gegessen",     hv: "hat" },
  { v: "trinken",    du: "trinkst",    er: "trinkt",     wir: "trinken",  praet: "trank",      part: "getrunken",    hv: "hat" },
  { v: "schlafen",   du: "schläfst",   er: "schläft",   wir: "schlafen",  praet: "schlief",    part: "geschlafen",   hv: "hat" },
  { v: "fahren",     du: "fährst",     er: "fährt",     wir: "fahren",    praet: "fuhr",       part: "gefahren",     hv: "ist" },
  { v: "helfen",     du: "hilfst",     er: "hilft",     wir: "helfen",    praet: "half",       part: "geholfen",     hv: "hat" },
  { v: "kaufen",     du: "kaufst",     er: "kauft",     wir: "kaufen",    praet: "kaufte",     part: "gekauft",      hv: "hat" },
  { v: "lernen",     du: "lernst",     er: "lernt",     wir: "lernen",    praet: "lernte",     part: "gelernt",      hv: "hat" },
  { v: "sprechen",   du: "sprichst",   er: "spricht",   wir: "sprechen",  praet: "sprach",     part: "gesprochen",   hv: "hat" },
  { v: "finden",     du: "findest",    er: "findet",    wir: "finden",    praet: "fand",       part: "gefunden",     hv: "hat" },
  { v: "schwimmen",  du: "schwimmst",  er: "schwimmt",  wir: "schwimmen", praet: "schwamm",    part: "geschwommen",  hv: "ist" },
  { v: "hören",      du: "hörst",      er: "hört",      wir: "hören",     praet: "hörte",      part: "gehört",       hv: "hat" },
  { v: "wohnen",     du: "wohnst",     er: "wohnt",     wir: "wohnen",    praet: "wohnte",     part: "gewohnt",      hv: "hat" },
  { v: "fragen",     du: "fragst",     er: "fragt",     wir: "fragen",    praet: "fragte",     part: "gefragt",      hv: "hat" },
  { v: "antworten",  du: "antwortest", er: "antwortet", wir: "antworten", praet: "antwortete", part: "geantwortet",  hv: "hat" },
  { v: "bringen",    du: "bringst",    er: "bringt",    wir: "bringen",   praet: "brachte",    part: "gebracht",     hv: "hat" },
  { v: "denken",     du: "denkst",     er: "denkt",     wir: "denken",    praet: "dachte",     part: "gedacht",      hv: "hat" },
  { v: "wissen",     du: "weißt",      er: "weiß",      wir: "wissen",    praet: "wusste",     part: "gewusst",      hv: "hat" },
  { v: "kennen",     du: "kennst",     er: "kennt",     wir: "kennen",    praet: "kannte",     part: "gekannt",      hv: "hat" },
  { v: "stehen",     du: "stehst",     er: "steht",     wir: "stehen",    praet: "stand",      part: "gestanden",    hv: "hat" },
  { v: "liegen",     du: "liegst",     er: "liegt",     wir: "liegen",    praet: "lag",        part: "gelegen",      hv: "hat" },
  { v: "sitzen",     du: "sitzt",      er: "sitzt",     wir: "sitzen",    praet: "saß",        part: "gesessen",     hv: "hat" },
  { v: "öffnen",     du: "öffnest",    er: "öffnet",    wir: "öffnen",    praet: "öffnete",    part: "geöffnet",     hv: "hat" },
  { v: "schließen",  du: "schließt",   er: "schließt",  wir: "schließen", praet: "schloss",    part: "geschlossen",  hv: "hat" },
  { v: "nehmen",     du: "nimmst",     er: "nimmt",     wir: "nehmen",    praet: "nahm",       part: "genommen",     hv: "hat" },
  { v: "geben",      du: "gibst",      er: "gibt",      wir: "geben",     praet: "gab",        part: "gegeben",      hv: "hat" },
  { v: "stellen",    du: "stellst",    er: "stellt",    wir: "stellen",   praet: "stellte",    part: "gestellt",     hv: "hat" },
  { v: "legen",      du: "legst",      er: "legt",      wir: "legen",     praet: "legte",      part: "gelegt",       hv: "hat" },
  { v: "fallen",     du: "fällst",     er: "fällt",     wir: "fallen",    praet: "fiel",       part: "gefallen",     hv: "ist" },
  { v: "fliegen",    du: "fliegst",    er: "fliegt",    wir: "fliegen",   praet: "flog",       part: "geflogen",     hv: "ist" },
  { v: "steigen",    du: "steigst",    er: "steigt",    wir: "steigen",   praet: "stieg",      part: "gestiegen",    hv: "ist" },
  { v: "wachsen",    du: "wächst",     er: "wächst",    wir: "wachsen",   praet: "wuchs",      part: "gewachsen",    hv: "ist" },
  { v: "beginnen",   du: "beginnst",   er: "beginnt",   wir: "beginnen",  praet: "begann",     part: "begonnen",     hv: "hat" },
  { v: "vergessen",  du: "vergisst",   er: "vergisst",  wir: "vergessen", praet: "vergaß",     part: "vergessen",    hv: "hat" },
  { v: "verstehen",  du: "verstehst",  er: "versteht",  wir: "verstehen", praet: "verstand",   part: "verstanden",   hv: "hat" },
  { v: "arbeiten",   du: "arbeitest",  er: "arbeitet",  wir: "arbeiten",  praet: "arbeitete",  part: "gearbeitet",   hv: "hat" },
  { v: "tanzen",     du: "tanzt",      er: "tanzt",     wir: "tanzen",    praet: "tanzte",     part: "getanzt",      hv: "hat" },
  { v: "singen",     du: "singst",     er: "singt",     wir: "singen",    praet: "sang",       part: "gesungen",     hv: "hat" },
  { v: "rennen",     du: "rennst",     er: "rennt",     wir: "rennen",    praet: "rannte",     part: "gerannt",      hv: "ist" },
  { v: "schreien",   du: "schreist",   er: "schreit",   wir: "schreien",  praet: "schrie",     part: "geschrien",    hv: "hat" },
  { v: "lachen",     du: "lachst",     er: "lacht",     wir: "lachen",    praet: "lachte",     part: "gelacht",      hv: "hat" },
  { v: "weinen",     du: "weinst",     er: "weint",     wir: "weinen",    praet: "weinte",     part: "geweint",      hv: "hat" },
  { v: "zeigen",     du: "zeigst",     er: "zeigt",     wir: "zeigen",    praet: "zeigte",     part: "gezeigt",      hv: "hat" },
  { v: "suchen",     du: "suchst",     er: "sucht",     wir: "suchen",    praet: "suchte",     part: "gesucht",      hv: "hat" },
];

// Adjektive mit Steigerung
// a=Grundform  k=Komparativ  s=Superlativ("am ...sten")
const ADJEKTIVE: { a: string; k: string; s: string }[] = [
  { a: "groß",      k: "größer",      s: "am größten"      },
  { a: "klein",     k: "kleiner",     s: "am kleinsten"    },
  { a: "schnell",   k: "schneller",   s: "am schnellsten"  },
  { a: "langsam",   k: "langsamer",   s: "am langsamsten"  },
  { a: "warm",      k: "wärmer",      s: "am wärmsten"     },
  { a: "kalt",      k: "kälter",      s: "am kältesten"    },
  { a: "alt",       k: "älter",       s: "am ältesten"     },
  { a: "jung",      k: "jünger",      s: "am jüngsten"     },
  { a: "gut",       k: "besser",      s: "am besten"       },
  { a: "hoch",      k: "höher",       s: "am höchsten"     },
  { a: "lang",      k: "länger",      s: "am längsten"     },
  { a: "kurz",      k: "kürzer",      s: "am kürzesten"    },
  { a: "schwer",    k: "schwerer",    s: "am schwersten"   },
  { a: "leicht",    k: "leichter",    s: "am leichtesten"  },
  { a: "hell",      k: "heller",      s: "am hellsten"     },
  { a: "stark",     k: "stärker",     s: "am stärksten"    },
  { a: "laut",      k: "lauter",      s: "am lautesten"    },
  { a: "schön",     k: "schöner",     s: "am schönsten"    },
  { a: "klug",      k: "klüger",      s: "am klügsten"     },
  { a: "nah",       k: "näher",       s: "am nächsten"     },
  { a: "weit",      k: "weiter",      s: "am weitesten"    },
  { a: "tief",      k: "tiefer",      s: "am tiefsten"     },
  { a: "breit",     k: "breiter",     s: "am breitesten"   },
  { a: "eng",       k: "enger",       s: "am engsten"      },
  { a: "viel",      k: "mehr",        s: "am meisten"      },
  { a: "wenig",     k: "weniger",     s: "am wenigsten"    },
  { a: "froh",      k: "froher",      s: "am frohsten"     },
  { a: "traurig",   k: "trauriger",   s: "am traurigsten"  },
  { a: "müde",      k: "müder",       s: "am müdesten"     },
  { a: "fleißig",   k: "fleißiger",   s: "am fleißigsten"  },
  { a: "faul",      k: "fauler",      s: "am faulsten"     },
  { a: "süß",       k: "süßer",       s: "am süßesten"     },
  { a: "bitter",    k: "bitterer",    s: "am bittersten"   },
  { a: "sauer",     k: "saurer",      s: "am sauersten"    },
  { a: "frisch",    k: "frischer",    s: "am frischesten"  },
  { a: "teuer",     k: "teurer",      s: "am teuersten"    },
  { a: "billig",    k: "billiger",    s: "am billigsten"   },
  { a: "sicher",    k: "sicherer",    s: "am sichersten"   },
  { a: "gefährlich",k: "gefährlicher",s: "am gefährlichsten"},
];

// Synonyme: w=Wort  syn=Synonym  f1/f2=Falschantworten
const SYNONYME: { w: string; syn: string; f1: string; f2: string }[] = [
  { w: "froh",       syn: "glücklich",    f1: "traurig",    f2: "müde"      },
  { w: "schnell",    syn: "rasch",        f1: "langsam",    f2: "schwer"    },
  { w: "schön",      syn: "hübsch",       f1: "hässlich",   f2: "laut"      },
  { w: "klug",       syn: "intelligent",  f1: "dumm",       f2: "faul"      },
  { w: "mutig",      syn: "tapfer",       f1: "feige",      f2: "traurig"   },
  { w: "sprechen",   syn: "reden",        f1: "schweigen",  f2: "laufen"    },
  { w: "beginnen",   syn: "anfangen",     f1: "aufhören",   f2: "schlafen"  },
  { w: "helfen",     syn: "unterstützen", f1: "behindern",  f2: "schaden"   },
  { w: "wütend",     syn: "zornig",       f1: "fröhlich",   f2: "ruhig"     },
  { w: "schauen",    syn: "blicken",      f1: "hören",      f2: "riechen"   },
  { w: "müde",       syn: "erschöpft",    f1: "ausgeruht",  f2: "fröhlich"  },
  { w: "kaputt",     syn: "defekt",       f1: "neu",        f2: "sauber"    },
  { w: "nett",       syn: "freundlich",   f1: "unfreundlich",f2: "böse"     },
  { w: "krank",      syn: "erkrankt",     f1: "gesund",     f2: "munter"    },
  { w: "schwierig",  syn: "schwer",       f1: "einfach",    f2: "leicht"    },
  { w: "einfach",    syn: "leicht",       f1: "schwer",     f2: "kompliziert"},
  { w: "beobachten", syn: "bemerken",     f1: "übersehen",  f2: "schlafen"  },
  { w: "rennen",     syn: "laufen",       f1: "stehen",     f2: "sitzen"    },
  { w: "kaufen",     syn: "erwerben",     f1: "verkaufen",  f2: "verlieren" },
  { w: "groß",       syn: "riesig",       f1: "winzig",     f2: "dünn"      },
  { w: "klein",      syn: "winzig",       f1: "groß",       f2: "breit"     },
  { w: "alt",        syn: "betagt",       f1: "jung",       f2: "neu"       },
  { w: "neu",        syn: "frisch",       f1: "alt",        f2: "kaputt"    },
  { w: "lachen",     syn: "kichern",      f1: "weinen",     f2: "schreien"  },
  { w: "still",      syn: "ruhig",        f1: "laut",       f2: "wild"      },
  { w: "bekannt",    syn: "vertraut",     f1: "fremd",      f2: "unbekannt" },
  { w: "erzählen",   syn: "berichten",    f1: "schweigen",  f2: "vergessen" },
  { w: "werfen",     syn: "schleudern",   f1: "fangen",     f2: "legen"     },
  { w: "suchen",     syn: "fahnden",      f1: "finden",     f2: "verlieren" },
  { w: "erschrecken",syn: "aufschrecken", f1: "beruhigen",  f2: "entspannen"},
];

// Antonyme: w=Wort  ant=Antonym  f1/f2=Falschantworten
const ANTONYME: { w: string; ant: string; f1: string; f2: string }[] = [
  { w: "hell",       ant: "dunkel",      f1: "warm",       f2: "groß"      },
  { w: "früh",       ant: "spät",        f1: "schnell",    f2: "laut"      },
  { w: "nass",       ant: "trocken",     f1: "weich",      f2: "ruhig"     },
  { w: "laut",       ant: "leise",       f1: "warm",       f2: "schnell"   },
  { w: "sauber",     ant: "schmutzig",   f1: "klein",      f2: "weich"     },
  { w: "fröhlich",   ant: "traurig",     f1: "groß",       f2: "kalt"      },
  { w: "anfangen",   ant: "aufhören",    f1: "schlafen",   f2: "lernen"    },
  { w: "kaufen",     ant: "verkaufen",   f1: "lernen",     f2: "sehen"     },
  { w: "öffnen",     ant: "schließen",   f1: "gehen",      f2: "trinken"   },
  { w: "arm",        ant: "reich",       f1: "klein",      f2: "alt"       },
  { w: "groß",       ant: "klein",       f1: "lang",       f2: "schwer"    },
  { w: "alt",        ant: "jung",        f1: "neu",        f2: "frisch"    },
  { w: "warm",       ant: "kalt",        f1: "nass",       f2: "hell"      },
  { w: "schnell",    ant: "langsam",     f1: "leise",      f2: "schwer"    },
  { w: "stark",      ant: "schwach",     f1: "müde",       f2: "klein"     },
  { w: "hart",       ant: "weich",       f1: "kalt",       f2: "dunkel"    },
  { w: "gut",        ant: "schlecht",    f1: "traurig",    f2: "laut"      },
  { w: "kommen",     ant: "gehen",       f1: "stehen",     f2: "schlafen"  },
  { w: "oben",       ant: "unten",       f1: "links",      f2: "rechts"    },
  { w: "innen",      ant: "außen",       f1: "oben",       f2: "vorne"     },
  { w: "vorne",      ant: "hinten",      f1: "oben",       f2: "links"     },
  { w: "links",      ant: "rechts",      f1: "vorne",      f2: "oben"      },
  { w: "geben",      ant: "nehmen",      f1: "kaufen",     f2: "sehen"     },
  { w: "fragen",     ant: "antworten",   f1: "gehen",      f2: "schreiben" },
  { w: "wachen",     ant: "schlafen",    f1: "laufen",     f2: "sitzen"    },
  { w: "lieben",     ant: "hassen",      f1: "kennen",     f2: "sehen"     },
  { w: "gewinnen",   ant: "verlieren",   f1: "spielen",    f2: "lernen"    },
  { w: "sparen",     ant: "ausgeben",    f1: "kaufen",     f2: "finden"    },
  { w: "erinnern",   ant: "vergessen",   f1: "kennen",     f2: "lernen"    },
  { w: "erlauben",   ant: "verbieten",   f1: "vergessen",  f2: "kennen"    },
];

// Kasus-Sätze: satz=Lückentext  kasus=Kasusname  r=richtig  f=Falschoptionen[]
const KASUS_SAETZE: { satz: string; kasus: string; r: string; f: string[] }[] = [
  { satz: "Ich sehe ___ Hund.",               kasus: "Akkusativ",  r: "den", f: ["der", "dem", "des"] },
  { satz: "Er hilft ___ Kind.",               kasus: "Dativ",      r: "dem", f: ["das", "den", "des"] },
  { satz: "___ Hund bellt laut.",             kasus: "Nominativ",  r: "Der", f: ["Den", "Dem", "Das"] },
  { satz: "Das Fell ___ Hundes ist weich.",   kasus: "Genitiv",    r: "des", f: ["der", "den", "dem"] },
  { satz: "Ich sehe ___ Mädchen.",            kasus: "Akkusativ",  r: "das", f: ["die", "der", "dem"] },
  { satz: "Er gibt ___ Frau ein Buch.",       kasus: "Dativ",      r: "der", f: ["die", "das", "den"] },
  { satz: "___ Schule ist groß.",             kasus: "Nominativ",  r: "Die", f: ["Den", "Dem", "Das"] },
  { satz: "Ich kenne ___ Lehrerin.",          kasus: "Akkusativ",  r: "die", f: ["der", "das", "dem"] },
  { satz: "Er folgt ___ Katze.",              kasus: "Dativ",      r: "der", f: ["die", "das", "den"] },
  { satz: "___ Kind spielt im Garten.",       kasus: "Nominativ",  r: "Das", f: ["Den", "Die", "Des"] },
  { satz: "Das Auto ___ Vaters ist rot.",     kasus: "Genitiv",    r: "des", f: ["der", "den", "dem"] },
  { satz: "Sie schenkt ___ Bruder ein Buch.", kasus: "Dativ",      r: "dem", f: ["den", "der", "des"] },
  { satz: "___ Lehrer erklärt den Satz.",     kasus: "Nominativ",  r: "Der", f: ["Den", "Dem", "Das"] },
  { satz: "Er kauft ___ Apfel.",              kasus: "Akkusativ",  r: "den", f: ["der", "dem", "des"] },
  { satz: "Das Haus ___ Lehrers ist groß.",   kasus: "Genitiv",    r: "des", f: ["der", "dem", "den"] },
  { satz: "Sie hilft ___ alten Mann.",        kasus: "Dativ",      r: "dem", f: ["den", "der", "des"] },
  { satz: "___ Buch liegt auf dem Tisch.",    kasus: "Nominativ",  r: "Das", f: ["Den", "Die", "Des"] },
  { satz: "Ich besuche ___ Oma.",             kasus: "Akkusativ",  r: "die", f: ["der", "dem", "des"] },
  { satz: "Das Fahrrad ___ Mutter ist neu.",  kasus: "Genitiv",    r: "der", f: ["die", "den", "dem"] },
  { satz: "Er zeigt ___ Freund den Weg.",     kasus: "Dativ",      r: "dem", f: ["den", "der", "des"] },
  { satz: "___ Vogel singt im Baum.",         kasus: "Nominativ",  r: "Der", f: ["Den", "Dem", "Ein"] },
  { satz: "Sie streichelt ___ Katze.",        kasus: "Akkusativ",  r: "die", f: ["der", "dem", "das"] },
  { satz: "Die Farbe ___ Autos ist blau.",    kasus: "Genitiv",    r: "des", f: ["der", "den", "dem"] },
  { satz: "Er schreibt ___ Schwester einen Brief.", kasus: "Dativ", r: "der", f: ["die", "das", "dem"] },
  { satz: "___ Blume blüht im Frühling.",     kasus: "Nominativ",  r: "Die", f: ["Den", "Dem", "Das"] },
  { satz: "Ich höre ___ Musik.",              kasus: "Akkusativ",  r: "die", f: ["der", "dem", "das"] },
  { satz: "Er dankt ___ Lehrerin.",           kasus: "Dativ",      r: "der", f: ["die", "das", "dem"] },
  { satz: "Das Dach ___ Hauses ist alt.",     kasus: "Genitiv",    r: "des", f: ["der", "den", "dem"] },
  { satz: "___ Zug fährt pünktlich ab.",      kasus: "Nominativ",  r: "Der", f: ["Den", "Dem", "Das"] },
  { satz: "Ich vermisse ___ Freund.",         kasus: "Akkusativ",  r: "den", f: ["der", "dem", "des"] },
];

// Adjektiv-Gegenteilpaare für K3
// w=Wort  g=Gegenteil  f1/f2=Falschantworten
const GEGENTEIL_PAARE: { w: string; g: string; f1: string; f2: string }[] = [
  { w: "warm",     g: "kalt",      f1: "heiß",      f2: "kühl"      },
  { w: "groß",     g: "klein",     f1: "hoch",      f2: "lang"      },
  { w: "alt",      g: "jung",      f1: "neu",       f2: "frisch"    },
  { w: "hell",     g: "dunkel",    f1: "grau",      f2: "matt"      },
  { w: "schnell",  g: "langsam",   f1: "träge",     f2: "faul"      },
  { w: "laut",     g: "leise",     f1: "ruhig",     f2: "still"     },
  { w: "nass",     g: "trocken",   f1: "feucht",    f2: "frisch"    },
  { w: "hart",     g: "weich",     f1: "zart",      f2: "sanft"     },
  { w: "stark",    g: "schwach",   f1: "kraftlos",  f2: "müde"      },
  { w: "schön",    g: "hässlich",  f1: "unschön",   f2: "grau"      },
  { w: "früh",     g: "spät",      f1: "pünktlich", f2: "langsam"   },
  { w: "lang",     g: "kurz",      f1: "eng",       f2: "schmal"    },
  { w: "dick",     g: "dünn",      f1: "schlank",   f2: "breit"     },
  { w: "voll",     g: "leer",      f1: "offen",     f2: "frei"      },
  { w: "sauber",   g: "dreckig",   f1: "frisch",    f2: "nass"      },
  { w: "fröhlich", g: "traurig",   f1: "laut",      f2: "müde"      },
  { w: "offen",    g: "geschlossen",f1: "leer",     f2: "voll"      },
  { w: "süß",      g: "bitter",    f1: "sauer",     f2: "salzig"    },
  { w: "hoch",     g: "niedrig",   f1: "flach",     f2: "kurz"      },
  { w: "innen",    g: "außen",     f1: "oben",      f2: "unten"     },
  { w: "mutig",    g: "feige",     f1: "dumm",      f2: "faul"      },
  { w: "fleißig",  g: "faul",      f1: "müde",      f2: "ruhig"     },
  { w: "gesund",   g: "krank",     f1: "müde",      f2: "schwach"   },
  { w: "rich",     g: "arm",       f1: "jung",      f2: "klein"     },
  { w: "breit",    g: "eng",       f1: "kurz",      f2: "klein"     },
];

// Satzzeichen-Templates für K1
const SATZZEICHEN_TEMPLATES: { satz: string; zz: string; f: string[] }[] = [
  { satz: "Wie heißt du",              zz: "?", f: [".", "!"] },
  { satz: "Ich heiße Anna",            zz: ".", f: ["?", "!"] },
  { satz: "Komm sofort her",           zz: "!", f: [".", "?"] },
  { satz: "Was machst du",             zz: "?", f: [".", "!"] },
  { satz: "Das ist schön",             zz: ".", f: ["?", "!"] },
  { satz: "Hilfe",                     zz: "!", f: [".", "?"] },
  { satz: "Wo wohnst du",              zz: "?", f: [".", "!"] },
  { satz: "Ich bin müde",              zz: ".", f: ["?", "!"] },
  { satz: "Vorsicht",                  zz: "!", f: [".", "?"] },
  { satz: "Wann kommst du",            zz: "?", f: [".", "!"] },
  { satz: "Der Hund bellt",            zz: ".", f: ["?", "!"] },
  { satz: "Lass mich in Ruhe",         zz: "!", f: [".", "?"] },
  { satz: "Wo ist meine Tasche",       zz: "?", f: [".", "!"] },
  { satz: "Wir spielen draußen",       zz: ".", f: ["?", "!"] },
  { satz: "Nein",                      zz: "!", f: [".", "?"] },
  { satz: "Wie alt bist du",           zz: "?", f: [".", "!"] },
  { satz: "Ich esse gern Brot",        zz: ".", f: ["?", "!"] },
  { satz: "Feuer",                     zz: "!", f: [".", "?"] },
  { satz: "Warum weinst du",           zz: "?", f: [".", "!"] },
  { satz: "Die Sonne scheint",         zz: ".", f: ["?", "!"] },
  { satz: "Steh sofort auf",           zz: "!", f: [".", "?"] },
  { satz: "Wer hat das gemacht",       zz: "?", f: [".", "!"] },
  { satz: "Ich gehe in die Schule",    zz: ".", f: ["?", "!"] },
  { satz: "Toll",                      zz: "!", f: [".", "?"] },
  { satz: "Wie viele Äpfel hast du",   zz: "?", f: [".", "!"] },
];

// Konjunktiv I für K7: v=Verb  er=Konjunktiv-I-Form(er/sie/es)
const KONJ1: { v: string; er: string }[] = [
  { v: "sein",       er: "sei"       },
  { v: "haben",      er: "habe"      },
  { v: "werden",     er: "werde"     },
  { v: "gehen",      er: "gehe"      },
  { v: "kommen",     er: "komme"     },
  { v: "spielen",    er: "spiele"    },
  { v: "lernen",     er: "lerne"     },
  { v: "lesen",      er: "lese"      },
  { v: "machen",     er: "mache"     },
  { v: "wohnen",     er: "wohne"     },
  { v: "arbeiten",   er: "arbeite"   },
  { v: "sprechen",   er: "spreche"   },
  { v: "schreiben",  er: "schreibe"  },
  { v: "fahren",     er: "fahre"     },
  { v: "kaufen",     er: "kaufe"     },
  { v: "finden",     er: "finde"     },
  { v: "sehen",      er: "sehe"      },
  { v: "hören",      er: "höre"      },
  { v: "helfen",     er: "helfe"     },
  { v: "trinken",    er: "trinke"    },
  { v: "essen",      er: "esse"      },
  { v: "schlafen",   er: "schlafe"   },
  { v: "denken",     er: "denke"     },
  { v: "glauben",    er: "glaube"    },
  { v: "wissen",     er: "wisse"     },
  { v: "nehmen",     er: "nehme"     },
  { v: "fragen",     er: "frage"     },
  { v: "antworten",  er: "antworte"  },
  { v: "rennen",     er: "renne"     },
  { v: "tanzen",     er: "tanze"     },
];

// Passiv-Sätze für K7
// aktiv=Ausgangssatz  passiv=richtiges Passiv  f1/f2=Falschformen
const PASSIV_SAETZE: { aktiv: string; passiv: string; f1: string; f2: string }[] = [
  { aktiv: "Man öffnet das Fenster.",    passiv: "Das Fenster wird geöffnet.",    f1: "Das Fenster wurde geöffnet.",    f2: "Das Fenster ist geöffnet."    },
  { aktiv: "Man backt den Kuchen.",      passiv: "Der Kuchen wird gebacken.",     f1: "Der Kuchen wurde gebacken.",     f2: "Der Kuchen ist gebacken."     },
  { aktiv: "Man renoviert das Haus.",    passiv: "Das Haus wird renoviert.",      f1: "Das Haus wurde renoviert.",      f2: "Das Haus ist renoviert."      },
  { aktiv: "Man schreibt den Brief.",    passiv: "Der Brief wird geschrieben.",   f1: "Der Brief wurde geschrieben.",   f2: "Der Brief ist geschrieben."   },
  { aktiv: "Man liest das Buch.",        passiv: "Das Buch wird gelesen.",        f1: "Das Buch wurde gelesen.",        f2: "Das Buch ist gelesen."        },
  { aktiv: "Man repariert das Auto.",    passiv: "Das Auto wird repariert.",      f1: "Das Auto wurde repariert.",      f2: "Das Auto ist repariert."      },
  { aktiv: "Man putzt das Zimmer.",      passiv: "Das Zimmer wird geputzt.",      f1: "Das Zimmer wurde geputzt.",      f2: "Das Zimmer ist geputzt."      },
  { aktiv: "Man singt das Lied.",        passiv: "Das Lied wird gesungen.",       f1: "Das Lied wurde gesungen.",       f2: "Das Lied ist gesungen."       },
  { aktiv: "Man malt das Bild.",         passiv: "Das Bild wird gemalt.",         f1: "Das Bild wurde gemalt.",         f2: "Das Bild ist gemalt."         },
  { aktiv: "Man baut die Brücke.",       passiv: "Die Brücke wird gebaut.",       f1: "Die Brücke wurde gebaut.",       f2: "Die Brücke ist gebaut."       },
  { aktiv: "Man kauft das Brot.",        passiv: "Das Brot wird gekauft.",        f1: "Das Brot wurde gekauft.",        f2: "Das Brot ist gekauft."        },
  { aktiv: "Man pflanzt den Baum.",      passiv: "Der Baum wird gepflanzt.",      f1: "Der Baum wurde gepflanzt.",      f2: "Der Baum ist gepflanzt."      },
  { aktiv: "Man druckt die Zeitung.",    passiv: "Die Zeitung wird gedruckt.",    f1: "Die Zeitung wurde gedruckt.",    f2: "Die Zeitung ist gedruckt."    },
  { aktiv: "Man beobachtet den Vogel.",  passiv: "Der Vogel wird beobachtet.",    f1: "Der Vogel wurde beobachtet.",    f2: "Der Vogel ist beobachtet."    },
  { aktiv: "Man wäscht das Hemd.",       passiv: "Das Hemd wird gewaschen.",      f1: "Das Hemd wurde gewaschen.",      f2: "Das Hemd ist gewaschen."      },
  { aktiv: "Man zählt die Punkte.",      passiv: "Die Punkte werden gezählt.",    f1: "Die Punkte wurden gezählt.",     f2: "Die Punkte sind gezählt."     },
  { aktiv: "Man löst die Aufgabe.",      passiv: "Die Aufgabe wird gelöst.",      f1: "Die Aufgabe wurde gelöst.",      f2: "Die Aufgabe ist gelöst."      },
  { aktiv: "Man erklärt den Begriff.",   passiv: "Der Begriff wird erklärt.",     f1: "Der Begriff wurde erklärt.",     f2: "Der Begriff ist erklärt."     },
  { aktiv: "Man fotografiert die Stadt.",passiv: "Die Stadt wird fotografiert.",  f1: "Die Stadt wurde fotografiert.",  f2: "Die Stadt ist fotografiert."  },
  { aktiv: "Man kocht die Suppe.",       passiv: "Die Suppe wird gekocht.",       f1: "Die Suppe wurde gekocht.",       f2: "Die Suppe ist gekocht."       },
  { aktiv: "Man packt den Koffer.",      passiv: "Der Koffer wird gepackt.",      f1: "Der Koffer wurde gepackt.",      f2: "Der Koffer ist gepackt."      },
  { aktiv: "Man bestellt das Essen.",    passiv: "Das Essen wird bestellt.",      f1: "Das Essen wurde bestellt.",      f2: "Das Essen ist bestellt."      },
  { aktiv: "Man schenkt die Blumen.",    passiv: "Die Blumen werden geschenkt.",  f1: "Die Blumen wurden geschenkt.",   f2: "Die Blumen sind geschenkt."   },
];

// Nebensatztypen für K8
const NEBENSATZ_TYPEN: { satz: string; typ: string; f: string[] }[] = [
  { satz: "Er lernte, weil er müde war.",            typ: "Kausalsatz",      f: ["Konzessivsatz", "Finalsatz",     "Konditionalsatz"] },
  { satz: "Er lernte, obwohl es schwer war.",         typ: "Konzessivsatz",   f: ["Kausalsatz",    "Finalsatz",     "Temporalsatz"]    },
  { satz: "Er lernte, damit er besteht.",             typ: "Finalsatz",       f: ["Kausalsatz",    "Konzessivsatz", "Konditionalsatz"] },
  { satz: "Er lernte, wenn er Zeit hatte.",           typ: "Konditionalsatz", f: ["Kausalsatz",    "Temporalsatz",  "Finalsatz"]       },
  { satz: "Er lernte, als er jung war.",              typ: "Temporalsatz",    f: ["Kausalsatz",    "Konditionalsatz","Konzessivsatz"]  },
  { satz: "Er lernte, da er Prüfung hatte.",          typ: "Kausalsatz",      f: ["Konzessivsatz", "Temporalsatz",  "Finalsatz"]       },
  { satz: "Er lernte, falls es nötig ist.",           typ: "Konditionalsatz", f: ["Kausalsatz",    "Temporalsatz",  "Konzessivsatz"]   },
  { satz: "Sie kam, nachdem sie gegessen hatte.",     typ: "Temporalsatz",    f: ["Kausalsatz",    "Finalsatz",     "Konzessivsatz"]   },
  { satz: "Er geht, obwohl er krank ist.",            typ: "Konzessivsatz",   f: ["Kausalsatz",    "Temporalsatz",  "Finalsatz"]       },
  { satz: "Er spart, damit er reisen kann.",          typ: "Finalsatz",       f: ["Kausalsatz",    "Konditionalsatz","Temporalsatz"]   },
  { satz: "Sie hilft, weil sie nett ist.",            typ: "Kausalsatz",      f: ["Konzessivsatz", "Finalsatz",     "Temporalsatz"]    },
  { satz: "Wenn es regnet, bleibe ich zu Hause.",     typ: "Konditionalsatz", f: ["Kausalsatz",    "Temporalsatz",  "Finalsatz"]       },
  { satz: "Er hat gelacht, als er das sah.",          typ: "Temporalsatz",    f: ["Kausalsatz",    "Konzessivsatz", "Finalsatz"]       },
  { satz: "Sie lernt, um die Prüfung zu bestehen.",   typ: "Finalsatz",       f: ["Kausalsatz",    "Temporalsatz",  "Konditionalsatz"] },
  { satz: "Er blieb, obwohl es spät war.",            typ: "Konzessivsatz",   f: ["Kausalsatz",    "Finalsatz",     "Temporalsatz"]    },
  { satz: "Sie weinte, da sie traurig war.",          typ: "Kausalsatz",      f: ["Konzessivsatz", "Finalsatz",     "Temporalsatz"]    },
  { satz: "Falls du kommst, freue ich mich.",         typ: "Konditionalsatz", f: ["Kausalsatz",    "Temporalsatz",  "Finalsatz"]       },
  { satz: "Er schlief, während sie arbeitete.",       typ: "Temporalsatz",    f: ["Kausalsatz",    "Konzessivsatz", "Konditionalsatz"] },
  { satz: "Sie kochte, damit er essen konnte.",       typ: "Finalsatz",       f: ["Kausalsatz",    "Temporalsatz",  "Konzessivsatz"]   },
  { satz: "Er fuhr, weil das Auto kaputt war.",       typ: "Kausalsatz",      f: ["Finalsatz",     "Temporalsatz",  "Konditionalsatz"] },
  { satz: "Obwohl es kalt war, ging er spazieren.",   typ: "Konzessivsatz",   f: ["Kausalsatz",    "Temporalsatz",  "Finalsatz"]       },
  { satz: "Sie rief an, sobald sie ankam.",           typ: "Temporalsatz",    f: ["Kausalsatz",    "Finalsatz",     "Konditionalsatz"] },
  { satz: "Er übt, um besser zu werden.",             typ: "Finalsatz",       f: ["Kausalsatz",    "Temporalsatz",  "Konzessivsatz"]   },
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

// K1-K2: Artikel TYPING — kurze Eingabe, ideal für Anfänger
function genArtikelTyping(topic: string, subtopic: string): DeutschQuestion {
  const { n, a } = pick(NOMEN);
  return { type: "typing", topic, subtopic,
    question: `Schreibe den richtigen Artikel: ___ ${n}`,
    answer: a, hint: "der / die / das" };
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

// K3: Plural TYPING — Schüler tippt die Pluralform
function genPluralTyping(): DeutschQuestion {
  const { n, p } = pick(NOMEN);
  return { type: "typing", topic: "wortarten_k3", subtopic: "plural",
    question: `Wie lautet der Plural? die ___ (${n})`,
    answer: [p, `die ${p}`] };
}

// K3: Verb konjugieren (er/sie/es)
function genVerbKonj(): DeutschQuestion {
  const { v, er, du, wir } = pick(VERBEN);
  return mkMCQ("wortarten_k3", "verben_k3",
    `Konjugiere (er/sie/es): ___ ${v}`,
    er, [du, wir].filter((x) => x !== er));
}

// K3: Verb konjugieren TYPING
function genVerbKonjTyping(): DeutschQuestion {
  const { v, er } = pick(VERBEN);
  return { type: "typing", topic: "wortarten_k3", subtopic: "verben_k3",
    question: `Schreibe die Form (er/sie/es): ___ ${v}`,
    answer: er };
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

// K4: Präteritum TYPING
function genPraeteritumTyping(): DeutschQuestion {
  const vb = pick(VERBEN);
  return { type: "typing", topic: "zeitformen_k4", subtopic: "praeteritum",
    question: `Schreibe das Präteritum (er/sie/es): ___ ${vb.v}`,
    answer: vb.praet };
}

// K4: Perfekt – haben oder sein
function genPerfekt(): DeutschQuestion {
  const vb = pick(VERBEN);
  const falsch = vb.hv === "hat" ? "ist" : "hat";
  return mkMCQ("zeitformen_k4", "perfekt",
    `Hilfsverb im Perfekt: 'Er ___ ${vb.part}.'`,
    vb.hv, [falsch, vb.hv === "hat" ? "war" : "hatte"]);
}

// K4: Partizip II TYPING — Schüler tippt das Partizip
function genPartizipTyping(): DeutschQuestion {
  const vb = pick(VERBEN);
  return { type: "typing", topic: "zeitformen_k4", subtopic: "perfekt",
    question: `Wie lautet das Partizip II? (${vb.v})`,
    answer: vb.part, hint: "z.B. gemacht, gelaufen, gegessen" };
}

// K5: Komparativ
function genKomparativ(): DeutschQuestion {
  const adj = pick(ADJEKTIVE);
  const wrong = shuffle(ADJEKTIVE.filter((x) => x.a !== adj.a).map((x) => x.k)).slice(0, 3);
  return mkMCQ("wortarten_k5", "steigerung",
    `Komparativ von '${adj.a}':`, adj.k, wrong);
}

// K5: Komparativ TYPING
function genKomparativTyping(): DeutschQuestion {
  const adj = pick(ADJEKTIVE);
  return { type: "typing", topic: "wortarten_k5", subtopic: "steigerung",
    question: `Komparativ von '${adj.a}':`,
    answer: adj.k };
}

// K5: Superlativ
function genSuperlativ(): DeutschQuestion {
  const adj = pick(ADJEKTIVE);
  const wrong = shuffle(ADJEKTIVE.filter((x) => x.a !== adj.a).map((x) => x.s)).slice(0, 3);
  return mkMCQ("wortarten_k5", "steigerung",
    `Superlativ von '${adj.a}':`, adj.s, wrong);
}

// K5: Superlativ TYPING — akzeptiert "am größten" und "größten"
function genSuperlativTyping(): DeutschQuestion {
  const adj = pick(ADJEKTIVE);
  return { type: "typing", topic: "wortarten_k5", subtopic: "steigerung",
    question: `Superlativ von '${adj.a}':`,
    answer: [adj.s, adj.s.replace("am ", "")] };
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

// K7: Konjunktiv I
function genKonjunktiv1(): DeutschQuestion {
  const { v, er } = pick(KONJ1);
  const wrong = shuffle(KONJ1.filter((x) => x.v !== v).map((x) => x.er)).slice(0, 3);
  return mkMCQ("indirekte_rede", "konjunktiv_1",
    `Konjunktiv I: 'Er sagt, er ___ (${v}).'`, er, wrong);
}

// K7: Konjunktiv I TYPING
function genKonjunktiv1Typing(): DeutschQuestion {
  const { v, er } = pick(KONJ1);
  return { type: "typing", topic: "indirekte_rede", subtopic: "konjunktiv_1",
    question: `Schreibe Konjunktiv I (er/sie/es): ___ ${v}`,
    answer: er };
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
  // K1 — 40% typing (Artikel kurz genug zum Eintippen)
  artikel_k1:          () => Math.random() < 0.4
                               ? genArtikelTyping("woerter", "artikel_k1")
                               : genArtikel("woerter", "artikel_k1"),
  silben:              genSilben,
  satzzeichen_k1:      genSatzzeichen,
  fehlende_woerter_k1: genSatzzeichen, // Fallback auf Satzzeichen
  // K2 — 40% typing (Artikel wiederholen)
  artikel_k2:          () => Math.random() < 0.4
                               ? genArtikelTyping("wortarten_k2", "artikel_k2")
                               : genArtikel("wortarten_k2", "artikel_k2"),
  nomen_k2:            genNomenErkennen,
  verben_k2:           genVerbErkennen,
  // K3 — 40% typing (Plural + Verbform)
  plural:              () => Math.random() < 0.4 ? genPluralTyping()    : genPlural(),
  adjektive_gegenteil: genGegenteil,
  verben_k3:           () => Math.random() < 0.4 ? genVerbKonjTyping()  : genVerbKonj(),
  // K4 — Kasus bleibt MCQ (Lückentext), Zeitformen 40% typing
  nominativ:           () => genKasus("Nominativ"),
  akkusativ:           () => genKasus("Akkusativ"),
  dativ:               () => genKasus("Dativ"),
  genitiv:             () => genKasus("Genitiv"),
  praeteritum:         () => Math.random() < 0.4 ? genPraeteritumTyping() : genPraeteritum(),
  perfekt:             () => Math.random() < 0.4 ? genPartizipTyping()    : genPerfekt(),
  // K5 — mix: MCQ Komparativ, MCQ Superlativ, Typing Komparativ, Typing Superlativ (je 25%)
  steigerung:          () => {
                          const r = Math.random();
                          if (r < 0.25) return genKomparativTyping();
                          if (r < 0.50) return genSuperlativTyping();
                          if (r < 0.75) return genKomparativ();
                          return genSuperlativ();
                        },
  // K6 — Synonym/Antonym bleibt MCQ (mehrere mögliche Antworten → MCQ sicherer)
  synonyme:            genSynonym,
  antonyme:            genAntonym,
  // K7 — 40% typing (Konjunktiv I gut eintippbar), Passiv bleibt MCQ
  konjunktiv_1:        () => Math.random() < 0.4 ? genKonjunktiv1Typing() : genKonjunktiv1(),
  werden_passiv:       genWerdenPassiv,
  // K8 — Nebensatztypen bleibt MCQ (Erkennung, kein Eintippen nötig)
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
