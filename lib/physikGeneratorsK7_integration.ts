// ─── K7 PHYSICS GENERATORS INTEGRATION LAYER ──────────────────────────────
// Maps all K7 generator files to curriculum subtopic IDs
// This file serves as the single source of truth for K7 generator wiring
//
// Curriculum structure (32 subtopics):
// - mechanics (5): speed_velocity, acceleration, newton_first, newton_second, newton_third
// - work_power (5): work, power, kinetic_energy_calc, potential_energy_calc, mechanical_advantage
// - optics (5): lenses_convex, lenses_concave, image_formation, eye_optics, optical_instruments
// - thermal (4): thermal_expansion, specific_heat, phase_changes, heat_engines
// - magnetism (4): magnetic_basics, earth_magnetism, electromagnets, electromagnetic_induction
// - waves (4): wave_equation, electromagnetic_spectrum, infrared_uv, wave_interference
// - earth_space (5): gravity_universal, solar_system, orbits, seasons_tides, space_exploration

import type { CurriculumQuestion } from "./curriculumTypes";
import { setK7GeneratorMap, type PhysikGeneratorMap } from "./physikCurriculum7";

// Import all existing generator files
import { K7_FORCES_GENERATORS } from "./physikGeneratorsK7_forces";
import { K7_OPTICS_GENERATORS } from "./physikGeneratorsK7_optics";
import { K7_THERMO_GENERATORS } from "./physikGeneratorsK7_thermo";
import { K7_WORK_POWER_GENERATORS } from "./physikGeneratorsK7_workpower";
import { K7_EARTH_SPACE_GENERATORS } from "./physikGeneratorsK7_earthspace";
import { K7_WAVES_GENERATORS } from "./physikGeneratorsK7_waves";
import { K7_MAGNETISM_GENERATORS } from "./physikGeneratorsK7_magnetism";

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) | 0;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumQuestion {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options, correct: options.indexOf(correct) };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer };
}

// ─── FALLBACK / TARGETED GENERATORS ────────────────────────────────────────

function createPlaceholder(subtopicId: string): (lang?: string, seed?: number) => CurriculumQuestion[] {
  return (lang = "en", seed = 0) => [
    {
      type: "mcq" as const,
      topic: "placeholder",
      question: `[PLACEHOLDER] ${subtopicId} MCQ question`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 0,
      subtopic: subtopicId,
    },
  ];
}

