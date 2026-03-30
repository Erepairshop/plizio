// lib/astromath.ts
// AstroMath — G1 island system definitions, progress management, question helpers

import { generateTopicQuestions, type MathQuestion } from "./mathCurriculum";

// ─── Types ────────────────────────────────────────────────────────────────────

export type GameType = "orbit-quiz" | "star-match" | "gravity-sort" | "black-hole" | "number-duel"
  | "speed-round" | "fraction-visual" | "equation-drill" | "concept-explorer"
  | "place-value-explorer" | "division-explorer" | "area-explorer"
  | "word-problem-explorer" | "unit-explorer" | "angle-explorer"
  | "true-false-blitz" | "chain-calc" | "missing-number" | "decimal-explorer"
  | "g2-teaching"
  | "negative-number-line" | "percent-bar"
  | "ratio-explorer" | "algebra-explorer" | "stat-explorer"
  | "counting-explorer" | "addsub-explorer" | "subtraction-explorer" | "double-half-explorer"
  | "place-value-20" | "word-problem-intro" | "shapes-explorer"
  | "clock-coins-explorer" | "pattern-explorer"
  | "place-value-100" | "mental-math-explorer" | "column-addsub"
  | "carry-borrow" | "multiplication-explorer" | "division-intro"
  | "g2-measurement"
  | "power-explorer" | "equation-explorer" | "inequality-explorer"
  | "triangle-explorer" | "pythagoras-explorer" | "circle-explorer"
  | "sqrt-explorer" | "quadratic-explorer" | "system-explorer"
  | "function-explorer" | "probability-explorer" | "transform-explorer"
  | "visual-challenge"
  | "letter-explorer" | "syllable-explorer" | "article-explorer" | "rhyme-explorer"
  | "sentence-explorer" | "picture-word-explorer" | "compound-word-explorer"
  | "reading-explorer" | "review-explorer"
  | "word-blitz" | "spell-race" | "sentence-scramble" | "gap-fill" | "category-rush"
  | "deutsch-visual"
  | "noun-explorer" | "verb-explorer" | "adjective-explorer" | "sentence-type-explorer"
  | "capitalization-explorer" | "spelling-rule-explorer" | "spelling-explorer-2" | "spelling-explorer"
  | "word-field-explorer"
  | "plural-family-explorer" | "separable-verb-explorer" | "comparison-explorer"
  | "sentence-parts-explorer" | "tense-timeline-explorer" | "past-speech-explorer"
  | "spelling-k3-explorer" | "punctuation-explorer"
  | "kasus-explorer" | "kasus2-explorer" | "tense-explorer-k4" | "eset-explorer"
  | "word-class-explorer-k4" | "sentence-part-explorer-k4" | "clause-explorer"
  | "verb-explorer-k4" | "spelling-explorer-k4" | "review-explorer-k4"
  | "adjective-comparison-explorer" | "preposition-case-explorer" | "pronoun-explorer-k5"
  | "punctuation-explorer-k5" | "sentence-analysis-explorer"
  | "participle-explorer" | "passive-explorer" | "review-explorer-k5" | "spelling-word-explorer"
  | "voice-transform-explorer" | "wish-machine-explorer" | "infinitiv-builder-explorer"
  | "word-net-explorer" | "clause-connector-explorer" | "word-build-explorer"
  | "review-explorer-k6"
  | "speech-transform-explorer" | "style-device-explorer" | "review-explorer-k7"
  | "review-explorer-k8" | "literature-epoch-explorer" | "characterization-explorer"
  | "fraction-explorer-5"
  | "review-explorer-hu"
  | "word-sort" | "sentence-builder" | "fill-gap" | "grammar-match" | "spell-race" | "category-rush"
  | "lang-explore"
  | "body-explorer" | "animal-explorer" | "nature-explorer"
  | "weather-explorer" | "family-explorer" | "traffic-explorer"
  | "recycling-explorer" | "nature-review-explorer" | "sachkunde-review-explorer"
  | "fish-explorer" | "reptile-explorer" | "mammal-explorer" | "plant-explorer" | "flower-explorer"
  | "skeleton-explorer" | "bodysystem-explorer" | "sense-explorer" | "nutrition-explorer"
  | "arthropod-explorer" | "mollusk-explorer" | "forest-explorer" | "water-explorer"
  | "heart-explorer" | "circulation-explorer" | "respiration-explorer" | "puberty-explorer"
  | "cell-explorer" | "division-explorer" | "photosynthesis-explorer" | "ecology-explorer" | "immune-explorer" | "nerve-explorer" | "evolution-explorer"
  | "dna-explorer" | "mutation-explorer" | "hormone-explorer" | "reproduction-explorer" | "biotech-explorer" | "systems-explorer" | "popgen-explorer" | "phylogeny-explorer"
  | "k2-healthy-body-explorer" | "k2-habitat-explorer" | "k2-wild-animal-explorer" | "k2-plant-explorer" | "k2-water-explorer"
  | "k2-jobs-explorer" | "k2-safety-explorer" | "k2-science-explorer" | "k2-grand-review-explorer"
  | "k3-body-systems-explorer" | "k3-animal-kingdom-explorer" | "k3-forest-life-explorer" | "k3-pollination-explorer" | "k3-weather-climate-explorer"
  | "k3-geography-explorer" | "k3-tech-machines-explorer" | "k3-community-town-explorer" | "k3-environment-explorer"
  | "k4-human-body-explorer" | "k4-mammals-birds-explorer" | "k4-reptiles-insects-explorer" | "k4-ecosystem-explorer" | "k4-weather-climate-explorer"
  | "k4-earth-water-explorer" | "k4-energy-explorer" | "k4-maps-explorer" | "k4-grand-finale-explorer"
  | "k5-adjective-comparison-explorer" | "k5-pronoun-explorer" | "k5-preposition-explorer"
  | "k5-sentence-analysis-explorer" | "k5-punctuation-explorer" | "k5-participle-explorer"
  | "k5-passive-explorer" | "k5-spelling-vocab-explorer" | "k5-review-explorer"
  | "k6-active-passive-explorer" | "k6-konjunktiv-ii-explorer" | "k6-infinitiv-zu-explorer"
  | "k6-synonym-antonym-explorer" | "k6-fremdwoerter-explorer" | "k6-relativsatz-kausalsatz-explorer"
  | "k6-wortbildung-explorer" | "k6-punctuation-explorer" | "k6-review-explorer"
  | "k7-konjunktiv-i-explorer" | "k7-werden-passive-explorer" | "k7-passiv-modal-explorer"
  | "k7-stilmittel-explorer" | "k7-kausal-konditional-explorer" | "k7-konzessiv-final-explorer"
  | "k7-temporalsatz-explorer" | "k7-infinitiv-construction-explorer" | "k7-review-explorer"
  | "old-hungarian-explorer" | "style-devices-explorer" | "text-analysis-explorer"
  | "spelling-summary-explorer" | "language-norm-explorer" | "scientific-text-explorer"
  | "debate-culture-explorer" | "comprehensive-test-explorer" | "grand-final-explorer"
  | "phonetics-explorer-o5" | "textscience-explorer-o5" | "stylebasics-explorer-o5"
  | "o5spelling-explorer" | "literature-explorer-o5" | "revieo5-explorer"
  | "memory-pair" | "picture-word" | "reading-comp"
  | "o6-compound-sentence-explorer" | "o6-stylistic-figures-explorer" | "o6-advanced-vocab-explorer"
  | "o6-language-history-explorer" | "o6-rhetoric-explorer" | "o6-text-comp-explorer"
  | "o6-spelling-master-explorer" | "o6-composition-explorer" | "o6-review-explorer"
  | "o7-language-history-explorer" | "o7-advanced-rhetoric-explorer" | "o7-advanced-stylistics-explorer"
  | "o7-language-variants-explorer" | "o7-text-composition-explorer" | "o7-advanced-syntax-explorer"
  | "o7-communication-explorer" | "o7-media-language-explorer" | "o7-review-explorer"
  | "verb-conjugation-explorer" | "pronouns-o4-explorer" | "adverbials-explorer"
  | "complex-sentences-explorer" | "word-formation-o4-explorer" | "spelling-mastery-explorer"
  | "composition-o4-explorer" | "grammar-review-explorer" | "review-o4-explorer"
  | "o2-word-types-explorer" | "o2-reading-explorer" | "o2-spelling-explorer" | "o2-grammar-explorer"
  | "o2-compound-words-explorer" | "o2-conjugation-explorer" | "o2-synonyms-explorer" | "o2-vocabulary-explorer" | "o2-review-explorer"
  | "o3-verb-tenses-explorer" | "o3-noun-declension-explorer" | "o3-compound-words-explorer"
  | "o3-text-comp-explorer" | "o3-idioms-explorer" | "o3-spelling-explorer"
  | "o3-composition-explorer" | "o3-sentence-analysis-explorer" | "o3-review-explorer"
  | "o4-verb-conjugation-explorer" | "o4-pronouns-explorer" | "o4-adverbials-explorer"
  | "o4-complex-sentences-explorer" | "o4-word-formation-explorer" | "o4-spelling-mastery-explorer"
  | "o4-composition-explorer" | "o4-grammar-review-explorer" | "o4-review-explorer"
  | "en2-noun-explorer" | "en2-verb-explorer" | "en2-adjective-explorer" | "en2-sentence-explorer"
  | "bio-explore"
  | "en2-vowel-explorer" | "en2-prefix-explorer" | "en2-meaning-explorer" | "en2-grammar-review-explorer" | "en2-big-test-explorer"
  | "en3-plural-explorer" | "en3-tense-explorer" | "en3-adverb-explorer" | "en3-subject-explorer"
  | "en3-quotation-explorer" | "en3-prefix-k3-explorer" | "en3-word-family-explorer" | "en3-vocab-explorer" | "en3-big-test-explorer"
  | "en4-pronoun-explorer" | "en4-modal-explorer" | "en4-adjective-k4-explorer" | "en4-sentence-k4-explorer"
  | "en4-speech-explorer" | "en4-capital-explorer" | "en4-synonym-explorer" | "en4-context-explorer" | "en4-big-test-explorer"
  | "en5-conjunction-explorer" | "en5-interjection-explorer" | "en5-tense-k5-explorer" | "en5-sentence-k5-explorer"
  | "en5-punctuation-k5-explorer" | "en5-spelling-k5-explorer" | "en5-root-word-explorer" | "en5-figurative-explorer" | "en5-academic-explorer"
  | "en6-pronoun-k6-explorer" | "en6-pronoun-precision-explorer" | "en6-sentence-structure-explorer" | "en6-complex-clause-explorer"
  | "en6-word-builder-explorer" | "en6-vocabulary-explorer" | "en6-academic-k6-explorer" | "en6-punctuation-k6-explorer" | "en6-rhetoric-explorer"
  | "en7-grammar-explorer" | "en7-sentence-explorer" | "en7-tense-voice-explorer" | "en7-punctuation-explorer"
  | "en7-figurative-explorer" | "en7-academic-explorer" | "en7-argument-explorer" | "en7-clause-explorer" | "en7-verbal-explorer"
  | "en8-verbal-explorer" | "en8-phrase-explorer" | "en8-voice-mood-explorer" | "en8-writing-explorer"
  | "en8-literature-explorer" | "en8-style-explorer" | "en8-register-explorer" | "en8-punctuation-explorer" | "en8-etymology-explorer"
  | "pk5-forces-explorer" | "pk5-gravity-explorer" | "pk5-measurement-explorer" | "pk5-energy-explorer" | "pk5-conversion-explorer"
  | "pk5-heat-explorer" | "pk5-light-explorer" | "pk5-sound-explorer" | "pk5-magnetism-explorer" | "pk5-explorer"
  | "pk6-machines-explorer" | "pk6-wheel-explorer" | "pk6-pressure-explorer" | "pk6-hydraulics-explorer" | "pk6-circuits-explorer"
  | "pk6-current-explorer" | "pk6-density-explorer" | "pk6-energytransfer-explorer" | "pk6-waves-explorer" | "pk6-explorer"
  | "pk7-speed-explorer" | "pk7-newton-explorer" | "pk7-work-explorer" | "pk7-energycalc-explorer" | "pk7-lenses-explorer"
  | "pk7-eye-explorer" | "pk7-thermo-explorer" | "pk7-waves-explorer" | "pk7-space-explorer" | "pk7-explorer"
  | "pk8-ohm-explorer" | "pk8-power-explorer" | "pk8-semiconductor-explorer" | "pk8-electromagnetic-explorer" | "pk8-generators-explorer"
  | "pk8-atomic-explorer" | "pk8-nuclear-explorer" | "pk8-modern-explorer" | "pk8-environment-explorer" | "pk8-explorer"
  | "symbiosis-explorer"
  | "sexdetermination-explorer" | "biosystems-explorer"
  | "fraction-pro-explorer" | "grand-final-explorer"
  | "k5-adjective-comparison-explorer" | "k5-pronoun-explorer" | "k5-preposition-explorer"
  | "k5-sentence-analysis-explorer" | "k5-participle-explorer" | "k5-passive-explorer"
  | "k5-punctuation-explorer" | "k5-review-explorer" | "k5-spelling-vocab-explorer"
  | "k6-active-passive-explorer" | "k6-konjunktiv-ii-explorer" | "k6-infinitiv-zu-explorer"
  | "k6-synonym-antonym-explorer" | "k6-fremdwoerter-explorer" | "k6-relativsatz-kausalsatz-explorer"
  | "k6-wortbildung-explorer" | "k6-punctuation-explorer" | "k6-review-explorer"
  | "k7-konjunktiv-i-explorer" | "k7-werden-passive-explorer" | "k7-passiv-modal-explorer"
  | "k7-stilmittel-explorer" | "k7-kausal-konditional-explorer" | "k7-konzessiv-final-explorer"
  | "k7-temporalsatz-explorer" | "k7-infinitiv-construction-explorer" | "k7-review-explorer"
  | "literature-epoch-explorer" | "characterization-explorer" | "fraction-explorer-5"
  | "en2-adjective-explorer" | "en2-big-test-explorer" | "en2-grammar-review-explorer"
  | "en2-meaning-explorer" | "en2-noun-explorer" | "en2-prefix-explorer"
  | "en2-sentence-explorer" | "en2-verb-explorer" | "en2-vowel-explorer"
  | "en3-adverb-explorer" | "en3-big-test-explorer" | "en3-plural-explorer"
  | "en3-prefix-k3-explorer" | "en3-quotation-explorer" | "en3-subject-explorer"
  | "en3-tense-explorer" | "en3-vocab-explorer" | "en3-word-family-explorer"
  | "en4-adjective-k4-explorer" | "en4-big-test-explorer" | "en4-capital-explorer"
  | "en4-context-explorer" | "en4-modal-explorer" | "en4-pronoun-explorer"
  | "en4-sentence-k4-explorer" | "en4-speech-explorer" | "en4-synonym-explorer"
  | "en5-academic-explorer" | "en5-conjunction-explorer" | "en5-figurative-explorer"
  | "en5-interjection-explorer" | "en5-punctuation-k5-explorer" | "en5-root-word-explorer"
  | "en5-sentence-k5-explorer" | "en5-spelling-k5-explorer" | "en5-tense-k5-explorer"
  | "en6-academic-k6-explorer" | "en6-complex-clause-explorer" | "en6-pronoun-k6-explorer"
  | "en6-pronoun-precision-explorer" | "en6-punctuation-k6-explorer" | "en6-rhetoric-explorer"
  | "en6-sentence-structure-explorer" | "en6-vocabulary-explorer" | "en6-word-builder-explorer"
  | "en7-academic-explorer" | "en7-argument-explorer" | "en7-clause-explorer"
  | "en7-figurative-explorer" | "en7-grammar-explorer" | "en7-punctuation-explorer"
  | "en7-sentence-explorer" | "en7-tense-voice-explorer" | "en7-verbal-explorer"
  | "en8-etymology-explorer" | "en8-literature-explorer" | "en8-phrase-explorer"
  | "en8-punctuation-explorer" | "en8-register-explorer" | "en8-style-explorer"
  | "en8-verbal-explorer" | "en8-voice-mood-explorer" | "en8-writing-explorer"
  | "o2-compound-words-explorer" | "o2-conjugation-explorer" | "o2-grammar-explorer"
  | "o2-reading-explorer" | "o2-review-explorer" | "o2-spelling-explorer"
  | "o2-synonyms-explorer" | "o2-vocabulary-explorer" | "o2-word-types-explorer"
  | "o3-composition-explorer" | "o3-compound-words-explorer" | "o3-idioms-explorer"
  | "o3-noun-declension-explorer" | "o3-review-explorer" | "o3-sentence-analysis-explorer"
  | "o3-spelling-explorer" | "o3-text-comp-explorer" | "o3-verb-tenses-explorer"
  | "o4-adverbials-explorer" | "o4-complex-sentences-explorer" | "o4-composition-explorer"
  | "o4-grammar-review-explorer" | "o4-pronouns-explorer" | "o4-review-explorer"
  | "o4-spelling-mastery-explorer" | "o4-verb-conjugation-explorer" | "o4-word-formation-explorer"
  | "o5spelling-explorer" | "old-hungarian-explorer" | "phonetics-explorer-o5"
  | "literature-explorer-o5" | "revieo5-explorer" | "stylebasics-explorer-o5"
  | "textscience-explorer-o5" | "comprehensive-test-explorer"
  | "debate-culture-explorer" | "language-norm-explorer" | "scientific-text-explorer"
  | "spelling-summary-explorer" | "style-devices-explorer" | "text-analysis-explorer"
  | "phonics-island" | "letter-land" | "word-world" | "sentence-shore" | "reading-comp"
  | "grammar-gulf" | "story-summit" | "blend-bay" | "compound-cape" | "action-cove"
  | "picture-word" | "memory-pair"
  | "deutsch-explore"
  | "sachkunde-k1-explore" | "sachkunde-k2-explore" | "sachkunde-k3-explore" | "sachkunde-k4-explore"
  | "bio-explore"
  | "romana-explore";
