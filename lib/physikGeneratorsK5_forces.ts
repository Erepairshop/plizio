// ─── PHYSICS GENERATORS K5: FORCES ────────────────────────────────────────────
// "Kräfte & Bewegung" theme — 6 subtopics with MCQ + Typing generators
// Grade 5 (10-11 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG

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

// ─── 1. PUSH & PULL FORCES ────────────────────────────────────────────────────

const PUSH_PULL_DATA = {
  pushExamples: [
    { en: "pushing a door open", de: "eine Tür aufdrücken", hu: "ajtó nyomása nyitott", ro: "împingerea unei uși deschise" },
    { en: "kicking a ball", de: "einen Ball treten", hu: "labda rúgása", ro: "lovirea unei mingi" },
    { en: "pushing a shopping cart", de: "einen Einkaufswagen schieben", hu: "bevásárlókocsi nyomása", ro: "împingerea unui cărucior de cumpărături" },
    { en: "pressing a button", de: "einen Knopf drücken", hu: "gomb lenyomása", ro: "apăsarea unui buton" },
    { en: "pushing a swing backward", de: "eine Schaukel nach hinten schieben", hu: "hinta visszanyomása", ro: "împingerea unui leagăn înapoi" },
    { en: "pushing a book across a desk", de: "ein Buch über einen Schreibtisch schieben", hu: "könyv nyomása az asztalon", ro: "împingerea unei cărți pe birou" },
  ],
  pullExamples: [
    { en: "pulling a wagon", de: "einen Wagen ziehen", hu: "szekér húzása", ro: "tragerea unui cărucior" },
    { en: "pulling a door open", de: "eine Tür aufziehen", hu: "ajtó húzása nyitott", ro: "tragerea unei uși deschise" },
    { en: "pulling a rope in tug of war", de: "ein Seil im Tauziehen ziehen", hu: "kötél húzása húzó versenyekben", ro: "tragerea unei frânghii în joc de forță" },
    { en: "pulling a suitcase", de: "einen Koffer ziehen", hu: "bőrönd húzása", ro: "tragerea unei valize" },
    { en: "pulling a drawer open", de: "eine Schublade aufziehen", hu: "fiók húzása nyitott", ro: "tragerea unui sertar deschis" },
    { en: "pulling a curtain closed", de: "einen Vorhang zuziehen", hu: "függöny húzása zárva", ro: "tragerea unei perdele închise" },
  ],
};

