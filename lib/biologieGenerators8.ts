// ─── BIOLOGIE GENERATORS (Klasse 8) ───────────────────────────────────────
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK8GeneratorMap } from "./biologieCurriculum8";

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

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng?: () => number): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

function createTyping(topic: string, subtopic: string, question: string, answer: string | string[]): CurriculumTyping {
  return { type: "typing", topic, subtopic, question, answer };
}

// ─── DATA POOLS ────────────────────────────────────────────────────────────

const DNA_STRUKTUR_DATA = [
  { component: "Zucker", function: "Deoxyribose", location: "Rückgrat" },
  { component: "Phosphat", function: "Verbindung", location: "Rückgrat" },
  { component: "Base", function: "Genetik", location: "Innen" },
];

const VERERBUNG_DATA = [
  { law: "Segregation", statement: "Allele trennen sich", generation: "F1" },
  { law: "Independent Assortment", statement: "Gene assortieren unabhängig", generation: "F2" },
  { law: "Dominanz", statement: "Ein Allel dominiert", generation: "Alle" },
];

const MUTATION_DATA = [
  { type: "Point", effect: "Ein Base ändert", size: "Minimal" },
  { type: "Insertion", effect: "Base hinzufügen", size: "Variabel" },
  { type: "Deletion", effect: "Base entfernen", size: "Variabel" },
];

const GENTECHNIK_DATA = [
  { technique: "PCR", use: "DNA vervielfältigen", speed: "Schnell" },
  { technique: "Genklonen", use: "Gene duplizieren", speed: "Langsam" },
  { technique: "CRISPR", use: "Gene schneiden", speed: "Schnell" },
];

const ENDOKRINE_DRUESEN_DATA = [
  { gland: "Hypophyse", hormone: "FSH, LH", function: "Fortpflanzung" },
  { gland: "Schilddrüse", hormone: "Thyroxin", function: "Metabolismus" },
  { gland: "Pankreas", hormone: "Insulin", function: "Glucose" },
];

const HORMON_DATA = [
  { hormone: "Insulin", target: "Zellen", effect: "Glucose aufnehmen" },
  { hormone: "Epinephrin", target: "Muskeln", effect: "Fight or Flight" },
  { hormone: "Oxytocin", target: "Uterus", effect: "Kontraktion" },
];

const FEEDBACK_DATA = [
  { type: "Negativ", result: "Stabilisieren", example: "Temperatur" },
  { type: "Positiv", result: "Verstärken", example: "Geburt" },
];

const GAMETOGENESE_DATA = [
  { process: "Spermatogenese", location: "Hoden", output: "Spermien" },
  { process: "Oogenese", location: "Eierstock", output: "Oozyte" },
  { process: "Meiose", location: "Beide", output: "Haploid" },
];

const BEFRUCHTUNG_DATA = [
  { stage: "Penetration", event: "Sperma ins Ei", barrier: "Zone Pellucida" },
  { stage: "Fusion", event: "Pronuclei vereinigen", result: "Diploid" },
  { stage: "Cortical Reaction", event: "Blockade 2. Spermium", effect: "Schutz" },
];

const EMBRYO_DATA = [
  { stage: "Blastula", cells: "Many", structure: "Hohlkugel" },
  { stage: "Gastrula", cells: "3 Keime", structure: "Lagen" },
  { stage: "Organogenese", time: "Wochen 4-8", process: "Organe bilden" },
];

const GESCHLECHT_DATA = [
  { system: "XY", male: "XY", female: "XX" },
  { system: "ZW", male: "ZZ", female: "ZW" },
  { system: "Haplodiploidy", male: "Haploid", female: "Diploid" },
];

const ENZYME_DATA = [
  { enzyme: "Amylase", substrate: "Stärke", product: "Zucker" },
  { enzyme: "Protease", substrate: "Protein", product: "Peptide" },
  { enzyme: "Lipase", substrate: "Fett", product: "Fettsäuren" },
];

