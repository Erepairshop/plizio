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

// ─── NEWTON'S LAWS ──────────────────────────────────────────────────────────

function generateNewtonMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "newton", q4("Newton 1. Gesetz?", "Newton's 1st Law?", "Newton 1. törvénye?", "Legea 1 Newton?", lang), q4("Objekt in Ruhe bleibt in Ruhe, Bewegung bleibt in Bewegung ohne Kraft", "Object at rest stays at rest, motion stays in motion without force", "Objektum nyugalomban marad, mozgás marad mozgásban erő nélkül", "Obiect în repaus rămâne în repaus, mișcare rămâne în mișcare fără forță", lang), [q4("Kraft=ma immer", "Force=ma always", "Erő=ma mindig", "Forță=ma mereu", lang), q4("Bewegung abbremst", "Motion slows", "Mozgás lassul", "Mișcare încetinește", lang), q4("Keine Bewegung", "No motion", "Nincs mozgás", "Fără mișcare", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "newton", q4("Newton 2. Gesetz (F=ma)?", "Newton's 2nd Law (F=ma)?", "Newton 2. törvénye (F=ma)?", "Legea 2 Newton (F=ma)?", lang), q4("Kraft=Masse×Beschleunigung", "Force=Mass×Acceleration", "Erő=Tömeg×Gyorsulás", "Forță=Masă×Accelerație", lang), [q4("Kraft=Geschwindigkeit", "Force=Velocity", "Erő=Sebesség", "Forță=Viteză", lang), q4("Kraft=Energie", "Force=Energy", "Erő=Energia", "Forță=Energie", lang), q4("Kraft=Impuls", "Force=Momentum", "Erő=Lendület", "Forță=Impuls", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "newton", q4("Newton 3. Gesetz?", "Newton's 3rd Law?", "Newton 3. törvénye?", "Legea 3 Newton?", lang), q4("Aktion=Reaktion (Kräfte gleich, entgegengesetzt)", "Action=Reaction (equal opposite forces)", "Akció=Reakció (egyenlő, ellentétes erők)", "Acțiune=Reacțiune (forțe egale, opuse)", lang), [q4("Kräfte addieren", "Forces add", "Erők összeadódnak", "Forțe se-nsumează", lang), q4("Nur Bewegung", "Only motion", "Csak mozgás", "Doar mișcare", lang), q4("Keine Reaktion", "No reaction", "Nincs reakció", "Fără reacțiune", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "newton", q4("Trägh./Massenträgheit?", "Inertia/Mass resistance?", "Tehetetlenség/Tömeg ellen?", "Inerție/Rezistență masă?", lang), q4("Eigenschaft, Bewegungsänderung zu widerstehen", "Property to resist motion change", "Tulajdonság, mozgásváltoztatás ellen", "Proprietate de rezistență schimbare mișcare", lang), [q4("Nur bei Reibung", "Only friction", "Csak súrlódáskor", "Doar fricțiune", lang), q4("Kraft erzeugen", "Create force", "Erő létrehozni", "Crea forță", lang), q4("Energie absorbieren", "Absorb energy", "Energia felszívódik", "Absorbi energie", lang)], rng)); }
  for (let i = 0; i < 6; i++) { questions.push(createMCQ("forces", "newton", q4("Referenzraum: Inertialsystem?", "Reference frame: Inertial?", "Referenciakeretrendszer: Inerciális?", "Cadru referință: Inerțial?", lang), q4("Keinen Beschleunigung; Newtons Gesetze gültig", "No acceleration; Newton's laws valid", "Nincs gyorsulás; Newton törvényei érvényesek", "Fără accelerație; legile Newton valabile", lang), [q4("Immer beschleunigt", "Always accelerated", "Mindig gyorsul", "Mereu accelerat", lang), q4("Nur bei Ruhe", "Only at rest", "Csak nyugalomkor", "Doar în repaus", lang), q4("Relativ", "Relative", "Relatív", "Relativ", lang)], rng)); }
  return questions;
}

function generateNewtonTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [createTyping("forces", "newton", q4("Newton 1. Gesetz exakt?", "Newton 1st Law exact?", "Newton 1. törvénye pontos?", "Legea 1 Newton exactă?", lang), 
    [q4("ΣF=0 → a=0; Objekt bleibt in Zustand bis externe Kraft wirkt", "ΣF=0 → a=0; object remains until external force", "ΣF=0 → a=0; objektum marad amíg külső erő", "ΣF=0 → a=0; obiect rămâne până forță externă", lang)]),
    createTyping("forces", "newton", q4("Newton 2. Gesetz F=ma?", "Newton 2nd Law F=ma?", "Newton 2. törvénye F=ma?", "Legea 2 Newton F=ma?", lang), 
    [q4("F [N] = m [kg] × a [m/s²]; Kraft = Tömeg × Beschleunigung", "F [N] = m [kg] × a [m/s²]; proportional mass & acceleration", "F [N] = m [kg] × a [m/s²]; arányos tömeg és gyorsulás", "F [N] = m [kg] × a [m/s²]; proporțional masă și accelerație", lang)]),
    createTyping("forces", "newton", q4("Newton 3. Gesetz Beispiel?", "Newton 3rd Law example?", "Newton 3. törvénye példa?", "Legea 3 Newton exemplu?", lang), 
    [q4("Person drückt Boden: Boden drückt Person gleich stark; Rakete vs Gas", "Person pushes ground: ground pushes person equally; rocket vs exhaust", "Ember nyomja talajt: talaj egyenlő erővel ember; rakéta vs gáz", "Persoană împinge sol: sol împinge persoană egal; rachetă vs gaz", lang)]),
    createTyping("forces", "newton", q4("Trägh./Massenträgheit def?", "Inertia definition?", "Tehetetlenség definíciója?", "Inerție definiție?", lang), 
    [q4("Widerstand gegen Bewegungsänderung; größere Masse → größere Trägheit", "Resistance to motion change; larger mass → larger inertia", "Mozgásváltozás elleni ellenállás; nagyobb tömeg → nagyobb tehetetlenség", "Rezistență schimbare mișcare; masă mai mare → inerție mai mare", lang)]),
    createTyping("forces", "newton", q4("Aktio-Reaktio Kräfte?", "Action-Reaction forces?", "Akció-Reakció erők?", "Forțe acțiune-reacțiune?", lang), 
    [q4("Gleichzeitig, gleich betrag, entgegengesetzt richtung, verschiedene körper", "Simultaneous, equal magnitude, opposite direction, different bodies", "Egyidejű, egyenlő nagyság, ellentétes irány, különböző testek", "Simultanee, mărime egală, direcție opusă, corpuri diferite", lang)]),
    createTyping("forces", "newton", q4("Inertialsystem: Eigenschaft?", "Inertial frame: property?", "Inerciális rendszer: tulajdonsága?", "Cadru inerțial: proprietate?", lang), 
    [q4("Keine externe Beschleunigung; Koordinatensystem bewegt sich mit konstanter Geschwindigkeit oder Ruhe", "No external acceleration; constant velocity or rest", "Nincs külső gyorsulás; konstans sebességgel vagy nyugalomban mozog", "Fără accelerație externă; viteza constantă sau repaus", lang)]),
    createTyping("forces", "newton", q4("Nicht-Inertialsystem?", "Non-inertial frame?", "Nem-inerciális rendszer?", "Cadru non-inerțial?", lang), 
    [q4("Beschleunigtes Bezugssystem; Scheinkräfte entstehen (Zentrifugalkraft, Corioliskraft)", "Accelerated reference frame; fictitious forces appear (centrifugal, Coriolis)", "Gyorsított vonatkoztatási rendszer; ál-erők keletkeznek (centrifugális, Coriolis)", "Cadru referință accelerat; forțe fictive apar (centrifugală, Coriolis)", lang)]),
  ];
}

// ─── FRICTION ───────────────────────────────────────────────────────────────

function generateFrictionMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "friction", q4("Reibung Definition?", "Friction definition?", "Súrlódás definíciója?", "Frecare definiție?", lang), q4("Kraft, die Bewegung oder Bewegungstendenz widersetzt", "Force opposing motion or motion tendency", "Erő, amely mozgást vagy mozgáskészséget ellenz", "Forță care se opune mișcării sau tendință mișcare", lang), [q4("Nur bei Bewegung", "Only moving", "Csak mozgáskor", "Doar mișcare", lang), q4("Keine Auswirkung", "No effect", "Nincs hatás", "Fără efect", lang), q4("Kraft erzeugt", "Creates force", "Erőt hoz létre", "Crează forță", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "friction", q4("Statische vs Kinetische Reibung?", "Static vs kinetic friction?", "Statikus vs kinetikus súrlódás?", "Frecare statică vs cinetică?", lang), q4("Statisch: Objekt in Ruhe; Kinetisch: Objekt bewegt sich", "Static: object at rest; kinetic: object moving", "Statikus: objektum nyugalomban; kinetikus: objektum mozog", "Statică: obiect în repaus; cinetică: obiect se mișcă", lang), [q4("Keine Unterschied", "No difference", "Nincs különbség", "Fără diferență", lang), q4("Kinetisch stärker", "Kinetic stronger", "Kinetikus erősebb", "Cinetică mai puternică", lang), q4("Abhängig von Zeit", "Depends on time", "Az időtől függ", "Depinde de timp", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "friction", q4("Reibungskoeffizient μ?", "Friction coefficient μ?", "Súrlódási tényező μ?", "Coeficient frecare μ?", lang), q4("Verhältnis Reibungskraft zu Normalkraft: f=μN", "Ratio of friction to normal force: f=μN", "Súrlódási erő és normálerő aránya: f=μN", "Raport frecare la forță normală: f=μN", lang), [q4("Immer 1", "Always 1", "Mindig 1", "Mereu 1", lang), q4("Unabhängig von Fläche", "Independent of surface", "Független felülettől", "Independent de suprafață", lang), q4("Nur Material", "Only material", "Csak anyag", "Doar material", lang)], rng)); }
  for (let i = 0; i < 7; i++) { const mat = pick([{ de: "Holz auf Holz", en: "Wood on wood", hu: "Fa a fán", ro: "Lemn pe lemn", mu: "~0.3-0.5" }, { de: "Stahl auf Stahl", en: "Steel on steel", hu: "Acél az acélon", ro: "Oțel pe oțel", mu: "~0.6-0.8" }, { de: "Gummi auf Asphalt", en: "Rubber on asphalt", hu: "Gumi az aszfalton", ro: "Cauciuc pe asfalt", mu: "~0.7-1.0" }], rng); questions.push(createMCQ("forces", "friction", q4(`${mat.de}: μ?`, `${mat.en}: μ?`, `${mat.hu}: μ?`, `${mat.ro}: μ?`, lang), mat.mu, [q4("~0.1","~0.1","~0.1","~0.1",lang), q4(">2",">>2",">2",">2",lang), q4("0","0","0","0",lang)], rng)); }
  for (let i = 0; i < 6; i++) { questions.push(createMCQ("forces", "friction", q4("Haftreibung max?", "Static friction max?", "Tapadási súrlódás max?", "Frecare statică max?", lang), q4("fs,max = μs × N; muss überwunden werden um Bewegung zu starten", "fs,max = μs × N; must overcome to start motion", "fs,max = μs × N; le kell győzni a mozgás kezdetéhez", "fs,max = μs × N; trebuie depășit pentru a începe mișcare", lang), [q4("Immer =0", "Always 0", "Mindig =0", "Mereu =0", lang), q4("Unabhängig μ", "Independent μ", "Független μ-tól", "Independent μ", lang), q4("Zeit abhängig", "Time dependent", "Időfüggő", "Dependent timp", lang)], rng)); }
  return questions;
}

function generateFrictionTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [createTyping("forces", "friction", q4("Reibung Arten?", "Friction types?", "Súrlódás fajták?", "Tipuri frecare?", lang), 
    [q4("Haft-, Gleit-, Rollreibung; Haft>Gleit; Rolle am kleinsten", "Static, kinetic, rolling; static>kinetic; rolling smallest", "Tapadási, csúszási, gördülési; tapadás>csúszás; gördülés legkisebb", "Statică, cinetică, rulare; statică>cinetică; rulare cea mai mică", lang)]),
    createTyping("forces", "friction", q4("Reibungsformel f?", "Friction formula f?", "Súrlódási képlet f?", "Formula frecare f?", lang), 
    [q4("f = μ × N; μ=koeffizient, N=Normalkraft perpendicular", "f = μ × N; μ=coefficient, N=normal force perpendicular", "f = μ × N; μ=tényező, N=normálerő merőlegesen", "f = μ × N; μ=coeficient, N=forță normală perpendicular", lang)]),
    createTyping("forces", "friction", q4("Statische Reibung max?", "Max static friction?", "Max tapadási súrlódás?", "Max frecare statică?", lang), 
    [q4("fs,max = μs × N; nagyobb μs-ből különféle anyagok", "fs,max = μs × N; higher μs from different materials", "fs,max = μs × N; nagyobb μs különféle anyagokból", "fs,max = μs × N; μs mai mare de la materiale diferite", lang)]),
    createTyping("forces", "friction", q4("Kinetische Reibung?", "Kinetic friction?", "Kinetikus súrlódás?", "Frecare cinetică?", lang), 
    [q4("fk = μk × N; konstant amikor Objekt gleitet; μk<μs", "fk = μk × N; constant while object slides; μk<μs", "fk = μk × N; konstans míg csúszik; μk<μs", "fk = μk × N; constant în timp ce alunecă; μk<μs", lang)]),
    createTyping("forces", "friction", q4("Rollreibung vs Gleit?", "Rolling vs sliding?", "Gördülési vs csúszás?", "Rulare vs alunecare?", lang), 
    [q4("Rollen: viel kleiner frictional; Ursache: Verformung+Adhäsion; deshalb Räder effizient", "Rolling: much smaller friction; cause: deformation+adhesion; why wheels efficient", "Gördülés: sokkal kisebb súrlódás; oka: deformáció+adhézió; ezért kerék hatékony", "Rulare: frecare mult mai mică; cauza: deformație+adeziune; de ce roți eficiente", lang)]),
    createTyping("forces", "friction", q4("Reibung & Normale?", "Friction & normal?", "Súrlódás & normál?", "Frecare & normală?", lang), 
    [q4("Reibung ⊥ auf Normale; proportional zu N; unabhängig von Kontaktfläche", "Friction opposes normal; proportional to N; independent of contact area", "Súrlódás ⊥ normálra; arányos N-hez; független kontaktfelülettől", "Frecare opusă normal; proporțional N; independent de aria contact", lang)]),
    createTyping("forces", "friction", q4("Haften vor Rutschen?", "Adhesion before slip?", "Ragaszkodás előtt csúszás?", "Aderență înainte alunecare?", lang), 
    [q4("fs,max > fk; statisch stärker; Grund: elektrostatische/van der Waals Bindungen temporär", "fs,max > fk; static stronger; reason: temporary electrostatic/van der Waals bonds", "fs,max > fk; statikus erősebb; ok: átmeneti elektrosztikus/van der Waals kötések", "fs,max > fk; statică mai puternică; motiv: obligațiuni electrostratice/van der Waals temporare", lang)]),
  ];
}

