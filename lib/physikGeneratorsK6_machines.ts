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

// ─── 2. PULLEY ────────────────────────────────────────────────────────────

const PULLEY_DATA = {
  types: [
    { en: "fixed pulley", de: "feste Rolle", hu: "rögzített csiga", ro: "scripete fix" },
    { en: "movable pulley", de: "lose Rolle", hu: "mozgatható csiga", ro: "scripete mobil" },
    { en: "pulley system", de: "Rollensystem", hu: "csigaközpontok", ro: "sistem de scripeți" },
  ],

  examples: [
    { en: "a flagpole", de: "eine Fahnenstange", hu: "lobogó tartó", ro: "un stâlp de steag" },
    { en: "a well bucket system", de: "ein Brunnensystem", hu: "kút vödrös rendszer", ro: "un sistem de găleți de puț" },
    { en: "an elevator", de: "ein Aufzug", hu: "lift", ro: "un lift" },
    { en: "a crane", de: "ein Kran", hu: "darú", ro: "o macara" },
    { en: "a block and tackle", de: "ein Flaschenzug", hu: "dárokszíj", ro: "un scripete compus" },
    { en: "venetian blinds", de: "Jalousien", hu: "veneziai redőnyök", ro: "jaluzele" },
  ],

  properties: [
    { en: "changes direction of force", de: "ändert die Richtung der Kraft", hu: "megváltoztatja az erő irányát", ro: "schimbă direcția forței" },
    { en: "provides mechanical advantage", de: "bietet mechanischen Vorteil", hu: "mechanikai előnyt biztosít", ro: "oferă avantaj mecanic" },
    { en: "reduces effort needed", de: "reduziert erforderliche Kraft", hu: "csökkenti szükséges erőt", ro: "reduce efortul necesar" },
  ],
};

