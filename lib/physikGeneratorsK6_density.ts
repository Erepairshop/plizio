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

// ─── 2. FLOATING AND SINKING ───────────────────────────────────────────────

const FLOATING_SINKING_DATA = {
  floaters: [
    { en: "wood", de: "Holz", hu: "fa", ro: "lemn" },
    { en: "cork", de: "Kork", hu: "parafa", ro: "plută" },
    { en: "ice", de: "Eis", hu: "jég", ro: "gheață" },
    { en: "oil", de: "Öl", hu: "olaj", ro: "ulei" },
    { en: "plastic", de: "Kunststoff", hu: "műanyag", ro: "plastic" },
    { en: "rubber ball", de: "Gummiball", hu: "gummilabda", ro: "minge de cauciuc" },
  ],

  sinkers: [
    { en: "iron", de: "Eisen", hu: "vas", ro: "fier" },
    { en: "gold", de: "Gold", hu: "arany", ro: "aur" },
    { en: "lead", de: "Blei", hu: "ólom", ro: "plumb" },
    { en: "copper", de: "Kupfer", hu: "réz", ro: "cupru" },
    { en: "stone", de: "Stein", hu: "kő", ro: "piatră" },
    { en: "glass", de: "Glas", hu: "üveg", ro: "sticlă" },
  ],

  conditions: [
    { en: "floats: ρ_object < ρ_liquid", de: "schwimmt: ρ_Objekt < ρ_Flüssigkeit", hu: "úszik: ρ_tárgy < ρ_folyadék", ro: "plutește: ρ_obiect < ρ_lichid" },
    { en: "sinks: ρ_object > ρ_liquid", de: "sinkt: ρ_Objekt > ρ_Flüssigkeit", hu: "süllyed: ρ_tárgy > ρ_folyadék", ro: "se scufundă: ρ_obiect > ρ_lichid" },
    { en: "suspends: ρ_object = ρ_liquid", de: "schwebt: ρ_Objekt = ρ_Flüssigkeit", hu: "lebeg: ρ_tárgy = ρ_folyadék", ro: "plutește: ρ_obiect = ρ_lichid" },
  ],

  examples: [
    { en: "iceberg floats (917 < 1000)", de: "Eiszwerg schwimmt (917 < 1000)", hu: "jéghegy úszik (917 < 1000)", ro: "aisbergul plutește (917 < 1000)" },
    { en: "ship floats (steel hull displaces water)", de: "Schiff schwimmt (Stahlrumpf verdrängt Wasser)", hu: "hajó úszik (acéltest kiszorít vizet)", ro: "nava plutește (corp de oțel deplasează apa)" },
    { en: "submarine sinks when ballast tanks fill", de: "U-Boot sinkt, wenn Ballasttanks füllen", hu: "tengeralattjáró süllyed, ha balaszt tankok töltődnek", ro: "submarin se scufundă când se umple balastul" },
  ],
};