export type Lang = "en" | "hu" | "de" | "ro";

export interface L10n { en: string; hu: string; de: string; ro: string }

export type MissionCategory = "explore" | "build" | "challenge";

export interface MissionDef {
  id: string;     // "m1" | "m2" | "m3"
  gameType: GameType;
  label: L10n;
  icon: string;
  category?: MissionCategory;
  visualType?: string;  // for "visual-challenge" gameType — which visual component to render
}

export interface IslandDef {
  id: string;           // "i1" … "i9"
  name: L10n;
  icon: string;
  color: string;
  sortRange: [number, number]; // for GravitySort number generation
  topicKeys: string[];         // for OrbitQuiz / BlackHole / StarMatch
  missions: MissionDef[];
  svgX: number;
  svgY: number;
}

export interface G1Progress {
  completedMissions: string[];  // "i1_m1", "i1_m2", …
  completedIslands: string[];   // "i1", "i2", …
  completedTests: string[];     // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (best result)
}

export interface SortRound {
  numbers: number[];   // shuffled
  sorted: number[];    // correct order
  labels?: string[];   // optional display labels (e.g. "2³") matching numbers[] order
  sortedLabels?: string[]; // optional display labels matching sorted[] order
}

export interface MatchPair {
  left: string;   // question text
  right: string;  // answer text
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const G1_SAVE_KEY = "astromath_g1_v2";

export const CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["g1_count", "g1_compare", "g1_tausch", "g1_zahlzerlegung", "g1_ergaenzen", "g1_subpics"],
  test2: ["g1_verdoppeln", "g1_halbieren", "g1_num1120", "g1_place_value20", "add20", "sub20"],
  test3: ["g1_shapes", "g1_spatial", "g1_clock", "g1_coins", "g1_weight", "g1_volume"],
};

