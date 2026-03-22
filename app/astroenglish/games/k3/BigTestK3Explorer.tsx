"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Grammar Review",
    r1_text: "Let's test what you learned about nouns, verbs, adjectives, pronouns, and adverbs!",
    r1_q: "Which word is an ADVERB?",
    r1_a: "happy",
    r1_b: "quickly",
    r1_c: "run",
    r1_d: "blue",
    r2_title: "Tenses Review",
    r2_text: "Remember: past tense (walked), present progressive (is walking), and future (will walk).",
    r2_q: "Which sentence is in PAST tense?",
    r2_a: "She will run tomorrow.",
    r2_b: "She is running now.",
    r2_c: "She ran yesterday.",
    r2_d: "She runs every day.",
    r3_title: "Punctuation Review",
    r3_text: "Direct speech uses quotation marks. Commas separate ideas. Periods end sentences.",
    r3_q: "Which is CORRECT?",
    r3_a: "\"I like pizza\" he said.",
    r3_b: "\"I like pizza,\" he said.",
    r3_c: "I like pizza he said.",
    r3_d: "\"I like pizza\" he said?",
    r4_title: "Vocabulary Review",
    r4_text: "Use context clues and word meanings!",
    r4_q: "What does 'reluctant' mean? 'He was reluctant to jump into the cold water.'",
    r4_a: "very happy",
    r4_b: "unwilling",
    r4_c: "excited",
    r4_d: "confused",
    r5_title: "⭐ Grade 3 Master",
    r5_text: "Congratulations! You mastered Grade 3 English!",
  },
  de: {
    r1_title: "Grammatik-Wiederholung",
    r1_text: "Lass uns testen, was du über Substantive, Verben, Adjektive, Pronomen und Adverbien gelernt hast!",
    r1_q: "Welches Wort ist ein ADVERB?",
    r1_a: "glücklich",
    r1_b: "schnell",
    r1_c: "rennen",
    r1_d: "blau",
    r2_title: "Zeiten-Wiederholung",
    r2_text: "Denk daran: Vergangenheit (lief), Gegenwart (läuft gerade), Zukunft (wird laufen).",
    r2_q: "Welcher Satz ist in VERGANGENHEIT?",
    r2_a: "Sie wird morgen rennen.",
    r2_b: "Sie rennt gerade.",
    r2_c: "Sie rannte gestern.",
    r2_d: "Sie rennt jeden Tag.",
    r3_title: "Satzzeichen-Wiederholung",
    r3_text: "Direkte Rede nutzt Anführungszeichen. Kommas trennen Ideen. Punkte beenden Sätze.",
    r3_q: "Welches ist RICHTIG?",
    r3_a: "\"Ich mag Pizza\" sagte er.",
    r3_b: "\"Ich mag Pizza,\" sagte er.",
    r3_c: "Ich mag Pizza sagte er.",
    r3_d: "\"Ich mag Pizza\" sagte er?",
    r4_title: "Wortschatz-Wiederholung",
    r4_text: "Nutze Kontexthilfen und Wortbedeutungen!",
    r4_q: "Was bedeutet 'zögernd'? 'Er war zögernd, ins kalte Wasser zu springen.'",
    r4_a: "sehr glücklich",
    r4_b: "unwillig",
    r4_c: "aufgeregt",
    r4_d: "verwirrt",
    r5_title: "⭐ Klasse-3-Meister",
    r5_text: "Glückwunsch! Du hast Englisch der 3. Klasse gemeistert!",
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
            📖
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">
            ⏰
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
            "
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            📚
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FBBF24">
            ⭐
          </text>
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

export default function BigTestK3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