export function generatePushPullMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What type of force is [action]?"
  for (let i = 0; i < 10; i++) {
    const example = pick([...PUSH_PULL_DATA.pushExamples, ...PUSH_PULL_DATA.pullExamples], rng);
    const isPush = rng() > 0.5;
    const action = isPush ? pick(PUSH_PULL_DATA.pushExamples, rng) : pick(PUSH_PULL_DATA.pullExamples, rng);
    const correct = isPush ? q4("Drücken", "Push", "Nyomás", "Împingere", lang) : q4("Ziehen", "Pull", "Húzás", "Tragere", lang);
    questions.push(createMCQ(
      "forces",
      "push_pull",
      q4(`Was ist die Art der Kraft beim ${action.de}?`, `What type of force is ${action.en}?`, `Milyen típusú erő van a(z) ${action.hu}?`, `Ce tip de forță este implicat în ${action.ro}?`, lang),
      correct,
      [q4("Ziehen", "Pull", "Húzás", "Tragere", lang), q4("Drücken", "Push", "Nyomás", "Împingere", lang), q4("Schwerkraft", "Gravity", "Gravitáció", "Gravitație", lang)],
      rng
    ));
  }

  // Template 2: "Which is an example of [push/pull]?"
  for (let i = 0; i < 10; i++) {
    const isPush = rng() > 0.5;
    const exampleList = isPush ? PUSH_PULL_DATA.pushExamples : PUSH_PULL_DATA.pullExamples;
    const correct = pick(exampleList, rng);
    const wrongList = isPush ? PUSH_PULL_DATA.pullExamples : PUSH_PULL_DATA.pushExamples;
    questions.push(createMCQ(
      "forces",
      "push_pull",
      q4(
        `Welches ist ein Beispiel für ${isPush ? "Drücken" : "Ziehen"}?`,
        `Which is an example of ${isPush ? "pushing" : "pulling"}?`,
        `Melyik a(z) ${isPush ? "nyomás" : "húzás"} egy példája?`,
        `Care este un exemplu de ${isPush ? "împingere" : "tragere"}?`,
        lang
      ),
      correct[lang as "en"],
      wrongList.map(w => w[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What happens when you [action]?"
  for (let i = 0; i < 15; i++) {
    const action = pick(PUSH_PULL_DATA.pushExamples, rng);
    const consequence = [
      q4("Das Objekt bewegt sich", "The object moves", "Az objektum mozog", "Obiectul se mișcă", lang),
      q4("Das Objekt bleibt stehen", "The object stays still", "Az objektum marad", "Obiectul rămâne pe loc", lang),
      q4("Die Kraft verschwindet", "The force disappears", "Az erő eltűnik", "Forța dispare", lang),
    ];
    questions.push(createMCQ(
      "forces",
      "push_pull",
      q4(`Was passiert, wenn du ${action.de}?`, `What happens when you ${action.en}?`, `Mi történik, ha ${action.hu}?`, `Ce se întâmplă când tu ${action.ro}?`, lang),
      q4("Das Objekt bewegt sich", "The object moves", "Az objektum mozog", "Obiectul se mișcă", lang),
      [q4("Gar nichts", "Nothing happens", "Semmi sem történik", "Nimic nu se întâmplă", lang), q4("Das Objekt schrumpft", "The object shrinks", "Az objektum zsugorodik", "Obiectul se micșorează", lang)],
      rng
    ));
  }

  return questions;
}

export function generatePushPullTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("forces", "push_pull", q4("Nenne eine Kraft, die etwas in Bewegung versetzt.", "Name a force that sets something in motion.", "Nevezz meg egy erőt, amely valami mozgásban van.", "Numește o forță care pune ceva în mișcare.", lang), ["push", "pull", "drücken", "ziehen", "nyomás", "húzás", "împingere", "tragere"]),
    createTyping("forces", "push_pull", q4("Ist Schießen eher ein Drücken oder Ziehen?", "Is shooting more of a push or a pull?", "Az agyuláram inkább nyomás vagy húzás?", "Este tragerea mai mult o împingere sau o tragere?", lang), ["push", "drücken", "nyomás", "împingere"]),
    createTyping("forces", "push_pull", q4("Welche Kraft brauchst du, um eine Tür aufzumachen?", "What force do you need to open a door?", "Milyen erőre van szükséged az ajtó megnyitásához?", "Ce forță ai nevoie pentru a deschide o ușă?", lang), ["push", "pull", "drücken", "ziehen", "nyomás", "húzás", "împingere", "tragere"]),
    createTyping("forces", "push_pull", q4("Beschreibe eine Alltagssituation, in der du etwas schiebst.", "Describe an everyday situation where you push something.", "Írj le egy mindennapi helyzetet, ahol valami nyomsz.", "Descrie o situație cotidiană în care împingi ceva.", lang), ["push", "door", "button", "cart", "drücken", "ajtó", "gomb", "kocsi", "nyomás", "împingere"]),
    createTyping("forces", "push_pull", q4("Was ist stärker: Drücken oder Ziehen?", "Which is stronger: pushing or pulling?", "Melyik erősebb: nyomás vagy húzás?", "Care este mai puternic: împingerea sau tragerea?", lang), ["same", "equal", "egyenlő", "la fel", "neither", "sem", "nici"]),
    createTyping("forces", "push_pull", q4("Kannst du eine Schaukel ohne Kraft bewegen?", "Can you move a swing without force?", "Mozgathatod-e a hintát erő nélkül?", "Poți mișca un leagăn fără forță?", lang), ["no", "nein", "nem", "nu"]),
    createTyping("forces", "push_pull", q4("Gib zwei Arten an, wie man eine Tür öffnen kann.", "Give two ways to open a door.", "Add meg két módját az ajtó megnyitásának.", "Dă două moduri de a deschide o ușă.", lang), ["push", "pull", "drücken", "ziehen", "nyomás", "húzás", "împingere", "tragere"]),
    createTyping("forces", "push_pull", q4("Braucht es eine Kraft, um etwas zu bewegen?", "Does it take a force to move something?", "Szükséges-e erő valaminek a mozgatásához?", "Este necesară o forță pentru a mișca ceva?", lang), ["yes", "ja", "igen", "da"]),
    createTyping("forces", "push_pull", q4("Was ist das Gegenteil von Ziehen?", "What is the opposite of pulling?", "Mi a húzás ellentéte?", "Care este opusul tragerii?", lang), ["push", "drücken", "nyomás", "împingere"]),
    createTyping("forces", "push_pull", q4("In welcher Einheit wird Kraft gemessen?", "In what unit is force measured?", "Milyen mértékegységben mért az erő?", "În ce unitate se măsoară forța?", lang), ["newton", "N", "newton", "newton"]),
  ];
}

// ─── 2. FRICTION ──────────────────────────────────────────────────────────────

const FRICTION_DATA = {
  surfaces: [
    { name: q4("Eis", "Ice", "Jég", "Gheață", "en"), friction: "low" },
    { name: q4("Sandpapier", "Sandpaper", "Csiszolópapír", "Hârtie de șlefuit", "en"), friction: "high" },
    { name: q4("Gummi", "Rubber", "Gumi", "Cauciuc", "en"), friction: "high" },
    { name: q4("Öl", "Oil", "Olaj", "Ulei", "en"), friction: "low" },
    { name: q4("Betonweg", "Concrete path", "Betonút", "Cale de beton", "en"), friction: "high" },
    { name: q4("Seifiger Boden", "Soapy floor", "Szappanos padló", "Podea cu săpun", "en"), friction: "low" },
    { name: q4("Reifengummi", "Tire rubber", "Gumiabroncs", "Anvelopă", "en"), friction: "high" },
    { name: q4("Glatte Eis", "Smooth ice", "Sima jég", "Gheață netedă", "en"), friction: "low" },
  ],
  ways_to_reduce: [
    q4("Öl auftragen", "Apply oil", "Olaj felvitele", "Aplicarea uleiului", "en"),
    q4("Oberfläche glätten", "Smooth the surface", "Felület simítása", "Netezirea suprafeței", "en"),
    q4("Wachsen verwenden", "Use wax", "Viasz használata", "Utilizarea cerii", "en"),
    q4("Feuchtigkeitszufuhr", "Apply moisture", "Nedvesség felvitele", "Aplicarea umidității", "en"),
  ],
};

export function generateFrictionMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "Which surface has more friction?"
  for (let i = 0; i < 10; i++) {
    const s1 = pick(FRICTION_DATA.surfaces, rng);
    const s2 = pick(FRICTION_DATA.surfaces.filter(s => s.friction !== s1.friction), rng);
    const highFriction = s1.friction === "high" ? s1 : s2;
    questions.push(createMCQ(
      "forces",
      "friction",
      q4(`Welche Oberfläche hat mehr Reibung: ${s1.name} oder ${s2.name}?`, `Which surface has more friction: ${s1.name} or ${s2.name}?`, `Melyik felület nagyobb súrlódással rendelkezik: ${s1.name} vagy ${s2.name}?`, `Care suprafață are mai multă frecare: ${s1.name} sau ${s2.name}?`, lang),
      highFriction.name,
      FRICTION_DATA.surfaces.map(s => s.name).filter(n => n !== highFriction.name).slice(0, 3),
      rng
    ));
  }

  // Template 2: "What reduces friction?"
  for (let i = 0; i < 10; i++) {
    const way = pick(FRICTION_DATA.ways_to_reduce, rng);
    questions.push(createMCQ(
      "forces",
      "friction",
      q4("Was reduziert die Reibung?", "What reduces friction?", "Mi csökkenti a súrlódást?", "Ce reduce frecarea?", lang),
      way,
      [q4("Sand hinzufügen", "Adding sand", "Homok hozzáadása", "Adăugarea nisipului", lang), q4("Rauhe Oberfläche", "Rough surface", "Durva felület", "Suprafață aspră", lang)],
      rng
    ));
  }

  // Template 3: "Why do tires have treads?"
  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ(
      "forces",
      "friction",
      q4("Warum haben Reifen Profil (Rillen)?", "Why do tires have treads (grooves)?", "Miért vannak barázdák az abroncsban?", "De ce pneurile au anvelopă?", lang),
      q4("Um mehr Reibung zu schaffen", "To create more friction", "Nagyobb súrlódás létrehozása", "Pentru a crea mai multă frecare", lang),
      [q4("Um schneller zu fahren", "To drive faster", "Gyorsabban vezetni", "Pentru a conduce mai repede", lang), q4("Um Wasser zu speichern", "To store water", "Víz tárolása", "Pentru a stoca apă", lang)],
      rng
    ));
  }

  // Template 4: "Ice is slippery because..."
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ(
      "forces",
      "friction",
      q4("Eis ist rutschig, weil...", "Ice is slippery because...", "A jég csúszós, mert...", "Gheața este alunecoasă pentru că...", lang),
      q4("es wenig Reibung hat", "it has low friction", "kevés súrlódása van", "are frecarea redusă", lang),
      [q4("es kalt ist", "it is cold", "hideg van", "e rece", lang), q4("es nass ist", "it is wet", "nedves van", "e umedă", lang)],
      rng
    ));
  }

  return questions;
}

