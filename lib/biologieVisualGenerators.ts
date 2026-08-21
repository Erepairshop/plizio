/**
 * Biologie Visual Generators — 8 interactive question types
 *
 * 1. TierKlassifizierungBio  — Wirbeltier vs Wirbellos (K5–K6)
 * 2. OrganZuordnung          — Organ → Körpersystem (K5–K6)
 * 3. ErnährungsSort          — Lebensmittel → Nährstoffgruppe (K5)
 * 4. NahrungsketteSort       — Nahrungskette sortieren (K6)
 * 5. OrganDiagram            — Organ identifizieren per Emoji+Hint (K5–K6)
 * 6. PflanzenAnatomie        — Pflanzenteil identifizieren (K5)
 * 7. ZellDiagram             — Zellorganell identifizieren (K7)
 * 8. LebenszyklusTimeline    — Lebenszyklus-Phasen in Reihenfolge (K5–K6)
 */

import type { VisualQuestionType } from "./languageTestTypes";
import TierKlassifizierungBio from "@/components/biologie-visual/TierKlassifizierungBio";
import OrganZuordnung from "@/components/biologie-visual/OrganZuordnung";
import ErnährungsSort from "@/components/biologie-visual/ErnährungsSort";
import NahrungsketteSort from "@/components/biologie-visual/NahrungsketteSort";
import OrganDiagram from "@/components/biologie-visual/OrganDiagram";
import PflanzenAnatomie from "@/components/biologie-visual/PflanzenAnatomie";
import ZellDiagram from "@/components/biologie-visual/ZellDiagram";
import LebenszyklusTimeline from "@/components/biologie-visual/LebenszyklusTimeline";
import DnaEvolutionErkennen from "@/components/biologie-visual/DnaEvolutionErkennen";
import BiologyDiagramQuestion from "@/components/biologie-visual/BiologyDiagramQuestion";
import BiologyLegacyMission from "@/components/biologie-visual/BiologyLegacyMission";
import { biologyDiagramSvgMarkup } from "@/components/biologie-visual/BiologyTestDiagrams";
import {
  BIOLOGIE_VISUAL_TYPE_LABELS,
  biologieVisualLang,
  getCellItems,
  getGeneticsItems,
  getOrganItems,
  getPlantItems,
} from "@/lib/biologieVisualContent";
import {
  ANIMAL_CLASSIFICATION,
  FOOD_CHAINS_LOCALIZED,
  LEGACY_VISUAL_UI,
  LIFECYCLES_LOCALIZED,
  NUTRIENT_GROUPS,
  NUTRIENT_MISSIONS,
  ORGAN_MISSIONS,
  ORGAN_SYSTEMS,
  biologieLegacyLang,
  text,
} from "@/lib/biologieLegacyVisualContent";

// ─── HELPERS ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── DATA POOLS ──────────────────────────────────────────────────────────────

const WIRBELTIERE = [
  "Fisch", "Lachs", "Karpfen", "Frosch", "Kröte", "Salamander",
  "Schlange", "Eidechse", "Krokodil", "Schildkröte",
  "Adler", "Taube", "Pinguin", "Storch", "Eule",
  "Hund", "Katze", "Pferd", "Delfin", "Wal", "Reh", "Maus",
];

const WIRBELLOSE = [
  "Spinne", "Biene", "Ameise", "Schmetterling", "Käfer", "Libelle",
  "Heuschrecke", "Wespe", "Fliege", "Mücke",
  "Schnecke", "Tintenfisch", "Oktopus", "Muschel",
  "Regenwurm", "Blutegel",
  "Krabbe", "Hummer", "Seestern", "Qualle",
];

const ORGANS_TO_SYSTEMS = [
  { organ: "Herz",      system: "Kreislaufsystem" },
  { organ: "Lunge",     system: "Atmungssystem" },
  { organ: "Magen",     system: "Verdauungssystem" },
  { organ: "Leber",     system: "Verdauungssystem" },
  { organ: "Dünndarm",  system: "Verdauungssystem" },
  { organ: "Niere",     system: "Ausscheidungssystem" },
  { organ: "Gehirn",    system: "Nervensystem" },
  { organ: "Rückenmark", system: "Nervensystem" },
  { organ: "Skelett",   system: "Bewegungsapparat" },
  { organ: "Muskel",    system: "Bewegungsapparat" },
  { organ: "Haut",      system: "Haut (Schutzorgan)" },
  { organ: "Auge",      system: "Sinnesorgan" },
  { organ: "Ohr",       system: "Sinnesorgan" },
];
const ALL_SYSTEMS = ["Kreislaufsystem", "Atmungssystem", "Verdauungssystem", "Ausscheidungssystem", "Nervensystem", "Bewegungsapparat", "Haut (Schutzorgan)", "Sinnesorgan"];