const BIOETHIK_DATA = [
  { issue: "Genmanipulation", concern: "Sicherheit", debate: "Offen" },
  { issue: "Klonen", concern: "Ethik", debate: "Kontrovers" },
  { issue: "Stammzellen", concern: "Moral", debate: "Politisch" },
];

const BIOTECH_APP_DATA = [
  { application: "Gentechnik", field: "Medizin", example: "Insulin" },
  { application: "Fermentation", field: "Industrie", example: "Bier" },
  { application: "Bioremediation", field: "Umwelt", example: "Ölabbau" },
];

const INTEGRATION_DATA = [
  { system: "Nervös", function: "Signale", speed: "Schnell" },
  { system: "Hormon", function: "Chemisch", speed: "Langsam" },
];

const HOMEOSTASIS_DATA = [
  { parameter: "Temperatur", setpoint: "37°C", mechanism: "Schwitzen" },
  { parameter: "pH", setpoint: "7.4", mechanism: "Puffer" },
  { parameter: "Glucose", setpoint: "90mg/dl", mechanism: "Insulin" },
];

const STOFFWECHSEL_DATA = [
  { type: "Anaerob", oxygen: "Nein", ATP: "Wenig" },
  { type: "Aerob", oxygen: "Ja", ATP: "Viel" },
  { type: "Gemischt", oxygen: "Beides", ATP: "Variabel" },
];

const POPULATIONSGENETIK_DATA = [
  { concept: "Allele", definition: "Gene Varianten", frequency: "Pct" },
  { concept: "Hardy-Weinberg", definition: "Equilibrium", condition: "Keine Evolution" },
  { concept: "Drift", definition: "Zufällig", effect: "Kleine Population" },
];

const ARTBILDUNG_DATA = [
  { type: "Allopatrisch", mechanism: "Geografisch isoliert", result: "Art" },
  { type: "Sympatrisch", mechanism: "Keine Isolation", result: "Art" },
  { type: "Peripatrisch", mechanism: "Founder Effect", result: "Schnell" },
];

const PHYLOGENIE_DATA = [
  { evidence: "Morphologisch", source: "Struktur", reliability: "Moderat" },
  { evidence: "Molekular", source: "DNA/Protein", reliability: "Hoch" },
  { evidence: "Fossil", source: "Alt", reliability: "Variabel" },
];

const GENETIC_COUNSELING_DATA = [
  { disorder: "Mukoviszidose", inheritance: "Autosomal rezessiv", frequency: "1/2000" },
  { disorder: "Hämophilie", inheritance: "X-gekoppelt", frequency: "1/5000" },
  { disorder: "Huntington", inheritance: "Autosomal dominant", frequency: "1/10000" },
];

const CONTRACEPTION_DATA = [
  { method: "Kondom", effectiveness: "95%", reversible: "Ja" },
  { method: "Pille", effectiveness: "99%", reversible: "Ja" },
  { method: "IUD", effectiveness: "99%", reversible: "Ja" },
];

const CONSERVATION_DATA = [
  { threat: "Habitatverlust", cause: "Urbanisierung", solution: "Schutzgebiete" },
  { threat: "Überfischung", cause: "Kommerz", solution: "Quoten" },
  { threat: "Klimawandel", cause: "Treibhausgase", solution: "Reduktion" },
];

// ─── K8 GENERATORS ─────────────────────────────────────────────────────────

