"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Vowels",
    r1_text: "VOWELS are the letters: A, E, I, O, U. Every word has at least one vowel! Vowels make singing sounds: /a/ /e/ /i/ /o/ /u/",
    r1_q: "Which letter is a vowel?",
    r1_a: "b",
    r1_b: "c",
    r1_c: "e",
    r1_d: "f",
    r2_title: "Short Vowel Sounds",
    r2_text: "SHORT VOWEL SOUNDS: /a/ in 'cat', /e/ in 'bed', /i/ in 'sit', /o/ in 'top', /u/ in 'cup'. Say them quickly!",
    r2_q: "Which word has a SHORT A sound?",
    r2_a: "make",
    r2_b: "gave",
    r2_c: "hat",
    r2_d: "play",
    r3_title: "Long Vowel Sounds",
    r3_text: "LONG VOWEL SOUNDS: /ā/ in 'cake', /ē/ in 'tree', /ī/ in 'bike', /ō/ in 'home', /ū/ in 'cube'. The vowel 'says its name'!",
    r3_q: "Which word has a LONG E sound?",
    r3_a: "bed",
    r3_b: "pen",
    r3_c: "see",
    r3_d: "sit",
    r4_title: "Vowel Review",
    r4_text: "Let's check what you learned!",
    r4_q1: "How many vowels are there?",
    r4_a1: "3",
    r4_b1: "5",
    r4_q2: "Is the A in 'make' short or long?",
    r4_a2: "short",
    r4_b2: "long",
    r4_q3: "Say the long O sound: /ō/ - which word?",
    r4_a3: "dog",
    r4_b3: "go",
    r5_title: "⭐ Vowel Master",
    r5_text: "You know all the vowel sounds!",
  },
  de: {
    r1_title: "Vokale",
    r1_text: "VOKALE sind die Buchstaben: A, E, I, O, U. Jedes Wort hat mindestens einen Vokal! Vokale machen Singlaute: /a/ /e/ /i/ /o/ /u/",
    r1_q: "Welcher Buchstabe ist ein Vokal?",
    r1_a: "b",
    r1_b: "c",
    r1_c: "e",
    r1_d: "f",
    r2_title: "Kurze Vokallaute",
    r2_text: "KURZE VOKALLAUTE: /a/ in 'katze', /e/ in 'bett', /i/ in 'sitz', /o/ in 'topf', /u/ in 'tasse'. Sag sie schnell!",
    r2_q: "Welches Wort hat einen KURZEN A-Laut?",
    r2_a: "machen",
    r2_b: "gaben",
    r2_c: "hut",
    r2_d: "spielen",
    r3_title: "Lange Vokallaute",
    r3_text: "LANGE VOKALLAUTE: /ā/ in 'kuchen', /ē/ in 'see', /ī/ in 'rad', /ō/ in 'haus', /ū/ in 'würfel'. Der Vokal 'sagt seinen Namen'!",
    r3_q: "Welches Wort hat einen LANGEN E-Laut?",
    r3_a: "bett",
    r3_b: "stift",
    r3_c: "see",
    r3_d: "sitz",
    r4_title: "Vokal-Wiederholung",
    r4_text: "Lass uns testen, was du gelernt hast!",
    r4_q1: "Wie viele Vokale gibt es?",
    r4_a1: "3",
    r4_b1: "5",
    r4_q2: "Ist das A in 'machen' kurz oder lang?",
    r4_a2: "kurz",
    r4_b2: "lang",
    r4_q3: "Sag den langen O-Laut: /ō/ - welches Wort?",
    r4_a3: "topf",
    r4_b3: "haus",
    r5_title: "⭐ Vokal-Meister",
    r5_text: "Du kennst alle Vokallaute!",
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
          <text x="120" y="100" textAnchor="middle" fontSize="60" fill="#6366F1" fontWeight="bold">
            AEIOU
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="120" cy="80" r="35" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="120" y="95" textAnchor="middle" fontSize="48" fill="#10B981">
            🔤
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
          <circle cx="80" cy="80" r="30" fill="none" stroke="#FFC107" strokeWidth="2" />
          <text x="80" y="95" textAnchor="middle" fontSize="40" fill="#FFC107">
            ↗️
          </text>
          <circle cx="160" cy="80" r="30" fill="none" stroke="#FFC107" strokeWidth="2" />
          <text x="160" y="95" textAnchor="middle" fontSize="40" fill="#FFC107">
            ↘️
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

export default function VowelExplorer({ color = "#6366F1", lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