export function generatePulleyMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a pulley?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4("Was ist eine Rolle (Flaschenzug)?", "What is a pulley?", "Mi az egy csiga?", "Ce este un scripete?", lang),
      q4("Ein Rad mit einer Rille, um eine Schnur oder ein Seil zu leiten", "A wheel with a grooved rim used to support movement of a rope or cable", "Egy kerekű eszköz egy hornyolt peremmel, egy kötél vagy kábel mozgatásának támogatásához", "O roată cu o canelură folosită pentru a sprijini mișcarea unei frânghii sau a unui cablu", lang),
      [
        q4("Ein Werkzeug zum Schneiden", "A tool for cutting", "Vágó eszköz", "Un instrument de tăiere", lang),
        q4("Ein einfaches Rad", "A simple wheel", "Egyszerű kerék", "O roată simplă", lang),
        q4("Ein Seil zum Ziehen", "A rope for pulling", "Kötél húzáshoz", "O frânghie pentru tragere", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a pulley?"
  for (let i = 0; i < 8; i++) {
    const example = pick(PULLEY_DATA.examples, rng);
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4(`Welches ist ein Beispiel einer Rolle?`, `Which is an example of a pulley?`, `Melyik egy csiga példája?`, `Care este un exemplu de scripete?`, lang),
      example[lang as "en"],
      PULLEY_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What does a fixed pulley do?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4("Was macht eine feste Rolle?", "What does a fixed pulley do?", "Mit csinál egy rögzített csiga?", "Ce face un scripete fix?", lang),
      q4("Sie ändert die Richtung der Kraft", "It changes the direction of force", "Megváltoztatja az erő irányát", "Schimbă direcția forței", lang),
      [
        q4("Sie verringert die Kraft", "It reduces the force needed", "Csökkenti az erőt", "Reduce forța necesară", lang),
        q4("Sie vermehrt die Kraft", "It multiplies the force", "Megsokszorozza az erőt", "Înmulțește forța", lang),
        q4("Sie speichert die Energie", "It stores energy", "Tárola az energiát", "Stochează energia", lang),
      ],
      rng
    ));
  }

  // Template 4: "What is a movable pulley?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4("Was ist eine lose (bewegliche) Rolle?", "What is a movable pulley?", "Mi az egy mozgatható csiga?", "Ce este un scripete mobil?", lang),
      q4("Eine Rolle, die sich mit der Last bewegt und mechanischen Vorteil bietet", "A pulley that moves with the load and provides mechanical advantage", "Egy csiga, amely a teherrel mozog és mechanikai előnyt biztosít", "Un scripete care se mișcă cu sarcina și oferă avantaj mecanic", lang),
      [
        q4("Eine Rolle, die an einem festen Punkt angebracht ist", "A pulley attached to a fixed point", "Egy rögzített ponthoz rögzített csiga", "Un scripete atașat la un punct fix", lang),
        q4("Eine Rolle, die sehr schnell dreht", "A pulley that rotates very fast", "Nagyon gyors forgó csiga", "Un scripete care se rotește foarte repede", lang),
        q4("Eine Rolle ohne Seil", "A pulley without rope", "Csiga kötél nélkül", "Un scripete fără frânghie", lang),
      ],
      rng
    ));
  }

  // Template 5: "What is the mechanical advantage of a movable pulley?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4("Was ist der mechanische Vorteil einer beweglichen Rolle?", "What is the mechanical advantage of a movable pulley?", "Mi az egy mozgatható csiga mechanikai előnye?", "Care este avantajul mecanic al unui scripete mobil?", lang),
      q4("2 (die Last wird in zwei Teile geteilt)", "2 (the load is split into two parts)", "2 (a teher két részre van osztva)", "2 (sarcina este împărțită în două)", lang),
      [
        q4("1 (kein Vorteil)", "1 (no advantage)", "1 (nincs előny)", "1 (fără avantaj)", lang),
        q4("4 (vier Teile)", "4 (four parts)", "4 (négy rész)", "4 (patru)", lang),
        q4("Abhängig von der Größe der Rolle", "Depends on the size of the pulley", "A csiga méretétől függ", "Depinde de dimensiunea scripetei", lang),
      ],
      rng
    ));
  }

  // Template 6: "How many ropes support the load in a [system]?"
  for (let i = 0; i < 4; i++) {
    const systems = [
      { name: q4("einfaches Flaschenzug", "simple pulley system", "egyszerű csiga rendszer", "sistem simplu de scripete", lang), ropes: 2 },
      { name: q4("doppeltes Flaschenzug", "double pulley system", "dupla csiga rendszer", "sistem dublu de scripete", lang), ropes: 4 },
      { name: q4("dreifaches Flaschenzug", "triple pulley system", "hármas csiga rendszer", "sistem triplu de scripete", lang), ropes: 6 },
    ];
    const system = pick(systems, rng);
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4(`Wie viele Seile tragen die Last in einem ${system.name}?`, `How many ropes support the load in a ${system.name}?`, `Hány kötél támogatja a terhet egy ${system.name}-ben?`, `Câte frânghii susțin sarcina într-un ${system.name}?`, lang),
      system.ropes.toString(),
      systems
        .filter(s => s.ropes !== system.ropes)
        .map(s => s.ropes.toString()),
      rng
    ));
  }

  // Template 7: "The more pulleys in a system..."
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "pulley",
      q4("Je mehr Rollen in einem System, desto...", "The more pulleys in a system, the...", "Minél több csiga van a rendszerben, annál...", "Cu cât mai mult scripeți sunt în sistem, cu atât mai...", lang),
      q4("geringer ist die erforderliche Kraft", "less force is required", "kisebb az szükséges erő", "mai puțin efort este necesar", lang),
      [
        q4("höher ist die Kraft", "greater the force needed", "nagyobb az szükséges erő", "mai mult efort este necesar", lang),
        q4("schneller dreht sich die Rolle", "faster the pulley rotates", "gyorsabb a csiga forgása", "mai rapid se rotește scripetele", lang),
        q4("weniger Gewicht hat die Last", "lighter the load becomes", "kevesebb a terhelés súlya", "mai ușoară devine sarcina", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generatePulleyTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("machines", "pulley",
      q4("Was ist eine Rolle und wofür wird sie verwendet?", "What is a pulley and what is it used for?", "Mi az egy csiga és mire használják?", "Ce este un scripete și pentru ce este folosit?", lang),
      ["wheel", "Rad", "kerék", "roată", "groove", "Rille", "horony", "canelură", "rope", "Seil", "kötél", "frânghie", "cable", "Kabel", "kábel", "cablu"]
    ),

    createTyping("machines", "pulley",
      q4("Gib zwei Beispiele für Pulleys im Alltag.", "Give two examples of pulleys in everyday life.", "Add meg két csigapéldát a mindennapi életből.", "Dă două exemple de scripeți în viața de zi cu zi.", lang),
      ["flagpole", "Fahnenstange", "lobogó", "steag", "elevator", "Aufzug", "lift", "lift", "crane", "Kran", "darú", "macara", "blind", "Jalousie", "redőny", "jaluzea", "well", "Brunnen", "kút", "puț"]
    ),

    createTyping("machines", "pulley",
      q4("Was ist der Unterschied zwischen einer festen und einer beweglichen Rolle?", "What is the difference between a fixed and movable pulley?", "Mi a különbség a rögzített és a mozgatható csiga között?", "Care este diferența dintre un scripete fix și unul mobil?", lang),
      ["fixed", "fest", "rögzített", "fix", "movable", "beweglich", "mozgatható", "mobil", "direction", "Richtung", "irány", "direcție", "advantage", "Vorteil", "előny", "avantaj"]
    ),

    createTyping("machines", "pulley",
      q4("Was bedeutet mechanischer Vorteil bei einer Rolle?", "What is mechanical advantage in a pulley system?", "Mit jelent a mechanikai előny egy csiga rendszerben?", "Ce înseamnă avantajul mecanic într-un sistem de scripete?", lang),
      ["less force", "weniger Kraft", "kevesebb erő", "mai puțin efort", "easier", "einfacher", "könnyebb", "mai ușor", "multiply", "vervielfachen", "megsokszorozni", "înmulți"]
    ),

    createTyping("machines", "pulley",
      q4("Eine feste Rolle ändert die... einer Kraft.", "A fixed pulley changes the... of a force.", "Egy rögzített csiga megváltoztatja az erő...ét.", "Un scripete fix schimbă... unei forțe.", lang),
      ["direction", "Richtung", "irány", "direcție"]
    ),

    createTyping("machines", "pulley",
      q4("Eine bewegliche Rolle bietet einen mechanischen...", "A movable pulley provides a mechanical...", "Egy mozgatható csiga mechanikai...t biztosít.", "Un scripete mobil oferă un... mecanic.", lang),
      ["advantage", "Vorteil", "előny", "avantaj"]
    ),

    createTyping("machines", "pulley",
      q4("Wie viele Seile unterstützen die Last in einem einfachen Flaschenzug?", "How many ropes support the load in a simple pulley system?", "Hány kötél támogatja a terhet egy egyszerű csiga rendszerben?", "Câte frânghii susțin sarcina într-un sistem simplu de scripete?", lang),
      ["two", "zwei", "kettő", "doi", "2"]
    ),

    createTyping("machines", "pulley",
      q4("Erkläre, wie ein Flaschenzug einem beim Heben hilft.", "Explain how a pulley system helps with lifting.", "Magyarázd meg, hogyan segít egy csiga rendszer az emelésben.", "Explică cum ajută un sistem de scripete la ridicare.", lang),
      ["mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic", "less force", "weniger Kraft", "kevesebb erő", "mai puțin efort", "distribute", "verteilen", "elosztani", "distribui"]
    ),

    createTyping("machines", "pulley",
      q4("Was passiert mit der Entfernung, die das Seil bewegt, bei mehr Rollen?", "What happens to the distance the rope moves with more pulleys?", "Mi történik az erőkifejtés távolságával több csiga esetén?", "Ce se întâmplă cu distanța de mișcare a frânghiei cu mai mult scripeți?", lang),
      ["increases", "erhöht", "növekszik", "crește", "longer", "länger", "hosszabb", "mai lung", "more distance", "mehr Entfernung", "több távolság", "mai multă distanță"]
    ),

    createTyping("machines", "pulley",
      q4("In einer Maschine ist eine Rolle ein Beispiel für...", "In a machine, a pulley is an example of...", "Egy gépen a csiga egy példa a(z)...-re.", "Într-o mașină, un scripete este un exemplu de...", lang),
      ["simple machine", "einfache Maschine", "egyszerű gép", "mașină simplă", "tool", "Werkzeug", "szerszám", "instrument"]
    ),
  ];
}

// ─── 3. WHEEL AND AXLE ────────────────────────────────────────────────────