function buildAccelerationQuestions(lang = "en", seed = 0): CurriculumQuestion[] {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 4; i++) {
      questions.push(createMCQ(
        "forces",
        "acceleration",
        q4("Beschleunigung Definition?", "Acceleration definition?", "Gyorsulás definíciója?", "Accelerație definiție?", lang),
        q4("Geschwindigkeitsänderung pro Zeit: a = Δv / Δt", "Change in velocity per time: a = Δv / Δt", "A sebesség időegység alatti változása: a = Δv / Δt", "Schimbarea vitezei în timp: a = Δv / Δt", lang),
        [
          q4("Weg pro Zeit: v = s / t", "Distance per time: v = s / t", "Út per idő: v = s / t", "Distanță per timp: v = s / t", lang),
          q4("Kraft pro Masse ohne Bewegungsänderung", "Force per mass without motion change", "Erő per tömeg mozgásváltozás nélkül", "Forță pe masă fără schimbare de mișcare", lang),
          q4("Energie pro Zeit", "Energy per time", "Energia per idő", "Energie pe timp", lang),
        ],
        rng
      ));
    }
    for (let i = 0; i < 3; i++) {
      questions.push(createMCQ(
        "forces",
        "acceleration",
        q4("Einheit der Beschleunigung?", "Unit of acceleration?", "A gyorsulás mértékegysége?", "Unitatea accelerației?", lang),
        "m/s²",
        ["m/s", "N", "J"],
        rng
      ));
    }
    for (let i = 0; i < 3; i++) {
      questions.push(createMCQ(
        "forces",
        "acceleration",
        q4("Freier Fall nahe der Erde?", "Free fall near Earth?", "Szabad esés a Föld közelében?", "Cădere liberă aproape de Pământ?", lang),
        q4("Beschleunigung etwa 9,81 m/s² nach unten", "Acceleration is about 9.81 m/s² downward", "A gyorsulás kb. 9,81 m/s² lefelé", "Accelerația este de aproximativ 9,81 m/s² în jos", lang),
        [
          q4("Geschwindigkeit bleibt immer null", "Velocity always stays zero", "A sebesség mindig nulla marad", "Viteza rămâne mereu zero", lang),
          q4("Beschleunigung hängt nur von der Masse ab", "Acceleration depends only on mass", "A gyorsulás csak a tömegtől függ", "Accelerația depinde doar de masă", lang),
          q4("Es gibt keine Beschleunigung", "There is no acceleration", "Nincs gyorsulás", "Nu există accelerație", lang),
        ],
        rng
      ));
    }
    questions.push(createTyping(
      "forces",
      "acceleration",
      q4("Formel für die mittlere Beschleunigung?", "Formula for average acceleration?", "Az átlagos gyorsulás képlete?", "Formula pentru accelerația medie?", lang),
      [q4("a = Δv / Δt; also Geschwindigkeitsänderung durch Zeitänderung", "a = Δv / Δt; change in velocity divided by change in time", "a = Δv / Δt; a sebességváltozás osztva az időváltozással", "a = Δv / Δt; schimbarea vitezei împărțită la schimbarea timpului", lang)]
    ));
    questions.push(createTyping(
      "forces",
      "acceleration",
      q4("Was bedeutet negative Beschleunigung?", "What does negative acceleration mean?", "Mit jelent a negatív gyorsulás?", "Ce înseamnă accelerație negativă?", lang),
      [q4("Sie wirkt der gewählten positiven Richtung entgegen; oft Verlangsamung", "It acts opposite to the chosen positive direction; often a slowing down", "A választott pozitív iránnyal ellentétesen hat; gyakran lassulás", "Acționează opus direcției pozitive alese; adesea înseamnă încetinire", lang)]
    ));
    questions.push(createTyping(
      "forces",
      "acceleration",
      q4("Gleichmäßig beschleunigte Bewegung?", "Uniformly accelerated motion?", "Egyenletesen gyorsuló mozgás?", "Mișcare uniform accelerată?", lang),
      [q4("Die Beschleunigung ist konstant; die Geschwindigkeit ändert sich in gleichen Zeiten gleich stark", "Acceleration is constant; velocity changes by equal amounts in equal time intervals", "A gyorsulás állandó; a sebesség egyenlő időközök alatt egyenlő mértékben változik", "Accelerația este constantă; viteza se schimbă la fel în intervale de timp egale", lang)]
    ));
    return questions;
}

