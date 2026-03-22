"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Identifying Clauses", tx1: "Independent clauses can stand alone. Dependent clauses need a main clause to be complete.",
    q1: "Which is a dependent clause?", a1: "Although she tried hard", b1: "She tried hard", c1: "She worked every day", d1: "The team won the game",
    t2: "Phrase Types", tx2: "Prepositional phrases (in the morning), participial phrases (Running quickly, she left), appositive phrases (My friend John).",
    q2: "Which is an appositive phrase?", a2: "In the park", b2: "The author, a famous writer", c2: "Running down the street", d2: "After the storm",
    t3: "Modifiers & Position", tx3: "Place modifiers near the word they describe. Misplaced modifiers create confusion or humor!",
    q3: "Which sentence has clear modifier placement?", a3: "She wore a red hat walking to school", b3: "Walking to school, she wore a red hat", c3: "A red hat worn to school", d3: "To school wearing the hat",
    t4: "Restrictive vs Non-Restrictive", tx4: "Restrictive: 'The student who finished first' (essential info). Non-restrictive: 'My friend, who lives nearby' (extra info).",
    q4: "Which uses a non-restrictive clause (with commas)?", a4: "The student who studied hardest won", b4: "My sister, who is a doctor, works here", c4: "The book that I read was interesting", d4: "People who exercise daily are healthier",
    t5: "Sentence Combining", tx5: "Combine simple sentences into complex ones to improve flow and emphasize relationships.",
    q5: "Which effectively combines these ideas?", a5: "Because the weather was bad, the game was cancelled", b5: "The weather was bad. The game was cancelled", c5: "The weather was bad. And the game was cancelled", d5: "The weather and cancelled game",
  },
  de: {
    t1: "Hauptsätze und Nebensätze", tx1: "Hauptsätze sind unabhängig. Nebensätze brauchen einen Hauptsatz.",
    q1: "Welcher ist ein Nebensatz?", a1: "Obwohl sie hart versuchte", b1: "Sie versuchte hart", c1: "Sie arbeitete jeden Tag", d1: "Das Team gewann",
    t2: "Phrasentypen", tx2: "Präpositionalphrasen, Partizipialphrasen, appositive Phrasen.",
    q2: "Welcher ist eine appositive Phrase?", a2: "Im Park", b2: "Der Autor, ein bekannter Schriftsteller", c2: "Die Straße hinunterlaufend", d2: "Nach dem Sturm",
    t3: "Modifizierer-Position", tx3: "Modifizierer müssen nah am beschriebenen Wort stehen.",
    q3: "Welcher Satz hat klare Modifizierer?", a3: "Sie trug einen roten Hut zur Schule gehend", b3: "Zur Schule gehend trug sie einen roten Hut", c3: "Ein getragener Hut", d3: "Zum Hut gehend",
    t4: "Einschränkend vs Nicht-einschränkend", tx4: "Einschränkend: 'Der Student, der zuerst fertig wurde' (Komma?)",
    q4: "Welcher nutzt nicht-einschränkend?", a4: "Der Student, der am härtesten studierte, gewann", b4: "Meine Schwester, die Ärztin ist, arbeitet hier", c4: "Das Buch, das ich las", d4: "Menschen, die täglich trainieren",
    t5: "Sätze Kombinieren", tx5: "Vereinfache Sätze in komplexere Strukturen.",
    q5: "Welcher kombiniert gut?", a5: "Weil das Wetter schlecht war, wurde das Spiel abgesagt", b5: "Das Wetter war schlecht. Das Spiel wurde abgesagt", c5: "Das Wetter und das abgesagte Spiel", d5: "Das Wetter, und Spiel",
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
          <rect x="30" y="50" width="80" height="50" rx="4" fill="#3b82f6" opacity="0.8"/>
          <text x="70" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Independent</text>
          <rect x="130" y="50" width="80" height="50" rx="4" fill="#8b5cf6" opacity="0.8"/>
          <text x="170" y="80" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Dependent</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2d1b69"/>
          <circle cx="60" cy="80" r="20" fill="rgba(236,72,153,0.2)" stroke="#ec4899" strokeWidth="2"/>
          <text x="60" y="85" textAnchor="middle" fontSize="9" fill="#ec4899" fontWeight="bold">Prep</text>
          <circle cx="120" cy="80" r="20" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="2"/>
          <text x="120" y="85" textAnchor="middle" fontSize="8" fill="#3b82f6" fontWeight="bold">Part.</text>
          <circle cx="180" cy="80" r="20" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="2"/>
          <text x="180" y="85" textAnchor="middle" fontSize="8" fill="#a855f7" fontWeight="bold">App.</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e3a8a"/>
          <path d="M40,80 L80,80 L90,70 L90,90 L100,80 L140,80" stroke="#10b981" strokeWidth="3" fill="none"/>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#10b981">Correct Position</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a202c"/>
          <rect x="30" y="50" width="100" height="50" rx="4" fill="#ef4444" opacity="0.6"/>
          <text x="80" y="80" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Restrictive</text>
          <rect x="140" y="50" width="100" height="50" rx="4" fill="#06b6d4" opacity="0.6"/>
          <text x="190" y="80" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Non-Restrictive</text>
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
          <circle cx="50" cy="80" r="12" fill="#fbbf24"/>
          <circle cx="120" cy="80" r="12" fill="#fbbf24"/>
          <circle cx="190" cy="80" r="12" fill="#fbbf24"/>
          <path d="M62,80 L108,80" stroke="#fbbf24" strokeWidth="2"/>
          <path d="M132,80 L178,80" stroke="#fbbf24" strokeWidth="2"/>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#fcd34d">Combining Ideas</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function SentenceK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
