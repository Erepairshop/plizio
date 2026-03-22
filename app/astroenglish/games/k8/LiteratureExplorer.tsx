"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Symbolism", tx1: "Objects represent deeper meanings. A dove = peace. A rose = love. A storm = conflict. Symbols deepen meaning beyond literal.",
    q1: "What might a dark forest symbolize?", a1: "happiness", b1: "danger or the unknown", c1: "winter", d1: "a vacation",
    t2: "Foreshadowing", tx2: "Hints about future events. 'Dark clouds gathered' foreshadows danger. Keeps readers wondering what happens next!",
    q2: "Which is foreshadowing?", a2: "She was tired from work", b2: "A strange letter arrived in the morning mail", c2: "He walked to school", d2: "The sky was blue",
    t3: "Allegory", tx3: "A complete story where CHARACTERS and EVENTS represent abstract ideas. Aesop's Fables are allegories (animals teach lessons about life).",
    q3: "What is the purpose of allegory?", a3: "To be funny", b3: "To teach a lesson about life through characters", c3: "To confuse readers", d3: "To describe places",
    t4: "Irony", tx4: "When reality contradicts expectations. Verbal irony: saying opposite of what you mean. Situational: what happens contradicts what was expected.",
    q4: "Which shows situational irony?", a4: "A firefighter is afraid of water", b4: "A safety inspector causes an accident", c4: "A teacher doesn't know math", d4: "A doctor is sick",
    t5: "Flashback & Foreshadow", tx5: "Flashback: going back to past events. Foreshadowing: hints of future. Both manage time and create suspense or reveal character.",
    q5: "Which technique reveals CHARACTER through memory?", a5: "Foreshadowing", b5: "Metaphor", c5: "Flashback", d5: "Hyperbole",
  },
  de: {
    t1: "Symbolik", tx1: "Gegenstände repräsentieren tiefere Bedeutungen. Eine Taube = Frieden. Eine Rose = Liebe.",
    q1: "Was könnte ein dunkler Wald symbolisieren?", a1: "Glück", b1: "Gefahr oder das Unbekannte", c1: "Winter", d1: "Ein Urlaub",
    t2: "Vorausdeutung", tx2: "Hinweise auf zukünftige Ereignisse. 'Dunkle Wolken' deuten auf Gefahr hin.",
    q2: "Was ist Vorausdeutung?", a2: "Sie war müde von der Arbeit", b2: "Ein seltsamer Brief kam an", c2: "Er ging zur Schule", d2: "Der Himmel war blau",
    t3: "Allegorie", tx3: "Eine komplette Geschichte, wo Charaktere Ideen repräsentieren. Äsops Fabeln sind Allegorien.",
    q3: "Was ist der Zweck einer Allegorie?", a3: "Lustig sein", b3: "Eine Lektion durch Charaktere lehren", c3: "Leser verwirren", d3: "Orte beschreiben",
    t4: "Ironie", tx4: "Wenn Realität Erwartungen widerspricht. Verbale Ironie: das Gegenteil sagen. Situativ: unerwartete Ereignisse.",
    q4: "Welches zeigt Situationsironie?", a4: "Ein Feuerwehrmann hat Angst vor Wasser", b4: "Ein Sicherheitsinspektor verursacht einen Unfall", c4: "Ein Lehrer kennt keine Mathe", d4: "Ein Arzt ist krank",
    t5: "Rückblende & Vorausdeutung", tx5: "Rückblende: zurück zu Vergangenheit. Vorausdeutung: Hinweise auf Zukunft.",
    q5: "Welche Technik zeigt CHARAKTER durch Erinnerung?", a5: "Vorausdeutung", b5: "Metapher", c5: "Rückblende", d5: "Hyperbel",
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
          <text x="60" y="90" textAnchor="middle" fontSize="32" fill="#a855f7">🕊️</text>
          <path d="M90,90 L150,90" stroke="#e879f9" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="180" y="95" textAnchor="middle" fontSize="11" fill="#e9d5ff">Peace</text>
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
          <text x="120" y="60" textAnchor="middle" fontSize="13" fill="#93c5fd">Hint at Future</text>
          <path d="M120,75 L120,110" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#bfdbfe">Something Happens</text>
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
          <rect x="40" y="45" width="160" height="60" rx="4" fill="#10b981" opacity="0.3"/>
          <text x="60" y="75" textAnchor="middle" fontSize="12" fill="#a7f3d0">Characters</text>
          <text x="180" y="75" textAnchor="middle" fontSize="12" fill="#a7f3d0">Represent</text>
          <text x="120" y="110" textAnchor="middle" fontSize="11" fill="#dcfce7">Life Lessons</text>
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
          <text x="60" y="80" textAnchor="middle" fontSize="12" fill="#cbd5e1">Expected</text>
          <circle cx="60" cy="100" r="12" fill="#ef4444" opacity="0.4"/>
          <path d="M80,80 L110,80" stroke="#60a5fa" strokeWidth="2"/>
          <text x="180" y="80" textAnchor="middle" fontSize="12" fill="#cbd5e1">Reality</text>
          <circle cx="180" cy="100" r="12" fill="#10b981" opacity="0.6"/>
          <path d="M120,100 L140,100" stroke="#60a5fa" strokeWidth="2"/>
          <text x="130" y="130" textAnchor="middle" fontSize="10" fill="#93c5fd">Irony!</text>
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
          <text x="60" y="75" textAnchor="middle" fontSize="10" fill="#cbd5e1">Flashback</text>
          <path d="M60,85 L60,120" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="60" y="140" textAnchor="middle" fontSize="10" fill="#fed7aa">Past</text>
          <text x="180" y="75" textAnchor="middle" fontSize="10" fill="#cbd5e1">Foreshadow</text>
          <path d="M180,85 L180,120" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="180" y="140" textAnchor="middle" fontSize="10" fill="#93c5fd">Future</text>
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

export default function LiteratureExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
