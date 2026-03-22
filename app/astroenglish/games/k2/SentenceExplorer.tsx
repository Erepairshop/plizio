"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is a Sentence?",
    r1_text: "A SENTENCE is a group of words that tells a COMPLETE IDEA. It starts with a CAPITAL letter and ends with a period (.) or question mark (?).",
    r1_q: "Which is a complete sentence?",
    r1_a: "the cat",
    r1_b: "sat on the mat.",
    r1_c: "The cat sat on the mat.",
    r1_d: "sleeping",
    r2_title: "Statements",
    r2_text: "STATEMENTS tell us FACTS or IDEAS. They end with a PERIOD (.). Example: 'The bird flies in the sky.' 'She likes apples.'",
    r2_q: "Which is a statement?",
    r2_a: "Do you like pizza?",
    r2_b: "Watch out!",
    r2_c: "The sun is hot.",
    r2_d: "Help me now!",
    r3_title: "Questions & Exclamations",
    r3_text: "QUESTIONS ask something. They end with a QUESTION MARK (?). EXCLAMATIONS show strong feelings! They end with an EXCLAMATION MARK (!).",
    r3_q: "Which is a question?",
    r3_a: "The cat is orange.",
    r3_b: "What is your name?",
    r3_c: "What a big dog!",
    r3_d: "I love soccer.",
    r4_title: "Sentence Review",
    r4_text: "Let's check what you learned!",
    r4_q1: "Do sentences need capital letters?",
    r4_a1: "no",
    r4_b1: "yes",
    r4_q2: "What punctuation ends a question?",
    r4_a2: "period",
    r4_b2: "question mark",
    r4_q3: "Which shows strong feeling?",
    r4_a3: "statement.",
    r4_b3: "exclamation!",
    r5_title: "⭐ Sentence Master",
    r5_text: "You can write perfect sentences!",
  },
  de: {
    r1_title: "Was ist ein Satz?",
    r1_text: "Ein SATZ ist eine Gruppe von Wörtern, die eine VOLLSTÄNDIGE IDEE ausdrückt. Er beginnt mit einem GROSSBUCHSTABEN und endet mit einem Punkt (.) oder Fragezeichen (?).",
    r1_q: "Welcher ist ein vollständiger Satz?",
    r1_a: "die katze",
    r1_b: "saß auf der matte.",
    r1_c: "Die Katze saß auf der Matte.",
    r1_d: "schlafen",
    r2_title: "Aussagesätze",
    r2_text: "AUSSAGESÄTZE teilen uns FAKTEN oder IDEEN mit. Sie enden mit einem PUNKT (.). Beispiel: 'Der Vogel fliegt am Himmel.' 'Sie mag Äpfel.'",
    r2_q: "Welcher ist ein Aussagesatz?",
    r2_a: "Magst du Pizza?",
    r2_b: "Pass auf!",
    r2_c: "Die Sonne ist heiß.",
    r2_d: "Hilf mir jetzt!",
    r3_title: "Fragen & Ausrufe",
    r3_text: "FRAGEN stellen etwas. Sie enden mit einem FRAGEZEICHEN (?). AUSRUFESÄTZE zeigen starke Gefühle! Sie enden mit einem AUSRUFEZEICHEN (!).",
    r3_q: "Welcher ist eine Frage?",
    r3_a: "Die Katze ist orange.",
    r3_b: "Wie heißt du?",
    r3_c: "Was für ein großer Hund!",
    r3_d: "Ich liebe Fußball.",
    r4_title: "Satz-Wiederholung",
    r4_text: "Lass uns testen, was du gelernt hast!",
    r4_q1: "Brauchen Sätze Großbuchstaben?",
    r4_a1: "nein",
    r4_b1: "ja",
    r4_q2: "Welches Satzzeichen endet eine Frage?",
    r4_a2: "punkt",
    r4_b2: "fragezeichen",
    r4_q3: "Welcher zeigt starkes Gefühl?",
    r4_a3: "aussagesatz.",
    r4_b3: "ausrufezeichen!",
    r5_title: "⭐ Satz-Meister",
    r5_text: "Du kannst perfekte Sätze schreiben!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            💬
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="120" cy="80" r="40" fill="none" stroke="#6366F1" strokeWidth="2" />
          <text x="120" y="95" textAnchor="middle" fontSize="40" fill="#6366F1">
            .
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
          <text x="80" y="100" textAnchor="middle" fontSize="40" fill="#EF4444">
            ?
          </text>
          <text x="160" y="100" textAnchor="middle" fontSize="40" fill="#FFD700">
            !
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

export default function SentenceExplorer({ color = "#F59E0B", lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