function buildNewtonSecondQuestions(lang = "en", seed = 0): CurriculumQuestion[] {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 5; i++) {
      questions.push(createMCQ(
        "forces",
        "newton_second",
        q4("Newtons zweites Gesetz?", "Newton's second law?", "Newton második törvénye?", "A doua lege a lui Newton?", lang),
        q4("F = m · a", "F = m · a", "F = m · a", "F = m · a", lang),
        ["F = m / a", "F = v / t", "F = E / s"],
        rng
      ));
    }
    for (let i = 0; i < 3; i++) {
      questions.push(createMCQ(
        "forces",
        "newton_second",
        q4("Was passiert bei gleicher Kraft und größerer Masse?", "What happens with the same force and a larger mass?", "Mi történik azonos erőnél nagyobb tömeg esetén?", "Ce se întâmplă la aceeași forță și masă mai mare?", lang),
        q4("Die Beschleunigung wird kleiner", "The acceleration becomes smaller", "A gyorsulás kisebb lesz", "Accelerația devine mai mică", lang),
        [
          q4("Die Beschleunigung wird größer", "The acceleration becomes larger", "A gyorsulás nagyobb lesz", "Accelerația devine mai mare", lang),
          q4("Die Kraft verschwindet", "The force disappears", "Az erő eltűnik", "Forța dispare", lang),
          q4("Es ändert sich nichts", "Nothing changes", "Semmi sem változik", "Nu se schimbă nimic", lang),
        ],
        rng
      ));
    }
    for (let i = 0; i < 2; i++) {
      questions.push(createMCQ(
        "forces",
        "newton_second",
        q4("1 Newton bedeutet?", "1 Newton means?", "Mit jelent 1 newton?", "Ce înseamnă 1 newton?", lang),
        q4("Kraft, die 1 kg mit 1 m/s² beschleunigt", "Force that accelerates 1 kg by 1 m/s²", "Olyan erő, amely 1 kg tömeget 1 m/s² gyorsulással gyorsít", "Forța care accelerează 1 kg cu 1 m/s²", lang),
        [
          q4("Energie für 1 Sekunde", "Energy for 1 second", "Energia 1 másodpercre", "Energie pentru 1 secundă", lang),
          q4("Geschwindigkeit von 1 m/s", "A speed of 1 m/s", "1 m/s sebesség", "O viteză de 1 m/s", lang),
          q4("Arbeit von 1 Joule", "Work of 1 joule", "1 joule munka", "Lucru de 1 joule", lang),
        ],
        rng
      ));
    }
    questions.push(createTyping(
      "forces",
      "newton_second",
      q4("Erkläre F = m · a kurz.", "Explain F = m · a briefly.", "Magyarázd el röviden az F = m · a összefüggést.", "Explică pe scurt relația F = m · a.", lang),
      [q4("Die Beschleunigung wächst mit der Kraft und sinkt bei größerer Masse", "Acceleration increases with force and decreases with larger mass", "A gyorsulás nő az erővel és csökken nagyobb tömeg esetén", "Accelerația crește cu forța și scade la o masă mai mare", lang)]
    ));
    questions.push(createTyping(
      "forces",
      "newton_second",
      q4("Welche Einheit hat die Kraft?", "Which unit does force have?", "Mi az erő mértékegysége?", "Care este unitatea forței?", lang),
      [q4("Newton; 1 N = 1 kg · m/s²", "Newton; 1 N = 1 kg · m/s²", "Newton; 1 N = 1 kg · m/s²", "Newton; 1 N = 1 kg · m/s²", lang)]
    ));
    questions.push(createTyping(
      "forces",
      "newton_second",
      q4("Was zeigt das zweite Newtonsche Gesetz über Ursache und Wirkung?", "What does Newton's second law show about cause and effect?", "Mit mutat Newton második törvénye az okról és a következményről?", "Ce arată a doua lege a lui Newton despre cauză și efect?", lang),
      [q4("Die resultierende Kraft ist die Ursache einer Beschleunigung", "The net force is the cause of an acceleration", "Az eredő erő okozza a gyorsulást", "Forța rezultantă este cauza unei accelerații", lang)]
    ));
    return questions;
}

