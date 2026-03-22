// ─── PHYSICS GENERATORS K6: MACHINES ──────────────────────────────────────────────────
// "Einfache Maschinen" theme — Lever (Hebel) subtopic with MCQ + Typing generators
// Grade 6 (11-12 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Lever law: F1 × d1 = F2 × d2

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick random element from array */
function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Create MCQ question */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

/** Create typing question */
function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer
  };
}

/** Multilingual helper */
function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ─── 1. LEVER ─────────────────────────────────────────────────────────────

const LEVER_DATA = {
  examples: [
    { en: "a seesaw", de: "eine Wippe", hu: "libikóka", ro: "un leagăn balansoar" },
    { en: "a crowbar", de: "ein Brecheisen", hu: "feszítővas", ro: "o rangă de fier" },
    { en: "scissors", de: "eine Schere", hu: "olló", ro: "foarfece" },
    { en: "a bottle opener", de: "ein Flaschenöffner", hu: "palacknyitó", ro: "un deschizător de sticle" },
    { en: "pliers", de: "eine Zange", hu: "fogó", ro: "clește" },
    { en: "a door handle", de: "ein Türgriff", hu: "ajtókilincs", ro: "o clanță de ușă" },
    { en: "a broom", de: "ein Besen", hu: "seprű", ro: "o mătură" },
    { en: "a spoon as a pry tool", de: "ein Löffel als Hebel", hu: "kanál mint emelő", ro: "o lingură ca pârghie" },
    { en: "tweezers", de: "eine Pinzette", hu: "csipesz", ro: "o pensetă" },
    { en: "a claw hammer", de: "ein Klauen Hammer", hu: "kalapácsfej", ro: "un ciocan cu ghiare" },
  ],

  parts: [
    { en: "fulcrum", de: "Drehpunkt", hu: "támaszpont", ro: "punct de sprijin" },
    { en: "effort arm", de: "Kraftarm", hu: "erőkar", ro: "brațul de efort" },
    { en: "load arm", de: "Lastarm", hu: "terheléskar", ro: "brațul încărcăturii" },
    { en: "effort force", de: "Kraft", hu: "erő", ro: "forța de efort" },
    { en: "load force", de: "Last", hu: "terhelés", ro: "forța de sarcină" },
  ],

  classes: [
    { en: "Class 1", de: "Klasse 1", hu: "1. osztály", ro: "Clasa 1", desc: q4("Drehpunkt in der Mitte", "fulcrum in the middle", "támaszpont középen", "punct de sprijin în mijloc", "en") },
    { en: "Class 2", de: "Klasse 2", hu: "2. osztály", ro: "Clasa 2", desc: q4("Last in der Mitte", "load in the middle", "terhelés középen", "sarcina în mijloc", "en") },
    { en: "Class 3", de: "Klasse 3", hu: "3. osztály", ro: "Clasa 3", desc: q4("Kraft in der Mitte", "effort in the middle", "erő középen", "efort în mijloc", "en") },
  ],

  laws: [
    { en: "F1 × d1 = F2 × d2", de: "F1 × d1 = F2 × d2", hu: "F1 × d1 = F2 × d2", ro: "F1 × d1 = F2 × d2" },
  ],

  wrongParts: [
    { en: "handle", de: "Griff", hu: "fogantyú", ro: "mâner" },
    { en: "pivot", de: "Drehzapfen", hu: "csap", ro: "pivot" },
    { en: "blade", de: "Klinge", hu: "penge", ro: "lamă" },
  ],
};