const WHEEL_AXLE_DATA = {
  examples: [
    { en: "a steering wheel", de: "ein Lenkrad", hu: "kormánykerék", ro: "o volan" },
    { en: "a screwdriver", de: "ein Schraubendreher", hu: "csavarhúzó", ro: "o șurubelniță" },
    { en: "bicycle pedals", de: "Fahrradpedale", hu: "kerékpár pedálok", ro: "pedale de bicicletă" },
    { en: "a door knob", de: "ein Türgriff", hu: "ajtó gomb", ro: "un pom de ușă" },
    { en: "a car wheel", de: "ein Autorad", hu: "autókerék", ro: "o roată de mașină" },
    { en: "a pencil sharpener", de: "ein Bleistiftspitzer", hu: "ceruzahegyező", ro: "un ascuțitor de creion" },
    { en: "a water faucet", de: "ein Wasserhahn", hu: "vízcsap", ro: "un robinet de apă" },
    { en: "a drill bit with handle", de: "ein Bohrer mit Griff", hu: "fúró fogantyúval", ro: "o broca cu mâner" },
    { en: "a gear and wheel", de: "ein Zahnrad und Rad", hu: "fogaskerék és kerék", ro: "o roată dințată și o roată" },
    { en: "a roller skate wheel", de: "ein Rollschuh-Rad", hu: "görkorcsolya kerék", ro: "o roată de patine" },
  ],

  torqueExamples: [
    { en: "turning a nut with a wrench", de: "eine Mutter mit einem Schlüssel drehen", hu: "anya fordítása kulccsal", ro: "rotirea unei piuliță cu o cheie" },
    { en: "opening a jar", de: "ein Glas öffnen", hu: "üveg megnyitása", ro: "deschiderea unui borcan" },
    { en: "steering a car", de: "ein Auto steuern", hu: "autó irányítása", ro: "dirijarea unei mașini" },
  ],

  properties: [
    { en: "radius", de: "Radius", hu: "sugár", ro: "rază" },
    { en: "mechanical advantage", de: "mechanischer Vorteil", hu: "mechanikai előny", ro: "avantaj mecanic" },
    { en: "torque (rotational force)", de: "Drehmoment (Drehkraft)", hu: "forgatónyomaték (forgási erő)", ro: "cuplu (forță de rotație)" },
    { en: "rotation", de: "Drehung", hu: "forgatás", ro: "rotație" },
  ],
};