export function generateFrictionTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("forces", "friction", q4("Was ist Reibung?", "What is friction?", "Mi a súrlódás?", "Ce este frecarea?", lang), ["resistance", "opposes motion", "widerstand", "súrlódás", "rezistență", "frecare"]),
    createTyping("forces", "friction", q4("Nenne ein Beispiel für hohe Reibung.", "Name an example of high friction.", "Add meg a nagy súrlódás egy példáját.", "Dă un exemplu de frecare mare.", lang), ["sandpaper", "rubber", "concrete", "csiszolópapír", "gumi", "beton", "papier de șlefuit", "cauciuc", "beton"]),
    createTyping("forces", "friction", q4("Nenne ein Beispiel für niedrige Reibung.", "Name an example of low friction.", "Add meg az alacsony súrlódás egy példáját.", "Dă un exemplu de frecare redusă.", lang), ["ice", "oil", "soap", "jég", "olaj", "szappan", "gheață", "ulei", "săpun"]),
    createTyping("forces", "friction", q4("Wie kannst du die Reibung verringern?", "How can you reduce friction?", "Hogyan csökkentheted a súrlódást?", "Cum poți reduce frecarea?", lang), ["oil", "wax", "smooth", "polieren", "olaj", "viasz", "simítás", "ulei", "cere", "netezire"]),
    createTyping("forces", "friction", q4("Ist Reibung immer schlecht?", "Is friction always bad?", "A súrlódás mindig rossz?", "Frecarea este întotdeauna rea?", lang), ["no", "nein", "nem", "nu", "sometimes useful", "hasznos"]),
    createTyping("forces", "friction", q4("Warum brauchen wir Reibung beim Gehen?", "Why do we need friction when walking?", "Miért van szükségünk a súrlódásra járás közben?", "De ce avem nevoie de frecare la mers?", lang), ["grip", "traction", "halt", "griffel", "traktion", "fogódzó", "tracțiune", "aderență"]),
    createTyping("forces", "friction", q4("Was schafft Reibung zwischen Oberflächen?", "What creates friction between surfaces?", "Mi okozza a súrlódást a felületek között?", "Ce creează frecare között suprafețe?", lang), ["rough", "raue", "durva", "aspru", "Unebenheiten", "egyenetlenségek", "nereguli"]),
    createTyping("forces", "friction", q4("Brauchen Eislaufer niedrige oder hohe Reibung?", "Do ice skaters need low or high friction?", "Szüksége van jégkorcosoknak alacsony vagy nagy súrlódásra?", "Patinatorii pe gheață au nevoie de frecare joasă sau ridicată?", lang), ["low", "niedrig", "alacsony", "redusă"]),
    createTyping("forces", "friction", q4("Was passiert ohne Reibung?", "What happens without friction?", "Mi történne súrlódás nélkül?", "Ce s-ar întâmpla fără frecare?", lang), ["everything slides", "alles rutscht", "minden csúszik", "totul alunecă"]),
    createTyping("forces", "friction", q4("Sind raue Oberflächen oder glatte Oberflächen rutschiger?", "Are rough surfaces or smooth surfaces more slippery?", "Durva vagy sima felületek-e csúszósabbak?", "Suprafețele aspre sau netede sunt mai alunecoase?", lang), ["smooth", "glatt", "sima", "netedă"]),
  ];
}

// ─── 3. GRAVITY ───────────────────────────────────────────────────────────────

