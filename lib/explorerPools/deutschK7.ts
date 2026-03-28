import type { PoolTopicDef } from "./types";

// ─── K7 Pool Template ──────────────────────────────────────────────────────────
// Islands:
//   i1 = Konjunktiv I              💭
//   i2 = Werden-Passiv             🔧
//   i3 = Passiv + Modalverb        ⚙️
//   i4 = Stilmittel                🎭
//   i5 = Kausal- & Konditionalsatz 🔀
//   i6 = Konzessiv- & Finalsatz    🎯
//   i7 = Temporalsatz              ⏱️
//   i8 = Infinitivkonstruktionen   🌿
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
// WICHTIG bei text-bubbles: color Feld PFLICHT in jedem item!
//
// interactive Typen: "block-drag" | "word-order" | "gap-fill" | "match-pairs" |
//   "drag-to-bucket" | "sentence-build" | "highlight-text" |
//   "physics-magnet" | "physics-stacker" | "physics-slingshot" | "physics-bucket"
//
// physics-magnet:    pairs: [{ left: "t1_l1", right: "t1_r1" }, ...]
// physics-slingshot: question: "t1_q", targets: [{ id: "1", text: "t1_t1", isCorrect: true }, ...]
// physics-stacker:   words: ["t1_w1","t1_w2","t1_w3"], correctOrder: [0,1,2]
//
// quiz: { question: "key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   ODER: { generate: "generator_key" }
//   Verfügbare Generatoren: "konjunktiv2" | "passiv" | "synonyme" | "antonyme"
//                           "steigerung" | "praeteritum" | "perfekt" | "plural"
//                           "nominativ" | "akkusativ" | "dativ" | "genitiv"
//
// Ziel: 15-20 Topics pro Pool für maximale Abwechslung!
// LABELS nur "de"!
// ──────────────────────────────────────────────────────────────────────────────

// ─── i1: Konjunktiv I ────────────────────────────────────────────────────────

export const KONJ1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Konjunktiv I",
    // TODO: alle label keys hier eintragen
  },
};

export const KONJ1_POOL: PoolTopicDef[] = [
  // TODO: 15-20 topics
];

// ─── i2: Werden-Passiv ───────────────────────────────────────────────────────

export const WPASSIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Werden-Passiv",
    // TODO
  },
};

export const WPASSIV7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i3: Passiv + Modalverb ──────────────────────────────────────────────────

export const MODALPASSIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Passiv + Modalverb",
    // TODO
  },
};

export const MODALPASSIV7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i4: Stilmittel ──────────────────────────────────────────────────────────

export const STILMITTEL7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Stilmittel",
    // TODO
  },
};

export const STILMITTEL7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i5: Kausal- & Konditionalsatz ───────────────────────────────────────────

export const KAUSAL7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Kausal- & Konditionalsatz",
    // TODO
  },
};

export const KAUSAL7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i6: Konzessiv- & Finalsatz ──────────────────────────────────────────────

export const KONZESSIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Konzessiv- & Finalsatz",
    // TODO
  },
};

export const KONZESSIV7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i7: Temporalsatz ────────────────────────────────────────────────────────

export const TEMPORAL7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Temporalsatz",
    // TODO
  },
};

export const TEMPORAL7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i8: Infinitivkonstruktionen ─────────────────────────────────────────────

export const INFINITIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitivkonstruktionen",
    // TODO
  },
};

export const INFINITIV7_POOL: PoolTopicDef[] = [
  // TODO
];

// ─── i9: Große Prüfung ───────────────────────────────────────────────────────

export const EXAM7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung",
    // TODO: gemischte Topics aus allen K7-Inseln
  },
};

export const EXAM7_POOL: PoolTopicDef[] = [
  // TODO
];
