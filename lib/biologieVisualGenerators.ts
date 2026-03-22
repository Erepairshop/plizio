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
  { organEmoji: "❤️",  bodyRegion: "Brust links",          organHint: "Pumpt das Blut durch den Körper",     correct: "Herz" },
  { organEmoji: "🫁",  bodyRegion: "Brusthöhle (2×)",       organHint: "Aufnahme von Sauerstoff aus der Luft", correct: "Lunge" },
  { organEmoji: "🧠",  bodyRegion: "Schädel/Kopf",           organHint: "Steuerzentrale des Nervensystems",    correct: "Gehirn" },
  { organEmoji: "🟤",  bodyRegion: "Bauch Mitte",            organHint: "Zerkleinert und verdaut die Nahrung", correct: "Magen" },
  { organEmoji: "🟫",  bodyRegion: "Bauch rechts oben",      organHint: "Reinigt das Blut, produziert Galle",  correct: "Leber" },
  { organEmoji: "🫘",  bodyRegion: "Bauch unten (2×)",       organHint: "Filtert Abfallstoffe aus dem Blut",   correct: "Niere" },
  { organEmoji: "🦷",  bodyRegion: "Mundraum",               organHint: "Zerkaut die Nahrung",                 correct: "Zähne" },
  { organEmoji: "👁️", bodyRegion: "Gesicht (2×)",           organHint: "Nimmt Lichtreize wahr",               correct: "Auge" },
];
const ALL_ORGANS_DIAGRAM = ["Herz", "Lunge", "Gehirn", "Magen", "Leber", "Niere", "Zähne", "Auge", "Ohr", "Nase"];

const PLANT_PARTS = [
  { partEmoji: "🌸", partHint: "Dient der Fortpflanzung, oft bunt gefärbt, zieht Insekten an",   correct: "Blüte" },
  { partEmoji: "🍃", partHint: "Betreibt Photosynthese, nimmt Kohlendioxid auf",                  correct: "Blatt" },
  { partEmoji: "🌿", partHint: "Verbindet Wurzel und Blätter, leitet Wasser nach oben",            correct: "Stängel" },
  { partEmoji: "🌱", partHint: "Verankert die Pflanze im Boden, saugt Wasser und Nährstoffe",     correct: "Wurzel" },
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

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const BIOLOGIE_VISUAL_TYPES: VisualQuestionType[] = [
  TIER_KLASSIFIZIERUNG_BIO,
  ORGAN_ZUORDNUNG,
  ERNAEHRUNGS_SORT,
  NAHRUNGSKETTE_SORT,
  ORGAN_DIAGRAM,
  PFLANZEN_ANATOMIE,
  ZELL_DIAGRAM,
  LEBENSZYKLUS_TIMELINE,
];
