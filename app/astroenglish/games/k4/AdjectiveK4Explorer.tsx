"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Adjective Order",
    r1_text: "Adjectives come in a certain order: Opinion-Size-Age-Shape-Colour-Origin. Example: 'a beautiful big old round red English apple' (not 'a red beautiful big...').",
    r1_q: "Which order is CORRECT?",
    r1_a: "a round big apple",
    r1_b: "a big round apple",
    r1_c: "a apple round big",
    r1_d: "a big apple round",
    r2_title: "Multiple Adjectives",
    r2_text: "When using two adjectives from the same category, use 'and'. Example: 'a big AND small toy' (both size). But 'a big round toy' (size-shape, no 'and').",
    r2_q: "Which is CORRECT?",
    r2_a: "a blue AND red ball",
    r2_b: "a blue red ball",
    r2_c: "a blue, red ball",
    r2_d: "a red and blue ball",
    r3_title: "Adjective Phrases",
    r3_text: "Adjective phrases give more information. Example: 'the house with the red door' describes WHICH house. Use prepositional phrases.",
    r3_q: "Which is an adjective PHRASE?",
    r3_a: "beautiful house",
    r3_b: "very beautiful",
    r3_c: "the girl in the red dress",
    r3_d: "quickly run",
    r4_title: "Comparative Adjectives",
    r4_text: "Comparatives compare two things. Add -ER or use 'more': 'bigger' or 'more beautiful'. Example: This apple is BIGGER than that one.",
    r4_q: "Which is CORRECT?",
    r4_a: "This house is biger than that one.",
    r4_b: "This house is bigger than that one.",
    r4_c: "This house is more bigger than that one.",
    r4_d: "This house is beautifuller than that one.",
    r5_title: "⭐ Adjective Expert",
    r5_text: "Perfect! You understand adjective order and usage!",
  },
  de: {
    r1_title: "Adjektiv-Reihenfolge",
    r1_text: "Adjektive kommen in einer bestimmten Reihenfolge: Meinung-Größe-Alter-Form-Farbe-Herkunft. Beispiel: 'ein schöner großer alter runder roter englischer Apfel' (nicht 'ein roter schöner großer...').",
    r1_q: "Welche Reihenfolge ist RICHTIG?",
    r1_a: "ein runder großer Apfel",
    r1_b: "ein großer runder Apfel",
    r1_c: "ein Apfel rund groß",
    r1_d: "ein großer Apfel rund",
    r2_title: "Mehrere Adjektive",
    r2_text: "Wenn zwei Adjektive aus der gleichen Kategorie verwendet werden, nutze 'und'. Beispiel: 'ein großes UND kleines Spielzeug' (beide Größe). Aber 'ein großes rundes Spielzeug' (Größe-Form, kein 'und').",
    r2_q: "Welches ist RICHTIG?",
    r2_a: "ein blauer UND roter Ball",
    r2_b: "ein blau roter Ball",
    r2_c: "ein blauer, roter Ball",
    r2_d: "ein roter und blauer Ball",
    r3_title: "Adjektivische Phrasen",
    r3_text: "Adjektivische Phrasen geben mehr Information. Beispiel: 'das Haus mit der roten Tür' beschreibt, WELCHES Haus. Nutze Präpositionalphrasen.",
    r3_q: "Welches ist eine adjektivische PHRASE?",
    r3_a: "schönes Haus",
    r3_b: "sehr schön",
    r3_c: "das Mädchen im roten Kleid",
    r3_d: "schnell rennen",
    r4_title: "Vergleichende Adjektive",
    r4_text: "Vergleiche vergleichen zwei Dinge. Füge -ER hinzu oder nutze 'mehr': 'größer' oder 'schöner'. Beispiel: Dieser Apfel ist GRÖSSER als jener.",
    r4_q: "Welches ist RICHTIG?",
    r4_a: "Dieses Haus ist großrer als jenes.",
    r4_b: "Dieses Haus ist größer als jenes.",
    r4_c: "Dieses Haus ist mehr größer als jenes.",
    r4_d: "Dieses Haus ist schönerer als jenes.",
    r5_title: "⭐ Adjektiv-Experte",
    r5_text: "Perfekt! Du verstehst Adjektiv-Reihenfolge und Verwendung!",
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
            📐
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
            🎨
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_d" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            📝
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
            ⚖️
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

export default function AdjectiveK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
