"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Capitalization Rules",
    r1_text: "Capitalize: first word of sentence, proper nouns (names, places), 'I', days, months, holidays, titles. Example: Monday, John, The United States.",
    r1_q: "Which is CORRECT?",
    r1_a: "the dog ran in central park.",
    r1_b: "The dog ran in Central Park.",
    r1_c: "The dog Ran In Central Park.",
    r1_d: "the Dog ran in central park.",
    r2_title: "Proper Nouns",
    r2_text: "Proper nouns name specific people, places, organizations. CAPITALIZE them. Examples: Sarah, Texas, Google, Christmas, Monday.",
    r2_q: "Which word needs capitalization?",
    r2_a: "I went to france last summer.",
    r2_b: "I went to France last summer.",
    r2_c: "I Went To France Last Summer.",
    r2_d: "i went to france last summer.",
    r3_title: "Titles & Headings",
    r3_text: "Capitalize important words in titles. Do NOT capitalize small words (a, an, the, and, or, but) unless first. Example: 'The King of the Jungle'.",
    r3_q: "Which title is CORRECT?",
    r3_a: "the wonder of nature",
    r3_b: "The Wonder of Nature",
    r3_c: "The wonder Of Nature",
    r3_d: "THE WONDER OF NATURE",
    r4_title: "Punctuation & Capitals",
    r4_text: "Capitalize after periods, question marks, and exclamation points (new sentences). Example: 'He smiled. She laughed.' (both S capitalize).",
    r4_q: "Which is CORRECT?",
    r4_a: "she asked, \"will you help me?\"",
    r4_b: "She asked, \"Will you help me?\"",
    r4_c: "She asked, \"will you help me?\"",
    r4_d: "She asked \"will you help me?\"",
    r5_title: "⭐ Capitalization Expert",
    r5_text: "Perfect! You know all capitalization rules!",
  },
  de: {
    r1_title: "Großschreibungs-Regeln",
    r1_text: "Großschreiben: erstes Wort des Satzes, Eigennamen (Namen, Orte), 'Ich', Tage, Monate, Feiertage, Titel. Beispiel: Montag, John, Die Vereinigten Staaten.",
    r1_q: "Welches ist RICHTIG?",
    r1_a: "der hund rannte im central park.",
    r1_b: "Der Hund rannte im Central Park.",
    r1_c: "Der Hund Rannte Im Central Park.",
    r1_d: "der Hund rannte im central park.",
    r2_title: "Eigennamen",
    r2_text: "Eigennamen benennen spezifische Menschen, Orte, Organisationen. GROßSCHREIB sie. Beispiele: Sarah, Texas, Google, Weihnachten, Montag.",
    r2_q: "Welches Wort muss großgeschrieben werden?",
    r2_a: "Ich bin letzten sommer nach frankreich gegangen.",
    r2_b: "Ich bin letzten Sommer nach Frankreich gegangen.",
    r2_c: "Ich Bin Letzten Sommer Nach Frankreich Gegangen.",
    r2_d: "ich bin letzten sommer nach frankreich gegangen.",
    r3_title: "Titel & Überschriften",
    r3_text: "Großschreiben von wichtigen Wörtern in Titeln. NICHT kleine Wörter (ein, eine, der, die, und, oder, aber) großschreiben, es sei denn, sie sind erste. Beispiel: 'Das Wunder der Natur'.",
    r3_q: "Welcher Titel ist RICHTIG?",
    r3_a: "das wunder der natur",
    r3_b: "Das Wunder der Natur",
    r3_c: "Das Wunder Der Natur",
    r3_d: "DAS WUNDER DER NATUR",
    r4_title: "Satzzeichen & Großbuchstaben",
    r4_text: "Großschreiben nach Punkten, Fragezeichen und Ausrufezeichen (neue Sätze). Beispiel: 'Er lächelte. Sie lachte.' (beide S großschreiben).",
    r4_q: "Welches ist RICHTIG?",
    r4_a: "sie fragte, \"wirst du mir helfen?\"",
    r4_b: "Sie fragte, \"Wirst du mir helfen?\"",
    r4_c: "Sie fragte, \"wirst du mir helfen?\"",
    r4_d: "Sie fragte \"wirst du mir helfen?\"",
    r5_title: "⭐ Großschreibungs-Experte",
    r5_text: "Perfekt! Du kennst alle Großschreibungsregeln!",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">🅰️</text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">📍</text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">📚</text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">✓</text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FBBF24">⭐</text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function CapitalK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