function buildHeatEnginesQuestions(lang = "en", seed = 0): CurriculumQuestion[] {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 4; i++) {
      questions.push(createMCQ(
        "thermodynamics",
        "heat_engines",
        q4("Was macht eine Wärmekraftmaschine?", "What does a heat engine do?", "Mit csinál egy hőerőgép?", "Ce face un motor termic?", lang),
        q4("Sie wandelt Wärmeenergie teilweise in mechanische Arbeit um", "It converts part of thermal energy into mechanical work", "A hőenergiát részben mechanikai munkává alakítja", "Transformă o parte din energia termică în lucru mecanic", lang),
        [
          q4("Sie erzeugt Wärme aus dem Nichts", "It creates heat from nothing", "A semmiből termel hőt", "Creează căldură din nimic", lang),
          q4("Sie speichert nur elektrische Ladung", "It only stores electric charge", "Csak elektromos töltést tárol", "Stochează doar sarcină electrică", lang),
          q4("Sie misst nur Temperatur", "It only measures temperature", "Csak hőmérsékletet mér", "Măsoară doar temperatura", lang),
        ],
        rng
      ));
    }
    for (let i = 0; i < 3; i++) {
      questions.push(createMCQ(
        "thermodynamics",
        "heat_engines",
        q4("Warum braucht eine Wärmekraftmaschine eine heiße und eine kalte Seite?", "Why does a heat engine need a hot side and a cold side?", "Miért kell egy hőerőgéphez meleg és hideg oldal?", "De ce are nevoie un motor termic de o parte caldă și una rece?", lang),
        q4("Damit Wärme fließen kann und ein Teil davon in Arbeit umgewandelt wird", "So heat can flow and part of it can be converted into work", "Hogy a hő áramolhasson, és egy része munkává alakuljon", "Pentru ca căldura să poată curge și o parte să fie transformată în lucru", lang),
        [
          q4("Damit die Masse größer wird", "So the mass becomes larger", "Hogy nőjön a tömeg", "Ca masa să devină mai mare", lang),
          q4("Damit keine Energie erhalten bleibt", "So energy is not conserved", "Hogy ne maradjon meg az energia", "Ca energia să nu se conserve", lang),
          q4("Damit kein Druck entsteht", "So no pressure is created", "Hogy ne jöjjön létre nyomás", "Ca să nu apară presiune", lang),
        ],
        rng
      ));
    }
    for (let i = 0; i < 3; i++) {
      questions.push(createMCQ(
        "thermodynamics",
        "heat_engines",
        q4("Wirkungsgrad einer realen Wärmekraftmaschine?", "Efficiency of a real heat engine?", "Valós hőerőgép hatásfoka?", "Randamentul unui motor termic real?", lang),
        q4("Er ist immer kleiner als 100 %", "It is always less than 100%", "Mindig 100% alatti", "Este întotdeauna mai mic de 100%", lang),
        [
          q4("Er ist immer genau 100 %", "It is always exactly 100%", "Mindig pontosan 100%", "Este întotdeauna exact 100%", lang),
          q4("Er kann ohne Verluste unendlich groß sein", "It can be infinitely large without losses", "Veszteség nélkül végtelen lehet", "Poate fi infinit fără pierderi", lang),
          q4("Er hängt nur von der Farbe der Maschine ab", "It depends only on the color of the machine", "Csak a gép színétől függ", "Depinde doar de culoarea mașinii", lang),
        ],
        rng
      ));
    }
    questions.push(createTyping(
      "thermodynamics",
      "heat_engines",
      q4("Nenne ein Beispiel für eine Wärmekraftmaschine.", "Name one example of a heat engine.", "Mondj egy példát hőerőgépre.", "Dă un exemplu de motor termic.", lang),
      [q4("Verbrennungsmotor, Dampfmaschine oder Dampfturbine", "Combustion engine, steam engine or steam turbine", "Belső égésű motor, gőzgép vagy gőzturbina", "Motor cu ardere internă, mașină cu abur sau turbină cu abur", lang)]
    ));
    questions.push(createTyping(
      "thermodynamics",
      "heat_engines",
      q4("Warum ist der Wirkungsgrad nie 100 %?", "Why is efficiency never 100%?", "Miért nem 100% a hatásfok?", "De ce randamentul nu este niciodată 100%?", lang),
      [q4("Weil immer ein Teil der Wärme an die kältere Umgebung abgegeben werden muss", "Because part of the heat must always be released to the colder surroundings", "Mert a hő egy részét mindig le kell adni a hidegebb környezetnek", "Pentru că o parte din căldură trebuie mereu cedată mediului mai rece", lang)]
    ));
    questions.push(createTyping(
      "thermodynamics",
      "heat_engines",
      q4("Welche Energieumwandlung ist typisch?", "Which energy conversion is typical?", "Melyik energiaátalakulás a jellemző?", "Ce transformare de energie este tipică?", lang),
      [q4("Wärmeenergie zu mechanischer Arbeit", "Thermal energy into mechanical work", "Hőenergia mechanikai munkává", "Energie termică în lucru mecanic", lang)]
    ));
    return questions;
}

// ─── BUILD UNIFIED GENERATOR MAP (NESTED STRUCTURE) ─────────────────────────
// The curriculum expects: K7_GENERATOR_MAP[theme][subtopic_id] = generatorFn
// This structure allows the lookup loop to find generators by subtopic ID

const K7_GENERATOR_MAP: PhysikGeneratorMap = {
  mechanics: {},
  work_power: {},
  optics: {},
  thermal: {},
  magnetism: {},
  waves: {},
  earth_space: {},
};