export function generateGravityMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is gravity?"
  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ(
      "forces",
      "gravity",
      q4("Was ist Schwerkraft?", "What is gravity?", "Mi a gravitáció?", "Ce este gravitația?", lang),
      q4("Eine Kraft, die Objekte nach unten zieht", "A force that pulls objects downward", "Az erő, amely az objektumokat lefelé húzza", "O forță care trage obiecte în jos", lang),
      [q4("Eine Kraft, die Objekte nach oben drückt", "A force that pushes objects upward", "Az erő, amely az objektumokat felfelé nyomja", "O forță care împinge obiecte în sus", lang), q4("Eine Kraft, die Objekte rotiert", "A force that rotates objects", "Az erő, amely az objektumokat forgatja", "O forță care rotește obiecte", lang)],
      rng
    ));
  }

  // Template 2: "Where would you weigh less?"
  const celestialLocations = [
    { en: "on the Moon", de: "auf dem Mond", hu: "a Holdon", ro: "pe Lună", gravity: "low" },
    { en: "on Earth", de: "auf der Erde", hu: "a Földön", ro: "pe Pământ", gravity: "normal" },
    { en: "on Jupiter", de: "auf dem Jupiter", hu: "a Jupiteren", ro: "pe Jupiter", gravity: "high" },
  ];

  for (let i = 0; i < 9; i++) {
    const loc1 = pick(celestialLocations, rng);
    const loc2 = pick(celestialLocations.filter(l => l.gravity !== loc1.gravity), rng);
    const lesser = loc1.gravity === "low" ? loc1 : loc2.gravity === "low" ? loc2 : pick([loc1, loc2], rng);
    questions.push(createMCQ(
      "forces",
      "gravity",
      q4(`Wo würdest du weniger wiegen: ${loc1.de} oder ${loc2.de}?`, `Where would you weigh less: ${loc1.en} or ${loc2.en}?`, `Hol vagy könnyebb: ${loc1.hu} vagy ${loc2.hu}?`, `Unde ai mai puțin greutate: ${loc1.ro} sau ${loc2.ro}?`, lang),
      lesser[lang as "en"],
      celestialLocations.map(l => l[lang as "en"]).filter(n => n !== lesser[lang as "en"]),
      rng
    ));
  }

  // Template 3: "What is Earth's gravitational acceleration?"
  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ(
      "forces",
      "gravity",
      q4("Was ist die Erdbeschleunigung auf der Erde?", "What is Earth's gravitational acceleration?", "Mi a Föld gravitációs gyorsulása?", "Care este accelerația gravitațională a Pământului?", lang),
      q4("9,8 m/s²", "9.8 m/s²", "9,8 m/s²", "9,8 m/s²", lang),
      [q4("6,2 m/s²", "6.2 m/s²", "6,2 m/s²", "6,2 m/s²", lang), q4("25 m/s²", "25 m/s²", "25 m/s²", "25 m/s²", lang)],
      rng
    ));
  }

  // Template 4: "Gravity on the Moon is..."
  for (let i = 0; i < 10; i++) {
    questions.push(createMCQ(
      "forces",
      "gravity",
      q4("Die Schwerkraft auf dem Mond ist...", "Gravity on the Moon is...", "A Hold gravitációja...", "Gravitația pe Lună este...", lang),
      q4("etwa 1/6 der Erdgravitation", "about 1/6 of Earth's gravity", "Föld gravitációjának körülbelül 1/6-a", "aproximativ 1/6 din gravitația Pământului", lang),
      [q4("gleich wie auf der Erde", "the same as on Earth", "ugyanaz mint a Föld", "la fel ca pe Pământ", lang), q4("2,5-mal stärker", "2.5 times stronger", "2,5-szer erősebb", "2,5 ori mai puternic", lang)],
      rng
    ));
  }

  return questions;
}

export function generateGravityTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("forces", "gravity", q4("Was ist Schwerkraft?", "What is gravity?", "Mi a gravitáció?", "Ce este gravitația?", lang), ["force", "pulls down", "kraft", "zieht herunter", "erő", "húz le", "forță", "trage în jos"]),
    createTyping("forces", "gravity", q4("Wie viel weniger würdest du auf dem Mond wiegen?", "How much less would you weigh on the Moon?", "Mennyivel kevesebbet sulynál a Holdon?", "Cât mai puțin ai cântări pe Lună?", lang), ["1/6", "one sixth", "sechstel", "hatod", "o șesime"]),
    createTyping("forces", "gravity", q4("Wer beschrieb Schwerkraft mit dem fallenden Apfel?", "Who described gravity with a falling apple?", "Ki írta le a gravitációt egy zuhanó alma segítségével?", "Cine a descris gravitația cu un măr care cade?", lang), ["Newton", "Isaac Newton", "newton", "isaac newton"]),
    createTyping("forces", "gravity", q4("Zieht die Erde dich nach unten oder nach oben?", "Does Earth pull you down or up?", "A Föld lefelé vagy felfelé húz?", "Pământul te trage în jos sau în sus?", lang), ["down", "downward", "nach unten", "le", "jos", "jos"]),
    createTyping("forces", "gravity", q4("Auf welchem Planeten würdest du das meiste wiegen?", "On which planet would you weigh the most?", "Mely bolygón súlynál a legtöbbet?", "Pe care planetă ai cântări cel mai mult?", lang), ["Jupiter", "jupiter"]),
    createTyping("forces", "gravity", q4("Gibt es Schwerkraft im Weltall?", "Is there gravity in space?", "Van-e gravitáció az űrben?", "Există gravitație în spațiu?", lang), ["yes", "ja", "igen", "da"]),
    createTyping("forces", "gravity", q4("Was würde ohne Schwerkraft passieren?", "What would happen without gravity?", "Mi történne gravitáció nélkül?", "Ce s-ar întâmpla fără gravitație?", lang), ["float", "weightless", "schweben", "schwerelos", "lebeg", "súlytalanság", "plutire", "fără greutate"]),
    createTyping("forces", "gravity", q4("Ist Schwerkraft überall gleich?", "Is gravity the same everywhere?", "A gravitáció mindenhol ugyanaz?", "Gravitația este la fel peste tot?", lang), ["no", "nein", "nem", "nu"]),
    createTyping("forces", "gravity", q4("Was ist schwerer: 1kg auf Erde oder 1kg auf Mond?", "What weighs more: 1kg on Earth or 1kg on the Moon?", "Mi a nehezebb: 1kg a Földön vagy 1kg a Holdon?", "Ce cântărește mai mult: 1kg pe Pământ sau 1kg pe Lună?", lang), ["same", "equal", "gleich", "egyenlő", "la fel", "aceeași"]),
    createTyping("forces", "gravity", q4("Können wir die Schwerkraft ausschalten?", "Can we turn off gravity?", "Kikapcsolhatjuk a gravitációt?", "Putem opri gravitația?", lang), ["no", "nein", "nem", "nu"]),
  ];
}