const FOOD_NUTRIENTS = [
  { item: "Fleisch",       group: "Proteine" },
  { item: "Ei",            group: "Proteine" },
  { item: "Käse",          group: "Proteine" },
  { item: "Joghurt",       group: "Proteine" },
  { item: "Brot",          group: "Kohlenhydrate" },
  { item: "Nudeln",        group: "Kohlenhydrate" },
  { item: "Reis",          group: "Kohlenhydrate" },
  { item: "Kartoffeln",    group: "Kohlenhydrate" },
  { item: "Butter",        group: "Fette" },
  { item: "Öl",            group: "Fette" },
  { item: "Nüsse",         group: "Fette" },
  { item: "Avocado",       group: "Fette" },
  { item: "Apfel",         group: "Vitamine" },
  { item: "Orange",        group: "Vitamine" },
  { item: "Karotte",       group: "Vitamine" },
  { item: "Spinat",        group: "Vitamine" },
  { item: "Milch",         group: "Mineralstoffe" },
  { item: "Brokkoli",      group: "Mineralstoffe" },
  { item: "Banane",        group: "Mineralstoffe" },
];
const ALL_NUTRIENT_GROUPS = ["Proteine", "Kohlenhydrate", "Fette", "Vitamine", "Mineralstoffe"];

const FOOD_CHAINS = [
  { name: "Wald",     chain: ["Gras", "Hase", "Fuchs", "Adler"] },
  { name: "Wiese",    chain: ["Pflanze", "Insekt", "Frosch", "Reiher"] },
  { name: "Meer",     chain: ["Alge", "Kleinfisch", "Großfisch", "Hai"] },
  { name: "Savanne",  chain: ["Gras", "Zebra", "Löwe", "Geier"] },
  { name: "Teich",    chain: ["Alge", "Wasserfloh", "Kleiner Fisch", "Hecht"] },
  { name: "Wüste",    chain: ["Kaktus", "Maus", "Schlange", "Adler"] },
];

const ORGANS_DIAGRAM = [
  { organEmoji: "❤️",  bodyRegion: "Brust links",          organHint: "Pumpt das Blut durch den Körper",     correct: "Herz", svgName: "HerzSvg" },
  { organEmoji: "🫁",  bodyRegion: "Brusthöhle (2×)",       organHint: "Aufnahme von Sauerstoff aus der Luft", correct: "Lunge", svgName: "LungeSvg" },
  { organEmoji: "🧠",  bodyRegion: "Schädel/Kopf",           organHint: "Steuerzentrale des Nervensystems",    correct: "Gehirn" },
  { organEmoji: "🟤",  bodyRegion: "Bauch Mitte",            organHint: "Zerkleinert und verdaut die Nahrung", correct: "Magen" },
  { organEmoji: "🟫",  bodyRegion: "Bauch rechts oben",      organHint: "Reinigt das Blut, produziert Galle",  correct: "Leber" },
  { organEmoji: "🫘",  bodyRegion: "Bauch unten (2×)",       organHint: "Filtert Abfallstoffe aus dem Blut",   correct: "Niere" },
  { organEmoji: "🦷",  bodyRegion: "Mundraum",               organHint: "Zerkaut die Nahrung",                 correct: "Zähne" },
  { organEmoji: "👁️", bodyRegion: "Gesicht (2×)",           organHint: "Nimmt Lichtreize wahr",               correct: "Auge" },
];
const ALL_ORGANS_DIAGRAM = ["Herz", "Lunge", "Gehirn", "Magen", "Leber", "Niere", "Zähne", "Auge", "Ohr", "Nase"];

