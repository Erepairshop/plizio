"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Using Context Clues",
    r1_text: "Context clues help you understand a new word. Look at the words AROUND the new word. What does the sentence tell you? Example: She felt so happy and joyful (means the same as happy).",
    r1_q: "What does 'famished' mean from context? 'After not eating all day, the famished child ate quickly.'",
    r1_a: "happy",
    r1_b: "very hungry",
    r1_c: "angry",
    r1_d: "sleepy",
    r2_title: "Multiple Meanings",
    r2_text: "Some words have MORE THAN ONE meaning. You must use context clues to know which meaning. Example: 'bat' can mean an animal OR a sports stick.",
    r2_q: "In 'He hit the ball with a bat,' what does 'bat' mean?",
    r2_a: "a small flying animal",
    r2_b: "a sports stick",
    r2_c: "to move wings",
    r2_d: "to close eyes quickly",
    r3_title: "Synonyms (Same Meaning)",
    r3_text: "Synonyms are words that mean almost the same thing. Examples: happy/joyful, small/tiny, run/sprint, beautiful/pretty.",
    r3_q: "Which word is a synonym of 'large'?",
    r3_a: "tiny",
    r3_b: "huge",
    r3_c: "small",
    r3_d: "medium",
    r4_title: "Vocabulary Practice",
    r4_text: "Choose the word that BEST fits the sentence!",
    r4_q: "The storm was very violent and _____ (fierce)",
    r4_a: "calm",
    r4_b: "gentle",
    r4_c: "turbulent",
    r4_d: "peaceful",
    r5_title: "⭐ Vocabulary Expert",
    r5_text: "Excellent! You understand context clues and word meanings!",
  },
  de: {
    r1_title: "Kontexthilfen verwenden",
    r1_text: "Kontexthilfen helfen dir, ein neues Wort zu verstehen. Schau die Wörter UM das neue Wort. Was sagt dir der Satz? Beispiel: Sie fühlte sich so glücklich und freudig (bedeutet dasselbe wie glücklich).",
    r1_q: "Was bedeutet 'ausgehungert' vom Kontext? 'Nach dem ganzen Tag ohne Essen aß das ausgehungerte Kind schnell.'",
    r1_a: "glücklich",
    r1_b: "sehr hungrig",
    r1_c: "wütend",
    r1_d: "schläfrig",
    r2_title: "Mehrere Bedeutungen",
    r2_text: "Einige Wörter haben MEHR ALS EINE Bedeutung. Du musst Kontexthilfen verwenden, um zu wissen, welche Bedeutung. Beispiel: 'Fledermaus' kann ein Tier ODER einen Sportstab bedeuten.",
    r2_q: "In 'Er schlug den Ball mit einem Schläger' was bedeutet 'Schläger'?",
    r2_a: "ein kleines fliegendes Tier",
    r2_b: "ein Sportstab",
    r2_c: "Flügel zu bewegen",
    r2_d: "Augen schnell zu schließen",
    r3_title: "Synonyme (Gleiche Bedeutung)",
    r3_text: "Synonyme sind Wörter, die fast dasselbe bedeuten. Beispiele: glücklich/freudig, klein/winzig, rennen/sprinten, schön/hübsch.",
    r3_q: "Welches Wort ist ein Synonym von 'groß'?",
    r3_a: "winzig",
    r3_b: "riesig",
    r3_c: "klein",
    r3_d: "mittel",
    r4_title: "Wortschatz-Übung",
    r4_text: "Wähle das Wort, das am besten passt!",
    r4_q: "Der Sturm war sehr heftig und _____ (wild)",
    r4_a: "ruhig",
    r4_b: "sanft",
    r4_c: "turbulent",
    r4_d: "friedlich",
    r5_title: "⭐ Wortschatz-Experte",
    r5_text: "Ausgezeichnet! Du verstehst Kontexthilfen und Wortbedeutungen!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">
            🔍
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">
            🎯
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            =
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            ✓
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FBBF24">
            ⭐
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_c" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function VocabExplorerK3({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
