// ─── DEUTSCH TEST — FRAGEN-CURRICULUM ────────────────────────────────────────
// Grammatik & Sprachkompetenz für Klasse 1–8
// Fragen-Typen: MCQ (Multiple Choice) + Typing (Freitext)
//
// ═══════════════════════════════════════════════════════════════════════════════
// FORMAT — so fügst du Fragen ein:
//
//   MCQ (Multiple Choice):
//   { type: "mcq", topic: "<themeId>", subtopic: "<subtopicId>",
//     question: "Frage?",
//     options: ["Option A", "Option B", "Option C"],   ← 3 oder 4 Optionen
//     correct: 0 }                                      ← 0=A, 1=B, 2=C, 3=D
//
//   Typing (Freitext eingeben):
//   { type: "typing", topic: "<themeId>", subtopic: "<subtopicId>",
//     question: "Frage?",
//     answer: "Antwort" }                               ← eine Antwort
//   oder mehrere akzeptierte Antworten:
//     answer: ["Bücher", "die Bücher"] }
//   optional: hint: "Hinweis"  (erscheint klein unter der Frage)
//
// ═══════════════════════════════════════════════════════════════════════════════

export interface DeutschMCQ {
  type: "mcq";
  topic: string;
  subtopic: string;
  question: string;
  options: string[];
  correct: number;
}

export interface DeutschTyping {
  type: "typing";
  topic: string;
  subtopic: string;
  question: string;
  answer: string | string[];
  hint?: string;
}

/** Zeigt ein Wort an — Schüler klickt das passende Bild (4 image keys als Optionen) */
export interface DeutschBildWort {
  type: "bild-wort";
  topic: string;
  subtopic: string;
  question: string;   // das Zielwort, z.B. "Hund"
  options: string[];  // 4 image keys (aus G1_ICONS), correct zeigt auf den richtigen
  correct: number;
}

/** Zeigt ein Bild an — Schüler wählt den Anfangsbuchstaben (4 letter options) */
export interface DeutschAnlautBild {
  type: "anlaut-bild";
  topic: string;
  subtopic: string;
  question: string;   // image key (aus G1_ICONS), z.B. "hund"
  options: string[];  // 4 Buchstaben-Optionen, z.B. ["H","K","S","B"]
  correct: number;
}

export type DeutschQuestion = DeutschMCQ | DeutschTyping | DeutschBildWort | DeutschAnlautBild;

export interface DeutschSubtopic {
  id: string;
  name: string;
  questions: DeutschQuestion[];
}

export interface DeutschTheme {
  id: string;
  name: string;
  icon: string;
  color: string;
  subtopics: DeutschSubtopic[];
}

