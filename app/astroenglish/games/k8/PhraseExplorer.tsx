"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Prepositional Phrases", tx1: "Start with a preposition (in, on, at, by, for, with, etc.) + noun. 'In the morning, at school, with friends.' Describe WHERE, WHEN, or HOW!",
    q1: "Which is a prepositional phrase?", a1: "Running fast", b1: "Under the bridge", c1: "Was walking", d1: "Very happy",
    t2: "Appositive Phrases", tx2: "A noun phrase that renames another noun. 'My friend Sarah, a soccer player, arrived.' Sarah = soccer player (same person, both true!).",
    q2: "Which is an appositive phrase?", a2: "The big dog", b2: "My teacher, Mrs. Johnson, gave us homework", c2: "Running in circles", d2: "Although it rained",
    t3: "Participial Phrases", tx3: "Phrase starting with -ING or -ED form + modifiers. 'Reading the book, she laughed.' 'Covered in mud, the dog ran home.' Describes a noun!",
    q3: "Which is a participial phrase?", a3: "To run away", b3: "Singing beautifully, the bird attracted mates", c3: "She runs every day", d3: "He will run",
    t4: "Absolute Phrases", tx4: "Independent noun phrase standing alone. 'His homework finished, Mark left class.' 'Weather permitting, we'll picnic.' NOT a dependent clause!",
    q4: "Which is an absolute phrase?", a4: "When the sun sets", b4: "Running quickly", c4: "All work complete, she relaxed", d4: "If you go",
    t5: "Phrase Types Review", tx5: "Prepositional: after in. Appositive: renames. Participial: -ing/-ed. Absolute: independent. Each modifies or clarifies meaning!",
    q5: "Which uses MULTIPLE phrases correctly?", a5: "The girl ran", b5: "The girl with red hair, my cousin, arrived singing happily", c5: "She is running", d5: "Although tired, he walked",
  },
  de: {
    t1: "Präpositionale Phrasen", tx1: "Beginnt mit Präposition (in, auf, bei, für, mit, etc.) + Nomen. 'Am Morgen, in der Schule, mit Freunden.'",
    q1: "Welche ist eine Präpositionalphrase?", a1: "Schnell laufen", b1: "Unter der Brücke", c1: "War laufen", d1: "Sehr glücklich",
    t2: "Appositive Phrasen", tx2: "Eine Nominalphrase, die ein anderes Nomen umbenennt. 'Mein Freund Sarah, ein Fußballer, kam an.'",
    q2: "Welche ist eine Appositionalphrase?", a2: "Der große Hund", b2: "Meine Lehrerin, Frau Johnson, gab uns Hausaufgaben", c2: "Im Kreis laufen", d2: "Obwohl es regnete",
    t3: "Partizipien-Phrasen", tx3: "Phrase mit -ING oder -ED Form. 'Das Buch lesend, lachte sie.'",
    q3: "Welche ist eine Partizipienphrase?", a3: "Weglaufen", b3: "Wunderschön singend, zog der Vogel Partner an", c3: "Sie läuft jeden Tag", d3: "Er wird laufen",
    t4: "Absolute Phrasen", tx4: "Unabhängige Nominalphrase. 'Hausaufgaben fertig, verließ Mark die Klasse.'",
    q4: "Welche ist eine absolute Phrase?", a4: "Wenn die Sonne untergeht", b4: "Schnell laufen", c4: "Alle Arbeiten fertig, entspannte sie sich", d4: "Falls du gehst",
    t5: "Phrasentypen-Überblick", tx5: "Präpositional: nach in. Appositional: benennt um. Partizipiel: -ing/-ed. Absolut: unabhängig.",
    q5: "Welche nutzt MEHRERE Phrasen korrekt?", a5: "Das Mädchen rannte", b5: "Das Mädchen mit roten Haaren, meine Cousine, kam singend an", c5: "Sie läuft", d5: "Obwohl müde, ging er",
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
          <text x="60" y="90" textAnchor="middle" fontSize="24" fill="#0ea5e9">📍</text>
          <path d="M90,90 L150,90" stroke="#06b6d4" strokeWidth="2"/>
          <text x="180" y="95" textAnchor="middle" fontSize="11" fill="#cffafe">Where/When/How</text>
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
          <circle cx="60" cy="80" r="18" fill="#10b981" opacity="0.5"/>
          <text x="60" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Noun</text>
          <text x="100" y="85" textAnchor="middle" fontSize="14" fill="#34d399">=</text>
          <circle cx="140" cy="80" r="18" fill="#10b981" opacity="0.5"/>
          <text x="140" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Appositiv</text>
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
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#60a5fa">-ING / -ED</text>
          <path d="M120,70 L120,90" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <rect x="40" y="100" width="160" height="40" rx="3" fill="#0ea5e9" opacity="0.2"/>
          <text x="120" y="125" textAnchor="middle" fontSize="11" fill="#93c5fd">Describes a Noun</text>
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
          <rect x="40" y="55" width="160" height="50" rx="4" fill="#f472b6" opacity="0.3"/>
          <text x="120" y="85" textAnchor="middle" fontSize="12" fill="#fbcfe8">Independent Phrase</text>
          <text x="120" y="105" textAnchor="middle" fontSize="10" fill="#f8bbd0">Not a dependent clause</text>
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
          <circle cx="50" cy="50" r="15" fill="#0ea5e9" opacity="0.5"/>
          <text x="50" y="55" textAnchor="middle" fontSize="8" fill="white">Prep</text>
          <circle cx="110" cy="50" r="15" fill="#10b981" opacity="0.5"/>
          <text x="110" y="55" textAnchor="middle" fontSize="8" fill="white">Appos</text>
          <circle cx="170" cy="50" r="15" fill="#f472b6" opacity="0.5"/>
          <text x="170" y="55" textAnchor="middle" fontSize="8" fill="white">Part</text>
          <circle cx="80" cy="110" r="15" fill="#fbbf24" opacity="0.5"/>
          <text x="80" y="115" textAnchor="middle" fontSize="8" fill="black">Absolute</text>
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

export default function PhraseExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
