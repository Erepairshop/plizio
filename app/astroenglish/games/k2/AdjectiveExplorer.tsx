"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Adjectives - Describing Words",
    r1_text: "Adjectives DESCRIBE nouns! They tell us about size, color, feelings, or qualities. Examples: big, small, red, happy, cold, loud.",
    r1_q: "Which is an adjective?",
    r1_a: "quickly",
    r1_b: "beautiful",
    r1_c: "walking",
    r1_d: "teacher",
    r2_title: "Colors & Sizes",
    r2_text: "SIZE adjectives: big, small, tiny, huge, little. COLOR adjectives: red, blue, yellow, green, orange, purple.",
    r2_q: "Which adjective describes a SIZE?",
    r2_a: "happy",
    r2_b: "cold",
    r2_c: "enormous",
    r2_d: "silly",
    r3_title: "Comparatives",
    r3_text: "COMPARATIVE adjectives compare two things. We add -ER: big → bigger, fast → faster. Or we use 'more': beautiful → more beautiful.",
    r3_q: "Which is a comparative adjective?",
    r3_a: "fast",
    r3_b: "faster",
    r3_c: "fastest",
    r3_d: "fastly",
    r4_title: "Adjective Review",
    r4_text: "Let's check what you learned!",
    r4_q1: "Do adjectives describe nouns or verbs?",
    r4_a1: "verbs",
    r4_b1: "nouns",
    r4_q2: "What is the comparative of 'tall'?",
    r4_a2: "tallest",
    r4_b2: "taller",
    r4_q3: "Which adjective describes a feeling?",
    r4_a3: "round",
    r4_b3: "happy",
    r5_title: "⭐ Adjective Master",
    r5_text: "You can describe anything!",
  },
  de: {
    r1_title: "Adjektive - Beschreibungswörter",
    r1_text: "Adjektive BESCHREIBEN Substantive! Sie sagen uns etwas über Größe, Farbe, Gefühle oder Qualitäten. Beispiele: groß, klein, rot, glücklich, kalt, laut.",
    r1_q: "Welches ist ein Adjektiv?",
    r1_a: "schnell",
    r1_b: "schön",
    r1_c: "laufen",
    r1_d: "lehrer",
    r2_title: "Farben & Größen",
    r2_text: "GRÖSSENADJEKTIVE: groß, klein, winzig, riesig, klein. FARBADJEKTIVE: rot, blau, gelb, grün, orange, lila.",
    r2_q: "Welches Adjektiv beschreibt eine GRÖSSE?",
    r2_a: "glücklich",
    r2_b: "kalt",
    r2_c: "gigantisch",
    r2_d: "dumm",
    r3_title: "Komparative",
    r3_text: "KOMPARATIVE Adjektive vergleichen zwei Dinge. Wir fügen -ER hinzu: groß → größer, schnell → schneller. Oder: schön → schöner.",
    r3_q: "Welches ist ein Komparativ-Adjektiv?",
    r3_a: "schnell",
    r3_b: "schneller",
    r3_c: "schnellste",
    r3_d: "schnelllich",
    r4_title: "Adjektiv-Wiederholung",
    r4_text: "Lass uns testen, was du gelernt hast!",
    r4_q1: "Beschreiben Adjektive Substantive oder Verben?",
    r4_a1: "Verben",
    r4_b1: "Substantive",
    r4_q2: "Was ist der Komparativ von 'groß'?",
    r4_a2: "größte",
    r4_b2: "größer",
    r4_q3: "Welches Adjektiv beschreibt ein Gefühl?",
    r4_a3: "rund",
    r4_b3: "glücklich",
    r5_title: "⭐ Adjektiv-Meister",
    r5_text: "Du kannst alles beschreiben!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            🎨
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
          <circle cx="80" cy="80" r="30" fill="#FF6B6B" />
          <circle cx="160" cy="80" r="20" fill="#4ECDC4" />
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
          <text x="80" y="100" textAnchor="middle" fontSize="32" fill="#FFC107">
            ⚖️
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            ❓
          </text>
        </svg>
      ),
      questions: [
        { question: "r4_q1", choices: ["r4_a1", "r4_b1"], answer: "r4_b1" },
        { question: "r4_q2", choices: ["r4_a2", "r4_b2"], answer: "r4_b2" },
        { question: "r4_q3", choices: ["r4_a3", "r4_b3"], answer: "r4_b3" },
      ],
    },
    {
      type: "info",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FFD700">
            ⭐
          </text>
        </svg>
      ),
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AdjectiveExplorer({ color = "#10B981", lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
