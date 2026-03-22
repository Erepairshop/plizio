"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Semicolon Rules", tx1: "Joins two independent clauses: 'The sun rose; the day began.' Also separates items in complex lists.",
    q1: "Where should the semicolon go?", a1: "She studied hard; therefore, she passed", b1: "She studied; hard therefore she passed", c1: "She studied hard therefore; she passed", d1: "She; studied hard therefore passed",
    t2: "Colon Usage", tx2: "Introduces lists, explanations, or quoted material: 'Three options: red, blue, green.' Or: 'He said: \"Let's go.\"'",
    q2: "Which uses a colon correctly?", a2: "The colors are: red, blue, and green", b2: "The colors are red, blue, and green", c2: "The colors are, red blue green", d2: "The colors: are red blue green",
    t3: "Dash & Parentheses", tx3: "Dashes emphasize interruptions or clarifications. Parentheses provide secondary information less emphatically.",
    q3: "Which correctly uses a dash?", a3: "She ran—as fast as she could—toward home", b3: "She ran as fast as she could toward home", c3: "She—ran as fast as she could toward home", d3: "She ran toward home—she could",
    t4: "Comma Placement", tx4: "Use commas before conjunctions (and, but, or), after introductory phrases, and to separate items in series.",
    q4: "Which sentence has commas in correct places?", a4: "She likes apples oranges and grapes", b4: "She likes apples, oranges, and grapes", c4: "She, likes apples oranges and grapes", d4: "She likes, apples oranges grapes",
    t5: "Quotation Marks & Punctuation", tx5: "Periods and commas go inside quotation marks in American English. Colons and semicolons go outside.",
    q5: "Which is punctuated correctly?", a5: "He said, \"Hello.\" She replied \"Hi.\"", b5: "He said \"Hello.\" She replied, \"Hi!\"", c5: "He said, \"Hello.\" She replied, \"Hi!\"", d5: "He said 'Hello' She replied 'Hi'",
  },
  de: {
    t1: "Semikolon-Regeln", tx1: "Verbindet zwei Hauptsätze: 'Die Sonne ging auf; der Tag begann.'",
    q1: "Wo gehört das Semikolon hin?", a1: "She studied hard; therefore, she passed", b1: "She studied; hard therefore she passed", c1: "She studied hard therefore; passed", d1: "She; studied hard therefore",
    t2: "Doppelpunkt-Gebrauch", tx2: "Leitet Listen oder Erklärungen ein: 'Drei Optionen: rot, blau, grün.'",
    q2: "Welcher nutzt den Doppelpunkt richtig?", a2: "The colors are: red, blue, and green", b2: "The colors are red, blue, green", c2: "The colors are, red blue", d2: "The colors: are red blue",
    t3: "Bindestrich & Klammern", tx3: "Bindestriche betonen; Klammern geben Nebensächliches.",
    q3: "Welcher nutzt den Bindestrich richtig?", a3: "She ran—as fast as she could—toward home", b3: "She ran as fast as she could", c3: "She—ran as fast as she could", d3: "She ran toward—home",
    t4: "Komma-Platzierung", tx4: "Kommas vor Konjunktionen, nach Einleitungen, in Serien.",
    q4: "Welcher Satz hat Kommas richtig gesetzt?", a4: "Sie mag Äpfel Orangen und Trauben", b4: "Sie mag Äpfel, Orangen und Trauben", c4: "Sie, mag Äpfel Orangen", d4: "Sie mag, Äpfel Orangen",
    t5: "Anführungszeichen", tx5: "Punkte gehen innen, Doppelpunkte außen.",
    q5: "Welcher ist richtig gepunktet?", a5: "He said, \"Hello.\" She replied \"Hi.\"", b5: "He said \"Hello.\" She replied, \"Hi!\"", c5: "He said, \"Hello.\" She replied, \"Hi!\"", d5: "He said 'Hello' She replied 'Hi'",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <circle cx="60" cy="80" r="16" fill="#3b82f6" opacity="0.7"/>
          <text x="60" y="85" textAnchor="middle" fontSize="20" fill="#dbeafe" fontWeight="bold">;</text>
          <circle cx="180" cy="80" r="16" fill="#3b82f6" opacity="0.7"/>
          <text x="180" y="85" textAnchor="middle" fontSize="20" fill="#dbeafe" fontWeight="bold">;</text>
          <path d="M76,80 L164,80" stroke="#3b82f6" strokeWidth="2"/>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#93c5fd">Links independent clauses</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e293b"/>
          <text x="50" y="80" fontSize="24" fill="#f59e0b" fontWeight="bold">:</text>
          <text x="120" y="60" textAnchor="middle" fontSize="12" fill="#fcd34d" fontWeight="bold">List</text>
          <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#fcd34d" fontWeight="bold">Quote</text>
          <text x="120" y="140" textAnchor="middle" fontSize="11" fill="#fcd34d">Introduces ideas</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <rect x="30" y="50" width="85" height="50" rx="4" fill="#ef4444" opacity="0.6"/>
          <text x="73" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Dash (—)</text>
          <text x="73" y="95" textAnchor="middle" fontSize="10" fill="#fee2e2">Emphasize</text>
          <rect x="125" y="50" width="85" height="50" rx="4" fill="#06b6d4" opacity="0.6"/>
          <text x="168" y="80" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Parens ( )</text>
          <text x="168" y="95" textAnchor="middle" fontSize="10" fill="#cffafe">Deemphasize</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a202c"/>
          <circle cx="50" cy="80" r="10" fill="#34d399"/>
          <text x="50" y="85" textAnchor="middle" fontSize="16" fill="white">,</text>
          <circle cx="120" cy="80" r="10" fill="#34d399"/>
          <text x="120" y="85" textAnchor="middle" fontSize="16" fill="white">,</text>
          <circle cx="190" cy="80" r="10" fill="#34d399"/>
          <text x="190" y="85" textAnchor="middle" fontSize="16" fill="white">,</text>
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#a7f3d0">Series (and/or/but)</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2d1b69"/>
          <text x="70" y="80" fontSize="28" fill="#c4b5fd" fontWeight="bold">"  "</text>
          <text x="140" y="50" fontSize="14" fill="#e9d5ff" fontWeight="bold">.</text>
          <text x="140" y="110" fontSize="14" fill="#e9d5ff" fontWeight="bold">;</text>
          <text x="180" y="50" fontSize="12" fill="#d8b4fe">Inside</text>
          <text x="180" y="110" fontSize="12" fill="#d8b4fe">Outside</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "c5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function PunctuationK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
