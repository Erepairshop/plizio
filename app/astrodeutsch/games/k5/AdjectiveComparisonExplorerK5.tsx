"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Grundform (Positiv)",
    text1: "Die Grundform ist die Ausgangsform eines Adjektivs. Beispiele: groß, klein, schnell, schön.",
    q1: "Welche ist die Grundform?",
    a1: "schön",
    b1: "schöner",
    c1: "am schönsten",
    d1: "schönster",

    title2: "Komparativ",
    text2: "Der Komparativ vergleicht zwei Dinge. Wir bilden ihn mit -er. Beispiel: groß → größer.",
    q2: "Welche Form ist der Komparativ?",
    a2: "größer",
    b2: "groß",
    c2: "am größten",
    d2: "größtes",

    title3: "Superlativ",
    text3: "Der Superlativ drückt die höchste Stufe aus. Wir bilden ihn mit -sten oder -esten. Beispiel: schön → am schönsten.",
    q3: "Welches ist der Superlativ?",
    a3: "am schnellsten",
    b3: "schnell",
    c3: "schneller",
    d3: "schnelle",

    title4: "Unregelmäßige Adjektive",
    text4: "Einige Adjektive sind unregelmäßig. Wichtig: gut → besser → am besten; viel → mehr → am meisten.",
    q4: "Wie heißt der Komparativ von 'gut'?",
    a4: "besser",
    b4: "guter",
    c4: "am besten",
    d4: "güter",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über alle Steigerungsformen!",
    q5a: "Welche Form ist die Grundform von 'klein'?",
    a5a: "klein",
    b5a: "kleiner",
    c5a: "am kleinsten",
    d5a: "kleines",
    q5b: "Komparativ von 'alt'?",
    a5b: "älter",
    b5b: "alt",
    c5b: "am ältesten",
    d5b: "altes",
    q5c: "Superlativ von 'hoch'?",
    a5c: "am höchsten",
    b5c: "höher",
    c5c: "hoch",
    d5c: "hochsten",
  },
  en: {
    title1: "Basic Form (Positive)",
    text1: "The basic form is the starting form of an adjective. Examples: big, small, fast, beautiful.",
    q1: "Which is the basic form?",
    a1: "beautiful",
    b1: "more beautiful",
    c1: "most beautiful",
    d1: "beautifulest",

    title2: "Comparative",
    text2: "The comparative compares two things. We form it with -er. Example: big → bigger.",
    q2: "Which form is the comparative?",
    a2: "faster",
    b2: "fast",
    c2: "most fast",
    d2: "fastest",

    title3: "Superlative",
    text3: "The superlative expresses the highest degree. We form it with -est or -iest. Example: beautiful → most beautiful.",
    q3: "Which is the superlative?",
    a3: "fastest",
    b3: "fast",
    c3: "faster",
    d3: "fasten",

    title4: "Irregular Adjectives",
    text4: "Some adjectives are irregular. Important: good → better → best; many → more → most.",
    q4: "What is the comparative of 'good'?",
    a4: "better",
    b4: "gooder",
    c4: "best",
    d4: "more good",

    title5: "Big Test",
    text5: "Test your knowledge of all comparison forms!",
    q5a: "Which is the basic form of 'small'?",
    a5a: "small",
    b5a: "smaller",
    c5a: "smallest",
    d5a: "smallen",
    q5b: "Comparative of 'old'?",
    a5b: "older",
    b5b: "old",
    c5b: "oldest",
    d5b: "olden",
    q5c: "Superlative of 'high'?",
    a5c: "highest",
    b5c: "higher",
    c5c: "high",
    d5c: "highesten",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">📊</text></svg>,
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">➕</text></svg>,
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🏆</text></svg>,
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">⚡</text></svg>,
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">⭐</text></svg>,
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "a5c" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function AdjectiveComparisonExplorerK5({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
