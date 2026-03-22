"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Latin Roots", tx1: "Latin is the foundation of English! ROOT 'port' = carry: transport, import, export. ROOT 'dict' = speak: dictate, contradict, predict.",
    q1: "What does 'dict' mean?", a1: "write", b1: "speak", c1: "carry", d1: "move",
    t2: "Greek Roots", tx2: "Greek gave us science words. ROOT 'bio' = life: biology, biography. ROOT 'phon' = sound: telephone, microphone, symphony.",
    q2: "What does 'phon' mean?", a2: "light", b2: "heat", c2: "sound", d2: "water",
    t3: "Prefixes & Suffixes", tx3: "PREFIX 'un-' = not: unhappy, unsafe. SUFFIX '-tion' = act/result: creation, nation. They CHANGE MEANING!",
    q3: "What does prefix 'un-' mean?", a3: "again", b3: "not", c3: "before", d3: "after",
    t4: "Word Families", tx4: "Words from same root form FAMILIES. Port: deport, report, support, porter, portable. Knowing roots helps you understand 1000s of words!",
    q4: "Which shares root with 'portable'?", a4: "important", b4: "sports", c4: "transportation", d4: "portal",
    t5: "Etymology Tracking", tx5: "Tracing a word's origin reveals meaning & helps with spelling. 'Necessary' from Latin 'ne' (not) + 'cessare' (to stop) = not stopping.",
    q5: "Which word likely comes from Latin 'manus' (hand)?", a5: "manage", b5: "manner", c5: "manual", d5: "All of the above",
  },
  de: {
    t1: "Lateinische Wurzeln", tx1: "Latein ist Grundlage des Englischen! WURZEL 'port' = tragen: transport, import. WURZEL 'dict' = sprechen: dictate.",
    q1: "Was bedeutet 'dict'?", a1: "schreiben", b1: "sprechen", c1: "tragen", d1: "bewegen",
    t2: "Griechische Wurzeln", tx2: "Griechisch gab Wissenschaftswörter. WURZEL 'bio' = Leben: biology. WURZEL 'phon' = Ton: telephone.",
    q2: "Was bedeutet 'phon'?", a2: "Licht", b2: "Wärme", c2: "Ton", d2: "Wasser",
    t3: "Präfixe & Suffixe", tx3: "PRÄFIX 'un-' = nicht: unhappy. SUFFIX '-tion' = Akt/Resultat: creation.",
    q3: "Was bedeutet Präfix 'un-'?", a3: "wieder", b3: "nicht", c3: "vor", d3: "nach",
    t4: "Wort-Familien", tx4: "Wörter aus gleicher Wurzel bilden FAMILIEN. Port: deport, transport, portable.",
    q4: "Welches hat Wurzel wie 'portable'?", a4: "wichtig", b4: "Sportarten", c4: "Beförderung", d4: "Portal",
    t5: "Etymologie-Verfolgung", tx5: "Wort-Herkunft verfolgen zeigt Bedeutung.",
    q5: "Welches Wort kommt von Latein 'manus' (Hand)?", a5: "verwalten", b5: "Weise", c5: "manuell", d5: "Alle oben",
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
          <text x="120" y="60" textAnchor="middle" fontSize="16" fill="#a855f7">Latin</text>
          <text x="60" y="110" textAnchor="middle" fontSize="12" fill="#e9d5ff">port = carry</text>
          <text x="180" y="110" textAnchor="middle" fontSize="12" fill="#e9d5ff">dict = speak</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <text x="120" y="60" textAnchor="middle" fontSize="16" fill="#60a5fa">Greek</text>
          <text x="60" y="110" textAnchor="middle" fontSize="12" fill="#bfdbfe">bio = life</text>
          <text x="180" y="110" textAnchor="middle" fontSize="12" fill="#bfdbfe">phon = sound</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "c2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <rect x="30" y="60" width="70" height="35" rx="3" fill="#f97316" opacity="0.5"/>
          <text x="65" y="85" textAnchor="middle" fontSize="11" fill="#fed7aa">PREFIX</text>
          <text x="120" y="85" textAnchor="middle" fontSize="14" fill="#fbbf24">+</text>
          <rect x="140" y="60" width="70" height="35" rx="3" fill="#06b6d4" opacity="0.5"/>
          <text x="175" y="85" textAnchor="middle" fontSize="11" fill="#cffafe">SUFFIX</text>
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
          <circle cx="120" cy="60" r="18" fill="#10b981" opacity="0.6"/>
          <text x="120" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">port</text>
          <circle cx="60" cy="110" r="14" fill="#34d399" opacity="0.5"/>
          <text x="60" y="114" textAnchor="middle" fontSize="9" fill="white">export</text>
          <circle cx="120" cy="130" r="14" fill="#34d399" opacity="0.5"/>
          <text x="120" y="134" textAnchor="middle" fontSize="9" fill="white">report</text>
          <circle cx="180" cy="110" r="14" fill="#34d399" opacity="0.5"/>
          <text x="180" y="114" textAnchor="middle" fontSize="9" fill="white">support</text>
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
          <text x="120" y="55" textAnchor="middle" fontSize="13" fill="#cbd5e1">Word Origin</text>
          <path d="M120,65 L120,85" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <rect x="30" y="90" width="180" height="35" rx="3" fill="#1e293b" opacity="0.6"/>
          <text x="120" y="115" textAnchor="middle" fontSize="12" fill="#93c5fd">Meaning + Spelling</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "d5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function EtymologyExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
