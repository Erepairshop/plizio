"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Perfect Tenses", tx1: "Present Perfect: 'I have finished' (action started in past, continues now). Past Perfect: 'I had finished' (before another past action).",
    q1: "Which uses present perfect correctly?", a1: "I have finished my homework", b1: "I finish my homework yesterday", c1: "I finished already homework", d1: "I am finished since 2 hours",
    t2: "Active vs Passive Voice", tx2: "Active: The dog chased the cat. Passive: The cat was chased by the dog. Passive emphasizes the receiver of the action.",
    q2: "Which is passive voice?", a2: "She wrote the letter", b2: "The letter was written by her", c2: "She is writing letters", d2: "The letter writes itself",
    t3: "Voice Consistency", tx3: "Keep the same voice within a sentence for clarity. Switching voices can confuse readers.",
    q3: "Which sentence maintains consistent voice?", a3: "The teacher explained the lesson, and the students understood it", b3: "The lesson was explained by the teacher, and the students understood it", c3: "The teacher explained, and it was understood", d3: "Explaining happened by the teacher",
    t4: "Conditional Tenses", tx4: "First conditional (real): If I go, I will see. Second conditional (unreal): If I went, I would see.",
    q4: "Which shows correct conditional tense?", a4: "If I will go, I will see", b4: "If I go, I will see", c4: "If I would go, I see", d4: "If I went, I will see",
    t5: "Reported Speech & Tense Shift", tx5: "When reporting what someone said, tense usually shifts back: 'He said he is happy' → 'He said he was happy'.",
    q5: "Which correctly reports the speech?", a5: "She said that she will come tomorrow", b5: "She said that she would come the next day", c5: "She said that she is coming next day", d5: "She said that she is come tomorrow",
  },
  de: {
    t1: "Perfekt-Tempora", tx1: "Präsens Perfekt: 'Ich habe fertig gemacht' (in der Vergangenheit begonnen, jetzt noch relevant).",
    q1: "Welcher nutzt Präsens Perfekt richtig?", a1: "I have finished my homework", b1: "I finish homework yesterday", c1: "I finished homework already", d1: "I am finished since hours",
    t2: "Aktiv vs Passiv", tx2: "Aktiv: Der Hund jagte die Katze. Passiv: Die Katze wurde vom Hund gejagt.",
    q2: "Welcher ist Passiv?", a2: "She wrote the letter", b2: "The letter was written by her", c2: "She is writing letters", d2: "The letter writes",
    t3: "Stimm-Konsistenz", tx3: "Halte die gleiche Stimme innerhalb eines Satzes.",
    q3: "Welcher Satz hat konsistente Stimme?", a3: "Der Lehrer erklärte die Lektion, Schüler verstanden", b3: "Die Lektion wurde erklärt, Schüler verstanden", c3: "Der Lehrer erklärte, es wurde verstanden", d3: "Erklären geschah vom Lehrer",
    t4: "Bedingte Tempora", tx4: "Erste Bedingung: Wenn ich gehe, werde ich sehen. Zweite: Wenn ich ginge, würde ich sehen.",
    q4: "Welcher zeigt richtige bedingte Form?", a4: "If I will go, I will see", b4: "If I go, I will see", c4: "If I would go, I see", d4: "If I went, I will see",
    t5: "Indirekte Rede", tx5: "Tense-Verschiebung: 'Er sagte, er ist glücklich' → 'Er sagte, er war glücklich'.",
    q5: "Welcher berichtet die Rede korrekt?", a5: "She said that she will come tomorrow", b5: "She said that she would come next day", c5: "She said that she is coming", d5: "She said she comes tomorrow",
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
          <path d="M30,80 L120,80" stroke="#f59e0b" strokeWidth="3"/>
          <circle cx="30" cy="80" r="8" fill="#f59e0b"/>
          <text x="75" y="75" textAnchor="middle" fontSize="11" fill="#fcd34d" fontWeight="bold">Perfect</text>
          <circle cx="120" cy="80" r="8" fill="#f59e0b"/>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#fcd34d">have + past participle</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e3a8a"/>
          <rect x="30" y="50" width="80" height="50" rx="4" fill="#0ea5e9" opacity="0.7"/>
          <text x="70" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Active</text>
          <path d="M110,75 L130,75" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow)"/>
          <rect x="130" y="50" width="80" height="50" rx="4" fill="#06b6d4" opacity="0.7"/>
          <text x="170" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Passive</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2d1b69"/>
          <circle cx="50" cy="80" r="18" fill="#10b981" opacity="0.7"/>
          <text x="50" y="85" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">A</text>
          <circle cx="120" cy="80" r="18" fill="#10b981" opacity="0.7"/>
          <text x="120" y="85" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">C</text>
          <circle cx="190" cy="80" r="18" fill="#10b981" opacity="0.7"/>
          <text x="190" y="85" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">A</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#6ee7b7">Consistent Voice</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <rect x="20" y="40" width="95" height="70" rx="4" fill="rgba(34,197,94,0.3)" stroke="#22c55e" strokeWidth="2"/>
          <text x="68" y="65" textAnchor="middle" fontSize="11" fill="#86efac" fontWeight="bold">1st: Real</text>
          <text x="68" y="85" textAnchor="middle" fontSize="10" fill="#d1fae5">If... will...</text>
          <rect x="125" y="40" width="95" height="70" rx="4" fill="rgba(139,92,246,0.3)" stroke="#a855f7" strokeWidth="2"/>
          <text x="173" y="65" textAnchor="middle" fontSize="11" fill="#e9d5ff" fontWeight="bold">2nd: Unreal</text>
          <text x="173" y="85" textAnchor="middle" fontSize="10" fill="#f3e8ff">If... would...</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e"/>
          <text x="30" y="70" fontSize="14" fill="#f87171" fontStyle="italic">"I am happy"</text>
          <path d="M140,60 L180,60" stroke="#f87171" strokeWidth="2"/>
          <text x="190" y="70" fontSize="13" fill="#fbcfe8" fontWeight="bold">→</text>
          <text x="30" y="120" fontSize="13" fill="#60a5fa" fontStyle="italic">"She said she was happy"</text>
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

export default function TenseVoiceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
