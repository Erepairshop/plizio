// ─── DEUTSCH TEST — LESETEXTE ─────────────────────────────────────────────────
// Lesetexte für Klasse 1–8 mit MCQ- und Typing-Fragen
//
// ═══════════════════════════════════════════════════════════════════════════════
// FORMAT — so fügst du Texte und Fragen ein:
//
//   text:  Der eigentliche Lesetext (mehrere Sätze)
//   title: Überschrift des Textes (optional aber empfohlen)
//
//   MCQ-Frage:
//   { type: "mcq",
//     question: "Was macht Max?",
//     options: ["schlafen", "spielen", "lesen", "essen"],
//     correct: 1 }        ← Index der richtigen Antwort (0 = erste Option)
//
//   Typing-Frage:
//   { type: "typing",
//     question: "Welche Farbe hat der Ball?",
//     answer: "rot" }     ← oder mehrere: answer: ["rot", "Rot"]
//
// ═══════════════════════════════════════════════════════════════════════════════

export interface LeseQuestion {
  type: "mcq" | "typing";
  question: string;
  options?: string[];       // nur bei mcq
  correct?: number;         // nur bei mcq (0-indexed)
  answer?: string | string[]; // nur bei typing
}

export interface Lesepassage {
  id: string;
  title: string;
  text: string;
  questions: LeseQuestion[];
}

export const LESETEST: Record<number, Lesepassage[]> = {

  // ─── KLASSE 1 ─── (2-3 einfache Sätze · wer? was? wo? welche Farbe?)
  1: [
    {
      id: "k1_1",
      title: "", // TODO: Titel eintragen
      text: "",  // TODO: 2-3 einfache Sätze eintragen
                 // Beispiel: "Max spielt im Garten. Er hat einen Ball. Der Ball ist rot."
      questions: [
        // TODO: 2-3 Fragen eintragen
        // Beispiel:
        // { type: "mcq", question: "Was macht Max?", options: ["schlafen","spielen","lesen","essen"], correct: 1 },
        // { type: "typing", question: "Welche Farbe hat der Ball?", answer: "rot" },
      ],
    },
    {
      id: "k1_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k1_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 2 ─── (4-5 Sätze · Handlung, Figuren, einfache Kausalität)
  2: [
    {
      id: "k2_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k2_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k2_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 3 ─── (5-7 Sätze · Erzählung, Hauptfigur, Ursache-Wirkung)
  3: [
    {
      id: "k3_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k3_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k3_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 4 ─── (8-10 Sätze + Dialog · Figuren, Gefühle, Handlungsverlauf)
  4: [
    {
      id: "k4_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k4_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k4_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 5 ─── (Sachtext · Natur, Tiere, Schule · Informationen entnehmen)
  5: [
    {
      id: "k5_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k5_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k5_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 6 ─── (Zeitungsartikel-Stil · Hauptaussage, Details, Autor-Absicht)
  6: [
    {
      id: "k6_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k6_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k6_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 7 ─── (Literarischer Text · Erzählperspektive, Stimmung, Stilmittel)
  7: [
    {
      id: "k7_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k7_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k7_3",
      title: "",
      text: "",
      questions: [],
    },
  ],

  // ─── KLASSE 8 ─── (Argumentativer Text · These, Argumente, Schlussfolgerung)
  8: [
    {
      id: "k8_1",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k8_2",
      title: "",
      text: "",
      questions: [],
    },
    {
      id: "k8_3",
      title: "",
      text: "",
      questions: [],
    },
  ],
};

/** Gibt eine zufällige, ausgefüllte Passage für die Klassenstufe zurück. */
export function getRandomPassage(grade: number): Lesepassage | null {
  const all = LESETEST[grade] ?? [];
  const filled = all.filter((p) => p.text.trim().length > 0 && p.questions.length > 0);
  if (filled.length === 0) return null;
  return filled[Math.floor(Math.random() * filled.length)];
}
