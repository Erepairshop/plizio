"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Personalpronomen (Nominativ)",
    text1: "Personalpronomen ersetzen Nomen. Im Nominativ: ich, du, er, sie, es, wir, ihr, sie.",
    q1: "Welches Pronomen ersetzt 'Maria'?",
    a1: "sie",
    b1: "er",
    c1: "es",
    d1: "du",

    title2: "Akkusativ & Dativ",
    text2: "Der Kasus bestimmt die Form: mich, dich, ihn, sie, es, uns, euch, sie (Akkusativ). mir, dir, ihm, ihr, ihm, uns, euch, ihnen (Dativ).",
    q2: "Welche Form passt: 'Ich sehe ___'?",
    a2: "ihn",
    b2: "ihm",
    c2: "er",
    d2: "he",

    title3: "Possessivpronomen",
    text3: "Possessivpronomen zeigen Besitz. Beispiele: mein, dein, sein, ihr, unser, euer, ihr.",
    q3: "Welches Wort gehört zu 'wir'?",
    a3: "unser",
    b3: "sein",
    c3: "dein",
    d3: "euer",

    title4: "Reflexivpronomen",
    text4: "Reflexivpronomen beziehen sich zurück auf das Subjekt. Beispiel: 'Ich wasche mich' - sich für 3. Person.",
    q4: "Welches ist das Reflexivpronomen für 'er'?",
    a4: "sich",
    b4: "ihm",
    c4: "sein",
    d4: "ihn",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Pronomen!",
    q5a: "Nominativ von 'ich'?",
    a5a: "ich",
    b5a: "mich",
    c5a: "mir",
    d5a: "meinen",
    q5b: "Akkusativ von 'wir'?",
    a5b: "uns",
    b5b: "wir",
    c5b: "unser",
    d5b: "unseren",
    q5c: "Possessivpronomen für 'ihr'?",
    a5c: "euer",
    b5c: "ihr",
    c5c: "sie",
    d5c: "euere",
  },
  en: {
    title1: "Personal Pronouns (Nominative)",
    text1: "Personal pronouns replace nouns. In nominative: I, you, he, she, it, we, you, they.",
    q1: "Which pronoun replaces 'Maria'?",
    a1: "she",
    b1: "he",
    c1: "it",
    d1: "you",

    title2: "Accusative & Dative",
    text2: "The case determines the form: me, you, him, her, it, us, you, them (accusative). Changes in dative case too.",
    q2: "Which form fits: 'I see ___'?",
    a2: "him",
    b2: "to him",
    c2: "he",
    d2: "it",

    title3: "Possessive Pronouns",
    text3: "Possessive pronouns show possession. Examples: my, your, his, her, our, your, their.",
    q3: "Which word belongs to 'we'?",
    a3: "our",
    b3: "his",
    c3: "your",
    d3: "their",

    title4: "Reflexive Pronouns",
    text4: "Reflexive pronouns refer back to the subject. Example: 'He washes himself'.",
    q4: "What is the reflexive pronoun for 'he'?",
    a4: "himself",
    b4: "to him",
    c4: "his",
    d4: "him",

    title5: "Big Test",
    text5: "Test your knowledge of pronouns!",
    q5a: "Nominative of 'I'?",
    a5a: "I",
    b5a: "me",
    c5a: "to me",
    d5a: "mine",
    q5b: "Accusative of 'we'?",
    a5b: "us",
    b5b: "we",
    c5b: "our",
    d5b: "ours",
    q5c: "Possessive pronoun for 'you'?",
    a5c: "your",
    b5c: "you",
    c5c: "yours",
    d5c: "yourselves",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">👤</text></svg>,
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🔀</text></svg>,
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">📍</text></svg>,
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🪞</text></svg>,
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">⭐</text></svg>,
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "a5c" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function PronounExplorerK5({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
