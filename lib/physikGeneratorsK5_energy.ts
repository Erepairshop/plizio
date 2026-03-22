// --- PHYSIK GENERATORS K5 - ENERGIE ---
// 5 subtopics x 2 (MCQ + Typing) = 10 generatoren
// Jede MCQ: 35 Fragen (Datenpools + Templates, dedupliziert)
// Jede Typing: 10 Fragen

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK5GeneratorMap } from "./physikCurriculum5";

// --- HELPER FUNCTIONS ---

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

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
    topic: "energy",
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic: "energy",
    subtopic,
    question,
    answer
  };
}

function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// --- DATA POOLS ---

// ENERGIEFORMEN
const ENERGY_FORMS = [
  { form: "kinetic", de: "Kinetische Energie", en: "Kinetic Energy", hu: "Mozgasi energia", ro: "Energie cinetica", example: "moving car" },
  { form: "potential", de: "Potenzielle Energie", en: "Potential Energy", hu: "Helyzeti energia", ro: "Energie potentiala", example: "object at height" },
  { form: "thermal", de: "Warmeenergie", en: "Thermal Energy", hu: "Hoenergia", ro: "Energie termica", example: "hot water" },
  { form: "chemical", de: "Chemische Energie", en: "Chemical Energy", hu: "Kemiai energia", ro: "Energie chimica", example: "food" },
  { form: "electrical", de: "Elektrische Energie", en: "Electrical Energy", hu: "Elektromos energia", ro: "Energie electrica", example: "battery" },
  { form: "light", de: "Lichtenergie", en: "Light Energy", hu: "Fenyenergia", ro: "Energie luminoasa", example: "sun" },
  { form: "sound", de: "Schallenergie", en: "Sound Energy", hu: "Hangenergia", ro: "Energie sonora", example: "loudspeaker" },
  { form: "nuclear", de: "Kernenergie", en: "Nuclear Energy", hu: "Atomenergia", ro: "Energie nucleara", example: "nuclear reactor" },
  { form: "elastic", de: "Elastische Energie", en: "Elastic Energy", hu: "Rugalmassagi energia", ro: "Energie elastica", example: "stretched spring" },
];

const MOVING_OBJECTS = [
  { object: "car", de: "Auto", en: "car", hu: "auto", ro: "masina", speed: "fast" },
  { object: "bicycle", de: "Fahrrad", en: "bicycle", hu: "kerekpar", ro: "bicicleta", speed: "slow" },
  { object: "truck", de: "Lastwagen", en: "truck", hu: "teherauto", ro: "camion", speed: "fast" },
  { object: "person", de: "Person", en: "person", hu: "ember", ro: "persoana", speed: "slow" },
  { object: "ball", de: "Ball", en: "ball", hu: "labda", ro: "minge", speed: "medium" },
  { object: "bullet", de: "Kugel", en: "bullet", hu: "lovedek", ro: "glont", speed: "very fast" },
];

const HEIGHT_OBJECTS = [
  { object: "book", height: "shelf", de: "Buch auf einem Regal", en: "book on a shelf", hu: "konyv a polcon", ro: "carte pe raft" },
  { object: "water", height: "dam", de: "Wasser hinter einem Damm", en: "water behind a dam", hu: "viz a gat mogott", ro: "apa in spatele unui baraj" },
  { object: "ball", height: "cliff", de: "Ball auf einer Klippe", en: "ball on a cliff", hu: "labda a sziklafel tetején", ro: "minge pe o stanca" },
  { object: "roller coaster", height: "top", de: "Achterbahn an der Spitze", en: "roller coaster at top", hu: "hullamvasut csucsán", ro: "roller coaster la virf" },
  { object: "apple", height: "tree", de: "Apfel in einem Baum", en: "apple in a tree", hu: "alma a fan", ro: "mar in pom" },
  { object: "stone", height: "bridge", de: "Stein auf einer Brucke", en: "stone on a bridge", hu: "ko a hidon", ro: "piatra pe un pod" },
];

const ENERGY_CONVERSION_DEVICES = [
  { device: "light bulb", de: "Gluhbirne", en: "light bulb", hu: "izzó", ro: "bec", input: "electrical", output: "light+heat" },
  { device: "car engine", de: "Automotor", en: "car engine", hu: "automofor", ro: "motor de masina", input: "chemical", output: "kinetic+heat" },
  { device: "solar panel", de: "Solarpanel", en: "solar panel", hu: "napelemek", ro: "panou solar", input: "light", output: "electrical" },
  { device: "hydropower plant", de: "Wasserkraftwerk", en: "hydropower plant", hu: "vizierőmu", ro: "hidrocentrala", input: "potential", output: "electrical" },
  { device: "toaster", de: "Toaster", en: "toaster", hu: "kenyerpirító", ro: "toaster", input: "electrical", output: "heat" },
  { device: "microphone", de: "Mikrofon", en: "microphone", hu: "mikrofon", ro: "microfon", input: "sound", output: "electrical" },
  { device: "speaker", de: "Lautsprecher", en: "speaker", hu: "hangszoró", ro: "difuzor", input: "electrical", output: "sound" },
  { device: "wind turbine", de: "Windkraftanlage", en: "wind turbine", hu: "szélturbina", ro: "turbina eoliene", input: "kinetic", output: "electrical" },
];