export const K8_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  dna_struktur: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const dna = pick(DNA_STRUKTUR_DATA, rng);
      questions.push(createMCQ("genetik", "dna_struktur", `${dna.component} ist am ${dna.location}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  dna_struktur_typing: (seed?: number) => [
    createTyping("genetik", "dna_struktur", "Was ist das DNA Rückgrat?", ["Zucker-Phosphat"]),
    createTyping("genetik", "dna_struktur", "Nenne die 4 Basen", ["Adenin, Thymin, Guanin, Cytosin"]),
    createTyping("genetik", "dna_struktur", "Wie viele Stränge hat DNA?", ["2"]),
    createTyping("genetik", "dna_struktur", "Was ist Base Pairing?", ["A-T, G-C"]),
    createTyping("genetik", "dna_struktur", "Wo sitzt DNA?", ["Kern", "Mitochondrium"]),
  ],

  vererbung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const law = pick(VERERBUNG_DATA, rng);
      questions.push(createMCQ("genetik", "vererbung", `${law.law} ist Mendelgesetz`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  vererbung_typing: (seed?: number) => [
    createTyping("genetik", "vererbung", "Was ist Dominanz?", ["Ein Allel stärker"]),
    createTyping("genetik", "vererbung", "Was ist Rezessiv?", ["Verborgen"]),
    createTyping("genetik", "vererbung", "Wer ist Mendel?", ["Genetiker"]),
    createTyping("genetik", "vererbung", "Was ist Phänotyp?", ["Erscheinungsbild"]),
    createTyping("genetik", "vererbung", "Was ist Genotyp?", ["Genetischer Aufbau"]),
  ],

  mutation: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const mut = pick(MUTATION_DATA, rng);
      questions.push(createMCQ("genetik", "mutation", `${mut.type} Mutation hat ${mut.size} Effekt`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  mutation_typing: (seed?: number) => [
    createTyping("genetik", "mutation", "Was ist Mutation?", ["Genetische Änderung"]),
    createTyping("genetik", "mutation", "Nenne Mutationstypen", ["Point, Insertion, Deletion"]),
    createTyping("genetik", "mutation", "Können Mutationen hilfreich sein?", ["Ja"]),
    createTyping("genetik", "mutation", "Was verursacht Mutation?", ["Strahlung, Chemikalien"]),
    createTyping("genetik", "mutation", "Wie oft mutiert DNA?", ["Selten"]),
  ],

  genetische_technik: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const tech = pick(GENTECHNIK_DATA, rng);
      questions.push(createMCQ("genetik", "genetische_technik", `${tech.technique} wird für ${tech.use} benutzt`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  genetische_technik_typing: (seed?: number) => [
    createTyping("genetik", "genetische_technik", "Was ist PCR?", ["DNA Vervielfältigung"]),
    createTyping("genetik", "genetische_technik", "Was ist CRISPR?", ["Gentechnik Werkzeug"]),
    createTyping("genetik", "genetische_technik", "Was ist Klonen?", ["Identische Kopie"]),
    createTyping("genetik", "genetische_technik", "Nenne Gentechnik Anwendungen", ["Medizin, Landwirtschaft"]),
    createTyping("genetik", "genetische_technik", "Wer war Watson & Crick?", ["DNA Entdecker"]),
  ],

  endokrine_druesen: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const gland = pick(ENDOKRINE_DRUESEN_DATA, rng);
      questions.push(createMCQ("hormone", "endokrine_druesen", `${gland.gland} produziert ${gland.hormone}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  endokrine_druesen_typing: (seed?: number) => [
    createTyping("hormone", "endokrine_druesen", "Was ist Hypophyse?", ["Hirnanhang"]),
    createTyping("hormone", "endokrine_druesen", "Was ist Schilddrüse?", ["Hals"]),
    createTyping("hormone", "endokrine_druesen", "Nenne 5 Endokrinedrüsen", ["Hypophyse, Schilddrüse, Pankreas, Nebenniere, Eierstock"]),
    createTyping("hormone", "endokrine_druesen", "Wo ist Pankreas?", ["Bauch"]),
    createTyping("hormone", "endokrine_druesen", "Was macht Nebenniere?", ["Stress Hormone"]),
  ],

  hormonstoffwechsel: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const hormone = pick(HORMON_DATA, rng);
      questions.push(createMCQ("hormone", "hormonstoffwechsel", `${hormone.hormone} bewirkt ${hormone.effect}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  hormonstoffwechsel_typing: (seed?: number) => [
    createTyping("hormone", "hormonstoffwechsel", "Was ist Insulin?", ["Glucose Regulator"]),
    createTyping("hormone", "hormonstoffwechsel", "Was ist Epinephrin?", ["Adrenalin"]),
    createTyping("hormone", "hormonstoffwechsel", "Nenne Stress Hormone", ["Cortisol, Adrenalin"]),
    createTyping("hormone", "hormonstoffwechsel", "Wo werden Hormone gemacht?", ["Endokrine Drüsen"]),
    createTyping("hormone", "hormonstoffwechsel", "Wie schnell wirken Hormone?", ["Minuten bis Stunden"]),
  ],

  feedback_mechanismen: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const fb = pick(FEEDBACK_DATA, rng);
      questions.push(createMCQ("hormone", "feedback_mechanismen", `${fb.type} Feedback stabilisiert`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  feedback_mechanismen_typing: (seed?: number) => [
    createTyping("hormone", "feedback_mechanismen", "Was ist Negative Feedback?", ["Stabilisieren"]),
    createTyping("hormone", "feedback_mechanismen", "Was ist Positive Feedback?", ["Verstärken"]),
    createTyping("hormone", "feedback_mechanismen", "Nenne ein Beispiel", ["Temperatur, Geburt"]),
    createTyping("hormone", "feedback_mechanismen", "Warum Feedback?", ["Homeostasis"]),
    createTyping("hormone", "feedback_mechanismen", "Wer reguliert was?", ["Hypothalamus-Hypophyse"]),
  ],

  gametogenese: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const gam = pick(GAMETOGENESE_DATA, rng);
      questions.push(createMCQ("reproduktion", "gametogenese", `${gam.process} erzeugt ${gam.output}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  gametogenese_typing: (seed?: number) => [
    createTyping("reproduktion", "gametogenese", "Was ist Spermatogenese?", ["Spermium Produktion"]),
    createTyping("reproduktion", "gametogenese", "Was ist Oogenese?", ["Eizelle Produktion"]),
    createTyping("reproduktion", "gametogenese", "Wie lange dauert Spermatogenese?", ["74 Tage"]),
    createTyping("reproduktion", "gametogenese", "Wie viele Spermien pro Ejakulation?", ["Millionen"]),
    createTyping("reproduktion", "gametogenese", "Nenne die 4 Phasen", ["Mitose, Growth, Meiose, Differenzierung"]),
  ],

  befruchtung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const bef = pick(BEFRUCHTUNG_DATA, rng);
      questions.push(createMCQ("reproduktion", "befruchtung", `${bef.stage} ist im Befruchtungsprozess`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  befruchtung_typing: (seed?: number) => [
    createTyping("reproduktion", "befruchtung", "Was ist Befruchtung?", ["Spermium + Ei"]),
    createTyping("reproduktion", "befruchtung", "Nenne die Befruchtungsphasen", ["Penetration, Fusion, Cortical Reaction"]),
    createTyping("reproduktion", "befruchtung", "Was ist Zona Pellucida?", ["Ei Hülle"]),
    createTyping("reproduktion", "befruchtung", "Wo findet Befruchtung statt?", ["Eileiter"]),
    createTyping("reproduktion", "befruchtung", "Wie lange bis Implantation?", ["6-12 Tage"]),
  ],

  embryonalentwicklung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const embryo = pick(EMBRYO_DATA, rng);
      questions.push(createMCQ("reproduktion", "embryonalentwicklung", `${embryo.stage} ist ${embryo.structure}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  embryonalentwicklung_typing: (seed?: number) => [
    createTyping("reproduktion", "embryonalentwicklung", "Nenne die 3 Gastrulations Keime", ["Ektoderm, Mesoderm, Endoderm"]),
    createTyping("reproduktion", "embryonalentwicklung", "Was ist Organogenese?", ["Organbildung"]),
    createTyping("reproduktion", "embryonalentwicklung", "Wie lange ist Schwangerschaft?", ["40 Wochen"]),
    createTyping("reproduktion", "embryonalentwicklung", "Wann bildet sich Herz?", ["Woche 4"]),
    createTyping("reproduktion", "embryonalentwicklung", "Was ist Differentiation?", ["Zellspezialisierung"]),
  ],

  geschlechtsbestimmung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const sex = pick(GESCHLECHT_DATA, rng);
      questions.push(createMCQ("reproduktion", "geschlechtsbestimmung", `Im ${sex.system} System ist Männchen ${sex.male}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  geschlechtsbestimmung_typing: (seed?: number) => [
    createTyping("reproduktion", "geschlechtsbestimmung", "Was ist XY System?", ["Männchen XY, Weibchen XX"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Was ist ZW System?", ["Vögel, Schmetterlinge"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Was bestimmt Geschlecht?", ["Vater Chromosom"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Nenne Geschlechtsbestimmungsarten", ["XY, ZW, Haplodiploidy"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Was ist Sex-linked?", ["Gen auf X Chromosom"]),
  ],

  enzyme: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const enz = pick(ENZYME_DATA, rng);
      questions.push(createMCQ("biotechnologie", "enzyme", `${enz.enzyme} spaltet ${enz.substrate} in ${enz.product}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  enzyme_typing: (seed?: number) => [
    createTyping("biotechnologie", "enzyme", "Was ist Enzym?", ["Protein Katalysator"]),
    createTyping("biotechnologie", "enzyme", "Was ist Substrat?", ["Was Enzym zerlegt"]),
    createTyping("biotechnologie", "enzyme", "Nenne 3 Enzyme", ["Amylase, Protease, Lipase"]),
    createTyping("biotechnologie", "enzyme", "Wie wirken Enzyme?", ["Aktivierungsenergie senken"]),
    createTyping("biotechnologie", "enzyme", "Was ist Cofaktor?", ["Enzym Helfer"]),
  ],

  bioethik: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const bio = pick(BIOETHIK_DATA, rng);
      questions.push(createMCQ("biotechnologie", "bioethik", `${bio.issue} ist ethisch kontrovers`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  bioethik_typing: (seed?: number) => [
    createTyping("biotechnologie", "bioethik", "Was ist Genethik?", ["Ethik der Gentechnik"]),
    createTyping("biotechnologie", "bioethik", "Nenne bioethische Fragen", ["Klonen, Stammzellen, Designerbabys"]),
    createTyping("biotechnologie", "bioethik", "Wer überwacht Gentechnik?", ["Regierungen"]),
    createTyping("biotechnologie", "bioethik", "Was sind Bedenken?", ["Sicherheit, Gerechtigkeit"]),
    createTyping("biotechnologie", "bioethik", "Ist Gentechnik erlaubt?", ["Reguliert"]),
  ],

  biotech_anwendungen: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const app = pick(BIOTECH_APP_DATA, rng);
      questions.push(createMCQ("biotechnologie", "biotech_anwendungen", `${app.application} wird in ${app.field} benutzt`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  biotech_anwendungen_typing: (seed?: number) => [
    createTyping("biotechnologie", "biotech_anwendungen", "Was ist Fermentation?", ["Mikrobenkultur"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Nenne Biotech Anwendungen", ["Medizin, Landwirtschaft, Industrie"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Was ist Bioremediation?", ["Abbau Umweltgifte"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Wo wird Gentechnik benutzt?", ["Insulin, Antibiotika"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Was ist GMO?", ["Genetisch modifiziert"]),
  ],

  integration: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const integ = pick(INTEGRATION_DATA, rng);
      questions.push(createMCQ("systemische", "integration", `${integ.system} System hat ${integ.speed} Signale`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  integration_typing: (seed?: number) => [
    createTyping("systemische", "integration", "Wie integrieren Systeme?", ["Nervös + Hormon"]),
    createTyping("systemische", "integration", "Was ist schneller?", ["Nervös"]),
    createTyping("systemische", "integration", "Was ist länger?", ["Hormon"]),
    createTyping("systemische", "integration", "Nenne 5 Körpersysteme", ["Nervös, Hormon, Zirkulatur, Atmung, Verdauung"]),
    createTyping("systemische", "integration", "Was ist Homöostase?", ["Stabilitätserhaltung"]),
  ],

  homeostasis: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const home = pick(HOMEOSTASIS_DATA, rng);
      questions.push(createMCQ("systemische", "homeostasis", `${home.parameter} wird bei ${home.setpoint} gehalten`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  homeostasis_typing: (seed?: number) => [
    createTyping("systemische", "homeostasis", "Was ist Homöostase?", ["Inneres Gleichgewicht"]),
    createTyping("systemische", "homeostasis", "Wer reguliert Temperatur?", ["Hypothalamus"]),
    createTyping("systemische", "homeostasis", "Was ist Setpoint?", ["Zielwert"]),
    createTyping("systemische", "homeostasis", "Nenne 3 regulierte Parameter", ["Temperatur, pH, Glucose"]),
    createTyping("systemische", "homeostasis", "Wie viele Parameter werden reguliert?", ["Dutzend+"]),
  ],

  stoffwechseltypologie: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const meta = pick(STOFFWECHSEL_DATA, rng);
      questions.push(createMCQ("systemische", "stoffwechseltypologie", `${meta.type} Stoffwechsel produziert ${meta.ATP}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  stoffwechseltypologie_typing: (seed?: number) => [
    createTyping("systemische", "stoffwechseltypologie", "Was ist Katabolismus?", ["Abbau"]),
    createTyping("systemische", "stoffwechseltypologie", "Was ist Anabolismus?", ["Aufbau"]),
    createTyping("systemische", "stoffwechseltypologie", "Nenne Stoffwechseltypen", ["Aerob, Anaerob"]),
    createTyping("systemische", "stoffwechseltypologie", "Wer hat schnelleren Metabolismus?", ["Junge, Aktive"]),
    createTyping("systemische", "stoffwechseltypologie", "Was ist Basal Metabolic Rate?", ["Ruhe Verbrauch"]),
  ],

  populationsgenetik: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const pop = pick(POPULATIONSGENETIK_DATA, rng);
      questions.push(createMCQ("evolution_advanced", "populationsgenetik", `${pop.concept} ist ${pop.definition}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  populationsgenetik_typing: (seed?: number) => [
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Allele?", ["Gen Varianten"]),
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Hardy-Weinberg?", ["Gleichgewicht"]),
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Genetischer Drift?", ["Zufallsänderung"]),
    createTyping("evolution_advanced", "populationsgenetik", "Nenne 3 Evolving Faktoren", ["Mutation, Selektion, Drift"]),
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Allele Frequenz?", ["Prozent Population"]),
  ],

  artbildung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const spec = pick(ARTBILDUNG_DATA, rng);
      questions.push(createMCQ("evolution_advanced", "artbildung", `${spec.type} Artbildung ist durch ${spec.mechanism}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  artbildung_typing: (seed?: number) => [
    createTyping("evolution_advanced", "artbildung", "Was ist Speziation?", ["Art Bildung"]),
    createTyping("evolution_advanced", "artbildung", "Nenne Artbildungstypen", ["Allopatrisch, Sympatrisch"]),
    createTyping("evolution_advanced", "artbildung", "Was ist Allopatrisch?", ["Geografische Isolation"]),
    createTyping("evolution_advanced", "artbildung", "Was ist Sympatrisch?", ["Ohne Isolation"]),
    createTyping("evolution_advanced", "artbildung", "Wie lange dauert Speziation?", ["Tausende Jahre"]),
  ],

  phylogenie: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const phyl = pick(PHYLOGENIE_DATA, rng);
      questions.push(createMCQ("evolution_advanced", "phylogenie", `${phyl.evidence} Beweis ist ${phyl.reliability}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  phylogenie_typing: (seed?: number) => [
    createTyping("evolution_advanced", "phylogenie", "Was ist Phylogenie?", ["Evolutionsgeschichte"]),
    createTyping("evolution_advanced", "phylogenie", "Was ist Phylogenetischer Baum?", ["Verwandtschaft Diagramm"]),
    createTyping("evolution_advanced", "phylogenie", "Nenne Phylogenie Beweise", ["Morphologie, Molecular, Fossil"]),
    createTyping("evolution_advanced", "phylogenie", "Was ist Homologie?", ["Gemeinsamer Ursprung"]),
    createTyping("evolution_advanced", "phylogenie", "Was ist Analogie?", ["Ähnliche Funktion, anderer Ursprung"]),
  ],

  genetic_counseling: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const disorder = pick(GENETIC_COUNSELING_DATA, rng);
      questions.push(createMCQ("genetik", "genetic_counseling", `${disorder.disorder} ist ${disorder.inheritance}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  genetic_counseling_typing: (seed?: number) => [
    createTyping("genetik", "genetic_counseling", "Was ist genetische Beratung?", ["Risiko Bewertung"]),
    createTyping("genetik", "genetic_counseling", "Nenne 3 genetische Störungen", ["Mukoviszidose, Hämophilie, Huntington"]),
    createTyping("genetik", "genetic_counseling", "Was ist Carrier Testing?", ["Träger Prüfung"]),
    createTyping("genetik", "genetic_counseling", "Wer sollte Beratung erhalten?", ["Patienten, Familie"]),
    createTyping("genetik", "genetic_counseling", "Was ist Pränataltest?", ["Schwangerschaft Test"]),
  ],

  contraception: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const method = pick(CONTRACEPTION_DATA, rng);
      questions.push(createMCQ("reproduktion", "contraception", `${method.method} ist ${method.effectiveness} effektiv`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  contraception_typing: (seed?: number) => [
    createTyping("reproduktion", "contraception", "Nenne 5 Verhütungsmethoden", ["Kondom, Pille, IUD, Implantat, Spermizid"]),
    createTyping("reproduktion", "contraception", "Was ist Kondom?", ["Barriere Methode"]),
    createTyping("reproduktion", "contraception", "Was ist Pille?", ["Hormonale Methode"]),
    createTyping("reproduktion", "contraception", "Was ist IUD?", ["Intrauterines Gerät"]),
    createTyping("reproduktion", "contraception", "Welche ist am effektivsten?", ["Implantat, IUD"]),
  ],

  conservation_biology: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const threat = pick(CONSERVATION_DATA, rng);
      questions.push(createMCQ("evolution_advanced", "conservation_biology", `${threat.threat} ist durch ${threat.cause} verursacht`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  conservation_biology_typing: (seed?: number) => [
    createTyping("evolution_advanced", "conservation_biology", "Was ist Naturschutz?", ["Artenschutz"]),
    createTyping("evolution_advanced", "conservation_biology", "Nenne 3 Bedrohungen", ["Habitatverlust, Überfischung, Klimawandel"]),
    createTyping("evolution_advanced", "conservation_biology", "Was ist Red List?", ["Bedrohte Arten Liste"]),
    createTyping("evolution_advanced", "conservation_biology", "Was sind Schutzgebiete?", ["Reservate"]),
    createTyping("evolution_advanced", "conservation_biology", "Wie viele Arten sind bedroht?", ["Millionen"]),
  ],
};

export const GENERATOR_MAP: Record<string, (seed?: number) => CurriculumQuestion[]> = K8_Generators;

setK8GeneratorMap(GENERATOR_MAP);