export function generateWheelAxleMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a wheel and axle?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Was ist ein Rad und eine Achse?", "What is a wheel and axle?", "Mi az a kerék és tengely?", "Ce este o roată și o axă?", lang),
      q4("Eine einfache Maschine, die aus einem großen Rad besteht, das an einer kleineren Achse befestigt ist", "A simple machine consisting of a large wheel attached to a smaller axle", "Egy egyszerű gép, amely egy nagy kerékből áll, amely egy kisebb tengelyre van szerelve", "O mașină simplă formată dintr-o roată mare atașată la o axă mai mică", lang),
      [
        q4("Ein Seil um eine Rolle", "A rope around a pulley", "Kötél egy csiga körül", "O frânghie în jurul unui scripete", lang),
        q4("Zwei feste Drehpunkte", "Two fixed pivot points", "Két rögzített támaszpont", "Două puncte de sprijin fixe", lang),
        q4("Ein geneigtes Flugzeug", "An inclined plane", "Egy ferde sík", "Un plan înclinat", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a wheel and axle?"
  for (let i = 0; i < 8; i++) {
    const example = pick(WHEEL_AXLE_DATA.examples, rng);
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4(`Welches ist ein Beispiel eines Rads und einer Achse?`, `Which is an example of a wheel and axle?`, `Melyik egy kerék és tengely példája?`, `Care este un exemplu de roată și axă?`, lang),
      example[lang as "en"],
      WHEEL_AXLE_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is mechanical advantage in a wheel and axle?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Was ist der mechanische Vorteil eines Rads und einer Achse?", "What is the mechanical advantage of a wheel and axle?", "Mi a kerék és tengely mechanikai előnye?", "Care este avantajul mecanic al unei roți și axe?", lang),
      q4("Das Verhältnis des Radius des Rads zum Radius der Achse", "The ratio of the wheel's radius to the axle's radius", "A kerék sugarának és a tengely sugarának aránya", "Raportul dintre raza roții și raza axei", lang),
      [
        q4("Die Größe des Rads", "The size of the wheel", "A kerék mérete", "Dimensiunea roții", lang),
        q4("Die Länge der Achse", "The length of the axle", "A tengely hossza", "Lungimea axei", lang),
        q4("Die Drehgeschwindigkeit", "The rotation speed", "A forgás sebessége", "Viteza de rotație", lang),
      ],
      rng
    ));
  }

  // Template 4: "A larger wheel provides..."
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Ein größeres Rad bietet...", "A larger wheel provides...", "Egy nagyobb kerék biztosít...", "O roată mai mare oferă...", lang),
      q4("einen größeren mechanischen Vorteil", "a greater mechanical advantage", "nagyobb mechanikai előnyt", "un avantaj mecanic mai mare", lang),
      [
        q4("einen kleineren mechanischen Vorteil", "a smaller mechanical advantage", "kisebb mechanikai előnyt", "un avantaj mecanic mai mic", lang),
        q4("keinen Unterschied", "no difference", "nincs különbség", "nicio diferență", lang),
        q4("eine schnellere Rotation", "faster rotation", "gyorsabb forgatást", "rotație mai rapidă", lang),
      ],
      rng
    ));
  }

  // Template 5: "What is torque?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Was ist Drehmoment (Torque)?", "What is torque?", "Mit az a forgatónyomaték?", "Ce este cuplul?", lang),
      q4("Die Kraft, die etwas um einen Punkt dreht", "The force that causes rotation around a point", "Az erő, amely egy pont körül valami dolog forog", "Forța care face ceva să se rotească în jurul unui punct", lang),
      [
        q4("Die Bewegung in einer geraden Linie", "Movement in a straight line", "Egyenes vonalú mozgás", "Mișcare într-o linie dreaptă", lang),
        q4("Die Widerstandskraft gegen Bewegung", "Resistance force against movement", "Ellenállás az erővel szemben", "Forță de rezistență împotriva mișcării", lang),
        q4("Die Geschwindigkeit der Rotation", "The speed of rotation", "A forgás sebessége", "Viteza de rotație", lang),
      ],
      rng
    ));
  }

  // Template 6: "Torque equals force times..."
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Drehmoment ist gleich Kraft mal...", "Torque equals force times...", "Forgatónyomaték egyenlő erő szorozva...", "Cuplul este egal cu forța înmulțită cu...", lang),
      q4("Entfernung vom Drehpunkt", "distance from the pivot point", "a forgatási pont távolsága", "distanța de la punctul de pivot", lang),
      [
        q4("der Größe des Objekts", "the size of the object", "az objektum mérete", "dimensiunea obiectului", lang),
        q4("der Rotationsgeschwindigkeit", "the rotation speed", "a forgás sebessége", "viteza de rotație", lang),
        q4("dem Gewicht des Objekts", "the weight of the object", "az objektum súlya", "greutatea obiectului", lang),
      ],
      rng
    ));
  }

  // Template 7: "How can you increase mechanical advantage?"
  for (let i = 0; i < 6; i++) {
    const approaches = [
      q4("Das Rad vergrößern", "Make the wheel larger", "A kerék nagyobbá tétele", "Faceți roata mai mare", lang),
      q4("Die Achse verkleinern", "Make the axle smaller", "A tengely kicsinyítése", "Faceți axa mai mica", lang),
      q4("Das Rad schneller drehen", "Rotate the wheel faster", "A kerék gyorsabb forgatása", "Rotiți roata mai repede", lang),
    ];

    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Wie kann man den mechanischen Vorteil erhöhen?", "How can you increase mechanical advantage?", "Hogyan lehet a mechanikai előnyt növelni?", "Cum poți crește avantajul mecanic?", lang),
      approaches[0],
      approaches.slice(1),
      rng
    ));
  }

  // Template 8: "The longer the radius..."
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "wheel_axle",
      q4("Je länger der Radius des Rads, desto...", "The longer the radius of the wheel, the...", "Minél hosszabb a kerék sugara, annál...", "Cu cât mai lung este raza roții, cu atât mai...", lang),
      q4("weniger Kraft ist erforderlich", "less force is required", "kevesebb erő szükséges", "mai puțin efort este necesar", lang),
      [
        q4("mehr Kraft ist erforderlich", "more force is required", "több erő szükséges", "mai mult efort este necesar", lang),
        q4("gleich viel Kraft ist erforderlich", "the same force is required", "ugyanannyi erő szükséges", "aceeași forță este necesară", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateWheelAxleTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("machines", "wheel_axle",
      q4("Was ist eine Rad-und-Achse-Maschine?", "What is a wheel and axle machine?", "Mit az a kerék és tengely gép?", "Ce este o mașină cu roată și axă?", lang),
      ["simple machine", "einfache Maschine", "egyszerű gép", "mașină simplă", "wheel", "Rad", "kerék", "roată", "axle", "Achse", "tengely", "axă"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Gib drei Beispiele für Rad-und-Achse-Systeme.", "Give three examples of wheel and axle systems.", "Add meg három kerék és tengely rendszer példát.", "Dă trei exemple de sisteme roată și axă.", lang),
      ["steering wheel", "Lenkrad", "kormánykerék", "volan", "screwdriver", "Schraubendreher", "csavarhúzó", "șurubelniță", "bicycle pedal", "Fahrradpedal", "kerékpár pedál", "pedală", "door knob", "Türgriff", "ajtó gomb", "pom", "car wheel", "Autorad", "autókerék", "roată"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Wie wird die mechanischen Vorteil berechnet?", "How is mechanical advantage calculated?", "Hogyan számolják a mechanikai előnyt?", "Cum se calculează avantajul mecanic?", lang),
      ["radius ratio", "Radiusverhältnis", "sugár arány", "raport rază", "wheel radius", "Radradius", "kerék sugara", "rază roată", "axle radius", "Achsenradius", "tengely sugara", "rază axă", "divide"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Was ist Drehmoment (Torque)?", "What is torque?", "Mit az a forgatónyomaték?", "Ce este cuplul?", lang),
      ["rotational force", "Drehkraft", "forgási erő", "forță de rotație", "force times distance", "Kraft mal Entfernung", "erő szorozva távolsággal", "forță înmulțită cu distanță", "rotation", "Drehung", "forgatás", "rotație"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Schreibe die Formel für Drehmoment auf.", "Write the formula for torque.", "Írj fel képletet a forgatónyomatékra.", "Scrie formula pentru cuplu.", lang),
      ["torque", "Drehmoment", "forgatónyomaték", "cuplu", "force", "Kraft", "erő", "forță", "distance", "Entfernung", "távolság", "distanță", "T = F × d", "τ = F × r"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Warum hat ein Lenkrad einen großen Durchmesser?", "Why does a steering wheel have a large diameter?", "Miért van nagy átmérője a kormánykeréknek?", "De ce are un volan un diametru mare?", lang),
      ["mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic", "less force", "weniger Kraft", "kevesebb erő", "mai puțin efort", "easier", "einfacher", "könnyebb", "mai ușor", "larger radius"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Was ist der Unterschied zwischen Rad und Achse?", "What is the difference between wheel and axle?", "Mi a különbség a kerék és a tengely között?", "Care este diferența dintre roată și axă?", lang),
      ["wheel larger", "Rad größer", "kerék nagyobb", "roată mai mare", "axle smaller", "Achse kleiner", "tengely kisebb", "axă mai mică", "attached", "befestigt", "rögzített", "atașat"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Beschreibe, wie ein Schraubendreher ein Rad-und-Achse-System ist.", "Describe how a screwdriver is a wheel and axle system.", "Írj le, hogyan csavarhúzó egy kerék és tengely rendszer.", "Descrie cum șurubelniță este un sistem roată și axă.", lang),
      ["large handle", "großer Griff", "nagy fogantyú", "mâner mare", "small shaft", "kleine Welle", "kis tengely", "ax mic", "mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic", "rotate"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Wie nutzt ein Fahrrad die Rad-und-Achse-Maschine?", "How does a bicycle use the wheel and axle machine?", "Hogyan használja a kerékpár a kerék és tengely gépet?", "Cum folosește bicicleta mașina roată și axă?", lang),
      ["pedals", "Pedale", "pedálok", "pedale", "crank", "Kurbel", "manivella", "cotă", "gear", "Zahnrad", "fogaskerék", "dințată", "rotation", "force"]
    ),

    createTyping("machines", "wheel_axle",
      q4("Was passiert, wenn der Radius des Rads größer wird?", "What happens when the radius of the wheel becomes larger?", "Mit történik, ha a kerék sugara nagyobb lesz?", "Ce se întâmplă când raza roții devine mai mare?", lang),
      ["less force needed", "weniger Kraft erforderlich", "kevesebb erő szükséges", "mai puțin efort necesar", "greater advantage", "größerer Vorteil", "nagyobb előny", "avantaj mai mare", "easier"]
    ),
  ];
}

// ─── 4. SCREW ─────────────────────────────────────────────────────────────

const SCREW_DATA = {
  examples: [
    { en: "a wood screw", de: "eine Holzschraube", hu: "facsavar", ro: "o șurub de lemn" },
    { en: "a jar lid", de: "ein Glasdeckel", hu: "üvegtető", ro: "un capac de borcan" },
    { en: "a clamp", de: "eine Klemme", hu: "szorító", ro: "o clemă" },
    { en: "a light bulb", de: "eine Glühbirne", hu: "izzó", ro: "un bec" },
    { en: "a vise (bench vise)", de: "ein Schraubstock", hu: "fogó", ro: "un menghine" },
    { en: "a C-clamp", de: "eine C-Klemme", hu: "C csipesz", ro: "o clemă C" },
    { en: "a bolt and nut", de: "ein Bolzen und eine Mutter", hu: "csap és anya", ro: "o șurub și o piuliță" },
    { en: "a spiral staircase", de: "eine Wendeltreppe", hu: "spirális lépcsősor", ro: "o scară în spirală" },
    { en: "a drill bit", de: "ein Bohrer", hu: "fúró", ro: "o broca" },
    { en: "a corkscrew", de: "ein Korkenzieher", hu: "dugóhúzó", ro: "un tirbușon" },
  ],

  properties: [
    { en: "pitch", de: "Steigung", hu: "menetemelkedés", ro: "pasul" },
    { en: "inclined plane wrapped in a circle", de: "Schiefe Ebene um einen Kreis gewickelt", hu: "lejtő körbe tekercselve", ro: "plan înclinat înfășurat într-un cerc" },
    { en: "mechanical advantage", de: "mechanischer Vorteil", hu: "mechanikai előny", ro: "avantaj mecanic" },
    { en: "thread", de: "Gewinde", hu: "menet", ro: "filet" },
    { en: "rotation to linear motion", de: "Drehung zu linearer Bewegung", hu: "forgatás lineáris mozgássá", ro: "rotație la mișcare liniară" },
  ],
};

export function generateScrewMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is a screw?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Was ist eine Schraube?", "What is a screw?", "Mit az egy csavar?", "Ce este o șurub?", lang),
      q4("Eine einfache Maschine, die eine schiefe Ebene ist, die um eine Achse gewickelt ist", "A simple machine that is an inclined plane wrapped around an axis", "Egy egyszerű gép, amely egy körbe tekercselett lejtő sík", "O mașină simplă care este un plan înclinat înfășurat într-o axă", lang),
      [
        q4("Ein Werkzeug zum Festziehen von Bolzen", "A tool for tightening bolts", "Csavarok meghúzására szolgáló eszköz", "Un instrument pentru strângerea șuruburilor", lang),
        q4("Ein Rad und eine Achse", "A wheel and axle", "Kerék és tengely", "O roată și o axă", lang),
        q4("Eine Hebelmaschine", "A lever machine", "Emelő gép", "O mașină cu pârghie", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of a screw?"
  for (let i = 0; i < 8; i++) {
    const example = pick(SCREW_DATA.examples, rng);
    questions.push(createMCQ(
      "machines",
      "screw",
      q4(`Welches ist ein Beispiel einer Schraube?`, `Which is an example of a screw?`, `Melyik egy csavar példája?`, `Care este un exemplu de șurub?`, lang),
      example[lang as "en"],
      SCREW_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is pitch?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Was ist die Steigung (Pitch) einer Schraube?", "What is the pitch of a screw?", "Mit a csavar menetemelkedése?", "Care este pasul unei șuruburi?", lang),
      q4("Die Entfernung, die die Schraube bei einer vollständigen Drehung eindringt", "The distance the screw advances in one complete rotation", "A távolság, amit a csavar egy teljes fordulat során halad", "Distanța pe care șurubul avanseaza într-o rotație completă", lang),
      [
        q4("Die Breite des Fadens", "The width of the thread", "A menet szélessége", "Lățimea filetului", lang),
        q4("Die Länge der Schraube", "The length of the screw", "A csavar hossza", "Lungimea șurubului", lang),
        q4("Der Durchmesser der Schraube", "The diameter of the screw", "A csavar átmérője", "Diametrul șurubului", lang),
      ],
      rng
    ));
  }

  // Template 4: "How does a screw provide mechanical advantage?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Wie bietet eine Schraube einen mechanischen Vorteil?", "How does a screw provide mechanical advantage?", "Hogyan biztosít mechanikai előnyt a csavar?", "Cum oferă o șurub avantaj mecanic?", lang),
      q4("Indem sie Rotationsbewegung in eine starke lineare Kraft umwandelt", "By converting rotational motion into a strong linear force", "A forgó mozgást erős lineáris erővé alakítva", "Prin convertirea mișcării de rotație într-o forță liniară puternică", lang),
      [
        q4("Indem sie das Gewicht verringert", "By reducing the weight", "A súly csökkentésével", "Prin reducerea greutății", lang),
        q4("Indem sie die Größe erhöht", "By increasing the size", "A méret növelésével", "Prin mărirea dimensiunii", lang),
        q4("Indem sie die Geschwindigkeit erhöht", "By increasing speed", "A sebesség növelésével", "Prin mărirea vitezei", lang),
      ],
      rng
    ));
  }

  // Template 5: "The smaller the pitch..."
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Je kleiner die Steigung einer Schraube, desto...", "The smaller the pitch of a screw, the...", "Minél kisebb a csavar menetemelkedése, annál...", "Cu cât mai mic este pasul unei șuruburi, cu atât mai...", lang),
      q4("größer ist der mechanische Vorteil", "greater the mechanical advantage", "nagyobb a mechanikai előny", "mai mare este avantajul mecanic", lang),
      [
        q4("kleiner ist der mechanische Vorteil", "smaller the mechanical advantage", "kisebb a mechanikai előny", "mai mic este avantajul mecanic", lang),
        q4("schneller dreht sich die Schraube", "faster the screw rotates", "gyorsabban fordul a csavar", "mai repede se rotește șurubul", lang),
        q4("weniger Gewinde hat die Schraube", "fewer threads the screw has", "kevesebb menet van a csavaron", "mai puține filete are șurubul", lang),
      ],
      rng
    ));
  }

  // Template 6: "A screw is based on which simple machine?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Eine Schraube basiert auf welcher einfachen Maschine?", "A screw is based on which simple machine?", "A csavar melyik egyszerű gépre alapul?", "O șurub se bazează pe ce mașină simplă?", lang),
      q4("Eine schiefe Ebene", "An inclined plane", "Lejtő sík", "Un plan înclinat", lang),
      [
        q4("Ein Hebel", "A lever", "Emelő", "O pârghie", lang),
        q4("Ein Rad und eine Achse", "A wheel and axle", "Kerék és tengely", "O roată și o axă", lang),
        q4("Eine Rolle", "A pulley", "Csiga", "Un scripete", lang),
      ],
      rng
    ));
  }

  // Template 7: "What is the relationship between pitch and mechanical advantage?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Was ist das Verhältnis zwischen Steigung und mechanischem Vorteil?", "What is the relationship between pitch and mechanical advantage?", "Mi a menetemelkedés és mechanikai előny közötti kapcsolat?", "Care este relația dintre pas și avantajul mecanic?", lang),
      q4("Kleinere Steigung = größerer mechanischer Vorteil", "Smaller pitch = greater mechanical advantage", "Kisebb menetemelkedés = nagyobb mechanikai előny", "Pas mai mic = avantaj mecanic mai mare", lang),
      [
        q4("Größere Steigung = größerer mechanischer Vorteil", "Larger pitch = greater mechanical advantage", "Nagyobb menetemelkedés = nagyobb mechanikai előny", "Pas mai mare = avantaj mecanic mai mare", lang),
        q4("Steigung hat keinen Einfluss", "Pitch has no effect", "A menetemelkedésnek nincs hatása", "Pasul nu are efect", lang),
      ],
      rng
    ));
  }

  // Template 8: "How do screws differ from nails?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "machines",
      "screw",
      q4("Wie unterscheiden sich Schrauben von Nägeln?", "How do screws differ from nails?", "Hogyan különböznek a csavarok a szögektől?", "Cum se deosebesc șuruburile de cuie?", lang),
      q4("Schrauben geben einen mechanischen Vorteil und sind wiederverwendbar", "Screws provide mechanical advantage and are reusable", "A csavarok mechanikai előnyt adnak és újrafelhasználhatók", "Șuruburile oferă avantaj mecanic și sunt reutilizabile", lang),
      [
        q4("Nägel sind stärker als Schrauben", "Nails are stronger than screws", "A szögek erősebbek, mint a csavarok", "Cuiele sunt mai puternice decât șuruburile", lang),
        q4("Schrauben sind schneller zu installieren", "Screws are faster to install", "A csavarok gyorsabban szerelhetők fel", "Șuruburile se instalează mai repede", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateScrewTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("machines", "screw",
      q4("Was ist eine Schraube und worauf basiert sie?", "What is a screw and what is it based on?", "Mit az egy csavar és mire alapul?", "Ce este o șurub și pe ce se bazează?", lang),
      ["inclined plane", "schiefe Ebene", "lejtő sík", "plan înclinat", "simple machine", "einfache Maschine", "egyszerű gép", "mașină simplă", "wrapped", "gewickelt", "tekercselett", "înfășurat"]
    ),

    createTyping("machines", "screw",
      q4("Gib drei Beispiele für Schrauben im Alltag.", "Give three examples of screws in everyday life.", "Add meg három csavar példát a mindennapi életből.", "Dă trei exemple de șuruburi în viața de zi cu zi.", lang),
      ["wood screw", "Holzschraube", "facsavar", "șurub de lemn", "jar lid", "Glasdeckel", "üvegtető", "capac borcan", "clamp", "Klemme", "szorító", "clemă", "light bulb", "Glühbirne", "izzó", "bec", "vise", "Schraubstock", "satu", "menghine", "bolt", "Bolzen", "csap"]
    ),

    createTyping("machines", "screw",
      q4("Was ist die Steigung (Pitch) einer Schraube?", "What is the pitch of a screw?", "Mit a csavar menetemelkedése?", "Care este pasul unei șuruburi?", lang),
      ["distance per rotation", "Entfernung pro Umdrehung", "távolság fordulatonként", "distanță pe rotație", "thread advance", "Gewindevorlauf", "menet előrehaladás", "avansul filetului", "one complete turn", "eine vollständige Drehung", "egy teljes fordulat", "o rotație completă"]
    ),

    createTyping("machines", "screw",
      q4("Wie wird der mechanische Vorteil berechnet?", "How is mechanical advantage calculated for a screw?", "Hogyan számolják a mechanikai előnyt a csavarnál?", "Cum se calculează avantajul mecanic pentru o șurub?", lang),
      ["circumference", "Umfang", "kerület", "circumferință", "pitch", "Steigung", "menetemelkedés", "pas", "circumference divided by pitch"]
    ),

    createTyping("machines", "screw",
      q4("Eine kleinere Steigung bietet einen... mechanischen Vorteil.", "A smaller pitch provides a... mechanical advantage.", "Egy kisebb menetemelkedés... mechanikai előnyt biztosít.", "Un pas mai mic oferă un... avantaj mecanic.", lang),
      ["greater", "größer", "nagyobb", "mai mare", "larger"]
    ),

    createTyping("machines", "screw",
      q4("Warum ist eine Schraube nützlich zum Halten von Objekten?", "Why is a screw useful for holding objects?", "Miért hasznos a csavar az objektumok megtartásához?", "De ce este util o șurub pentru a ține obiectele?", lang),
      ["mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic", "strong hold", "starker Halt", "erős rögzítés", "fixare puternică", "rotational to linear", "Rotations zu linear"]
    ),

    createTyping("machines", "screw",
      q4("Wie verwandelt eine Schraube Rotationsbewegung?", "How does a screw convert rotational motion?", "Hogyan alakít a csavar forgó mozgást?", "Cum transformă o șurub mișcarea de rotație?", lang),
      ["linear motion", "lineare Bewegung", "lineáris mozgás", "mișcare liniară", "forward motion", "Vorwärtsbewegung", "előre mozgás", "mișcare înainte", "penetration", "Eindringung", "behatolás", "pătrundere"]
    ),

    createTyping("machines", "screw",
      q4("Erkläre, wie eine Schraube als einfache Maschine wirkt.", "Explain how a screw acts as a simple machine.", "Magyarázd meg, hogyan működik a csavar mint egyszerű gép.", "Explică cum funcționează o șurub ca mașină simplă.", lang),
      ["inclined plane wrapped", "schiefe Ebene gewickelt", "lejtő körbe tekercselve", "plan înclinat înfășurat", "rotational force", "Drehkraft", "forgási erő", "forță de rotație", "linear force", "lineare Kraft", "lineáris erő", "forță liniară"]
    ),

    createTyping("machines", "screw",
      q4("Was ist der Unterschied zwischen einer feinen und einer groben Schraube?", "What is the difference between a fine and coarse screw?", "Mi a különbség a finom és durva csavar között?", "Care este diferența dintre o șurub fină și una aspră?", lang),
      ["pitch", "Steigung", "menetemelkedés", "pas", "fine smaller", "fein kleiner", "finom kisebb", "fină mai mică", "coarse larger", "grob größer", "durva nagyobb", "aspră mai mare", "mechanical advantage"]
    ),

    createTyping("machines", "screw",
      q4("Nenne drei Vorteile von Schrauben gegenüber anderen Befestigungsmitteln.", "Name three advantages of screws over other fasteners.", "Nevezz meg három előnyt a csavaroknak más rögzítésekhez képest.", "Numește trei avantaje ale șuruburilor asupra altor sisteme de fixare.", lang),
      ["reusable", "wiederverwendbar", "újrafelhasználható", "reutilizabil", "removable", "abnehmbar", "eltávolítható", "amovibil", "mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic", "strong hold", "starker Halt", "erős tartás", "fixare puternică"]
    ),
  ];
}

