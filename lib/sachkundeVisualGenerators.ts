/**
 * Sachkunde Visual Generators — 5 interactive question types
 * TierKlassifizierung, SinneZuordnung, JahreszeitZuordnung, MuellSortierung, VerkehrszeichenQuiz
 */

import type { VisualQuestionType } from "./languageTestTypes";
import TierKlassifizierung from "@/components/sachkunde-visual/TierKlassifizierung";
import SinneZuordnung from "@/components/sachkunde-visual/SinneZuordnung";
import JahreszeitZuordnung from "@/components/sachkunde-visual/JahreszeitZuordnung";
import MuellSortierung from "@/components/sachkunde-visual/MuellSortierung";
import VerkehrszeichenQuiz from "@/components/sachkunde-visual/VerkehrszeichenQuiz";

// ─── DATA POOLS ─────────────────────────────────────────────────────────────────

const HAUSTIERE = ["Hund", "Katze", "Hamster", "Kaninchen", "Papagei"];
const WILDTIERE = ["Fuchs", "Reh", "Igel", "Eichhörnchen", "Eule"];

const SINNE = [
  { sense: "Sehen", organ: "Auge" },
  { sense: "Hören", organ: "Ohr" },
  { sense: "Riechen", organ: "Nase" },
  { sense: "Schmecken", organ: "Zunge" },
  { sense: "Fühlen", organ: "Haut" },
];

const JAHRESZEIT_DESCRIPTIONS = [
  { desc: "Blätter fallen", correct: "Herbst" },
  { desc: "Schnee fällt", correct: "Winter" },
  { desc: "Blumen blühen", correct: "Frühling" },
  { desc: "Es ist sehr heiß", correct: "Sommer" },
  { desc: "Vögel singen", correct: "Frühling" },
  { desc: "Wir machen Urlaub", correct: "Sommer" },
  { desc: "Der Baum ist kahl", correct: "Winter" },
  { desc: "Bunte Blätter", correct: "Herbst" },
  { desc: "Eis und Schnee schmelzen", correct: "Frühling" },
  { desc: "Es wird kalt", correct: "Winter" },
];

const MUELL_ITEMS = [
  { item: "Plastikflasche", bin: "Gelbe Tonne" },
  { item: "Zeitung", bin: "Blaue Tonne" },
  { item: "Bananenschale", bin: "Braune Tonne" },
  { item: "Altes Glas", bin: "Glascontainer" },
  { item: "Verpackung", bin: "Gelbe Tonne" },
  { item: "Papiertüte", bin: "Blaue Tonne" },
  { item: "Kaffeefilter", bin: "Braune Tonne" },
  { item: "Scherben", bin: "Glascontainer" },
  { item: "Alufolie", bin: "Gelbe Tonne" },
  { item: "Apfelkern", bin: "Braune Tonne" },
  { item: "Karton", bin: "Blaue Tonne" },
  { item: "Kaugummi", bin: "Restmüll" },
];

const VERKEHRSSIGNS = [
  { sign: "🚨 Rote Ampel", options: ["Gehen", "Stehen bleiben", "Schnell laufen"], correct: 1 },
  { sign: "🟢 Grüne Ampel", options: ["Stehen bleiben", "Gehen", "Vorsicht"], correct: 1 },
  { sign: "🚸 Zebrastreifen", options: ["Parkplatz", "Fußgängerüberweg", "Bushalte"], correct: 1 },
  { sign: "⛔ Stoppschild", options: ["Rasten", "Stoppen und schauen", "Vorbei"], correct: 1 },
  { sign: "🚴 Fahrradweg", options: ["Nur Autos", "Nur Fahrräder", "Parkplatz"], correct: 1 },
  { sign: "⚠️ Vorsicht Kurve", options: ["Schneller fahren", "Vorsicht bremsen", "Hupen"], correct: 1 },
  { sign: "🏫 Spielplatz", options: ["Tankstelle", "Spielplatz", "Bahnhof"], correct: 1 },
  { sign: "🅿️ P Schild", options: ["Parkplatz", "Post", "Polizei"], correct: 0 },
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────────

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

// ─── TIER KLASSIFIZIERUNG ───────────────────────────────────────────────────────

const TIER_KLASSIFIZIERUNG: VisualQuestionType = {
  type: "tier-klassifizierung",
  label: "Tiere klassifizieren 🐾",
  printLabel: "Tiere klassifizieren",
  component: TierKlassifizierung,
  subtopicIds: ["haustiere", "wilde_tiere"],
  generate: (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const allAnimals = [...HAUSTIERE, ...WILDTIERE];
      const animal = pick(allAnimals);
      questions.push({
        animal,
        correct: HAUSTIERE.includes(animal) ? "haustier" : "wildtier",
      });
    }
    return questions;
  },
  gradeAnswer: (q, given) => {
    const correct = q.correct === given;
    return { correct, expected: q.correct };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    animal: q.animal,
    correct: q.correct,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.animal} → ${q.correct === "haustier" ? "🏠 Haustier" : "🌲 Wildtier"}`,
};

// ─── SINNE ZUORDNUNG ────────────────────────────────────────────────────────────

const SINNE_ZUORDNUNG: VisualQuestionType = {
  type: "sinne-zuordnung",
  label: "Sinne zuordnen 👁️",
  printLabel: "Sinne zuordnen",
  component: SinneZuordnung,
  subtopicIds: ["sinnesorgane", "körperteile"],
  generate: (count) => {
    const questions = [];
    const allOrgans = SINNE.map((s) => s.organ);
    for (let i = 0; i < count; i++) {
      const pair = pick(SINNE);
      const options = shuffle([...allOrgans]);
      const correctIndex = options.indexOf(pair.organ);
      questions.push({
        sense: pair.sense,
        options,
        correctIndex,
      });
    }
    return questions;
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    sense: q.sense,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.sense} → ${q.options[q.correctIndex]}`,
};

