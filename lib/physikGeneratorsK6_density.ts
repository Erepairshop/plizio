// ─── PHYSICS GENERATORS K6: DENSITY ────────────────────────────────────────
// "Dichte" theme — Density basics with MCQ + Typing generators
// Grade 6 (11-12 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Formula: ρ = m / V (Density = Mass / Volume)
// Unit: kg/m³ or g/cm³

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

// ─── 1. DENSITY BASICS ─────────────────────────────────────────────────────

const DENSITY_BASICS_DATA = {
  examples: [
    { en: "water", de: "Wasser", hu: "víz", ro: "apă" },
    { en: "iron", de: "Eisen", hu: "vas", ro: "fier" },
    { en: "gold", de: "Gold", hu: "arany", ro: "aur" },
    { en: "air", de: "Luft", hu: "levegő", ro: "aer" },
    { en: "aluminum", de: "Aluminium", hu: "alumínium", ro: "aluminiu" },
    { en: "copper", de: "Kupfer", hu: "réz", ro: "cupru" },
    { en: "ice", de: "Eis", hu: "jég", ro: "gheață" },
    { en: "oil", de: "Öl", hu: "olaj", ro: "ulei" },
    { en: "cork", de: "Kork", hu: "parafa", ro: "plută" },
    { en: "lead", de: "Blei", hu: "ólom", ro: "plumb" },
  ],

  densities: [
    { en: "water: 1000 kg/m³", de: "Wasser: 1000 kg/m³", hu: "víz: 1000 kg/m³", ro: "apă: 1000 kg/m³", value: 1000 },
    { en: "iron: 7874 kg/m³", de: "Eisen: 7874 kg/m³", hu: "vas: 7874 kg/m³", ro: "fier: 7874 kg/m³", value: 7874 },
    { en: "gold: 19300 kg/m³", de: "Gold: 19300 kg/m³", hu: "arany: 19300 kg/m³", ro: "aur: 19300 kg/m³", value: 19300 },
    { en: "air: 1.29 kg/m³", de: "Luft: 1.29 kg/m³", hu: "levegő: 1.29 kg/m³", ro: "aer: 1.29 kg/m³", value: 1.29 },
    { en: "aluminum: 2700 kg/m³", de: "Aluminium: 2700 kg/m³", hu: "alumínium: 2700 kg/m³", ro: "aluminiu: 2700 kg/m³", value: 2700 },
    { en: "copper: 8960 kg/m³", de: "Kupfer: 8960 kg/m³", hu: "réz: 8960 kg/m³", ro: "cupru: 8960 kg/m³", value: 8960 },
    { en: "ice: 917 kg/m³", de: "Eis: 917 kg/m³", hu: "jég: 917 kg/m³", ro: "gheață: 917 kg/m³", value: 917 },
    { en: "oil: 850 kg/m³", de: "Öl: 850 kg/m³", hu: "olaj: 850 kg/m³", ro: "ulei: 850 kg/m³", value: 850 },
  ],

  formulas: [
    { en: "ρ = m / V", de: "ρ = m / V", hu: "ρ = m / V", ro: "ρ = m / V" },
    { en: "m = ρ × V", de: "m = ρ × V", hu: "m = ρ × V", ro: "m = ρ × V" },
    { en: "V = m / ρ", de: "V = m / ρ", hu: "V = m / ρ", ro: "V = m / ρ" },
  ],

  units: [
    { en: "kg/m³ (kilogram per cubic meter)", de: "kg/m³ (Kilogramm pro Kubikmeter)", hu: "kg/m³ (kilogramm köbméterenként)", ro: "kg/m³ (kilogram pe metru cub)" },
    { en: "g/cm³ (gram per cubic centimeter)", de: "g/cm³ (Gramm pro Kubikzentimeter)", hu: "g/cm³ (gramm köbcentineter)", ro: "g/cm³ (gram pe centimetru cub)" },
  ],

  properties: [
    { en: "higher density → sinks in water", de: "höhere Dichte → sinkt im Wasser", hu: "magasabb sűrűség → a vízben süllyed", ro: "densitate mai mare → se scufundă în apă" },
    { en: "lower density → floats in water", de: "niedrigere Dichte → schwimmt im Wasser", hu: "alacsonyabb sűrűség → a vízben úszik", ro: "densitate mai mică → plutește în apă" },
    { en: "density is an intensive property", de: "Dichte ist eine intensive Eigenschaft", hu: "sűrűség intenzív tulajdonság", ro: "densitatea este o proprietate intensivă" },
    { en: "density depends on material type", de: "Dichte hängt vom Materialtyp ab", hu: "sűrűség az anyagtípustól függ", ro: "densitatea depinde de tipul materialului" },
  ],
};

