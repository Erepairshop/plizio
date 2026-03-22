"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Aktiv und Passiv",
    text1: "Im Aktiv ist das Subjekt die handelnde Person. Im Passiv ist das Subjekt die handelnde Sache oder Person. Beispiel Aktiv: Der Hund frisst das Fleisch. Passiv: Das Fleisch wird vom Hund gefressen.",
    q1: "Welcher Satz ist Passiv?",
    a1: "Das Haus wird vom Maler gestrichen.",
    b1: "Der Maler streicht das Haus.",
    c1: "Die Farbe ist schön.",
    d1: "Der Maler arbeitet schnell.",

    title2: "Vorgangspassiv (werden)",
    text2: "Das Vorgangspassiv drückt aus, dass etwas gerade passiert. Bildung: werden + Partizip II. Beispiel: Das Fenster wird geöffnet. (Das Fenster wird gerade geöffnet.)",
    q2: "Vorgangspassiv von 'Das Kind isst einen Apfel'?",
    a2: "Der Apfel wird vom Kind gegessen.",
    b2: "Der Apfel ist vom Kind gegessen.",
    c2: "Der Apfel wird gegessen vom Kind.",
    d2: "Das Kind wird einen Apfel essen.",

    title3: "Zustandspassiv (sein)",
    text3: "Das Zustandspassiv drückt aus, dass etwas schon fertig ist. Bildung: sein + Partizip II. Beispiel: Das Fenster ist geöffnet. (Das Fenster ist bereits offen.)",
    q3: "Welcher Satz ist Zustandspassiv?",
    a3: "Das Buch ist geschrieben.",
    b3: "Das Buch wird geschrieben.",
    c3: "Das Buch hat geschrieben.",
    d3: "Das Buch schreibt.",

    title4: "Umwandlung von Aktiv zu Passiv",
    text4: "Bei der Umwandlung wird die Akkusativ-Ergänzung zum Nominativ-Subjekt und das Nominativ-Subjekt zu einer Präpositions-Phrase.",
    q4: "Passiv von 'Die Lehrerin erklärt die Lektion'?",
    a4: "Die Lektion wird von der Lehrerin erklärt.",
    b4: "Die Lehrerin wird die Lektion erklärt.",
    c4: "Die Lektion wird erklärt die Lehrerin.",
    d4: "Die Lektion wird die Lehrerin erklärt.",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Aktiv und Passiv!",
    q5a: "Aktiv oder Passiv? 'Der Baum wird gepflanzt.'",
    a5a: "Passiv",
    b5a: "Aktiv",
    c5a: "Keine Antwort",
    d5a: "Perfekt",
    q5b: "Vorgangspassiv oder Zustandspassiv? 'Der Brief ist geschrieben.'",
    a5b: "Zustandspassiv",
    b5b: "Vorgangspassiv",
    c5b: "Aktiv",
    d5b: "Präteritum",
    q5c: "Aktiv: 'Die Schüler lösen die Aufgabe.' Passiv?",
    a5c: "Die Aufgabe wird von den Schülern gelöst.",
    b5c: "Die Aufgabe wird gelöst die Schüler.",
    c5c: "Die Schüler wird die Aufgabe gelöst.",
    d5c: "Die Aufgabe löst die Schüler.",
  },
  en: {
    title1: "Active and Passive",
    text1: "In active voice, the subject performs the action. In passive voice, the subject receives the action. Active example: The dog eats the meat. Passive: The meat is eaten by the dog.",
    q1: "Which sentence is passive?",
    a1: "The house is painted by the painter.",
    b1: "The painter paints the house.",
    c1: "The paint is beautiful.",
    d1: "The painter works quickly.",

    title2: "Process Passive (become/be)",
    text2: "The process passive expresses that something is happening. Formation: be + Participle II. Example: The window is opened. (The window is being opened.)",
    q2: "Passive of 'The child eats an apple'?",
    a2: "The apple is eaten by the child.",
    b2: "The apple is eaten from the child.",
    c2: "The apple be eaten by the child.",
    d2: "The child will eat an apple.",

    title3: "State Passive (be)",
    text3: "The state passive expresses that something is already finished. Formation: be + Participle II. Example: The window is open. (The window is already open.)",
    q3: "Which sentence is state passive?",
    a3: "The book is written.",
    b3: "The book is being written.",
    c3: "The book has written.",
    d3: "The book writes.",

    title4: "Converting Active to Passive",
    text4: "In conversion, the accusative object becomes the nominative subject, and the nominative subject becomes a prepositional phrase.",
    q4: "Passive of 'The teacher explains the lesson'?",
    a4: "The lesson is explained by the teacher.",
    b4: "The teacher is explained the lesson.",
    c4: "The lesson is explained the teacher.",
    d4: "The lesson explains the teacher.",

    title5: "Big Test",
    text5: "Test your knowledge of active and passive voice!",
    q5a: "Active or passive? 'The tree is planted.'",
    a5a: "Passive",
    b5a: "Active",
    c5a: "No answer",
    d5a: "Perfect",
    q5b: "Process or state passive? 'The letter is written.'",
    a5b: "State passive",
    b5b: "Process passive",
    c5b: "Active",
    d5b: "Past tense",
    q5c: "Active: 'The students solve the task.' Passive?",
    a5c: "The task is solved by the students.",
    b5c: "The task is solved the students.",
    c5c: "The students is solved the task.",
    d5c: "The task solves the students.",
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
          <text x="120" y="100" textAnchor="middle" fontSize="60">🔄</text>
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
          <text x="120" y="100" textAnchor="middle" fontSize="60">🚀</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🏛️</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">↔️</text>
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

export default function PassiveExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