// ─── 4. WEIGHT VS MASS ─────────────────────────────────────────────────────

export function generateWeightMassMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is the difference?"
  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ(
      "forces",
      "weight_mass",
      q4("Was ist der Unterschied zwischen Gewicht und Masse?", "What is the difference between weight and mass?", "Mi a különbség a tömeg és a súly között?", "Care este diferența dintre greutate și masă?", lang),
      q4("Masse ändert sich nicht, Gewicht schon", "Mass doesn't change, weight does", "A tömeg nem változik, a súly igen", "Masa nu se schimbă, greutatea se schimbă", lang),
      [q4("Sie sind genau das gleiche", "They are exactly the same", "Teljesen ugyanazok", "Sunt exact la fel", lang), q4("Gewicht ist flüssig", "Weight is liquid", "A súly folyékony", "Greutatea este lichidă", lang)],
      rng
    ));
  }

  // Template 2: "What unit is mass measured in?"
  for (let i = 0; i < 10; i++) {
    questions.push(createMCQ(
      "forces",
      "weight_mass",
      q4("In welcher Einheit wird die Masse gemessen?", "In what unit is mass measured in?", "Milyen mértékegységben mérik a tömeget?", "În ce unitate se măsoară masa?", lang),
      q4("Kilogramm (kg)", "Kilogram (kg)", "Kilogramm (kg)", "Kilogram (kg)", lang),
      [q4("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)", lang), q4("Meter (m)", "Meter (m)", "Meter (m)", "Metru (m)", lang)],
      rng
    ));
  }

  // Template 3: "What unit is weight measured in?"
  for (let i = 0; i < 10; i++) {
    questions.push(createMCQ(
      "forces",
      "weight_mass",
      q4("In welcher Einheit wird das Gewicht gemessen?", "In what unit is weight measured?", "Milyen mértékegységben mérik a súlyt?", "În ce unitate se măsoară greutatea?", lang),
      q4("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)", lang),
      [q4("Kilogramm (kg)", "Kilogram (kg)", "Kilogramm (kg)", "Kilogram (kg)", lang), q4("Sekunde (s)", "Second (s)", "Másodperc (s)", "Secundă (s)", lang)],
      rng
    ));
  }

  // Template 4: "What changes on the Moon?"
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ(
      "forces",
      "weight_mass",
      q4("Was ändert sich auf dem Mond - Gewicht oder Masse?", "What changes on the Moon - weight or mass?", "Mi változik a Holdon - súly vagy tömeg?", "Ce se schimbă pe Lună - greutate sau masă?", lang),
      q4("Nur das Gewicht", "Only the weight", "Csak a súly", "Doar greutatea", lang),
      [q4("Nur die Masse", "Only the mass", "Csak a tömeg", "Doar masa", lang), q4("Beide ändern sich", "Both change", "Mindkettő változik", "Amândouă se schimbă", lang)],
      rng
    ));
  }

  return questions;
}

export function generateWeightMassTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("forces", "weight_mass", q4("Was ist die Einheit der Masse?", "What is the unit of mass?", "Mi a tömeg egysége?", "Care este unitatea de masă?", lang), ["kilogram", "kg", "kilogramm"]),
    createTyping("forces", "weight_mass", q4("Was ist die Einheit des Gewichts?", "What is the unit of weight?", "Mi a súly egysége?", "Care este unitatea de greutate?", lang), ["newton", "N", "newton"]),
    createTyping("forces", "weight_mass", q4("Ändert sich die Masse im Weltall?", "Does mass change in space?", "Megváltozik-e a tömeg az űrben?", "Se schimbă masa în spațiu?", lang), ["no", "nein", "nem", "nu"]),
    createTyping("forces", "weight_mass", q4("Wie hängt Gewicht mit Masse zusammen?", "How does weight relate to mass?", "Hogyan kapcsolódik a súly a tömeghez?", "Cum se raportează greutatea la masă?", lang), ["force", "gravity", "kraft", "schwerkraft", "erő", "gravitáció", "forță", "gravitație"]),
    createTyping("forces", "weight_mass", q4("Ein 10kg Objekt auf der Erde - wie viel wiegt es?", "A 10kg object on Earth - what is its weight?", "Egy 10kg objektum a Földön - mekkora a súlya?", "Un obiect de 10kg pe Pământ - care este greutatea sa?", lang), ["98", "98 N", "newton"]),
    createTyping("forces", "weight_mass", q4("Ist deine Masse auf dem Mond gleich?", "Is your mass the same on the Moon?", "Ugyanaz-e a tömegem a Holdon?", "Este masa ta la fel pe Lună?", lang), ["yes", "ja", "igen", "da"]),
    createTyping("forces", "weight_mass", q4("Kann Masse null sein?", "Can mass be zero?", "Lehet-e a tömeg nulla?", "Poate masa fi zero?", lang), ["no", "nein", "nem", "nu"]),
    createTyping("forces", "weight_mass", q4("Welche ist größer: Gewicht oder Masse?", "Which is greater: weight or mass?", "Melyik nagyobb: súly vagy tömeg?", "Care este mai mare: greutate sau masă?", lang), ["it varies", "depends", "függ", "attól függ", "depinde", "variază"]),
    createTyping("forces", "weight_mass", q4("Ist Gewicht eine Kraft?", "Is weight a force?", "A súly erő-e?", "Greutatea este o forță?", lang), ["yes", "ja", "igen", "da"]),
    createTyping("forces", "weight_mass", q4("Was bleibt gleich überall im Universum?", "What stays the same everywhere in the universe?", "Mi marad ugyanaz az egész univerzumban?", "Ce rămâne la fel peste tot în univers?", lang), ["mass", "tömeg", "masa"]),
  ];
}