// MECHANICS (forces file)
// Note: K7_FORCES_GENERATORS has mixed content:
// - basics: force definitions, types → acceleration foundational content
// - speed: BOTH speed_velocity AND acceleration (kinematics)
// - newton: Newton's 1st & 2nd laws → newton_first, newton_second
// - friction: friction forces → newton_second (F=ma applications)

// Speed function covers kinematics (speed and acceleration)
K7_GENERATOR_MAP.mechanics["speed_velocity"] = K7_FORCES_GENERATORS.speed || createPlaceholder("speed_velocity");
K7_GENERATOR_MAP.mechanics["speed_velocity_typing"] = K7_FORCES_GENERATORS.speed_typing || createPlaceholder("speed_velocity_typing");
K7_GENERATOR_MAP.mechanics["acceleration"] = (lang = "en", seed = 0) => buildAccelerationQuestions(lang, seed).filter((q) => q.type === "mcq");
K7_GENERATOR_MAP.mechanics["acceleration_typing"] = (lang = "en", seed = 0) => buildAccelerationQuestions(lang, seed).filter((q) => q.type === "typing");

// Newton's laws
K7_GENERATOR_MAP.mechanics["newton_first"] = K7_FORCES_GENERATORS.newton || createPlaceholder("newton_first");
K7_GENERATOR_MAP.mechanics["newton_first_typing"] = K7_FORCES_GENERATORS.newton_typing || createPlaceholder("newton_first_typing");
K7_GENERATOR_MAP.mechanics["newton_second"] = (lang = "en", seed = 0) => buildNewtonSecondQuestions(lang, seed).filter((q) => q.type === "mcq");
K7_GENERATOR_MAP.mechanics["newton_second_typing"] = (lang = "en", seed = 0) => buildNewtonSecondQuestions(lang, seed).filter((q) => q.type === "typing");
K7_GENERATOR_MAP.mechanics["newton_third"] = K7_FORCES_GENERATORS.newton || createPlaceholder("newton_third");
K7_GENERATOR_MAP.mechanics["newton_third_typing"] = K7_FORCES_GENERATORS.newton_typing || createPlaceholder("newton_third_typing");

// WORK & POWER (K7_WORK_POWER_GENERATORS)
K7_GENERATOR_MAP.work_power["work"] = K7_WORK_POWER_GENERATORS.work || createPlaceholder("work");
K7_GENERATOR_MAP.work_power["work_typing"] = K7_WORK_POWER_GENERATORS.work_typing || createPlaceholder("work_typing");
K7_GENERATOR_MAP.work_power["power"] = K7_WORK_POWER_GENERATORS.power || createPlaceholder("power");
K7_GENERATOR_MAP.work_power["power_typing"] = K7_WORK_POWER_GENERATORS.power_typing || createPlaceholder("power_typing");
K7_GENERATOR_MAP.work_power["kinetic_energy_calc"] = K7_WORK_POWER_GENERATORS.kinetic_energy_calc || createPlaceholder("kinetic_energy_calc");
K7_GENERATOR_MAP.work_power["kinetic_energy_calc_typing"] = K7_WORK_POWER_GENERATORS.kinetic_energy_calc_typing || createPlaceholder("kinetic_energy_calc_typing");
K7_GENERATOR_MAP.work_power["potential_energy_calc"] = K7_WORK_POWER_GENERATORS.potential_energy_calc || createPlaceholder("potential_energy_calc");
K7_GENERATOR_MAP.work_power["potential_energy_calc_typing"] = K7_WORK_POWER_GENERATORS.potential_energy_calc_typing || createPlaceholder("potential_energy_calc_typing");
K7_GENERATOR_MAP.work_power["mechanical_advantage"] = K7_WORK_POWER_GENERATORS.mechanical_advantage || createPlaceholder("mechanical_advantage");
K7_GENERATOR_MAP.work_power["mechanical_advantage_typing"] = K7_WORK_POWER_GENERATORS.mechanical_advantage_typing || createPlaceholder("mechanical_advantage_typing");