const PLANT_PARTS = [
  { partEmoji: "🌸", partHint: "Dient der Fortpflanzung, oft bunt gefärbt, zieht Insekten an",   correct: "Blüte", svgName: "BlumeSvg" },
  { partEmoji: "🍃", partHint: "Betreibt Photosynthese, nimmt Kohlendioxid auf",                  correct: "Blatt", svgName: "BlattSvg" },
  { partEmoji: "🌿", partHint: "Verbindet Wurzel und Blätter, leitet Wasser nach oben",            correct: "Stängel", svgName: "BlattSvg" },
  { partEmoji: "🌱", partHint: "Verankert die Pflanze im Boden, saugt Wasser und Nährstoffe",     correct: "Wurzel", svgName: "WurzelSvg" },
  { partEmoji: "🍎", partHint: "Enthält die Samen, entsteht nach der Bestäubung",                 correct: "Frucht" },
  { partEmoji: "🌰", partHint: "Daraus entsteht eine neue Pflanze, enthält den Keimling",         correct: "Samen" },
  { partEmoji: "🌺", partHint: "Äußere Blätter der Blüte, schützen die Blütenknospe",             correct: "Kelchblatt" },
  { partEmoji: "🌻", partHint: "Trägt die Staubgefäße, produziert den Blütenstaub",               correct: "Staubblatt" },
];
const ALL_PLANT_PARTS = ["Blüte", "Blatt", "Stängel", "Wurzel", "Frucht", "Samen", "Kelchblatt", "Staubblatt"];

const CELL_ORGANELLES = [
  { organelleEmoji: "🔵", organelleHint: "Enthält die DNA, steuert alle Zellfunktionen",                 cellType: "beide" as const, correct: "Zellkern" },
  { organelleEmoji: "⚡",  organelleHint: "Kraftwerk der Zelle, produziert ATP-Energie",                  cellType: "beide" as const, correct: "Mitochondrium" },
  { organelleEmoji: "🟡",  organelleHint: "Äußere Hülle der Zelle, regelt den Stoffdurchlass",           cellType: "beide" as const, correct: "Zellmembran" },
  { organelleEmoji: "🟢",  organelleHint: "Baut Proteine zusammen nach Bauplan der DNA",                 cellType: "beide" as const, correct: "Ribosom" },
  { organelleEmoji: "🌿",  organelleHint: "Betreibt Photosynthese, enthält Chlorophyll",                 cellType: "pflanze" as const, correct: "Chloroplast" },
  { organelleEmoji: "💧",  organelleHint: "Speichert Wasser und Nährstoffe, gibt der Zelle Festigkeit",  cellType: "pflanze" as const, correct: "Vakuole" },
  { organelleEmoji: "🔴",  organelleHint: "Transportsystem der Zelle, verarbeitet Proteine",              cellType: "beide" as const, correct: "Endoplasmatisches Retikulum" },
  { organelleEmoji: "🟠",  organelleHint: "Sortiert und verpackt Proteine für den Transport",             cellType: "beide" as const, correct: "Golgi-Apparat" },
];
const ALL_ORGANELLES = ["Zellkern", "Mitochondrium", "Zellmembran", "Ribosom", "Chloroplast", "Vakuole", "Endoplasmatisches Retikulum", "Golgi-Apparat"];

const LIFECYCLE_ORGANISMS = [
  {
    organism: "Frosch",
    stages: ["Ei", "Kaulquappe", "Jungfrosch", "Frosch"],
    emojis: { "Ei": "🥚", "Kaulquappe": "🐟", "Jungfrosch": "🐸", "Frosch": "🐸" },
  },
  {
    organism: "Schmetterling",
    stages: ["Ei", "Raupe", "Puppe", "Schmetterling"],
    emojis: { "Ei": "🥚", "Raupe": "🐛", "Puppe": "🫛", "Schmetterling": "🦋" },
  },
  {
    organism: "Biene",
    stages: ["Ei", "Larve", "Puppe", "Biene"],
    emojis: { "Ei": "🥚", "Larve": "🐛", "Puppe": "🫛", "Biene": "🐝" },
  },
  {
    organism: "Blütenpflanze",
    stages: ["Samen", "Keimling", "Junge Pflanze", "Blütenpflanze"],
    emojis: { "Samen": "🌰", "Keimling": "🌱", "Junge Pflanze": "🌿", "Blütenpflanze": "🌸" },
  },
  {
    organism: "Käfer",
    stages: ["Ei", "Larve", "Puppe", "Käfer"],
    emojis: { "Ei": "🥚", "Larve": "🐛", "Puppe": "🫛", "Käfer": "🪲" },
  },
];

// ─── 1. TIER KLASSIFIZIERUNG BIO ────────────────────────────────────────────