export function generateFloatingSinkingMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "When does an object float?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Wann schwimmt ein Objekt im Wasser?", "When does an object float in water?", "Mikor úszik egy tárgy a vízben?", "Când plutează un obiect în apă?", lang),
      q4("Wenn die Dichte des Objekts kleiner als die Dichte des Wassers ist", "When object density is less than water density", "Ha a tárgy sűrűsége kisebb, mint a víz sűrűsége", "Când densitatea obiectului este mai mică decât densitatea apei", lang),
      [
        q4("Wenn die Dichte des Objekts größer als die Dichte des Wassers ist", "When object density is greater than water density", "Ha a tárgy sűrűsége nagyobb, mint a víz sűrűsége", "Când densitatea obiectului este mai mare decât densitatea apei", lang),
        q4("Wenn die Farbe des Objekts hell ist", "When the object color is light", "Ha a tárgy szína világos", "Când culoarea obiectului este deschisă", lang),
        q4("Wenn das Objekt groß ist", "When the object is large", "Ha a tárgy nagy", "Când obiectul este mare", lang),
      ],
      rng
    ));
  }

  // Template 2: "When does an object sink?"
  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Wann sinkt ein Objekt im Wasser?", "When does an object sink in water?", "Mikor süllyed egy tárgy a vízben?", "Când se scufundă un obiect în apă?", lang),
      q4("Wenn die Dichte des Objekts größer als die Dichte des Wassers ist", "When object density is greater than water density", "Ha a tárgy sűrűsége nagyobb, mint a víz sűrűsége", "Când densitatea obiectului este mai mare decât densitatea apei", lang),
      [
        q4("Wenn die Dichte des Objekts kleiner als die Dichte des Wassers ist", "When object density is less than water density", "Ha a tárgy sűrűsége kisebb, mint a víz sűrűsége", "Când densitatea obiectului este mai mică decât densitatea apei", lang),
        q4("Wenn das Objekt alt ist", "When the object is old", "Ha a tárgy régi", "Când obiectul este vechi", lang),
        q4("Wenn das Objekt klein ist", "When the object is small", "Ha a tárgy kicsi", "Când obiectul este mic", lang),
      ],
      rng
    ));
  }

  // Template 3: "Why does wood float?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Warum schwimmt Holz im Wasser?", "Why does wood float in water?", "Miért úszik a fa a vízben?", "De ce plutează lemnul în apă?", lang),
      q4("Weil die Dichte von Holz kleiner ist als die Dichte von Wasser", "Because wood density is less than water density", "Mert a fa sűrűsége kisebb, mint a víz sűrűsége", "Pentru că densitatea lemnului este mai mică decât densitatea apei", lang),
      [
        q4("Weil Holz leicht ist", "Because wood is light", "Mert a fa könnyű", "Pentru că lemnul este ușor", lang),
        q4("Weil Holz eine gute Farbe hat", "Because wood has good color", "Mert a fa jó szína van", "Pentru că lemnul are o culoare bună", lang),
        q4("Weil Holz alt ist", "Because wood is old", "Mert a fa régi", "Pentru că lemnul este vechi", lang),
      ],
      rng
    ));
  }

  // Template 4: "Why does iron sink?"
  for (let i = 0; i < 5; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Warum sinkt Eisen im Wasser?", "Why does iron sink in water?", "Miért süllyed a vas a vízben?", "De ce coboară fierul în apă?", lang),
      q4("Weil die Dichte von Eisen größer ist als die Dichte von Wasser", "Because iron density is greater than water density", "Mert a vas sűrűsége nagyobb, mint a víz sűrűsége", "Pentru că densitatea fierului este mai mare decât densitatea apei", lang),
      [
        q4("Weil Eisen schwer ist", "Because iron is heavy", "Mert a vas nehéz", "Pentru că fierul este greu", lang),
        q4("Weil Eisen stark ist", "Because iron is strong", "Mert a vas erős", "Pentru că fierul este puternic", lang),
        q4("Weil Eisen rostet", "Because iron rusts", "Mert a vas rozsdásodik", "Pentru că fierul se oxidează", lang),
      ],
      rng
    ));
  }

  // Template 5: "What about ice?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Was ist besonders an Eis?", "What is special about ice?", "Mi a különleges a jégen?", "Ce este special la gheață?", lang),
      q4("Eis schwimmt, obwohl es aus Wasser gemacht ist (917 < 1000)", "Ice floats even though it's water (917 < 1000)", "Jég úszik, pedig vízből készült (917 < 1000)", "Gheața plutește deși este apă (917 < 1000)", lang),
      [
        q4("Eis sinkt immer", "Ice always sinks", "Jég mindig süllyed", "Gheața se scufundă întotdeauna", lang),
        q4("Eis hat keine Dichte", "Ice has no density", "Jégnek nincs sűrűsége", "Gheața nu are densitate", lang),
        q4("Eis ist leichter als Luft", "Ice is lighter than air", "Jég könnyebb, mint a levegő", "Gheața este mai ușoară decât aerul", lang),
      ],
      rng
    ));
  }

  // Template 6: "Submarine example"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Wie kann ein U-Boot sinken oder schwimmen?", "How can a submarine sink or float?", "Hogyan tud egy tengeralattjáró süllyedni vagy úszni?", "Cum poate un submarin să se scufunde sau să plutească?", lang),
      q4("Durch das Füllen oder Entleeren von Ballasttanks ändert sich die Dichte", "By filling or emptying ballast tanks, density changes", "Balaszt tankokat töltve vagy ürítve a sűrűség változik", "Prin umplerea sau golirea rezervoarelor de balast, densitatea se schimbă", lang),
      [
        q4("Durch das Ändern der Farbe", "By changing color", "A szín változtatásával", "Prin schimbarea culorii", lang),
        q4("Durch das Ändern der Form", "By changing shape", "Az alak változtatásával", "Prin schimbarea formei", lang),
        q4("Durch das Drehen der Propeller", "By turning propellers", "A propellerek forgatásával", "Prin rotirea elicelor", lang),
      ],
      rng
    ));
  }

  // Template 7: "General principle"
  for (let i = 0; i < 3; i++) {
    questions.push(createMCQ(
      "density",
      "floating_sinking",
      q4("Was ist die allgemeine Regel für Schwimmen und Sinken?", "What is the general rule for floating and sinking?", "Mi az általános szabály az úszásra és süllyedésre?", "Care este regula generală pentru plutire și scufundare?", lang),
      q4("Weniger dichte Objekte schwimmen, dichteren sinken", "Less dense objects float, denser ones sink", "Kevésbé sűrű tárgyak úsznak, sűrűbb süllyednek", "Obiectele mai puțin dense plutesc, cele mai dense se scufundă", lang),
      [
        q4("Alle Objekte sinken irgendwann", "All objects eventually sink", "Minden tárgy végül süllyed", "Toate obiectele se scufundă în cele din urmă", lang),
        q4("Alle Objekte schwimmen irgendwann", "All objects eventually float", "Minden tárgy végül úszik", "Toate obiectele plutesc în cele din urmă", lang),
        q4("Größere Objekte sinken, kleinere schwimmen", "Larger objects sink, smaller float", "Nagyobb tárgyak süllyednek, kisebbek úsznak", "Obiectele mai mari se scufundă, mai mici plutesc", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateFloatingSinkingTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Erkläre, warum ein Objekt schwimmt oder sinkt, basierend auf Dichte.", "Explain why an object floats or sinks based on density.", "Magyarázd meg, miért úszik vagy süllyed egy tárgy a sűrűség alapján.", "Explică de ce plutează sau se scufundă un obiect în funcție de densitate.", lang),
    [
      q4("Schwimmen: ρ_Objekt < ρ_Flüssigkeit; Sinken: ρ_Objekt > ρ_Flüssigkeit", "Float: ρ_object < ρ_liquid; Sink: ρ_object > ρ_liquid", "Úszás: ρ_tárgy < ρ_folyadék; Süllyedés: ρ_tárgy > ρ_folyadék", "Plutire: ρ_obiect < ρ_lichid; Scufundare: ρ_obiect > ρ_lichid", lang),
      q4("Kevésbé sűrű úszik, sűrűbb süllyed", "Less dense floats, denser sinks", "Kevésbé sűrű úszik, sűrűbb süllyed", "Mai puțin dens plutește, mai dens se scufundă", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Nenne drei Beispiele für Objekte, die schwimmen, und drei, die sinken.", "Name three floating objects and three sinking objects.", "Nevezz meg három úszó tárgyat és három süllyedő tárgyat.", "Numește trei obiecte care plutesc și trei care se scufundă.", lang),
    [
      q4("Schwimmen: Holz, Kork, Eis; Sinken: Eisen, Gold, Stein", "Float: Wood, Cork, Ice; Sink: Iron, Gold, Stone", "Úszás: Fa, Parafa, Jég; Süllyedés: Vas, Arany, Kő", "Plutire: Lemn, Plută, Gheață; Scufundare: Fier, Aur, Piatră", lang),
      q4("Fa, parafa, jég úszik; vas, arany, kő süllyed", "Wood, cork, ice float; iron, gold, stone sink", "Fa, parafa, jég úszik; vas, arany, kő süllyed", "Lemn, plută, gheață plutesc; fier, aur, piatră se scufundă", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Miért úszik a jéghegy a vízben?", "Why does an iceberg float in water?", "Miért úszik a jéghegy a vízben?", "De ce plutează aisbergul în apă?", lang),
    [
      q4("Mert a jég sűrűsége (917 kg/m³) kisebb, mint a víz sűrűsége (1000 kg/m³)", "Because ice density (917 kg/m³) is less than water density (1000 kg/m³)", "Mert a jég sűrűsége (917 kg/m³) kisebb, mint a víz sűrűsége (1000 kg/m³)", "Pentru că densitatea gheții (917 kg/m³) este mai mică decât densitatea apei (1000 kg/m³)", lang),
      q4("Jég 917 < víz 1000", "Ice 917 < water 1000", "Jég 917 < víz 1000", "Gheață 917 < apă 1000", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Hogyan tud egy tengeralattjáró süllyedni vagy úszni?", "How can a submarine sink or float?", "Hogyan tud egy tengeralattjáró süllyedni vagy úszni?", "Cum poate un submarin să se scufunde sau să plutească?", lang),
    [
      q4("Balaszt tankokat töltve vagy ürítve megváltozik a sűrűsége - víz beszívása: > 1000 (süllyed), víz ürítése: < 1000 (úszik)", "By filling ballast tanks (density > 1000, sinks) or emptying (density < 1000, floats)", "Balaszt tankokat töltve (süllyed) vagy ürítve (úszik) a sűrűség változik", "Umplând rezervoare de balast (se scufundă) sau golind (plutește)", lang),
      q4("Balaszt tankok: víz be = süllyed, víz ki = úszik", "Ballast: water in = sink, water out = float", "Balaszt: víz be = süllyed, víz ki = úszik", "Balast: apă în = scufundare, apă out = plutire", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Mi a különleges a jégen a többi anyaghoz képest?", "What is special about ice compared to other substances?", "Mi a különleges a jégen más anyagokhoz képest?", "Ce este special la gheață în comparație cu alte substanțe?", lang),
    [
      q4("A jég kevésbé sűrű, mint a folyékony víz, ami ritka a legtöbb anyagban - ezért úszik", "Ice is less dense than liquid water, which is rare - that's why it floats", "A jég kevésbé sűrű, mint a folyadék víz, ami ritka - ezért úszik", "Gheața este mai puțin densă decât apa lichidă, ceea ce este rar - de aceea plutează", lang),
      q4("Jég sűrűsége < folyékony víz, ritka tulajdonság", "Ice density < liquid water, rare property", "Jég < víz, ritka tulajdonság", "Gheață < apă lichidă, proprietate rară", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Milyen kapcsolat van a sűrűség és az úszás/süllyedés között?", "What is the relationship between density and floating/sinking?", "Mi a kapcsolat a sűrűség és az úszás/süllyedés között?", "Care este relația dintre densitate și plutire/scufundare?", lang),
    [
      q4("Ha a tárgy sűrűsége < folyadék sűrűsége, úszik; ha nagyobb, süllyed; ha egyenlő, lebeg", "Float if ρ_object < ρ_liquid; Sink if ρ_object > ρ_liquid; Suspend if equal", "Úszik ha ρ_tárgy < ρ_folyadék; Süllyed ha nagyobb; Lebeg ha egyenlő", "Plutește dacă ρ_obiect < ρ_lichid; Se scufundă dacă mai mare; Plutește dacă egal", lang),
      q4("Sűrűség < úszik, > süllyed, = lebeg", "Density < float, > sink, = suspend", "Sűrűség < úszik, > süllyed, = lebeg", "Densitate < plutire, > scufundare, = suspensie", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Adjon meg olyan anyagok párokat, ahol az egyik úszik, a másik süllyed.", "Give examples of material pairs where one floats and one sinks.", "Adjon meg anyagpárok, ahol az egyik úszik, a másik süllyed.", "Dă exemple de perechi de materiale unde una plutește și cealaltă se scufundă.", lang),
    [
      q4("Fa úszik (könnyű, ρ < 1000), Vas süllyed (nehéz, ρ > 1000); Kork úszik, Arany süllyed", "Wood floats (light, ρ < 1000), Iron sinks (heavy, ρ > 1000)", "Fa úszik, Vas süllyed; Kork úszik, Arany süllyed", "Lemn plutește, Fier se scufundă; Plută plutește, Aur se scufundă", lang),
      q4("Fa-vas, kork-arany, jég-ólom párok", "Wood-iron, cork-gold, ice-lead pairs", "Fa-vas, kork-arany párok", "Lemn-fier, plută-aur perechi", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Mit csinál egy hajó, hogy a vízben maradjon, noha sok acélból készül?", "How does a ship stay afloat despite being made of dense steel?", "Hogyan marad vízen egy hajó, noha acélból készült?", "Cum rămâne o navă plutind deși este din oțel dens?", lang),
    [
      q4("A hajótest üreges, sok levegőt tartalmaz, így az átlagos sűrűsége < víz sűrűsége", "The hull is hollow with air inside, average density < water density", "A hajótest üreges, levegőt tartalmaz, így az átlagos sűrűsége < víz sűrűsége", "Corpul este gol cu aer înăuntru, densitate medie < densitate apă", lang),
      q4("Üreges + levegő = alacsonyabb átlagos sűrűség", "Hollow + air = lower average density", "Üreges + levegő = alacsonyabb átlagos sűrűség", "Gol + aer = densitate medie mai mică", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "floating_sinking",
    q4("Milyen körülmények között lebeg egy tárgy (sem nem úszik, sem nem süllyed)?", "Under what conditions does an object suspend/hover in a liquid?", "Milyen körülmények között lebeg egy tárgy a folyadékban?", "Sub ce condiții plutează un obiect în suspensie în lichid?", lang),
    [
      q4("Ha a tárgy sűrűsége pontosan megegyezik a folyadék sűrűségével: ρ_tárgy = ρ_folyadék", "When object density exactly equals liquid density: ρ_object = ρ_liquid", "Ha a tárgy sűrűsége = folyadék sűrűsége: ρ_tárgy = ρ_folyadék", "Când densitatea obiectului = densitate lichid: ρ_obiect = ρ_lichid", lang),
      q4("ρ_tárgy = ρ_folyadék → lebegés", "ρ_object = ρ_liquid → suspension", "ρ_tárgy = ρ_folyadék → lebegés", "ρ_obiect = ρ_lichid → suspensie", lang),
    ]
  ));

  return questions;
}

// ─── 3. DENSITY CALCULATION ────────────────────────────────────────────────

const DENSITY_CALCULATION_DATA = {
  conversions: [
    { en: "1 g/cm³ = 1000 kg/m³", de: "1 g/cm³ = 1000 kg/m³", hu: "1 g/cm³ = 1000 kg/m³", ro: "1 g/cm³ = 1000 kg/m³" },
    { en: "1 kg/m³ = 0.001 g/cm³", de: "1 kg/m³ = 0,001 g/cm³", hu: "1 kg/m³ = 0,001 g/cm³", ro: "1 kg/m³ = 0,001 g/cm³" },
  ],

  formulas: [
    { en: "ρ = m / V", de: "ρ = m / V", hu: "ρ = m / V", ro: "ρ = m / V" },
    { en: "m = ρ × V", de: "m = ρ × V", hu: "m = ρ × V", ro: "m = ρ × V" },
    { en: "V = m / ρ", de: "V = m / ρ", hu: "V = m / ρ", ro: "V = m / ρ" },
  ],
};

export function generateDensityCalculationMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Template 1: "Calculate density from mass and volume"
  for (let i = 0; i < 6; i++) {
    const mass = (2 + Math.floor(rng() * 9)) * 100; // 200-1000
    const volume = (1 + Math.floor(rng() * 5)); // 1-5
    const density = Math.round(mass / volume);
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4(`Ein Objekt hat eine Masse von ${mass} kg und ein Volumen von ${volume} m³. Berechne die Dichte.`, `An object has mass ${mass} kg and volume ${volume} m³. Calculate density.`, `Egy tárgy tömege ${mass} kg, térfogata ${volume} m³. Számítsd ki a sűrűséget!`, `Un obiect are masă ${mass} kg și volum ${volume} m³. Calculează densitatea.`, lang),
      q4(`${density} kg/m³`, `${density} kg/m³`, `${density} kg/m³`, `${density} kg/m³`, lang),
      [
        q4(`${density + 100} kg/m³`, `${density + 100} kg/m³`, `${density + 100} kg/m³`, `${density + 100} kg/m³`, lang),
        q4(`${density - 100} kg/m³`, `${density - 100} kg/m³`, `${density - 100} kg/m³`, `${density - 100} kg/m³`, lang),
        q4(`${Math.round(mass + volume)} kg/m³`, `${Math.round(mass + volume)} kg/m³`, `${Math.round(mass + volume)} kg/m³`, `${Math.round(mass + volume)} kg/m³`, lang),
      ],
      rng
    ));
  }

  // Template 2: "Calculate mass from density and volume"
  for (let i = 0; i < 6; i++) {
    const density = 800 + Math.floor(rng() * 300); // 800-1100
    const volume = 2 + Math.floor(rng() * 4); // 2-5
    const mass = density * volume;
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4(`Ein Objekt hat eine Dichte von ${density} kg/m³ und ein Volumen von ${volume} m³. Berechne die Masse.`, `An object has density ${density} kg/m³ and volume ${volume} m³. Calculate mass.`, `Egy tárgy sűrűsége ${density} kg/m³, térfogata ${volume} m³. Számítsd ki a tömeget!`, `Un obiect are densitate ${density} kg/m³ și volum ${volume} m³. Calculează masa.`, lang),
      q4(`${mass} kg`, `${mass} kg`, `${mass} kg`, `${mass} kg`, lang),
      [
        q4(`${mass + 500} kg`, `${mass + 500} kg`, `${mass + 500} kg`, `${mass + 500} kg`, lang),
        q4(`${mass - 500} kg`, `${mass - 500} kg`, `${mass - 500} kg`, `${mass - 500} kg`, lang),
        q4(`${Math.round(density / volume)} kg`, `${Math.round(density / volume)} kg`, `${Math.round(density / volume)} kg`, `${Math.round(density / volume)} kg`, lang),
      ],
      rng
    ));
  }

  // Template 3: "Calculate volume from mass and density"
  for (let i = 0; i < 6; i++) {
    const density = 1000 + Math.floor(rng() * 2000); // 1000-3000
    const mass = (1 + Math.floor(rng() * 5)) * 500; // 500-2500
    const volume = mass / density;
    const volumeFixed = Math.round(volume * 100) / 100;
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4(`Ein Objekt hat eine Masse von ${mass} kg und eine Dichte von ${density} kg/m³. Berechne das Volumen.`, `An object has mass ${mass} kg and density ${density} kg/m³. Calculate volume.`, `Egy tárgy tömege ${mass} kg, sűrűsége ${density} kg/m³. Számítsd ki a térfogatot!`, `Un obiect are masă ${mass} kg și densitate ${density} kg/m³. Calculează volumul.`, lang),
      q4(`${volumeFixed} m³`, `${volumeFixed} m³`, `${volumeFixed} m³`, `${volumeFixed} m³`, lang),
      [
        q4(`${Math.round(volumeFixed + 0.5)} m³`, `${Math.round(volumeFixed + 0.5)} m³`, `${Math.round(volumeFixed + 0.5)} m³`, `${Math.round(volumeFixed + 0.5)} m³`, lang),
        q4(`${Math.round(volumeFixed - 0.5)} m³`, `${Math.round(volumeFixed - 0.5)} m³`, `${Math.round(volumeFixed - 0.5)} m³`, `${Math.round(volumeFixed - 0.5)} m³`, lang),
        q4(`${Math.round(density / mass)} m³`, `${Math.round(density / mass)} m³`, `${Math.round(density / mass)} m³`, `${Math.round(density / mass)} m³`, lang),
      ],
      rng
    ));
  }

  // Template 4: "Unit conversion g/cm³ to kg/m³"
  for (let i = 0; i < 5; i++) {
    const gcm = 0.8 + Math.floor(rng() * 20) / 10; // 0.8-2.7
    const kgm = Math.round(gcm * 1000);
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4(`Konvertiere ${gcm} g/cm³ zu kg/m³.`, `Convert ${gcm} g/cm³ to kg/m³.`, `Konvertáld ${gcm} g/cm³-t kg/m³-re!`, `Convertește ${gcm} g/cm³ la kg/m³.`, lang),
      q4(`${kgm} kg/m³`, `${kgm} kg/m³`, `${kgm} kg/m³`, `${kgm} kg/m³`, lang),
      [
        q4(`${Math.round(gcm)} kg/m³`, `${Math.round(gcm)} kg/m³`, `${Math.round(gcm)} kg/m³`, `${Math.round(gcm)} kg/m³`, lang),
        q4(`${Math.round(gcm / 1000)} kg/m³`, `${Math.round(gcm / 1000)} kg/m³`, `${Math.round(gcm / 1000)} kg/m³`, `${Math.round(gcm / 1000)} kg/m³`, lang),
        q4(`${Math.round(kgm / 10)} kg/m³`, `${Math.round(kgm / 10)} kg/m³`, `${Math.round(kgm / 10)} kg/m³`, `${Math.round(kgm / 10)} kg/m³`, lang),
      ],
      rng
    ));
  }

  // Template 5: "Unit conversion kg/m³ to g/cm³"
  for (let i = 0; i < 5; i++) {
    const kgm = 800 + Math.floor(rng() * 2000); // 800-2800
    const gcm = kgm / 1000;
    const gcmFixed = Math.round(gcm * 100) / 100;
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4(`Konvertiere ${kgm} kg/m³ zu g/cm³.`, `Convert ${kgm} kg/m³ to g/cm³.`, `Konvertáld ${kgm} kg/m³-t g/cm³-re!`, `Convertește ${kgm} kg/m³ la g/cm³.`, lang),
      q4(`${gcmFixed} g/cm³`, `${gcmFixed} g/cm³`, `${gcmFixed} g/cm³`, `${gcmFixed} g/cm³`, lang),
      [
        q4(`${Math.round(kgm)} g/cm³`, `${Math.round(kgm)} g/cm³`, `${Math.round(kgm)} g/cm³`, `${Math.round(kgm)} g/cm³`, lang),
        q4(`${Math.round(kgm / 100)} g/cm³`, `${Math.round(kgm / 100)} g/cm³`, `${Math.round(kgm / 100)} g/cm³`, `${Math.round(kgm / 100)} g/cm³`, lang),
        q4(`${Math.round(gcmFixed + 1)} g/cm³`, `${Math.round(gcmFixed + 1)} g/cm³`, `${Math.round(gcmFixed + 1)} g/cm³`, `${Math.round(gcmFixed + 1)} g/cm³`, lang),
      ],
      rng
    ));
  }

  // Template 6: "Which formula to use?"
  for (let i = 0; i < 4; i++) {
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4("Wenn die Dichte und das Volumen bekannt sind, welche Formel benutzt du um die Masse zu berechnen?", "If density and volume are known, which formula calculates mass?", "Ha a sűrűség és térfogat ismert, melyik képletet használod a tömeg kiszámítására?", "Dacă sunt cunoscute densitate și volum, care formulă calculează masa?", lang),
      q4("m = ρ × V", "m = ρ × V", "m = ρ × V", "m = ρ × V", lang),
      [
        q4("ρ = m / V", "ρ = m / V", "ρ = m / V", "ρ = m / V", lang),
        q4("V = m / ρ", "V = m / ρ", "V = m / ρ", "V = m / ρ", lang),
        q4("m = V / ρ", "m = V / ρ", "m = V / ρ", "m = V / ρ", lang),
      ],
      rng
    ));
  }

  // Template 7: "Conversion factor"
  for (let i = 0; i < 3; i++) {
    questions.push(createMCQ(
      "density",
      "density_calculation",
      q4("Was ist der Umrechnungsfaktor zwischen g/cm³ und kg/m³?", "What is the conversion factor between g/cm³ and kg/m³?", "Mi az átváltási tényező g/cm³ és kg/m³ között?", "Care este factorul de conversie între g/cm³ și kg/m³?", lang),
      q4("1 g/cm³ = 1000 kg/m³", "1 g/cm³ = 1000 kg/m³", "1 g/cm³ = 1000 kg/m³", "1 g/cm³ = 1000 kg/m³", lang),
      [
        q4("1 g/cm³ = 100 kg/m³", "1 g/cm³ = 100 kg/m³", "1 g/cm³ = 100 kg/m³", "1 g/cm³ = 100 kg/m³", lang),
        q4("1 g/cm³ = 10 kg/m³", "1 g/cm³ = 10 kg/m³", "1 g/cm³ = 10 kg/m³", "1 g/cm³ = 10 kg/m³", lang),
        q4("1 g/cm³ = 0.1 kg/m³", "1 g/cm³ = 0.1 kg/m³", "1 g/cm³ = 0.1 kg/m³", "1 g/cm³ = 0.1 kg/m³", lang),
      ],
      rng
    ));
  }

  return questions;
}

export function generateDensityCalculationTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Schreibe die drei Formen der Dichteformel auf.", "Write the three forms of the density formula.", "Írd fel a sűrűség képlet három formáját.", "Scrie cele trei forme ale formulei densității.", lang),
    [
      q4("ρ = m/V; m = ρ×V; V = m/ρ", "ρ = m/V; m = ρ×V; V = m/ρ", "ρ = m/V; m = ρ×V; V = m/ρ", "ρ = m/V; m = ρ×V; V = m/ρ", lang),
      q4("ρ=m/V, m=ρV, V=m/ρ", "ρ=m/V, m=ρV, V=m/ρ", "ρ=m/V, m=ρV, V=m/ρ", "ρ=m/V, m=ρV, V=m/ρ", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Ein Stück Holz wiegt 300 kg und hat ein Volumen von 0,5 m³. Berechne die Dichte.", "A piece of wood weighs 300 kg with volume 0.5 m³. Calculate density.", "Egy fadarab tömege 300 kg, térfogata 0,5 m³. Számítsd ki a sűrűséget!", "O bucată de lemn cântărește 300 kg cu volum 0,5 m³. Calculează densitatea.", lang),
    [
      q4("600 kg/m³ (ρ = 300 / 0.5)", "600 kg/m³ (ρ = 300 / 0.5)", "600 kg/m³ (ρ = 300 / 0,5)", "600 kg/m³ (ρ = 300 / 0,5)", lang),
      q4("ρ = 600 kg/m³", "ρ = 600 kg/m³", "ρ = 600 kg/m³", "ρ = 600 kg/m³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Ein Eisenblock hat eine Dichte von 7874 kg/m³ und ein Volumen von 0,25 m³. Berechne die Masse.", "An iron block has density 7874 kg/m³ and volume 0.25 m³. Calculate mass.", "Egy vasblokk sűrűsége 7874 kg/m³, térfogata 0,25 m³. Számítsd ki a tömeget!", "Un bloc de fier are densitate 7874 kg/m³ și volum 0,25 m³. Calculează masa.", lang),
    [
      q4("1968,5 kg (m = 7874 × 0.25)", "1968.5 kg (m = 7874 × 0.25)", "1968,5 kg (m = 7874 × 0,25)", "1968,5 kg (m = 7874 × 0,25)", lang),
      q4("m ≈ 1969 kg vagy 1968,5 kg", "m ≈ 1969 kg or 1968.5 kg", "m ≈ 1969 kg vagy 1968,5 kg", "m ≈ 1969 kg sau 1968,5 kg", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Konvertiere 2,7 g/cm³ zu kg/m³.", "Convert 2.7 g/cm³ to kg/m³.", "Konvertáld 2,7 g/cm³-t kg/m³-re!", "Convertește 2,7 g/cm³ la kg/m³.", lang),
    [
      q4("2700 kg/m³ (×1000)", "2700 kg/m³ (×1000)", "2700 kg/m³ (×1000)", "2700 kg/m³ (×1000)", lang),
      q4("2700 kg/m³", "2700 kg/m³", "2700 kg/m³", "2700 kg/m³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Konvertiere 1000 kg/m³ zu g/cm³.", "Convert 1000 kg/m³ to g/cm³.", "Konvertáld 1000 kg/m³-t g/cm³-re!", "Convertește 1000 kg/m³ la g/cm³.", lang),
    [
      q4("1 g/cm³ (÷1000)", "1 g/cm³ (÷1000)", "1 g/cm³ (÷1000)", "1 g/cm³ (÷1000)", lang),
      q4("1 g/cm³", "1 g/cm³", "1 g/cm³", "1 g/cm³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Welche Formel benutzt du um das Volumen zu berechnen, wenn Masse und Dichte gegeben sind?", "Which formula do you use to calculate volume when mass and density are given?", "Melyik képletet használod a térfogat kiszámítására, ha tömeg és sűrűség ismert?", "Care formulă folosești pentru a calcula volumul atunci când sunt date masa și densitatea?", lang),
    [
      q4("V = m / ρ", "V = m / ρ", "V = m / ρ", "V = m / ρ", lang),
      q4("V=m/ρ (térfogat = tömeg / sűrűség)", "V=m/ρ (volume = mass / density)", "V=m/ρ (térfogat = tömeg / sűrűség)", "V=m/ρ (volum = masă / densitate)", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Egy folyadékot 250 cm³ térfogatban mérve 200 g tömegű. Számítsd ki a sűrűségét g/cm³-ben!", "A liquid in 250 cm³ volume weighs 200 g. Calculate density in g/cm³.", "Egy folyadék 250 cm³ térfogatban 200 g tömegű. Számítsd ki a sűrűségét g/cm³-ben!", "Un lichid în volum 250 cm³ cântărește 200 g. Calculează densitate în g/cm³.", lang),
    [
      q4("0,8 g/cm³ (ρ = 200 / 250)", "0.8 g/cm³ (ρ = 200 / 250)", "0,8 g/cm³ (ρ = 200 / 250)", "0,8 g/cm³ (ρ = 200 / 250)", lang),
      q4("ρ = 0,8 g/cm³", "ρ = 0.8 g/cm³", "ρ = 0,8 g/cm³", "ρ = 0,8 g/cm³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Mi az átváltási tényező g/cm³ és kg/m³ között?", "What is the conversion factor between g/cm³ and kg/m³?", "Mi az átváltási tényező g/cm³ és kg/m³ között?", "Care este factorul de conversie între g/cm³ și kg/m³?", lang),
    [
      q4("1 g/cm³ = 1000 kg/m³ (szorzás 1000-rel)", "1 g/cm³ = 1000 kg/m³ (multiply by 1000)", "1 g/cm³ = 1000 kg/m³ (szorzás 1000-rel)", "1 g/cm³ = 1000 kg/m³ (înmulțire cu 1000)", lang),
      q4("1 g/cm³ = 1000 kg/m³", "1 g/cm³ = 1000 kg/m³", "1 g/cm³ = 1000 kg/m³", "1 g/cm³ = 1000 kg/m³", lang),
    ]
  ));

  questions.push(createTyping(
    "density",
    "density_calculation",
    q4("Egy tárgy 500 g tömegű és a sűrűsége 2,5 g/cm³. Mekkora a térfogata cm³-ben?", "An object weighs 500 g with density 2.5 g/cm³. What is volume in cm³?", "Egy tárgy 500 g tömegű, sűrűsége 2,5 g/cm³. Mekkora a térfogata?", "Un obiect cântărește 500 g cu densitate 2,5 g/cm³. Care este volumul în cm³?", lang),
    [
      q4("200 cm³ (V = 500 / 2.5)", "200 cm³ (V = 500 / 2.5)", "200 cm³ (V = 500 / 2,5)", "200 cm³ (V = 500 / 2,5)", lang),
      q4("V = 200 cm³", "V = 200 cm³", "V = 200 cm³", "V = 200 cm³", lang),
    ]
  ));

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_DENSITY_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  density_basics: (lang = "en", seed = 0) => [...generateDensityBasicsMCQ(lang, seed), ...generateDensityBasicsTyping(lang, seed)],
  density_basics_mcq: (lang = "en", seed = 0) => generateDensityBasicsMCQ(lang, seed),
  density_basics_typing: (lang = "en", seed = 0) => generateDensityBasicsTyping(lang, seed),

  floating_sinking: (lang = "en", seed = 0) => [...generateFloatingSinkingMCQ(lang, seed), ...generateFloatingSinkingTyping(lang, seed)],
  floating_sinking_mcq: (lang = "en", seed = 0) => generateFloatingSinkingMCQ(lang, seed),
  floating_sinking_typing: (lang = "en", seed = 0) => generateFloatingSinkingTyping(lang, seed),

  density_calculation: (lang = "en", seed = 0) => [...generateDensityCalculationMCQ(lang, seed), ...generateDensityCalculationTyping(lang, seed)],
  density_calculation_mcq: (lang = "en", seed = 0) => generateDensityCalculationMCQ(lang, seed),
  density_calculation_typing: (lang = "en", seed = 0) => generateDensityCalculationTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
