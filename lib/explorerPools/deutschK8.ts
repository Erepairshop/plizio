import type { PoolTopicDef } from "./types";

// ─── K8 Pool Template ──────────────────────────────────────────────────────────
// Islands:
//   i1 = Konjunktiv I & II         💬
//   i2 = Passiv & Passiversatz     ↔️
//   i3 = Partizipien & Nebensätze  🔗
//   i4 = Stilmittel                🎭
//   i5 = Textsorten                📝
//   i6 = Literatur & Epochen       📚
//   i7 = Nominalstil & Sprachebenen 📊
//   i8 = Charakterisierung & Inhaltsangabe 🧑‍🎓
//   i9 = Große Prüfung             🌟
//
// Struktur je Topic:
//   infoTitle, infoText, svg, bulletKeys?, hintKey?, interactive, quiz, difficulty?
//
// svg Typen: "two-groups" | "text-bubbles" | "article-noun" | "letter-circles" |
//   "word-syllables" | "compound-word" | "icon-grid" | "rhyme-pair" |
//   "sentence-display" | "word-display" | "simple-icon"
//
// WICHTIG bei two-groups:   border Feld PFLICHT!
// WICHTIG bei text-bubbles: color + bg Feld PFLICHT in jedem item!
// WICHTIG bei word-syllables: color Feld PFLICHT!
// WICHTIG bei rhyme-pair: color Feld PFLICHT!
//
// interactive Typen: "block-drag" | "word-order" | "gap-fill" | "match-pairs" |
//   "drag-to-bucket" | "sentence-build" | "highlight-text" |
//   "physics-magnet" | "physics-stacker" | "physics-slingshot" | "physics-bucket"
//
// MINDEN interactive típusnál kötelező: instruction, hint1, hint2
// physics-slingshot: question + targets:[{id,text,isCorrect}] + instruction + hint1 + hint2
// physics-magnet:    pairs:[{left,right}] + instruction + hint1 + hint2
// physics-stacker:   words:[] + correctOrder:[0,1,2] + instruction + hint1 + hint2
//
// quiz: { question: "key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   ODER: { generate: "generator_key" }
//   Generatoren: "konjunktiv2" | "passiv" | "synonyme" | "antonyme" | "steigerung"
//               "praeteritum" | "perfekt" | "plural" | "nominativ" | "akkusativ"
//
// Ziel: 15-20 Topics pro Pool!  LABELS nur "de"!
// ──────────────────────────────────────────────────────────────────────────────

// ─── i1: Konjunktiv I & II ───────────────────────────────────────────────────

export const KONJ8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Konjunktiv I & II",
    // TODO
  },
};

export const KONJ8_POOL: PoolTopicDef[] = [
  // TODO: 15-20 topics
];

// ─── i2: Passiv & Passiversatz ───────────────────────────────────────────────

export const PASSIV8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Passiv & Passiversatz",
    // TODO
  },
};

export const PASSIV8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i3: Partizipien & Nebensätze ────────────────────────────────────────────

export const PARTIZ8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Partizipien & Nebensätze",
    // TODO
  },
};

export const PARTIZ8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i4: Stilmittel ──────────────────────────────────────────────────────────

export const STIL8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Stilmittel",
    // TODO
  },
};

export const STIL8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i5: Textsorten ──────────────────────────────────────────────────────────

export const TEXT8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Textsorten",
    // TODO
  },
};

export const TEXT8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i6: Literatur & Epochen ─────────────────────────────────────────────────

export const LIT8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Literatur & Epochen",
    // TODO
  },
};

export const LIT8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i7: Nominalstil & Sprachebenen ──────────────────────────────────────────

export const NOMINAL8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nominalstil & Sprachebenen",
    // TODO
  },
};

export const NOMINAL8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i8: Charakterisierung & Inhaltsangabe ───────────────────────────────────

export const CHAR8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Charakterisierung & Inhaltsangabe",
    // TODO
  },
};

export const CHAR8_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i9: Große Prüfung ───────────────────────────────────────────────────────

export const EXAM8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung",
    // TODO: gemischte Topics aus allen K8-Inseln
  },
};

export const EXAM8_POOL: PoolTopicDef[] = [
  // TODO
];
