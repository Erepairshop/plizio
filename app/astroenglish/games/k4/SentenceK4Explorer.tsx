"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Simple & Compound Sentences",
    r1_text: "A SIMPLE sentence has one subject and one verb. A COMPOUND sentence connects two simple sentences with AND, OR, or BUT.",
    r1_q: "Which is a COMPOUND sentence?",
    r1_a: "The dog ran fast.",
    r1_b: "The dog ran fast and jumped high.",
    r1_c: "The dog quickly ran.",
    r1_d: "The fast dog ran.",
    r2_title: "Complex Sentences",
    r2_text: "A COMPLEX sentence has an independent clause and a dependent clause. Example: 'Because it was raining, we stayed inside.'",
    r2_q: "Which is a COMPLEX sentence?",
    r2_a: "I like pizza.",
    r2_b: "I like pizza and ice cream.",
    r2_c: "Although it was cold, we played outside.",
    r2_d: "I like ice cream.",
    r3_title: "Avoiding Run-Ons",
    r3_text: "A RUN-ON sentence connects too many ideas without punctuation or conjunctions. FIX: Use periods, commas, or conjunctions.",
    r3_q: "Which is CORRECT?",
    r3_a: "We went to the park we played games we had fun.",
    r3_b: "We went to the park, played games, and had fun.",
    r3_c: "We went park and played and had fun games.",
    r3_d: "We went to park played games had fun.",
    r4_title: "Sentence Fragments",
    r4_text: "A FRAGMENT is an incomplete sentence. It's missing a subject or verb. Example: 'Running down the street' (missing subject).",
    r4_q: "Which is a FRAGMENT?",
    r4_a: "She ran quickly.",
    r4_b: "The cat sleeping on the couch.",
    r4_c: "I like to read books.",
    r4_d: "He plays soccer.",
    r5_title: "⭐ Sentence Expert",
    r5_text: "Perfect! You understand complex sentence structures!",
  },
  de: {
    r1_title: "Einfache & zusammengesetzte Sätze",
    r1_text: "Ein EINFACHER Satz hat ein Subjekt und ein Verb. Ein ZUSAMMENGESETZTER Satz verbindet zwei einfache Sätze mit UND, ODER oder ABER.",
    r1_q: "Welches ist ein ZUSAMMENGESETZTER Satz?",
    r1_a: "Der Hund rannte schnell.",
    r1_b: "Der Hund rannte schnell und sprang hoch.",
    r1_c: "Der Hund rannte schnell.",
    r1_d: "Der schnelle Hund rannte.",
    r2_title: "Komplexe Sätze",
    r2_text: "Ein KOMPLEXER Satz hat eine Hauptklausel und eine Nebenklausel. Beispiel: 'Weil es regnete, blieben wir drinnen.'",
    r2_q: "Welches ist ein KOMPLEXER Satz?",
    r2_a: "Ich mag Pizza.",
    r2_b: "Ich mag Pizza und Eis.",
    r2_c: "Obwohl es kalt war, spielten wir draußen.",
    r2_d: "Ich mag Eis.",
    r3_title: "Satzverkettungen vermeiden",
    r3_text: "Ein VERKETTETER Satz verbindet zu viele Ideen ohne Satzzeichen oder Konjunktionen. FIX: Nutze Punkte, Kommas oder Konjunktionen.",
    r3_q: "Welches ist RICHTIG?",
    r3_a: "Wir gingen zum Park wir spielten Spiele wir hatten Spaß.",
    r3_b: "Wir gingen zum Park, spielten Spiele und hatten Spaß.",
    r3_c: "Wir gingen Park und spielten und hatten Spaß Spiele.",
    r3_d: "Wir gingen Park spielten Spiele hatten Spaß.",
    r4_title: "Satzbrocken",
    r4_text: "Ein BROCKEN ist ein unvollständiger Satz. Es fehlt ein Subjekt oder Verb. Beispiel: 'Die Straße hinunter laufend' (fehlendes Subjekt).",
    r4_q: "Welches ist ein BROCKEN?",
    r4_a: "Sie rannte schnell.",
    r4_b: "Die Katze auf dem Sofa schläft.",
    r4_c: "Ich mag es, Bücher zu lesen.",
    r4_d: "Er spielt Fußball.",
    r5_title: "⭐ Satz-Experte",
    r5_text: "Perfekt! Du verstehst komplexe Satzstrukturen!",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">💬</text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">🔗</text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">✓</text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">📝</text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FBBF24">⭐</text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function SentenceK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
