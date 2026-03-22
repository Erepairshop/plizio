"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Advanced Comma Rules", tx1: "Oxford comma: 'red, blue, and green.' Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.",
    q1: "Which uses commas correctly?", a1: "She likes red blue and green", b1: "She likes red, blue, and green", c1: "She likes, red blue, green", d1: "She likes red blue, green",
    t2: "Semicolon Usage", tx2: "Links two related independent clauses: 'I love pizza; it's delicious.' Can also separate items in complex lists.",
    q2: "Which uses semicolon correctly?", a2: "She studied hard; therefore she passed", b2: "She studied hard, therefore she passed", c2: "She studied hard therefore she passed", d2: "She studied hard; while she passed",
    t3: "Dashes & Parentheses", tx3: "Em dash (—) adds emphasis or interruption: 'I was—believe it or not—tired.' Parentheses add extra info: '(surprisingly) he agreed.'",
    q3: "Which is punctuated correctly?", a3: "He said—wait let me think—never mind", b3: "He said—wait, let me think—never mind", c3: "He said wait, let me think, never mind", d3: "He said (wait) let me think never mind",
    t4: "Colon Usage", tx4: "Introduces lists: 'She bought: apples, oranges, milk.' Introduces explanations: 'Here's why: it's too expensive.' Can separate titles: 'Book: The Story.'",
    q4: "Which uses colons correctly?", a4: "She bought apples oranges and milk", b4: "She bought: apples, oranges, and milk", c4: "She bought; apples, oranges, milk", d4: "She bought, apples oranges milk",
    t5: "Quotation & Punctuation", tx5: "Place periods/commas INSIDE quotes: 'She said, \"hello.\"' Question marks: inside if part of quote: '\"What?\" he asked.' Outside otherwise: 'Did he say \"hello\"?'",
    q5: "Which is correct?", a5: "She asked 'why?'.", b5: "She asked, \"Why?\"", c5: "She asked \"Why\"?", d5: "She asked \"why\" .",
  },
  de: {
    t1: "Fortgeschrittene Komma-Regeln", tx1: "Oxford-Komma: 'rot, blau und grün.' Komma vor FANBOYS in zusammengesetzten Sätzen.",
    q1: "Welcher nutzt Kommas korrekt?", a1: "Sie mag rot blau und grün", b1: "Sie mag rot, blau und grün", c1: "Sie mag, rot blau, grün", d1: "Sie mag rot blau, grün",
    t2: "Semikolon-Nutzung", tx2: "Verbindet zwei unabhängige Sätze: 'Ich liebe Pizza; es ist köstlich.'",
    q2: "Welcher nutzt Semikolon korrekt?", a2: "Sie studierte hart; daher bestand sie", b2: "Sie studierte hart, daher bestand sie", c2: "Sie studierte hart daher bestand sie", d2: "Sie studierte hart; während sie bestand",
    t3: "Striche & Klammern", tx3: "Em-Strich (—) für Betonung: 'Ich war—glaub es oder nicht—müde.'",
    q3: "Welcher ist korrekt punctuiert?", a3: "Er sagte—warte lass mich denken—nein", b3: "Er sagte—warte, lass mich denken—nein", c3: "Er sagte warte, lass mich denken, nein", d3: "Er sagte (warte) lass mich denken nein",
    t4: "Doppelpunkt-Nutzung", tx4: "Führt Listen ein: 'Sie kaufte: Äpfel, Orangen, Milch.'",
    q4: "Welcher nutzt Doppelpunkte korrekt?", a4: "Sie kaufte Äpfel Orangen und Milch", b4: "Sie kaufte: Äpfel, Orangen und Milch", c4: "Sie kaufte; Äpfel, Orangen, Milch", d4: "Sie kaufte, Äpfel Orangen Milch",
    t5: "Anführungszeichen & Satzzeichen", tx5: "Punkte/Kommas INNERHALB Anführungszeichen: 'Sie sagte: \"Hallo.\"'",
    q5: "Welcher ist korrekt?", a5: "Sie fragte 'warum?'.", b5: "Sie fragte, \"Warum?\"", c5: "Sie fragte \"Warum\"?", d5: "Sie fragte \"warum\" .",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e293b"/>
          <text x="60" y="80" textAnchor="middle" fontSize="20" fill="#0ea5e9">,</text>
          <text x="120" y="80" textAnchor="middle" fontSize="20" fill="#0ea5e9">,</text>
          <text x="180" y="80" textAnchor="middle" fontSize="20" fill="#0ea5e9">,</text>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#93c5fd">Oxford Comma</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "b1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <circle cx="70" cy="80" r="18" fill="#10b981" opacity="0.5"/>
          <text x="70" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Clause 1</text>
          <text x="120" y="85" textAnchor="middle" fontSize="24" fill="#34d399">;</text>
          <circle cx="170" cy="80" r="18" fill="#10b981" opacity="0.5"/>
          <text x="170" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Clause 2</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <text x="60" y="70" textAnchor="middle" fontSize="12" fill="#93c5fd">Em Dash</text>
          <text x="60" y="95" textAnchor="middle" fontSize="28" fill="#60a5fa">—</text>
          <text x="180" y="70" textAnchor="middle" fontSize="12" fill="#93c5fd">Parentheses</text>
          <text x="180" y="95" textAnchor="middle" fontSize="28" fill="#60a5fa">()</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2d3d"/>
          <text x="120" y="60" textAnchor="middle" fontSize="20" fill="#fbbf24">:</text>
          <path d="M120,70 L120,90" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <rect x="30" y="100" width="180" height="35" rx="3" fill="#fbbf24" opacity="0.2"/>
          <text x="120" y="125" textAnchor="middle" fontSize="11" fill="#fef3c7">Introduces List/Explanation</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <text x="60" y="80" textAnchor="middle" fontSize="16" fill="#fb7185">\"</text>
          <text x="100" y="80" textAnchor="middle" fontSize="12" fill="#cbd5e1">text</text>
          <text x="130" y="80" textAnchor="middle" fontSize="16" fill="#fb7185">\"</text>
          <text x="145" y="80" textAnchor="middle" fontSize="13" fill="#f87171">.</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#fbcfe8">Period INSIDE quotes</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function PunctuationK8Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
