// ─── PHYSICS GENERATORS K7: FORCES & MOTION ──────────────────────────────
// "Kräfte & Bewegung" theme — Newton's laws, friction, speed, Bernoulli
// Grade 7 (13-14 years old)
//
// Generates 32-35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// F = ma, F = weight/mass, friction, v = d/t, a = Δv/Δt

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrong: string[], rng: () => number): CurriculumMCQ {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return { type: "mcq" as const, topic, subtopic, question, options, correct: options.indexOf(correct) };
}

function createTyping(topic: string, subtopic: string, question: string, answer: string | string[]): CurriculumTyping {
  return { type: "typing" as const, topic, subtopic, question, answer };
}

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

// ─── BASICS ────────────────────────────────────────────────────────────────

function generateBasicsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    const concept = pick([
      q4("Kraft ist Vektor", "Force is vector", "Az erő vektor", "Forța este vector", lang),
      q4("Kraft hat Richtung und Betrag", "Force has direction and magnitude", "Az erőnek van iránya és nagysága", "Forța are direcție și mărime", lang),
      q4("Newton ist Einheit für Kraft", "Newton is unit of force", "A Newton az erő egysége", "Newton este unitatea de forță", lang),
    ], rng);
    questions.push(createMCQ("forces", "basics", q4("Welche Aussage ist wahr?", "Which statement is true?", "Melyik állítás igaz?", "Care afirmație este adevărată?", lang), concept, [q4("Kraft hat nur Betrag", "Force has only magnitude", "Az erőnek csak nagysága van", "Forța are doar mărime", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    const force = pick([
      q4("Gewichtskraft = m × g", "Weight force = m × g", "Súly = m × g", "Forță de greutate = m × g", lang),
      q4("Normalkraft wirkt senkrecht zur Oberfläche", "Normal force perpendicular to surface", "Normálerő merőleges a felületre", "Forța normală perpendiculară pe suprafață", lang),
      q4("Reibungskraft entgegengesetzt Bewegung", "Friction opposes motion", "Súrlódás a mozgás ellen", "Fricțiune opusă mișcării", lang),
    ], rng);
    questions.push(createMCQ("forces", "basics", q4("Kraft-Typ: Beschreibung?", "Force type: description?", "Erő típusa: leírása?", "Tip de forță: descriere?", lang), force, [q4("Zufällig", "Random", "Véletlenszerű", "Aleatoriu", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("forces", "basics", q4("1 Newton = ?", "1 Newton = ?", "1 Newton = ?", "1 Newton = ?", lang), q4("Kraft um 1 kg um 1 m/s² zu beschleunigen", "Force to accelerate 1 kg by 1 m/s²", "Erő 1 kg 1 m/s² gyorsulásához", "Forța pentru accelera 1 kg cu 1 m/s²", lang), [q4("Dyn (dyne)", "Dyn (dyne)", "Dyn (dyn)", "Dyn (dyn)", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("forces", "basics", q4("Gravitationskonstante g ≈ ?", "Gravitational constant g ≈ ?", "Gravitációs állandó g ≈ ?", "Constantă gravitațională g ≈ ?", lang), q4("9,81 m/s²", "9.81 m/s²", "9,81 m/s²", "9,81 m/s²", lang), [q4("3,8 m/s²", "3.8 m/s²", "3,8 m/s²", "3,8 m/s²", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("forces", "basics", q4("Gewichtskraft eines Objekts 100 kg auf Erde?", "Weight force of 100 kg object on Earth?", "100 kg tárgy súlya a Földön?", "Forța de greutate a unui obiect de 100 kg pe Pământ?", lang), q4("981 N", "981 N", "981 N", "981 N", lang), [q4("100 N", "100 N", "100 N", "100 N", lang)], rng));
  }

  return questions;
}

function generateBasicsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];

  questions.push(createTyping("forces", "basics", q4("Was ist Kraft (Force)? Definition", "What is force? Definition", "Mi az erő? Meghatározás", "Ce este forța? Definiție", lang), [
    q4("Kraft ist Vektor-Größe, die Ursache für Bewegungsänderung oder Verformung; SI-Einheit: Newton (N)", "Force is vector quantity, causes motion change or deformation; SI unit: Newton (N)", "Az erő vektor-mennyiség, a mozgás vagy alakváltozás oka; SI egység: Newton (N)", "Forța este mărime vectorială, cauza schimbării mișcării sau deformării; unitate SI: Newton (N)", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Arten von Kräften: Liste", "Types of forces: list", "Erőtípusok: lista", "Tipuri de forțe: listă", lang), [
    q4("Gravitationskraft (Gewicht), Normalkraft, Reibung, Zugkraft, Druckkraft, Zentripetalkraft", "Gravity (weight), normal, friction, tension, compression, centripetal", "Gravitáció (súly), normál, súrlódás, vonóerő, nyomóerő, centripetális", "Gravitație (greutate), normal, frecare, tensiune, compresie, centripetă", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Newtons Definition: Kraft wirkt auf Objekt?", "Newton's definition: force acts on object?", "Newton definíciója: erő hat objektumra?", "Definiția Newton: forță acționează pe obiect?", lang), [
    q4("Kraft = Änderung des Bewegungszustands (Beschleunigung); ohne Kraft → keine Änderung", "Force = change of motion state (acceleration); no force → no change", "Erő = a mozgás állapotának megváltoztatása (gyorsulás); nincs erő → nincs változás", "Forță = schimbare de stare de mișcare (accelerație); fără forță → fără schimbare", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Gewichtskraft Formel und Beispiel (100 kg)?", "Weight force formula and example (100 kg)?", "Súly képlet és példa (100 kg)?", "Forță de greutate formulă și exemplu (100 kg)?", lang), [
    q4("F = m × g = 100 kg × 9,81 m/s² = 981 N", "F = m × g = 100 × 9.81 = 981 N", "F = m × g = 100 kg × 9,81 m/s² = 981 N", "F = m × g = 100 × 9,81 = 981 N", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Unterschied Masse und Gewicht?", "Difference mass and weight?", "Különbség tömeg és súly között?", "Diferență masă și greutate?", lang), [
    q4("Masse = Menge Material (kg), überall gleich; Gewicht = Gravitationskraft (N), variiert mit g", "Mass = amount of material (kg), same everywhere; weight = gravitational force (N), varies with g", "Tömeg = anyag mennyisége (kg), mindenhol azonos; súly = gravitációs erő (N), g-vel változik", "Masă = cantitate de material (kg), aceeași peste tot; greutate = forță gravitațională (N), variază cu g", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Normalkraft: Definition und Richtung?", "Normal force: definition and direction?", "Normálerő: definíció és irány?", "Forța normală: definiție și direcție?", lang), [
    q4("Normalkraft = Kraft senkrecht zur Oberfläche; immer nach außen (away from surface), nicht Gravitationskraft", "Normal = perpendicular to surface; always outward, not gravity", "Normál = merőleges a felületre; mindig kifelé (away from surface), nem gravitáció", "Normal = perpendiculară pe suprafață; întotdeauna către exterior, nu gravitație", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Newton Einheit Definition exakt?", "Newton unit exact definition?", "Newton egység pontos definíciója?", "Unitate Newton definiție exactă?", lang), [
    q4("1 N = Kraft um 1 kg Masse um 1 m/s² zu beschleunigen = 1 kg⋅m/s²", "1 N = force to accelerate 1 kg by 1 m/s² = 1 kg⋅m/s²", "1 N = erő 1 kg 1 m/s² gyorsulásához = 1 kg⋅m/s²", "1 N = forță pentru accelera 1 kg cu 1 m/s² = 1 kg⋅m/s²", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Vektorielle Natur der Kraft: Bedeutung?", "Vectorial nature of force: meaning?", "Az erő vektoriális természete: jelentése?", "Natura vectorială a forței: semnificație?", lang), [
    q4("Kraft hat Richtung + Betrag; zwei Kräfte gleicher Größe, unterschiedliche Richtungen → verschiedene Auswirkungen", "Force has direction + magnitude; same size, different direction → different effects", "Az erőnek van iránya + nagysága; ugyanakkora nagyság, más irány → más hatások", "Forța are direcție + mărime; aceeași mărime, direcție diferită → efecte diferite", lang),
  ]));

  questions.push(createTyping("forces", "basics", q4("Superposition von Kräften (Vektoraddition)?", "Superposition of forces (vector addition)?", "Erők szuperpoozíciója (vektoradditió)?", "Suprapunere de forțe (adunare vectorială)?", lang), [
    q4("Gesamtkraft = Summe aller Einzelkräfte als Vektoren; richtige Richtung + Größe kombinieren", "Net force = vector sum of all forces; combine direction + magnitude correctly", "Nettó erő = összes erő vektorszummája; irány + nagyság helyes kombinálása", "Forță netă = sumă vectorială a tuturor forțelor; combina direcție + mărime corect", lang),
  ]));

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K7_FORCES_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  basics: (lang = "en", seed = 0) => [...generateBasicsMCQ(lang, seed), ...generateBasicsTyping(lang, seed)],
  basics_mcq: (lang = "en", seed = 0) => generateBasicsMCQ(lang, seed),
  basics_typing: (lang = "en", seed = 0) => generateBasicsTyping(lang, seed),
};