const TIER_KLASSIFIZIERUNG_BIO: VisualQuestionType = {
  type: "tier-klassifizierung-bio",
  label: "Wirbeltier oder Wirbellos? 🦴",
  printLabel: "Wirbeltier / Wirbellos",
  component: TierKlassifizierungBio,
  subtopicIds: [
    "fish", "amphibian", "reptile", "bird", "mammal", "vertebrate_comparison",
    "arthropods", "insects", "spiders", "mollusks", "worm",
  ],
  generate: (count) => {
    const all = shuffle([
      ...WIRBELTIERE.map(a => ({ animal: a, correct: "wirbeltier" as const, question: a })),
      ...WIRBELLOSE.map(a => ({ animal: a, correct: "wirbellos" as const, question: a })),
    ]);
    return all.slice(0, count);
  },
  gradeAnswer: (q, given) => ({ correct: q.correct === given, expected: q.correct }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    animal: q.animal,
    correct: q.correct,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.animal} → ${q.correct === "wirbeltier" ? "🦴 Wirbeltier" : "🐛 Wirbellos"}`,
};

// ─── 2. ORGAN ZUORDNUNG ──────────────────────────────────────────────────────

const ORGAN_ZUORDNUNG: VisualQuestionType = {
  type: "organ-zuordnung",
  label: "Organ → Körpersystem 🫀",
  printLabel: "Organ → Körpersystem",
  component: OrganZuordnung,
  subtopicIds: [
    "body_systems", "skeleton", "muscles", "skin",
    "heart", "circulation", "blood_components", "blood_types",
    "eye", "ear", "nose", "tongue", "skin_sense",
  ],
  generate: (count) => {
    const pool = shuffle(ORGANS_TO_SYSTEMS);
    return pool.slice(0, count).map(pair => {
      const others = ALL_SYSTEMS.filter(s => s !== pair.system);
      const options = shuffle([pair.system, ...shuffle(others).slice(0, 4)]);
      return { organ: pair.organ, options, correctIndex: options.indexOf(pair.system), question: pair.organ };
    });
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    organ: q.organ,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.organ} → ${q.options[q.correctIndex]}`,
};

// ─── 3. ERNÄHRUNGS SORT ──────────────────────────────────────────────────────

const ERNAEHRUNGS_SORT: VisualQuestionType = {
  type: "ernaehrungs-sort",
  label: "Ernährungsgruppen sortieren 🍎",
  printLabel: "Ernährungsgruppen",
  component: ErnährungsSort,
  subtopicIds: ["nutrients", "healthy_diet", "digestive_organs", "digestive_system"],
  generate: (count) => {
    return shuffle(FOOD_NUTRIENTS).slice(0, count).map(item => ({
      item: item.item,
      correct: item.group,
      options: shuffle([...ALL_NUTRIENT_GROUPS]),
      question: item.item,
    }));
  },
  gradeAnswer: (q, given) => ({ correct: given === q.correct, expected: q.correct }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    item: q.item,
    correct: q.correct,
    options: q.options,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.item} → ${q.correct}`,
};

// ─── 4. NAHRUNGSKETTE SORT ───────────────────────────────────────────────────

const NAHRUNGSKETTE_SORT: VisualQuestionType = {
  type: "nahrungskette-sort",
  label: "Nahrungskette aufbauen 🌿→🐛→🐸",
  printLabel: "Nahrungskette sortieren",
  component: NahrungsketteSort,
  subtopicIds: ["food_chain", "forest_layers", "freshwater", "saltwater", "water_organisms", "decomposition", "ecological_niche", "population"],
  generate: (count) => {
    return shuffle(FOOD_CHAINS).slice(0, count).map(fc => ({
      organisms: [...fc.chain],
      correctOrder: fc.chain,
      question: `Nahrungskette ${fc.name}`,
    }));
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.correctOrder.join(',');
    return { correct, expected: q.correctOrder.join(' → ') };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    organisms: q.organisms,
    correctOrder: q.correctOrder,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `Nahrungskette: ${q.correctOrder.join(' → ')}`,
};

// ─── 5. ORGAN DIAGRAM ────────────────────────────────────────────────────────

const ORGAN_DIAGRAM: VisualQuestionType = {
  type: "organ-diagram",
  label: "Organ identifizieren 🫀",
  printLabel: "Organ identifizieren",
  component: OrganDiagram,
  subtopicIds: [
    "skeleton", "muscles", "body_systems", "skin",
    "digestive_system", "digestive_organs",
    "eye", "ear", "nose", "tongue", "skin_sense",
    "heart", "circulation",
  ],
  generate: (count) => {
    return shuffle(ORGANS_DIAGRAM).slice(0, count).map(organ => {
      const others = ALL_ORGANS_DIAGRAM.filter(o => o !== organ.correct);
      const options = shuffle([organ.correct, ...shuffle(others).slice(0, 3)]);
      return {
        organEmoji: organ.organEmoji,
        bodyRegion: organ.bodyRegion,
        organHint: organ.organHint,
        svgName: organ.svgName,
        options,
        correctIndex: options.indexOf(organ.correct),
        question: organ.correct,
      };
    });
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    organEmoji: q.organEmoji,
    bodyRegion: q.bodyRegion,
    organHint: q.organHint,
    svgName: q.svgName,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.organEmoji} ${q.bodyRegion} → ${q.options[q.correctIndex]}`,
};

