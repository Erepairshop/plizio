"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Persönliche Pronomen",
    text1: "Persönliche Pronomen ersetzen Nomen. Nominativ: ich, du, er/sie/es, wir, ihr, sie/Sie.",
    q1: "Welches ist ein persönliches Pronomen im Nominativ?",
    a1: "ich",
    b1: "mich",
    c1: "mir",
    d1: "mein",

    title2: "Akkusativ",
    text2: "Im Akkusativ ändern sich die Pronomen: mich, dich, ihn/sie/es, uns, euch, sie/Sie.",
    q2: "Akkusativ von 'ich'?",
    a2: "mich",
    b2: "mir",
    c2: "ich",
    d2: "mein",

    title3: "Dativ",
    text3: "Im Dativ: mir, dir, ihm/ihr/ihm, uns, euch, ihnen/Ihnen.",
    q3: "Dativ von 'du'?",
    a3: "dir",
    b3: "dich",
    c3: "dein",
    d3: "du",

    title4: "Possessivpronomen",
    text4: "Possessivpronomen drücken Besitz aus: mein, dein, sein, ihr, unser, euer, ihr/Ihr.",
    q4: "Welches ist ein Possessivpronomen?",
    a4: "mein",
    b4: "mich",
    c4: "mir",
    d4: "ich",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Pronomen in verschiedenen Fällen!",
    q5a: "Nominativ von 'sie' (Singular)?",
    a5a: "sie",
    b5a: "sie",
    c5a: "ihr",
    d5a: "ihn",
    q5b: "Der Lehrer gibt ___ (ich) ein Buch.",
    a5b: "mir",
    b5b: "mich",
    c5b: "mein",
    d5b: "ich",
    q5c: "Das ist ___ (ich) Buch.",
    a5c: "mein",
    b5c: "mich",
    c5c: "mir",
    d5c: "ich",
  },
  en: {
    title1: "Personal Pronouns",
    text1: "Personal pronouns replace nouns. Nominative: I, you, he/she/it, we, you (pl), they.",
    q1: "Which is a personal pronoun in nominative?",
    a1: "I",
    b1: "me",
    c1: "to me",
    d1: "my",

    title2: "Accusative",
    text2: "In accusative, pronouns change: me, you, him/her/it, us, you, them.",
    q2: "Accusative of 'I'?",
    a2: "me",
    b2: "to me",
    c2: "I",
    d2: "my",

    title3: "Dative",
    text3: "In dative: to me, to you, to him/her/it, to us, to you, to them.",
    q3: "Dative of 'you'?",
    a3: "to you",
    b3: "you",
    c3: "your",
    d3: "you",

    title4: "Possessive Pronouns",
    text4: "Possessive pronouns show ownership: my, your, his, her, our, your, their.",
    q4: "Which is a possessive pronoun?",
    a4: "my",
    b4: "me",
    c4: "to me",
    d4: "I",

    title5: "Big Test",
    text5: "Test your knowledge of pronouns in different cases!",
    q5a: "Nominative of 'she'?",
    a5a: "she",
    b5a: "her",
    c5a: "hers",
    d5a: "him",
    q5b: "The teacher gives ___ (I) a book.",
    a5b: "me",
    b5b: "I",
    c5b: "my",
    d5b: "I",
    q5c: "That is ___ (I) book.",
    a5c: "my",
    b5c: "me",
    c5c: "to me",
    d5c: "I",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">👤</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🎯</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">⬅️</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">📎</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🏆</text>
        </svg>
      ),
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "a5c" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function PronounExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