// ─── 5. INCLINED PLANE ────────────────────────────────────────────────────

const INCLINED_PLANE_DATA = {
  examples: [
    { en: "a ramp", de: "eine Rampe", hu: "lejtő", ro: "o rampă" },
    { en: "a ladder leaning against a wall", de: "eine Leiter an der Wand", hu: "létra a fal mellett", ro: "o scară sprijinită de perete" },
    { en: "a slide", de: "eine Rutsche", hu: "csúszda", ro: "o tobogan" },
    { en: "a roof", de: "ein Dach", hu: "tető", ro: "un acoperiș" },
    { en: "a ski slope", de: "eine Skipiste", hu: "síslalom", ro: "o pârtie de schi" },
    { en: "a staircase", de: "eine Treppe", hu: "lépcsősor", ro: "o scară" },
    { en: "a wheelchair ramp", de: "eine Rollstuhlrampe", hu: "kerekesszék rámpa", ro: "o rampă pentru cărucior" },
    { en: "a loading dock", de: "eine Laderampe", hu: "rakodási rámpa", ro: "o rampă de încărcare" },
  ],

  properties: [
    { en: "angle", de: "Winkel", hu: "szög", ro: "unghi" },
    { en: "length", de: "Länge", hu: "hossz", ro: "lungime" },
    { en: "height", de: "Höhe", hu: "magasság", ro: "înălțime" },
    { en: "friction", de: "Reibung", hu: "súrlódás", ro: "frecare" },
  ],
};