// ─── JAHRESZEIT ZUORDNUNG ───────────────────────────────────────────────────────

const JAHRESZEIT_ZUORDNUNG: VisualQuestionType = {
  type: "jahreszeit-zuordnung",
  label: "Jahreszeiten zuordnen 🌍",
  printLabel: "Jahreszeiten zuordnen",
  component: JahreszeitZuordnung,
  subtopicIds: ["jahreszeiten_natur", "jahreszeiten_detail"],
  generate: (count) => {
    const questions = [];
    const seasons = ["Frühling", "Sommer", "Herbst", "Winter"];
    for (let i = 0; i < count; i++) {
      const item = pick(JAHRESZEIT_DESCRIPTIONS);
      questions.push({
        description: item.desc,
        correct: item.correct,
        seasons,
      });
    }
    return questions;
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.correct;
    return { correct, expected: q.correct };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    description: q.description,
    correct: q.correct,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.description} → ${q.correct}`,
};

// ─── MUELL SORTIERUNG ───────────────────────────────────────────────────────────

const MUELL_SORTIERUNG: VisualQuestionType = {
  type: "muell-sortierung",
  label: "Müll sortieren ♻️",
  printLabel: "Müll sortieren",
  component: MuellSortierung,
  subtopicIds: ["materialien", "mülltrennung"],
  generate: (count) => {
    const questions = [];
    const bins = ["Gelbe Tonne", "Blaue Tonne", "Braune Tonne", "Restmüll", "Glascontainer"];
    for (let i = 0; i < count; i++) {
      const item = pick(MUELL_ITEMS);
      const options = shuffle(bins);
      questions.push({
        item: item.item,
        correct: item.bin,
        options,
      });
    }
    return questions;
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.correct;
    return { correct, expected: q.correct };
  },
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

// ─── VERKEHRSZEICHEN QUIZ ───────────────────────────────────────────────────────

const VERKEHRSZEICHEN_QUIZ: VisualQuestionType = {
  type: "verkehrszeichen-quiz",
  label: "Verkehrszeichen 🚦",
  printLabel: "Verkehrszeichen",
  component: VerkehrszeichenQuiz,
  subtopicIds: ["verkehrsregeln", "verkehrsmittel", "sicherheit"],
  generate: (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const sign = pick(VERKEHRSSIGNS);
      const options = shuffle(sign.options);
      const correctIndex = options.indexOf(sign.options[sign.correct]);
      questions.push({
        sign: sign.sign,
        options,
        correctIndex,
      });
    }
    return questions;
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    sign: q.sign,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.sign} → ${q.options[q.correctIndex]}`,
};

// ─── EXPORT ─────────────────────────────────────────────────────────────────────

export const SACHKUNDE_VISUAL_TYPES: VisualQuestionType[] = [
  TIER_KLASSIFIZIERUNG,
  SINNE_ZUORDNUNG,
  JAHRESZEIT_ZUORDNUNG,
  MUELL_SORTIERUNG,
  VERKEHRSZEICHEN_QUIZ,
];
