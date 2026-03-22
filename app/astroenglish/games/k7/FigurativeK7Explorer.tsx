"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Irony & Sarcasm", tx1: "Irony: a contradiction between expectation and reality. Sarcasm: bitter, cutting irony meant to mock.",
    q1: "Which sentence shows irony?", a1: "The Titanic was unsinkable; it sank on its maiden voyage", b1: "He is very tall", c1: "The sky is blue", d1: "She ran very fast",
    t2: "Hyperbole", tx2: "Extreme exaggeration for effect or emphasis. 'I'm so tired I could sleep for a year.' Not meant literally.",
    q2: "Which is a hyperbole?", a2: "She was very angry", b2: "He had a million things to do", c2: "The weather was bad", d2: "They went to the store",
    t3: "Oxymoron & Paradox", tx3: "Oxymoron: 'bittersweet,' 'deafening silence' (contradictory terms together). Paradox: a statement that seems false but contains truth.",
    q3: "Which is an oxymoron?", a3: "She seemed happy", b3: "The silence was peaceful", c3: "Living dead", d3: "He was thoughtful",
    t4: "Allusion & Reference", tx4: "Indirect reference to another work, person, or event. Example: 'He's no Shakespeare' alludes to the playwright.",
    q4: "Which is an allusion?", a4: "She was very smart", b4: "He faced his Waterloo at the tournament", c4: "The teacher was strict", d4: "The book was long",
    t5: "Metonymy & Synecdoche", tx5: "Metonymy: substitute the name of something with something associated (crown for king). Synecdoche: part represents whole or vice versa.",
    q5: "Which is metonymy?", a5: "The White House announced a new policy", b5: "All hands on deck", c5: "The bright sun", d5: "Green fields",
  },
  de: {
    t1: "Ironie & Sarkasmus", tx1: "Ironie: Widerspruch zwischen Erwartung und Wirklichkeit.",
    q1: "Welcher Satz zeigt Ironie?", a1: "The Titanic was unsinkable; it sank on its maiden voyage", b1: "He is very tall", c1: "The sky is blue", d1: "She ran fast",
    t2: "Hyperbel", tx2: "Extreme Übertreibung für Wirkung. 'Ich bin so müde, ich könnte ein Jahr schlafen.'",
    q2: "Welche ist eine Hyperbel?", a2: "She was very angry", b2: "He had a million things to do", c2: "The weather was bad", d2: "They went store",
    t3: "Oxymoron & Paradoxon", tx3: "Oxymoron: 'süßbitter,' 'lärmende Stille' (widersprechende Begriffe zusammen).",
    q3: "Welches ist ein Oxymoron?", a3: "She seemed happy", b3: "The silence was peaceful", c3: "Living dead", d3: "He was thoughtful",
    t4: "Anspielung & Referenz", tx4: "Indirekte Bezugnahme auf ein anderes Werk oder eine Person.",
    q4: "Welcher ist eine Anspielung?", a4: "She was very smart", b4: "He faced his Waterloo at tournament", c4: "The teacher was strict", d4: "The book was long",
    t5: "Metonymie & Synekdoche", tx5: "Metonymie: Ersatz eines Namens durch etwas Zugeordnetes (Krone für König).",
    q5: "Welcher ist Metonymie?", a5: "The White House announced a policy", b5: "All hands on deck", c5: "The bright sun", d5: "Green fields",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e"/>
          <circle cx="60" cy="80" r="20" fill="#f59e0b" opacity="0.6"/>
          <text x="60" y="88" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">😏</text>
          <circle cx="180" cy="80" r="20" fill="#f87171" opacity="0.6"/>
          <text x="180" y="88" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">🙃</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#fca5a5">Contradiction</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <text x="120" y="100" textAnchor="middle" fontSize="32" fill="#ff6b6b" fontWeight="bold">∞</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#fca5a5">Extreme Exaggeration</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <circle cx="60" cy="80" r="16" fill="#ec4899" opacity="0.7"/>
          <text x="60" y="85" textAnchor="middle" fontSize="18" fill="white">⊕</text>
          <text x="60" y="125" textAnchor="middle" fontSize="10" fill="#f472b6">Oxymoron</text>
          <circle cx="180" cy="80" r="16" fill="#a855f7" opacity="0.7"/>
          <text x="180" y="87" textAnchor="middle" fontSize="18" fill="white">⚡</text>
          <text x="180" y="125" textAnchor="middle" fontSize="10" fill="#d8b4fe">Paradox</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e3a8a"/>
          <circle cx="120" cy="60" r="14" fill="#3b82f6" opacity="0.7"/>
          <text x="120" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Ref</text>
          <path d="M110,74 L60,110" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M130,74 L180,110" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="60" cy="120" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="180" cy="120" r="8" fill="#3b82f6" opacity="0.5"/>
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
          <rect x="30" y="50" width="85" height="50" rx="4" fill="#ddd6fe" opacity="0.8"/>
          <text x="73" y="75" textAnchor="middle" fontSize="12" fill="#6d28d9" fontWeight="bold">Metonymy</text>
          <text x="73" y="92" textAnchor="middle" fontSize="9" fill="#8b5cf6">crown = king</text>
          <rect x="125" y="50" width="85" height="50" rx="4" fill="#d8b4fe" opacity="0.8"/>
          <text x="168" y="75" textAnchor="middle" fontSize="11" fill="#6d28d9" fontWeight="bold">Synecdoche</text>
          <text x="168" y="92" textAnchor="middle" fontSize="9" fill="#8b5cf6">part = whole</text>
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

export default function FigurativeK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
