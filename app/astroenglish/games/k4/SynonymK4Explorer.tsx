"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Synonyms",
    r1_text: "SYNONYMS are words that mean almost the same. Examples: happy/joyful, big/large, scared/afraid, beautiful/pretty, quick/fast.",
    r1_q: "Which is a synonym of 'happy'?",
    r1_a: "sad",
    r1_b: "glad",
    r1_c: "angry",
    r1_d: "quiet",
    r2_title: "Antonyms",
    r2_text: "ANTONYMS are words that mean the opposite. Examples: happy/sad, big/small, hot/cold, brave/cowardly, fast/slow.",
    r2_q: "Which is an antonym of 'clean'?",
    r2_a: "pure",
    r2_b: "neat",
    r2_c: "dirty",
    r2_d: "bright",
    r3_title: "Similes",
    r3_text: "A SIMILE compares two things using 'as...as' or 'like'. Examples: 'as strong as an ox', 'like a bird', 'brave as a lion'.",
    r3_q: "Which is a SIMILE?",
    r3_a: "The sky is blue.",
    r3_b: "She is smart.",
    r3_c: "Her eyes were like stars.",
    r3_d: "He runs.",
    r4_title: "Metaphors",
    r4_text: "A METAPHOR compares two things WITHOUT using 'like' or 'as'. Examples: 'Time is money', 'Life is a journey', 'The world is a stage'.",
    r4_q: "Which is a METAPHOR?",
    r4_a: "The rain fell like tears.",
    r4_b: "Time is a thief.",
    r4_c: "Her hair was like silk.",
    r4_d: "The cat is as soft as cotton.",
    r5_title: "⭐ Wordplay Expert",
    r5_text: "Excellent! You understand synonyms, antonyms, similes, and metaphors!",
  },
  de: {
    r1_title: "Synonyme",
    r1_text: "SYNONYME sind Wörter, die fast dasselbe bedeuten. Beispiele: glücklich/freudig, groß/gigantisch, verängstigt/verängstigt, schön/hübsch, schnell/rasch.",
    r1_q: "Welches ist ein Synonym von 'glücklich'?",
    r1_a: "traurig",
    r1_b: "erfreut",
    r1_c: "wütend",
    r1_d: "ruhig",
    r2_title: "Antonyme",
    r2_text: "ANTONYME sind Wörter, die das Gegenteil bedeuten. Beispiele: glücklich/traurig, groß/klein, heiß/kalt, mutig/feige, schnell/langsam.",
    r2_q: "Welches ist ein Antonym von 'sauber'?",
    r2_a: "rein",
    r2_b: "gepflegt",
    r2_c: "schmutzig",
    r2_d: "hell",
    r3_title: "Vergleiche (Similes)",
    r3_text: "Ein VERGLEICH vergleicht zwei Dinge mit 'wie' oder 'ähnlich'. Beispiele: 'stark wie ein Stier', 'wie ein Vogel', 'mutig wie ein Löwe'.",
    r3_q: "Welches ist ein VERGLEICH?",
    r3_a: "Der Himmel ist blau.",
    r3_b: "Sie ist schlau.",
    r3_c: "Ihre Augen waren wie Sterne.",
    r3_d: "Er rennt.",
    r4_title: "Metaphern",
    r4_text: "Eine METAPHER vergleicht zwei Dinge OHNE 'wie' oder 'ähnlich'. Beispiele: 'Zeit ist Geld', 'Das Leben ist eine Reise', 'Die Welt ist eine Bühne'.",
    r4_q: "Welches ist eine METAPHER?",
    r4_a: "Der Regen fiel wie Tränen.",
    r4_b: "Die Zeit ist ein Dieb.",
    r4_c: "Ihr Haar war wie Seide.",
    r4_d: "Die Katze ist so weich wie Baumwolle.",
    r5_title: "⭐ Wortspiel-Experte",
    r5_text: "Ausgezeichnet! Du verstehst Synonyme, Antonyme, Vergleiche und Metaphern!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">=</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">↔️</text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">🦁</text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">✨</text>
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

export default function SynonymK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
