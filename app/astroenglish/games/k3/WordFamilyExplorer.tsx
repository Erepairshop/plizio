"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is a Word Family?",
    r1_text: "A word family is a group of words that share the SAME ROOT word. Example: walk, walking, walked, walker all come from 'walk'.",
    r1_q: "Which word is in the 'run' family?",
    r1_a: "walk",
    r1_b: "running",
    r1_c: "jump",
    r1_d: "sit",
    r2_title: "Root Words",
    r2_text: "The root word is the BASE. Other words are made by adding prefixes and suffixes. Example: 'play' is the root in: replay, playing, player, playful.",
    r2_q: "What is the root word of 'rereading'?",
    r2_a: "read",
    r2_b: "reading",
    r2_c: "re",
    r2_d: "ing",
    r3_title: "Related Words",
    r3_text: "Words in a family have RELATED meanings. They tell about the same idea. Example: happy, happily, happiness, unhappy are all about 'happy'.",
    r3_q: "Which word is related to 'teach'?",
    r3_a: "reach",
    r3_b: "teacher",
    r3_c: "tea",
    r3_d: "beach",
    r4_title: "Word Family Practice",
    r4_text: "Find the word that belongs to the same family!",
    r4_q: "Which word is in the 'care' family?",
    r4_a: "careful",
    r4_b: "car",
    r4_c: "scare",
    r4_d: "pare",
    r5_title: "⭐ Word Family Expert",
    r5_text: "Perfect! You can identify words in the same family!",
  },
  de: {
    r1_title: "Was ist eine Wortfamilie?",
    r1_text: "Eine Wortfamilie ist eine Gruppe von Wörtern, die das GLEICHE GRUNDWORT teilen. Beispiel: Gehen, Gehen, Gangen, Geher kommen alle von 'gehen'.",
    r1_q: "Welches Wort ist in der 'rennen'-Familie?",
    r1_a: "gehen",
    r1_b: "rennend",
    r1_c: "springen",
    r1_d: "sitzen",
    r2_title: "Grundwörter",
    r2_text: "Das Grundwort ist die BASIS. Andere Wörter werden durch Hinzufügen von Vorsilben und Endungen gemacht. Beispiel: 'spielen' ist die Basis in: nochmal spielen, spielend, Spieler, spielerisch.",
    r2_q: "Was ist das Grundwort von 'nochmal lesend'?",
    r2_a: "lesen",
    r2_b: "lesend",
    r2_c: "nochmal",
    r2_d: "end",
    r3_title: "Verwandte Wörter",
    r3_text: "Wörter in einer Familie haben VERWANDTE Bedeutungen. Sie erzählen von derselben Idee. Beispiel: glücklich, glücklich, Glück, unglücklich sind alle über 'glücklich'.",
    r3_q: "Welches Wort ist mit 'lehren' verwandt?",
    r3_a: "erreichen",
    r3_b: "Lehrer",
    r3_c: "Tee",
    r3_d: "Strand",
    r4_title: "Wortfamilien-Übung",
    r4_text: "Finde das Wort, das zur selben Familie gehört!",
    r4_q: "Welches Wort ist in der 'Sorge'-Familie?",
    r4_a: "sorgfältig",
    r4_b: "Auto",
    r4_c: "erschrecken",
    r4_d: "versorgen",
    r5_title: "⭐ Wortfamilien-Experte",
    r5_text: "Perfekt! Du kannst Wörter in derselben Familie identifizieren!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#A78BFA">
            👨‍👩‍👧‍👦
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#34D399">
            🌳
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FB923C">
            🔗
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
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }],
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
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function WordFamilyExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
