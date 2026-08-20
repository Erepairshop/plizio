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
import SachkundeDiagramQuiz from "@/components/sachkunde-visual/SachkundeDiagramQuiz";
import { renderSachkundeSceneSvg, type SachkundeScene } from "./sachkundePaperVisuals";

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
  subtopicIds: ["jahreszeiten_natur", "jahreszeiten_detail"],
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
  subtopicIds: ["haustiere", "wilde_tiere"],
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
  subtopicIds: ["wetter", "wetter_instrumente", "jahreszeiten_klima", "wetter_klima", "klima"],
  generate: (count) => {
    const questions = [];
    const weathers = [
      { svgName: "WolkenSvg", correct: "Wolken" },
      { svgName: "RegenSvg", correct: "Regen" },
      { svgName: "SchneeSvg", correct: "Schnee" },
      { svgName: "GewitterSvg", correct: "Gewitter" },
      { svgName: "WindSvg", correct: "Wind" },
    ];
    for (let i = 0; i < count; i++) {
      const weather = pick(weathers);
      const options = shuffle(["Wolken", "Regen", "Schnee", "Gewitter", "Wind"]).slice(0, 4);
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
  subtopicIds: ["wasserkreislauf", "wasserkreislauf_detail", "wasser"],
  generate: (count) => {
    const questions = [];
    const base = ["Verdunstung", "Kondensation", "Niederschlag", "Fluss"];
    for (let i = 0; i < count; i++) {
      const offset = i % base.length;
      const correctOrder = [...base.slice(offset), ...base.slice(0, offset)];
      questions.push({
        stages: base,
        correctOrder,
        stageSvgs: {
          Verdunstung: "VerdunstungSvg",
          Kondensation: "KondensationSvg",
          Niederschlag: "NiederschlagSvg",
          Fluss: "FlussSvg",
        },
        question: `Ordne den Kreislauf ab ${correctOrder[0]}.`,
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

type DiagramItem = { prompt: string; answer: string; options: string[] };
type DiagramSpec = {
  type: string;
  label: string;
  scene: SachkundeScene;
  subtopicIds: string[];
  items: DiagramItem[];
};

function makeDiagramType(spec: DiagramSpec): VisualQuestionType {
  return {
    type: spec.type,
    label: spec.label,
    printLabel: spec.label,
    component: SachkundeDiagramQuiz,
    subtopicIds: spec.subtopicIds,
    generate: (count) => Array.from({ length: count }, (_, index) => {
      const item = spec.items[index % spec.items.length];
      const options = shuffle(item.options);
      return {
        scene: spec.scene,
        variant: index % 4,
        question: item.prompt,
        prompt: item.prompt,
        options,
        correctIndex: options.indexOf(item.answer),
      };
    }),
    gradeAnswer: (question, given) => {
      const expected = question.options[question.correctIndex];
      return { correct: given === expected, expected };
    },
    mapProps: (question, userAnswer, submitted, onAnswer) => ({
      svgHtml: renderSachkundeSceneSvg(question.scene, question.variant),
      prompt: question.prompt,
      options: question.options,
      correctIndex: question.correctIndex,
      userAnswer,
      submitted,
      onAnswer,
    }),
    renderPrint: (question) => {
      const options = question.options.map((option: string) => `☐ ${option}`).join(" &nbsp; ");
      return `${renderSachkundeSceneSvg(question.scene, question.variant)}<div style="font-size:10pt;font-weight:600;margin-top:3px">${question.prompt}</div><div style="font-size:9pt;margin-top:5px">${options}</div>`;
    },
  };
}

const SACHKUNDE_DIAGRAM_SPECS: DiagramSpec[] = [
  { type: "koerperpflege-bild", label: "Körperpflege", scene: "body-care", subtopicIds: ["gesundheit_hygiene"], items: [
    { prompt: "Was gehört zur täglichen Körperpflege?", answer: "Zähne putzen", options: ["Zähne putzen", "Schuhe verstecken", "Licht anlassen"] },
    { prompt: "Wann wäschst du deine Hände besonders gründlich?", answer: "Vor dem Essen", options: ["Vor dem Essen", "Nur sonntags", "Nie"] },
    { prompt: "Was schützt vor Karies?", answer: "Zähne putzen", options: ["Zähne putzen", "Mehr Süßes", "Wenig trinken"] },
    { prompt: "Was hält den Körper gesund?", answer: "Bewegung", options: ["Bewegung", "Nur sitzen", "Zu wenig Schlaf"] },
  ] },
  { type: "baumteile-bild", label: "Baumteile", scene: "tree-parts", subtopicIds: ["bäume", "blueten_fruechte"], items: [
    { prompt: "Welcher Teil hält den Baum im Boden?", answer: "Wurzel", options: ["Wurzel", "Krone", "Frucht"] },
    { prompt: "Wo wachsen die meisten Blätter?", answer: "Krone", options: ["Krone", "Wurzel", "Boden"] },
    { prompt: "Was transportiert Wasser nach oben?", answer: "Stamm", options: ["Stamm", "Frucht", "Blüte"] },
    { prompt: "Woraus kann später eine Frucht entstehen?", answer: "Blüte", options: ["Blüte", "Rinde", "Wurzel"] },
  ] },
  { type: "zuhause-sicherheit-bild", label: "Sicher zuhause", scene: "home-safety", subtopicIds: ["zuhause", "regeln_verhalten"], items: [
    { prompt: "Was ist bei einer Steckdose richtig?", answer: "Nicht hineinfassen", options: ["Nicht hineinfassen", "Mit Wasser reinigen", "Gegenstände hineinstecken"] },
    { prompt: "Was tust du bei Rauch?", answer: "Erwachsene rufen", options: ["Erwachsene rufen", "Verstecken", "Fenster schließen und bleiben"] },
    { prompt: "Was verhindert Stolpern?", answer: "Wege freihalten", options: ["Wege freihalten", "Spielzeug verteilen", "Im Dunkeln laufen"] },
    { prompt: "Wer darf gefährliche Geräte bedienen?", answer: "Erwachsene", options: ["Erwachsene", "Kleinkinder", "Niemand mit nassen Händen"] },
  ] },
  { type: "gesunder-teller-bild", label: "Gesunder Teller", scene: "healthy-plate", subtopicIds: ["ernährung_verdauung", "zahngesundheit"], items: [
    { prompt: "Was gehört oft auf einen gesunden Teller?", answer: "Gemüse", options: ["Gemüse", "Nur Bonbons", "Nur Chips"] },
    { prompt: "Welches Getränk ist im Alltag eine gute Wahl?", answer: "Wasser", options: ["Wasser", "Limonade", "Energydrink"] },
    { prompt: "Was liefert dem Körper Baustoffe?", answer: "Eiweiß", options: ["Eiweiß", "Farbstoff", "Verpackung"] },
    { prompt: "Was ist besser für die Zähne?", answer: "Wenig Zucker", options: ["Wenig Zucker", "Dauernd naschen", "Nie putzen"] },
  ] },
  { type: "lebensraum-bild", label: "Lebensräume", scene: "habitat", subtopicIds: ["lebensräume", "wildtiere_anpassung"], items: [
    { prompt: "Wo lebt ein Fisch?", answer: "Im Wasser", options: ["Im Wasser", "In der Wüste", "Auf dem Dach"] },
    { prompt: "Was bietet ein Lebensraum?", answer: "Nahrung und Schutz", options: ["Nahrung und Schutz", "Nur Licht", "Nur Steine"] },
    { prompt: "Welches Tier passt zum Wald?", answer: "Reh", options: ["Reh", "Hai", "Kamel"] },
    { prompt: "Warum sind Tiere angepasst?", answer: "Zum Überleben", options: ["Zum Überleben", "Zum Rechnen", "Zum Malen"] },
  ] },
  { type: "pflanzenwachstum-bild", label: "Pflanzenwachstum", scene: "plant-growth", subtopicIds: ["pflanzenteile", "wachstum_lebenszyklus", "samen_zur_blüte"], items: [
    { prompt: "Was entsteht zuerst aus dem Samen?", answer: "Keimling", options: ["Keimling", "Frucht", "Baumkrone"] },
    { prompt: "Was braucht die Pflanze zum Wachsen?", answer: "Licht und Wasser", options: ["Licht und Wasser", "Plastik", "Salz"] },
    { prompt: "Welcher Teil nimmt Wasser auf?", answer: "Wurzel", options: ["Wurzel", "Blüte", "Frucht"] },
    { prompt: "Wie heißt die Abfolge vom Samen zur Pflanze?", answer: "Lebenszyklus", options: ["Lebenszyklus", "Wetterkarte", "Fahrplan"] },
  ] },
  { type: "magnet-versuch-bild", label: "Magnetversuch", scene: "magnet-test", subtopicIds: ["magnetismus", "schwimmen_sinken"], items: [
    { prompt: "Welcher Gegenstand wird vom Magneten angezogen?", answer: "Eisennagel", options: ["Eisennagel", "Holzlöffel", "Papier"] },
    { prompt: "Welche Pole stoßen sich ab?", answer: "Gleiche Pole", options: ["Gleiche Pole", "Ungleiche Pole", "Alle Stoffe"] },
    { prompt: "Was schwimmt meist auf Wasser?", answer: "Kork", options: ["Kork", "Eisenkugel", "Stein"] },
    { prompt: "Wovon hängt Schwimmen oder Sinken ab?", answer: "Material und Form", options: ["Material und Form", "Farbe", "Name"] },
  ] },
  { type: "organe-bild", label: "Organe erkennen", scene: "body-organs", subtopicIds: ["körperaufbau", "ernährungspyramide"], items: [
    { prompt: "Welches Organ pumpt Blut?", answer: "Herz", options: ["Herz", "Lunge", "Magen"] },
    { prompt: "Welches Organ brauchen wir zum Atmen?", answer: "Lunge", options: ["Lunge", "Leber", "Darm"] },
    { prompt: "Wo beginnt die Verdauung?", answer: "Im Mund", options: ["Im Mund", "Im Fuß", "Im Ohr"] },
    { prompt: "Was schützt viele Organe?", answer: "Skelett", options: ["Skelett", "Haare", "Nägel"] },
  ] },
  { type: "nahrungsnetz-bild", label: "Nahrungsnetz", scene: "food-web", subtopicIds: ["nahrungsketten", "nahrungsnetze", "waldtiere_raubtiere"], items: [
    { prompt: "Womit beginnt eine Nahrungskette meist?", answer: "Pflanze", options: ["Pflanze", "Raubtier", "Stein"] },
    { prompt: "Was zeigen die Pfeile?", answer: "Nahrungsrichtung", options: ["Nahrungsrichtung", "Windrichtung", "Straßen"] },
    { prompt: "Wie heißt ein Tier, das andere Tiere frisst?", answer: "Räuber", options: ["Räuber", "Erzeuger", "Mineral"] },
    { prompt: "Warum gibt es Nahrungsnetze?", answer: "Viele Ketten sind verbunden", options: ["Viele Ketten sind verbunden", "Es gibt nur ein Tier", "Pflanzen fressen Steine"] },
  ] },
  { type: "wetterinstrument-bild", label: "Wetterinstrumente", scene: "weather-tool", subtopicIds: ["wetter_instrumente", "jahreszeiten_klima"], items: [
    { prompt: "Womit misst man die Temperatur?", answer: "Thermometer", options: ["Thermometer", "Kompass", "Waage"] },
    { prompt: "Womit misst man Regenmenge?", answer: "Regenmesser", options: ["Regenmesser", "Lineal", "Uhr"] },
    { prompt: "Was zeigt eine Windfahne?", answer: "Windrichtung", options: ["Windrichtung", "Temperatur", "Luftfeuchte"] },
    { prompt: "Was gehört in einen Wetterbericht?", answer: "Messwerte", options: ["Messwerte", "Märchen", "Rechenzeichen"] },
  ] },
  { type: "einfache-maschine-bild", label: "Einfache Maschinen", scene: "simple-machine", subtopicIds: ["einfache_maschinen"], items: [
    { prompt: "Wie heißt die dargestellte einfache Maschine?", answer: "Hebel", options: ["Hebel", "Magnet", "Thermometer"] },
    { prompt: "Was ist der Drehpunkt?", answer: "Auflagepunkt", options: ["Auflagepunkt", "Last", "Seil"] },
    { prompt: "Was bewirkt ein längerer Hebelarm?", answer: "Weniger Kraft nötig", options: ["Weniger Kraft nötig", "Mehr Gewicht", "Keine Bewegung"] },
    { prompt: "Welche Maschine lenkt ein Seil um?", answer: "Rolle", options: ["Rolle", "Keil", "Schraube"] },
  ] },
  { type: "organsystem-bild", label: "Organsysteme", scene: "organ-system", subtopicIds: ["organe", "skelet_muskulatur", "gesundheit_advanced"], items: [
    { prompt: "Zu welchem System gehört das Herz?", answer: "Kreislauf", options: ["Kreislauf", "Verdauung", "Skelett"] },
    { prompt: "Was transportiert Sauerstoff im Körper?", answer: "Blut", options: ["Blut", "Knochen", "Haut"] },
    { prompt: "Was bewegt die Knochen?", answer: "Muskeln", options: ["Muskeln", "Lunge", "Zähne"] },
    { prompt: "Welches System steuert den Körper?", answer: "Nervensystem", options: ["Nervensystem", "Wurzelsystem", "Wettersystem"] },
  ] },
  { type: "oekosystem-kette-bild", label: "Ökosystemkette", scene: "ecosystem-chain", subtopicIds: ["ökosysteme", "wald_ökosystem", "ernährungskette"], items: [
    { prompt: "Wer ist der Erzeuger in der Kette?", answer: "Pflanze", options: ["Pflanze", "Fisch", "Fuchs"] },
    { prompt: "Was geschieht ohne Pflanzen?", answer: "Die Kette bricht", options: ["Die Kette bricht", "Nichts", "Mehr Sonnenlicht"] },
    { prompt: "Was verbindet Lebewesen im Ökosystem?", answer: "Nahrung und Lebensraum", options: ["Nahrung und Lebensraum", "Nur Farbe", "Nur Größe"] },
    { prompt: "Was schützt ein stabiles Ökosystem?", answer: "Artenvielfalt", options: ["Artenvielfalt", "Müll", "Abholzung"] },
  ] },
  { type: "energiequelle-bild", label: "Energiequellen", scene: "energy-source", subtopicIds: ["energie_quellen", "energie"], items: [
    { prompt: "Welche Energiequelle ist erneuerbar?", answer: "Sonne", options: ["Sonne", "Kohle", "Erdöl"] },
    { prompt: "Was wandelt eine Solarzelle um?", answer: "Licht in Strom", options: ["Licht in Strom", "Strom in Kohle", "Wind in Wasser"] },
    { prompt: "Was treibt ein Windrad an?", answer: "Wind", options: ["Wind", "Benzin", "Sand"] },
    { prompt: "Warum spart man Energie?", answer: "Umwelt schützen", options: ["Umwelt schützen", "Mehr Abgas", "Mehr Müll"] },
  ] },
  { type: "stromkreis-zustand-bild", label: "Stromkreis", scene: "circuit-state", subtopicIds: ["stromkreis"], items: [
    { prompt: "Wann leuchtet die Lampe?", answer: "Bei geschlossenem Stromkreis", options: ["Bei geschlossenem Stromkreis", "Bei einer Lücke", "Ohne Batterie"] },
    { prompt: "Was unterbricht den Stromkreis?", answer: "Offener Schalter", options: ["Offener Schalter", "Kabel", "Geschlossener Schalter"] },
    { prompt: "Welche Aufgabe hat die Batterie?", answer: "Sie liefert Energie", options: ["Sie liefert Energie", "Sie kühlt die Lampe", "Sie ersetzt das Kabel"] },
    { prompt: "Welcher Stoff leitet Strom?", answer: "Metall", options: ["Metall", "Gummi", "Holz"] },
  ] },
];

export const SACHKUNDE_DIAGRAM_TYPES = SACHKUNDE_DIAGRAM_SPECS.map(makeDiagramType);

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
  ...SACHKUNDE_DIAGRAM_TYPES,
];