// ─── 5. AIR RESISTANCE ─────────────────────────────────────────────────────

const AIR_RESISTANCE_DATA = {
  objects: [
    { name: q4("Fallschirm", "Parachute", "Ejtőernyő", "Parașută", "en"), resistance: "high" },
    { name: q4("Gewehrkugel", "Bullet", "Lövedék", "Glonț", "en"), resistance: "low" },
    { name: q4("Feder", "Feather", "Toll", "Pană", "en"), resistance: "high" },
    { name: q4("Auto", "Car", "Autó", "Mașină", "en"), resistance: "medium" },
    { name: q4("Fallender Stein", "Falling stone", "Zuhanó kő", "Piatră care cade", "en"), resistance: "low" },
    { name: q4("Seifenbubble", "Soap bubble", "Szappanbubble", "Balon de săpun", "en"), resistance: "high" },
  ],
  shapes: [
    { name: q4("Spitz", "Pointed", "Hegyes", "Ascuțit", "en"), reduces: true },
    { name: q4("Rund", "Round", "Gömb alakú", "Rotund", "en"), reduces: false },
    { name: q4("Flach", "Flat", "Lapos", "Plat", "en"), reduces: false },
  ],
};

export function generateAirResistanceMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "Which object has more air resistance?"
  for (let i = 0; i < 12; i++) {
    const obj1 = pick(AIR_RESISTANCE_DATA.objects, rng);
    const obj2 = pick(AIR_RESISTANCE_DATA.objects.filter(o => o.resistance !== obj1.resistance), rng);
    const highRes = obj1.resistance === "high" ? obj1 : obj2;
    questions.push(createMCQ(
      "forces",
      "air_resistance",
      q4(`Welches Objekt hat mehr Luftwiderstand: ${obj1.name} oder ${obj2.name}?`, `Which object has more air resistance: ${obj1.name} or ${obj2.name}?`, `Melyik objektum nagyobb légellenállással rendelkezik: ${obj1.name} vagy ${obj2.name}?`, `Care obiect are mai multă rezistență la aer: ${obj1.name} sau ${obj2.name}?`, lang),
      highRes.name,
      AIR_RESISTANCE_DATA.objects.map(o => o.name).filter(n => n !== highRes.name).slice(0, 3),
      rng
    ));
  }

  // Template 2: "What shape reduces air resistance?"
  for (let i = 0; i < 10; i++) {
    questions.push(createMCQ(
      "forces",
      "air_resistance",
      q4("Welche Form reduziert den Luftwiderstand?", "What shape reduces air resistance?", "Melyik forma csökkenti a légellenállást?", "Care formă reduce rezistența la aer?", lang),
      q4("Stromlinienform (spitz)", "Streamlined (pointed)", "Áramvonalszerű (hegyes)", "Aerodinamic (ascuțit)", lang),
      [q4("Flach und breit", "Flat and wide", "Lapos és széles", "Plat și larg", lang), q4("Kugel", "Sphere", "Gömb", "Sferă", lang)],
      rng
    ));
  }

  // Template 3: "Why do skydivers use parachutes?"
  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ(
      "forces",
      "air_resistance",
      q4("Warum nutzen Fallschirmspringer Fallschirme?", "Why do skydivers use parachutes?", "Miért használnak ejtőernyőt az ugrók?", "De ce folosesc parașutiștii parașuți?", lang),
      q4("Um Luftwiderstand zu erhöhen und langsamer zu fallen", "To increase air resistance and fall slower", "Légellenállás növelésére és lassabban esésre", "Pentru a crește rezistența la aer și a cădea mai lent", lang),
      [q4("Um schneller zu fallen", "To fall faster", "Gyorsabban esésre", "Pentru a cădea mai repede", lang), q4("Um sich zu färben", "To change color", "Szín megváltoztatásra", "Pentru a se colora", lang)],
      rng
    ));
  }

  // Template 4: "Feathers fall slowly because..."
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "forces",
      "air_resistance",
      q4("Federn fallen langsam, weil...", "Feathers fall slowly because...", "A tollak lassan esnek, mert...", "Penele cad lent pentru că...", lang),
      q4("große Luftwiderstand", "great air resistance", "nagy légellenállás", "mare rezistență la aer", lang),
      [q4("sie leicht sind", "they are light", "könnyűek", "sunt ușoare", lang), q4("sie nass sind", "they are wet", "nedvesek", "sunt umede", lang)],
      rng
    ));
  }

  return questions;
}

