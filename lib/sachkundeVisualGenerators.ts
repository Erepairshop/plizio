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
import JahreszeitenBild from "@/components/sachkunde-visual/JahreszeitenBild";
import TierErkennen from "@/components/sachkunde-visual/TierErkennen";
import WetterErkennen from "@/components/sachkunde-visual/WetterErkennen";
import WasserkreislaufOrdnen from "@/components/sachkunde-visual/WasserkreislaufOrdnen";

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

// ─── JAHRESZEITEN BILD (K1-K2) ──────────────────────────────────────────────────

const JAHRESZEITEN_BILD: VisualQuestionType = {
  type: "jahreszeiten-bild",
  label: "Jahreszeit erkennen 🌸",
  printLabel: "Jahreszeit erkennen",
  component: JahreszeitenBild,
  subtopicIds: ["jahreszeiten", "jahreszeiten_natur"],
  generate: (count) => {
    const questions = [];
    const seasons = [
      { svgName: "WinterSvg", correct: "Winter" },
      { svgName: "FruehlingSvg", correct: "Frühling" },
      { svgName: "SommerSvg", correct: "Sommer" },
      { svgName: "HerbstSvg", correct: "Herbst" },
    ];
    for (let i = 0; i < count; i++) {
      const season = pick(seasons);
      const options = shuffle(["Winter", "Frühling", "Sommer", "Herbst"]);
      const correctIndex = options.indexOf(season.correct);
      questions.push({
        svgName: season.svgName,
        correct: season.correct,
        options,
        correctIndex,
        question: "Welche Jahreszeit ist hier?",
      });
    }
    return questions;
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
  renderPrint: (q) => `Welche Jahreszeit ist hier? → ${q.options[q.correctIndex]}`,
};

// ─── TIER ERKENNEN (K1-K2) ──────────────────────────────────────────────────────

const TIER_ERKENNEN: VisualQuestionType = {
  type: "tier-erkennen",
  label: "Tier erkennen 🐾",
  printLabel: "Tier erkennen",
  component: TierErkennen,
  subtopicIds: ["tiere", "haustiere", "wilde_tiere"],
  generate: (count) => {
    const questions = [];
    const animals = [
      { svgName: "KatzeSvg", correct: "Katze" },
      { svgName: "HundSvg", correct: "Hund" },
      { svgName: "VogelSvg", correct: "Vogel" },
      { svgName: "FischSvg", correct: "Fisch" },
      { svgName: "PferdSvg", correct: "Pferd" },
    ];
    for (let i = 0; i < count; i++) {
      const animal = pick(animals);
      const options = shuffle(["Katze", "Hund", "Vogel", "Fisch", "Pferd"]);
      const correctIndex = options.indexOf(animal.correct);
      questions.push({
        svgName: animal.svgName,
        correct: animal.correct,
        options,
        correctIndex,
        question: "Welches Tier ist das?",
      });
    }
    return questions;
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
  renderPrint: (q) => `Welches Tier ist das? → ${q.options[q.correctIndex]}`,
};

// ─── WETTER ERKENNEN (K3-K4) ────────────────────────────────────────────────────

const WETTER_ERKENNEN: VisualQuestionType = {
  type: "wetter-erkennen",
  label: "Wetter erkennen 🌤",
  printLabel: "Wetter erkennen",
  component: WetterErkennen,
  subtopicIds: ["wetter", "klima", "wetter_k3", "wetter_k4"],
  generate: (count) => {
    const questions = [];
    const weathers = [
      { svgName: "WolkenSvg", correct: "Wolken" },
      { svgName: "RegenSvg", correct: "Regen" },
      { svgName: "SchneeSvg", correct: "Schnee" },
      { svgName: "GewitterSvg", correct: "Gewitter" },
      { svgName: "WindSvg", correct: "Wind" },
      { svgName: "SonnenblumeSvg", correct: "Sonnenblume" },
    ];
    for (let i = 0; i < count; i++) {
      const weather = pick(weathers);
      const options = shuffle(["Wolken", "Regen", "Schnee", "Gewitter", "Wind", "Sonnenblume"]).slice(0, 4);
      if (!options.includes(weather.correct)) {
        options[0] = weather.correct;
      }
      const finalOptions = shuffle(options);
      const correctIndex = finalOptions.indexOf(weather.correct);
      questions.push({
        svgName: weather.svgName,
        correct: weather.correct,
        options: finalOptions,
        correctIndex,
        question: "Welches Wetter ist hier?",
      });
    }
    return questions;
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
  renderPrint: (q) => `Welches Wetter ist hier? → ${q.options[q.correctIndex]}`,
};

// ─── WASSERKREISLAUF ORDNEN (K3-K4) ─────────────────────────────────────────────

const WASSERKREISLAUF_ORDNEN: VisualQuestionType = {
  type: "wasserkreislauf-ordnen",
  label: "Wasserkreislauf 💧",
  printLabel: "Wasserkreislauf ordnen",
  component: WasserkreislaufOrdnen,
  subtopicIds: ["wasserkreislauf", "wasser", "wasser_k3", "wasser_k4"],
  generate: (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      questions.push({
        stages: ["Verdunstung", "Kondensation", "Niederschlag", "Fluss"],
        correctOrder: ["Verdunstung", "Kondensation", "Niederschlag", "Fluss"],
        stageSvgs: {
          Verdunstung: "VerdunstungSvg",
          Kondensation: "KondensationSvg",
          Niederschlag: "NiederschlagSvg",
          Fluss: "FlussSvg",
        },
        question: "Ordne die Phasen des Wasserkreislaufs.",
      });
    }
    return questions;
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.correctOrder.join(",");
    return { correct, expected: q.correctOrder.join(",") };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    stages: q.stages,
    correctOrder: q.correctOrder,
    stageSvgs: q.stageSvgs,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `Ordne die Phasen des Wasserkreislaufs. → ${q.correctOrder.join(" → ")}`,
};

// ─── EXPORT ─────────────────────────────────────────────────────────────────────

export const SACHKUNDE_VISUAL_TYPES: VisualQuestionType[] = [
  TIER_KLASSIFIZIERUNG,
  SINNE_ZUORDNUNG,
  JAHRESZEIT_ZUORDNUNG,
  MUELL_SORTIERUNG,
  VERKEHRSZEICHEN_QUIZ,
  JAHRESZEITEN_BILD,
  TIER_ERKENNEN,
  WETTER_ERKENNEN,
  WASSERKREISLAUF_ORDNEN,
];