// --- GENERATORS ---

export function generateEnergyForms(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: "What form of energy does X have?"
  for (const obj of MOVING_OBJECTS) {
    const q = q4(
      "Welche Energieform hat ein bewegtes " + obj.de.toLowerCase() + "?",
      "What form of energy does a moving " + obj.en + " have?",
      "Milyen energiaformaja van egy mozgo " + obj.hu + "-nak?",
      "Ce forma de energie are un " + obj.ro + " in miscare?",
      lang
    );
    const wrongForms = shuffle(
      ENERGY_FORMS.filter(f => f.form !== "kinetic").map(f => f[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"]),
      rng
    ).slice(0, 3);
    questions.push(createMCQ("energy", "energy_forms", q, ENERGY_FORMS.find(f => f.form === "kinetic")?.[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"] || "Kinetic Energy", wrongForms, rng));
  }

  // Template 2: "Which energy form is stored in X?"
  const storageItems = [
    { item: "food", form: "chemical" },
    { item: "battery", form: "electrical" },
    { item: "spring", form: "elastic" },
  ];
  for (const item of storageItems) {
    const form = ENERGY_FORMS.find(f => f.form === item.form);
    const q = q4(
      "Welche Energieform ist in " + item.item + " gespeichert?",
      "Which energy form is stored in " + item.item + "?",
      "Milyen energiaforma van az " + item.item + "-ben eltarolva?",
      "Ce forma de energie este stocata in " + item.item + "?",
      lang
    );
    const wrongForms = shuffle(
      ENERGY_FORMS.filter(f => f.form !== item.form).map(f => f[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"]),
      rng
    ).slice(0, 3);
    questions.push(createMCQ("energy", "energy_forms", q, form?.[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"] || "Energy", wrongForms, rng));
  }

  // Template 3: "A stretched rubber band has what energy?"
  const elasticObjects = [
    { object: "stretched rubber band", de: "aufgezogenes Gummiband", en: "stretched rubber band", hu: "megfeszitett gumiszalag", ro: "banda de cauciuc intinsa" },
    { object: "compressed spring", de: "zusammengedruckte Feder", en: "compressed spring", hu: "osszepreszalt rugo", ro: "arc comprimat" },
    { object: "bent bow", de: "gespannter Bogen", en: "bent bow", hu: "meghajlitott ij", ro: "arc indoit" },
  ];
  for (const obj of elasticObjects) {
    const q = q4(
      "Ein " + obj.de + " hat welche Energieform?",
      "A " + obj.en + " has what form of energy?",
      "Egy " + obj.hu + " milyen energiaformával rendelkezik?",
      "Un " + obj.ro + " are ce forma de energie?",
      lang
    );
    const elasticForm = ENERGY_FORMS.find(f => f.form === "elastic");
    const wrongForms = shuffle(
      ENERGY_FORMS.filter(f => f.form !== "elastic").map(f => f[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"]),
      rng
    ).slice(0, 3);
    questions.push(createMCQ("energy", "energy_forms", q, elasticForm?.[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"] || "Elastic Energy", wrongForms, rng));
  }

  // Template 4: "Which of these is an example of X energy?"
  for (const ef of ENERGY_FORMS.slice(0, 5)) {
    const examples: Record<string, string> = {
      kinetic: "moving car",
      potential: "book on shelf",
      thermal: "hot coffee",
      chemical: "battery",
      electrical: "light bulb"
    };
    const example = examples[ef.form as keyof typeof examples] || ef.example;
    const q = q4(
      "Welches ist ein Beispiel fur " + ef.de + "?",
      "Which is an example of " + ef.en + "?",
      "Melyik példa a " + ef.hu + "-ra?",
      "Care este un exemplu de " + ef.ro + "?",
      lang
    );
    const wrongForms = shuffle(
      ENERGY_FORMS.filter(f => f.form !== ef.form).map(f => f[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"]),
      rng
    ).slice(0, 3);
    questions.push(createMCQ("energy", "energy_forms", q, ef[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"], wrongForms, rng));
  }

  // Template 5: Light and Sound - direct examples
  const lightQ = q4(
    "Welche Energieform gibt die Sonne ab?",
    "What energy does the sun emit?",
    "Milyen energiat bocsat ki a Nap?",
    "Ce energie emite soarele?",
    lang
  );
  const lightForm = ENERGY_FORMS.find(f => f.form === "light");
  const wrongLight = shuffle(
    ENERGY_FORMS.filter(f => f.form !== "light").map(f => f[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"]),
    rng
  ).slice(0, 3);
  questions.push(createMCQ("energy", "energy_forms", lightQ, lightForm?.[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"] || "Light Energy", wrongLight, rng));

  const soundQ = q4(
    "Welche Energieform hat ein Schallwelle?",
    "What energy does a sound wave carry?",
    "Milyen energia van a hanghullamban?",
    "Ce energie are o unda sonora?",
    lang
  );
  const soundForm = ENERGY_FORMS.find(f => f.form === "sound");
  const wrongSound = shuffle(
    ENERGY_FORMS.filter(f => f.form !== "sound").map(f => f[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"]),
    rng
  ).slice(0, 3);
  questions.push(createMCQ("energy", "energy_forms", soundQ, soundForm?.[lang === "de" ? "de" : lang === "hu" ? "hu" : lang === "ro" ? "ro" : "en"] || "Sound Energy", wrongSound, rng));

  // Deduplicate by question text
  const seen = new Set<string>();
  const unique: CurriculumMCQ[] = [];
  for (const q of questions) {
    if (!seen.has(q.question)) {
      seen.add(q.question);
      unique.push(q);
    }
  }

  return shuffle(unique, rng).slice(0, 35);
}

export function generateEnergyFormsTyping(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  // Template 1: Name 3 forms of energy
  const q1 = q4(
    "Nenne 3 verschiedene Energieformen",
    "Name 3 different forms of energy",
    "Nevez meg 3 kulonbozo energiaformát",
    "Numiti 3 forme diferite de energie",
    lang
  );
  questions.push(createTyping("energy", "energy_forms", q1, [
    "kinetic, potential, thermal",
    "mozgasi, helyzeti, hő",
    "kinetische, potenzielle, warme",
    "cinetica, potentiala, termica"
  ]));

  const q2 = q4(
    "Welche Energieform haben bewegte Objekte?",
    "What energy do moving objects have?",
    "Milyen energia van a mozgo objektumoknak?",
    "Ce energie au obiectele in miscare?",
    lang
  );
  questions.push(createTyping("energy", "energy_forms", q2, [
    "kinetic",
    "kinetische",
    "mozgasi",
    "cinetica"
  ]));

  const q3 = q4(
    "Wie heißt die Energie in Lebensmitteln?",
    "What is the energy in food called?",
    "Hogyan hivjak az elelmiszerekben levo energiat?",
    "Cum se numeste energia din alimente?",
    lang
  );
  questions.push(createTyping("energy", "energy_forms", q3, [
    "chemical",
    "chemische",
    "kemiai",
    "chimica"
  ]));

  const q4Text = q4(
    "Nenne zwei Formen von erneuerbaren Energien",
    "Name two forms of renewable energy",
    "Nevezz meg ket megujulo energia formát",
    "Numiti doua forme de energie regenerabila",
    lang
  );
  questions.push(createTyping("energy", "energy_forms", q4Text, [
    "light, wind",
    "solar, wind",
    "light and heat",
    "feny es szel"
  ]));

  const q5Text = q4(
    "Welche Energieform ist in einer Batterie gespeichert?",
    "What energy is stored in a battery?",
    "Milyen energia van eltarolva egy elemben?",
    "Ce energia este stocata intr-o baterie?",
    lang
  );
  questions.push(createTyping("energy", "energy_forms", q5Text, [
    "electrical",
    "chemische",
    "elektromos",
    "electrica"
  ]));

  return shuffle(questions, rng).slice(0, 10);
}

export function generateKineticEnergy(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: "Which has more kinetic energy?"
  const comparisons = [
    { a: "truck", b: "bicycle", answer: "truck", de_a: "Lastwagen", de_b: "Fahrrad", hu_a: "teherauto", hu_b: "kerekpar", ro_a: "camion", ro_b: "bicicleta" },
    { a: "bullet", b: "ball", answer: "bullet", de_a: "Kugel", de_b: "Ball", hu_a: "lovedek", hu_b: "labda", ro_a: "glont", ro_b: "minge" },
    { a: "fast car", b: "slow car", answer: "fast car", de_a: "schnelles Auto", de_b: "langsames Auto", hu_a: "gyors auto", hu_b: "lassu auto", ro_a: "masina rapida", ro_b: "masina lenta" },
    { a: "heavy truck", b: "light car", answer: "heavy truck", de_a: "schwerer Lastwagen", de_b: "leichtes Auto", hu_a: "nehez teherauto", hu_b: "konnyü auto", ro_a: "camion greu", ro_b: "masina usoara" },
  ];

  for (const comp of comparisons) {
    const q = q4(
      "Welches hat mehr kinetische Energie: " + comp.de_a + " oder " + comp.de_b + "?",
      "Which has more kinetic energy: " + comp.a + " or " + comp.b + "?",
      "Melyiknek van több mozgási energiája: " + comp.hu_a + " vagy " + comp.hu_b + "?",
      "Care are mai multa energie cinetica: " + comp.ro_a + " sau " + comp.ro_b + "?",
      lang
    );
    const wrong = comp.answer === "truck" ? "bicycle" : comp.answer === "bullet" ? "ball" : comp.b;
    questions.push(createMCQ("energy", "kinetic_energy", q, comp.answer, [wrong, "neither", "same amount"], rng));
  }

  // Template 2: "What happens to KE when speed doubles?"
  const q_speed = q4(
    "Was passiert mit der kinetischen Energie, wenn sich die Geschwindigkeit verdoppelt?",
    "What happens to KE when speed doubles?",
    "Mi tortenik a mozgasi energiával, ha a sebesség megduplazodik?",
    "Ce se intampl cu energia cinetica cand viteza se dubleaza?",
    lang
  );
  questions.push(createMCQ("energy", "kinetic_energy", q_speed, "It increases by 4 times", ["It increases by 2 times", "It stays the same", "It decreases"], rng));

  // Template 3: "KE depends on..."
  const q_depends = q4(
    "Die kinetische Energie hängt von ab...",
    "Kinetic energy depends on...",
    "A mozgasi energia függ...",
    "Energia cinetica depinde de...",
    lang
  );
  questions.push(createMCQ("energy", "kinetic_energy", q_depends, "mass and velocity", ["only mass", "only velocity", "only temperature"], rng));

  // Template 4: Practical examples with KE
  const practicalKE = [
    { scenario: "car crash", de: "Autounfall", en: "car crash", hu: "autobaleset", ro: "accident de masina", reason: "high velocity" },
    { scenario: "falling object", de: "fallender Gegenstand", en: "falling object", hu: "eso targy", ro: "obiect cazand", reason: "acceleration" },
    { scenario: "thrown ball", de: "geworfener Ball", en: "thrown ball", hu: "dobott labda", ro: "minge aruncata", reason: "force and velocity" },
  ];

  for (const pKE of practicalKE) {
    const q = q4(
      pKE.de + " hat viel kinetische Energie wegen...",
      "A " + pKE.scenario + " has a lot of kinetic energy because...",
      "Egy " + pKE.hu + " sok mozgasi energiával rendelkezik, mert...",
      "Un " + pKE.ro + " are multa energie cinetica din cauza...",
      lang
    );
    questions.push(createMCQ("energy", "kinetic_energy", q, pKE.reason, ["lack of force", "low mass", "stationary position"], rng));
  }

  // Template 5: Stopping distance
  const q_stop = q4(
    "Ein Auto mit hoherer Geschwindigkeit braucht zum Bremsen...",
    "A car with higher speed needs to brake...",
    "Egy nagyobb sebessegu auto fezéshez szükséges...",
    "O masina cu viteza mai mare are nevoie de franare...",
    lang
  );
  questions.push(createMCQ("energy", "kinetic_energy", q_stop, "a longer distance", ["a shorter distance", "the same distance", "no distance"], rng));

  // Template 6: KE formula
  const q_formula = q4(
    "In der Formel KE = 1/2 x m x v2, was ist m?",
    "In the formula KE = 1/2 x m x v2, what is m?",
    "A KE = 1/2 x m x v2 képletben, mi az m?",
    "In formula KE = 1/2 x m x v2, ce este m?",
    lang
  );
  questions.push(createMCQ("energy", "kinetic_energy", q_formula, "mass", ["velocity", "energy", "distance"], rng));

  const q_vSquare = q4(
    "Warum wird die Geschwindigkeit in der KE-Formel quadriert?",
    "Why is velocity squared in the KE formula?",
    "Miért van a sebesség négyzete a KE képletben?",
    "De ce este viteza la patrat in formula KE?",
    lang
  );
  questions.push(createMCQ("energy", "kinetic_energy", q_vSquare, "Because velocity affects KE more strongly", ["Because its easier to calculate", "Because mass is squared", "No reason"], rng));

  // Deduplicate
  const seen = new Set<string>();
  const unique: CurriculumMCQ[] = [];
  for (const q of questions) {
    if (!seen.has(q.question)) {
      seen.add(q.question);
      unique.push(q);
    }
  }

  return shuffle(unique, rng).slice(0, 35);
}

export function generateKineticEnergyTyping(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  const q1 = q4(
    "Kinetische Energie hängt von ___ und ___ ab",
    "Kinetic energy depends on ___ and ___",
    "A mozgasi energia függ ___ és ___ függvénye",
    "Energia cinetica depinde de ___ și ___",
    lang
  );
  questions.push(createTyping("energy", "kinetic_energy", q1, [
    "mass and velocity",
    "Masse und Geschwindigkeit",
    "tomeg és sebesség",
    "masa și viteza"
  ]));

  const q2 = q4(
    "Die Formel fur kinetische Energie ist: KE = ___",
    "The formula for kinetic energy is: KE = ___",
    "A mozgasi energia képlete: KE = ___",
    "Formula pentru energia cinetica este: KE = ___",
    lang
  );
  questions.push(createTyping("energy", "kinetic_energy", q2, [
    "1/2 x m x v2",
    "0.5 x m x v2"
  ]));

  const q3 = q4(
    "Wenn die Geschwindigkeit verdoppelt wird, vervielfacht sich die KE um ___",
    "When speed is doubled, KE increases by ___",
    "Ha a sebesség megduplazodik, a KE ___ -szeresére no",
    "Cand viteza se dubleaza, KE creste de ___ ori",
    lang
  );
  questions.push(createTyping("energy", "kinetic_energy", q3, [
    "4",
    "four times"
  ]));

  const q4Text = q4(
    "Ein Objekt in Bewegung hat ___ Energie",
    "An object in motion has ___ energy",
    "A mozgásban levo objektum ___ energiával rendelkezik",
    "Un obiect in miscare are energie ___",
    lang
  );
  questions.push(createTyping("energy", "kinetic_energy", q4Text, [
    "kinetic",
    "kinetische",
    "mozgasi",
    "cinetica"
  ]));

  const q5Text = q4(
    "Nenne zwei Beispiele fur Objekte mit hoher kinetischer Energie",
    "Name two examples of objects with high kinetic energy",
    "Nevezz meg ket példát magas mozgasi energiáju objektumokra",
    "Numiti doua exemple de obiecte cu energie cinetica mare",
    lang
  );
  questions.push(createTyping("energy", "kinetic_energy", q5Text, [
    "fast car, bullet",
    "schnelles Auto, Kugel",
    "gyors auto, lovedek",
    "masina rapida, glont"
  ]));

  return shuffle(questions, rng).slice(0, 10);
}

export function generatePotentialEnergy(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: "Where has the object most PE?"
  const peLocations = [
    { object: "ball", low: "on ground", mid: "on table", high: "on shelf", de_high: "auf Regal", hu_high: "a polcon", ro_high: "pe raft" },
    { object: "water", low: "in pool", mid: "in pipe", high: "in tower", de_high: "im Turm", hu_high: "a toronyban", ro_high: "în turn" },
    { object: "roller coaster", low: "at bottom", mid: "halfway", high: "at top", de_high: "an der Spitze", hu_high: "csucsán", ro_high: "la virf" },
  ];

  for (const loc of peLocations) {
    const q = q4(
      "Wo hat ein " + loc.object.toLowerCase() + " die meiste potenzielle Energie?",
      "Where does a " + loc.object + " have the most potential energy?",
      "Hol van egy " + loc.object + "-nak a legtöbb helyzeti energiája?",
      "Unde are un " + loc.object + " cea mai multa energie potentiala?",
      lang
    );
    questions.push(createMCQ("energy", "potential_energy", q, loc.high, [loc.low, loc.mid, "nowhere"], rng));
  }

  // Template 2: "What type of PE does X have?"
  const peTypes = [
    { object: "water behind dam", de: "Wasser hinter Damm", en: "water behind dam", hu: "vizz a gat mogott", ro: "apa in spatele barajului", type: "gravitational PE" },
    { object: "stretched spring", de: "gedehnte Feder", en: "stretched spring", hu: "kifeszitett rugo", ro: "arc intins", type: "elastic PE" },
    { object: "ball on cliff", de: "Ball auf Klippe", en: "ball on cliff", hu: "labda a sziklan", ro: "minge pe stanca", type: "gravitational PE" },
  ];

  for (const pType of peTypes) {
    const q = q4(
      "Welche Art von potenzieller Energie hat " + pType.de + "?",
      "What type of PE does " + pType.en + " have?",
      "Milyen típusú helyzeti energiája van a " + pType.hu + "-nak?",
      "Ce tip de energie potentiala are " + pType.ro + "?",
      lang
    );
    questions.push(createMCQ("energy", "potential_energy", q, pType.type, ["kinetic", "thermal", "sound"], rng));
  }

  // Template 3: PE depends
  const q_grav = q4(
    "Gravitations-PE hängt von ab...",
    "Gravitational PE depends on...",
    "A gravitacios PE függ...",
    "PE gravitationala depinde de...",
    lang
  );
  questions.push(createMCQ("energy", "potential_energy", q_grav, "mass and height", ["only height", "only mass", "velocity"], rng));

  // Template 4: PE to KE conversion
  const q_conv = q4(
    "Wenn ein Objekt fallt, wandelt sich PE in... um",
    "When an object falls, PE converts to...",
    "Amikor egy objektum esik, a PE átváltozik...",
    "Cand un obiect cade, PE se converteste in...",
    lang
  );
  questions.push(createMCQ("energy", "potential_energy", q_conv, "kinetic energy", ["heat energy", "sound energy", "chemical energy"], rng));

  // Template 5
  const q_height = q4(
    "Eine Person auf einem Stuhl hat mehr PE als eine Person auf dem Boden?",
    "Does a person on a chair have more PE than on the ground?",
    "Van-e több PE-je egy szemely a szék tetején, mint a föld szintjén?",
    "Are o persoana mai multa PE pe o scaun decat pe pamant?",
    lang
  );
  questions.push(createMCQ("energy", "potential_energy", q_height, "Yes", ["No", "Same amount", "Cannot determine"], rng));

  // Template 6
  const q_mass = q4(
    "Ein schwereres Objekt in der gleichen Höhe hat... PE als ein leichteres",
    "A heavier object at the same height has... PE than a lighter one",
    "Egy nehezebb objektumnak több PE-je van, mint egy könnyebbnek azonos magasságban?",
    "Un obiect mai greu la aceasi inăltime are mai... PE decat unul mai usoara?",
    lang
  );
  questions.push(createMCQ("energy", "potential_energy", q_mass, "more", ["less", "same", "no"], rng));

  // Deduplicate
  const seen = new Set<string>();
  const unique: CurriculumMCQ[] = [];
  for (const q of questions) {
    if (!seen.has(q.question)) {
      seen.add(q.question);
      unique.push(q);
    }
  }

  return shuffle(unique, rng).slice(0, 35);
}

export function generatePotentialEnergyTyping(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  const q1 = q4(
    "Was verleiht einem Objekt gravitationale PE?",
    "What gives an object gravitational potential energy?",
    "Mi ad helyzeti energiat egy objektumnak?",
    "Ce da unei carari energie potentiala gravitationala?",
    lang
  );
  questions.push(createTyping("energy", "potential_energy", q1, [
    "height",
    "position above ground"
  ]));

  const q2 = q4(
    "Die Formel fur gravitationale PE ist: PE = ___",
    "The formula for gravitational PE is: PE = ___",
    "A gravitacios PE képlete: PE = ___",
    "Formula pentru PE gravitationala este: PE = ___",
    lang
  );
  questions.push(createTyping("energy", "potential_energy", q2, [
    "m x g x h",
    "mass x gravity x height"
  ]));

  const q3 = q4(
    "Eine Feder mit ___ Energie ist zusammengepresst oder gedehnt",
    "A spring with ___ energy is compressed or stretched",
    "Egy rugo ___ energiával össze van nyomva vagy kinyújtva",
    "Un arc cu energie ___ este comprimat sau intins",
    lang
  );
  questions.push(createTyping("energy", "potential_energy", q3, [
    "elastic",
    "elastische",
    "rugalmassagi",
    "elastica"
  ]));

  const q4Text = q4(
    "Wenn ein Stein von einer Klippe fallt, hat er oben die meiste ___",
    "When a stone falls from a cliff, it has the most ___ at the top",
    "Amikor egy ko lehullik a sziklairول, a legtöbb ___ van a tetején",
    "Cand o piatra cade de pe o stanca, are cea mai multa ___ la virf",
    lang
  );
  questions.push(createTyping("energy", "potential_energy", q4Text, [
    "potential energy",
    "PE"
  ]));

  const q5Text = q4(
    "Nenne zwei Beispiele fur Objekte mit PE",
    "Name two examples of objects with PE",
    "Nevezz meg ket példát PE-vel rendelkezo objektumokra",
    "Numiti doua exemple de obiecte cu PE",
    lang
  );
  questions.push(createTyping("energy", "potential_energy", q5Text, [
    "book on shelf, water in tower",
    "Buch auf Regal, Wasser im Turm",
    "konyv a polcon, viz a toronyban",
    "carte pe raft, apa în turn"
  ]));

  return shuffle(questions, rng).slice(0, 10);
}

export function generateEnergyConversion(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Device conversions
  for (const device of ENERGY_CONVERSION_DEVICES.slice(0, 5)) {
    const q = q4(
      "Welche Energieumwandlung findet in " + device.de + " statt?",
      "What energy conversion happens in a " + device.en + "?",
      "Milyen energiaatalakulas tortenik a " + device.hu + "-ban?",
      "Ce conversie de energie se intampl intr-un " + device.ro + "?",
      lang
    );
    const conversion = device.input + " to " + device.output;
    const wrongConversions = ["kinetic to thermal", "light to heat", "electrical to sound"];
    questions.push(createMCQ("energy", "energy_conversion", q, conversion, wrongConversions.slice(0, 3), rng));
  }

  // Template 2: Toaster
  const q_toaster = q4(
    "Ein Toaster wandelt ___ zu ___ um",
    "A toaster converts ___ to ___",
    "Egy kenyerpirító ___ -t ___ -vá alakít",
    "Un toaster converteste ___ in ___",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_toaster, "electrical to heat", ["light to heat", "heat to electrical", "chemical to electrical"], rng));

  // Template 3: Solar panel
  const q_solar = q4(
    "Ein Solarpanel wandelt Licht zu... um",
    "A solar panel converts light to...",
    "Egy napelem fenyt alakit at...",
    "Un panou solar converteste lumina in...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_solar, "electrical energy", ["heat", "sound", "chemical"], rng));

  // Template 4: Wind turbine
  const q_wind = q4(
    "Eine Windkraftanlage wandelt ___ in Elektrizitat um",
    "A wind turbine converts ___ to electricity",
    "Egy szélturbina ___ -t alakit aramot",
    "O turbina eoliene converteste ___ in electricitate",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_wind, "kinetic energy", ["heat", "light", "sound"], rng));

  // Template 5: Car engine
  const q_car = q4(
    "Ein Automotor wandelt chemische Energie um... in",
    "A car engine converts chemical energy to...",
    "Egy automofor kemiai energiat alakit at...",
    "Un motor de masina converteste energia chimica in...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_car, "kinetic energy and heat", ["light and sound", "electrical energy", "potential energy"], rng));

  // Template 6: Hydropower
  const q_hydro = q4(
    "Eine Wasserkraftanlage wandelt potenzielle Energie um... in",
    "A hydropower plant converts potential energy to...",
    "Egy vizieromü helyzeti energiat alakit at...",
    "O hidrocentrala converteste energia potentiala in...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_hydro, "electrical energy", ["heat", "sound", "light"], rng));

  // Template 7: Light bulb
  const q_bulb = q4(
    "Eine Gluhbirne wandelt... zu Licht um",
    "A light bulb converts... to light",
    "Egy izzó... -t alakit vilagosságta",
    "Un bec converteste... in lumina",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_bulb, "electrical energy", ["heat", "kinetic", "chemical"], rng));

  // Template 8: Microphone
  const q_mic = q4(
    "Ein Mikrofon wandelt Schallenergie um... in",
    "A microphone converts sound energy to...",
    "Egy mikrofon hangenergiát alakít at...",
    "Un microfon converteste energia sonora in...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conversion", q_mic, "electrical energy", ["heat", "light", "kinetic"], rng));

  // Deduplicate
  const seen = new Set<string>();
  const unique: CurriculumMCQ[] = [];
  for (const q of questions) {
    if (!seen.has(q.question)) {
      seen.add(q.question);
      unique.push(q);
    }
  }

  return shuffle(unique, rng).slice(0, 35);
}

export function generateEnergyConversionTyping(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  const q1 = q4(
    "Ein Solarpanel wandelt ___ Energie zu ___ Energie um",
    "A solar panel converts ___ energy to ___ energy",
    "Egy napelem ___ energiát alakit at ___ energiává",
    "Un panou solar converteste energia ___ in energia ___",
    lang
  );
  questions.push(createTyping("energy", "energy_conversion", q1, [
    "light to electrical",
    "Licht, elektrisch"
  ]));

  const q2 = q4(
    "Ein Automotor wandelt... Energie zu Bewegung um",
    "A car engine converts... energy to motion",
    "Egy automofor... energiat alakit mozgássá",
    "Un motor de masina converteste... energia in miscare",
    lang
  );
  questions.push(createTyping("energy", "energy_conversion", q2, [
    "chemical",
    "chemische"
  ]));

  const q3 = q4(
    "Ein Stromgenerator wandelt... Energie zu Elektrizitat um",
    "A generator converts... energy to electricity",
    "Egy generátor... energiat alakit aramta",
    "Un generator converteste... energia in electricitate",
    lang
  );
  questions.push(createTyping("energy", "energy_conversion", q3, [
    "mechanical",
    "mechanische"
  ]));

  const q4Text = q4(
    "Ein Toaster wandelt... Energie zu Hitze um",
    "A toaster converts... energy to heat",
    "Egy kenyerpirító... energiat alakit höve",
    "Un toaster converteste... energia in caldura",
    lang
  );
  questions.push(createTyping("energy", "energy_conversion", q4Text, [
    "electrical",
    "elektrische"
  ]));

  const q5Text = q4(
    "Nenne ein Beispiel fur eine Energieumwandlung im Alltag",
    "Name one example of energy conversion in daily life",
    "Nevezz meg egy energiaatalakitási példát a mindennapi életből",
    "Numiti un exemplu de conversie energetica in viata de zi cu zi",
    lang
  );
  questions.push(createTyping("energy", "energy_conversion", q5Text, [
    "light bulb converts electrical to light",
    "Gluhbirne konvertiert Strom zu Licht"
  ]));

  return shuffle(questions, rng).slice(0, 10);
}

export function generateEnergyConservation(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Can energy be created or destroyed?
  const q_law = q4(
    "Kann Energie erschaffen oder zerstort werden?",
    "Can energy be created or destroyed?",
    "Keletkezhet vagy megsemmisülhet energia?",
    "Poate energia fi creata sau distrusa?",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_law, "No, it can only change form", ["Yes, both", "Yes, only created", "Yes, only destroyed"], rng));

  // Template 2: State law
  const q_state = q4(
    "Energie... nicht erschaffen oder zerstort, nur umgewandelt",
    "Energy cannot be..., only converted",
    "Az energiát nem lehet... csak átalakítani",
    "Energia nu poate fi..., doar convertita",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_state, "created or destroyed", ["used", "stored", "measured"], rng));

  // Template 3: Where does lost energy go
  const q_lost = q4(
    "Wohin geht verlorene Energie wenn ein Ball abprallt?",
    "Where does lost energy go when a ball bounces?",
    "Hova megy az elveszett energia amikor egy labda visszapattan?",
    "Unde merge energia pierduta cand o minge sare?",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_lost, "It becomes heat and sound", ["It disappears", "It becomes light", "It becomes mass"], rng));

  // Template 4: Pendulum
  const q_pend = q4(
    "In einem Pendel wandelt sich PE um... in KE",
    "In a pendulum, PE converts to...",
    "Egy ingaban a PE átváltozik... KE-vé",
    "Intr-un pendul, PE se converteste in...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_pend, "kinetic energy", ["potential energy", "heat", "light"], rng));

  // Template 5: Roller coaster
  const q_roller = q4(
    "Auf einer Achterbahn wird die maximale PE oben in maximale KE unten umgewandelt",
    "On a roller coaster, maximum PE at top converts to maximum KE at bottom",
    "Egy hullamvasúton a max PE fent max KE-vé változik lent",
    "Pe o roller coaster, max PE la virf se converteste la max KE la bază",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_roller, "True", ["False", "Sometimes", "Depends on mass"], rng));

  // Template 6: Heat loss
  const q_heat = q4(
    "Der Grund, warum eine Schaukel schließlich stoppt, ist...",
    "The reason a swing eventually stops is...",
    "Az oka annak, hogy az inga végül megáll, az...",
    "Motivul pentru care o leagana se opreste in cele din urma este...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_heat, "friction converts mechanical energy to heat", ["energy disappears", "gravity stops it", "wind blows it"], rng));

  // Template 7: Total energy
  const q_total = q4(
    "Die Gesamtenergie in einem isolierten System bleibt...",
    "The total energy in an isolated system remains...",
    "Az elkülönített rendszer teljes energiája marad...",
    "Energia totala intr-un sistem izolat ramane...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_total, "constant", ["increasing", "decreasing", "variable"], rng));

  // Template 8: Bouncing
  const q_bounce = q4(
    "Ein hüpfender Ball verliert Energie mit jedem Sprung. Diese Energie wird zu...",
    "A bouncing ball loses energy with each bounce. This energy becomes...",
    "Egy ugrő labda minden ugráskor energiát veszít. Ez az energia...",
    "O minge care sare pierde energie la fiecare salt. Aceasta energie devine...",
    lang
  );
  questions.push(createMCQ("energy", "energy_conservation", q_bounce, "heat and sound", ["disappears", "becomes kinetic", "becomes light"], rng));

  // Deduplicate
  const seen = new Set<string>();
  const unique: CurriculumMCQ[] = [];
  for (const q of questions) {
    if (!seen.has(q.question)) {
      seen.add(q.question);
      unique.push(q);
    }
  }

  return shuffle(unique, rng).slice(0, 35);
}

export function generateEnergyConservationTyping(lang: string, seed = Math.random()): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  const q1 = q4(
    "Energie kann nicht ___ oder ___ werden",
    "Energy cannot be ___ or ___",
    "Az energiát nem lehet ___ vagy ___ ",
    "Energia nu poate fi ___ sau ___",
    lang
  );
  questions.push(createTyping("energy", "energy_conservation", q1, [
    "created or destroyed",
    "erzeugt oder zerstort"
  ]));

  const q2 = q4(
    "Die Energie wird nur... , nicht erzeugt oder zerstort",
    "Energy is only..., not created or destroyed",
    "Az energia csak... , nem jön létre vagy megsemmisül",
    "Energia este doar..., nu creata sau distrusa",
    lang
  );
  questions.push(createTyping("energy", "energy_conservation", q2, [
    "converted",
    "umgewandelt"
  ]));

  const q3 = q4(
    "Wenn ein Ball abprallt, wird die verlorene Energie zu ___",
    "When a ball bounces, the lost energy becomes ___",
    "Amikor egy labda visszapattan, az elveszett energia ___",
    "Cand o minge sare, energia pierduta devine ___",
    lang
  );
  questions.push(createTyping("energy", "energy_conservation", q3, [
    "heat and sound",
    "Warme und Schall"
  ]));

  const q4Text = q4(
    "Nenne die Energieform eines fallenden Objektes an der Spitze und unten",
    "Name the energy forms of a falling object at top and bottom",
    "Nevezd meg a leesett objektum energiaformáit a tetején és alul",
    "Numiti formele de energie ale unui obiect cazand la virf și jos",
    lang
  );
  questions.push(createTyping("energy", "energy_conservation", q4Text, [
    "potential at top, kinetic at bottom",
    "PE oben, KE unten"
  ]));

  const q5Text = q4(
    "Ein Pendel wechselt zwischen... und... Energie",
    "A pendulum alternates between... and... energy",
    "Egy inga... és... energia között vált",
    "Un pendul alternează intre energia... și...",
    lang
  );
  questions.push(createTyping("energy", "energy_conservation", q5Text, [
    "potential and kinetic",
    "PE und KE"
  ]));

  return shuffle(questions, rng).slice(0, 10);
}

// --- EXPORT GENERATOR MAP ---

export const ENERGY_GENERATORS = {
  energy_forms: generateEnergyForms,
  energy_forms_typing: generateEnergyFormsTyping,
  kinetic_energy: generateKineticEnergy,
  kinetic_energy_typing: generateKineticEnergyTyping,
  potential_energy: generatePotentialEnergy,
  potential_energy_typing: generatePotentialEnergyTyping,
  energy_conversion: generateEnergyConversion,
  energy_conversion_typing: generateEnergyConversionTyping,
  energy_conservation: generateEnergyConservation,
  energy_conservation_typing: generateEnergyConservationTyping,
};

// Auto-register generators
setK5GeneratorMap({
  energy: ENERGY_GENERATORS,
});