export function generateAirResistanceTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("forces", "air_resistance", q4("Was ist ein anderer Name für Luftwiderstand?", "What is another name for air resistance?", "Mi az légellenállás másik neve?", "Ce este alt nume pentru rezistență la aer?", lang), ["drag", "aerodynamic resistance", "zug", "luftreibung", "súrlódás", "rezistență aerodinamică", "tragere", "fricțiune aeriană"]),
    createTyping("forces", "air_resistance", q4("Stromlinienförmige Formen reduzieren...", "Streamlined shapes reduce...", "Az áramvonalszerű formák csökkentik...", "Formele aerodinamice reduc...", lang), ["air resistance", "drag", "luftwiderstand", "légellenállás", "rezistență", "tragere"]),
    createTyping("forces", "air_resistance", q4("Ein Fallschirm hat... Luftwiderstand.", "A parachute has... air resistance.", "Egy ejtőernyő... légellenállása van.", "Un parașut are... rezistență la aer.", lang), ["high", "great", "hoch", "nagy", "mare", "puternic"]),
    createTyping("forces", "air_resistance", q4("Welches Objekt durchschneidet die Luft leicht?", "Which object cuts through air easily?", "Melyik objektum vágja könnyen át a levegőt?", "Care obiect traversează ușor aerul?", lang), ["bullet", "arrow", "kugel", "lövedék", "nyíl", "glonț", "săgeată"]),
    createTyping("forces", "air_resistance", q4("Warum haben Autos eine glatte Form?", "Why do cars have a smooth shape?", "Miért van az autóknak sima forma?", "De ce mașinile au o formă netedă?", lang), ["reduce drag", "less resistance", "widerstand reduzieren", "légellenállás csökkentése", "reduce air resistance", "reduceți rezistența"]),
    createTyping("forces", "air_resistance", q4("Schneller fallende Objekte haben... Luftwiderstand.", "Faster falling objects have... air resistance.", "Gyorsabban zuhanó objektumok... légellenállása van.", "Obiecte care cad mai rapid au... rezistență la aer.", lang), ["more", "greater", "mehr", "nagyobb", "mai mult", "mai mare"]),
    createTyping("forces", "air_resistance", q4("Was würde ein Objekt ohne Luft tun?", "What would an object do without air?", "Mit csinálna egy objektum levegő nélkül?", "Ce ar face un obiect fără aer?", lang), ["fall faster", "schneller fallen", "gyorsabban esni", "cădea mai repede"]),
    createTyping("forces", "air_resistance", q4("Verursacht Luftwiderstand Reibung?", "Does air resistance cause friction?", "Okoz-e légellenállás súrlódást?", "Rezistența la aer provoacă fricțiune?", lang), ["similar", "yes", "ähnlich", "ja", "hasonló", "igen", "similar", "da"]),
    createTyping("forces", "air_resistance", q4("Welcher Faktor beinflusst Luftwiderstand?", "What factor affects air resistance?", "Milyen tényező befolyásolja a légellenállást?", "Ce factor afectează rezistența la aer?", lang), ["shape", "speed", "size", "form", "geschwindigkeit", "größe", "forma", "viteza", "mărime"]),
    createTyping("forces", "air_resistance", q4("Können wir Luftwiderstand völlig eliminieren?", "Can we completely eliminate air resistance?", "Teljesen kiküszöbölhetjük-e a légellenállást?", "Putem elimina complet rezistența la aer?", lang), ["no", "nein", "nem", "nu"]),
  ];
}

// ─── 6. FORCE MEASUREMENT ─────────────────────────────────────────────────

export function generateForceMeasurementMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What unit is force measured in?"
  for (let i = 0; i < 10; i++) {
    questions.push(createMCQ(
      "forces",
      "force_measurement",
      q4("In welcher Einheit wird Kraft gemessen?", "In what unit is force measured?", "Milyen mértékegységben mérik az erőt?", "În ce unitate se măsoară forța?", lang),
      q4("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)", lang),
      [q4("Kilogramm (kg)", "Kilogram (kg)", "Kilogramm (kg)", "Kilogram (kg)", lang), q4("Meter (m)", "Meter (m)", "Meter (m)", "Metru (m)", lang)],
      rng
    ));
  }

  // Template 2: "What instrument measures force?"
  for (let i = 0; i < 10; i++) {
    questions.push(createMCQ(
      "forces",
      "force_measurement",
      q4("Welches Instrument misst die Kraft?", "What instrument measures force?", "Melyik eszköz méri az erőt?", "Ce instrument măsoară forța?", lang),
      q4("Dynamometer / Federzug", "Dynamometer / Force Scale", "Dinamométer / Erőmérő", "Dinamometru / Cântar de forță", lang),
      [q4("Lineal", "Ruler", "Vonalzó", "Riglă", lang), q4("Thermometer", "Thermometer", "Hőmérő", "Termometru", lang)],
      rng
    ));
  }

  // Template 3: "If mass=5kg, what is the weight?"
  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ(
      "forces",
      "force_measurement",
      q4("Wenn die Masse 5kg ist, wie viel wiegt sie?", "If mass = 5kg, what is the weight?", "Ha a tömeg 5kg, mekkora a súly?", "Dacă masa = 5kg, care este greutatea?", lang),
      q4("etwa 49 Newton", "about 49 Newtons", "körülbelül 49 Newton", "aproximativ 49 Newtoni", lang),
      [q4("5 Newton", "5 Newtons", "5 Newton", "5 Newtoni", lang), q4("98 Newton", "98 Newtons", "98 Newton", "98 Newtoni", lang)],
      rng
    ));
  }

  // Template 4: "How is force calculated?"
  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ(
      "forces",
      "force_measurement",
      q4("Wie wird die Kraft berechnet?", "How is force calculated?", "Hogyan számítják az erőt?", "Cum se calculează forța?", lang),
      q4("F = Masse × Beschleunigung", "F = Mass × Acceleration", "F = tömeg × gyorsulás", "F = masă × accelerație", lang),
      [q4("F = Masse ÷ Beschleunigung", "F = Mass ÷ Acceleration", "F = tömeg ÷ gyorsulás", "F = masă ÷ accelerație", lang), q4("F = Gewicht + Masse", "F = Weight + Mass", "F = súly + tömeg", "F = greutate + masă", lang)],
      rng
    ));
  }

  return questions;
}

