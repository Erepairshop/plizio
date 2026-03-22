"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Simple Past Tense",
    r1_text: "Past tense describes actions that already happened. Many verbs add -ED (played, walked). Some are irregular (went, ate, saw).",
    r1_q: "Which is past tense?",
    r1_a: "played",
    r1_b: "plays",
    r1_c: "play",
    r1_d: "playing",
    r2_title: "Present Progressive",
    r2_text: "Present progressive is happening RIGHT NOW. Use 'is/are' + verb-ING (is playing, are running, is eating).",
    r2_q: "What is the present progressive form of 'run'?",
    r2_a: "ran",
    r2_b: "runs",
    r2_c: "is running",
    r2_d: "running",
    r3_title: "Future Tense (will)",
    r3_text: "Future tense is about things that WILL happen. Use 'will' + verb (will play, will go, will eat).",
    r3_q: "Which sentence uses future tense?",
    r3_a: "She plays soccer.",
    r3_b: "She played soccer.",
    r3_c: "She will play soccer.",
    r3_d: "She is playing soccer.",
    r4_title: "Tense Review",
    r4_text: "Choose the correct tense for each sentence!",
    r4_q: "The children _____ outside yesterday.",
    r4_a: "will play",
    r4_b: "play",
    r4_c: "played",
    r4_d: "are playing",
    r5_title: "⭐ Tense Master",
    r5_text: "Great work! You understand past, present, and future!",
  },
  de: {
    r1_title: "Einfache Vergangenheit",
    r1_text: "Vergangenheit beschreibt bereits passierte Aktionen. Viele Verben bekommen -ED (spielte, ging). Einige sind unregelmäßig (ging, aß, sah).",
    r1_q: "Welches ist Vergangenheit?",
    r1_a: "spielte",
    r1_b: "spielt",
    r1_c: "spielen",
    r1_d: "spielend",
    r2_title: "Gegenwart (Verlauf)",
    r2_text: "Gegenwart mit Verlauf passiert JETZT. Nutze 'ist/sind' + Verb-ING (spielt, rennen, isst).",
    r2_q: "Was ist die gegenwärtige Verlaufsform von 'rennen'?",
    r2_a: "rannte",
    r2_b: "rennt",
    r2_c: "ist am Rennen",
    r2_d: "rennend",
    r3_title: "Zukunft (wird)",
    r3_text: "Zukunft ist über Dinge, die PASSIEREN WERDEN. Nutze 'wird' + Verb (wird spielen, wird gehen, wird essen).",
    r3_q: "Welcher Satz nutzt Zukunftsform?",
    r3_a: "Sie spielt Fußball.",
    r3_b: "Sie spielte Fußball.",
    r3_c: "Sie wird Fußball spielen.",
    r3_d: "Sie spielt gerade Fußball.",
    r4_title: "Zeiten-Wiederholung",
    r4_text: "Wähle die korrekte Zeit für jeden Satz!",
    r4_q: "Die Kinder _____ gestern draußen.",
    r4_a: "werden spielen",
    r4_b: "spielen",
    r4_c: "spielten",
    r4_d: "spielen gerade",
    r5_title: "⭐ Zeiten-Meister",
    r5_text: "Großartig! Du verstehst Vergangenheit, Gegenwart und Zukunft!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">
            ⏰
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">
            💨
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            🔮
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

export default function TenseExplorerK3({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