// ─── 6. PFLANZEN ANATOMIE ────────────────────────────────────────────────────

const PFLANZEN_ANATOMIE: VisualQuestionType = {
  type: "pflanzen-anatomie",
  label: "Pflanzenteil bestimmen 🌸",
  printLabel: "Pflanzenteil bestimmen",
  component: PflanzenAnatomie,
  subtopicIds: ["plant_parts", "flower_structure", "plant_reproduction", "plant_types", "photosynthesis", "photosynthesis_detail"],
  generate: (count) => {
    return shuffle(PLANT_PARTS).slice(0, count).map(part => {
      const others = ALL_PLANT_PARTS.filter(p => p !== part.correct);
      const options = shuffle([part.correct, ...shuffle(others).slice(0, 4)]);
      return {
        partEmoji: part.partEmoji,
        partHint: part.partHint,
        svgName: part.svgName,
        options,
        correctIndex: options.indexOf(part.correct),
        question: part.correct,
      };
    });
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    partEmoji: q.partEmoji,
    partHint: q.partHint,
    svgName: q.svgName,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.partEmoji} ${q.partHint.substring(0, 40)}... → ${q.options[q.correctIndex]}`,
};

// ─── 7. ZELL DIAGRAM ─────────────────────────────────────────────────────────

const ZELL_DIAGRAM: VisualQuestionType = {
  type: "zell-diagram",
  label: "Zellorganell bestimmen 🔬",
  printLabel: "Zellorganell bestimmen",
  component: ZellDiagram,
  subtopicIds: [
    "cell_structure", "cell_organelles", "cell_division", "cell_cycle",
    "photosynthesis_detail", "cellular_respiration", "energy_transfer",
  ],
  generate: (count) => {
    return shuffle(CELL_ORGANELLES).slice(0, count).map(org => {
      const others = ALL_ORGANELLES.filter(o => o !== org.correct);
      const options = shuffle([org.correct, ...shuffle(others).slice(0, 3)]);
      return {
        organelleEmoji: org.organelleEmoji,
        organelleHint: org.organelleHint,
        cellType: org.cellType,
        options,
        correctIndex: options.indexOf(org.correct),
        question: org.correct,
      };
    });
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    organelleEmoji: q.organelleEmoji,
    organelleHint: q.organelleHint,
    cellType: q.cellType,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.organelleEmoji} ${q.organelleHint.substring(0, 40)}... → ${q.options[q.correctIndex]}`,
};

// ─── 8. LEBENSZYKLUS TIMELINE ────────────────────────────────────────────────

