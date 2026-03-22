"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Komma vor Nebensatz",
    text1: "Vor unterordnenden Konjunktionen (weil, obwohl, wenn, dass) kommt immer ein Komma. Beispiel: Ich gehe spazieren, weil das Wetter schön ist.",
    q1: "Welcher Satz hat das Komma am richtigen Platz?",
    a1: "Ich gehe spazieren, weil das Wetter schön ist.",
    b1: "Ich gehe spazieren weil das Wetter schön ist.",
    c1: "Ich gehe, spazieren weil das Wetter schön ist.",
    d1: "Ich gehe spazieren, weil, das Wetter schön ist.",

    title2: "Komma bei Aufzählung",
    text2: "Bei Aufzählungen werden Kommas zwischen die Elemente gesetzt. Das letzte Element wird durch 'und' verbunden. Beispiel: Das Kind isst Äpfel, Birnen und Bananen.",
    q2: "Welche Aufzählung ist richtig?",
    a2: "Das Kind isst Äpfel, Birnen und Bananen.",
    b2: "Das Kind isst Äpfel Birnen und Bananen.",
    c2: "Das Kind isst, Äpfel, Birnen, und, Bananen.",
    d2: "Das Kind, isst Äpfel Birnen und Bananen.",

    title3: "Direkte Rede",
    text3: "Bei direkter Rede kommt ein Komma oder ein Doppelpunkt vor dem Satz des Sprechens. Beispiel: 'Hallo!', sagte das Kind. Oder: Das Kind sagte: 'Hallo!'",
    q3: "Welche direkte Rede ist richtig?",
    a3: "Das Kind sagte: 'Guten Morgen!'",
    b3: "Das Kind sagte 'Guten Morgen!'",
    c3: "'Guten Morgen' sagte das Kind.",
    d3: "'Guten Morgen' , sagte das Kind.",

    title4: "Satzzeichen kombiniert",
    text4: "Verschiedene Satzzeichen können kombiniert werden. Fragezeichen und Ausrufezeichen enden einen Satz. Kommas trennen Teile eines Satzes.",
    q4: "Welcher Satz ist richtig?",
    a4: "Wo gehst du hin, und warum?",
    b4: "Wo gehst du hin und warum",
    c4: "Wo gehst du hin? Und warum?",
    d4: "Wo gehst du hin , und warum,",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Zeichensetzung!",
    q5a: "Komma vor Nebensatz?",
    a5a: "Das Buch ist spannend, obwohl es alt ist.",
    b5a: "Das Buch ist spannend obwohl es alt ist.",
    c5a: "Das Buch ist, spannend obwohl es alt ist.",
    d5a: "Das Buch obwohl es alt ist, ist spannend.",
    q5b: "Direkte Rede richtig?",
    a5b: "'Hallo', sagte der Schüler.",
    b5b: "'Hallo' sagte der Schüler.",
    c5b: "Der Schüler sagte 'Hallo'",
    d5b: "Der Schüler 'Hallo' sagte.",
    q5c: "Aufzählung richtig?",
    a5c: "Ich brauche Papier, Stifte und Radiergummi.",
    b5c: "Ich brauche Papier Stifte und Radiergummi.",
    c5c: "Ich brauche, Papier, Stifte und Radiergummi.",
    d5c: "Ich brauche Papier, Stifte, und, Radiergummi.",
  },
  en: {
    title1: "Comma Before Subordinate Clause",
    text1: "A comma comes before subordinating conjunctions (because, although, if, that). Example: I go for a walk because the weather is nice.",
    q1: "Which sentence has the comma in the right place?",
    a1: "I go for a walk because the weather is nice.",
    b1: "I go for a walk, because the weather is nice.",
    c1: "I go, for a walk because the weather is nice.",
    d1: "I go for a walk because, the weather is nice.",

    title2: "Comma in Lists",
    text2: "Commas separate items in lists. The last item is connected with 'and'. Example: The child eats apples, pears, and bananas.",
    q2: "Which list is written correctly?",
    a2: "The child eats apples, pears, and bananas.",
    b2: "The child eats apples pears and bananas.",
    c2: "The child eats, apples, pears, and bananas.",
    d2: "The child, eats apples pears and bananas.",

    title3: "Direct Speech",
    text3: "In direct speech, use a colon or comma before the speaker's words. Example: The child said: 'Hello!' Or: 'Hello!', said the child.",
    q3: "Which direct speech is correct?",
    a3: "The child said: 'Good morning!'",
    b3: "The child said 'Good morning!'",
    c3: "'Good morning' said the child.",
    d3: "'Good morning', the child said.",

    title4: "Combined Punctuation",
    text4: "Different punctuation marks can be combined. Question marks and exclamation marks end a sentence. Commas separate parts of a sentence.",
    q4: "Which sentence is correct?",
    a4: "Where are you going, and why?",
    b4: "Where are you going and why",
    c4: "Where are you going? And why?",
    d4: "Where are you going, and why",

    title5: "Big Test",
    text5: "Test your knowledge of punctuation!",
    q5a: "Comma before subordinate clause?",
    a5a: "The book is exciting although it is old.",
    b5b: "The book is exciting, although it is old.",
    c5c: "The book is, exciting although it is old.",
    d5d: "The book although it is old, is exciting.",
    q5b: "Direct speech correct?",
    a5b: "'Hello', said the student.",
    b5b: "'Hello' said the student.",
    c5b: "The student said 'Hello'",
    d5b: "The student 'Hello' said.",
    q5c: "List correct?",
    a5c: "I need paper, pens, and erasers.",
    b5c: "I need paper pens and erasers.",
    c5c: "I need, paper, pens and erasers.",
    d5c: "I need paper, pens, and, erasers.",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">📌</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">📝</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">💬</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">❓</text>
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

export default function PunctuationExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
