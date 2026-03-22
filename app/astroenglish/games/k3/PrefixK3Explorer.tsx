"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Prefixes: un-, re-, pre-",
    r1_text: "A prefix is a letter group at the START of a word that changes its meaning. UN- means 'not' (unhappy = not happy). RE- means 'again' (rewrite = write again).",
    r1_q: "What does 'unhappy' mean?",
    r1_a: "very happy",
    r1_b: "not happy",
    r1_c: "happy again",
    r1_d: "almost happy",
    r2_title: "More Prefixes",
    r2_text: "PRE- means 'before' (preview = see before). DIS- means 'not' (disagree = not agree). MIS- means 'wrong' (misspell = spell wrong).",
    r2_q: "Which word means 'spell incorrectly'?",
    r2_a: "prespell",
    r2_b: "respell",
    r2_c: "misspell",
    r2_d: "unspell",
    r3_title: "Suffixes: -ful, -less, -ness",
    r3_text: "A suffix is at the END of a word. -FUL means 'full of' (joyful = full of joy). -LESS means 'without' (joyless = without joy). -NESS makes nouns (happiness).",
    r3_q: "What does 'careless' mean?",
    r3_a: "full of care",
    r3_b: "without care",
    r3_c: "more care",
    r3_d: "care again",
    r4_title: "Prefix & Suffix Review",
    r4_text: "Find the prefix or suffix that completes the word!",
    r4_q: "_____ means 'not friendly'",
    r4_a: "refriendly",
    r4_b: "unfriendly",
    r4_c: "friendship",
    r4_d: "friendless",
    r5_title: "⭐ Word Builder Expert",
    r5_text: "Great! You can build words with prefixes and suffixes!",
  },
  de: {
    r1_title: "Vorsilben: un-, re-, pre-",
    r1_text: "Eine Vorsilbe ist eine Buchstabengruppe am ANFANG eines Wortes, die seine Bedeutung ändert. UN- bedeutet 'nicht' (unglücklich = nicht glücklich). RE- bedeutet 'nochmal' (umschreiben = wieder schreiben).",
    r1_q: "Was bedeutet 'unglücklich'?",
    r1_a: "sehr glücklich",
    r1_b: "nicht glücklich",
    r1_c: "glücklich nochmal",
    r1_d: "fast glücklich",
    r2_title: "Mehr Vorsilben",
    r2_text: "PRE- bedeutet 'vorher' (Vorschau = vorher sehen). DIS- bedeutet 'nicht' (nicht einverstanden = nicht einig). MIS- bedeutet 'falsch' (falsche Schreibweise = falsch schreiben).",
    r2_q: "Welches Wort bedeutet 'falsch schreiben'?",
    r2_a: "vorschreiben",
    r2_b: "umschreiben",
    r2_c: "falsch schreiben",
    r2_d: "unschreiben",
    r3_title: "Endungen: -ful, -less, -ness",
    r3_text: "Eine Endung ist am ENDE eines Wortes. -FUL bedeutet 'voll von' (freudvoll = voll Freude). -LESS bedeutet 'ohne' (ohne Freude). -NESS macht Nomina (Freude).",
    r3_q: "Was bedeutet 'sorglos'?",
    r3_a: "voll von Sorge",
    r3_b: "ohne Sorge",
    r3_c: "mehr Sorge",
    r3_d: "Sorge nochmal",
    r4_title: "Vorsilben- & Endungen-Wiederholung",
    r4_text: "Finde die Vorsilbe oder Endung, die das Wort vervollständigt!",
    r4_q: "_____ bedeutet 'nicht freundlich'",
    r4_a: "refreundlich",
    r4_b: "unfreundlich",
    r4_c: "Freundschaft",
    r4_d: "freundschaftslos",
    r5_title: "⭐ Wortbildungs-Experte",
    r5_text: "Großartig! Du kannst Wörter mit Vorsilben und Endungen bilden!",
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
            📝
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
            🔄
          </text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            ✂️
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
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
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

export default function PrefixK3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