export function generateDensityBasicsMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "What is density?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("Was ist Dichte?", "What is density?", "Mi a sűrűség?", "Ce este densitatea?", lang),
      q4("Die Masse eines Stoffes pro Volumeneinheit", "The mass of a substance per unit volume", "Egy anyag tömege térfogatmegységenként", "Masa unei substanțe pe unitate de volum", lang),
      [
        q4("Die Menge an Wasser in einem Stoff", "The amount of water in a substance", "Az anyagban lévő víz mennyisége", "Cantitatea de apă într-o substanță", lang),
        q4("Die Schwere eines Objekts", "The heaviness of an object", "Egy objektum súlya", "Greutatea unui obiect", lang),
        q4("Die Größe eines Objekts", "The size of an object", "Egy objektum mérete", "Dimensiunea unui obiect", lang),
      ],
      rng
    ));
  }

  // Template 2: "Which has the highest density?"
  for (let i = 0; i < 8; i++) {
    const density = pick(DENSITY_BASICS_DATA.densities, rng);
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("Welcher Stoff hat die höchste Dichte?", "Which substance has the highest density?", "Melyik anyag a legnagyobb sűrűségű?", "Ce substanță are cea mai mare densitate?", lang),
      q4(density.de, density.en, density.hu, density.ro, lang),
      [
        q4("Luft: 1.29 kg/m³", "Air: 1.29 kg/m³", "Levegő: 1.29 kg/m³", "Aer: 1.29 kg/m³", lang),
        q4("Eis: 917 kg/m³", "Ice: 917 kg/m³", "Jég: 917 kg/m³", "Gheață: 917 kg/m³", lang),
        q4("Wasser: 1000 kg/m³", "Water: 1000 kg/m³", "Víz: 1000 kg/m³", "Apă: 1000 kg/m³", lang),
      ],
      rng
    ));
  }

  // Template 3: "What is the density formula?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("Welche Formel beschreibt Dichte?", "Which formula describes density?", "Melyik képlet írja le a sűrűséget?", "Care formulă descrie densitatea?", lang),
      q4("ρ = m / V", "ρ = m / V", "ρ = m / V", "ρ = m / V", lang),
      [
        q4("ρ = V / m", "ρ = V / m", "ρ = V / m", "ρ = V / m", lang),
        q4("ρ = m × V", "ρ = m × V", "ρ = m × V", "ρ = m × V", lang),
        q4("ρ = m + V", "ρ = m + V", "ρ = m + V", "ρ = m + V", lang),
      ],
      rng
    ));
  }

  // Template 4: "What unit measures density?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("In welcher Einheit wird Dichte gemessen?", "In which unit is density measured?", "Melyik egységben mérjük a sűrűséget?", "În ce unitate se măsoară densitatea?", lang),
      q4("kg/m³", "kg/m³", "kg/m³", "kg/m³", lang),
      [
        q4("kg", "kg", "kg", "kg", lang),
        q4("m³", "m³", "m³", "m³", lang),
        q4("N/m²", "N/m²", "N/m²", "N/m²", lang),
      ],
      rng
    ));
  }

  // Template 5: "Will it float or sink?"
  for (let i = 0; i < 4; i++) {
    const example = pick(DENSITY_BASICS_DATA.examples, rng);
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("Wird dieses Material im Wasser schwimmen oder sinken?", "Will this material float or sink in water?", "Fog vagy süllyedni fog ez az anyag a vízben?", "Pluterea sau se va scufunda acest material în apă?", lang),
      q4(example.de === "Wasser" || example.de === "Eis" || example.de === "Öl" || example.de === "Kork"
        ? (example.de === "Kork" ? q4("schwimmen", "float", "úszni", "plutea", lang) : q4("schwimmen", "float", "úszni", "plutea", lang))
        : q4("sinken", "sink", "süllyedni", "se scufunda", lang),
      example.de,
      [
        q4("Bleibt neutral", "Stays neutral", "Marad semleges", "Rămâne neutru", lang),
        q4("Hängt von der Temperatur ab", "Depends on temperature", "A hőmérséklettől függ", "Depinde de temperatură", lang),
        q4("Hängt von der Farbe ab", "Depends on color", "A színtől függ", "Depinde de culoare", lang),
      ],
      rng
    ));
  }

  // Template 6: "Which is denser?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("Welches hat eine höhere Dichte?", "Which one is denser?", "Melyiknek magasabb a sűrűsége?", "Care are o densitate mai mare?", lang),
      q4("Eisen (7874 kg/m³)", "Iron (7874 kg/m³)", "Vas (7874 kg/m³)", "Fier (7874 kg/m³)", lang),
      [
        q4("Wasser (1000 kg/m³)", "Water (1000 kg/m³)", "Víz (1000 kg/m³)", "Apă (1000 kg/m³)", lang),
        q4("Aluminium (2700 kg/m³)", "Aluminum (2700 kg/m³)", "Alumínium (2700 kg/m³)", "Aluminiu (2700 kg/m³)", lang),
        q4("Luft (1.29 kg/m³)", "Air (1.29 kg/m³)", "Levegő (1.29 kg/m³)", "Aer (1.29 kg/m³)", lang),
      ],
      rng
    ));
  }

  // Template 7: "Application/property of density"
  for (let i = 0; i < 3; i++) {
    questions.push(createMCQ(
      "density",
      "density_basics",
      q4("Warum sinkt Eisen im Wasser?", "Why does iron sink in water?", "Miért süllyed a vas a vízben?", "De ce coboară fierul în apă?", lang),
      q4("Weil Eisen denser als Wasser ist", "Because iron is denser than water", "Mert a vas sűrűbb, mint a víz", "Pentru că fierul este mai dens decât apa", lang),
      [
        q4("Weil Eisen schwerer ist", "Because iron is heavier", "Mert a vas nehezebb", "Pentru că fierul este mai greu", lang),
        q4("Weil Eisen kalter ist", "Because iron is colder", "Mert a vas hidegebb", "Pentru că fierul este mai rece", lang),
        q4("Weil Eisen größer ist", "Because iron is bigger", "Mert a vas nagyobb", "Pentru că fierul este mai mare", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateDensityBasicsTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Definiere Dichte und schreibe die Formel auf.", "Define density and write the formula.", "Határozd meg a sűrűséget és írd fel a képletet.", "Definește densitatea și scrie formula.", lang),
    [
      q4("Dichte ist die Masse pro Volumeneinheit: ρ = m / V", "Density is mass per unit volume: ρ = m / V", "A sűrűség tömeg térfogatmegységenként: ρ = m / V", "Densitatea este masa pe unitate de volum: ρ = m / V", lang),
      q4("ρ = m/V (Dichte = Masse / Volumen)", "ρ = m/V (Density = Mass / Volume)", "ρ = m/V (Sűrűség = Tömeg / Térfogat)", "ρ = m/V (Densitate = Masă / Volum)", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Nenne die Einheiten für Dichte.", "Name the units for density.", "Nevezd meg a sűrűség egységeit.", "Numește unitățile pentru densitate.", lang),
    [
      q4("kg/m³ (Kilogramm pro Kubikmeter) und g/cm³ (Gramm pro Kubikzentimeter)", "kg/m³ (kilogram per cubic meter) and g/cm³ (gram per cubic centimeter)", "kg/m³ (kilogramm köbméterenként) és g/cm³ (gramm köbcentimeterenként)", "kg/m³ (kilogram pe metru cub) și g/cm³ (gram pe centimetru cub)", lang),
      q4("kg/m³ és g/cm³", "kg/m³ and g/cm³", "kg/m³ és g/cm³", "kg/m³ și g/cm³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Nenne die Dichte von drei Stoffen in kg/m³.", "Name the density of three substances in kg/m³.", "Nevezz meg három anyag sűrűségét kg/m³-ben.", "Numește densitatea a trei substanțe în kg/m³.", lang),
    [
      q4("Wasser: 1000 kg/m³, Eisen: 7874 kg/m³, Gold: 19300 kg/m³", "Water: 1000 kg/m³, Iron: 7874 kg/m³, Gold: 19300 kg/m³", "Víz: 1000 kg/m³, Vas: 7874 kg/m³, Arany: 19300 kg/m³", "Apă: 1000 kg/m³, Fier: 7874 kg/m³, Aur: 19300 kg/m³", lang),
      q4("Víz 1000, Vas 7874, Arany 19300", "Water 1000, Iron 7874, Gold 19300", "Víz 1000, Vas 7874, Arany 19300", "Apă 1000, Fier 7874, Aur 19300", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Was ist der Unterschied zwischen kg/m³ und g/cm³?", "What is the difference between kg/m³ and g/cm³?", "Mi a különbség a kg/m³ és a g/cm³ között?", "Care este diferența dintre kg/m³ și g/cm³?", lang),
    [
      q4("kg/m³ és g/cm³ ugyanazt mérik, de különböző mértékegységekben; 1 g/cm³ = 1000 kg/m³", "kg/m³ and g/cm³ measure the same thing in different units; 1 g/cm³ = 1000 kg/m³", "kg/m³ és g/cm³ ugyanazt mérik, de különböző egységekben; 1 g/cm³ = 1000 kg/m³", "kg/m³ și g/cm³ măsoară același lucru în unități diferite; 1 g/cm³ = 1000 kg/m³", lang),
      q4("1 g/cm³ = 1000 kg/m³ (konverziós tényező)", "1 g/cm³ = 1000 kg/m³ (conversion factor)", "1 g/cm³ = 1000 kg/m³ (átváltási tényező)", "1 g/cm³ = 1000 kg/m³ (factor de conversie)", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Warum schwimmt Eis im Wasser?", "Why does ice float in water?", "Miért úszik a jég a vízben?", "De ce plutează gheața în apă?", lang),
    [
      q4("Weil Eis eine niedrigere Dichte hat als Wasser (917 kg/m³ < 1000 kg/m³)", "Because ice has lower density than water (917 kg/m³ < 1000 kg/m³)", "Mert a jégnek alacsonyabb a sűrűsége, mint a víznek (917 kg/m³ < 1000 kg/m³)", "Pentru că gheața are o densitate mai mică decât apa (917 kg/m³ < 1000 kg/m³)", lang),
      q4("Jég: 917 kg/m³, Víz: 1000 kg/m³ → jég kevésbé sűrű", "Ice: 917 kg/m³, Water: 1000 kg/m³ → ice less dense", "Jég 917, víz 1000 → jég úszik", "Gheață 917, apă 1000 → gheață plutește", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Welcher Stoff hat eine sehr niedrige Dichte?", "Which substance has very low density?", "Melyik anyagnak nagyon alacsony a sűrűsége?", "Ce substanță are densitate foarte scăzută?", lang),
    [
      q4("Luft hat eine sehr niedrige Dichte von 1.29 kg/m³", "Air has very low density of 1.29 kg/m³", "A levegőnek nagyon alacsony a sűrűsége: 1.29 kg/m³", "Aerul are densitate foarte scăzută de 1.29 kg/m³", lang),
      q4("Levegő: 1.29 kg/m³", "Air: 1.29 kg/m³", "Levegő: 1.29 kg/m³", "Aer: 1.29 kg/m³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Wenn ein Stoff eine Dichte von 2500 kg/m³ hat, schwimmt er im Wasser?", "If a substance has density 2500 kg/m³, will it float in water?", "Ha egy anyagnak 2500 kg/m³ a sűrűsége, úszni fog a vízben?", "Dacă o substanță are densitate 2500 kg/m³, va plutea în apă?", lang),
    [
      q4("Nem, lesüllyed, mert 2500 kg/m³ > 1000 kg/m³ (víz sűrűsége)", "No, it will sink because 2500 kg/m³ > 1000 kg/m³ (water density)", "Nem, lesüllyed, mert nagyobb sűrűségű, mint a víz", "Nu, se va scufunda pentru că 2500 kg/m³ > 1000 kg/m³", lang),
      q4("Lesüllyed (nagyobb sűrűségű mint a víz)", "It sinks (denser than water)", "Lesüllyed, mert sűrűbb", "Se scufundă, pentru că este mai dens", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Egy tárgy 500 kg tömegű és 0.5 m³ térfogatú. Mi a sűrűsége?", "An object has mass 500 kg and volume 0.5 m³. What is its density?", "Egy tárgy tömege 500 kg, térfogata 0.5 m³. Mi a sűrűsége?", "Un obiect are masă 500 kg și volum 0.5 m³. Care este densitatea sa?", lang),
    [
      q4("1000 kg/m³ (ρ = m/V = 500/0.5 = 1000)", "1000 kg/m³ (ρ = m/V = 500/0.5 = 1000)", "1000 kg/m³ (ρ = 500/0.5 = 1000)", "1000 kg/m³ (ρ = 500/0.5 = 1000)", lang),
      q4("1000 kg/m³", "1000 kg/m³", "1000 kg/m³", "1000 kg/m³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_basics",
    q4("Melyik gyakorlati alkalmazása van a sűrűség ismeretének?", "What is a practical application of knowing density?", "Mi a sűrűség ismeretének gyakorlati alkalmazása?", "Care este o aplicație practică a cunoașterii densității?", lang),
    [
      q4("Eldönthetjük, hogy egy anyag úszik-e vagy süllyed-e; kiválaszthatjuk az anyagokat a célra (könnyű vs nehéz)", "We can determine if material floats or sinks; select materials for purpose (light vs heavy)", "Eldönthetjük az anyag úszó/süllyedő voltát; anyagválasztás (könnyű/nehéz)", "Putem determina dacă plutează; selectare materiale (ușor vs greu)", lang),
      q4("Úszás/süllyedés; anyagválasztás a célnak", "Floating/sinking; material selection", "Úszás/süllyedés eldöntése", "Plutire/scufundare; selectare materiale", lang),
    ]
  ));

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_DENSITY_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  density_basics: (lang = "en", seed = 0) => [...generateDensityBasicsMCQ(lang, seed), ...generateDensityBasicsTyping(lang, seed)],
  density_basics_mcq: (lang = "en", seed = 0) => generateDensityBasicsMCQ(lang, seed),
  density_basics_typing: (lang = "en", seed = 0) => generateDensityBasicsTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
