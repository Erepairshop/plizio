"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Subjunctive Mood", tx1: "Used for hypothetical or contrary-to-fact situations. 'If I were you...' vs 'If I was there...'",
    q1: "Which sentence uses subjunctive mood correctly?", a1: "If I were king, I would change the laws", b1: "If I was there, I saw the accident", c1: "If you go tomorrow, I come too", d1: "If she was happy, she would smile",
    t2: "Conditional Sentences", tx2: "Express a condition and its result: 'If X happens, then Y will happen.' Three main types.",
    q2: "Which shows a second conditional (unlikely/unreal present)?", a2: "If you study hard, you will pass", b2: "If you studied hard, you would pass", c2: "If you had studied, you would have passed", d2: "If you study now, you can help",
    t3: "Complex Sentence Structures", tx3: "Combine independent and dependent clauses to express sophisticated ideas.",
    q3: "Which is a complex sentence?", a3: "Although it rained, the game continued", b3: "It rained and the game continued", c3: "It rained", d3: "The game was fun",
    t4: "Rhetorical Devices", tx4: "Persuasive techniques: alliteration, parallelism, rhetorical questions enhance argument clarity.",
    q4: "Which uses parallelism?", a4: "He came, he saw, he conquered", b4: "He came to the meeting", c4: "Did he really come?", d4: "Coming was hard",
    t5: "Advanced Punctuation", tx5: "Semicolons link related ideas; colons introduce lists or explanations. Use correctly!",
    q5: "Where should a semicolon go?", a5: "She studied hard; therefore, she passed", b5: "She studied hard, therefore, she passed", c5: "She studied hard therefore she passed", d5: "She studied; hard therefore",
  },
  de: {
    t1: "Konjunktiv-Modus", tx1: "Für hypothetische oder irreale Situationen. 'Wenn ich du wäre...'",
    q1: "Welcher Satz verwendet den Konjunktiv korrekt?", a1: "If I were king, I would change the laws", b1: "If I was there, I saw", c1: "If you go, I come", d1: "If she was happy, she smiled",
    t2: "Konditionalsätze", tx2: "Bedingung und Folge: 'Wenn X passiert, dann Y geschieht.'",
    q2: "Welcher zeigt eine zweite Bedingung?", a2: "If you study, you will pass", b2: "If you studied, you would pass", c2: "If you had studied, you would have", d2: "If you study now, you can",
    t3: "Komplexe Satzstrukturen", tx3: "Hauptsätze und Nebensätze verbinden für ausdrucksstarke Ideen.",
    q3: "Welches ist ein komplexer Satz?", a3: "Although it rained, the game continued", b3: "It rained and continued", c3: "It rained", d3: "Fun",
    t4: "Rhetorische Mittel", tx4: "Alliteration, Parallelismus: Überzeugungstechniken.",
    q4: "Welcher verwendet Parallelismus?", a4: "He came, he saw, he conquered", b4: "He came to meeting", c4: "Did he come?", d4: "Coming",
    t5: "Satzzeichen", tx5: "Semikolon verbindet verwandte Ideen. Korrekt einsetzen!",
    q5: "Wo gehört ein Semikolon hin?", a5: "She studied hard; therefore, she passed", b5: "She studied hard, therefore, passed", c5: "She studied hard therefore", d5: "She studied; hard therefore",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e1b4b"/>
          <text x="120" y="90" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#9333ea">Σ</text>
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
          <path d="M60,80 Q120,40 180,80" stroke="#0ea5e9" strokeWidth="3" fill="none"/>
          <circle cx="60" cy="80" r="6" fill="#0ea5e9"/>
          <circle cx="180" cy="80" r="6" fill="#06b6d4"/>
          <text x="120" y="120" textAnchor="middle" fontSize="14" fill="#e0f2fe">if... then...</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <rect x="30" y="50" width="60" height="60" rx="4" fill="#10b981" opacity="0.7"/>
          <text x="60" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Indepen.</text>
          <path d="M90,80 L150,80" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <rect x="150" y="50" width="60" height="60" rx="4" fill="#6366f1" opacity="0.7"/>
          <text x="180" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Depend.</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <text x="60" y="80" textAnchor="middle" fontSize="28" fill="#f59e0b">A</text>
          <text x="120" y="80" textAnchor="middle" fontSize="28" fill="#f59e0b">P</text>
          <text x="180" y="80" textAnchor="middle" fontSize="28" fill="#f59e0b">L</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#fcd34d">Ethos, Pathos, Logos</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <text x="120" y="50" textAnchor="middle" fontSize="36" fill="#60a5fa">;</text>
          <text x="120" y="100" textAnchor="middle" fontSize="14" fill="#93c5fd">Semicolon</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#cbd5e1">Links related ideas</text>
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

export default function GrammarK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