// ─── SPEED ──────────────────────────────────────────────────────────────────

function generateSpeedMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "speed", q4("Geschwindigkeit Definition?", "Velocity definition?", "Sebesség definíciója?", "Viteză definiție?", lang), q4("Weg pro Zeit: v=s/t [m/s]", "Distance per time: v=s/t [m/s]", "Út per idő: v=s/t [m/s]", "Distanță per timp: v=s/t [m/s]", lang), [q4("Beschleunigung*Zeit", "Acceleration*Time", "Gyorsulás*Idő", "Accelerație*Timp", lang), q4("Kraft/Masse", "Force/Mass", "Erő/Tömeg", "Forță/Masă", lang), q4("Energie/Weg", "Energy/Distance", "Energia/Út", "Energie/Distanță", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "speed", q4("Geschwindigkeit vs Schnelligkeit?", "Velocity vs speed?", "Sebesség vs gyorsaság?", "Viteză vs celeritate?", lang), q4("Geschwindigkeit: vektor (Richtung); Schnelligkeit: skalar (nur Betrag)", "Velocity: vector (direction); speed: scalar (magnitude only)", "Sebesség: vektor (irány); gyorsaság: skalár (csak nagyság)", "Viteză: vector (direcție); celeritate: scalar (doar mărime)", lang), [q4("Gleich", "Same", "Ugyanaz", "Același", lang), q4("Schnelligkeit hat keine Richtung", "Speed no direction", "Gyorsaságnak nincs iránya", "Celeritate fără direcție", lang), q4("Kinetik unterschied", "Kinetic diff", "Kinetika különbség", "Diferență cinetică", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "speed", q4("Beschleunigung Definition?", "Acceleration definition?", "Gyorsulás definíciója?", "Accelerație definiție?", lang), q4("Geschwindigkeitsänderung pro Zeit: a=Δv/Δt [m/s²]", "Velocity change per time: a=Δv/Δt [m/s²]", "Sebesség változás per idő: a=Δv/Δt [m/s²]", "Schimbare viteză per timp: a=Δv/Δt [m/s²]", lang), [q4("Weg/Zeit²", "Distance/Time²", "Út/Idő²", "Distanță/Timp²", lang), q4("Kraft allein", "Force alone", "Erő egyedül", "Forță singură", lang), q4("Bewegung konstant", "Motion constant", "Mozgás állandó", "Mișcare constantă", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "speed", q4("Konstante Beschleunigung: v=v₀+at?", "Constant acceleration: v=v₀+at?", "Konstans gyorsulás: v=v₀+at?", "Accelerație constantă: v=v₀+at?", lang), q4("Ja; v=Anfangsgeschwindigkeit+Beschleunigung×Zeit", "Yes; v=initial velocity+acceleration×time", "Igen; v=kezdeti sebesség+gyorsulás×idő", "Da; v=viteză inițială+accelerație×timp", lang), [q4("Nein, quadratisch", "No, quadratic", "Nem, négyzetes", "Nu, patratic", lang), q4("Nur Weg", "Only distance", "Csak út", "Doar distanță", lang), q4("Konstant v", "Constant v", "Konstans v", "Constantă v", lang)], rng)); }
  for (let i = 0; i < 6; i++) { questions.push(createMCQ("forces", "speed", q4("Freier Fall Beschl.?", "Free fall acceleration?", "Szabad esés gyorsulás?", "Accelerație cădere liberă?", lang), q4("g≈9,81 m/s² (Gravitationsbeschleunigung)", "g≈9.81 m/s² (gravitational acceleration)", "g≈9,81 m/s² (gravitációs gyorsulás)", "g≈9,81 m/s² (accelerație gravitațională)", lang), [q4("~10 m/s", "~10 m/s", "~10 m/s", "~10 m/s", lang), q4("Variabel", "Variable", "Változó", "Variabilă", lang), q4("0 m/s²", "0 m/s²", "0 m/s²", "0 m/s²", lang)], rng)); }
  return questions;
}

function generateSpeedTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [createTyping("forces", "speed", q4("Durchschnittsgeschwindigkeit?", "Average velocity?", "Átlagsebesség?", "Viteză medie?", lang), 
    [q4("v_avg = Δs/Δt = (s_final - s_initial)/(t_final - t_initial)", "v_avg = Δs/Δt = total distance / total time", "v_avg = Δs/Δt = teljes távolság / teljes idő", "v_avg = Δs/Δt = distanță totală / timp total", lang)]),
    createTyping("forces", "speed", q4("Momentangeschwindigkeit?", "Instantaneous velocity?", "Pillanatnyi sebesség?", "Viteză instantanee?", lang), 
    [q4("v = lim(Δt→0) Δs/Δt = ds/dt; Derivata Weg nach Zeit", "v = lim(Δt→0) Δs/Δt = ds/dt; derivative of distance", "v = lim(Δt→0) Δs/Δt = ds/dt; út deriváltja az idő után", "v = lim(Δt→0) Δs/Δt = ds/dt; derivata distanță după timp", lang)]),
    createTyping("forces", "speed", q4("Durchschnittsbeschl.?", "Average acceleration?", "Átlagos gyorsulás?", "Accelerație medie?", lang), 
    [q4("a_avg = Δv/Δt = (v_final - v_initial) / (t_final - t_initial)", "a_avg = Δv/Δt = change in velocity / change in time", "a_avg = Δv/Δt = sebesség változás / idő változás", "a_avg = Δv/Δt = schimbare viteză / schimbare timp", lang)]),
    createTyping("forces", "speed", q4("Gleichmäßig beschleunigte Bewegung s?", "Uniform acceleration distance s?", "Egyenletes gyorsulás távolság s?", "Mișcare accelerație uniformă distanță s?", lang), 
    [q4("s = v₀t + ½at²; v₀=Anfangsgeschwindigkeit, a=Beschleunigung, t=Zeit", "s = v₀t + ½at²; v₀=initial velocity, a=acceleration, t=time", "s = v₀t + ½at²; v₀=kezdeti sebesség, a=gyorsulás, t=idő", "s = v₀t + ½at²; v₀=viteză inițială, a=accelerație, t=timp", lang)]),
    createTyping("forces", "speed", q4("Freier Fall: Fallzeit?", "Free fall: time to fall?", "Szabad esés: esési idő?", "Cădere liberă: timp cădere?", lang), 
    [q4("h = ½gt²; t = √(2h/g); h=Höhe, g=9.81 m/s²", "h = ½gt²; t = √(2h/g); h=height, g=9.81 m/s²", "h = ½gt²; t = √(2h/g); h=magasság, g=9.81 m/s²", "h = ½gt²; t = √(2h/g); h=înălțime, g=9.81 m/s²", lang)]),
    createTyping("forces", "speed", q4("Freier Fall: Geschwindigkeit?", "Free fall: final velocity?", "Szabad esés: végsebesség?", "Cădere liberă: viteză finală?", lang), 
    [q4("v = √(2gh); nur Höhe, nicht Zeit; h=Fallhöhe", "v = √(2gh); only height needed, not time; h=fall height", "v = √(2gh); csak magasság szükséges, nem idő; h=esési magasság", "v = √(2gh); doar înălțime necesară, nu timp; h=înălțime cădere", lang)]),
    createTyping("forces", "speed", q4("Grafik s-t bei const. v?", "Graph s-t at constant v?", "Grafikon s-t konstans v-nél?", "Grafic s-t la v constant?", lang), 
    [q4("Gerade Linie; Steigung = Geschwindigkeit", "Straight line; slope = velocity", "Egyenes vonal; meredekség = sebesség", "Linie dreaptă; pantă = viteză", lang)]),
  ];
}

// ─── BERNOULLI ──────────────────────────────────────────────────────────────

function generateBernoulliMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "bernoulli", q4("Bernoulli Prinzip?", "Bernoulli principle?", "Bernoulli elv?", "Principiul Bernoulli?", lang), q4("Höhere Fluidgeschwindigkeit → niedrigerer Druck; Energie konstant", "Higher fluid speed → lower pressure; energy constant", "Magasabb folyadék sebesség → alacsonyabb nyomás; energia állandó", "Viteza fluid mai mare → presiune mai mică; energie constantă", lang), [q4("Höhere v → höherer Druck", "Higher v → higher pressure", "Magasabb v → magasabb nyomás", "Viteză mai mare → presiune mai mare", lang), q4("Druck unabhängig", "Pressure independent", "Nyomás független", "Presiune independent", lang), q4("Nur Luft", "Only air", "Csak levegő", "Doar aer", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "bernoulli", q4("Bernoulli Gleichung exakt?", "Bernoulli equation exact?", "Bernoulli egyenlet pontos?", "Ecuația Bernoulli exactă?", lang), q4("P + ½ρv² + ρgh = konstant", "P + ½ρv² + ρgh = constant", "P + ½ρv² + ρgh = konstans", "P + ½ρv² + ρgh = constantă", lang), [q4("P + v² = konstant", "P + v² = constant", "P + v² = konstans", "P + v² = constantă", lang), q4("v + P/ρ = const", "v + P/ρ = const", "v + P/ρ = const", "v + P/ρ = const", lang), q4("Nur kinetisch", "Only kinetic", "Csak kinetikus", "Doar cinetică", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "bernoulli", q4("Kontinuitätsgleichung?", "Continuity equation?", "Kontinuitási egyenlet?", "Ecuația continuității?", lang), q4("A₁v₁ = A₂v₂; Durchsatzvolumen konstant", "A₁v₁ = A₂v₂; volume flow rate constant", "A₁v₁ = A₂v₂; térfogati folyamensebesség állandó", "A₁v₁ = A₂v₂; debit volumetric constant", lang), [q4("v₁ = v₂", "v₁ = v₂", "v₁ = v₂", "v₁ = v₂", lang), q4("A₁ = A₂", "A₁ = A₂", "A₁ = A₂", "A₁ = A₂", lang), q4("Keine Beziehung", "No relation", "Nincs kapcsolat", "Fără relație", lang)], rng)); }
  for (let i = 0; i < 7; i++) { questions.push(createMCQ("forces", "bernoulli", q4("Flugzeugflügel: Auf trieb?", "Airplane wing: lift?", "Repülőgép szárny: felhajtóerő?", "Aripă avion: ridicare?", lang), q4("Bernoulli: oben schneller Luft → niedriger Druck → Auftrieb", "Bernoulli: faster air above → lower pressure → lift", "Bernoulli: gyorsabb levegő felül → alacsonyabb nyomás → felhajtóerő", "Bernoulli: aer mai rapid deasupra → presiune mai mică → ridicare", lang), [q4("Nur Schwerkraft", "Only gravity", "Csak gravitáció", "Doar gravitație", lang), q4("Motorschub", "Engine thrust", "Motorhajtás", "Împingere motor", lang), q4("Reibung", "Friction", "Súrlódás", "Frecare", lang)], rng)); }
  for (let i = 0; i < 6; i++) { questions.push(createMCQ("forces", "bernoulli", q4("Rohrbiegung: Druckverteilung?", "Pipe bend: pressure?", "Csőgörbület: nyomásfordítás?", "Îndoire țeavă: presiune?", lang), q4("Schmale Stelle: hohe v → niedriger P; Breite: niedrig v → höher P", "Narrow: high v → low P; wide: low v → high P", "Szűk: magas v → alacsony P; széles: alacsony v → magas P", "Îngust: v mare → P mic; lat: v mic → P mare", lang), [q4("Überall gleich", "Same everywhere", "Mindenhol egyenlő", "Egal pretutindeni", lang), q4("Nur Höhe", "Only height", "Csak magasság", "Doar înălțime", lang), q4("Reibung konstant", "Friction constant", "Súrlódás állandó", "Frecare constantă", lang)], rng)); }
  return questions;
}

function generateBernoulliTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [createTyping("forces", "bernoulli", q4("Bernoulli Principle?", "Bernoulli principle?", "Bernoulli elv?", "Principiul Bernoulli?", lang), 
    [q4("V↑ → P↓; Energie Erhaltung: kinetisch + Druck + potentiell = konstant", "V↑ → P↓; energy conservation: kinetic + pressure + potential = constant", "V↑ → P↓; energia megmaradás: kinetikus + nyomás + potenciális = állandó", "V↑ → P↓; conservare energie: cinetică + presiune + potențială = constantă", lang)]),
    createTyping("forces", "bernoulli", q4("Bernoulli Gleichung?", "Bernoulli equation?", "Bernoulli egyenlet?", "Ecuația Bernoulli?", lang), 
    [q4("P + ½ρv² + ρgh = C; P=statisch, ½ρv²=dinamisch, ρgh=Potenzial", "P + ½ρv² + ρgh = C; P=static, ½ρv²=dynamic, ρgh=potential", "P + ½ρv² + ρgh = C; P=statikus, ½ρv²=dinamikus, ρgh=potenciális", "P + ½ρv² + ρgh = C; P=static, ½ρv²=dinamic, ρgh=potențial", lang)]),
    createTyping("forces", "bernoulli", q4("Kontinuitätsgleichung?", "Continuity equation?", "Kontinuitási egyenlet?", "Ecuația continuității?", lang), 
    [q4("A₁v₁ = A₂v₂; Durchsatz Qv=Av bleibt konstant in rohren", "A₁v₁ = A₂v₂; volume flow Q=Av constant in pipes", "A₁v₁ = A₂v₂; térfogati áramlás Q=Av konstans csövekben", "A₁v₁ = A₂v₂; debit volumetric Q=Av constant în țevi", lang)]),
    createTyping("forces", "bernoulli", q4("Bernoulli in horizontale Rohre?", "Bernoulli horizontal pipes?", "Bernoulli vízszintes csővek?", "Bernoulli țevi orizontale?", lang), 
    [q4("ρgh=0; P₁ + ½ρv₁² = P₂ + ½ρv₂²; hohe v → niedrig P", "ρgh=0; P₁ + ½ρv₁² = P₂ + ½ρv₂²; high v → low P", "ρgh=0; P₁ + ½ρv₁² = P₂ + ½ρv₂²; magas v → alacsony P", "ρgh=0; P₁ + ½ρv₁² = P₂ + ½ρv₂²; v mare → P mic", lang)]),
    createTyping("forces", "bernoulli", q4("Staudruck (dynamic pressure)?", "Dynamic pressure (stagnation)?", "Dinamikus nyomás?", "Presiune dinamică?", lang), 
    [q4("q = ½ρv²; quando v=0 → staudruck = P; Bernoulli energiamérték", "q = ½ρv²; when v=0 → stagnation pressure = P; Bernoulli energy measure", "q = ½ρv²; ha v=0 → stagnáció nyomás = P; Bernoulli energia mérték", "q = ½ρv²; când v=0 → presiune stagnare = P; măsură energie Bernoulli", lang)]),
    createTyping("forces", "bernoulli", q4("Fluidviskosität Einfluss?", "Fluid viscosity effect?", "Folyadék viszkozitás hatása?", "Efect vâscozitate fluid?", lang), 
    [q4("Bernoulli: ideale Fluid (η=0); reale: Energieverlust durch Reibung", "Bernoulli: ideal fluid (η=0); real: energy loss from friction/viscosity", "Bernoulli: ideális folyadék (η=0); valódi: energia veszteség súrlódásból", "Bernoulli: fluid ideal (η=0); real: pierdere energie din frecare/vâscozitate", lang)]),
    createTyping("forces", "bernoulli", q4("Magnus Effekt (Spin Ball)?", "Magnus effect (spinning ball)?", "Magnus effekt (forgó labda)?", "Efectul Magnus (minge rotitoare)?", lang), 
    [q4("Spinning Ball: Bernoulli + Grenzschicht → Druckasymmetrie → Seitenkraft", "Spinning ball: Bernoulli + boundary layer → pressure asymmetry → side force", "Forgó labda: Bernoulli + határréteg → nyomásasszimetria → oldalkraft", "Minge rotitoare: Bernoulli + strat limită → asimetrie presiune → forță laterală", lang)]),
  ];
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K7_FORCES_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  basics: (lang = "en", seed = 0) => [...generateBasicsMCQ(lang, seed), ...generateBasicsTyping(lang, seed)],
  basics_mcq: (lang = "en", seed = 0) => generateBasicsMCQ(lang, seed),
  basics_typing: (lang = "en", seed = 0) => generateBasicsTyping(lang, seed),

  newton: (lang = "en", seed = 0) => [...generateNewtonMCQ(lang, seed), ...generateNewtonTyping(lang, seed)],
  newton_mcq: (lang = "en", seed = 0) => generateNewtonMCQ(lang, seed),
  newton_typing: (lang = "en", seed = 0) => generateNewtonTyping(lang, seed),

  friction: (lang = "en", seed = 0) => [...generateFrictionMCQ(lang, seed), ...generateFrictionTyping(lang, seed)],
  friction_mcq: (lang = "en", seed = 0) => generateFrictionMCQ(lang, seed),
  friction_typing: (lang = "en", seed = 0) => generateFrictionTyping(lang, seed),

  speed: (lang = "en", seed = 0) => [...generateSpeedMCQ(lang, seed), ...generateSpeedTyping(lang, seed)],
  speed_mcq: (lang = "en", seed = 0) => generateSpeedMCQ(lang, seed),
  speed_typing: (lang = "en", seed = 0) => generateSpeedTyping(lang, seed),

  bernoulli: (lang = "en", seed = 0) => [...generateBernoulliMCQ(lang, seed), ...generateBernoulliTyping(lang, seed)],
  bernoulli_mcq: (lang = "en", seed = 0) => generateBernoulliMCQ(lang, seed),
  bernoulli_typing: (lang = "en", seed = 0) => generateBernoulliTyping(lang, seed),
};
