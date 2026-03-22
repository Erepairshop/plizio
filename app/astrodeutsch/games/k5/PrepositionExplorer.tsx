"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Wechselpräpositionen",
    text1: "Wechselpräpositionen können mit Akkusativ oder Dativ stehen: in, auf, an, über, unter, vor, hinter, neben, zwischen.",
    q1: "Welche ist eine Wechselpräposition?",
    a1: "auf",
    b1: "seit",
    c1: "trotz",
    d1: "während",

    title2: "Akkusativ bei Bewegung",
    text2: "Wenn wir eine Bewegung zu etwas hin ausdrücken, verwenden wir Akkusativ: Ich gehe in die Schule.",
    q2: "Welcher Satz ist richtig?",
    a2: "Ich gehe in die Schule.",
    b2: "Ich gehe in der Schule.",
    c2: "Ich gehe auf dem Tisch.",
    d2: "Ich gehe auf der Tisch.",

    title3: "Dativ bei Ort",
    text3: "Wenn wir ausdrücken, wo etwas ist (kein Bewegung), verwenden wir Dativ: Das Buch liegt auf dem Tisch.",
    q3: "Welcher Satz drückt einen Ort aus?",
    a3: "Das Buch liegt auf dem Tisch.",
    b3: "Ich lege das Buch auf den Tisch.",
    c3: "Das Kind springt auf dem Bett.",
    d3: "Die Katze springt auf die Couch.",

    title4: "Unterordnende Konjunktionen",
    text4: "Unterordnende Konjunktionen verbinden Hauptsatz und Nebensatz: weil, obwohl, wenn, dass, während.",
    q4: "Welche ist eine unterordnende Konjunktion?",
    a4: "weil",
    b4: "und",
    c4: "aber",
    d4: "doch",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Präpositionen und Konjunktionen!",
    q5a: "Wechselpräposition: in oder auf?",
    a5a: "in",
    b5a: "seit",
    c5a: "trotz",
    d5a: "während",
    q5b: "Akkusativ oder Dativ? Der Stift liegt ___ dem Tisch.",
    a5b: "auf dem",
    b5b: "auf den",
    c5b: "in den",
    d5b: "an den",
    q5c: "Unterordnende Konjunktion: ___ es regnet, gehe ich nicht raus.",
    a5c: "Weil",
    b5c: "Und",
    c5c: "Aber",
    d5c: "Oder",
  },
  en: {
    title1: "Two-way Prepositions",
    text1: "Two-way prepositions can take accusative or dative: in, on, at, above, under, before, behind, beside, between.",
    q1: "Which is a two-way preposition?",
    a1: "on",
    b1: "since",
    c1: "despite",
    d1: "during",

    title2: "Accusative with Movement",
    text2: "When we express movement toward something, use accusative: I go into the school.",
    q2: "Which sentence is correct?",
    a2: "I go into the school.",
    b2: "I go into school.",
    c2: "I go on the table.",
    d2: "I go on table.",

    title3: "Dative for Location",
    text3: "When we say where something is (no movement), use dative: The book lies on the table.",
    q3: "Which sentence expresses a location?",
    a3: "The book lies on the table.",
    b3: "I put the book on the table.",
    c3: "The child jumps on the bed.",
    d3: "The cat jumps on the couch.",

    title4: "Subordinating Conjunctions",
    text4: "Subordinating conjunctions connect main and subordinate clauses: because, although, if, that, while.",
    q4: "Which is a subordinating conjunction?",
    a4: "because",
    b4: "and",
    c4: "but",
    d4: "yet",

    title5: "Big Test",
    text5: "Test your knowledge of prepositions and conjunctions!",
    q5a: "Two-way preposition: in or on?",
    a5a: "in",
    b5a: "since",
    c5a: "despite",
    d5a: "during",
    q5b: "Accusative or dative? The pen lies ___ the table.",
    a5b: "on the",
    b5b: "on",
    c5b: "in",
    d5b: "at",
    q5c: "Subordinating conjunction: ___ it rains, I don't go out.",
    a5c: "Because",
    b5c: "And",
    c5c: "But",
    d5c: "Or",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🔗</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">➡️</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">📍</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">⛓️</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🏆</text>
        </svg>
      ),
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "a5c" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function PrepositionExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
