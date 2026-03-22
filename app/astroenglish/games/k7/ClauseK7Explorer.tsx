"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Independent Clauses", tx1: "A clause with a subject and verb that can stand alone. 'The cat sleeps.' 'She ran fast.' Complete thoughts!",
    q1: "Which is an independent clause?", a1: "Although the storm", b1: "If you finish early", c1: "The bell rang loudly", d1: "Which caused the crash",
    t2: "Dependent Clauses", tx2: "Needs an independent clause to be complete. Starts with: because, when, if, although, while, since, unless. They modify or explain!",
    q2: "Which is a dependent clause?", a2: "I love pizza", b2: "Although the rain fell", c2: "Dogs bark loudly", d2: "She finished her homework",
    t3: "Restrictive vs Non-Restrictive", tx3: "Restrictive: essential info (no commas). Non-restrictive: extra info (with commas). 'The girl who won' vs 'Sarah, who won, smiled.'",
    q3: "Which needs commas?", a3: "The student who studied passed", b3: "The student named Alex who always studies well passed", c3: "The student, who always studies, passed", d3: "All students who pass graduate",
    t4: "Reduced Clauses", tx4: "Clause shortened by removing relative pronoun/helping verb. 'The girl running away' = 'The girl who was running away.'",
    q4: "Which is a reduced clause?", a4: "The person who enjoys reading", b4: "The person enjoys reading", c4: "The person enjoying reading", d4: "The person has enjoyed reading",
    t5: "Clause Combination", tx5: "Combine independent + dependent clauses with conjunctions: and, but, or, so, because, when, if, although.",
    q5: "What combines these best?", a5: "The sun sets. The sky darkens.", b5: "When the sun sets, the sky darkens", c5: "The sun sets and the sky darkens or nothing", d5: "The sun, sets, sky darkens",
  },
  de: {
    t1: "Hauptsätze", tx1: "Ein Satz mit Subjekt und Verb, kann allein stehen. 'Die Katze schläft.' Vollständige Gedanken!",
    q1: "Welcher ist ein Hauptsatz?", a1: "Obwohl der Sturm", b1: "Wenn du früh fertig bist", c1: "Die Glocke läutete laut", d1: "Das den Crash verursachte",
    t2: "Nebensätze", tx2: "Braucht einen Hauptsatz. Beginnt mit: weil, wenn, obwohl, während, falls. Sie modifizieren!",
    q2: "Welcher ist ein Nebensatz?", a2: "Ich liebe Pizza", b2: "Obwohl der Regen fiel", c2: "Hunde bellen laut", d2: "Sie machte ihre Hausaufgaben",
    t3: "Einleitend vs Zusätzlich", tx3: "Einleitend: wesentliche Info (keine Kommas). Zusätzlich: extra Info (mit Kommas).",
    q3: "Welcher braucht Kommas?", a3: "Der Student, der studierte, bestand", b3: "Der Student der lernte bestand", c3: "Der Student, der lernt, bestand", d3: "Alle Studenten die bestehen graduieren",
    t4: "Reduzierte Sätze", tx4: "Satz verkürzt. 'Das Mädchen läuft weg' = 'Das Mädchen, das weg läuft.'",
    q4: "Welcher ist ein reduzierter Satz?", a4: "Die Person, die liest", b4: "Die Person liest", c4: "Die Person lesend", d4: "Die Person hat gelesen",
    t5: "Satz-Kombination", tx5: "Hauptsatz + Nebensatz mit Konjunktionen verbinden.",
    q5: "Was verbindet am besten?", a5: "Die Sonne setzt. Der Himmel wird dunkel.", b5: "Wenn die Sonne setzt, wird der Himmel dunkel", c5: "Die Sonne setzt und Himmel dunkel", d5: "Die Sonne setzt Himmel dunkel",
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
          <rect x="40" y="60" width="160" height="50" rx="4" fill="#0ea5e9" opacity="0.5"/>
          <text x="120" y="95" textAnchor="middle" fontSize="14" fill="#e0f2fe" fontWeight="bold">Complete Thought</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "c1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <rect x="40" y="55" width="160" height="25" rx="3" fill="#6366f1" opacity="0.5"/>
          <text x="120" y="72" textAnchor="middle" fontSize="12" fill="#c7d2fe">Incomplete Thought</text>
          <path d="M120,85 L120,125" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="120" y="140" textAnchor="middle" fontSize="10" fill="#a5b4fc">Needs Main Clause</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <text x="60" y="70" textAnchor="middle" fontSize="12" fill="#dbeafe">No Commas</text>
          <rect x="30" y="75" width="60" height="35" rx="3" fill="#0ea5e9" opacity="0.5"/>
          <text x="60" y="100" textAnchor="middle" fontSize="10" fill="#bfdbfe">Essential</text>
          <text x="180" y="70" textAnchor="middle" fontSize="12" fill="#dbeafe">With Commas</text>
          <rect x="150" y="75" width="60" height="35" rx="3" fill="#fbbf24" opacity="0.5"/>
          <text x="180" y="100" textAnchor="middle" fontSize="10" fill="#f59e0b">Extra</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "c3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2d3d"/>
          <text x="120" y="50" textAnchor="middle" fontSize="13" fill="#cbd5e1">Original: who/which/that</text>
          <path d="M120,60 L120,75" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="120" y="110" textAnchor="middle" fontSize="13" fill="#93c5fd">Reduced: -ing or -ed form</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <circle cx="70" cy="80" r="20" fill="#10b981" opacity="0.5"/>
          <text x="70" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Ind.</text>
          <text x="110" y="85" textAnchor="middle" fontSize="16" fill="#60a5fa">+</text>
          <circle cx="150" cy="80" r="20" fill="#6366f1" opacity="0.5"/>
          <text x="150" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Dep.</text>
          <text x="120" y="135" textAnchor="middle" fontSize="11" fill="#cbd5e1">= Complex Sentence</text>
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

export default function ClauseK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
