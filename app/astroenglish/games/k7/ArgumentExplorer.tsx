"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Logical Fallacies", tx1: "Errors in reasoning that weaken arguments. Ad hominem attacks the person, not the idea. Straw man misrepresents opponent.",
    q1: "Which is an ad hominem fallacy?", a1: "Your argument uses weak evidence", b1: "You're wrong because you're stupid", c1: "Your data contradicts the conclusion", d1: "This source is outdated",
    t2: "Appeal to Authority", tx2: "Using credible experts strengthens arguments. But relying on unqualified 'authorities' is a fallacy.",
    q2: "Which appeals to valid authority?", a2: "A movie star says diets work", b2: "A nutritionist cites 50 studies on balanced diets", c2: "My mom thinks it's true", d2: "Someone online recommended it",
    t3: "Evidence Quality", tx3: "Peer-reviewed sources > anecdotes. Statistics from reputable institutions > rumors. Primary sources > hearsay.",
    q3: "What's the strongest evidence?", a3: "My friend got better", b3: "A journal published peer-reviewed research", c3: "I read it online", d3: "It feels true",
    t4: "Hasty Generalization", tx4: "Reaching conclusions from too few examples. One case doesn't prove a rule. Use representative samples.",
    q4: "Which avoids hasty generalization?", a4: "All dogs are friendly because my dog is", b4: "A study of 10,000 dogs shows 73% are friendly", c4: "Dogs usually like people", d4: "One aggressive dog exists",
    t5: "Circular Reasoning", tx5: "Using the conclusion as proof. Avoid restating the same idea with different words. Add new supporting logic.",
    q5: "Which has circular reasoning?", a5: "TikTok is bad because it's harmful", b5: "TikTok affects focus: studies show users average 4.25 minutes per post", c5: "TikTok wastes time", d5: "Social media is popular",
  },
  de: {
    t1: "Logische Fehlschlüsse", tx1: "Fehler im Denken, die Argumente schwächen. Ad hominem greift die Person an, nicht die Idee.",
    q1: "Welcher ist ein Ad-hominem-Fehlschluss?", a1: "Dein Argument nutzt schwache Belege", b1: "Du hast Unrecht, weil du dumm bist", c1: "Deine Daten widersprechen der Folgerung", d1: "Diese Quelle ist veraltet",
    t2: "Appell an Autorität", tx2: "Glaubwürdige Experten stärken Argumente. Unqualifizierte 'Autoritäten' sind ein Fehlschluss.",
    q2: "Welcher Appell ist gültig?", a2: "Ein Filmstar sagt, Diäten wirken", b2: "Ein Ernährungsberater zitiert 50 Studien", c2: "Meine Mutter denkt, es ist wahr", d2: "Jemand online empfahl es",
    t3: "Beweis-Qualität", tx3: "Begutachtete Quellen > Anekdoten. Statistiken von seriösen Institutionen > Gerüchte.",
    q3: "Welcher Beleg ist am stärksten?", a3: "Mein Freund wurde besser", b3: "Ein Journal veröffentlichte Peer-Review-Forschung", c3: "Ich las es online", d3: "Es fühlt sich wahr an",
    t4: "Vorschnelle Verallgemeinerung", tx4: "Folgerungen aus zu wenigen Beispielen. Ein Fall bewies keine Regel.",
    q4: "Was vermeidet Verallgemeinerung?", a4: "Alle Hunde sind freundlich, weil meiner es ist", b4: "Eine Studie von 10.000 Hunden zeigt 73% sind freundlich", c4: "Hunde mögen meist Menschen", d4: "Ein aggressiver Hund existiert",
    t5: "Zirkelschluss", tx5: "Die Folgerung als Beweis nutzen. Vermeide, dieselbe Idee in anderen Worten zu wiederholen.",
    q5: "Welcher hat einen Zirkelschluss?", a5: "TikTok ist schlecht, weil es schädlich ist", b5: "TikTok beeinträchtigt Fokus: Nutzer geben ø 4,25 min pro Post aus", c5: "TikTok verschwendet Zeit", d5: "Soziale Medien sind beliebt",
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
          <text x="60" y="90" textAnchor="middle" fontSize="24" fill="#9333ea">💭</text>
          <path d="M90,80 L150,80" stroke="#a855f7" strokeWidth="2"/>
          <text x="180" y="90" textAnchor="middle" fontSize="20" fill="#e9d5ff">✗</text>
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
          <text x="60" y="80" textAnchor="middle" fontSize="32" fill="#10b981">✓</text>
          <text x="120" y="80" textAnchor="middle" fontSize="32" fill="#ef4444">✗</text>
          <text x="60" y="130" textAnchor="middle" fontSize="10" fill="#a7f3d0">Expert</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#fca5a5">Non-Expert</text>
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
          <text x="50" y="65" textAnchor="middle" fontSize="14" fill="#e0f2fe">Peer Review</text>
          <text x="190" y="65" textAnchor="middle" fontSize="14" fill="#fed7aa">Anecdote</text>
          <rect x="30" y="75" width="40" height="40" rx="4" fill="#0ea5e9" opacity="0.5"/>
          <rect x="160" y="75" width="40" height="40" rx="4" fill="#f97316" opacity="0.3"/>
          <path d="M70,95 L150,95" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
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
          <text x="50" y="70" textAnchor="middle" fontSize="12" fill="#cbd5e1">1 example</text>
          <rect x="30" y="75" width="40" height="30" rx="3" fill="#f97316" opacity="0.4"/>
          <path d="M75,90 L155,90" stroke="#60a5fa" strokeWidth="2"/>
          <text x="190" y="70" textAnchor="middle" fontSize="12" fill="#cbd5e1">10,000 sample</text>
          <rect x="170" y="75" width="40" height="30" rx="3" fill="#10b981" opacity="0.6"/>
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
          <circle cx="120" cy="80" r="30" fill="none" stroke="#f472b6" strokeWidth="2"/>
          <path d="M120,50 Q150,80 120,110" stroke="#f472b6" strokeWidth="2"/>
          <text x="120" y="150" textAnchor="middle" fontSize="11" fill="#fbcfe8">Circular Logic</text>
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

export default function ArgumentExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