export function generateInclinedPlaneMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is an inclined plane?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Was ist eine schiefe Ebene?", "What is an inclined plane?", "Mit az egy ferde sík?", "Ce este un plan înclinat?", lang),
      q4("Eine ebene Fläche, die in einem Winkel zur Horizontalen angehoben ist", "A flat surface raised at an angle to the horizontal", "Egy lapos felület, amely szögben van felemelve a vízszinteshez képest", "O suprafață plană ridicată la un unghi orizontal", lang),
      [
        q4("Eine gebogene Oberfläche", "A curved surface", "Egy ívelt felület", "O suprafață curbă", lang),
        q4("Ein rotierendes Rad", "A rotating wheel", "Egy forgó kerék", "O roată rotativă", lang),
        q4("Eine feste Hebelposition", "A fixed lever position", "Rögzített emelő pozíció", "O poziție fixă a pârghiei", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which is an example of an inclined plane?"
  for (let i = 0; i < 8; i++) {
    const example = pick(INCLINED_PLANE_DATA.examples, rng);
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4(`Welches ist ein Beispiel einer schiefen Ebene?`, `Which is an example of an inclined plane?`, `Melyik egy ferde sík példája?`, `Care este un exemplu de plan înclinat?`, lang),
      example[lang as "en"],
      INCLINED_PLANE_DATA.examples
        .filter(e => e[lang as "en"] !== example[lang as "en"])
        .slice(0, 3)
        .map(e => e[lang as "en"]),
      rng
    ));
  }

  // Template 3: "How does an inclined plane reduce effort?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Wie verringert eine schiefe Ebene den erforderlichen Aufwand?", "How does an inclined plane reduce effort?", "Hogyan csökkenti a ferde sík az erőfeszítést?", "Cum reduce un plan înclinat efortul?", lang),
      q4("Indem sie die Last über eine längere Strecke verteilt", "By spreading the load over a longer distance", "A teher terhelésének hosszabb távolságra való elosztásával", "Prin răspândirea sarcinii pe o distanță mai lungă", lang),
      [
        q4("Indem sie die Schwerkraft aufhebt", "By canceling gravity", "A gravitáció feloldásával", "Prin anularea gravitației", lang),
        q4("Indem sie das Gewicht verringert", "By reducing weight", "A súly csökkentésével", "Prin reducerea greutății", lang),
        q4("Indem sie die Reibung beseitigt", "By eliminating friction", "A súrlódás kiküszöbölésével", "Prin eliminarea frecării", lang),
      ],
      rng
    ));
  }

  // Template 4: "The steeper the angle..."
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Je steiler der Winkel einer schiefen Ebene, desto...", "The steeper the angle of an inclined plane, the...", "Minél meredekebb a ferde sík szöge, annál...", "Cu cât mai abrupt este unghiul unui plan înclinat, cu atât mai...", lang),
      q4("mehr Kraft ist erforderlich", "more force is required", "több erő szükséges", "mai multă forță este necesară", lang),
      [
        q4("weniger Kraft ist erforderlich", "less force is required", "kevesebb erő szükséges", "mai puțin efort este necesar", lang),
        q4("gleich viel Kraft ist erforderlich", "the same force is required", "ugyanannyi erő szükséges", "aceeași forță este necesară", lang),
      ],
      rng
    ));
  }

  // Template 5: "Mechanical advantage formula for inclined plane:"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Was ist die Formel für den mechanischen Vorteil einer schiefen Ebene?", "What is the formula for mechanical advantage of an inclined plane?", "Mi a ferde sík mechanikai előnyének képlete?", "Care este formula avantajului mecanic al unui plan înclinat?", lang),
      q4("MA = Länge / Höhe", "MA = Length / Height", "MA = hossz / magasság", "MA = lungime / înălțime", lang),
      [
        q4("MA = Höhe / Länge", "MA = Height / Length", "MA = magasság / hossz", "MA = înălțime / lungime", lang),
        q4("MA = Winkel × Länge", "MA = Angle × Length", "MA = szög × hossz", "MA = unghi × lungime", lang),
        q4("MA = Gewicht / Länge", "MA = Weight / Length", "MA = súly / hossz", "MA = greutate / lungime", lang),
      ],
      rng
    ));
  }

  // Template 6: "A longer inclined plane provides..."
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Eine längere schiefe Ebene bietet...", "A longer inclined plane provides...", "Egy hosszabb ferde sík biztosít...", "Un plan înclinat mai lung oferă...", lang),
      q4("einen größeren mechanischen Vorteil", "a greater mechanical advantage", "nagyobb mechanikai előnyt", "un avantaj mecanic mai mare", lang),
      [
        q4("einen kleineren mechanischen Vorteil", "a smaller mechanical advantage", "kisebb mechanikai előnyt", "un avantaj mecanic mai mic", lang),
        q4("keinen Unterschied im Vorteil", "no difference in advantage", "nincs különbség az előnyben", "nicio diferență în avantaj", lang),
      ],
      rng
    ));
  }

  // Template 7: "Why do wheelchair ramps need a gentle slope?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Warum benötigen Rollstuhlrampen einen sanften Hang?", "Why do wheelchair ramps need a gentle slope?", "Miért van szüksége a kerekesszék rámpáján egy szelíd lejtőre?", "De ce au nevoie rampele pentru cărucior de o pantă ușoară?", lang),
      q4("Um den erforderlichen Aufwand zu verringern und die Sicherheit zu erhöhen", "To reduce effort needed and increase safety", "Az erőfeszítés csökkentésére és a biztonság növelésére", "Pentru a reduce efortul necesar și a crește siguranța", lang),
      [
        q4("Um das Gewicht zu verringern", "To reduce weight", "A súly csökkentésére", "Pentru a reduce greutatea", lang),
        q4("Um die Reibung zu beseitigen", "To eliminate friction", "A súrlódás kiküszöbölésére", "Pentru a elimina frecarea", lang),
      ],
      rng
    ));
  }

  // Template 8: "What role does friction play on an inclined plane?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "machines",
      "inclined_plane",
      q4("Welche Rolle spielt die Reibung auf einer schiefen Ebene?", "What role does friction play on an inclined plane?", "Milyen szerepet játszik a súrlódás a ferde síkon?", "Ce rol joacă frecarea pe un plan înclinat?", lang),
      q4("Sie widersetzt sich der Bewegung und erhöht die erforderliche Kraft", "It resists motion and increases required force", "A mozgásnak ellenáll és növeli az szükséges erőt", "Se opune mișcării și crește forța necesară", lang),
      [
        q4("Sie verringert die Schwerkraft", "It reduces gravity", "Csökkenti a gravitációt", "Reduce gravitația", lang),
        q4("Sie hat keine Auswirkung", "It has no effect", "Nincs hatása", "Nu are efect", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateInclinedPlaneTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("machines", "inclined_plane",
      q4("Was ist eine schiefe Ebene und wie funktioniert sie?", "What is an inclined plane and how does it work?", "Mit az egy ferde sík és hogyan működik?", "Ce este un plan înclinat și cum funcționează?", lang),
      ["flat surface", "ebene Fläche", "lapos felület", "suprafață plană", "angle", "Winkel", "szög", "unghi", "reduces effort", "verringert Aufwand", "csökkenti erőfeszítést", "reduce efort"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Gib drei Beispiele für schiefe Ebenen im Alltag.", "Give three examples of inclined planes in everyday life.", "Add meg három ferde sík példát a mindennapi életből.", "Dă trei exemple de plane înclinate în viața de zi cu zi.", lang),
      ["ramp", "Rampe", "lejtő", "rampă", "ladder", "Leiter", "létra", "scară", "slide", "Rutsche", "csúszda", "tobogan", "roof", "Dach", "tető", "acoperiș", "stairs", "Treppen", "lépcsők", "scări"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Was ist die Formel für den mechanischen Vorteil?", "What is the mechanical advantage formula?", "Mi a mechanikai előny képlete?", "Care este formula avantajului mecanic?", lang),
      ["length divided by height", "Länge durch Höhe", "hossz osztva magassággal", "lungime împărțită la înălțime", "MA = L/H", "MA = length/height"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Wie reduziert eine schiefe Ebene den erforderlichen Aufwand?", "How does an inclined plane reduce effort?", "Hogyan csökkenti a ferde sík az erőfeszítést?", "Cum reduce un plan înclinat efortul?", lang),
      ["spreads load", "verteilt Last", "terhelést terjeszt", "distribuie sarcina", "longer distance", "längere Strecke", "hosszabb távolság", "distanță mai lungă", "mechanical advantage"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Je steiler der Hang, desto... Kraft ist erforderlich.", "The steeper the slope, the... force is required.", "Minél meredekebb a lejtő, annál... erő szükséges.", "Cu cât mai abrupt panta, cu atât mai... forță este necesară.", lang),
      ["more", "mehr", "több", "mai multă"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Warum ist die Steigung von Treppen wichtig?", "Why is the slope of stairs important?", "Miért fontos a lépcső lejtése?", "De ce este importantă panta scărilor?", lang),
      ["safety", "Sicherheit", "biztonság", "siguranță", "effort", "Aufwand", "erőfeszítés", "efort", "climbing", "Klettern", "mászás", "urcarea"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Was ist der Unterschied zwischen einem steilen und einem sanften Hang?", "What is the difference between a steep and gentle slope?", "Mi a különbség egy meredek és szelíd lejtő között?", "Care este diferența dintre o pantă abruptă și una ușoară?", lang),
      ["steeper requires more force", "steiler mehr Kraft", "meredekebb több erőt", "mai abrupt mai multă forță", "gentle less force", "sanft weniger Kraft", "szelíd kevesebb erő", "ușor mai puțin efort"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Erkläre, wie Reibung eine schiefe Ebene beeinflusst.", "Explain how friction affects an inclined plane.", "Magyarázd meg, hogyan befolyásolja a súrlódás a ferde síkot.", "Explică cum afectează frecarea un plan înclinat.", lang),
      ["opposes motion", "widersetzt Bewegung", "ellenáll mozgásnak", "se opune mișcării", "increases force needed", "erhöht erforderliche Kraft", "növeli szükséges erőt", "crește forța necesară"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Warum verwenden Lagerhäuser Rampen statt Treppen?", "Why do warehouses use ramps instead of stairs?", "Miért használnak a raktárak rámpákat a lépcső helyett?", "De ce folosesc depozitele rampe în loc de scări?", lang),
      ["easier to move cargo", "leichter zu bewegen", "könnyebb mozgatni", "mai ușor să mute", "mechanical advantage", "mechanischer Vorteil", "mechanikai előny", "avantaj mecanic", "reduce effort"]
    ),

    createTyping("machines", "inclined_plane",
      q4("Welche Faktoren beeinflussen den mechanischen Vorteil?", "What factors influence mechanical advantage?", "Milyen tényezők befolyásolják a mechanikai előnyt?", "Care sunt factorii care influențează avantajul mecanic?", lang),
      ["length", "Länge", "hossz", "lungime", "height", "Höhe", "magasság", "înălțime", "angle", "Winkel", "szög", "unghi", "ratio"]
    ),
  ];
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_MACHINES_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  lever: (lang = "en", seed = 0) => [...generateLeverMCQ(lang, seed), ...generateLeverTyping(lang, seed)],
  lever_mcq: (lang = "en", seed = 0) => generateLeverMCQ(lang, seed),
  lever_typing: (lang = "en", seed = 0) => generateLeverTyping(lang, seed),

  pulley: (lang = "en", seed = 0) => [...generatePulleyMCQ(lang, seed), ...generatePulleyTyping(lang, seed)],
  pulley_mcq: (lang = "en", seed = 0) => generatePulleyMCQ(lang, seed),
  pulley_typing: (lang = "en", seed = 0) => generatePulleyTyping(lang, seed),

  inclined_plane: (lang = "en", seed = 0) => [...generateInclinedPlaneMCQ(lang, seed), ...generateInclinedPlaneTyping(lang, seed)],
  inclined_plane_mcq: (lang = "en", seed = 0) => generateInclinedPlaneMCQ(lang, seed),
  inclined_plane_typing: (lang = "en", seed = 0) => generateInclinedPlaneTyping(lang, seed),

  wheel_axle: (lang = "en", seed = 0) => [...generateWheelAxleMCQ(lang, seed), ...generateWheelAxleTyping(lang, seed)],
  wheel_axle_mcq: (lang = "en", seed = 0) => generateWheelAxleMCQ(lang, seed),
  wheel_axle_typing: (lang = "en", seed = 0) => generateWheelAxleTyping(lang, seed),

  screw: (lang = "en", seed = 0) => [...generateScrewMCQ(lang, seed), ...generateScrewTyping(lang, seed)],
  screw_mcq: (lang = "en", seed = 0) => generateScrewMCQ(lang, seed),
  screw_typing: (lang = "en", seed = 0) => generateScrewTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