export function generateForceMeasurementTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return [
    createTyping("forces", "force_measurement", q4("Die SI-Einheit der Kraft ist...", "The SI unit of force is...", "Az erő SI egysége...", "Unitatea SI a forței este...", lang), ["newton", "N", "newton"]),
    createTyping("forces", "force_measurement", q4("Nenne das Gerät, das Kraft misst.", "Name the device that measures force.", "Nevezd meg az erőt mérő eszközt.", "Numește dispozitivul care măsoară forța.", lang), ["dynamometer", "force scale", "federzug", "dinamométer", "erőmérő", "cântar de forță", "dinamometru"]),
    createTyping("forces", "force_measurement", q4("Was ist die Formel: F = ?", "What is the formula: F = ?", "Mi a képlet: F = ?", "Care este formula: F = ?", lang), ["M × A", "mass × acceleration", "tömeg × gyorsulás", "masă × accelerație", "MA", "Beschleunigung", "m*a"]),
    createTyping("forces", "force_measurement", q4("Ein Newton ist die Kraft, die...", "One Newton is the force that...", "Egy Newton az erő, amely...", "Un Newton este forța care...", lang), ["accelerates 1kg at 1m/s²", "beschleunigt 1kg mit 1m/s²", "gyorsít 1kg-ot 1m/s²-vel", "accelerează 1kg la 1m/s²"]),
    createTyping("forces", "force_measurement", q4("Welche Einheit kombiniert kg, m und s²?", "Which unit combines kg, m, and s²?", "Mely egység kombinál kg-ot, m-et és s²-et?", "Care unitate combină kg, m și s²?", lang), ["newton", "N", "force unit", "newton"]),
    createTyping("forces", "force_measurement", q4("Eine Feder wird unter... gemessen.", "A spring is measured under...", "Egy rugó mérése alatt...", "Un arc se măsoară sub...", lang), ["tension", "force", "spannung", "kraft", "feszültség", "erő", "tensiune", "forță"]),
    createTyping("forces", "force_measurement", q4("Wie viel ist 1 Newton in kg?", "How much is 1 Newton in kg?", "Mennyit jelent 1 Newton kg-ban?", "Cât este 1 Newton în kg?", lang), ["0.102", "0.1", "approximately", "körülbelül", "aproximativ"]),
    createTyping("forces", "force_measurement", q4("Wird Gewicht in Newton gemessen?", "Is weight measured in Newtons?", "A súly Newton-ban mérendő?", "Greutatea se măsoară în Newtoni?", lang), ["yes", "ja", "igen", "da"]),
    createTyping("forces", "force_measurement", q4("Was ist ein Kraftmesser?", "What is a force gauge?", "Mi az erőmérő?", "Ce este un manometru de forță?", lang), ["spring scale", "dynamometer", "federzug", "dinamométer", "cântar elastic", "dinamometru"]),
    createTyping("forces", "force_measurement", q4("Kann man Kraft direkt sehen?", "Can you see force directly?", "Közvetlenül látható az erő?", "Poți vedea direct forța?", lang), ["no", "nein", "nem", "nu"]),
  ];
}

// ─── EXPORT GENERATOR MAP ──────────────────────────────────────────────────

export const FORCES_GENERATORS = {
  push_pull: (lang: string = "en", seed: number = 0) => [
    ...generatePushPullMCQ(lang, seed),
    ...generatePushPullTyping(lang, seed)
  ],
  push_pull_mcq: (lang: string = "en", seed: number = 0) => generatePushPullMCQ(lang, seed),
  push_pull_typing: (lang: string = "en", seed: number = 0) => generatePushPullTyping(lang, seed),

  friction: (lang: string = "en", seed: number = 0) => [
    ...generateFrictionMCQ(lang, seed),
    ...generateFrictionTyping(lang, seed)
  ],
  friction_mcq: (lang: string = "en", seed: number = 0) => generateFrictionMCQ(lang, seed),
  friction_typing: (lang: string = "en", seed: number = 0) => generateFrictionTyping(lang, seed),

  gravity: (lang: string = "en", seed: number = 0) => [
    ...generateGravityMCQ(lang, seed),
    ...generateGravityTyping(lang, seed)
  ],
  gravity_mcq: (lang: string = "en", seed: number = 0) => generateGravityMCQ(lang, seed),
  gravity_typing: (lang: string = "en", seed: number = 0) => generateGravityTyping(lang, seed),

  weight_mass: (lang: string = "en", seed: number = 0) => [
    ...generateWeightMassMCQ(lang, seed),
    ...generateWeightMassTyping(lang, seed)
  ],
  weight_mass_mcq: (lang: string = "en", seed: number = 0) => generateWeightMassMCQ(lang, seed),
  weight_mass_typing: (lang: string = "en", seed: number = 0) => generateWeightMassTyping(lang, seed),

  air_resistance: (lang: string = "en", seed: number = 0) => [
    ...generateAirResistanceMCQ(lang, seed),
    ...generateAirResistanceTyping(lang, seed)
  ],
  air_resistance_mcq: (lang: string = "en", seed: number = 0) => generateAirResistanceMCQ(lang, seed),
  air_resistance_typing: (lang: string = "en", seed: number = 0) => generateAirResistanceTyping(lang, seed),

  force_measurement: (lang: string = "en", seed: number = 0) => [
    ...generateForceMeasurementMCQ(lang, seed),
    ...generateForceMeasurementTyping(lang, seed)
  ],
  force_measurement_mcq: (lang: string = "en", seed: number = 0) => generateForceMeasurementMCQ(lang, seed),
  force_measurement_typing: (lang: string = "en", seed: number = 0) => generateForceMeasurementTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum5.ts ────────────────────────────────

// Registration is done by importing setK5GeneratorMap from physikCurriculum5
// and calling it externally (e.g. in the test page or astro page)