const LEBENSZYKLUS_TIMELINE: VisualQuestionType = {
  type: "lebenszyklus-timeline",
  label: "Lebenszyklus ordnen 🦋",
  printLabel: "Lebenszyklus Reihenfolge",
  component: LebenszyklusTimeline,
  subtopicIds: [
    "amphibian", "insects", "plant_reproduction", "arthropods",
    "cell_division", "cell_cycle",
  ],
  generate: (count) => {
    return shuffle(LIFECYCLE_ORGANISMS).slice(0, count).map(lc => ({
      organism: lc.organism,
      stages: [...lc.stages],
      stageEmojis: lc.emojis,
      correctOrder: lc.stages,
      question: lc.organism,
    }));
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.correctOrder.join(',');
    return { correct, expected: q.correctOrder.join(' → ') };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    organism: q.organism,
    stages: q.stages,
    stageEmojis: q.stageEmojis,
    correctOrder: q.correctOrder,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.organism}: ${q.correctOrder.join(' → ')}`,
};


// ─── 9. DNA EVOLUTION ERKENNEN (K8) ──────────────────────────────────────────

const DNA_EVOLUTION_DATA = [
  { svgName: "DNAHelixSvg", correct: "DNA", options: ["DNA", "RNA", "Chromosom", "Zelle"] },
  { svgName: "EvolutionSvg", correct: "Evolution", options: ["Evolution", "Wachstum", "Metamorphose", "Zellteilung"] },
  { svgName: "PunnettQuadratSvg", correct: "Vererbung", options: ["Vererbung", "Fotosynthese", "Verdauung", "Zellatmung"] }
];

const DNA_EVOLUTION_ERKENNEN: VisualQuestionType = {
  type: "dna-evolution-erkennen",
  label: "Genetik & Evolution 🧬",
  printLabel: "Genetik & Evolution erkennen",
  component: DnaEvolutionErkennen,
  subtopicIds: ["genetics", "evolution", "dna", "mendel", "genetics_mendel", "evolution_basics", "genetics_traits"],
  generate: (count) => {
    return shuffle(DNA_EVOLUTION_DATA).slice(0, count).map(item => {
      const shuffledOptions = shuffle(item.options);
      return {
        svgName: item.svgName,
        options: shuffledOptions,
        correctIndex: shuffledOptions.indexOf(item.correct),
        question: item.correct,
      };
    });
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    svgName: q.svgName,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `Symbol: ${q.svgName} → ${q.options[q.correctIndex]}`,
};

// ─── EXPORT ──────────────────────────────────────────────────────────────────


export const BIOLOGIE_VISUAL_TYPES: VisualQuestionType[] = getLocalizedBiologieVisualTypes("de");

type DiagramFamily = "organ" | "plant" | "cell" | "genetics";
type DiagramItem = {
  id: string;
  prompt: string;
  hint: string;
  options: string[];
  answer: string;
};

function buildDiagramType(
  type: string,
  label: string,
  family: DiagramFamily,
  subtopicIds: string[],
  items: DiagramItem[],
  lang: string,
): VisualQuestionType {
  return {
    type,
    label,
    printLabel: label,
    component: BiologyDiagramQuestion,
    subtopicIds,
    generate: count => shuffle(items).slice(0, Math.min(count, items.length)).map(item => {
      const distractors = shuffle(item.options.filter(option => option !== item.answer)).slice(0, 3);
      const options = shuffle([item.answer, ...distractors]);
      return {
        question: item.prompt,
        prompt: item.prompt,
        hint: item.hint,
        diagramId: item.id,
        family,
        printSvg: biologyDiagramSvgMarkup(family, item.id, `${item.prompt} ${item.answer}`),
        options,
        correctIndex: options.indexOf(item.answer),
        lang,
      };
    }),
    gradeAnswer: (question, given) => {
      const expected = question.options[question.correctIndex];
      return { correct: given === expected, expected };
    },
    mapProps: (question, userAnswer, submitted, onAnswer) => ({
      family,
      prompt: question.prompt,
      hint: question.hint,
      diagramId: question.diagramId,
      options: question.options,
      correctIndex: question.correctIndex,
      userAnswer,
      submitted,
      onAnswer,
      lang: question.lang,
    }),
    renderPrint: question => `${question.prompt} ${question.hint}`,
  };
}

export function getLocalizedBiologieDiagramTypes(lang?: string): VisualQuestionType[] {
  const activeLang = biologieVisualLang(lang);
  const labels = BIOLOGIE_VISUAL_TYPE_LABELS[activeLang];
  return [
    buildDiagramType(
      "organ-diagram",
      labels[0],
      "organ",
      ["skeleton", "muscles", "body_systems", "skin", "digestive_system", "digestive_organs", "eye", "ear", "nose", "tongue", "skin_sense", "heart", "circulation"],
      getOrganItems(activeLang),
      activeLang,
    ),
    buildDiagramType(
      "pflanzen-anatomie",
      labels[1],
      "plant",
      ["plant_parts", "flower_structure", "plant_reproduction", "plant_types", "photosynthesis", "photosynthesis_detail"],
      getPlantItems(activeLang),
      activeLang,
    ),
    buildDiagramType(
      "zell-diagram",
      labels[2],
      "cell",
      ["cell_structure", "cell_organelles", "cell_division", "cell_cycle", "photosynthesis_detail", "cellular_respiration", "energy_transfer"],
      getCellItems(activeLang),
      activeLang,
    ),
    buildDiagramType(
      "dna-evolution-erkennen",
      labels[3],
      "genetics",
      ["genetics", "evolution", "dna", "mendel", "genetics_mendel", "evolution_basics", "genetics_traits"],
      getGeneticsItems(activeLang),
      activeLang,
    ),
  ];
}

function missionProps(
  question: any,
  userAnswer: string,
  submitted: boolean,
  onAnswer: (answer: string) => void,
) {
  return {
    ...question,
    userAnswer,
    submitted,
    onAnswer,
  };
}

function getLocalizedBiologieLegacyTypes(lang?: string): VisualQuestionType[] {
  const activeLang = biologieLegacyLang(lang);
  const ui = LEGACY_VISUAL_UI[activeLang];
  const common = {
    correctLabel: ui.correct,
    solutionLabel: ui.solution,
    resetLabel: ui.reset,
  };

  const animalType: VisualQuestionType = {
    type: "tier-klassifizierung-bio",
    label: `🧭 ${ui.classificationLabel}`,
    printLabel: ui.classificationLabel,
    component: BiologyLegacyMission,
    subtopicIds: ["fish", "amphibian", "reptile", "bird", "mammal", "vertebrate_comparison", "arthropods", "insects", "spiders", "mollusks", "worm"],
    generate: count => shuffle([...ANIMAL_CLASSIFICATION]).slice(0, count).map(item => {
      const correctAnswer = item.kind === "vertebrate" ? ui.vertebrate : ui.invertebrate;
      return {
        mode: "choice",
        badge: item.kind === "vertebrate" ? "🦴" : "🪲",
        prompt: ui.classificationPrompt,
        title: text(item.name, activeLang),
        clue: text(item.clue, activeLang),
        clueLabel: ui.evidence,
        options: shuffle([ui.vertebrate, ui.invertebrate]),
        correctAnswer,
        question: `${ui.classificationPrompt} ${text(item.name, activeLang)}`,
        missionId: item.id,
        ...common,
      };
    }),
    gradeAnswer: (question, given) => ({ correct: given === question.correctAnswer, expected: question.correctAnswer }),
    mapProps: missionProps,
    renderPrint: question => `${question.title}: ${question.correctAnswer} (${question.clue})`,
  };

  const systemKeys = Object.keys(ORGAN_SYSTEMS) as Array<keyof typeof ORGAN_SYSTEMS>;
  const organType: VisualQuestionType = {
    type: "organ-zuordnung",
    label: `🫀 ${ui.organLabel}`,
    printLabel: ui.organLabel,
    component: BiologyLegacyMission,
    subtopicIds: ["body_systems", "skeleton", "muscles", "skin", "heart", "circulation", "blood_components", "blood_types", "eye", "ear", "nose", "tongue", "skin_sense"],
    generate: count => shuffle([...ORGAN_MISSIONS]).slice(0, count).map(item => {
      const systemKey = item.system as keyof typeof ORGAN_SYSTEMS;
      const correctAnswer = text(ORGAN_SYSTEMS[systemKey], activeLang);
      const distractors = shuffle(systemKeys.filter(key => key !== systemKey)).slice(0, 3);
      return {
        mode: "choice",
        badge: "🫀",
        prompt: ui.organPrompt,
        title: text(item.name, activeLang),
        clue: text(item.clue, activeLang),
        clueLabel: ui.function,
        options: shuffle([correctAnswer, ...distractors.map(key => text(ORGAN_SYSTEMS[key], activeLang))]),
        correctAnswer,
        question: `${ui.organPrompt} ${text(item.name, activeLang)}`,
        missionId: item.id,
        ...common,
      };
    }),
    gradeAnswer: (question, given) => ({ correct: given === question.correctAnswer, expected: question.correctAnswer }),
    mapProps: missionProps,
    renderPrint: question => `${question.title}: ${question.correctAnswer} (${question.clue})`,
  };

  const nutrientKeys = Object.keys(NUTRIENT_GROUPS) as Array<keyof typeof NUTRIENT_GROUPS>;
  const nutrientType: VisualQuestionType = {
    type: "ernaehrungs-sort",
    label: `🥗 ${ui.nutritionLabel}`,
    printLabel: ui.nutritionLabel,
    component: BiologyLegacyMission,
    subtopicIds: ["nutrients", "healthy_diet", "digestive_organs", "digestive_system"],
    generate: count => shuffle([...NUTRIENT_MISSIONS]).slice(0, count).map(item => {
      const groupKey = item.group as keyof typeof NUTRIENT_GROUPS;
      const correctAnswer = text(NUTRIENT_GROUPS[groupKey], activeLang);
      return {
        mode: "choice",
        badge: "🥗",
        prompt: ui.nutritionPrompt,
        title: text(item.name, activeLang),
        clue: `${text(item.clue, activeLang)} ${ui.nutritionHint}`,
        clueLabel: ui.evidence,
        options: shuffle(nutrientKeys.map(key => text(NUTRIENT_GROUPS[key], activeLang))),
        correctAnswer,
        question: `${ui.nutritionPrompt} ${text(item.name, activeLang)}`,
        missionId: item.id,
        ...common,
      };
    }),
    gradeAnswer: (question, given) => ({ correct: given === question.correctAnswer, expected: question.correctAnswer }),
    mapProps: missionProps,
    renderPrint: question => `${question.title}: ${question.correctAnswer} (${question.clue})`,
  };

  const foodChainType: VisualQuestionType = {
    type: "nahrungskette-sort",
    label: `🌿 ${ui.foodChainLabel}`,
    printLabel: ui.foodChainLabel,
    component: BiologyLegacyMission,
    subtopicIds: ["food_chain", "forest_layers", "freshwater", "saltwater", "water_organisms", "decomposition", "ecological_niche", "population"],
    generate: count => shuffle([...FOOD_CHAINS_LOCALIZED]).slice(0, count).map(chain => {
      const correctOrder = chain.stages.map(stage => text(stage, activeLang));
      return {
        mode: "order",
        badge: "🌿",
        prompt: ui.foodChainPrompt,
        title: text(chain.habitat, activeLang),
        items: correctOrder,
        correctOrder,
        emptyText: ui.tapOrder,
        sequenceLabel: ui.chain,
        question: `${ui.foodChainPrompt} ${text(chain.habitat, activeLang)}`,
        missionId: chain.id,
        ...common,
      };
    }),
    gradeAnswer: (question, given) => ({ correct: given === question.correctOrder.join("|"), expected: question.correctOrder.join(" → ") }),
    mapProps: missionProps,
    renderPrint: question => `${question.title}: ${question.correctOrder.join(" → ")}`,
  };

  const lifecycleType: VisualQuestionType = {
    type: "lebenszyklus-timeline",
    label: `🦋 ${ui.lifecycleLabel}`,
    printLabel: ui.lifecycleLabel,
    component: BiologyLegacyMission,
    subtopicIds: ["amphibian", "insects", "plant_reproduction", "arthropods", "cell_division", "cell_cycle"],
    generate: count => shuffle([...LIFECYCLES_LOCALIZED]).slice(0, count).map(cycle => {
      const correctOrder = cycle.stages.map(stage => text(stage, activeLang));
      const itemEmojis = Object.fromEntries(correctOrder.map((stage, index) => [stage, cycle.emojis[index]]));
      return {
        mode: "order",
        badge: "🦋",
        prompt: ui.lifecyclePrompt,
        title: text(cycle.organism, activeLang),
        items: correctOrder,
        itemEmojis,
        correctOrder,
        emptyText: ui.tapStages,
        sequenceLabel: ui.sequence,
        question: `${ui.lifecyclePrompt} ${text(cycle.organism, activeLang)}`,
        missionId: cycle.id,
        ...common,
      };
    }),
    gradeAnswer: (question, given) => ({ correct: given === question.correctOrder.join("|"), expected: question.correctOrder.join(" → ") }),
    mapProps: missionProps,
    renderPrint: question => `${question.title}: ${question.correctOrder.join(" → ")}`,
  };

  return [animalType, organType, nutrientType, foodChainType, lifecycleType];
}

export function getLocalizedBiologieVisualTypes(lang?: string): VisualQuestionType[] {
  const diagrams = getLocalizedBiologieDiagramTypes(lang);
  const legacy = getLocalizedBiologieLegacyTypes(lang);
  return [
    legacy[0],
    legacy[1],
    legacy[2],
    legacy[3],
    diagrams[0],
    diagrams[1],
    diagrams[2],
    legacy[4],
    diagrams[3],
  ];
}