export function generateLeverMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a lever?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "lever",
      q4("Was ist ein Hebel?", "What is a lever?", "Mi az egy emelő?", "Ce este o pârghie?", lang),
      q4("Eine einfache Maschine mit einem Drehpunkt, die zur Bewegung von Objekten verwendet wird", "A simple machine with a fulcrum used to move objects", "Egy egyszerű gép egy támaszponttal, amelyet objektumok mozgatására használnak", "O mașină simplă cu un punct de sprijin folosit pentru a mișca obiecte", lang),
      [
        q4("Ein Werkzeug zum Schneiden von Papier", "A tool for cutting paper", "Papír vágására szolgáló eszköz", "Un instrument pentru tăierea hârtiei", lang),
        q4("Ein Rad, das sich dreht", "A wheel that rotates", "Egy kerek tárgy, amely forog", "O roată care se rotește", lang),
        q4("Ein Seil zum Ziehen von Objekten", "A rope for pulling objects", "Kötél az objektumok húzásához", "O frânghie pentru tragerea obiectelor", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a lever?"
  for (let i = 0; i < 8; i++) {
    const example = pick(LEVER_DATA.examples, rng);
    questions.push(createMCQ(
      "machines",
      "lever",
      q4(`Welches ist ein Beispiel eines Hebels?`, `Which is an example of a lever?`, `Melyik egy emelő példája?`, `Care este un exemplu de pârghie?`, lang),
      example[lang as "en"],
      LEVER_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "In a lever, what is the [part]?"
  for (let i = 0; i < 6; i++) {
    const partIndex = Math.floor(rng() * 3);
    const partName = partIndex === 0 ? q4("Drehpunkt", "fulcrum", "támaszpont", "punct de sprijin", lang) :
                     partIndex === 1 ? q4("Kraftarm", "effort arm", "erőkar", "brațul de efort", lang) :
                     q4("Lastarm", "load arm", "terheléskar", "brațul încărcăturii", lang);

    const definitions = [
      q4("Der Punkt, um den sich der Hebel dreht", "The point around which the lever rotates", "Az a pont, amely körül az emelő forog", "Punctul în jurul căruia se rotește pârghia", lang),
      q4("Der Arm, auf den die Kraft ausgeübt wird", "The arm where effort force is applied", "Az erőkar, ahol az erő kifejtett", "Brațul unde se aplică forța de efort", lang),
      q4("Der Arm, auf den die Last wirkt", "The arm where the load is located", "Az erőkar, ahol a terhelés van", "Brațul unde se află sarcina", lang),
    ];

    questions.push(createMCQ(
      "machines",
      "lever",
      q4(`In einem Hebel, was ist der ${partName}?`, `In a lever, what is the ${partName}?`, `Egy emelőben, mi a(z) ${partName}?`, `Într-o pârghie, care este ${partName}?`, lang),
      definitions[partIndex],
      definitions.filter((_, i) => i !== partIndex),
      rng
    ));
  }

  // Template 4: "What does the lever law state?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "lever",
      q4("Was besagt das Hebelgesetz?", "What does the lever law state?", "Mit mond az emelő törvénye?", "Ce spune legea pârghiei?", lang),
      q4("F1 × d1 = F2 × d2 (Kraft mal Entfernung ist konstant)", "F1 × d1 = F2 × d2 (force times distance is constant)", "F1 × d1 = F2 × d2 (erő szorozva távolsággal állandó)", "F1 × d1 = F2 × d2 (forța înmulțită cu distanța este constantă)", lang),
      [
        q4("Je länger der Arm, desto größer die Kraft", "The longer the arm, the greater the force", "Minél hosszabb a kar, annál nagyobb az erő", "Cu cât este mai lung brațul, cu atât mai mare este forța", lang),
        q4("Die Kraft ist immer gleich der Last", "Force is always equal to the load", "Az erő mindig megegyezik a terheléssel", "Forța este întotdeauna egală cu sarcina", lang),
        q4("Der Drehpunkt bestimmt die Kraft", "The fulcrum determines the force", "A támaszpont határozza meg az erőt", "Punctul de sprijin determină forța", lang),
      ],
      rng
    ));
  }

  // Template 5: "If the effort arm is longer than the load arm..."
  for (let i = 0; i < 6; i++) {
    const outcomes = [
      q4("weniger Kraft ist erforderlich", "less force is required", "kevesebb erő szükséges", "mai puțină forță este necesară", lang),
      q4("mehr Kraft ist erforderlich", "more force is required", "több erő szükséges", "mai multă forță este necesară", lang),
      q4("gleich viel Kraft ist erforderlich", "the same amount of force is required", "ugyanannyi erő szükséges", "aceeași cantitate de forță este necesară", lang),
    ];

    questions.push(createMCQ(
      "machines",
      "lever",
      q4("Wenn der Kraftarm länger als der Lastarm ist, dann...", "If the effort arm is longer than the load arm, then...", "Ha az erőkar hosszabb, mint a terheléskar, akkor...", "Dacă brațul de efort este mai lung decât brațul de sarcină, atunci...", lang),
      outcomes[0],
      outcomes.slice(1),
      rng
    ));
  }

  // Template 6: "Which class of lever is a [example]?"
  for (let i = 0; i < 5; i++) {
    const leverClass = pick(LEVER_DATA.classes, rng);
    const example = pick(LEVER_DATA.examples, rng);

    // Deterministic classification for consistency
    const isClass1 = rng() > 0.6; // seesaw, crowbar
    const isClass2 = rng() > 0.5; // bottle opener, claw hammer
    const isClass3 = rng() > 0.5; // tweezers, scissors

    let correct = q4("Klasse 1", "Class 1", "1. osztály", "Clasa 1", lang);
    if (example.en === "a bottle opener" || example.en === "a claw hammer") {
      correct = q4("Klasse 2", "Class 2", "2. osztály", "Clasa 2", lang);
    } else if (example.en === "tweezers" || example.en === "scissors") {
      correct = q4("Klasse 3", "Class 3", "3. osztály", "Clasa 3", lang);
    }

    questions.push(createMCQ(
      "machines",
      "lever",
      q4(`Welche Klasse von Hebel ist ${example.de}?`, `Which class of lever is ${example.en}?`, `Milyen osztályú emelő a(z) ${example.hu}?`, `Ce clasă de pârghie este ${example.ro}?`, lang),
      correct,
      [
        q4("Klasse 1", "Class 1", "1. osztály", "Clasa 1", lang),
        q4("Klasse 2", "Class 2", "2. osztály", "Clasa 2", lang),
        q4("Klasse 3", "Class 3", "3. osztály", "Clasa 3", lang),
      ].filter(c => c !== correct),
      rng
    ));
  }

  // Template 7: "A lever with a longer effort arm has..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "machines",
      "lever",
      q4("Ein Hebel mit einem längeren Kraftarm hat...", "A lever with a longer effort arm has...", "Az erőkarral rendelkező emelő...", "O pârghie cu un brațul de efort mai lung are...", lang),
      q4("einen größeren mechanischen Vorteil", "a greater mechanical advantage", "nagyobb mechanikai előnyt", "un avantaj mecanic mai mare", lang),
      [
        q4("einen kleineren mechanischen Vorteil", "a smaller mechanical advantage", "kisebb mechanikai előnyt", "un avantaj mecanic mai mic", lang),
        q4("keinen mechanischen Vorteil", "no mechanical advantage", "nincs mechanikai előny", "nicio avantaj mecanică", lang),
        q4("denselben Vorteil wie ein kurzer Arm", "the same advantage as a short arm", "ugyanaz az előny, mint egy rövid kar", "același avantaj ca un braț scurt", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateLeverTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("machines", "lever",
      q4("Definiere, was ein Hebel ist.", "Define what a lever is.", "Határozd meg, mi az emelő.", "Definește ce este o pârghie.", lang),
      ["simple machine", "einfache Maschine", "egyszerű gép", "mașină simplă", "fulcrum", "Drehpunkt", "támaszpont", "punct de sprijin"]
    ),

    createTyping("machines", "lever",
      q4("Gib ein Beispiel für einen Hebel im Alltag.", "Give an example of a lever in everyday life.", "Adj egy példát az emelőre a mindennapi életben.", "Dă un exemplu de pârghie în viața de zi cu zi.", lang),
      ["seesaw", "Wippe", "libikóka", "leagăn balansoar", "crowbar", "Brecheisen", "feszítővas", "rangă", "bottle opener", "Flaschenöffner", "palacknyitó", "deschizător", "scissors", "Schere", "olló", "foarfece"]
    ),

    createTyping("machines", "lever",
      q4("Was ist der mechanische Vorteil eines Hebels?", "What is the mechanical advantage of a lever?", "Mi az emelő mechanikai előnye?", "Care este avantajul mecanic al unei pârghii?", lang),
      ["easier", "einfacher", "könnyebb", "mai ușor", "leverage", "Hebelwirkung", "emelőhatás", "efect de levier", "less force", "weniger Kraft", "kevesebb erő", "mai puțină forță"]
    ),

    createTyping("machines", "lever",
      q4("Was ist der Drehpunkt (Fulcrum) eines Hebels?", "What is the fulcrum of a lever?", "Mi az emelő támaszpontja?", "Care este punctul de sprijin al unei pârghii?", lang),
      ["pivot point", "Drehpunkt", "forgáspont", "punct de pivot", "support point", "Stützpunkt", "támaszpont", "punct de sprijin", "center", "Mitte", "közép", "centru"]
    ),

    createTyping("machines", "lever",
      q4("Nenne die drei Teile eines Hebels.", "Name the three parts of a lever.", "Nevezd meg az emelő három részét.", "Numește cele trei părți ale unei pârghii.", lang),
      ["fulcrum", "Drehpunkt", "támaszpont", "punct de sprijin", "effort", "Kraft", "erő", "efort", "load", "Last", "terhelés", "sarcină", "arm"]
    ),

    createTyping("machines", "lever",
      q4("Wie hilft ein Hebel bei der Bewegung von Objekten?", "How does a lever help move objects?", "Hogyan segít az emelő az objektumok mozgatásában?", "Cum ajută pârghia să mute obiectele?", lang),
      ["reduces force", "reduziert Kraft", "csökkenti az erőt", "reduce forța", "multiplies force", "vervielfacht Kraft", "megsokszorozza az erőt", "înmulțește forța", "mechanical advantage"]
    ),

    createTyping("machines", "lever",
      q4("Der längere Arm eines Hebels erfordert...", "The longer arm of a lever requires...", "Az emelő hosszabb karja szükséges...", "Brațul mai lung al unei pârghii necesită...", lang),
      ["less force", "weniger Kraft", "kevesebb erő", "mai puțină forță", "smaller effort", "kleinerer Aufwand", "kisebb erőfeszítés", "efort mai mic"]
    ),

    createTyping("machines", "lever",
      q4("Was besagt die Hebelformel F1 × d1 = F2 × d2?", "What does the lever formula F1 × d1 = F2 × d2 mean?", "Mit jelent az F1 × d1 = F2 × d2 emelő képlet?", "Ce înseamnă formula pârghiei F1 × d1 = F2 × d2?", lang),
      ["constant", "konstant", "állandó", "constant", "balance", "Gleichgewicht", "egyensúly", "echilibru", "product", "Produkt", "szorzat", "produs"]
    ),

    createTyping("machines", "lever",
      q4("Welche Kraft wird in Newton gemessen?", "What force is measured in Newtons?", "Milyen erőt mérnek Newtonban?", "Ce forță se măsoară în Newtoni?", lang),
      ["newton", "N", "newton", "N", "force", "Kraft", "erő", "forță"]
    ),

    createTyping("machines", "lever",
      q4("Beschreibe einen Alltags-Hebel und erkläre, wie er funktioniert.", "Describe an everyday lever and explain how it works.", "Írj le egy mindennapi emelőt és magyarázd meg, hogyan működik.", "Descrie o pârghie de zi cu zi și explică cum funcționează.", lang),
      ["fulcrum", "Drehpunkt", "támaszpont", "punct de sprijin", "effort", "Kraft", "erő", "efort", "load", "Last", "terhelés", "sarcină", "force", "leverage", "mechanical advantage"]
    ),
  ];
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const MACHINES_GENERATORS = {
  lever: (lang: string = "en", seed: number = 0) => [
    ...generateLeverMCQ(lang, seed),
    ...generateLeverTyping(lang, seed)
  ],
  lever_mcq: (lang: string = "en", seed: number = 0) => generateLeverMCQ(lang, seed),
  lever_typing: (lang: string = "en", seed: number = 0) => generateLeverTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
