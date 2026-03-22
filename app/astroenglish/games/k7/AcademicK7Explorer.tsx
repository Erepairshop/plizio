"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Thesis Statements", tx1: "A strong thesis clearly states your main argument. It guides your entire essay and tells readers what to expect.",
    q1: "Which is a strong thesis?", a1: "Technology changes society", b1: "Social media impacts mental health by reducing face-to-face interaction and promoting addiction", c1: "Social media is popular", d1: "Many people use social media",
    t2: "Evidence & Support", tx2: "Back up your arguments with facts, quotes, and examples. Weak evidence weakens your argument.",
    q2: "What is the strongest evidence?", a2: "I think climate change is real", b2: "Studies show CO2 levels rose 48% since 1750", c2: "Climate change feels important", d2: "My friend agrees",
    t3: "Counterarguments", tx3: "Acknowledge opposing views, then refute them. This strengthens your position by showing you've considered both sides.",
    q3: "How should you handle disagreement?", a3: "Ignore it completely", b3: "Acknowledge it, then explain why your view is stronger", c3: "Get angry about it", d3: "Change your opinion",
    t4: "Persuasive Writing", tx4: "Use rhetoric, emotion, and logic to convince readers. Appeal to ethos (credibility), pathos (emotion), logos (logic).",
    q4: "Which is most persuasive?", a4: "You should recycle", b4: "Recycling saves 70% landfill space, protects wildlife, and costs nothing—take action today!", c4: "People recycle", d4: "Recycling exists",
    t5: "Academic Tone", tx5: "Formal writing avoids slang, contractions, and personal opinions. Use third person and objective language.",
    q5: "Which sentence is most academic?", a5: "This is cool", b5: "The data demonstrates correlation", c5: "Stuff shows things", d5: "I think it's good",
  },
  de: {
    t1: "Thesen", tx1: "Eine starke These stellt dein Argument klar dar und leitet deinen Aufsatz.",
    q1: "Welche ist eine starke These?", a1: "Technologie verändert die Gesellschaft", b1: "Soziale Medien beeinflussen psychische Gesundheit durch weniger Kontakt und Sucht", c1: "Soziale Medien sind beliebt", d1: "Viele nutzen soziale Medien",
    t2: "Belege & Unterstützung", tx2: "Belege deine Argumente mit Fakten, Zitaten und Beispielen.",
    q2: "Welcher Beleg ist am stärksten?", a2: "Ich denke, Klimawandel ist real", b2: "Studien zeigen: CO2 stieg 48% seit 1750", c2: "Klimawandel fühlt sich wichtig an", d2: "Mein Freund stimmt zu",
    t3: "Gegenargumente", tx3: "Beachte gegenteilige Sichtweisen, widerlege sie dann.",
    q3: "Wie mit Meinungsverschiedenheit umgehen?", a3: "Ignoriere sie", b3: "Beachte sie, erklär dann warum deine Sicht stärker ist", c3: "Werd sauer", d3: "Ändere deine Meinung",
    t4: "Überzeugend Schreiben", tx4: "Nutze Rhetorik, Emotion und Logik. Ethos, Pathos, Logos.",
    q4: "Was ist überzeugendst?", a4: "Du solltest recyceln", b4: "Recyceln spart 70% Müll, schützt Tiere, kostet nichts—handele jetzt!", c4: "Leute recyceln", d4: "Recyceln existiert",
    t5: "Akademischer Ton", tx5: "Formales Schreiben: kein Slang, keine Umgangssprache, objektive Sprache.",
    q5: "Welcher Satz ist akademisch?", a5: "Das ist cool", b5: "Die Daten zeigen Korrelation", c5: "Sachen zeigen Dinge", d5: "Ich denk, das ist gut",
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
          <text x="120" y="60" textAnchor="middle" fontSize="18" fill="#e0f2fe">Main Idea</text>
          <rect x="40" y="75" width="160" height="50" rx="4" fill="#0ea5e9" opacity="0.3"/>
          <text x="120" y="110" textAnchor="middle" fontSize="12" fill="#bfdbfe" fontStyle="italic">Supports entire essay</text>
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
          <circle cx="60" cy="80" r="18" fill="#10b981" opacity="0.6"/>
          <text x="60" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Fact</text>
          <circle cx="120" cy="80" r="18" fill="#10b981" opacity="0.6"/>
          <text x="120" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Quote</text>
          <circle cx="180" cy="80" r="18" fill="#10b981" opacity="0.6"/>
          <text x="180" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Example</text>
          <path d="M78,80 L102,80 M138,80 L162,80" stroke="#34d399" strokeWidth="2"/>
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
          <text x="60" y="80" textAnchor="middle" fontSize="32" fill="#fbbf24">⚖️</text>
          <path d="M90,80 L150,80" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="180" y="85" textAnchor="middle" fontSize="14" fill="#fef3c7">Refute</text>
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
          <text x="60" y="60" textAnchor="middle" fontSize="20" fill="#60a5fa">📊</text>
          <text x="120" y="60" textAnchor="middle" fontSize="20" fill="#f472b6">❤️</text>
          <text x="180" y="60" textAnchor="middle" fontSize="20" fill="#34d399">🧠</text>
          <text x="60" y="130" textAnchor="middle" fontSize="10" fill="#93c5fd">Logic</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#fbcfe8">Emotion</text>
          <text x="180" y="130" textAnchor="middle" fontSize="10" fill="#a7f3d0">Ethos</text>
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
          <text x="120" y="50" textAnchor="middle" fontSize="14" fill="#cbd5e1">Formal & Objective</text>
          <rect x="30" y="65" width="180" height="45" rx="4" fill="#475569" opacity="0.4"/>
          <text x="120" y="95" textAnchor="middle" fontSize="13" fill="#e2e8f0">No slang, no "I think", third person</text>
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

export default function AcademicK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
