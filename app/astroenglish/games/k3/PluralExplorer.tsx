"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Regular Plurals - Adding -S",
    r1_text: "To make MOST nouns PLURAL, we add -S: cat → cats, dog → dogs, book → books. Simple rule!",
    r1_q: "What is the plural of 'apple'?",
    r1_a: "appel",
    r1_b: "apples",
    r1_c: "appless",
    r1_d: "apply",
    r2_title: "Plurals with -ES",
    r2_text: "Words ending in X, Z, S, SH, or CH add -ES: box → boxes, bush → bushes, church → churches, dish → dishes.",
    r2_q: "What is the plural of 'dish'?",
    r2_a: "dishs",
    r2_b: "dishes",
    r2_c: "dishies",
    r2_d: "dish",
    r3_title: "Irregular Plurals",
    r3_text: "Some nouns DON'T follow the rules! man → men, woman → women, child → children, tooth → teeth, foot → feet, mouse → mice.",
    r3_q: "What is the plural of 'child'?",
    r3_a: "childs",
    r3_b: "childes",
    r3_c: "children",
    r3_d: "childess",
    r4_title: "Plural Review",
    r4_text: "Let's check what you learned!",
    r4_q1: "Add -S or -ES to make plural?",
    r4_a1: "sometimes -S, sometimes -ES",
    r4_b1: "always -S",
    r4_q2: "What is the plural of 'tooth'?",
    r4_a2: "tooths",
    r4_b2: "teeth",
    r4_q3: "Is 'woman' → 'womans' correct?",
    r4_a3: "yes",
    r4_b3: "no (women)",
    r5_title: "⭐ Plural Master",
    r5_text: "You know singular and plural!",
  },
  de: {
    r1_title: "Regelmäßige Plurale - -S hinzufügen",
    r1_text: "Um die MEISTEN Substantive in den PLURAL zu setzen, fügen wir -S hinzu: katze → katzen, hund → hunde, buch → bücher.",
    r1_q: "Was ist der Plural von 'apfel'?",
    r1_a: "apfel",
    r1_b: "äpfel",
    r1_c: "appels",
    r1_d: "apples",
    r2_title: "Plurale mit Umlaut",
    r2_text: "Wörter mit A, O, U bekommen oft einen Umlaut: Apfel → Äpfel, Tisch → Tische, Baum → Bäume.",
    r2_q: "Was ist der Plural von 'tisch'?",
    r2_a: "tischs",
    r2_b: "tisches",
    r2_c: "tische",
    r2_d: "tische",
    r3_title: "Unregelmäßige Plurale",
    r3_text: "Einige Substantive folgen NICHT den Regeln! mann → männer, frau → frauen, kind → kinder, zahn → zähne, fuß → füße, maus → mäuse.",
    r3_q: "Was ist der Plural von 'kind'?",
    r3_a: "kinds",
    r3_b: "kindes",
    r3_c: "kinder",
    r3_d: "kindess",
    r4_title: "Plural-Wiederholung",
    r4_text: "Lass uns testen, was du gelernt hast!",
    r4_q1: "Hinzufügen von -E oder Umlaut?",
    r4_a1: "immer -E",
    r4_b1: "manchmal -E, manchmal Umlaut",
    r4_q2: "Was ist der Plural von 'zahn'?",
    r4_a2: "zahns",
    r4_b2: "zähne",
    r4_q3: "Ist 'frau' → 'frauen' korrekt?",
    r4_a3: "nein",
    r4_b3: "ja",
    r5_title: "⭐ Plural-Meister",
    r5_text: "Du kennst Singular und Plural!",
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
          <circle cx="75" cy="80" r="25" fill="#3B82F6" opacity="0.6" />
          <circle cx="120" cy="80" r="25" fill="#3B82F6" opacity="0.6" />
          <circle cx="165" cy="80" r="25" fill="#3B82F6" opacity="0.6" />
          <text x="120" y="95" textAnchor="middle" fontSize="32" fill="#3B82F6">
            +S
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
          <rect x="60" y="50" width="40" height="60" fill="#10B981" opacity="0.6" />
          <rect x="120" y="50" width="40" height="60" fill="#10B981" opacity="0.6" />
          <rect x="180" y="50" width="40" height="60" fill="#10B981" opacity="0.6" />
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
          <text x="80" y="100" textAnchor="middle" fontSize="40" fill="#EF4444">
            ⚡
          </text>
          <text x="160" y="100" textAnchor="middle" fontSize="40" fill="#EF4444">
            ⚡
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            ❓
          </text>
        </svg>
      ),
      questions: [
        { question: "r4_q1", choices: ["r4_a1", "r4_b1"], answer: "r4_a1" },
        { question: "r4_q2", choices: ["r4_a2", "r4_b2"], answer: "r4_b2" },
        { question: "r4_q3", choices: ["r4_a3", "r4_b3"], answer: "r4_b3" },
      ],
    },
    {
      type: "info",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FFD700">
            ⭐
          </text>
        </svg>
      ),
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function PluralExplorer({ color = "#3B82F6", lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
