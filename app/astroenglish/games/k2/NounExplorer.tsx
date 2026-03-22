"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Common Nouns",
    r1_text: "Common nouns name any person, animal, thing, or place. They start with LOWERCASE letters. Examples: boy, cat, book, city.",
    r1_q: "Which is a common noun?",
    r1_a: "apple",
    r1_b: "Maria",
    r1_c: "Monday",
    r1_d: "Paris",
    r2_title: "Proper Nouns",
    r2_text: "Proper nouns name SPECIFIC people, animals, places, or days. They ALWAYS start with a CAPITAL letter. Examples: Maria, Paris, Monday, Apple Inc.",
    r2_q: "Which is a proper noun?",
    r2_a: "school",
    r2_b: "Sarah",
    r2_c: "teacher",
    r2_d: "car",
    r3_title: "Singular & Plural",
    r3_text: "SINGULAR = one item (boy, cat, pencil). PLURAL = more than one item. Most plurals add -S (cats) or -ES (boxes).",
    r3_q: "What is the plural of 'church'?",
    r3_a: "churchs",
    r3_b: "churches",
    r3_c: "churchies",
    r3_d: "church",
    r4_title: "Noun Review",
    r4_text: "Let's check what you learned! Answer carefully.",
    r4_q1: "Is 'dog' a common or proper noun?",
    r4_a1: "proper",
    r4_b1: "common",
    r4_q2: "Which word is plural?",
    r4_a2: "baby",
    r4_b2: "babies",
    r4_q3: "Which starts with a capital letter?",
    r4_a3: "john",
    r4_b3: "John",
    r5_title: "⭐ Noun Master",
    r5_text: "You're ready to use nouns in sentences!",
  },
  de: {
    r1_title: "Gemeine Substantive",
    r1_text: "Gemeine Substantive benennen jede Person, jedes Tier, jedes Ding oder jeden Ort. Sie beginnen mit KLEINBUCHSTABEN. Beispiele: junge, katze, buch, stadt.",
    r1_q: "Welches ist ein gemeines Substantiv?",
    r1_a: "apfel",
    r1_b: "Maria",
    r1_c: "Montag",
    r1_d: "Paris",
    r2_title: "Eigennamen",
    r2_text: "Eigennamen benennen SPEZIFISCHE Menschen, Tiere, Orte oder Tage. Sie beginnen IMMER mit einem GROSSBUCHSTABEN. Beispiele: Maria, Paris, Montag, Apple Inc.",
    r2_q: "Welches ist ein Eigenname?",
    r2_a: "schule",
    r2_b: "Sarah",
    r2_c: "lehrer",
    r2_d: "auto",
    r3_title: "Singular & Plural",
    r3_text: "SINGULAR = ein Element (junge, katze, bleistift). PLURAL = mehr als ein Element. Viele Plurale fügen -E hinzu (katzen) oder -N (boxen).",
    r3_q: "Was ist der Plural von 'kirche'?",
    r3_a: "kirchs",
    r3_b: "kirchen",
    r3_c: "kirchies",
    r3_d: "kirche",
    r4_title: "Substantiv-Wiederholung",
    r4_text: "Lass uns testen, was du gelernt hast!",
    r4_q1: "Ist 'hund' ein gemeines oder Eigenname?",
    r4_a1: "Eigenname",
    r4_b1: "gemein",
    r4_q2: "Welches Wort ist Plural?",
    r4_a2: "baby",
    r4_b2: "babys",
    r4_q3: "Welches beginnt mit Großbuchstabe?",
    r4_a3: "hans",
    r4_b3: "Hans",
    r5_title: "⭐ Substantiv-Meister",
    r5_text: "Du bist bereit, Substantive in Sätzen zu verwenden!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#3B82F6">
            📚
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            👤
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
          <text x="80" y="90" textAnchor="middle" fontSize="40" fill="#F59E0B">
            1️⃣
          </text>
          <text x="160" y="90" textAnchor="middle" fontSize="40" fill="#F59E0B">
            2️⃣
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EF4444">
            ❓
          </text>
        </svg>
      ),
      questions: [
        { question: "r4_q1", choices: ["r4_a1", "r4_b1"], answer: "r4_b1" },
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

export default function NounExplorer({ color = "#3B82F6", lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