// OPTICS (K7_OPTICS_GENERATORS — refactored for K7 curriculum)
K7_GENERATOR_MAP.optics["lenses_convex"] = K7_OPTICS_GENERATORS.lenses_convex || createPlaceholder("lenses_convex");
K7_GENERATOR_MAP.optics["lenses_convex_typing"] = K7_OPTICS_GENERATORS.lenses_convex_typing || createPlaceholder("lenses_convex_typing");
K7_GENERATOR_MAP.optics["lenses_concave"] = K7_OPTICS_GENERATORS.lenses_concave || createPlaceholder("lenses_concave");
K7_GENERATOR_MAP.optics["lenses_concave_typing"] = K7_OPTICS_GENERATORS.lenses_concave_typing || createPlaceholder("lenses_concave_typing");
K7_GENERATOR_MAP.optics["image_formation"] = K7_OPTICS_GENERATORS.image_formation || createPlaceholder("image_formation");
K7_GENERATOR_MAP.optics["image_formation_typing"] = K7_OPTICS_GENERATORS.image_formation_typing || createPlaceholder("image_formation_typing");
K7_GENERATOR_MAP.optics["eye_optics"] = K7_OPTICS_GENERATORS.eye_optics || createPlaceholder("eye_optics");
K7_GENERATOR_MAP.optics["eye_optics_typing"] = K7_OPTICS_GENERATORS.eye_optics_typing || createPlaceholder("eye_optics_typing");
K7_GENERATOR_MAP.optics["optical_instruments"] = K7_OPTICS_GENERATORS.optical_instruments || createPlaceholder("optical_instruments");
K7_GENERATOR_MAP.optics["optical_instruments_typing"] = K7_OPTICS_GENERATORS.optical_instruments_typing || createPlaceholder("optical_instruments_typing");

// THERMAL
K7_GENERATOR_MAP.thermal["thermal_expansion"] = (K7_THERMO_GENERATORS.expansion?.combined) || createPlaceholder("thermal_expansion");
K7_GENERATOR_MAP.thermal["thermal_expansion_typing"] = (K7_THERMO_GENERATORS.expansion?._typing) || createPlaceholder("thermal_expansion_typing");
K7_GENERATOR_MAP.thermal["specific_heat"] = (K7_THERMO_GENERATORS.specific_heat?.combined) || createPlaceholder("specific_heat");
K7_GENERATOR_MAP.thermal["specific_heat_typing"] = (K7_THERMO_GENERATORS.specific_heat?._typing) || createPlaceholder("specific_heat_typing");
K7_GENERATOR_MAP.thermal["phase_changes"] = (K7_THERMO_GENERATORS.states?.combined) || createPlaceholder("phase_changes");
K7_GENERATOR_MAP.thermal["phase_changes_typing"] = (K7_THERMO_GENERATORS.states?._typing) || createPlaceholder("phase_changes_typing");
K7_GENERATOR_MAP.thermal["heat_engines"] = (lang = "en", seed = 0) => buildHeatEnginesQuestions(lang, seed).filter((q) => q.type === "mcq");
K7_GENERATOR_MAP.thermal["heat_engines_typing"] = (lang = "en", seed = 0) => buildHeatEnginesQuestions(lang, seed).filter((q) => q.type === "typing");

// MAGNETISM (K7_MAGNETISM_GENERATORS — nested format with .combined and ._typing)
K7_GENERATOR_MAP.magnetism["magnetic_basics"] = (K7_MAGNETISM_GENERATORS.basics?.combined) || createPlaceholder("magnetic_basics");
K7_GENERATOR_MAP.magnetism["magnetic_basics_typing"] = (K7_MAGNETISM_GENERATORS.basics?._typing) || createPlaceholder("magnetic_basics_typing");
K7_GENERATOR_MAP.magnetism["earth_magnetism"] = (K7_MAGNETISM_GENERATORS.earth?.combined) || createPlaceholder("earth_magnetism");
K7_GENERATOR_MAP.magnetism["earth_magnetism_typing"] = (K7_MAGNETISM_GENERATORS.earth?._typing) || createPlaceholder("earth_magnetism_typing");
K7_GENERATOR_MAP.magnetism["electromagnets"] = (K7_MAGNETISM_GENERATORS.electromagnets?.combined) || createPlaceholder("electromagnets");
K7_GENERATOR_MAP.magnetism["electromagnets_typing"] = (K7_MAGNETISM_GENERATORS.electromagnets?._typing) || createPlaceholder("electromagnets_typing");
K7_GENERATOR_MAP.magnetism["electromagnetic_induction"] = (K7_MAGNETISM_GENERATORS.induction?.combined) || createPlaceholder("electromagnetic_induction");
K7_GENERATOR_MAP.magnetism["electromagnetic_induction_typing"] = (K7_MAGNETISM_GENERATORS.induction?._typing) || createPlaceholder("electromagnetic_induction_typing");

