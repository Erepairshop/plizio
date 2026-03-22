"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is an Adverb?",
    r1_text: "An adverb is a word that describes a VERB (action). It tells HOW something happens. Many adverbs end in -LY (quickly, slowly, happily, carefully).",
    r1_q: "Which word is an adverb?",
    r1_a: "quick",
    r1_b: "quickly",
    r1_c: "quickness",
    r1_d: "quick-running",
    r2_title: "Adverbs of Manner",
    r2_text: "Adverbs of manner tell HOW an action is done. They answer 'How?' Example: She runs QUICKLY. He speaks LOUDLY.",
    r2_q: "How does the bird fly?",
    r2_a: "The bird flies beautiful.",
    r2_b: "The bird flies beautifully.",
    r2_c: "The bird is flying.",
    r2_d: "The flying bird.",
    r3_title: "Adverbs of Time & Place",
    r3_text: "Adverbs of time tell WHEN (yesterday, today, now, tonight). Adverbs of place tell WHERE (here, there, outside, upstairs).",
    r3_q: "Which is an adverb of time?",
    r3_a: "forward",
    r3_b: "slowly",
    r3_c: "tomorrow",
    r3_d: "happily",
    r4_title: "Adverb Review",
    r4_text: "Identify the adverbs in these sentences!",
    r4_q: "The children played outside HAPPILY.",
    r4_a: "children",
    r4_b: "played",
    r4_c: "outside and happily",
    r4_d: "the",
    r5_title: "⭐ Adverb Expert",
    r5_text: "Perfect! You know how adverbs describe actions!",
  },
  de: {
    r1_title: "Was ist ein Adverb?",
    r1_text: "Ein Adverb ist ein Wort, das ein VERB (Handlung) beschreibt. Es sagt WIE etwas passiert. Viele Adverbien enden in -LY (schnell, langsam, glücklich, sorgfältig).",
    r1_q: "Welches Wort ist ein Adverb?",
    r1_a: "schnell",
    r1_b: "schnell (Adverb)",
    r1_c: "Schnelligkeit",
    r1_d: "schnell-laufen",
    r2_title: "Adverbien der Art",
    r2_text: "Adverbien der Art sagen WIE eine Handlung ausgeführt wird. Sie beantworten 'Wie?' Beispiel: Sie rennt SCHNELL. Er spricht LAUT.",
    r2_q: "Wie fliegt der Vogel?",
    r2_a: "Der Vogel fliegt schön.",
    r2_b: "Der Vogel fliegt schön.",
    r2_c: "Der Vogel ist fliegend.",
    r2_d: "Der fliegende Vogel.",
    r3_title: "Adverbien von Zeit & Ort",
    r3_text: "Adverbien der Zeit sagen WANN (gestern, heute, jetzt, heute Nacht). Adverbien des Ortes sagen WO (hier, dort, außen, oben).",
    r3_q: "Welches ist ein Zeitadverb?",
    r3_a: "vorwärts",
    r3_b: "langsam",
    r3_c: "morgen",
    r3_d: "glücklich",
    r4_title: "Adverb-Wiederholung",
    r4_text: "Identifiziere die Adverbien in diesen Sätzen!",
    r4_q: "Die Kinder spielten draußen GLÜCKLICH.",
    r4_a: "Kinder",
    r4_b: "spielten",
    r4_c: "draußen und glücklich",
    r4_d: "die",
    r5_title: "⭐ Adverb-Experte",
    r5_text: "Perfekt! Du weißt, wie Adverbien Handlungen beschreiben!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#A78BFA">
            ⚡
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#34D399">
            🏃
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FB923C">
            🕐
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            ✓
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FBBF24">
            ⭐
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_c" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AdverbExplorerK3({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