// ─── Island Definitions ───────────────────────────────────────────────────────

export const G1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Counting Island", hu: "Számolás sziget", de: "Zählinsel", ro: "Insula numărării" },
    icon: "🔢", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["g1_count", "g1_compare", "g1_pos", "g1_visual"],
    missions: [
      { id: "m1", gameType: "counting-explorer",  category: "explore",   icon: "🔭", label: { en: "Counting Explorer", hu: "Számolás felfedezés", de: "Zählen entdecken",  ro: "Explorare numărare" } },
      { id: "m2", gameType: "number-duel",      category: "build",     icon: "⚔️", label: { en: "Number Duel",    hu: "Szám-párharc",     de: "Zahlen-Duell",    ro: "Duel numere"    } },
      { id: "m3", gameType: "true-false-blitz", category: "challenge", icon: "⚡", label: { en: "True or False?", hu: "Igaz vagy hamis?", de: "Wahr oder Falsch?", ro: "Adevărat/Fals?" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Addition Island", hu: "Összeadás sziget", de: "Additionsinsel", ro: "Insula adunării" },
    icon: "➕", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["g1_tausch", "g1_zahlzerlegung", "add10"],
    missions: [
      { id: "m1", gameType: "addsub-explorer", category: "explore",   icon: "🔭", label: { en: "Addition Explorer", hu: "Összeadás felfedezés", de: "Addition entdecken", ro: "Explorare adunare" } },
      { id: "m2", gameType: "star-match",    category: "build",     icon: "⭐", label: { en: "Star Match",     hu: "Csillagpárosítás", de: "Sternenpaare",   ro: "Perechi stele"  } },
      { id: "m3", gameType: "missing-number",category: "challenge", icon: "❓", label: { en: "What's Missing?", hu: "Mi hiányzik?",    de: "Was fehlt?",      ro: "Ce lipsește?"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Subtraction Island", hu: "Kivonás sziget", de: "Subtraktionsinsel", ro: "Insula scăderii" },
    icon: "➖", color: "#FF6B6B", sortRange: [1, 10],
    topicKeys: ["sub10", "g1_ergaenzen"],
    missions: [
      { id: "m1", gameType: "subtraction-explorer", category: "explore",   icon: "🔭", label: { en: "Subtraction Explorer", hu: "Kivonás felfedezés", de: "Subtraktion entdecken", ro: "Explorare scădere" } },
      { id: "m2", gameType: "black-hole",    category: "build",     icon: "🕳️", label: { en: "Black Hole",     hu: "Fekete lyuk",     de: "Schwarzes Loch",   ro: "Gaura neagră"   } },
      { id: "m3", gameType: "missing-number",category: "challenge", icon: "❓", label: { en: "What's Missing?", hu: "Mi hiányzik?",    de: "Was fehlt?",       ro: "Ce lipsește?"   } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Double & Half Island", hu: "Dupla & Fele sziget", de: "Verdoppeln & Halbieren", ro: "Dublu & Jumătate" },
    icon: "✌️", color: "#B44DFF", sortRange: [1, 18],
    topicKeys: ["g1_verdoppeln", "g1_halbieren", "g1_fraction"],
    missions: [
      { id: "m1", gameType: "double-half-explorer", category: "explore", icon: "🔭", label: { en: "Double & Half", hu: "Dupla & Fele", de: "Verdoppeln & Halbieren", ro: "Dublu & Jumătate" } },
      { id: "m2", gameType: "star-match",       category: "build",     icon: "⭐", label: { en: "Star Match",      hu: "Csillagpárosítás", de: "Sternenpaare",    ro: "Perechi stele"  } },
      { id: "m3", gameType: "true-false-blitz", category: "challenge", icon: "⚡", label: { en: "True or False?",  hu: "Igaz vagy hamis?", de: "Wahr oder Falsch?", ro: "Adevărat/Fals?" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Numbers to 20", hu: "Számok 20-ig", de: "Zahlen bis 20", ro: "Numere până la 20" },
    icon: "🔟", color: "#00FF88", sortRange: [11, 20],
    topicKeys: ["g1_num1120", "g1_place_value20", "g1_sequence"],
    missions: [
      { id: "m1", gameType: "place-value-20",  category: "explore",   icon: "🔭", label: { en: "Place Value",     hu: "Helyiérték",      de: "Stellenwert",     ro: "Valoare pozițională" } },
      { id: "m2", gameType: "number-duel",   category: "build",     icon: "⚔️", label: { en: "Number Duel",    hu: "Szám-párharc",    de: "Zahlen-Duell",    ro: "Duel numere"    } },
      { id: "m3", gameType: "missing-number",category: "challenge", icon: "❓", label: { en: "What's Missing?", hu: "Mi hiányzik?",    de: "Was fehlt?",      ro: "Ce lipsește?"   } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Word Problems", hu: "Szöveges feladatok", de: "Sachaufgaben", ro: "Probleme cu text" },
    icon: "📖", color: "#FFD700", sortRange: [1, 20],
    topicKeys: ["word", "add20", "sub20"],
    missions: [
      { id: "m1", gameType: "word-problem-intro",  category: "explore",   icon: "🔭", label: { en: "Story Explorer",  hu: "Szöveges felfedezés", de: "Sachaufgaben entdecken", ro: "Explorare probleme" } },
      { id: "m2", gameType: "black-hole",       category: "build",     icon: "🕳️", label: { en: "Black Hole",     hu: "Fekete lyuk",      de: "Schwarzes Loch",  ro: "Gaura neagră"   } },
      { id: "m3", gameType: "true-false-blitz", category: "challenge", icon: "⚡", label: { en: "True or False?", hu: "Igaz vagy hamis?", de: "Wahr oder Falsch?", ro: "Adevărat/Fals?" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Shapes Island", hu: "Alakzatok sziget", de: "Formeninsel", ro: "Insula formelor" },
    icon: "🔷", color: "#10B981", sortRange: [0, 6],
    topicKeys: ["g1_shapes", "g1_spatial", "g1_pattern"],
    missions: [
      { id: "m1", gameType: "shapes-explorer", category: "explore", icon: "🔭", label: { en: "Shapes Explorer", hu: "Alakzatok felfedezés", de: "Formen entdecken", ro: "Explorare forme" } },
      { id: "m2", gameType: "star-match",   category: "build",     icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare",     ro: "Perechi stele"  } },
      { id: "m3", gameType: "true-false-blitz", category: "challenge", icon: "⚡", label: { en: "True or False?", hu: "Igaz vagy hamis?", de: "Wahr oder Falsch?", ro: "Adevărat/Fals?" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Measurements", hu: "Mérések sziget", de: "Messinsel", ro: "Insula măsurătorilor" },
    icon: "📏", color: "#FF9500", sortRange: [1, 15],
    topicKeys: ["g1_clock", "g1_coins", "g1_weight", "g1_volume", "g1_laenger", "g1_wochentage"],
    missions: [
      { id: "m1", gameType: "clock-coins-explorer", category: "explore", icon: "🔭", label: { en: "Clock & Coins", hu: "Óra & Pénz", de: "Uhr & Geld", ro: "Ceas & Bani" } },
      { id: "m2", gameType: "star-match", category: "build",     icon: "⭐", label: { en: "Star Match",    hu: "Csillagpárosítás", de: "Sternenpaare",   ro: "Perechi stele"  } },
      { id: "m3", gameType: "black-hole", category: "challenge", icon: "🕳️", label: { en: "Black Hole",   hu: "Fekete lyuk",      de: "Schwarzes Loch", ro: "Gaura neagră"   } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Data & Patterns", hu: "Adatok & Sorozatok", de: "Daten & Muster", ro: "Date & Tipare" },
    icon: "📊", color: "#E879F9", sortRange: [1, 20],
    topicKeys: ["g1_data", "g1_sequence", "word"],
    missions: [
      { id: "m1", gameType: "pattern-explorer",  category: "explore",   icon: "🔭", label: { en: "Pattern Explorer", hu: "Mintázat felfedezés", de: "Muster entdecken", ro: "Explorare tipare" } },
      { id: "m2", gameType: "gravity-sort",     category: "build",     icon: "🌪️", label: { en: "Sort Numbers",   hu: "Számrendezés",     de: "Zahlen sortieren", ro: "Sortează"       } },
      { id: "m3", gameType: "true-false-blitz", category: "challenge", icon: "⚡", label: { en: "True or False?", hu: "Igaz vagy hamis?", de: "Wahr oder Falsch?", ro: "Adevărat/Fals?" } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── Progress helpers ──────────────────────────────────────────────────────────

export function loadG1Progress(): G1Progress {
  try {
    const raw = localStorage.getItem(G1_SAVE_KEY);
    if (raw) return JSON.parse(raw) as G1Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveG1Progress(p: G1Progress): void {
  localStorage.setItem(G1_SAVE_KEY, JSON.stringify(p));
}

export function isMissionDone(progress: G1Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: G1Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: G1Progress, islandId: string): boolean {
  const idx = G1_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(G1_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlocked(progress: G1Progress, testId: string): boolean {
  return CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: G1Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: G1Progress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): G1Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: G1Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  // Check if all missions for this island are done
  const island = G1_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

/** Sum of best stars for all missions on an island (max 9 = 3 missions × 3 stars) */
export function islandTotalStars(progress: G1Progress, islandId: string): number {
  const island = G1_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: G1Progress, testId: string): G1Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── Question generation ───────────────────────────────────────────────────────

// Map app lang → mathCurriculum country code
function langToCC(lang: Lang): string {
  const map: Record<Lang, string> = { hu: "HU", de: "DE", en: "EN", ro: "RO" };
  return map[lang] ?? "EN";
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Only questions with MCQ options are valid for OrbitQuiz / BlackHole / StarMatch
function isMCQQuestion(q: MathQuestion): boolean {
  return Array.isArray(q.options) && q.options.length >= 2;
}

export function generateIslandQuestions(island: IslandDef, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffle([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(1, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

export function generateCheckpointQuestions(testId: string, lang: Lang, count = 10): MathQuestion[] {
  const cc = langToCC(lang);
  const keys = shuffle([...CHECKPOINT_TOPICS[testId]]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 10 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const qs = generateTopicQuestions(1, key, cc, 3);
    for (const q of qs) {
      if (isMCQQuestion(q) && !seen.has(q.question) && pool.length < count) {
        seen.add(q.question);
        pool.push(q);
      }
    }
  }
  return pool;
}

// GravitySort: pick 5 distinct random numbers from range, return shuffled + sorted
export function generateSortRound(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: take 5 unique-answer questions and build 10 cards (question ↔ answer)
export function generateMatchPairs(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({
    left: q.question,
    right: String(q.correctAnswer),
  }));
}