// WAVES (K7_WAVES_GENERATORS — wave physics, EM spectrum, interference)
K7_GENERATOR_MAP.waves["wave_equation"] = K7_WAVES_GENERATORS.wave_equation || createPlaceholder("wave_equation");
K7_GENERATOR_MAP.waves["wave_equation_typing"] = K7_WAVES_GENERATORS.wave_equation_typing || createPlaceholder("wave_equation_typing");
K7_GENERATOR_MAP.waves["electromagnetic_spectrum"] = K7_WAVES_GENERATORS.electromagnetic_spectrum || createPlaceholder("electromagnetic_spectrum");
K7_GENERATOR_MAP.waves["electromagnetic_spectrum_typing"] = K7_WAVES_GENERATORS.electromagnetic_spectrum_typing || createPlaceholder("electromagnetic_spectrum_typing");
K7_GENERATOR_MAP.waves["infrared_uv"] = K7_WAVES_GENERATORS.infrared_uv || createPlaceholder("infrared_uv");
K7_GENERATOR_MAP.waves["infrared_uv_typing"] = K7_WAVES_GENERATORS.infrared_uv_typing || createPlaceholder("infrared_uv_typing");
K7_GENERATOR_MAP.waves["wave_interference"] = K7_WAVES_GENERATORS.wave_interference || createPlaceholder("wave_interference");
K7_GENERATOR_MAP.waves["wave_interference_typing"] = K7_WAVES_GENERATORS.wave_interference_typing || createPlaceholder("wave_interference_typing");

// EARTH & SPACE (K7_EARTH_SPACE_GENERATORS)
K7_GENERATOR_MAP.earth_space["gravity_universal"] = K7_EARTH_SPACE_GENERATORS.gravity_universal || createPlaceholder("gravity_universal");
K7_GENERATOR_MAP.earth_space["gravity_universal_typing"] = K7_EARTH_SPACE_GENERATORS.gravity_universal_typing || createPlaceholder("gravity_universal_typing");
K7_GENERATOR_MAP.earth_space["solar_system"] = K7_EARTH_SPACE_GENERATORS.solar_system || createPlaceholder("solar_system");
K7_GENERATOR_MAP.earth_space["solar_system_typing"] = K7_EARTH_SPACE_GENERATORS.solar_system_typing || createPlaceholder("solar_system_typing");
K7_GENERATOR_MAP.earth_space["orbits"] = K7_EARTH_SPACE_GENERATORS.orbits || createPlaceholder("orbits");
K7_GENERATOR_MAP.earth_space["orbits_typing"] = K7_EARTH_SPACE_GENERATORS.orbits_typing || createPlaceholder("orbits_typing");
K7_GENERATOR_MAP.earth_space["seasons_tides"] = K7_EARTH_SPACE_GENERATORS.seasons_tides || createPlaceholder("seasons_tides");
K7_GENERATOR_MAP.earth_space["seasons_tides_typing"] = K7_EARTH_SPACE_GENERATORS.seasons_tides_typing || createPlaceholder("seasons_tides_typing");
K7_GENERATOR_MAP.earth_space["space_exploration"] = K7_EARTH_SPACE_GENERATORS.space_exploration || createPlaceholder("space_exploration");
K7_GENERATOR_MAP.earth_space["space_exploration_typing"] = K7_EARTH_SPACE_GENERATORS.space_exploration_typing || createPlaceholder("space_exploration_typing");

// ─── INITIALIZE CURRICULUM WITH GENERATORS ────────────────────────────────

setK7GeneratorMap(K7_GENERATOR_MAP);

console.log(`[K7 Integration] Registered ${Object.keys(K7_GENERATOR_MAP).length} theme groups for 32 subtopics`);
